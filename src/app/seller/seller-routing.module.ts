import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerActiveDashboardComponent } from './seller-active-dashboard/seller-active-dashboard.component';
import { SellerBankDetailsComponent } from './seller-bank-details/seller-bank-details.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { SellerEmailVerifiedComponent } from './seller-email-verified/seller-email-verified.component';
import { SellerGstinDetailsComponent } from './seller-gstin-details/seller-gstin-details.component';
import { SellerWelcomePageComponent } from './seller-welcome-page/seller-welcome-page.component';

const routes: Routes = [
  {path: '', component: SellerWelcomePageComponent},
  {path: 'gst', component: SellerGstinDetailsComponent},
  {path: 'bank-details', component: SellerBankDetailsComponent},
  {path: 'dashboard', component: SellerDashboardComponent},
  {path: 'email-verification', component: SellerEmailVerifiedComponent},
  {path: 'active-dashboard', component: SellerActiveDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
