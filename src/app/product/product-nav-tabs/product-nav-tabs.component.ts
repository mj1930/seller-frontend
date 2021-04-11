import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-nav-tabs',
  templateUrl: './product-nav-tabs.component.html',
  styleUrls: ['./product-nav-tabs.component.css']
})
export class ProductNavTabsComponent implements OnInit {

  @Input() productId;

  constructor() { }

  ngOnInit(): void {
  
  }

}
