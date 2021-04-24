import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../product.service";
import { ToastService } from "src/app/services/shared/toast.service";

@Component({
  selector: "app-product-images",
  templateUrl: "./product-images.component.html",
  styleUrls: ["./product-images.component.css"]
})
export class ProductImagesComponent implements OnInit {
  files = [];
  userName = "";
  id: string;
  tempFiles: any;
  imageUrl: any;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(item => {
      this.id = item.id;
    });
    this.userName = JSON.parse(localStorage.getItem("user")).name;
  }

  uploadFiles(event) {
    this.files = event.target.files;
    this.tempFiles = event.target.files[0];
    let reader = new FileReader();
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(this.tempFiles);
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
    }
  }

  addProductImages() {
    let formData = new FormData();
    Array.from(this.files).forEach(item => {
      formData.append("productImage", item);
    });
    formData.append("id", this.id);
    // if (formData['productImage']) {
      this.productService.addProductImages(formData).subscribe(
        data => {
          this.toastService.openSnackbar("Product image added successfully!!");
          this.router.navigate([
            "/product/product-selling-info",
            data["data"]["_id"]
          ]);
        },
        error => {
          console.log(error);
        }
      );
    // }
  }

  resetForm() {
    this.router.navigateByUrl("/seller/active-dashboard");
  }
}
