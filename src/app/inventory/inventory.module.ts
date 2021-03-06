import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageInventoryComponent } from './manage-inventory/manage-inventory.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InventoryRoutingModule } from './inventory-routing.module';
import { httpInterceptorProviders } from '../http-interceptor';


@NgModule({
  declarations: [ManageInventoryComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    MDBBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders]
})
export class InventoryModule { }
