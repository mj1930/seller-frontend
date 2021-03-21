import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-selling-info',
  templateUrl: './product-selling-info.component.html',
  styleUrls: ['./product-selling-info.component.css']
})
export class ProductSellingInfoComponent implements OnInit {

  addProductSellingInfoForm: FormGroup;
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
    this.addProductSellingInfoForm = this.fb.group({
      productPrice: [],
      unitCount: [0],
      mrp: [],
      id: [this.id]
    });
    this.userName = JSON.parse(localStorage.getItem('user')).name;
  }

  addProductSellingInfo() {
    this.productService.addProductSellingInfo(this.addProductSellingInfoForm.value).subscribe(data => {
      console.log(data);
      this.router.navigate(['/product/product-description', data['data']['_id']]);
    }, error => {
      console.log(error);
    })
  }

  resetForm() {
    this.addProductSellingInfoForm.reset();
    this.router.navigateByUrl('/seller/active-dashboard');
  }

}
