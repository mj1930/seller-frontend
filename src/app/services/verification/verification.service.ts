import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VerificationService {

  constructor(private http: HttpClient) { }

  sendVerificationEmail(req) {
    return this.http.post('verify/send-email-verification', req);
  }

  verifyEmail(req) {
    return this.http.post('verify/verify-email', req);
  }
}
