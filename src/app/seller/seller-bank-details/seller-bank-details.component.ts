import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { SellerService } from '../seller.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-seller-bank-details',
  templateUrl: './seller-bank-details.component.html',
  styleUrls: ['./seller-bank-details.component.css']
})
export class SellerBankDetailsComponent implements OnInit {
  sellerBankDetailsForm: FormGroup;
  sellerFormAttempt: boolean;
  bankFile;

  constructor(private fb: FormBuilder, private sellerService: SellerService, private router: Router) { }

  ngOnInit(): void {
    this.sellerBankDetailsForm = this.fb.group({
      accountNumber: [null, [Validators.required]],
      accountName: ['', [Validators.required]],
      ifscCode: ['', [Validators.required]]
    });
    if (localStorage.getItem('seller-bank-details')) {
      this.sellerBankDetailsForm.setValue(JSON.parse(localStorage.getItem('seller-bank-details')));
    }
  }

  submitSellerBankDetailsForm(valid) {
    this.sellerFormAttempt = true;
    if (!valid) {
      return;
    }
    localStorage.setItem('seller-bank-details', JSON.stringify(this.sellerBankDetailsForm.value));
    const gstUrl = JSON.parse(localStorage.getItem('seller-uploaded-file'))[0];
    let gstFile;
    fetch(gstUrl)
      .then(res => res.blob())
      .then(blob => {
        gstFile = new File([blob], "Gst")
      })

    const panUrl = JSON.parse(localStorage.getItem('seller-uploaded-file'))[1];
    let panFile;
    fetch(panUrl)
      .then(res => res.blob())
      .then(blob => {
        panFile = new File([blob], "Pan")
      })

    let reqData = {
      accountNumber: this.sellerBankDetailsForm.controls['accountNumber'].value,
      accountName: this.sellerBankDetailsForm.controls['accountName'].value,
      ifscCode: this.sellerBankDetailsForm.controls['ifscCode'].value,
    }
    this.sellerService.addSellerBankDetails(reqData).subscribe(data => {
      this.router.navigateByUrl('/seller/active-dashboard');
      this.addBankImage();
    }, error => {
      console.log(error);
    })
  }

  addBankImage() {
    let formData = new FormData();
    formData.append("file", this.bankFile);
    this.sellerService.addBankImage(formData).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  fileUpload(event) {
    this.bankFile = event.target.files[0];
  }



}
