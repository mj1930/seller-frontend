import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { ProductNavTabsComponent } from './components/product-nav-tabs/product-nav-tabs.component';


@NgModule({
  declarations: [SideNavigationComponent, ProductNavTabsComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports : [SideNavigationComponent, ProductNavTabsComponent]
})
export class SharedModule { }
