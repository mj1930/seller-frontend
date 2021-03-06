import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerActiveDashboardComponent } from './seller-active-dashboard/seller-active-dashboard.component';
import { SellerBankDetailsComponent } from './seller-bank-details/seller-bank-details.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { SellerEmailVerifiedComponent } from './seller-email-verified/seller-email-verified.component';
import { SellerGstinDetailsComponent } from './seller-gstin-details/seller-gstin-details.component';
import { SellerWelcomePageComponent } from './seller-welcome-page/seller-welcome-page.component';
import { SellerRoutingModule } from './seller-routing.module';
import { SellerService } from './seller.service';
import { VerificationService } from './verification.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from '../http-interceptor';


@NgModule({
  declarations: [
    SellerActiveDashboardComponent,
    SellerBankDetailsComponent,
    SellerDashboardComponent,
    SellerEmailVerifiedComponent,
    SellerGstinDetailsComponent,
    SellerWelcomePageComponent
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
    MDBBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SellerService, VerificationService, httpInterceptorProviders]
})
export class SellerModule { }
