import { Component, OnInit } from "@angular/core";
import { Form, FormArray, FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../product.service";
import { ToastService } from "src/app/services/shared/toast.service";

@Component({
  selector: "app-product-variation",
  templateUrl: "./product-variation.component.html",
  styleUrls: ["./product-variation.component.css"]
})
export class ProductVariationComponent implements OnInit {
  colors: FormArray;
  sizes: FormArray;
  addProductVariationForm: FormGroup;
  id: string;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.addProductVariationForm = this.fb.group({
      colors: this.fb.array([
        this.fb.group({
          color: ""
        })
      ]),
      sizes: this.fb.array([
        this.fb.group({
          size: ""
        })
      ])
    });
    this.activatedRoute.params.subscribe(item => {
      this.id = item.id;
    });
  }

  addColor() {
    this.colors = this.addProductVariationForm.get("colors") as FormArray;
    this.colors.push(
      this.fb.group({
        color: ""
      })
    );
  }

  addSize() {
    this.sizes = this.addProductVariationForm.get("sizes") as FormArray;
    this.sizes.push(
      this.fb.group({
        size: ""
      })
    );
  }

  resetForm() {
    this.addProductVariationForm.reset();
  }

  addProductVariation() {
    let color = [];
    let size = [];
    let values = this.addProductVariationForm.value;
    color = values.colors.map(item => item.color);
    size = values.sizes.map(item => item.size);
    console.log(this.addProductVariationForm.value);
    let reqBody = {
      color: color,
      size: size,
      id: this.id
    };
    this.productService.addProductVariation(reqBody).subscribe(
      data => {
        console.log(data);
        this.toastService.openSnackbar(
          "Added product variation successfully!!"
        );
        this.router.navigateByUrl("/inventory");
      },
      error => {
        console.log(error);
      }
    );
  }
}
