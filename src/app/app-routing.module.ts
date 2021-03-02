import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ManageInventoryComponent } from './manage-inventory/manage-inventory.component';
import { SellerActiveDashboardComponent } from './seller-active-dashboard/seller-active-dashboard.component';
import { SellerEmailVerifiedComponent } from './seller-email-verified/seller-email-verified.component';
import { SellerListingComponent } from './seller-listing/seller-listing.component';
import { SellerProductListingComponent } from './seller-product-listing/seller-product-listing.component';
import { SellerProfilePageComponent } from './seller-profile-page/seller-profile-page.component';
import { SellerBankDetailsComponent } from './seller/seller-bank-details/seller-bank-details.component';
import { SellerDashboardComponent } from './seller/seller-dashboard/seller-dashboard.component';
import { SellerGstinDetailsComponent } from './seller/seller-gstin-details/seller-gstin-details.component';
import { SellerWelcomePageComponent } from './seller/seller-welcome-page/seller-welcome-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/register'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'seller-welcome', component: SellerWelcomePageComponent},
  {path: 'seller-gst', component: SellerGstinDetailsComponent},
  {path: 'seller-bank-details', component: SellerBankDetailsComponent},
  {path: 'seller-dashboard', component: SellerDashboardComponent},
  {path: 'manage-inventory', component: ManageInventoryComponent},
  {path: 'add-products', component: AddProductsComponent},
  {path: 'verify-email', component: SellerEmailVerifiedComponent},
  {path: 'seller-listing', component: SellerListingComponent},
  {path: 'seller-product-listing', component: SellerProductListingComponent},
  {path: 'seller-profile', component: SellerProfilePageComponent},



  {path: 'seller-active-dashboard', component: SellerActiveDashboardComponent},
  {path: '**', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
