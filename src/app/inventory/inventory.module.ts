import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageInventoryComponent } from './manage-inventory/manage-inventory.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InventoryRoutingModule } from './inventory-routing.module';
import { httpInterceptorProviders } from '../http-interceptor';
import { SharedModule } from '../shared/shared.module';
import { ProductDescriptionComponent } from './product-description/product-description.component';


@NgModule({
  declarations: [ManageInventoryComponent, ProductDescriptionComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    MDBBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [httpInterceptorProviders]
})
export class InventoryModule { }
