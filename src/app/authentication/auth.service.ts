import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public isAuthenticated(): boolean {
    const token = sessionStorage.getItem('token');
    return token ? true : false;
  }

  register(req) {
    return this.http.post('users/signup', req);
  }

  login(req) {
    return this.http.post('users/login', req);
  }

  generateOtp(req) {
    return this.http.post('verify/generate-otp', req);
  }
}
