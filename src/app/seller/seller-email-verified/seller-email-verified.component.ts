import { Component, OnInit } from '@angular/core';
import { VerificationService } from '../verification.service';

@Component({
  selector: 'app-seller-email-verified',
  templateUrl: './seller-email-verified.component.html',
  styleUrls: ['./seller-email-verified.component.css']
})
export class SellerEmailVerifiedComponent implements OnInit {

  userName = '';

  constructor(private verificationService: VerificationService) { }

  ngOnInit(): void {
    this.verificationService.mailVerified.next(true);
    localStorage.setItem('verified', 'true');
//this.verifiyEmail();
  }

  verifiyEmail() {
    let reqBody = {
      email: JSON.parse(localStorage.getItem('user')).email
    } 
    localStorage.setItem('verified', 'true');
    this.verificationService.mailVerified.next(true);
    this.verificationService.verifyEmail(reqBody).subscribe(data => {

      console.log('asdasdasd',data);
    }, error => {
      console.log(error);
    })
  }

}
