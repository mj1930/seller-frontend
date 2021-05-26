import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { SellerService } from '../seller.service';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
@Component({
  selector: 'app-seller-welcome-page',
  templateUrl: './seller-welcome-page.component.html',
  styleUrls: ['./seller-welcome-page.component.css']
})
export class SellerWelcomePageComponent implements OnInit {

  sellerForm: FormGroup;
  sellerFormAttempt: boolean;
  code;
  address;
  hasStoreName: boolean = false;

  constructor(private fb: FormBuilder, private sellerService: SellerService, private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.sellerForm = this.fb.group({
      storename: ['', [Validators.required]],
      address: this.fb.group({
        pincode: [''],
        address1: ['', [Validators.required]],
        address2: ['',],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        country: ['India']
      })
    });
    if (localStorage.getItem('seller-welcome-details')) {
      this.sellerForm.setValue(JSON.parse(localStorage.getItem('seller-welcome-details')));
    }
    // localStorage.setItem('seller-welcome-details', JSON.stringify(this.sellerForm.value));
  }

  addSeller(valid) {
    this.sellerFormAttempt = true;
    if (!valid) {
      return;
    }
    if (this.hasStoreName) {
      return;
    }
    localStorage.setItem('seller-welcome-details', JSON.stringify(this.sellerForm.value))
    this.sellerService.addSellerAddressDetails(this.sellerForm.value).subscribe(data => {
      this.router.navigateByUrl('/seller/gst');
    }, error => {
      console.log(error);
    })
  }

  searchCode() {
    this.CallGeoAPI().subscribe(res => {
      console.log(res);
      const result = res[0];
      this.address = result.formatted_address;

    })

  }
  CallGeoAPI() {
    let apiURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${this.code}&key=AIzaSyCFPRapf51Ws6ELOHUpYPpvofDeen4EZsI`;
    return this.http.get(apiURL).pipe(map((response) => {
      return response;
    }))
  }

  checkStoreName() {
    let storeName = this.sellerForm.controls['storename'].value;
    this.sellerService.verifyStorename({storeName}).subscribe((resp: any) => {
      if (resp.code === 200) {
        if (resp.count) {
          this.hasStoreName = true;
        }
      }
    })
  }
}
