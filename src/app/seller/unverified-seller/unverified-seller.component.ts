import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unverified-seller',
  templateUrl: './unverified-seller.component.html',
  styleUrls: ['./unverified-seller.component.css']
})
export class UnverifiedSellerComponent implements OnInit {

  userName: string = '';
  isSellerVerified: boolean = false;
  constructor() { }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('user'));
    this.userName = user.name;
    this.isSellerVerified = user.isSellerVerified;
  }

}
