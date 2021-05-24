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

  getUserDetails() {
    return this.http.get('users/get-user-details');
  }

  getOrder(req) {
    return this.http.post('orders/list-orders', req);
  }

  updateStatus(reqBody) {
    return this.http.post('orders/update-order', reqBody);
  }

  getSortOrders(reqBody) {
    return this.http.post('orders/sort-order', reqBody);
  }
  
  getOrdersByStatus(reqBody) {
    return this.http.post('orders/filter-orders', reqBody);
  }

  searchProducts(reqBody) {
    return this.http.post('orders/search-product', reqBody);
  }

  searchProductsById(reqBody) {
    return this.http.post('orders/search-product-id', reqBody);
  }

  getDataByDate(reqBody) {
    return this.http.post('orders/get-orders-by-date', reqBody);
  }
  
  verifyStorename(reqBody) {
    return this.http.post('store/verify-storename', reqBody);
  }

  addProductImages(req) {
    return this.http.post('store/add-gst-images', req);
  }
  
  addBankImage(req) {
    return this.http.post('store/add-bank-image', req);
  }

  getInvoiceDetails(id) {
    return this.http.get(`orders/print-invoice/${id}`);
  }
}
