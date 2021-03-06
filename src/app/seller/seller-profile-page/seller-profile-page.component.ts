import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-seller-profile-page',
  templateUrl: './seller-profile-page.component.html',
  styleUrls: ['./seller-profile-page.component.css']
})
export class SellerProfilePageComponent implements OnInit {
  user:any;

  constructor(private sellerService: SellerService) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails() {
  this.sellerService.getUserDetails().subscribe(data => {
    console.log(data);
    this.user = data['data'];
  }, error => {
    console.log(error);
  })
 }  



}
