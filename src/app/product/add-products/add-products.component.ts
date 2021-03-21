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
      limit: 100
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
      limit: 100,
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
      this.router.navigate(['/product/product-variation', data['data']['_id']]);
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

}
