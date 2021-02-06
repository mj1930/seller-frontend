import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SellerWelcomePageComponent } from './seller/seller-welcome-page/seller-welcome-page.component';
import { SellerGstinDetailsComponent } from './seller/seller-gstin-details/seller-gstin-details.component';
import { SellerBankDetailsComponent } from './seller/seller-bank-details/seller-bank-details.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AuthService } from './services/auth/auth.service';
import { HttpClientModule } from "@angular/common/http";
import { SellerService } from './services/seller/seller.service';
import { httpInterceptorProviders } from './http-interceptor';
import { SellerDashboardComponent } from './seller/seller-dashboard/seller-dashboard.component';
import { SellerActiveDashboardComponent } from './seller-active-dashboard/seller-active-dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SellerWelcomePageComponent,
    SellerGstinDetailsComponent,
    SellerBankDetailsComponent,
    SellerDashboardComponent,
    SellerActiveDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, SellerService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
