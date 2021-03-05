import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  constructor(private http: HttpClient) { }

  addSellerAddressDetails(req) {
    return this.http.post('store/add-seller-address-details', req);
  }

  addSellerBankDetails(req) {
    return this.http.post('store/add-seller-bank-details', req);
  }

  addSellerGstDetails(req) {
    return this.http.post('store/add-seller-gst-details', req);
  }

}
