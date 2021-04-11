import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  addProductForm: FormGroup;
  showSubMenu = false;
  userName = '';
  categories = [];
  subCategories = [];
  productSearchSubscription: Subscription;
  searchResult = [];
  searchText = "";
  showAddProductSection = false;
  productId = '';

  constructor(private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.addProductForm = this.fb.group({
      barcode: [],
      itemName: [],
      city: [],
      countryOfOrigin: [],
      brand: [],
      availableUnits: [],
      dimensions: this.fb.group({
        length: '',
        width: '',
        height: ''
      }),
      weight: [],
      categoryId: [],
      subCategoryId: []
    });
    this.userName = JSON.parse(localStorage.getItem('user')).name;
    this.getCategories();
  }

  getCategories() {
    let reqBody = {
      skip: 0,
      limit: 10000
    };
    this.productService.getCategories(reqBody).subscribe(data => {
      console.log(data);
      this.categories = data['data'];
    }, error => {
      console.log(error);
    })
  }

  getSubCategories() {
    let reqBody = {
      skip: 0,
      limit: 10000,
      categoryId: this.addProductForm.controls['categoryId'].value
    };
    this.productService.getSubCategories(reqBody).subscribe(data => {
      this.subCategories = data['data'];
    }, error => {
      console.log(error);
    })
  }

  addProduct(valid) {
    if (!valid) {
      return;
    }
    this.productService.addProduct(this.addProductForm.value).subscribe(data => {
      console.log(data);
      this.productId = data['data']['_id'];
      this.router.navigate(['/product/product-description', data['data']['_id']]);
    }, error => {
      console.log(error);
    })
  }

  resetForm() {
    this.addProductForm.reset();
    this.router.navigateByUrl('/seller/active-dashboard');
  }

  searchProduct() {
    if(this.productSearchSubscription) {
      this.productSearchSubscription.unsubscribe();
    }
    this.searchResult = [];

    if(this.searchText){
    this.productSearchSubscription = this.productService.searchProduct(this.searchText).subscribe(data => {
      console.log(data);
      this.searchResult=data['data'];
    }, error => {
      console.log(error);
    });
  }
  }

  setProductValues(product) {
    // this.addProductForm['controls'].barcode.setValue(product.barcode);
    // this.addProductForm['controls'].itemName.setValue(product.itemName);
    // this.addProductForm['controls'].city.setValue(product.city);
    // this.addProductForm['controls'].countryOfOrigin.setValue(product.countryOfOrigin);
    // this.addProductForm['controls'].brand.setValue(product.brand);
    // this.addProductForm['controls'].availableUnits.setValue(product.availableUnits)
    // this.addProductForm['controls'].dimensions.setValue(product.dimensions);
    // this.addProductForm['controls'].weight.setValue(product.weight);
    // this.addProductForm['controls'].categoryId.setValue(product.categoryId);
    // this.addProductForm['controls'].subCategoryId.setValue(product.subCategoryId);
    // this.showAddProductSection = true;
  }

}
