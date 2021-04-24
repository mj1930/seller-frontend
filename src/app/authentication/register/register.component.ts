import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { ToastService } from "src/app/services/shared/toast.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitFormAttempt: boolean;
  mobile = null;
  registerSteps = {
    step1: true,
    step2: false,
    step3: false
  };
  show = false;
  cpShow = false;
  password: any;
  cfPassword: any;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.password = "password";
    this.cfPassword = "password";
    this.registerForm = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.email, Validators.required]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  generateOtp(valid) {
    if (!valid) {
      return;
    }
    // this.authService.generateOtp({mobileNum:this.mobile}).subscribe(data => {
    //   console.log('dataaaa',data);
    //   this.registerSteps.step1 = false;
    //   this.registerSteps.step3 = true;
    // }, error => {
    //   console.log(error);
    // })

    this.registerSteps.step1 = false;
    this.registerSteps.step3 = true;

    //console.log('12121', this.mobile)
  }

  submitRegisterForm(valid) {
    this.submitFormAttempt = true;
    if (!valid) {
      return;
    }
    let reqData = {
      mobile: this.mobile,
      name: this.registerForm.controls["name"].value,
      email: this.registerForm.controls["email"].value,
      password: this.registerForm.controls["password"].value
    };

    this.authService.register(reqData).subscribe(
      (data: any) => {
        console.log(data);
        if (data.code === 400) {
          this.toastService.openSnackbar(data.message);
        } else {
          this.router.navigateByUrl("/auth/login");
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  togglePassword() {
    if (this.password === "password") {
      this.password = "text";
      this.show = true;
    } else {
      this.password = "password";
      this.show = false;
    }
  }

  toggelConfirmPassword() {
    if (this.cfPassword === "password") {
      this.cfPassword = "text";
      this.cpShow = true;
    } else {
      this.cfPassword = "password";
      this.cpShow = false;
    }
  }
}
