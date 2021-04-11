import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductsComponent } from './add-products/add-products.component';
import { ProductService } from './product.service';

import { ProductRoutingModule } from './product-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from '../http-interceptor';
import { SharedModule } from '../shared/shared.module';
import { ProductVariationComponent } from './product-variation/product-variation.component';
import { ProductSellingInfoComponent } from './product-selling-info/product-selling-info.component';
import { ProductImagesComponent } from './product-images/product-images.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductNavTabsComponent } from '../product/product-nav-tabs/product-nav-tabs.component';


@NgModule({
  declarations: [AddProductsComponent, ProductNavTabsComponent, ProductVariationComponent, ProductSellingInfoComponent, ProductImagesComponent, ProductDescriptionComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers:[ProductService, httpInterceptorProviders]
})
export class ProductModule { }
