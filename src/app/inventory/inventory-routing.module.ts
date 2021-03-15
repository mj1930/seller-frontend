import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageInventoryComponent } from './manage-inventory/manage-inventory.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';

const routes: Routes = [
  {path: '', component: ManageInventoryComponent},
  {path: 'product-description', component: ProductDescriptionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
