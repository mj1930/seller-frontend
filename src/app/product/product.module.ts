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


@NgModule({
  declarations: [AddProductsComponent],
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
