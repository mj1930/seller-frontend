import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  id: string = '';
  product: any;

  constructor(private sellerService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(item => {
      this.id = item.id;
    });
    this.getProductDetails();
  }

  getProductDetails() {
    this.sellerService.getProductDetails(this.id).subscribe(data => {
      this.product = data['data'];
    }, error => {
      console.log(error);
    })
  }

  goToProductListingPage() {
    this.router.navigateByUrl('/inventory');
  }


}
