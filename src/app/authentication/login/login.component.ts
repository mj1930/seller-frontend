import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { ToastService } from "src/app/services/shared/toast.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginAttempt: boolean;
  isSellerVerified: boolean = false;
  loginError = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ["", [Validators.email, Validators.required]],
      password: ["", [Validators.required]],
      rememberMe: [false]
    });
    if (JSON.parse(localStorage.getItem("remember"))) {
      this.loginForm.controls["rememberMe"].setValue(true);
      this.loginForm.controls["email"].setValue(localStorage.getItem("email"));
      this.loginForm.controls["password"].setValue(
        localStorage.getItem("password")
      );
    }
  }

  login(valid) {
    this.loginAttempt = true;
    if (!valid) {
      return;
    }
    let reqData = {
      email: this.loginForm.controls["email"].value,
      password: this.loginForm.controls["password"].value
    };

    this.authService.login(reqData).subscribe(
      (data: any) => {
        if (data.code === 400) {
          console.log("Error", data.message);
          const errorMessage = data.message
            ? data.message
            : "Unknown Error Occured!";
          this.toastService.openSnackbar(errorMessage);
          return;
        }
        if (data.code === 200) {
          sessionStorage.setItem("token", data["accessToken"]);
          localStorage.setItem("user", JSON.stringify(data["data"]));
          if (this.loginForm.controls["rememberMe"].value) {
            localStorage.setItem("remember", JSON.stringify(true));
            localStorage.setItem(
              "email",
              this.loginForm.controls["email"].value
            );
            localStorage.setItem(
              "password",
              this.loginForm.controls["password"].value
            );
          } else {
            localStorage.setItem("remember", JSON.stringify(false));
            localStorage.setItem("email", "");
            localStorage.setItem("password", "");
          }
          let userData = JSON.parse(localStorage.getItem("user"));
          this.isSellerVerified = userData.isVerified;
          if (userData) {
            if (this.isSellerVerified  && userData.accountNumber)
              this.router.navigateByUrl("/seller/active-dashboard");
            else
              this.router.navigateByUrl("/seller/unverified-seller");
          }
          else this.router.navigateByUrl("/seller");
        } else {
          this.loginError = data["messgae"];
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
