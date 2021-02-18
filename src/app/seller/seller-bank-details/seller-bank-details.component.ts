import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { SellerService } from '../../services/seller/seller.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-seller-bank-details',
  templateUrl: './seller-bank-details.component.html',
  styleUrls: ['./seller-bank-details.component.css']
})
export class SellerBankDetailsComponent implements OnInit {
  sellerBankDetailsForm:FormGroup;
  sellerFormAttempt: boolean;

  constructor(private fb: FormBuilder, private sellerService: SellerService, private router: Router) { }

  ngOnInit(): void {
    this.sellerBankDetailsForm = this.fb.group({
      accountNumber: [null, [Validators.required]],
      accountName: ['', [Validators.required]],
      ifscCode: ['', [Validators.required]]
      //storename: ['', [Validators.required]],
    });
if(localStorage.getItem('seller-bank-details')) {
this.sellerBankDetailsForm.setValue(JSON.parse(localStorage.getItem('seller-bank-details')));
}
    //localStorage.setItem('seller-gst-details', JSON.stringify(this.sellerGstForm.value));
  }

  submitSellerBankDetailsForm(valid) {
    console.log('adsasdsa', this.sellerBankDetailsForm.value,'valid', valid)

    this.sellerFormAttempt = true;
    if (!valid) {
      return;
    }

    localStorage.setItem('seller-bank-details', JSON.stringify(this.sellerBankDetailsForm.value));
    let welcomeDetails = JSON.parse(localStorage.getItem('seller-welcome-details'));
    let gstDetails = JSON.parse(localStorage.getItem('seller-gst-details'));
    let bankDetails = JSON.parse(localStorage.getItem('seller-bank-details'));
    const gstUrl = JSON.parse(localStorage.getItem('seller-uploaded-file'))[0];
    let gstFile;
    fetch(gstUrl)
      .then(res => res.blob())
      .then(blob => {
        gstFile = new File([blob], "Gst")
        //console.log('qqqqqq', gstFile)
      })

      const panUrl = JSON.parse(localStorage.getItem('seller-uploaded-file'))[1];
      let panFile;
    fetch(panUrl)
      .then(res => res.blob())
      .then(blob => {
        panFile = new File([blob], "Pan")
      })

    let reqData = {
      name: JSON.parse(localStorage.getItem('user')).name,
      address: welcomeDetails.address,
      hasGST: gstDetails.hasGST	,
      taxState: gstDetails.taxState,	
      gstin: gstDetails.gstin	,
      pan: gstDetails.pan	,
      accountNumber: this.sellerBankDetailsForm.controls['accountNumber'].value,	
      accountName: this.sellerBankDetailsForm.controls['accountName'].value	,
      ifscCode: this.sellerBankDetailsForm.controls['ifscCode'].value,	
      storename: welcomeDetails.storeName	
    }
    this.sellerService.addSeller(reqData).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/seller-active-dashboard');
    }, error => {
      console.log(error);
    })
   // this.router.navigateByUrl('/seller-bank-details');
  }

  fileUpload(event) {
console.log('sfsfsdf', event.target.files)
  }

  

}
