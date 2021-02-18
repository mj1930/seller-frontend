import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ProductService } from '../services/product/product.service';
@Component({
  selector: 'app-manage-inventory',
  templateUrl: './manage-inventory.component.html',
  styleUrls: ['./manage-inventory.component.css']
})
export class ManageInventoryComponent implements OnInit {

  products = [];
  showSubMenu = false;
  userName = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
this.userName = JSON.parse(localStorage.getItem('user')).name;

  }

  getProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data["data"];
      console.log(data);
    }, error => {
      console.log(error);
    })
  }
}
