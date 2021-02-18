import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  constructor(private http: HttpClient) { }

  addSeller(req) {
    return this.http.post('store/add-seller-details', req);
  }

}
