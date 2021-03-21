import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../shared/services/auth-guard/auth-guard.service';
import { AddProductsComponent } from './add-products/add-products.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductImagesComponent } from './product-images/product-images.component';
import { ProductSellingInfoComponent } from './product-selling-info/product-selling-info.component';
import { ProductVariationComponent } from './product-variation/product-variation.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: '/add-products'},
  {path: 'add-products', component: AddProductsComponent},
  {path: 'product-description/:id', component: ProductDescriptionComponent},
  {path: 'product-images/:id', component: ProductImagesComponent},
  {path: 'product-selling-info/:id', component: ProductSellingInfoComponent},
  {path: 'product-variation/:id', component: ProductVariationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
