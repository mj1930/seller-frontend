import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerificationService {

  constructor(private http: HttpClient) { }

  mailVerified: Subject<boolean> = new Subject();

  sendVerificationEmail(req) {
    return this.http.post('verify/send-email-verification', req);
  }

  verifyEmail(req) {
    return this.http.post('verify/verify-email', req);
  }
}
