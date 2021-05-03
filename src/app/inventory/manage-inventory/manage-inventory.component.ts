import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { ProductService } from '../../product/product.service';
import { ToastService } from "src/app/services/shared/toast.service";

@Component({
  selector: 'app-manage-inventory',
  templateUrl: './manage-inventory.component.html',
  styleUrls: ['./manage-inventory.component.css']
})
export class ManageInventoryComponent implements OnInit {

  products = [];
  showSubMenu = false;
  userName = '';

  constructor(
    private productService: ProductService, 
    private router: Router,
    private toastService: ToastService) { }

  ngOnInit(): void {
    this.getProducts();
this.userName = JSON.parse(localStorage.getItem('user')).name;

  }

  getProducts() {
    let reqBody = {
      skip: 0,
      limit: 100
    };
    this.productService.getProducts(reqBody).subscribe(data => {
      this.products = data["data"];
      console.log(data);
    }, error => {
      console.log(error);
    })
  }

  goToProdDescPage(id) {
    this.router.navigate(['/inventory/product-description', id])
  }

  editProduct(product_dtl) {
    localStorage.setItem('product', JSON.stringify(product_dtl));
    this.router.navigate(['/product/add-products']);
  }

  updatePrice(product_dtl) {
    product_dtl.productId = product_dtl._id;
    delete product_dtl._id;
    delete product_dtl.userId;
    delete product_dtl.productImg;
    delete product_dtl.unitCount;
    delete product_dtl.isApproved;
    delete product_dtl.feedback;
    delete product_dtl.isDeleted;
    delete product_dtl.createdAt;
    delete product_dtl.updatedAt;
    delete product_dtl.__v;
    this.productService.editProduct(product_dtl).subscribe(
      data => {
        this.toastService.openSnackbar("Price Updated succeefully!!");
      },
      error => {
        console.log(error);
      });
  }
}
