(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module"], {
    /***/
    "4ZoX":
    /*!****************************************************************!*\
      !*** ./src/app/product/add-products/add-products.component.ts ***!
      \****************************************************************/

    /*! exports provided: AddProductsComponent */

    /***/
    function ZoX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddProductsComponent", function () {
        return AddProductsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../product.service */
      "8/IB");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_shared_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/shared/toast.service */
      "6fg7");
      /* harmony import */


      var _shared_components_side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/components/side-navigation/side-navigation.component */
      "J0GB");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _product_nav_tabs_product_nav_tabs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../product-nav-tabs/product-nav-tabs.component */
      "Xvw+");

      function AddProductsComponent_section_17_div_5_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProductsComponent_section_17_div_5_div_1_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var product_r4 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r5.setProductValues(product_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var product_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r4 == null ? null : product_r4.itemName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r4 == null ? null : product_r4.description);
        }
      }

      function AddProductsComponent_section_17_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddProductsComponent_section_17_div_5_div_1_Template, 10, 2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.searchResult);
        }
      }

      function AddProductsComponent_section_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search Results");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AddProductsComponent_section_17_div_5_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.searchResult.length);
        }
      }

      function AddProductsComponent_div_19_option_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var category_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", category_r9._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r9 == null ? null : category_r9.categoryName);
        }
      }

      function AddProductsComponent_div_19_option_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var subCategory_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", subCategory_r10._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subCategory_r10 == null ? null : subCategory_r10.subCategoryName);
        }
      }

      function AddProductsComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-product-nav-tabs", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddProductsComponent_div_19_Template_form_ngSubmit_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.addProduct(ctx_r11.addProductForm.valid);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Item Name (AKA Title)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Barcode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Country Of Origin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "City");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Manufacturer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Available Units");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Product Dimensions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Product Weight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "select", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddProductsComponent_div_19_Template_select_change_35_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.getSubCategories();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Select Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AddProductsComponent_div_19_option_38_Template, 2, 2, "option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Sub-Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "select", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Select Sub-Category");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AddProductsComponent_div_19_option_44_Template, 2, 2, "option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProductsComponent_div_19_Template_button_click_46_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.resetForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Save and Finish");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "footer", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " \xA9 2021 made with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " All Rights Reserved ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("productId", ctx_r1.productId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.addProductForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.subCategories);
        }
      }

      var AddProductsComponent = /*#__PURE__*/function () {
        function AddProductsComponent(fb, productService, router, toastService) {
          _classCallCheck(this, AddProductsComponent);

          this.fb = fb;
          this.productService = productService;
          this.router = router;
          this.toastService = toastService;
          this.showSubMenu = false;
          this.userName = "";
          this.categories = [];
          this.subCategories = [];
          this.searchResult = [];
          this.searchText = "";
          this.showAddProductSection = false;
          this.productId = "";
        }

        _createClass(AddProductsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
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
              subCategoryId: []
            });
            this.userName = JSON.parse(localStorage.getItem("user")).name;
            this.getCategories();
          }
        }, {
          key: "getCategories",
          value: function getCategories() {
            var _this = this;

            var reqBody = {
              skip: 0,
              limit: 10000
            };
            this.productService.getCategories(reqBody).subscribe(function (data) {
              console.log(data);
              _this.categories = data["data"];
              console.log(_this.categories);
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getSubCategories",
          value: function getSubCategories() {
            var _this2 = this;

            var reqBody = {
              skip: 0,
              limit: 10000,
              categoryId: this.addProductForm.controls["categoryId"].value
            };
            this.productService.getSubCategories(reqBody).subscribe(function (data) {
              _this2.subCategories = data["data"];
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "addProduct",
          value: function addProduct(valid) {
            var _this3 = this;

            if (!valid) {
              return;
            }

            this.productService.addProduct(this.addProductForm.value).subscribe(function (data) {
              _this3.toastService.openSnackbar("Product added succeefully!!");

              _this3.productId = data["data"]["_id"];

              _this3.router.navigate(["/product/product-description", data["data"]["_id"]]);
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "resetForm",
          value: function resetForm() {
            this.addProductForm.reset();
            this.router.navigateByUrl("/seller/active-dashboard");
          }
        }, {
          key: "searchProduct",
          value: function searchProduct() {
            var _this4 = this;

            if (this.productSearchSubscription) {
              this.productSearchSubscription.unsubscribe();
            }

            this.searchResult = [];

            if (this.searchText) {
              this.productSearchSubscription = this.productService.searchProduct(this.searchText).subscribe(function (data) {
                console.log(data);
                _this4.searchResult = data["data"];
              }, function (error) {
                console.log(error);
              });
            }
          }
        }, {
          key: "setProductValues",
          value: function setProductValues(product) {// this.addProductForm['controls'].barcode.setValue(product.barcode);
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
        }]);

        return AddProductsComponent;
      }();

      AddProductsComponent.ɵfac = function AddProductsComponent_Factory(t) {
        return new (t || AddProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_shared_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]));
      };

      AddProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddProductsComponent,
        selectors: [["app-add-products"]],
        decls: 20,
        vars: 3,
        consts: [[1, "page-wrapper", "chiller-theme", "toggled"], [1, "page-content"], [1, "container-fluid"], [1, "border", "rounded", "border-light", "p-sm-5", "p-3"], ["for", "", 1, ""], [1, "input-group"], ["type", "text", "name", "search", "placeholder", "Product Name, Barcode, Brand, CIN (Company Identification Number)", 1, "form-control", 3, "ngModel", "keyup", "ngModelChange"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "fa", "fa-search"], [1, "text-primary", 3, "click"], ["class", "page-content", 4, "ngIf"], ["class", "container-fluid", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "row"], ["class", "col-sm-4 col-md-3 col-lg-2 my-2", 4, "ngFor", "ngForOf"], [1, "col-sm-4", "col-md-3", "col-lg-2", "my-2"], [1, "card", "px-2"], ["src", "https://rukminim1.flixcart.com/image/150/150/k0cqqvk0/bottle/4/v/c/1000-venice-fridge-water-bottles-120-cello-original-imafk5tysrejtyhj.jpeg", 1, "card-img-top", 2, "height", "150px"], [1, "card-body", "px-0"], [1, "card-title"], [1, "card-text"], ["type", "button", 1, "btn", "btn-success", "btn-sm", "mx-2", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-check"], [3, "productId"], [1, "border", "rounded", "border-light", "p-sm-5", "p-3", 3, "formGroup", "ngSubmit"], ["for", "", 1, "small"], ["type", "text", "placeholder", "Item Name", "formControlName", "itemName", 1, "form-control", "mb-4"], ["type", "text", "placeholder", "Barcode", "formControlName", "barcode", 1, "form-control", "mb-4"], ["type", "text", "placeholder", "India", "formControlName", "countryOfOrigin", 1, "form-control", "mb-4"], ["type", "text", "placeholder", "City", "formControlName", "city", 1, "form-control", "mb-4"], ["type", "text", "placeholder", "Manufacturer", "formControlName", "brand", 1, "form-control", "mb-4"], ["type", "", "placeholder", "Available Units", "formControlName", "availableUnits", 1, "form-control", "mb-4"], ["formGroupName", "dimensions", 1, "row", "d-flex", "justify-content-between", "col-12"], ["type", "text", "placeholder", "Length", "formControlName", "length", 1, "form-control", "mb-4", "col-md-4"], ["type", "text", "placeholder", "Width", "formControlName", "width", 1, "form-control", "mb-4", "col-md-4"], ["type", "text", "placeholder", "Height", "formControlName", "height", 1, "form-control", "mb-4", "col-md-4"], ["type", "text", "placeholder", "180 gm", "formControlName", "weight", 1, "form-control", "mb-4"], ["name", "", "id", "", "formControlName", "categoryId", 1, "form-control", "mb-4", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["name", "", "id", "", "formControlName", "subCategoryId", 1, "form-control", "mb-4"], [1, ""], ["type", "button", 1, "btn", "btn-dark", "mr-2", 3, "click"], ["type", "submit", 1, "btn", "btn-info"], [1, "text-center"], [1, "mb-2"], [1, "fa", "fa-heart", 2, "color", "red"], [3, "value"]],
        template: function AddProductsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-side-navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Find Your Products");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Search Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AddProductsComponent_Template_input_keyup_11_listener() {
              return ctx.searchProduct();
            })("ngModelChange", function AddProductsComponent_Template_input_ngModelChange_11_listener($event) {
              return ctx.searchText = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProductsComponent_Template_button_click_13_listener() {
              return ctx.searchProduct();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProductsComponent_Template_a_click_15_listener() {
              return ctx.showAddProductSection = !ctx.showAddProductSection;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "I'm adding a product not sold here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AddProductsComponent_section_17_Template, 6, 1, "section", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "main", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AddProductsComponent_div_19_Template, 56, 4, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchResult.length);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAddProductSection);
          }
        },
        directives: [_shared_components_side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_5__["SideNavigationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _product_nav_tabs_product_nav_tabs_component__WEBPACK_IMPORTED_MODULE_7__["ProductNavTabsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
        styles: [".active[_ngcontent-%COMP%] {\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9hZGQtcHJvZHVjdHMvYWRkLXByb2R1Y3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0L2FkZC1wcm9kdWN0cy9hZGQtcHJvZHVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddProductsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-add-products",
            templateUrl: "./add-products.component.html",
            styleUrls: ["./add-products.component.css"]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: src_app_services_shared_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "H0Q5":
    /*!********************************************************************!*\
      !*** ./src/app/product/product-images/product-images.component.ts ***!
      \********************************************************************/

    /*! exports provided: ProductImagesComponent */

    /***/
    function H0Q5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductImagesComponent", function () {
        return ProductImagesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../product.service */
      "8/IB");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_shared_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/shared/toast.service */
      "6fg7");
      /* harmony import */


      var _shared_components_side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/components/side-navigation/side-navigation.component */
      "J0GB");
      /* harmony import */


      var _product_nav_tabs_product_nav_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../product-nav-tabs/product-nav-tabs.component */
      "Xvw+");

      var ProductImagesComponent = /*#__PURE__*/function () {
        function ProductImagesComponent(fb, productService, router, activatedRoute, toastService) {
          _classCallCheck(this, ProductImagesComponent);

          this.fb = fb;
          this.productService = productService;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.toastService = toastService;
          this.files = [];
          this.userName = "";
        }

        _createClass(ProductImagesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.activatedRoute.params.subscribe(function (item) {
              _this5.id = item.id;
            });
            this.userName = JSON.parse(localStorage.getItem("user")).name;
          }
        }, {
          key: "uploadFiles",
          value: function uploadFiles(event) {
            var _this6 = this;

            this.files = event.target.files;
            this.tempFiles = event.target.files[0];
            var reader = new FileReader();

            if (event.target.files && event.target.files[0]) {
              reader.readAsDataURL(this.tempFiles);

              reader.onload = function () {
                _this6.imageUrl = reader.result;
              };
            }
          }
        }, {
          key: "addProductImages",
          value: function addProductImages() {
            var _this7 = this;

            var formData = new FormData();
            Array.from(this.files).forEach(function (item) {
              formData.append("productImage", item);
            });
            formData.append("id", this.id); // if (formData['productImage']) {

            this.productService.addProductImages(formData).subscribe(function (data) {
              _this7.toastService.openSnackbar("Product image added successfully!!");

              _this7.router.navigate(["/product/product-selling-info", data["data"]["_id"]]);
            }, function (error) {
              console.log(error);
            }); // }
          }
        }, {
          key: "resetForm",
          value: function resetForm() {
            this.router.navigateByUrl("/seller/active-dashboard");
          }
        }]);

        return ProductImagesComponent;
      }();

      ProductImagesComponent.ɵfac = function ProductImagesComponent_Factory(t) {
        return new (t || ProductImagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_shared_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]));
      };

      ProductImagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductImagesComponent,
        selectors: [["app-product-images"]],
        decls: 28,
        vars: 1,
        consts: [[1, "page-wrapper", "chiller-theme", "toggled"], [1, "page-content"], [1, "container-fluid"], ["enctype", "multipart/form-data", 1, "border", "rounded", "border-light", "p-sm-5", "p-3"], [1, "row"], [1, "col-lg-2", "col-md-3", "col-sm-6", "my-2"], ["for", "file-input1"], ["src", "https://toppng.com/uploads/preview/file-upload-image-icon-115632290507ftgixivqp.png", 2, "width", "100%", "cursor", "pointer"], ["id", "file-input1", "type", "file", 1, "d-none", 3, "change"], ["fileInput", ""], [1, "col-lg-4", "col-md-8", "col-sm-6", "my-2"], ["alt", "", "width", "100%", 3, "src"], [1, "mt-4"], ["type", "button", 1, "btn", "btn-dark", "mr-2", 3, "click"], ["type", "submit", 1, "btn", "btn-info", 3, "click"], [1, "text-center"], [1, "mb-2"], [1, "fa", "fa-heart", 2, "color", "red"]],
        template: function ProductImagesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-side-navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Product Images");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-product-nav-tabs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProductImagesComponent_Template_input_change_13_listener($event) {
              return ctx.uploadFiles($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductImagesComponent_Template_button_click_18_listener() {
              return ctx.resetForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Cancel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductImagesComponent_Template_button_click_20_listener() {
              return ctx.addProductImages();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Save and Finish ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "footer", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \xA9 2021 made with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " All Rights Reserved ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        directives: [_shared_components_side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_5__["SideNavigationComponent"], _product_nav_tabs_product_nav_tabs_component__WEBPACK_IMPORTED_MODULE_6__["ProductNavTabsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC1pbWFnZXMvcHJvZHVjdC1pbWFnZXMuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductImagesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-product-images",
            templateUrl: "./product-images.component.html",
            styleUrls: ["./product-images.component.css"]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: src_app_services_shared_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "QwOD":
    /*!******************************************************************************!*\
      !*** ./src/app/product/product-description/product-description.component.ts ***!
      \******************************************************************************/

    /*! exports provided: ProductDescriptionComponent */

    /***/
    function QwOD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductDescriptionComponent", function () {
        return ProductDescriptionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../product.service */
      "8/IB");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_shared_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/shared/toast.service */
      "6fg7");
      /* harmony import */


      var _shared_components_side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/components/side-navigation/side-navigation.component */
      "J0GB");
      /* harmony import */


      var _product_nav_tabs_product_nav_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../product-nav-tabs/product-nav-tabs.component */
      "Xvw+");

      var ProductDescriptionComponent = /*#__PURE__*/function () {
        function ProductDescriptionComponent(fb, productService, router, activatedRoute, toastService) {
          _classCallCheck(this, ProductDescriptionComponent);

          this.fb = fb;
          this.productService = productService;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.toastService = toastService;
          this.userName = "";
        }

        _createClass(ProductDescriptionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.activatedRoute.params.subscribe(function (item) {
              _this8.id = item.id;
            });
            this.addProductDescriptionForm = this.fb.group({
              description: [],
              heading: [],
              id: [this.id]
            });
            this.userName = JSON.parse(localStorage.getItem("user")).name;
          }
        }, {
          key: "addProductDescription",
          value: function addProductDescription() {
            var _this9 = this;

            this.productService.addProductDescription(this.addProductDescriptionForm.value).subscribe(function (data) {
              console.log(data); // this.router.navigate(['/product/product-selling-info', data['data']['_id']]);

              _this9.toastService.openSnackbar("Description added successfully!!");

              _this9.router.navigate(["/product/product-images", data["data"]["_id"]]);
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "resetForm",
          value: function resetForm() {
            this.addProductDescriptionForm.reset();
            this.router.navigateByUrl("/seller/active-dashboard");
          }
        }]);

        return ProductDescriptionComponent;
      }();

      ProductDescriptionComponent.ɵfac = function ProductDescriptionComponent_Factory(t) {
        return new (t || ProductDescriptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_shared_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]));
      };

      ProductDescriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductDescriptionComponent,
        selectors: [["app-product-description"]],
        decls: 26,
        vars: 2,
        consts: [[1, "page-wrapper", "chiller-theme", "toggled"], [1, "page-content"], [1, "container-fluid"], [3, "productId"], [1, "border", "rounded", "border-light", "p-sm-5", "p-3", 3, "formGroup", "ngSubmit"], ["for", "", 1, "small"], ["placeholder", "8-Peice luxury comforter set product includes 1 comforter, 1 bed skirt, 2 shams, 2 euro shams and 2 decorated pillows", "formControlName", "description", 1, "form-control", "mb-4"], ["type", "text", "placeholder", "Embroidered design", "formControlName", "heading", 1, "form-control", "mb-4"], [1, ""], ["type", "button", 1, "btn", "btn-dark", "mr-2", 3, "click"], ["type", "submit", 1, "btn", "btn-info"], [1, "text-center"], [1, "mb-2"], [1, "fa", "fa-heart", 2, "color", "red"]],
        template: function ProductDescriptionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-side-navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Product Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-product-nav-tabs", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProductDescriptionComponent_Template_form_ngSubmit_8_listener() {
              return ctx.addProductDescription();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Product Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "textarea", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Bullet Points");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDescriptionComponent_Template_button_click_16_listener() {
              return ctx.resetForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Save and Finish");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "footer", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \xA9 2021 made with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " All Rights Reserved ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("productId", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addProductDescriptionForm);
          }
        },
        directives: [_shared_components_side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_5__["SideNavigationComponent"], _product_nav_tabs_product_nav_tabs_component__WEBPACK_IMPORTED_MODULE_6__["ProductNavTabsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC1kZXNjcmlwdGlvbi9wcm9kdWN0LWRlc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDescriptionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-product-description",
            templateUrl: "./product-description.component.html",
            styleUrls: ["./product-description.component.css"]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: src_app_services_shared_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "SpmM":
    /*!********************************************************************************!*\
      !*** ./src/app/product/product-selling-info/product-selling-info.component.ts ***!
      \********************************************************************************/

    /*! exports provided: ProductSellingInfoComponent */

    /***/
    function SpmM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductSellingInfoComponent", function () {
        return ProductSellingInfoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../product.service */
      "8/IB");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_shared_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/shared/toast.service */
      "6fg7");
      /* harmony import */


      var _shared_components_side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/components/side-navigation/side-navigation.component */
      "J0GB");
      /* harmony import */


      var _product_nav_tabs_product_nav_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../product-nav-tabs/product-nav-tabs.component */
      "Xvw+");

      var ProductSellingInfoComponent = /*#__PURE__*/function () {
        function ProductSellingInfoComponent(fb, productService, router, activatedRoute, toastService) {
          _classCallCheck(this, ProductSellingInfoComponent);

          this.fb = fb;
          this.productService = productService;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.toastService = toastService;
          this.userName = "";
        }

        _createClass(ProductSellingInfoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.activatedRoute.params.subscribe(function (item) {
              _this10.id = item.id;
            });
            this.addProductSellingInfoForm = this.fb.group({
              productPrice: [],
              unitCount: [0],
              mrp: [],
              id: [this.id]
            });
            this.userName = JSON.parse(localStorage.getItem("user")).name;
          }
        }, {
          key: "addProductSellingInfo",
          value: function addProductSellingInfo() {
            var _this11 = this;

            this.productService.addProductSellingInfo(this.addProductSellingInfoForm.value).subscribe(function (data) {
              console.log(data);

              _this11.toastService.openSnackbar("Added selling info successfully");

              _this11.router.navigate(["/product/product-variation", data["data"]["_id"]]);
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "resetForm",
          value: function resetForm() {
            this.addProductSellingInfoForm.reset();
            this.router.navigateByUrl("/seller/active-dashboard");
          }
        }]);

        return ProductSellingInfoComponent;
      }();

      ProductSellingInfoComponent.ɵfac = function ProductSellingInfoComponent_Factory(t) {
        return new (t || ProductSellingInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_shared_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]));
      };

      ProductSellingInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductSellingInfoComponent,
        selectors: [["app-product-selling-info"]],
        decls: 28,
        vars: 2,
        consts: [[1, "page-wrapper", "chiller-theme", "toggled"], [1, "page-content"], [1, "container-fluid"], [3, "productId"], [1, "border", "rounded", "border-light", "p-sm-5", "p-3", 3, "formGroup", "ngSubmit"], ["for", "", 1, "small"], ["type", "text", "placeholder", "Ex. 50.00", "formControlName", "productPrice", 1, "form-control"], [1, "mb-4", "text-success", "small"], ["type", "text", "placeholder", "Ex. 50.00", "formControlName", "mrp", 1, "form-control", "mb-4"], [1, ""], ["type", "button", 1, "btn", "btn-dark", "mr-2", 3, "click"], ["type", "submit", 1, "btn", "btn-info"], [1, "text-center"], [1, "mb-2"], [1, "fa", "fa-heart", 2, "color", "red"]],
        template: function ProductSellingInfoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-side-navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Products Selling Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-product-nav-tabs", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProductSellingInfoComponent_Template_form_ngSubmit_8_listener() {
              return ctx.addProductSellingInfo();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Your Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Note: Match the lowest price INR 2859");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Maximum Retail Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductSellingInfoComponent_Template_button_click_18_listener() {
              return ctx.resetForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Save and Finish");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "footer", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \xA9 2021 made with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " All Rights Reserved ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("productId", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addProductSellingInfoForm);
          }
        },
        directives: [_shared_components_side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_5__["SideNavigationComponent"], _product_nav_tabs_product_nav_tabs_component__WEBPACK_IMPORTED_MODULE_6__["ProductNavTabsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC1zZWxsaW5nLWluZm8vcHJvZHVjdC1zZWxsaW5nLWluZm8uY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductSellingInfoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-product-selling-info",
            templateUrl: "./product-selling-info.component.html",
            styleUrls: ["./product-selling-info.component.css"]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: src_app_services_shared_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Xvw+":
    /*!************************************************************************!*\
      !*** ./src/app/product/product-nav-tabs/product-nav-tabs.component.ts ***!
      \************************************************************************/

    /*! exports provided: ProductNavTabsComponent */

    /***/
    function Xvw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductNavTabsComponent", function () {
        return ProductNavTabsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0) {
        return {
          "disabled-a": a0
        };
      };

      var _c1 = function _c1(a1) {
        return ["/product/product-description", a1];
      };

      var _c2 = function _c2(a1) {
        return ["/product/product-images", a1];
      };

      var _c3 = function _c3(a1) {
        return ["/product/product-selling-info", a1];
      };

      var _c4 = function _c4(a1) {
        return ["/product/product-variation", a1];
      };

      var ProductNavTabsComponent = /*#__PURE__*/function () {
        function ProductNavTabsComponent() {
          _classCallCheck(this, ProductNavTabsComponent);
        }

        _createClass(ProductNavTabsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductNavTabsComponent;
      }();

      ProductNavTabsComponent.ɵfac = function ProductNavTabsComponent_Factory(t) {
        return new (t || ProductNavTabsComponent)();
      };

      ProductNavTabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductNavTabsComponent,
        selectors: [["app-product-nav-tabs"]],
        inputs: {
          productId: "productId"
        },
        decls: 16,
        vars: 21,
        consts: [[1, "nav", "nav-tabs"], [1, "nav-item"], ["routerLink", "/product/add-products", 1, "nav-link"], [1, "nav-link", 3, "ngClass", "routerLink"], [1, "nav-link", 3, "routerLink"]],
        template: function ProductNavTabsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Product Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Images");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Selling Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Product Variations");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, !ctx.productId))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx.productId));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, ctx.productId));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, !ctx.productId))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c3, ctx.productId));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, !ctx.productId))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c4, ctx.productId));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
        styles: [".disabled-a[_ngcontent-%COMP%]{\n    pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LW5hdi10YWJzL3Byb2R1Y3QtbmF2LXRhYnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC1uYXYtdGFicy9wcm9kdWN0LW5hdi10YWJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzYWJsZWQtYXtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductNavTabsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-product-nav-tabs',
            templateUrl: './product-nav-tabs.component.html',
            styleUrls: ['./product-nav-tabs.component.css']
          }]
        }], function () {
          return [];
        }, {
          productId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "aouB":
    /*!**************************************************************************!*\
      !*** ./src/app/product/product-variation/product-variation.component.ts ***!
      \**************************************************************************/

    /*! exports provided: ProductVariationComponent */

    /***/
    function aouB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductVariationComponent", function () {
        return ProductVariationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../product.service */
      "8/IB");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_shared_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/shared/toast.service */
      "6fg7");
      /* harmony import */


      var _shared_components_side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/components/side-navigation/side-navigation.component */
      "J0GB");
      /* harmony import */


      var _product_nav_tabs_product_nav_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../product-nav-tabs/product-nav-tabs.component */
      "Xvw+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ProductVariationComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r3 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r3);
        }
      }

      function ProductVariationComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r5 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r5);
        }
      }

      var ProductVariationComponent = /*#__PURE__*/function () {
        function ProductVariationComponent(fb, productService, activatedRoute, router, toastService) {
          _classCallCheck(this, ProductVariationComponent);

          this.fb = fb;
          this.productService = productService;
          this.activatedRoute = activatedRoute;
          this.router = router;
          this.toastService = toastService;
        }

        _createClass(ProductVariationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.addProductVariationForm = this.fb.group({
              colors: this.fb.array([this.fb.group({
                color: ""
              })]),
              sizes: this.fb.array([this.fb.group({
                size: ""
              })])
            });
            this.activatedRoute.params.subscribe(function (item) {
              _this12.id = item.id;
            });
          }
        }, {
          key: "addColor",
          value: function addColor() {
            this.colors = this.addProductVariationForm.get("colors");
            this.colors.push(this.fb.group({
              color: ""
            }));
          }
        }, {
          key: "addSize",
          value: function addSize() {
            this.sizes = this.addProductVariationForm.get("sizes");
            this.sizes.push(this.fb.group({
              size: ""
            }));
          }
        }, {
          key: "resetForm",
          value: function resetForm() {
            this.addProductVariationForm.reset();
          }
        }, {
          key: "addProductVariation",
          value: function addProductVariation() {
            var _this13 = this;

            var color = [];
            var size = [];
            var values = this.addProductVariationForm.value;
            color = values.colors.map(function (item) {
              return item.color;
            });
            size = values.sizes.map(function (item) {
              return item.size;
            });
            console.log(this.addProductVariationForm.value);
            var reqBody = {
              color: color,
              size: size,
              id: this.id
            };
            this.productService.addProductVariation(reqBody).subscribe(function (data) {
              console.log(data);

              _this13.toastService.openSnackbar("Added product variation successfully!!");

              _this13.router.navigateByUrl("/inventory");
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return ProductVariationComponent;
      }();

      ProductVariationComponent.ɵfac = function ProductVariationComponent_Factory(t) {
        return new (t || ProductVariationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_shared_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]));
      };

      ProductVariationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductVariationComponent,
        selectors: [["app-product-variation"]],
        decls: 33,
        vars: 4,
        consts: [[1, "page-wrapper", "chiller-theme", "toggled"], [1, "page-content"], [1, "container-fluid"], [3, "productId"], [1, "border", "rounded", "border-light", "p-sm-5", "p-3", 3, "formGroup", "ngSubmit"], ["for", "", 1, ""], [1, "row", "d-flex", "col-12"], ["formArrayName", "colors", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "mb-4", "btn-sm", "btn-dark", 3, "click"], ["formArrayName", "sizes", 4, "ngFor", "ngForOf"], [1, ""], ["type", "button", 1, "btn", "btn-dark", "mr-2", 3, "click"], ["type", "submit", 1, "btn", "btn-info"], [1, "text-center"], [1, "mb-2"], [1, "fa", "fa-heart", 2, "color", "red"], ["formArrayName", "colors"], [3, "formGroupName"], ["type", "text", "placeholder", "Color", "formControlName", "color", 1, "form-control", "mb-2", "mr-2"], ["formArrayName", "sizes"], ["type", "text", "placeholder", "Size", "formControlName", "size", 1, "form-control", "mb-2", "mr-2"]],
        template: function ProductVariationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-side-navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Product Variation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-product-nav-tabs", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProductVariationComponent_Template_form_ngSubmit_8_listener() {
              return ctx.addProductVariation();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProductVariationComponent_div_12_Template, 3, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductVariationComponent_Template_button_click_13_listener() {
              return ctx.addColor();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Add Color");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Size");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProductVariationComponent_div_19_Template, 3, 1, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductVariationComponent_Template_button_click_20_listener() {
              return ctx.addSize();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Add Size");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductVariationComponent_Template_button_click_23_listener() {
              return ctx.resetForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Save and Finish");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "footer", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \xA9 2021 made with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " All Rights Reserved ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("productId", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addProductVariationForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.addProductVariationForm.get("colors")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.addProductVariationForm.get("sizes")["controls"]);
          }
        },
        directives: [_shared_components_side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_5__["SideNavigationComponent"], _product_nav_tabs_product_nav_tabs_component__WEBPACK_IMPORTED_MODULE_6__["ProductNavTabsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC12YXJpYXRpb24vcHJvZHVjdC12YXJpYXRpb24uY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductVariationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-product-variation",
            templateUrl: "./product-variation.component.html",
            styleUrls: ["./product-variation.component.css"]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: src_app_services_shared_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "cjwk":
    /*!***************************************************!*\
      !*** ./src/app/product/product-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ProductRoutingModule */

    /***/
    function cjwk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function () {
        return ProductRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _add_products_add_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-products/add-products.component */
      "4ZoX");
      /* harmony import */


      var _product_description_product_description_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./product-description/product-description.component */
      "QwOD");
      /* harmony import */


      var _product_images_product_images_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./product-images/product-images.component */
      "H0Q5");
      /* harmony import */


      var _product_selling_info_product_selling_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./product-selling-info/product-selling-info.component */
      "SpmM");
      /* harmony import */


      var _product_variation_product_variation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./product-variation/product-variation.component */
      "aouB");

      var routes = [{
        path: '',
        pathMatch: 'full',
        redirectTo: '/add-products'
      }, {
        path: 'add-products',
        component: _add_products_add_products_component__WEBPACK_IMPORTED_MODULE_2__["AddProductsComponent"]
      }, {
        path: 'product-description/:id',
        component: _product_description_product_description_component__WEBPACK_IMPORTED_MODULE_3__["ProductDescriptionComponent"]
      }, {
        path: 'product-images/:id',
        component: _product_images_product_images_component__WEBPACK_IMPORTED_MODULE_4__["ProductImagesComponent"]
      }, {
        path: 'product-selling-info/:id',
        component: _product_selling_info_product_selling_info_component__WEBPACK_IMPORTED_MODULE_5__["ProductSellingInfoComponent"]
      }, {
        path: 'product-variation/:id',
        component: _product_variation_product_variation_component__WEBPACK_IMPORTED_MODULE_6__["ProductVariationComponent"]
      }];

      var ProductRoutingModule = function ProductRoutingModule() {
        _classCallCheck(this, ProductRoutingModule);
      };

      ProductRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ProductRoutingModule
      });
      ProductRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ProductRoutingModule_Factory(t) {
          return new (t || ProductRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "qvFY":
    /*!*******************************************!*\
      !*** ./src/app/product/product.module.ts ***!
      \*******************************************/

    /*! exports provided: ProductModule */

    /***/
    function qvFY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductModule", function () {
        return ProductModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _add_products_add_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-products/add-products.component */
      "4ZoX");
      /* harmony import */


      var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./product.service */
      "8/IB");
      /* harmony import */


      var _product_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./product-routing.module */
      "cjwk");
      /* harmony import */


      var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angular-bootstrap-md */
      "dbUT");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _http_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../http-interceptor */
      "WeEj");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _product_variation_product_variation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./product-variation/product-variation.component */
      "aouB");
      /* harmony import */


      var _product_selling_info_product_selling_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./product-selling-info/product-selling-info.component */
      "SpmM");
      /* harmony import */


      var _product_images_product_images_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./product-images/product-images.component */
      "H0Q5");
      /* harmony import */


      var _product_description_product_description_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./product-description/product-description.component */
      "QwOD");
      /* harmony import */


      var _product_product_nav_tabs_product_nav_tabs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../product/product-nav-tabs/product-nav-tabs.component */
      "Xvw+");

      var ProductModule = function ProductModule() {
        _classCallCheck(this, ProductModule);
      };

      ProductModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ProductModule
      });
      ProductModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ProductModule_Factory(t) {
          return new (t || ProductModule)();
        },
        providers: [_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _http_interceptor__WEBPACK_IMPORTED_MODULE_8__["httpInterceptorProviders"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _product_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProductRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBBootstrapModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductModule, {
          declarations: [_add_products_add_products_component__WEBPACK_IMPORTED_MODULE_2__["AddProductsComponent"], _product_product_nav_tabs_product_nav_tabs_component__WEBPACK_IMPORTED_MODULE_14__["ProductNavTabsComponent"], _product_variation_product_variation_component__WEBPACK_IMPORTED_MODULE_10__["ProductVariationComponent"], _product_selling_info_product_selling_info_component__WEBPACK_IMPORTED_MODULE_11__["ProductSellingInfoComponent"], _product_images_product_images_component__WEBPACK_IMPORTED_MODULE_12__["ProductImagesComponent"], _product_description_product_description_component__WEBPACK_IMPORTED_MODULE_13__["ProductDescriptionComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _product_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProductRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBRootModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_add_products_add_products_component__WEBPACK_IMPORTED_MODULE_2__["AddProductsComponent"], _product_product_nav_tabs_product_nav_tabs_component__WEBPACK_IMPORTED_MODULE_14__["ProductNavTabsComponent"], _product_variation_product_variation_component__WEBPACK_IMPORTED_MODULE_10__["ProductVariationComponent"], _product_selling_info_product_selling_info_component__WEBPACK_IMPORTED_MODULE_11__["ProductSellingInfoComponent"], _product_images_product_images_component__WEBPACK_IMPORTED_MODULE_12__["ProductImagesComponent"], _product_description_product_description_component__WEBPACK_IMPORTED_MODULE_13__["ProductDescriptionComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _product_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProductRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBBootstrapModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]],
            providers: [_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _http_interceptor__WEBPACK_IMPORTED_MODULE_8__["httpInterceptorProviders"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=product-product-module-es5.js.map