import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { SellerService } from '../seller.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-seller-gstin-details',
  templateUrl: './seller-gstin-details.component.html',
  styleUrls: ['./seller-gstin-details.component.css']
})
export class SellerGstinDetailsComponent implements OnInit {

  sellerGstForm: FormGroup;
  sellerFormAttempt: boolean;
  imageAttachemtsToSend: any = [];
  sellerId: any;

  constructor(private fb: FormBuilder, private sellerService: SellerService, private router: Router) { }

  ngOnInit(): void {
    this.sellerGstForm = this.fb.group({
      name: JSON.parse(localStorage.getItem('user')).name,
      hasGST: ['true', [Validators.required]],
      taxState: ['', [Validators.required]],
      gstin: ['', [Validators.required]],
      pan: ['', [Validators.required]]
    });
    this.sellerId = JSON.parse(localStorage.getItem('user'))._id;
    if (localStorage.getItem('seller-gst-details')) {
      this.sellerGstForm.setValue(JSON.parse(localStorage.getItem('seller-gst-details')));
    }
    //localStorage.setItem('seller-gst-details', JSON.stringify(this.sellerGstForm.value));
  }

  submitSellerGstForm(valid) {
    this.sellerFormAttempt = true;
    if (!valid) {
      return;
    }
    const files = [];
    files.push(this.gstFile, this.panFile)
    localStorage.setItem('seller-gst-details', JSON.stringify(this.sellerGstForm.value));
    localStorage.setItem('seller-uploaded-file', JSON.stringify(files));
    this.sellerService.addSellerGstDetails(this.sellerGstForm.value).subscribe(data => {
      this.addImages();
      this.router.navigateByUrl('/seller/bank-details');
    }, error => {
      console.log(error);
    })

    // this.router.navigateByUrl('/seller/bank-details');
  }

  gstFile;
  panFile: any;

  gstFileUpload(event) {
    this.imageAttachemtsToSend.push(event.target.files[0])
    this.getBase64(event.target.files[0]).then(data => {
      this.gstFile = data;
    });
  }

  panFileUpload(event) {
    this.imageAttachemtsToSend.push(event.target.files[0])
    this.getBase64(event.target.files[0]).then(data => {
      this.panFile = data;
    });
  }

  addImages() {
    if (this.imageAttachemtsToSend?.length) {
      let formData = new FormData();
      Array.from(this.imageAttachemtsToSend).forEach((item: any) => {
        formData.append("files", item);
      });
      this.sellerService.addProductImages(formData).subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  // var file = document.querySelector('#files > input[type="file"]').files[0];
  // getBase64(file).then(
  //   data => console.log(data)
  // );

  ngDoCheck() {
    if (this.sellerGstForm.controls['hasGST'].value == 'true') {
      this.sellerGstForm.controls['gstin'].enable()
      this.sellerGstForm.controls['taxState'].enable()
      this.sellerGstForm.controls['pan'].enable()
    } else {
      this.sellerGstForm.controls['gstin'].disable()
      this.sellerGstForm.controls['taxState'].disable()
      this.sellerGstForm.controls['pan'].disable()
    }
  }

}
