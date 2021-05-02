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
  productVariationForm: FormGroup;
  sellingInfoForm: FormGroup;
  productDescriptionForm: FormGroup;
  productInformationForm: FormGroup;
  
  isProductInformationFormSubmitted = false;
  isProductDescriptionFormSubmitted = false;
  isSellingInfoFormSubmitted = false;
  isproductVariationFormSubmitted = false;
  isFormSubmitted = false;
  isImageUploadFormSubmitted = false;
  imageAttachemts = [];
  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.productInformationForm = this.fb.group({
      barcode: ['', Validators.required],
      itemName: ['', Validators.required],
      model: ['', Validators.required],
      hsn: ['', Validators.required],
      city: ['', Validators.required],
      countryOfOrigin: ['', Validators.required],
      brand: ['', Validators.required],
      availableUnits: ['', Validators.required],
      dimensions: this.fb.group({
        length: ['', Validators.required],
        width: ['', Validators.required],
        height: ['', Validators.required],
      }),
      weight: ['', Validators.required],
      categoryId: ['', Validators.required],
      subCategoryId: ['', Validators.required]
    })
    this.productDescriptionForm = this.fb.group({
      description: ['', Validators.required],
      heading: ['', Validators.required],
    });
    this.sellingInfoForm = this.fb.group({
      productPrice: ['', Validators.required],
      mrp: ['', Validators.required],
    });
    this.productVariationForm = this.fb.group({
      // color: ['', Validators.required],
      // size: ['', Validators.required],
      color: this.fb.array([
        this.fb.group({
          color: ['', Validators.required]
        })
      ]),
      size: this.fb.array([
        this.fb.group({
          size: ['', Validators.required]
        })
      ])
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
      categoryId: this.productInformationForm.controls["categoryId"].value
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

  addProduct() {
    this.isFormSubmitted = true;
    if (!this.productVariationForm.valid) {
      return;
    }
    let formGroupValues = Object.assign(this.productDescriptionForm.value, this.productInformationForm.value,
    this.productVariationForm.value, this.sellingInfoForm.value)
    // formGroupValues.productImg = this.imageAttachemts;
    let colours = [];
    let sizes = [];
    formGroupValues.color.forEach(element => {
      colours.push(element.color);
    });
    formGroupValues.color = colours;
    formGroupValues.size.forEach(element => {
      sizes.push(element.size);
    });
    formGroupValues.size = sizes;
    formGroupValues.productPrice = formGroupValues.productPrice.toString();
    formGroupValues.mrp = formGroupValues.mrp.toString();
    formGroupValues.availableUnits = Number(formGroupValues.availableUnits)
    this.productService.addProduct(formGroupValues).subscribe(
      data => {
        this.toastService.openSnackbar("Product added succeefully!!");
        this.productId = data["data"]["_id"];
        this.addProductImages();
        this.showAddProductSection = false;
        this.step = 0;
        this.productInformationForm.reset();
        this.productDescriptionForm.reset();
        this.imageAttachemts = [];
        this.sellingInfoForm.reset();
        this.productVariationForm.reset();
        this.isProductInformationFormSubmitted = false;
        this.isProductDescriptionFormSubmitted = false;
        this.isSellingInfoFormSubmitted = false;
        this.isproductVariationFormSubmitted = false;
        this.isFormSubmitted = false;
        this.isImageUploadFormSubmitted = false;
        const colorFormArray: FormArray = this.productVariationForm['controls']['color'] as FormArray;
        colorFormArray.clear();
        colorFormArray.push(this.colorForm())
        const sizeFormArray: FormArray = this.productVariationForm['controls']['size'] as FormArray;
        sizeFormArray.clear();
        sizeFormArray.push(this.sizeForm());
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
    this.showAddProductSection = true;
    this.step = 0;
    this.productVariationForm.patchValue(product);
    this.productInformationForm.patchValue(product);
    this.productDescriptionForm.patchValue(product);
    this.sellingInfoForm.patchValue(product);
    this.getSubCategories();
    const colorFormArray: FormArray = this.productVariationForm['controls']['color'] as FormArray;
    colorFormArray.clear();
    for(let i = 0; i < product.color.length; i++) {
      colorFormArray.push(this.colorForm());
      (this.productVariationForm['controls']['color'] as FormArray).at(i).get('color').setValue(product.color[i])
    }

    const sizeFormArray: FormArray = this.productVariationForm['controls']['size'] as FormArray;
    sizeFormArray.clear();
    for(let i = 0; i < product.size.length; i++) {
      sizeFormArray.push(this.sizeForm());
      (this.productVariationForm['controls']['size'] as FormArray).at(i).get('size').setValue(product.size[i])
    }
  }


  
  uploadFiles(event) {
    if(this.imageAttachemts.length < 5) {
    this.files = event.target.files;
    this.tempFiles = event.target.files[0];
    const fileName = event.target.files[0].name;
    const fileFormat = fileName.slice(fileName.lastIndexOf('.') + 1, fileName.length);
    if (fileFormat == 'jpg' || fileFormat == 'jpeg' || fileFormat == 'png') {
      if (this.tempFiles && this.tempFiles.size / 1000 / 1000 < 2) {
        let reader = new FileReader();
        if (event.target.files && event.target.files[0]) {
          reader.readAsDataURL(this.tempFiles);
          reader.onload = () => {
            this.imageUrl = reader.result;
            this.imageAttachemts.push(this.imageUrl);
          };
        }
        console.log(this.imageAttachemts);
      } else {
        this.toastService.openSnackbar('Invalid File Format. Valid Format are jpg, jpeg & png');
      }
    } else {
      this.toastService.openSnackbar(this.tempFiles.name + ' cannot be uploaded because it exceeds max size limit of 2 MB.');
    }
  } else {
    this.toastService.openSnackbar('More than 5 images are not allowed.');
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
    Array.from(this.imageAttachemts).forEach(item => {
      formData.append("productImage", item);
    });
    formData.append("id", this.productId);
    // if (formData['productImage']) {
      this.productService.addProductImages(formData).subscribe(
        data => {
          console.log(data);
          this.toastService.openSnackbar("Product image added successfully!!");
          // this.router.navigate([
          //   "/product/product-selling-info",
          //   data["data"]["_id"]
          // ]);
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
    this.colors = this.productVariationForm.get("color") as FormArray;
    this.colors.push(
      this.fb.group({
        color: ['', Validators.required]
      })
    );
  }

  addSize() {
    this.sizes = this.productVariationForm.get("size") as FormArray;
    this.sizes.push(
      this.fb.group({
        size: ['', Validators.required]
      })
    );
  }

  moveToNextStep(step) {
    console.log(this.productInformationForm.controls.dimensions);
    if (step == 0) {
      this.isProductInformationFormSubmitted = true;
      if (this.productInformationForm.valid)
        this.step = step + 1;
    }
    if (step == 1) {
      this.isProductDescriptionFormSubmitted = true;
      if (this.productDescriptionForm.valid)
        this.step = step + 1;
    }
    if (step == 2) {
      this.isImageUploadFormSubmitted = true;
      if (this.imageAttachemts.length)
        this.step = step + 1;
    }
    if (step == 3) {
      this.isSellingInfoFormSubmitted = true;
      if (this.sellingInfoForm.valid)
        this.step = step + 1;
    }
  }

  colorForm() {
    return this.fb.group({
      color: [null, Validators.required]
    })
  }

  sizeForm() {
    return this.fb.group({
      size: [null, Validators.required]
    })
  }
}
