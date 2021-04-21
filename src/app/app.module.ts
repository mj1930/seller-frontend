import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
// import { RegisterComponent } from './authentication/register/register.component';
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
// import { AuthService } from './authentication/auth.service';
import { HttpClientModule } from "@angular/common/http";
// import { SellerService } from './seller/seller.service';
import { httpInterceptorProviders } from "./http-interceptor";
// import { ProductService } from './product/product.service';

import { SellerListingComponent } from "./seller/seller-listing/seller-listing.component";
import { SellerProductListingComponent } from "./seller/seller-product-listing/seller-product-listing.component";
import { SellerProfilePageComponent } from "./seller/seller-profile-page/seller-profile-page.component";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@NgModule({
  declarations: [
    AppComponent
    //RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
