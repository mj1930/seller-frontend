import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import { VerificationService } from '../verification.service';

@Component({
  selector: 'app-seller-profile-page',
  templateUrl: './seller-profile-page.component.html',
  styleUrls: ['./seller-profile-page.component.css']
})
export class SellerProfilePageComponent implements OnInit {
  user:any;
  mailVerified = false;
  userName: any;
  constructor(
    private sellerService: SellerService,
    private verificationService: VerificationService
    ) { }

  ngOnInit(): void {
    this.mailVerified = localStorage.getItem('verified') ? Boolean(localStorage.getItem('verified')): false;
    this.userName = JSON.parse(localStorage.getItem('user')).name;
    this.getUserDetails();
  }

  sentMail = false;
  sendVerificationEmail() {
    let reqBody = {
      email: JSON.parse(localStorage.getItem('user')).email
    } ;
    this.sentMail = true;
    this.verificationService.sendVerificationEmail(reqBody).subscribe(data => {

      console.log(data);
    }, error => {
      console.log(error);
    })
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
