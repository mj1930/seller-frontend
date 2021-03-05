import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
// import { AddProductsComponent } from './add-products/add-products.component';
// import { LoginComponent } from './auth1/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
// import { ManageInventoryComponent } from './inventory/manage-inventory/manage-inventory.component';
// import { SellerActiveDashboardComponent } from './seller-active-dashboard/seller-active-dashboard.component';
// import { SellerEmailVerifiedComponent } from './seller1/seller-email-verified/seller-email-verified.component';
// import { SellerBankDetailsComponent } from './seller1/seller-bank-details/seller-bank-details.component';
// import { SellerDashboardComponent } from './seller1/seller-dashboard/seller-dashboard.component';
// import { SellerGstinDetailsComponent } from './seller1/seller-gstin-details/seller-gstin-details.component';
// import { SellerWelcomePageComponent } from './seller1/seller-welcome-page/seller-welcome-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/auth/register'},
  // {path: 'login', component: LoginComponent},
  // {path: 'register', component: RegisterComponent},
   {path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(module => module.AuthenticationModule)},
   {path: 'product', loadChildren: () => import('./product/product.module').then(module => module.ProductModule)},
   {path: 'inventory', loadChildren: () => import('./inventory/inventory.module').then(module => module.InventoryModule)},
   {path: 'seller', loadChildren: () => import('./seller/seller.module').then(module => module.SellerModule)},
  {path: '**', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
