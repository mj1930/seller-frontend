import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: '/add-products'},
  {path: 'add-products', component: AddProductsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
