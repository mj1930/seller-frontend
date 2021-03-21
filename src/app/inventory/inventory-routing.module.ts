import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../shared/services/auth-guard/auth-guard.service';
import { ManageInventoryComponent } from './manage-inventory/manage-inventory.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';

const routes: Routes = [
  {path: '', component: ManageInventoryComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
