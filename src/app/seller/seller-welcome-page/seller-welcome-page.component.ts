import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { SellerService } from '../../services/seller/seller.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-seller-welcome-page',
  templateUrl: './seller-welcome-page.component.html',
  styleUrls: ['./seller-welcome-page.component.css']
})
export class SellerWelcomePageComponent implements OnInit {

  sellerForm:FormGroup;
  sellerFormAttempt: boolean;

  constructor(private fb: FormBuilder, private sellerService: SellerService, private router: Router) { }

  ngOnInit(): void {
    this.sellerForm = this.fb.group({
      name: ['', [Validators.required]],
      address: this.fb.group({
        pincode: [''],
        address1: ['', [Validators.required]],
        address2: ['', [Validators.required]],
        city: [''],
        state: [''],
        country: ['India']
      })
    });
  }

  addSeller(valid) {
    this.sellerFormAttempt = true;
    if (!valid) {
      return;
    }

    console.log('adsasdsa', this.sellerForm.value)

    this.sellerService.addSeller(this.sellerForm.value).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/seller-gst');
    }, error => {
      console.log(error);
    })
  }

}
