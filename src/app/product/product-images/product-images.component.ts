import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.css']
})
export class ProductImagesComponent implements OnInit {

  files = [];
  userName = '';
  id: string;

  constructor(private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(item => {
      this.id = item.id;
    });
    this.userName = JSON.parse(localStorage.getItem('user')).name;
  }

  uploadFiles(event) {
    console.log(event)
    this.files = event.target.files;
  }

  addProductImages() {
    let formData =  new FormData();
    Array.from(this.files).forEach(item => {
      formData.append('productImage', item);
    });
    formData.append('id', this.id);
    this.productService.addProductImages(formData).subscribe(data => {
      console.log(data);
      this.router.navigate(['/product/product-selling-info', data['data']['_id']]);
    }, error => {
      console.log(error);
    })
  }

  resetForm() {
    this.router.navigateByUrl('/seller/active-dashboard');
  }

}
