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
        pan: ['', [Validators.required]],
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

    console.log('adsasdsa', this.sellerGstForm.value)
    localStorage.setItem('seller-gst-details', JSON.stringify(this.sellerGstForm.value))
    this.router.navigateByUrl('/seller-bank-details');
  }

}
