import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SellerWelcomePageComponent } from './seller-welcome-page/seller-welcome-page.component';
import { SellerGstinDetailsComponent } from './seller-gstin-details/seller-gstin-details.component';
import { SellerBankDetailsComponent } from './seller-bank-details/seller-bank-details.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SellerWelcomePageComponent,
    SellerGstinDetailsComponent,
    SellerBankDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
