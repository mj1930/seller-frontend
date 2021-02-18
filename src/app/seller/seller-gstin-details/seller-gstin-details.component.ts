import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { SellerService } from '../../services/seller/seller.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-seller-gstin-details',
  templateUrl: './seller-gstin-details.component.html',
  styleUrls: ['./seller-gstin-details.component.css']
})
export class SellerGstinDetailsComponent implements OnInit {

  sellerGstForm:FormGroup;
  sellerFormAttempt: boolean;

  constructor(private fb: FormBuilder, private sellerService: SellerService, private router: Router) { }

  ngOnInit(): void {
    this.sellerGstForm = this.fb.group({
      hasGST: [null, [Validators.required]],
        taxState: ['', [Validators.required]],
        gstin: ['', [Validators.required]],
        pan: ['', [Validators.required]]
    });
if(localStorage.getItem('seller-gst-details')) {
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
console.log('fielssss', files)
    localStorage.setItem('seller-gst-details', JSON.stringify(this.sellerGstForm.value));
    localStorage.setItem('seller-uploaded-file', JSON.stringify(files));

    this.router.navigateByUrl('/seller-bank-details');
  }

  gstFile;
  panFile: any;

  gstFileUpload(event) {
console.log('gstststs', event.target.files)
console.log('asdasd',this.getBase64(event.target.files[0]));

this.getBase64(event.target.files[0]).then(data => {
  console.log('dddddddddddd',data)
  this.gstFile = data;
});
//this.gstFile = JSON.stringify(event.target.files[0]);
console.log('gstFile', this.gstFile)
// this.sellerGstForm.get('gstFile').setValue(event.target.files[0]);
  }

  panFileUpload(event) {
    console.log('pannn', event.target.files)
    this.getBase64(event.target.files[0]).then(data => {
      console.log('dddddddddddd',data)
      this.panFile = data;
    });
// this.panFile = event.target.files[0];
    
    // this.sellerGstForm.get('panFile').setValue(event.target.files[0]);

      }

//  getBase64(file) {
//         var reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onload = function () {
//           console.log(reader.result);
//           return JSON.stringify(reader.result);
//         };
//         reader.onerror = function (error) {
//           console.log('Error: ', error);
//         };
//      }

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

}
