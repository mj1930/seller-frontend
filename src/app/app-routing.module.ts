import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
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
  {path: '**', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
