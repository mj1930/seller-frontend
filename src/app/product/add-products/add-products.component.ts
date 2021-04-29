import { Component, OnInit } from "@angular/core";
import { Form, FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ProductService } from "../product.service";
import { ToastService } from "src/app/services/shared/toast.service";

@Component({
  selector: "app-add-products",
  templateUrl: "./add-products.component.html",
  styleUrls: ["./add-products.component.css"]
})
export class AddProductsComponent implements OnInit {
  x:any;

  step: number = 0;

  addProductForm: FormGroup;
  showSubMenu = false;
  userName = "";
  categories = [];
  subCategories = [];
  productSearchSubscription: Subscription;
  searchResult = [];
  searchText = "";
  showAddProductSection = false;
  productId = "";

  files = [];
  id: string;
  tempFiles: any;
  imageUrl: any;

  colors: FormArray;
  sizes: FormArray;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.addProductForm = this.fb.group({
      barcode: [],
      itemName: [],
      city: [],
      countryOfOrigin: [],
      brand: [],
      availableUnits: [],
      dimensions: this.fb.group({
        length: "",
        width: "",
        height: ""
      }),
      weight: [],
      categoryId: [],
      subCategoryId: [],
      description: [],
      heading: [],
      productPrice: [],
      mrp: [],
      color: [],
      size: [],
    });
    this.userName = JSON.parse(localStorage.getItem("user")).name;
    this.getCategories();
  }

  getCategories() {
    let reqBody = {
      skip: 0,
      limit: 10000
    };
    this.productService.getCategories(reqBody).subscribe(
      data => {
        console.log(data);
        this.categories = data["data"];
        console.log(this.categories);
      },
      error => {
        console.log(error);
      }
    );
  }

  getSubCategories() {
    let reqBody = {
      skip: 0,
      limit: 10000,
      categoryId: this.addProductForm.controls["categoryId"].value
    };
    this.productService.getSubCategories(reqBody).subscribe(
      data => {
        this.subCategories = data["data"];
      },
      error => {
        console.log(error);
      }
    );
  }

  addProduct(valid) {
    if (!valid) {
      return;
    }
    this.productService.addProduct(this.x).subscribe(
      data => {
        this.toastService.openSnackbar("Product added succeefully!!");
        this.productId = data["data"]["_id"];
        this.router.navigate([
          "/product/product-description",
          data["data"]["_id"]
        ]);
      },
      error => {
        console.log(error);
      }
    );
  }

  resetForm() {
    this.addProductForm.reset();
    this.router.navigateByUrl("/seller/active-dashboard");
  }

  searchProduct() {
    if (this.productSearchSubscription) {
      this.productSearchSubscription.unsubscribe();
    }
    this.searchResult = [];

    if (this.searchText) {
      this.productSearchSubscription = this.productService
        .searchProduct(this.searchText)
        .subscribe(
          data => {
            console.log(data);
            this.searchResult = data["data"];
          },
          error => {
            console.log(error);
          }
        );
    }
  }

  setProductValues(product) {
    // this.addProductForm['controls'].barcode.setValue(product.barcode);
    // this.addProductForm['controls'].itemName.setValue(product.itemName);
    // this.addProductForm['controls'].city.setValue(product.city);
    // this.addProductForm['controls'].countryOfOrigin.setValue(product.countryOfOrigin);
    // this.addProductForm['controls'].brand.setValue(product.brand);
    // this.addProductForm['controls'].availableUnits.setValue(product.availableUnits)
    // this.addProductForm['controls'].dimensions.setValue(product.dimensions);
    // this.addProductForm['controls'].weight.setValue(product.weight);
    // this.addProductForm['controls'].categoryId.setValue(product.categoryId);
    // this.addProductForm['controls'].subCategoryId.setValue(product.subCategoryId);
    // this.showAddProductSection = true;
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

  addProductDescription() {
    this.productService
      .addProductDescription(this.x)
      .subscribe(
        data => {
          console.log(data);
          // this.router.navigate(['/product/product-selling-info', data['data']['_id']]);
          this.toastService.openSnackbar("Description added successfully!!");
          this.router.navigate([
            "/product/product-images",
            data["data"]["_id"]
          ]);
        },
        error => {
          console.log(error);
        }
      );
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
  
  addProductSellingInfo() {
    this.productService
      .addProductSellingInfo(this.x)
      .subscribe(
        data => {
          console.log(data);
          this.toastService.openSnackbar("Added selling info successfully");
          this.router.navigate([
            "/product/product-variation",
            data["data"]["_id"]
          ]);
        },
        error => {
          console.log(error);
        }
      );
  }
  addColor() {
    this.colors = this.x.get("colors") as FormArray;
    this.colors.push(
      this.fb.group({
        color: ""
      })
    );
  }

  addSize() {
    this.sizes = this.x.get("sizes") as FormArray;
    this.sizes.push(
      this.fb.group({
        size: ""
      })
    );
  }
}
