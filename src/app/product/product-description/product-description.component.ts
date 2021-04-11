import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  addProductDescriptionForm: FormGroup;
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
    this.addProductDescriptionForm = this.fb.group({
      description: [],
      heading:[],
      id: [this.id]
    });
    this.userName = JSON.parse(localStorage.getItem('user')).name;
  }

  addProductDescription() {
    this.productService.addProductDescription(this.addProductDescriptionForm.value).subscribe(data => {
      console.log(data);
      // this.router.navigate(['/product/product-selling-info', data['data']['_id']]);
      this.router.navigate(['/product/product-images', data['data']['_id']]);

    }, error => {
      console.log(error);
    })
  }

  resetForm() {
    this.addProductDescriptionForm.reset();
    this.router.navigateByUrl('/seller/active-dashboard');
  }

}
