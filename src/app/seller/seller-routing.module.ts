import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../shared/services/auth-guard/auth-guard.service';
import { OrderListingComponent } from './order-listing/order-listing.component';
import { SellerActiveDashboardComponent } from './seller-active-dashboard/seller-active-dashboard.component';
import { SellerBankDetailsComponent } from './seller-bank-details/seller-bank-details.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { SellerEmailVerifiedComponent } from './seller-email-verified/seller-email-verified.component';
import { SellerGstinDetailsComponent } from './seller-gstin-details/seller-gstin-details.component';
import { SellerListingComponent } from './seller-listing/seller-listing.component';
import { SellerProductListingComponent } from './seller-product-listing/seller-product-listing.component';
import { SellerProfilePageComponent } from './seller-profile-page/seller-profile-page.component';
import { SellerWelcomePageComponent } from './seller-welcome-page/seller-welcome-page.component';


const routes: Routes = [
  {path: '', component: SellerWelcomePageComponent},
  {path: 'gst', component: SellerGstinDetailsComponent},
  {path: 'bank-details', component: SellerBankDetailsComponent},
  {path: 'dashboard', component: SellerDashboardComponent, canActivate: [AuthGuardService]},
  {path: 'email-verification', component: SellerEmailVerifiedComponent, canActivate: [AuthGuardService]},
  {path: 'active-dashboard', component: SellerActiveDashboardComponent, canActivate: [AuthGuardService]},
  {path: 'listing', component: SellerListingComponent, canActivate: [AuthGuardService]},
  {path: 'profile', component: SellerProfilePageComponent, canActivate: [AuthGuardService]},
  {path: 'product-listing', component: SellerProductListingComponent, canActivate: [AuthGuardService]},
  {path: 'order-listing', component: OrderListingComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
