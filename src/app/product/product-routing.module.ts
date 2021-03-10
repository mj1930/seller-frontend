import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../shared/services/auth-guard/auth-guard.service';
import { AddProductsComponent } from './add-products/add-products.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: '/add-products'},
  {path: 'add-products', component: AddProductsComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
