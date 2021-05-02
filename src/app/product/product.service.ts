import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  addProduct(req) {
    return this.http.post('products/v2/add-product', req);
  }

  editProduct(req) {
    return this.http.post('products/edit-product', req);
  }

  addProductVariation(req) {
    return this.http.post('products/add-product-variation', req);
  }

  addProductSellingInfo(req) {
    return this.http.post('products/add-product-selling-info', req);
  }

  addProductImages(req) {
    return this.http.post('products/add-product-images', req);
  }

  addProductDescription(req) {
    return this.http.post('products/add-product-desc-info', req);
  }

  getCategories(body) {
    return this.http.post('category/get-all-categories', body); 
  }

  getSubCategories(body) {
    return this.http.post('category/get-all-subcategories', body); 
  }

  getProducts(req) {
    return this.http.post('products/get-all-products', req);
  }

  searchProduct(term) {
    return this.http.get(`products/search-products?term=${term}`);
  }

  getProductDetails(id) {
    return this.http.get(`products/get-product-details/${id}`);
  }
}
