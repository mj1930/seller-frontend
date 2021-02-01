import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SellerBankDetailsComponent } from './seller-bank-details/seller-bank-details.component';
import { SellerGstinDetailsComponent } from './seller-gstin-details/seller-gstin-details.component';
import { SellerWelcomePageComponent } from './seller-welcome-page/seller-welcome-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/register'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'welcome', component: SellerWelcomePageComponent},
  {path: 'gst', component: SellerGstinDetailsComponent},
  {path: 'bank-details', component: SellerBankDetailsComponent},
  {path: '**', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
