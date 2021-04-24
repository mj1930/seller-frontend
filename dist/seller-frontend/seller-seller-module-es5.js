(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["seller-seller-module"], {
    /***/
    "+2ro":
    /*!*************************************************!*\
      !*** ./src/app/seller/seller-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: SellerRoutingModule */

    /***/
    function ro(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellerRoutingModule", function () {
        return SellerRoutingModule;
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


      var _shared_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/services/auth-guard/auth-guard.service */
      "ZNij");
      /* harmony import */


      var _order_listing_order_listing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./order-listing/order-listing.component */
      "8S/g");
      /* harmony import */


      var _seller_active_dashboard_seller_active_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./seller-active-dashboard/seller-active-dashboard.component */
      "ipVn");
      /* harmony import */


      var _seller_bank_details_seller_bank_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./seller-bank-details/seller-bank-details.component */
      "9Frk");
      /* harmony import */


      var _seller_dashboard_seller_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./seller-dashboard/seller-dashboard.component */
      "KgXH");
      /* harmony import */


      var _seller_email_verified_seller_email_verified_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./seller-email-verified/seller-email-verified.component */
      "ormT");
      /* harmony import */


      var _seller_gstin_details_seller_gstin_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./seller-gstin-details/seller-gstin-details.component */
      "DKyG");
      /* harmony import */


      var _seller_listing_seller_listing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./seller-listing/seller-listing.component */
      "TK29");
      /* harmony import */


      var _seller_product_listing_seller_product_listing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./seller-product-listing/seller-product-listing.component */
      "C9TP");
      /* harmony import */


      var _seller_profile_page_seller_profile_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./seller-profile-page/seller-profile-page.component */
      "tuFk");
      /* harmony import */


      var _seller_welcome_page_seller_welcome_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./seller-welcome-page/seller-welcome-page.component */
      "evN+");

      var routes = [{
        path: '',
        component: _seller_welcome_page_seller_welcome_page_component__WEBPACK_IMPORTED_MODULE_12__["SellerWelcomePageComponent"]
      }, {
        path: 'gst',
        component: _seller_gstin_details_seller_gstin_details_component__WEBPACK_IMPORTED_MODULE_8__["SellerGstinDetailsComponent"]
      }, {
        path: 'bank-details',
        component: _seller_bank_details_seller_bank_details_component__WEBPACK_IMPORTED_MODULE_5__["SellerBankDetailsComponent"]
      }, {
        path: 'dashboard',
        component: _seller_dashboard_seller_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["SellerDashboardComponent"],
        canActivate: [_shared_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
      }, {
        path: 'email-verification',
        component: _seller_email_verified_seller_email_verified_component__WEBPACK_IMPORTED_MODULE_7__["SellerEmailVerifiedComponent"],
        canActivate: [_shared_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
      }, {
        path: 'active-dashboard',
        component: _seller_active_dashboard_seller_active_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["SellerActiveDashboardComponent"],
        canActivate: [_shared_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
      }, {
        path: 'listing',
        component: _seller_listing_seller_listing_component__WEBPACK_IMPORTED_MODULE_9__["SellerListingComponent"],
        canActivate: [_shared_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
      }, {
        path: 'profile',
        component: _seller_profile_page_seller_profile_page_component__WEBPACK_IMPORTED_MODULE_11__["SellerProfilePageComponent"],
        canActivate: [_shared_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
      }, {
        path: 'product-listing',
        component: _seller_product_listing_seller_product_listing_component__WEBPACK_IMPORTED_MODULE_10__["SellerProductListingComponent"],
        canActivate: [_shared_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
      }, {
        path: 'order-listing',
        component: _order_listing_order_listing_component__WEBPACK_IMPORTED_MODULE_3__["OrderListingComponent"],
        canActivate: [_shared_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]]
      }];

      var SellerRoutingModule = function SellerRoutingModule() {
        _classCallCheck(this, SellerRoutingModule);
      };

      SellerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SellerRoutingModule
      });
      SellerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SellerRoutingModule_Factory(t) {
          return new (t || SellerRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SellerRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SellerRoutingModule, [{
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
    "0wAB":
    /*!******************************************!*\
      !*** ./src/app/seller/seller.service.ts ***!
      \******************************************/

    /*! exports provided: SellerService */

    /***/
    function wAB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellerService", function () {
        return SellerService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var SellerService = /*#__PURE__*/function () {
        function SellerService(http) {
          _classCallCheck(this, SellerService);

          this.http = http;
        }

        _createClass(SellerService, [{
          key: "addSellerAddressDetails",
          value: function addSellerAddressDetails(req) {
            return this.http.post('store/add-seller-address-details', req);
          }
        }, {
          key: "addSellerBankDetails",
          value: function addSellerBankDetails(req) {
            return this.http.post('store/add-seller-bank-details', req);
          }
        }, {
          key: "addSellerGstDetails",
          value: function addSellerGstDetails(req) {
            return this.http.post('store/add-seller-gst-details', req);
          }
        }, {
          key: "getUserDetails",
          value: function getUserDetails() {
            return this.http.get('users/get-user-details');
          }
        }, {
          key: "getOrder",
          value: function getOrder(req) {
            return this.http.post('orders/list-orders', req);
          }
        }, {
          key: "updateStatus",
          value: function updateStatus(reqBody) {
            return this.http.post('orders/update-order', reqBody);
          }
        }]);

        return SellerService;
      }();

      SellerService.ɵfac = function SellerService_Factory(t) {
        return new (t || SellerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      SellerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SellerService,
        factory: SellerService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SellerService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "2P2X":
    /*!*****************************************!*\
      !*** ./src/app/seller/seller.module.ts ***!
      \*****************************************/

    /*! exports provided: SellerModule */

    /***/
    function P2X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellerModule", function () {
        return SellerModule;
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


      var _seller_active_dashboard_seller_active_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./seller-active-dashboard/seller-active-dashboard.component */
      "ipVn");
      /* harmony import */


      var _seller_bank_details_seller_bank_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./seller-bank-details/seller-bank-details.component */
      "9Frk");
      /* harmony import */


      var _seller_dashboard_seller_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./seller-dashboard/seller-dashboard.component */
      "KgXH");
      /* harmony import */


      var _seller_email_verified_seller_email_verified_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./seller-email-verified/seller-email-verified.component */
      "ormT");
      /* harmony import */


      var _seller_gstin_details_seller_gstin_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./seller-gstin-details/seller-gstin-details.component */
      "DKyG");
      /* harmony import */


      var _seller_welcome_page_seller_welcome_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./seller-welcome-page/seller-welcome-page.component */
      "evN+");
      /* harmony import */


      var _seller_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./seller-routing.module */
      "+2ro");
      /* harmony import */


      var _seller_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./seller.service */
      "0wAB");
      /* harmony import */


      var _verification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./verification.service */
      "byiG");
      /* harmony import */


      var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! angular-bootstrap-md */
      "dbUT");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _http_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../http-interceptor */
      "WeEj");
      /* harmony import */


      var _seller_listing_seller_listing_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./seller-listing/seller-listing.component */
      "TK29");
      /* harmony import */


      var _seller_product_listing_seller_product_listing_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./seller-product-listing/seller-product-listing.component */
      "C9TP");
      /* harmony import */


      var _seller_profile_page_seller_profile_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./seller-profile-page/seller-profile-page.component */
      "tuFk");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _order_listing_order_listing_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./order-listing/order-listing.component */
      "8S/g"); // import { AgmCoreModule }s from '@agm/core';


      var SellerModule = function SellerModule() {
        _classCallCheck(this, SellerModule);
      };

      SellerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SellerModule
      });
      SellerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SellerModule_Factory(t) {
          return new (t || SellerModule)();
        },
        providers: [_seller_service__WEBPACK_IMPORTED_MODULE_9__["SellerService"], _verification_service__WEBPACK_IMPORTED_MODULE_10__["VerificationService"], _http_interceptor__WEBPACK_IMPORTED_MODULE_14__["httpInterceptorProviders"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _seller_routing_module__WEBPACK_IMPORTED_MODULE_8__["SellerRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_11__["MDBBootstrapModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SellerModule, {
          declarations: [_seller_active_dashboard_seller_active_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["SellerActiveDashboardComponent"], _seller_bank_details_seller_bank_details_component__WEBPACK_IMPORTED_MODULE_3__["SellerBankDetailsComponent"], _seller_dashboard_seller_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["SellerDashboardComponent"], _seller_email_verified_seller_email_verified_component__WEBPACK_IMPORTED_MODULE_5__["SellerEmailVerifiedComponent"], _seller_gstin_details_seller_gstin_details_component__WEBPACK_IMPORTED_MODULE_6__["SellerGstinDetailsComponent"], _seller_welcome_page_seller_welcome_page_component__WEBPACK_IMPORTED_MODULE_7__["SellerWelcomePageComponent"], _seller_listing_seller_listing_component__WEBPACK_IMPORTED_MODULE_15__["SellerListingComponent"], _seller_product_listing_seller_product_listing_component__WEBPACK_IMPORTED_MODULE_16__["SellerProductListingComponent"], _seller_profile_page_seller_profile_page_component__WEBPACK_IMPORTED_MODULE_17__["SellerProfilePageComponent"], _order_listing_order_listing_component__WEBPACK_IMPORTED_MODULE_19__["OrderListingComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _seller_routing_module__WEBPACK_IMPORTED_MODULE_8__["SellerRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_11__["MDBBootstrapModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SellerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_seller_active_dashboard_seller_active_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["SellerActiveDashboardComponent"], _seller_bank_details_seller_bank_details_component__WEBPACK_IMPORTED_MODULE_3__["SellerBankDetailsComponent"], _seller_dashboard_seller_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["SellerDashboardComponent"], _seller_email_verified_seller_email_verified_component__WEBPACK_IMPORTED_MODULE_5__["SellerEmailVerifiedComponent"], _seller_gstin_details_seller_gstin_details_component__WEBPACK_IMPORTED_MODULE_6__["SellerGstinDetailsComponent"], _seller_welcome_page_seller_welcome_page_component__WEBPACK_IMPORTED_MODULE_7__["SellerWelcomePageComponent"], _seller_listing_seller_listing_component__WEBPACK_IMPORTED_MODULE_15__["SellerListingComponent"], _seller_product_listing_seller_product_listing_component__WEBPACK_IMPORTED_MODULE_16__["SellerProductListingComponent"], _seller_profile_page_seller_profile_page_component__WEBPACK_IMPORTED_MODULE_17__["SellerProfilePageComponent"], _order_listing_order_listing_component__WEBPACK_IMPORTED_MODULE_19__["OrderListingComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _seller_routing_module__WEBPACK_IMPORTED_MODULE_8__["SellerRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_11__["MDBBootstrapModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"]],
            providers: [_seller_service__WEBPACK_IMPORTED_MODULE_9__["SellerService"], _verification_service__WEBPACK_IMPORTED_MODULE_10__["VerificationService"], _http_interceptor__WEBPACK_IMPORTED_MODULE_14__["httpInterceptorProviders"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "8S/g":
    /*!*****************************************************************!*\
      !*** ./src/app/seller/order-listing/order-listing.component.ts ***!
      \*****************************************************************/

    /*! exports provided: OrderListingComponent */

    /***/
    function SG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderListingComponent", function () {
        return OrderListingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _seller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../seller.service */
      "0wAB");
      /* harmony import */


      var _shared_components_side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/components/side-navigation/side-navigation.component */
      "J0GB");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function OrderListingComponent_tr_39_td_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var prod_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](prod_r7 == null ? null : prod_r7.name);
        }
      }

      function OrderListingComponent_tr_39_td_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var prod_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](prod_r8 == null ? null : prod_r8.quantity);
        }
      }

      function OrderListingComponent_tr_39_td_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var prod_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](prod_r9 == null ? null : prod_r9.sellerName);
        }
      }

      function OrderListingComponent_tr_39_option_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var status_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", status_r10.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](status_r10.text);
        }
      }

      function OrderListingComponent_tr_39_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, OrderListingComponent_tr_39_td_16_Template, 3, 1, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, OrderListingComponent_tr_39_td_17_Template, 3, 1, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, OrderListingComponent_tr_39_td_18_Template, 3, 1, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "select", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrderListingComponent_tr_39_Template_select_ngModelChange_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var order_r1 = ctx.$implicit;
            return order_r1.orderStatus = $event;
          })("change", function OrderListingComponent_tr_39_Template_select_change_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var order_r1 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.updateStatus(order_r1._id, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, OrderListingComponent_tr_39_option_33_Template, 2, 2, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var order_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 13, order_r1 == null ? null : order_r1.createdAt, "medium"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1 == null ? null : order_r1.mode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1 == null ? null : order_r1._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", order_r1 == null ? null : order_r1.products);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", order_r1 == null ? null : order_r1.products);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", order_r1 == null ? null : order_r1.products);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1 == null ? null : order_r1.totalAmnt);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1 == null ? null : order_r1.status);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1 == null ? null : order_r1.paymentMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1 == null ? null : order_r1.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", order_r1.orderStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.orderStatuses);
        }
      }

      var OrderListingComponent = /*#__PURE__*/function () {
        function OrderListingComponent(sellerService) {
          _classCallCheck(this, OrderListingComponent);

          this.sellerService = sellerService;
          this.orderStatuses = [{
            text: 'Pending',
            value: 'P'
          }, {
            text: 'Dispatched',
            value: 'D'
          }, {
            text: 'Refunded',
            value: 'RF'
          }, {
            text: 'Cancelled',
            value: 'C'
          }, {
            text: 'Returned',
            value: 'RT'
          }];
        }

        _createClass(OrderListingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getOrder();
          }
        }, {
          key: "getOrder",
          value: function getOrder() {
            var _this = this;

            var reqBody = {
              skip: "0",
              limit: "100"
            };
            this.sellerService.getOrder(reqBody).subscribe(function (data) {
              console.log(data);
              _this.orders = data['data'];

              _this.setOrderStaus();
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "updateStatus",
          value: function updateStatus(id, event) {
            var _this2 = this;

            var reqBody = {
              orderId: id,
              status: event.target.value
            };
            this.sellerService.updateStatus(reqBody).subscribe(function (data) {
              console.log(data);

              _this2.getOrder();
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "setOrderStaus",
          value: function setOrderStaus() {
            this.orders.forEach(function (item) {
              switch (item.orderStatus) {
                case 'P':
                  item['status'] = "Pending";
                  break;

                case 'D':
                  item['status'] = "Dispatched";
                  break;

                case 'RF':
                  item['status'] = "Refunded";
                  break;

                case 'RT':
                  item['status'] = "Returned";
                  break;
              }
            });
          }
        }]);

        return OrderListingComponent;
      }();

      OrderListingComponent.ɵfac = function OrderListingComponent_Factory(t) {
        return new (t || OrderListingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_seller_service__WEBPACK_IMPORTED_MODULE_1__["SellerService"]));
      };

      OrderListingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OrderListingComponent,
        selectors: [["app-order-listing"]],
        decls: 46,
        vars: 1,
        consts: [[1, "page-wrapper", "chiller-theme", "toggled"], [1, "page-content"], [1, "container-fluid"], [1, "row"], [1, "table-responsive", "rounded", "table-striped", "table-bordered"], [1, "table"], [1, "grey", "lighten-2", "small", "text-uppercase"], [1, "text-nowrap"], ["scope", "col"], ["type", "checkbox", 2, "cursor", "pointer"], [4, "ngFor", "ngForOf"], [1, "text-center"], [1, "mb-2"], [1, "fa", "fa-heart", 2, "color", "red"], ["scope", "row"], ["name", "status", 1, "form-control", "select-style", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function OrderListingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-side-navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Order Listing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "SR NO.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Order Date/Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Mode");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Order ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Product Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Quantity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Seller");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Order Total (INR)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Payment Mode");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Address Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, OrderListingComponent_tr_39_Template, 34, 16, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "footer", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " \xA9 2021 made with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " All Rights Reserved ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orders);
          }
        },
        directives: [_shared_components_side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_2__["SideNavigationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlci9vcmRlci1saXN0aW5nL29yZGVyLWxpc3RpbmcuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderListingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-order-listing',
            templateUrl: './order-listing.component.html',
            styleUrls: ['./order-listing.component.css']
          }]
        }], function () {
          return [{
            type: _seller_service__WEBPACK_IMPORTED_MODULE_1__["SellerService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "9Frk":
    /*!*****************************************************************************!*\
      !*** ./src/app/seller/seller-bank-details/seller-bank-details.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: SellerBankDetailsComponent */

    /***/
    function Frk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellerBankDetailsComponent", function () {
        return SellerBankDetailsComponent;
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


      var _seller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../seller.service */
      "0wAB");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SellerBankDetailsComponent_p_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "File Uploaded Successfully");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var SellerBankDetailsComponent = /*#__PURE__*/function () {
        function SellerBankDetailsComponent(fb, sellerService, router) {
          _classCallCheck(this, SellerBankDetailsComponent);

          this.fb = fb;
          this.sellerService = sellerService;
          this.router = router;
        }

        _createClass(SellerBankDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sellerBankDetailsForm = this.fb.group({
              accountNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              accountName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              ifscCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]] //storename: ['', [Validators.required]],

            });

            if (localStorage.getItem('seller-bank-details')) {
              this.sellerBankDetailsForm.setValue(JSON.parse(localStorage.getItem('seller-bank-details')));
            } //localStorage.setItem('seller-gst-details', JSON.stringify(this.sellerGstForm.value));

          }
        }, {
          key: "submitSellerBankDetailsForm",
          value: function submitSellerBankDetailsForm(valid) {
            var _this3 = this;

            console.log('adsasdsa', this.sellerBankDetailsForm.value, 'valid', valid);
            this.sellerFormAttempt = true;

            if (!valid) {
              return;
            }

            localStorage.setItem('seller-bank-details', JSON.stringify(this.sellerBankDetailsForm.value));
            var welcomeDetails = JSON.parse(localStorage.getItem('seller-welcome-details'));
            var gstDetails = JSON.parse(localStorage.getItem('seller-gst-details'));
            var bankDetails = JSON.parse(localStorage.getItem('seller-bank-details'));
            var gstUrl = JSON.parse(localStorage.getItem('seller-uploaded-file'))[0];
            var gstFile;
            fetch(gstUrl).then(function (res) {
              return res.blob();
            }).then(function (blob) {
              gstFile = new File([blob], "Gst"); //console.log('qqqqqq', gstFile)
            });
            var panUrl = JSON.parse(localStorage.getItem('seller-uploaded-file'))[1];
            var panFile;
            fetch(panUrl).then(function (res) {
              return res.blob();
            }).then(function (blob) {
              panFile = new File([blob], "Pan");
            });
            var reqData = {
              // name: JSON.parse(localStorage.getItem('user')).name,
              // address: welcomeDetails.address,
              // hasGST: gstDetails.hasGST	,
              // taxState: gstDetails.taxState,	
              // gstin: gstDetails.gstin	,
              // pan: gstDetails.pan	,
              accountNumber: this.sellerBankDetailsForm.controls['accountNumber'].value,
              accountName: this.sellerBankDetailsForm.controls['accountName'].value,
              ifscCode: this.sellerBankDetailsForm.controls['ifscCode'].value
            };
            this.sellerService.addSellerBankDetails(reqData).subscribe(function (data) {
              console.log(data);

              _this3.router.navigateByUrl('/seller/active-dashboard');
            }, function (error) {
              console.log(error);
            }); // this.router.navigateByUrl('/seller-bank-details');
          }
        }, {
          key: "fileUpload",
          value: function fileUpload(event) {
            this.bankFile = event.target.files[0];
          }
        }]);

        return SellerBankDetailsComponent;
      }();

      SellerBankDetailsComponent.ɵfac = function SellerBankDetailsComponent_Factory(t) {
        return new (t || SellerBankDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_seller_service__WEBPACK_IMPORTED_MODULE_2__["SellerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      SellerBankDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SellerBankDetailsComponent,
        selectors: [["app-seller-bank-details"]],
        decls: 37,
        vars: 2,
        consts: [[1, "container-fluid"], [1, "row", "d-flex", "justify-content-center"], [1, "col-md-5", "col-lg-4", "col-sm-8"], [1, "d-flex", "justify-content-center"], ["src", "https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png", "alt", "Logo", 1, "my-3", "mx-auto"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "m-0", "small"], [1, "text-left", 3, "formGroup", "ngSubmit"], ["for", "", 1, "m-0", "small"], ["formControlName", "accountName", "type", "text", "id", "nameonBank", "placeholder", "Name as on bank documents", 1, "form-control", "mb-3"], ["formControlName", "accountNumber", "type", "text", "id", "accountNumber", "maxlength", "34", "placeholder", "Upto 34 Characters", 1, "form-control", "mb-3"], ["formControlName", "ifscCode", "type", "text", "id", "ifscCode", "maxlength", "34", "placeholder", "Example: ABCD0123456", 1, "form-control", "mb-3"], ["for", "", 1, "small"], [1, "input-group"], [1, "input-group-prepend"], ["id", "cancelCheque", 1, "input-group-text"], [1, "custom-file"], ["type", "file", "id", "cancelCheque", "aria-describedby", "inputGroupFileAddon01", "accept", "image/jpeg", 1, "custom-file-input", 3, "change"], ["for", "cancelCheque", 1, "custom-file-label"], ["class", "small m-0 text-success", 4, "ngIf"], [1, "small"], ["type", "submit", 1, "btn", "elegant-color", "text-white", "btn-sm", "btn-block", "my-4", "rounded"], [1, "small", "m-0", "text-success"]],
        template: function SellerBankDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Enter your bank details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Update your bank details to receive payments.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SellerBankDetailsComponent_Template_form_ngSubmit_12_listener() {
              return ctx.submitSellerBankDetailsForm(ctx.sellerBankDetailsForm.valid);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Account Holder Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Account Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "IFSC Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Upload Cancel Cheque Image");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Upload");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SellerBankDetailsComponent_Template_input_change_29_listener($event) {
              return ctx.fileUpload($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Choose file");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, SellerBankDetailsComponent_p_32_Template, 2, 0, "p", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "(Only JPG, JPEG Files Supported)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Save Bank Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.sellerBankDetailsForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bankFile);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlci9zZWxsZXItYmFuay1kZXRhaWxzL3NlbGxlci1iYW5rLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SellerBankDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-seller-bank-details',
            templateUrl: './seller-bank-details.component.html',
            styleUrls: ['./seller-bank-details.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _seller_service__WEBPACK_IMPORTED_MODULE_2__["SellerService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "C9TP":
    /*!***********************************************************************************!*\
      !*** ./src/app/seller/seller-product-listing/seller-product-listing.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: SellerProductListingComponent */

    /***/
    function C9TP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellerProductListingComponent", function () {
        return SellerProductListingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/components/side-navigation/side-navigation.component */
      "J0GB");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var SellerProductListingComponent = /*#__PURE__*/function () {
        function SellerProductListingComponent() {
          _classCallCheck(this, SellerProductListingComponent);
        }

        _createClass(SellerProductListingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SellerProductListingComponent;
      }();

      SellerProductListingComponent.ɵfac = function SellerProductListingComponent_Factory(t) {
        return new (t || SellerProductListingComponent)();
      };

      SellerProductListingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SellerProductListingComponent,
        selectors: [["app-seller-product-listing"]],
        decls: 118,
        vars: 0,
        consts: [[1, "page-wrapper", "chiller-theme", "toggled"], [1, "page-content"], [1, "container-fluid"], [1, "row"], [1, "filer", "col", "p-3", "rounded", "my-2", "elegant-color", "text-white"], [1, "row", "d-flex", "align-items-center"], [1, "col-lg-9"], [1, "small", "mr-3"], [1, "custom-control", "custom-radio", "custom-control-inline"], ["type", "radio", "id", "defaultInline1", "name", "inlineDefaultRadiosExample", 1, "custom-control-input"], ["for", "defaultInline1", 1, "custom-control-label"], ["type", "radio", "id", "defaultInline2", "name", "inlineDefaultRadiosExample", 1, "custom-control-input"], ["for", "defaultInline2", 1, "custom-control-label"], ["type", "radio", "id", "defaultInline3", "name", "inlineDefaultRadiosExample", 1, "custom-control-input"], ["for", "defaultInline3", 1, "custom-control-label"], ["type", "radio", "id", "defaultInline4", "name", "inlineDefaultRadiosExample", 1, "custom-control-input"], ["for", "defaultInline4", 1, "custom-control-label"], [1, "col-lg-3", "my-2"], [1, "browser-default", "custom-select"], ["selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], [1, "table-responsive", "rounded", "table-striped"], [1, "table"], [1, "grey", "lighten-2", "small", "text-uppercase"], [1, "text-nowrap"], ["scope", "col"], ["type", "checkbox", 2, "cursor", "pointer"], ["scope", "row"], [1, "text-left", "small", "m-0"], [1, "text-left", "small", "m-0", "p-0", "text-muted"], ["src", "https://images-na.ssl-images-amazon.com/images/I/61pZoOB87SL.jpg", "alt", "", "width", "50px", "height", "50px"], [1, "small", "p-0", "m-0"], [1, "d-flex", "justify-content-around"], [1, "btn", "btn-sm", "btn-danger", "m-2"], ["aria-hidden", "true", 1, "fa", "fa-times"], [1, "btn", "btn-sm", "btn-success", "m-2"], ["aria-hidden", "true", 1, "fa", "fa-check"], [1, "col", "d-none"], ["rows", "5", "placeholder", "Feedback Here"], [1, "d-flex", "justify-content-between"], [1, "btn", "btn-sm", "btn-primary", "m-2"], [1, "btn", "btn-sm", "btn-dark", "m-2"], [1, "text-center"], [1, "mb-2"], [1, "fa", "fa-heart", 2, "color", "red"]],
        template: function SellerProductListingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-side-navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Product Listing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "All");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Inactive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Blocked");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "select", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Select Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "One");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Two");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Three");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "table", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "thead", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Image");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Date Created");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Available Units");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Total Sold");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Total Returns");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Price + Shipping");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Business Price + Shipping");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Lowest Price + Shipping");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Inactive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "(Out Of Stock)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " ROYAL TREND\xAE Carpets 5 Feet x 7 Feet Black Cotton Skin Friendly Runner Rug Mat for Dining Hall Living Room Hall (Kalin Carpet 55\"x86\") ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "28 july 2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "18");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "12");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "499");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "599");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "899");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "699");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "i", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "textarea", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "footer", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " \xA9 2021 made with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "i", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " All Rights Reserved ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_shared_components_side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_1__["SideNavigationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlci9zZWxsZXItcHJvZHVjdC1saXN0aW5nL3NlbGxlci1wcm9kdWN0LWxpc3RpbmcuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SellerProductListingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-seller-product-listing',
            templateUrl: './seller-product-listing.component.html',
            styleUrls: ['./seller-product-listing.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "DKyG":
    /*!*******************************************************************************!*\
      !*** ./src/app/seller/seller-gstin-details/seller-gstin-details.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: SellerGstinDetailsComponent */

    /***/
    function DKyG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellerGstinDetailsComponent", function () {
        return SellerGstinDetailsComponent;
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


      var _seller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../seller.service */
      "0wAB");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SellerGstinDetailsComponent_p_111_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "File Uploaded Successfully");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SellerGstinDetailsComponent_p_127_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "File Uploaded Successfully");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var SellerGstinDetailsComponent = /*#__PURE__*/function () {
        function SellerGstinDetailsComponent(fb, sellerService, router) {
          _classCallCheck(this, SellerGstinDetailsComponent);

          this.fb = fb;
          this.sellerService = sellerService;
          this.router = router;
        }

        _createClass(SellerGstinDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sellerGstForm = this.fb.group({
              name: JSON.parse(localStorage.getItem('user')).name,
              hasGST: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              taxState: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              gstin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              pan: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });

            if (localStorage.getItem('seller-gst-details')) {
              this.sellerGstForm.setValue(JSON.parse(localStorage.getItem('seller-gst-details')));
            } //localStorage.setItem('seller-gst-details', JSON.stringify(this.sellerGstForm.value));

          }
        }, {
          key: "submitSellerGstForm",
          value: function submitSellerGstForm(valid) {
            var _this4 = this;

            this.sellerFormAttempt = true;

            if (!valid) {
              return;
            }

            var files = [];
            files.push(this.gstFile, this.panFile);
            console.log('fielssss', files);
            localStorage.setItem('seller-gst-details', JSON.stringify(this.sellerGstForm.value));
            localStorage.setItem('seller-uploaded-file', JSON.stringify(files));
            this.sellerService.addSellerGstDetails(this.sellerGstForm.value).subscribe(function (data) {
              console.log(data);

              _this4.router.navigateByUrl('/seller/bank-details');
            }, function (error) {
              console.log(error);
            }); // this.router.navigateByUrl('/seller/bank-details');
          }
        }, {
          key: "gstFileUpload",
          value: function gstFileUpload(event) {
            var _this5 = this;

            console.log('gstststs', event.target.files);
            console.log('asdasd', this.getBase64(event.target.files[0]));
            this.getBase64(event.target.files[0]).then(function (data) {
              console.log('dddddddddddd', data);
              _this5.gstFile = data;
            }); //this.gstFile = JSON.stringify(event.target.files[0]);

            console.log('gstFile', this.gstFile); // this.sellerGstForm.get('gstFile').setValue(event.target.files[0]);
          }
        }, {
          key: "panFileUpload",
          value: function panFileUpload(event) {
            var _this6 = this;

            console.log('pannn', event.target.files);
            this.getBase64(event.target.files[0]).then(function (data) {
              console.log('dddddddddddd', data);
              _this6.panFile = data;
            }); // this.panFile = event.target.files[0];
            // this.sellerGstForm.get('panFile').setValue(event.target.files[0]);
          } //  getBase64(file) {
          //         var reader = new FileReader();
          //         reader.readAsDataURL(file);
          //         reader.onload = function () {
          //           console.log(reader.result);
          //           return JSON.stringify(reader.result);
          //         };
          //         reader.onerror = function (error) {
          //           console.log('Error: ', error);
          //         };
          //      }

        }, {
          key: "getBase64",
          value: function getBase64(file) {
            return new Promise(function (resolve, reject) {
              var reader = new FileReader();
              reader.readAsDataURL(file);

              reader.onload = function () {
                return resolve(reader.result);
              };

              reader.onerror = function (error) {
                return reject(error);
              };
            });
          } // var file = document.querySelector('#files > input[type="file"]').files[0];
          // getBase64(file).then(
          //   data => console.log(data)
          // );

        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.sellerGstForm.controls['hasGST'].value == 'true') {
              this.sellerGstForm.controls['gstin'].enable();
            } else {
              this.sellerGstForm.controls['gstin'].disable();
            }
          }
        }]);

        return SellerGstinDetailsComponent;
      }();

      SellerGstinDetailsComponent.ɵfac = function SellerGstinDetailsComponent_Factory(t) {
        return new (t || SellerGstinDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_seller_service__WEBPACK_IMPORTED_MODULE_2__["SellerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      SellerGstinDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SellerGstinDetailsComponent,
        selectors: [["app-seller-gstin-details"]],
        decls: 132,
        vars: 4,
        consts: [[1, "container-fluid"], [1, "row", "d-flex", "justify-content-center"], [1, "col-md-5", "col-lg-4", "col-sm-8"], [1, "d-flex", "justify-content-center"], ["src", "https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png", "alt", "Logo", 1, "my-3", "mx-auto"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "text-left", 3, "formGroup", "ngSubmit"], [1, "custom-control", "custom-radio"], ["formControlName", "hasGST", "type", "radio", "id", "defaultUnchecked", "name", "hasGST", "value", "true", "checked", "", 1, "custom-control-input"], ["for", "defaultUnchecked", 1, "custom-control-label"], ["formControlName", "hasGST", "type", "radio", "id", "defaultChecked", "name", "hasGST", "value", "false", 1, "custom-control-input"], ["for", "defaultChecked", 1, "custom-control-label"], ["for", "", 1, "m-0", "mt-3", "small"], ["formControlName", "taxState", 1, "browser-default", "custom-select", "mb-3"], ["selected", ""], ["value", "Andhra Pradesh"], ["value", "Andaman and Nicobar Islands"], ["value", "Arunachal Pradesh"], ["value", "Assam"], ["value", "Bihar"], ["value", "Chandigarh"], ["value", "Chhattisgarh"], ["value", "Dadar and Nagar Haveli"], ["value", "Daman and Diu"], ["value", "Delhi"], ["value", "Lakshadweep"], ["value", "Puducherry"], ["value", "Goa"], ["value", "Gujarat"], ["value", "Haryana"], ["value", "Himachal Pradesh"], ["value", "Jammu and Kashmir"], ["value", "Jharkhand"], ["value", "Karnataka"], ["value", "Kerala"], ["value", "Madhya Pradesh"], ["value", "Maharashtra"], ["value", "Manipur"], ["value", "Meghalaya"], ["value", "Mizoram"], ["value", "Nagaland"], ["value", "Odisha"], ["value", "Punjab"], ["value", "Rajasthan"], ["value", "Sikkim"], ["value", "Tamil Nadu"], ["value", "Telangana"], ["value", "Tripura"], ["value", "Uttar Pradesh"], ["value", "Uttarakhand"], ["value", "West Bengal"], ["for", "", 1, "m-0", "small"], ["formControlName", "gstin", "type", "text", "id", "defaultSignupFormEmail", "placeholder", "", 1, "form-control", "mb-3"], ["for", "", 1, "small"], [1, "input-group"], [1, "input-group-prepend"], ["id", "GSTDoc", 1, "input-group-text"], [1, "custom-file"], ["type", "file", "id", "GSTDoc", "aria-describedby", "inputGroupFileAddon01", "accept", "application/pdf", 1, "custom-file-input", 3, "disabled", "change"], ["for", "GSTDoc", 1, "custom-file-label"], ["class", "small m-0 text-success", 4, "ngIf"], [1, "small"], ["formControlName", "pan", "type", "text", "id", "defaultSignupFormEmail", "maxlength", "10", 1, "form-control", "mb-3"], ["id", "PANCard", 1, "input-group-text"], ["type", "file", "id", "PANCard", "aria-describedby", "inputGroupFileAddon01", "accept", "image/jpeg", 1, "custom-file-input", 3, "change"], ["for", "PANCard", 1, "custom-file-label"], ["type", "submit", 1, "btn", "elegant-color", "text-white", "btn-sm", "btn-block", "my-4", "rounded"], [1, "small", "m-0", "text-success"]],
        template: function SellerGstinDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Update your tax details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SellerGstinDetailsComponent_Template_form_ngSubmit_10_listener() {
              return ctx.submitSellerGstForm(ctx.sellerGstForm.valid);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Do you have a GST Number?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Enter your tax details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "select", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Select State");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Andhra Pradesh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Andaman and Nicobar Islands");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Arunachal Pradesh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Assam");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Bihar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Chandigarh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Chhattisgarh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Dadar and Nagar Haveli");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Daman and Diu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Delhi");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Lakshadweep");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Puducherry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Goa");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Gujarat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Haryana");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Himachal Pradesh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Jammu and Kashmir");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Jharkhand");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Karnataka");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Kerala");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "option", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Madhya Pradesh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "option", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Maharashtra");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "option", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Manipur");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "option", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Meghalaya");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "option", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Mizoram");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "option", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Nagaland");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "option", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Odisha");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "option", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Punjab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "option", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Rajasthan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "option", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Sikkim");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "option", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Tamil Nadu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "option", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Telangana");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "option", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Tripura");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "option", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Uttar Pradesh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "option", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Uttarakhand");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "option", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "West Bengal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "label", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Provisional GSTIN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "input", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "label", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Upload GST Document");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Upload");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "input", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SellerGstinDetailsComponent_Template_input_change_108_listener($event) {
              return ctx.gstFileUpload($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "label", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Choose file");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, SellerGstinDetailsComponent_p_111_Template, 2, 0, "p", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "(Only PDF Files Supported)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "label", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "PAN Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "input", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "label", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Upload PAN Card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "span", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Upload");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "input", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SellerGstinDetailsComponent_Template_input_change_124_listener($event) {
              return ctx.panFileUpload($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "label", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Choose file");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](127, SellerGstinDetailsComponent_p_127_Template, 2, 0, "p", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "(Only JPG, JPEG Files Supported)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "button", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Save Tax Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.sellerGstForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](98);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.sellerGstForm.controls["hasGST"].value != "true");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gstFile);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.panFile);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlci9zZWxsZXItZ3N0aW4tZGV0YWlscy9zZWxsZXItZ3N0aW4tZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SellerGstinDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-seller-gstin-details',
            templateUrl: './seller-gstin-details.component.html',
            styleUrls: ['./seller-gstin-details.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _seller_service__WEBPACK_IMPORTED_MODULE_2__["SellerService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "KgXH":
    /*!***********************************************************************!*\
      !*** ./src/app/seller/seller-dashboard/seller-dashboard.component.ts ***!
      \***********************************************************************/

    /*! exports provided: SellerDashboardComponent */

    /***/
    function KgXH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellerDashboardComponent", function () {
        return SellerDashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SellerDashboardComponent = /*#__PURE__*/function () {
        function SellerDashboardComponent() {
          _classCallCheck(this, SellerDashboardComponent);
        }

        _createClass(SellerDashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SellerDashboardComponent;
      }();

      SellerDashboardComponent.ɵfac = function SellerDashboardComponent_Factory(t) {
        return new (t || SellerDashboardComponent)();
      };

      SellerDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SellerDashboardComponent,
        selectors: [["app-seller-dashboard"]],
        decls: 17,
        vars: 0,
        consts: [[1, "container-fluid"], [1, "row", "d-flex", "justify-content-center"], [1, "col-md-5", "col-lg-4", "col-sm-8"], [1, "d-flex", "justify-content-center"], ["src", "https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png", "alt", "Logo", 1, "my-3", "mx-auto"], [1, "card"], [1, "card-body", "rounded"], [1, "card-title", "mb-0", "text-center"], [1, "text-center"], [1, "card-text", "text-justify"]],
        template: function SellerDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Congratulations!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Your account created successfully");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Your account is under review process, your details will be verifed by our team. Our team is constantly active for the verification process. Once verified you will receive a success Account Activation E-Mail from our team. This process might take 24hrs - 72hrs.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Thank you");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlci9zZWxsZXItZGFzaGJvYXJkL3NlbGxlci1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SellerDashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-seller-dashboard',
            templateUrl: './seller-dashboard.component.html',
            styleUrls: ['./seller-dashboard.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "TK29":
    /*!*******************************************************************!*\
      !*** ./src/app/seller/seller-listing/seller-listing.component.ts ***!
      \*******************************************************************/

    /*! exports provided: SellerListingComponent */

    /***/
    function TK29(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellerListingComponent", function () {
        return SellerListingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_components_side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/components/side-navigation/side-navigation.component */
      "J0GB");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var SellerListingComponent = /*#__PURE__*/function () {
        function SellerListingComponent() {
          _classCallCheck(this, SellerListingComponent);
        }

        _createClass(SellerListingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SellerListingComponent;
      }();

      SellerListingComponent.ɵfac = function SellerListingComponent_Factory(t) {
        return new (t || SellerListingComponent)();
      };

      SellerListingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SellerListingComponent,
        selectors: [["app-seller-listing"]],
        decls: 94,
        vars: 0,
        consts: [[1, "page-wrapper", "chiller-theme", "toggled"], [1, "page-content"], [1, "container-fluid"], [1, "row"], [1, "filer", "col", "p-3", "rounded", "my-2", "elegant-color", "text-white"], [1, "row", "d-flex", "align-items-center"], [1, "col-lg-9"], [1, "small", "mr-3"], [1, "custom-control", "custom-radio", "custom-control-inline"], ["type", "radio", "id", "defaultInline1", "name", "inlineDefaultRadiosExample", 1, "custom-control-input"], ["for", "defaultInline1", 1, "custom-control-label"], ["type", "radio", "id", "defaultInline2", "name", "inlineDefaultRadiosExample", 1, "custom-control-input"], ["for", "defaultInline2", 1, "custom-control-label"], ["type", "radio", "id", "defaultInline3", "name", "inlineDefaultRadiosExample", 1, "custom-control-input"], ["for", "defaultInline3", 1, "custom-control-label"], ["type", "radio", "id", "defaultInline4", "name", "inlineDefaultRadiosExample", 1, "custom-control-input"], ["for", "defaultInline4", 1, "custom-control-label"], [1, "col-lg-3", "my-2"], [1, "browser-default", "custom-select"], ["selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], [1, "table-responsive", "rounded", "table-striped"], [1, "table"], [1, "grey", "lighten-2", "small", "text-uppercase"], [1, "text-nowrap"], ["scope", "col"], ["type", "checkbox", 2, "cursor", "pointer"], ["scope", "row"], [1, "text-left", "small", "m-0"], [1, "text-left", "small", "m-0", "p-0", "text-muted"], [1, "btn", "btn-sm", "btn-dark"], [1, "text-center"], [1, "mb-2"], [1, "fa", "fa-heart", 2, "color", "red"]],
        template: function SellerListingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-side-navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Manage Inventory");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Listing Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "All");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Inactive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Blocked");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "select", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Select Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "One");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Two");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Three");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "table", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "thead", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Store Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Date Created");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Total lisited Products");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Inactive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "(Not Verified)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " ABC Enterprises ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "26 Jan 2021");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " 1200 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "btn1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " ABABAB Productions ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "28 Feb 2021");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " 2300 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "btn 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "footer", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " \xA9 2021 made with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "i", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " All Rights Reserved ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_shared_components_side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_1__["SideNavigationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlci9zZWxsZXItbGlzdGluZy9zZWxsZXItbGlzdGluZy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SellerListingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-seller-listing',
            templateUrl: './seller-listing.component.html',
            styleUrls: ['./seller-listing.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "byiG":
    /*!************************************************!*\
      !*** ./src/app/seller/verification.service.ts ***!
      \************************************************/

    /*! exports provided: VerificationService */

    /***/
    function byiG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerificationService", function () {
        return VerificationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var VerificationService = /*#__PURE__*/function () {
        function VerificationService(http) {
          _classCallCheck(this, VerificationService);

          this.http = http;
          this.mailVerified = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }

        _createClass(VerificationService, [{
          key: "sendVerificationEmail",
          value: function sendVerificationEmail(req) {
            return this.http.post('verify/send-email-verification', req);
          }
        }, {
          key: "verifyEmail",
          value: function verifyEmail(req) {
            return this.http.post('verify/verify-email', req);
          }
        }]);

        return VerificationService;
      }();

      VerificationService.ɵfac = function VerificationService_Factory(t) {
        return new (t || VerificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      VerificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: VerificationService,
        factory: VerificationService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerificationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "evN+":
    /*!*****************************************************************************!*\
      !*** ./src/app/seller/seller-welcome-page/seller-welcome-page.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: SellerWelcomePageComponent */

    /***/
    function evN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellerWelcomePageComponent", function () {
        return SellerWelcomePageComponent;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _seller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../seller.service */
      "0wAB");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SellerWelcomePageComponent_p_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please provide a store name! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SellerWelcomePageComponent_span_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please provide a address! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      } // import 'rxjs/add/operator/map';


      var SellerWelcomePageComponent = /*#__PURE__*/function () {
        function SellerWelcomePageComponent(fb, sellerService, router, http) {
          _classCallCheck(this, SellerWelcomePageComponent);

          this.fb = fb;
          this.sellerService = sellerService;
          this.router = router;
          this.http = http;
        }

        _createClass(SellerWelcomePageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.sellerForm = this.fb.group({
              storename: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              address: this.fb.group({
                pincode: [''],
                address1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                address2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                city: [''],
                state: [''],
                country: ['India']
              })
            });

            if (localStorage.getItem('seller-welcome-details')) {
              this.sellerForm.setValue(JSON.parse(localStorage.getItem('seller-welcome-details')));
            } // localStorage.setItem('seller-welcome-details', JSON.stringify(this.sellerForm.value));

          }
        }, {
          key: "addSeller",
          value: function addSeller(valid) {
            var _this7 = this;

            this.sellerFormAttempt = true;

            if (!valid) {
              return;
            }

            console.log('adsasdsa', this.sellerForm.value);
            localStorage.setItem('seller-welcome-details', JSON.stringify(this.sellerForm.value));
            this.sellerService.addSellerAddressDetails(this.sellerForm.value).subscribe(function (data) {
              console.log(data);

              _this7.router.navigateByUrl('/seller/gst');
            }, function (error) {
              console.log(error);
            }); //this.router.navigateByUrl('/seller/gst');
            // this.sellerService.addSeller(this.sellerForm.value).subscribe(data => {
            //   console.log(data);
            //   this.router.navigateByUrl('/seller-gst');
            // }, error => {
            //   console.log(error);
            // })
          }
        }, {
          key: "searchCode",
          value: function searchCode() {
            var _this8 = this;

            console.log(this.code);
            this.CallGeoAPI().subscribe(function (res) {
              console.log(res);
              var result = res[0];
              _this8.address = result.formatted_address;
            });
          }
        }, {
          key: "CallGeoAPI",
          value: function CallGeoAPI() {
            var apiURL = "https://maps.googleapis.com/maps/api/geocode/json?address=".concat(this.code, "&key=AIzaSyCFPRapf51Ws6ELOHUpYPpvofDeen4EZsI");
            return this.http.get(apiURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              return response;
            }));
          }
        }]);

        return SellerWelcomePageComponent;
      }();

      SellerWelcomePageComponent.ɵfac = function SellerWelcomePageComponent_Factory(t) {
        return new (t || SellerWelcomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_seller_service__WEBPACK_IMPORTED_MODULE_3__["SellerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]));
      };

      SellerWelcomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SellerWelcomePageComponent,
        selectors: [["app-seller-welcome-page"]],
        decls: 118,
        vars: 4,
        consts: [[1, "container-fluid"], [1, "row", "d-flex", "justify-content-center"], [1, "col-md-5", "col-lg-4", "col-sm-8"], [1, "d-flex", "justify-content-center"], ["src", "https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png", "alt", "Logo", 1, "my-3", "mx-auto"], [1, "card"], [1, "card-body"], [1, "card-title"], ["name", "picncode", 3, "ngModel", "ngModelChange"], [3, "click"], [1, "text-left", 3, "formGroup", "ngSubmit"], ["for", "", 1, "m-0", "small"], ["formControlName", "storename", "type", "text", "id", "defaultSignupFormEmail", "placeholder", "Store Name", 1, "form-control"], ["class", "deep-orange-text small m-0", 4, "ngIf"], [1, "my-4"], ["formGroupName", "address", 1, "text-left"], ["type", "text", "formControlName", "pincode", "id", "defaultSignupFormEmail", "placeholder", "", "oninput", "this.value=this.value.replace(/[^\\d]/,'')", "maxlength", "6", "autocomplete", "off", 1, "form-control"], ["formControlName", "address1", "type", "text", "id", "defaultSignupFormEmail", "placeholder", "", 1, "form-control", "mb-3"], [4, "ngIf"], ["formControlName", "address2", "type", "text", "id", "defaultSignupFormEmail", 1, "form-control", "mb-3"], ["formControlName", "city", "type", "text", "id", "defaultSignupFormEmail", 1, "form-control", "mb-3"], ["formControlName", "state", 1, "browser-default", "custom-select", "mb-3"], ["selected", ""], ["value", "Andhra Pradesh"], ["value", "Andaman and Nicobar Islands"], ["value", "Arunachal Pradesh"], ["value", "Assam"], ["value", "Bihar"], ["value", "Chandigarh"], ["value", "Chhattisgarh"], ["value", "Dadar and Nagar Haveli"], ["value", "Daman and Diu"], ["value", "Delhi"], ["value", "Lakshadweep"], ["value", "Puducherry"], ["value", "Goa"], ["value", "Gujarat"], ["value", "Haryana"], ["value", "Himachal Pradesh"], ["value", "Jammu and Kashmir"], ["value", "Jharkhand"], ["value", "Karnataka"], ["value", "Kerala"], ["value", "Madhya Pradesh"], ["value", "Maharashtra"], ["value", "Manipur"], ["value", "Meghalaya"], ["value", "Mizoram"], ["value", "Nagaland"], ["value", "Odisha"], ["value", "Punjab"], ["value", "Rajasthan"], ["value", "Sikkim"], ["value", "Tamil Nadu"], ["value", "Telangana"], ["value", "Tripura"], ["value", "Uttar Pradesh"], ["value", "Uttarakhand"], ["value", "West Bengal"], ["formControlName", "country", "type", "text", "id", "defaultSignupFormEmail", "value", "India", "disabled", "", "readonly", "", 1, "form-control"], ["type", "submit", 1, "btn", "elegant-color", "text-white", "btn-sm", "btn-block", "my-4", "rounded"], [1, "deep-orange-text", "small", "m-0"]],
        template: function SellerWelcomePageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tell us about your business");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SellerWelcomePageComponent_Template_input_ngModelChange_10_listener($event) {
              return ctx.code = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SellerWelcomePageComponent_Template_button_click_11_listener() {
              return ctx.searchCode();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SellerWelcomePageComponent_Template_form_ngSubmit_13_listener() {
              return ctx.addSeller(ctx.sellerForm.valid);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Store Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SellerWelcomePageComponent_p_17_Template, 2, 0, "p", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "hr", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Enter your address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Pincode");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Address Line 1 (Required)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, SellerWelcomePageComponent_span_29_Template, 2, 0, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Address Line 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "City");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "State");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "select", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Select State");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Andhra Pradesh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Andaman and Nicobar Islands");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Arunachal Pradesh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Assam");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Bihar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Chandigarh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Chhattisgarh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Dadar and Nagar Haveli");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Daman and Diu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Delhi");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Lakshadweep");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Puducherry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "option", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Goa");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "option", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Gujarat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "option", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Haryana");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "option", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Himachal Pradesh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "option", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Jammu and Kashmir");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "option", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Jharkhand");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "option", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Karnataka");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "option", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Kerala");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "option", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Madhya Pradesh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "option", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Maharashtra");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "option", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Manipur");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "option", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Meghalaya");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "option", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Mizoram");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "option", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Nagaland");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "option", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Odisha");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "option", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Punjab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "option", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Rajasthan");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "option", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Sikkim");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "option", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Tamil Nadu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "option", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Telangana");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "option", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Tripura");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "option", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Uttar Pradesh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Uttarakhand");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "option", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "West Bengal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "input", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "button", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Save Store Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.code);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.sellerForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.sellerForm.get("storename").valid && ctx.sellerFormAttempt && ctx.sellerForm.get("storename").hasError("required"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.sellerForm.get("address.address1").valid && ctx.sellerFormAttempt && ctx.sellerForm.get("address.address1").hasError("required"));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlci9zZWxsZXItd2VsY29tZS1wYWdlL3NlbGxlci13ZWxjb21lLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SellerWelcomePageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-seller-welcome-page',
            templateUrl: './seller-welcome-page.component.html',
            styleUrls: ['./seller-welcome-page.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _seller_service__WEBPACK_IMPORTED_MODULE_3__["SellerService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ipVn":
    /*!*************************************************************************************!*\
      !*** ./src/app/seller/seller-active-dashboard/seller-active-dashboard.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: SellerActiveDashboardComponent */

    /***/
    function ipVn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellerActiveDashboardComponent", function () {
        return SellerActiveDashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! jquery */
      "EVdn");
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _verification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../verification.service */
      "byiG");
      /* harmony import */


      var _seller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../seller.service */
      "0wAB");
      /* harmony import */


      var _shared_components_side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/components/side-navigation/side-navigation.component */
      "J0GB");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SellerActiveDashboardComponent_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email verification pending. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SellerActiveDashboardComponent_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Verification email has been sent to you. Please check your mail. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SellerActiveDashboardComponent_span_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email has been verified. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SellerActiveDashboardComponent_button_12_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Verify Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SellerActiveDashboardComponent_button_12_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Resend Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SellerActiveDashboardComponent_button_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SellerActiveDashboardComponent_button_12_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.sendVerificationEmail();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SellerActiveDashboardComponent_button_12_span_1_Template, 2, 0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SellerActiveDashboardComponent_button_12_span_2_Template, 2, 0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.sentMail);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.sentMail);
        }
      }

      var SellerActiveDashboardComponent = /*#__PURE__*/function () {
        function SellerActiveDashboardComponent(verificationService, sellerService) {
          _classCallCheck(this, SellerActiveDashboardComponent);

          this.verificationService = verificationService;
          this.sellerService = sellerService;
          this.showSubMenu = false;
          this.userName = '';
          this.mailVerified = false;
          this.sentMail = false;
        }

        _createClass(SellerActiveDashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.mailVerified = localStorage.getItem('verified') ? Boolean(localStorage.getItem('verified')) : false;
            this.sellerService.getUserDetails().subscribe(function (data) {
              console.log('asdasdasda', data);
              _this9.mailVerified = data['data'].isEmailVerified;
              _this9.userName = data['data'].name;
            });
          }
        }, {
          key: "sendVerificationEmail",
          value: function sendVerificationEmail() {
            var reqBody = {
              email: JSON.parse(localStorage.getItem('user')).email
            };
            this.sentMail = true;
            this.verificationService.sendVerificationEmail(reqBody).subscribe(function (data) {
              console.log(data);
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "closeSidebar",
          value: function closeSidebar() {
            jquery__WEBPACK_IMPORTED_MODULE_1__(".page-wrapper").removeClass("toggled");
            jquery__WEBPACK_IMPORTED_MODULE_1__("#show-sidebar").click(function () {
              jquery__WEBPACK_IMPORTED_MODULE_1__(".page-wrapper").addClass("toggled");
            });
          }
        }, {
          key: "submenuToggle",
          value: function submenuToggle() {
            // console.log($(this));
            if (jquery__WEBPACK_IMPORTED_MODULE_1__(this).parent().hasClass("active")) {// alert('hello');
              // $(".sidebar-dropdown").removeClass("active");
              // $(this).parent().removeClass("active");
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_1__('this').parent().addClass("active");
              jquery__WEBPACK_IMPORTED_MODULE_1__(this).next(".sidebar-submenu").slideDown(200); // $(".sidebar-dropdown").removeClass("active");
              // $(".sidebar-dropdown > a").next(".sidebar-submenu").slideUp(200);
            }
          }
        }]);

        return SellerActiveDashboardComponent;
      }();

      SellerActiveDashboardComponent.ɵfac = function SellerActiveDashboardComponent_Factory(t) {
        return new (t || SellerActiveDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_verification_service__WEBPACK_IMPORTED_MODULE_2__["VerificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_seller_service__WEBPACK_IMPORTED_MODULE_3__["SellerService"]));
      };

      SellerActiveDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SellerActiveDashboardComponent,
        selectors: [["app-seller-active-dashboard"]],
        decls: 60,
        vars: 6,
        consts: [[1, "page-wrapper", "chiller-theme", "toggled"], [1, "page-content"], [1, "container-fluid"], [1, "rounded", 3, "ngClass"], [1, "py-2", "px-3", "text-white", "d-flex", "align-items-center", "justify-content-between"], ["class", "m-0 p-0", 4, "ngIf"], ["class", "btn btn-dark btn-sm my-2", 3, "click", 4, "ngIf"], [1, "row"], [1, "col-xs-12", "col-sm-6", "col-md-6", "col-lg-4", "my-2"], [1, "card", "rounded", "default-color-dark", "p-0", "shadow-sm"], [1, "card-body", "text-center", "text-white"], [1, "card-title"], [1, "card", "rounded", "p-0", "special-color-dark", "shadow-sm"], [1, "card-body", "text-white", "text-center"], [1, "card", "rounded", "p-0", "shadow-sm", "primary-color-dark"], [1, "col-xs-12", "col-sm-6", "col-md-6", "col-lg-6", "my-2"], [1, "card", "rounded", "p-0", "shadow-sm"], ["src", "https://miro.medium.com/max/902/1*CPSTzfUTCCpUbllyiPvl_A.jpeg", "alt", "Angular pro sidebar", 1, "card-img-top", "rounded"], [1, "card-body", "text-center"], [1, "text-center"], [1, "mb-2"], [1, "fa", "fa-heart", 2, "color", "red"], [1, "m-0", "p-0"], [1, "btn", "btn-dark", "btn-sm", "my-2", 3, "click"], [4, "ngIf"]],
        template: function SellerActiveDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-side-navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SellerActiveDashboardComponent_span_9_Template, 2, 0, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SellerActiveDashboardComponent_span_10_Template, 2, 0, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SellerActiveDashboardComponent_span_11_Template, 2, 0, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SellerActiveDashboardComponent_button_12_Template, 3, 2, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h6", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Today's Sale");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Rs. 47,000");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h6", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Today's Order");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Rs. 47,000");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h6", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Next Payment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Rs. 47,000");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h6", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Today's Sale");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Rs. 47,000");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h6", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Today's Sale");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Rs. 47,000");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "footer", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " \xA9 2021 made with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " All Rights Reserved ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome ", ctx.userName, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mailVerified ? "bg-success" : ctx.sentMail ? "bg-info" : "bg-danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.sentMail && !ctx.mailVerified);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sentMail && !ctx.mailVerified);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mailVerified);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mailVerified);
          }
        },
        directives: [_shared_components_side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_4__["SideNavigationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlci9zZWxsZXItYWN0aXZlLWRhc2hib2FyZC9zZWxsZXItYWN0aXZlLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SellerActiveDashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-seller-active-dashboard',
            templateUrl: './seller-active-dashboard.component.html',
            styleUrls: ['./seller-active-dashboard.component.css']
          }]
        }], function () {
          return [{
            type: _verification_service__WEBPACK_IMPORTED_MODULE_2__["VerificationService"]
          }, {
            type: _seller_service__WEBPACK_IMPORTED_MODULE_3__["SellerService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ormT":
    /*!*********************************************************************************!*\
      !*** ./src/app/seller/seller-email-verified/seller-email-verified.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: SellerEmailVerifiedComponent */

    /***/
    function ormT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellerEmailVerifiedComponent", function () {
        return SellerEmailVerifiedComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _verification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../verification.service */
      "byiG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SellerEmailVerifiedComponent = /*#__PURE__*/function () {
        function SellerEmailVerifiedComponent(verificationService) {
          _classCallCheck(this, SellerEmailVerifiedComponent);

          this.verificationService = verificationService;
          this.userName = '';
        }

        _createClass(SellerEmailVerifiedComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.verificationService.mailVerified.next(true);
            localStorage.setItem('verified', 'true'); //this.verifiyEmail();
          }
        }, {
          key: "verifiyEmail",
          value: function verifiyEmail() {
            var reqBody = {
              email: JSON.parse(localStorage.getItem('user')).email
            };
            localStorage.setItem('verified', 'true');
            this.verificationService.mailVerified.next(true);
            this.verificationService.verifyEmail(reqBody).subscribe(function (data) {
              console.log('asdasdasd', data);
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return SellerEmailVerifiedComponent;
      }();

      SellerEmailVerifiedComponent.ɵfac = function SellerEmailVerifiedComponent_Factory(t) {
        return new (t || SellerEmailVerifiedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_verification_service__WEBPACK_IMPORTED_MODULE_1__["VerificationService"]));
      };

      SellerEmailVerifiedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SellerEmailVerifiedComponent,
        selectors: [["app-seller-email-verified"]],
        decls: 14,
        vars: 0,
        consts: [[1, "container"], [1, "row", "align-items-center", 2, "min-height", "100vh"], [1, "col", "d-flex", "justify-content-center"], [1, "card", "border-0", "col", "p-0"], [1, "card-body", "text-center", "p-0"], ["aria-hidden", "true", 1, "fa", "fa-check-circle-o", "fa-5x", 2, "color", "#218838"], [1, "card-title", "mt-3"], [1, "card-text"], ["routerLink", "/seller/active-dashboard", 1, "btn", "btn-dark", "m-2"], ["routerLink", "/seller/active-dashboard", 1, "btn", "btn-success", "m-2"]],
        template: function SellerEmailVerifiedComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email Verified");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Your email address successfully verified.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlci9zZWxsZXItZW1haWwtdmVyaWZpZWQvc2VsbGVyLWVtYWlsLXZlcmlmaWVkLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SellerEmailVerifiedComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-seller-email-verified',
            templateUrl: './seller-email-verified.component.html',
            styleUrls: ['./seller-email-verified.component.css']
          }]
        }], function () {
          return [{
            type: _verification_service__WEBPACK_IMPORTED_MODULE_1__["VerificationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "tuFk":
    /*!*****************************************************************************!*\
      !*** ./src/app/seller/seller-profile-page/seller-profile-page.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: SellerProfilePageComponent */

    /***/
    function tuFk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellerProfilePageComponent", function () {
        return SellerProfilePageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _seller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../seller.service */
      "0wAB");
      /* harmony import */


      var _verification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../verification.service */
      "byiG");
      /* harmony import */


      var _shared_components_side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared/components/side-navigation/side-navigation.component */
      "J0GB");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function SellerProfilePageComponent_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email verification pending. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SellerProfilePageComponent_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Verification email has been sent to you. Please check your mail. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SellerProfilePageComponent_span_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email has been verified. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SellerProfilePageComponent_button_12_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Verify Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SellerProfilePageComponent_button_12_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Resend Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SellerProfilePageComponent_button_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SellerProfilePageComponent_button_12_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.sendVerificationEmail();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SellerProfilePageComponent_button_12_span_1_Template, 2, 0, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SellerProfilePageComponent_button_12_span_2_Template, 2, 0, "span", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.sentMail);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.sentMail);
        }
      }

      var SellerProfilePageComponent = /*#__PURE__*/function () {
        function SellerProfilePageComponent(sellerService, verificationService) {
          _classCallCheck(this, SellerProfilePageComponent);

          this.sellerService = sellerService;
          this.verificationService = verificationService;
          this.mailVerified = false;
          this.sentMail = false;
        }

        _createClass(SellerProfilePageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.mailVerified = localStorage.getItem('verified') ? Boolean(localStorage.getItem('verified')) : false;
            this.userName = JSON.parse(localStorage.getItem('user')).name;
            this.getUserDetails();
          }
        }, {
          key: "sendVerificationEmail",
          value: function sendVerificationEmail() {
            var reqBody = {
              email: JSON.parse(localStorage.getItem('user')).email
            };
            this.sentMail = true;
            this.verificationService.sendVerificationEmail(reqBody).subscribe(function (data) {
              console.log(data);
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getUserDetails",
          value: function getUserDetails() {
            var _this10 = this;

            this.sellerService.getUserDetails().subscribe(function (data) {
              console.log(data);
              _this10.user = data['data'];
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return SellerProfilePageComponent;
      }();

      SellerProfilePageComponent.ɵfac = function SellerProfilePageComponent_Factory(t) {
        return new (t || SellerProfilePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_seller_service__WEBPACK_IMPORTED_MODULE_1__["SellerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_verification_service__WEBPACK_IMPORTED_MODULE_2__["VerificationService"]));
      };

      SellerProfilePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SellerProfilePageComponent,
        selectors: [["app-seller-profile-page"]],
        decls: 162,
        vars: 17,
        consts: [[1, "page-wrapper", "chiller-theme", "toggled"], [1, "page-content"], [1, "container-fluid"], [1, "rounded", 3, "ngClass"], [1, "py-2", "px-3", "text-white", "d-flex", "align-items-center", "justify-content-between"], ["class", "m-0 p-0", 4, "ngIf"], ["class", "btn btn-dark btn-sm my-2", 3, "click", 4, "ngIf"], [1, "row", "d-flex", "justify-content-center"], [1, "col-xl-3", "col-lg-4", "my-2"], [1, "card"], [1, "card-body", "p-0"], [1, "card-title", "unique-color-dark", "p-2", "text-white"], [1, "card-text", "p-2"], ["href", "#", 1, "btn", "btn-warning", "btn-sm", "mt-3", "mb-2", "mx-2"], [1, "d-flex", "justify-content-center"], [1, "btn", "btn-primary", "disabled"], [1, "col"], [1, "d-flex", "justify-content-between", "px-2"], ["href", "#", 1, "text-primary"], [1, "mt-4"], [1, "d-flex", "justify-content-around", "row"], [1, "col-4"], [1, "card-header"], [1, "card-body"], [1, "card-text"], ["src", "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png", "alt", "", "width", "40px", 1, "mr-2"], [1, "card-title", 2, "font-weight", "600"], [1, "m-0"], ["type", "text", "id", "name", "placeholder", "Seller Name", 1, "form-control", "mb-4", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "GST", "placeholder", "GST Number", 1, "form-control", "mb-4", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "PAN", "placeholder", "PAN", 1, "form-control", "mb-4", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "my-4", "btn-block"], [1, "row"], [1, "col-2"], ["src", "https://daily.jstor.org/wp-content/uploads/2014/11/NapoleonSignature2_1050x700.jpg", "alt", "", "width", "100px"], [1, "col-10"], [1, "input-group"], [1, "input-group-prepend"], ["id", "inputGroupFileAddon01", 1, "input-group-text"], [1, "custom-file"], ["type", "file", "id", "inputGroupFile01", "aria-describedby", "inputGroupFileAddon01", 1, "custom-file-input"], ["for", "inputGroupFile01", 1, "custom-file-label"], [1, "row", "card-body", "px-0"], [1, "col-6"], [1, "px-3"], [1, "card-body", "py-0"], [1, "mx-3"], ["type", "submit", 1, "btn", "btn-danger", "my-4"], ["type", "submit", 1, "btn", "btn-primary", "my-4", "ml-2"], [1, "text-center"], [1, "mb-2"], [1, "fa", "fa-heart", 2, "color", "red"], [1, "m-0", "p-0"], [1, "btn", "btn-dark", "btn-sm", "my-2", 3, "click"], [4, "ngIf"]],
        template: function SellerProfilePageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-side-navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SellerProfilePageComponent_span_9_Template, 2, 0, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SellerProfilePageComponent_span_10_Template, 2, 0, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SellerProfilePageComponent_span_11_Template, 2, 0, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SellerProfilePageComponent_button_12_Template, 3, 2, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h6", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Payment Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Business Account Information ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Edit Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h6", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Business Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Business Address ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Merchant ID: 1221452");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Edit Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h6", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Shipping & Returns");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Return Information ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Edit Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h6", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Tax Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Manage GST Details ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Edit Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h6", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Account Management");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Login Setting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Close Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Marketplace ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Amazon.in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Store Details ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Customer service details ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Manage Tax Details ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h6", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Confirm your ship from address and update the GSTIN and PAN details associated with the address. Not this address will be used as the primary billing addess.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "label", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Seller Legal Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SellerProfilePageComponent_Template_input_ngModelChange_98_listener($event) {
              return ctx.user.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "label", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "GST Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SellerProfilePageComponent_Template_input_ngModelChange_101_listener($event) {
              return ctx.user.gstin = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "label", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "PAN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SellerProfilePageComponent_Template_input_ngModelChange_104_listener($event) {
              return ctx.user.pan = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " Digital Image Signature ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "To create a digital signature, sign on a white paper, scan the signature and upload it. This signature will be printed on the Customer Tax Invoice (Packing Slip).");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Upload JPEG, JPG Image only, Image size should not exceed 2MB and should be 350 by 70 pixels");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Signature");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "input", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "label", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Choose file");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Upload Signature");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Deposit Method ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "h5", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Bank Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Ending in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "kbd");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](143, "slice");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " Bank Location Country: India ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "button", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Delete Deposit Method");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Edit Deposit Method");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "footer", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " \xA9 2021 made with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "i", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " All Rights Reserved ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mailVerified ? "bg-success" : ctx.sentMail ? "bg-info" : "bg-danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.sentMail && !ctx.mailVerified);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sentMail && !ctx.mailVerified);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mailVerified);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mailVerified);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.storeName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("EMAIL: ", ctx.user == null ? null : ctx.user.email, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("PHONE: ", ctx.user == null ? null : ctx.user.mobile, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.gstin);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.pan);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](143, 13, ctx.user == null ? null : ctx.user.accountNumber, (ctx.user == null ? null : ctx.user.accountNumber.length) - 3, ctx.user == null ? null : ctx.user.accountNumber.length), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Account Holder Name: ", ctx.user == null ? null : ctx.user.accountName, " ");
          }
        },
        directives: [_shared_components_side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_3__["SideNavigationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGxlci9zZWxsZXItcHJvZmlsZS1wYWdlL3NlbGxlci1wcm9maWxlLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SellerProfilePageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-seller-profile-page',
            templateUrl: './seller-profile-page.component.html',
            styleUrls: ['./seller-profile-page.component.css']
          }]
        }], function () {
          return [{
            type: _seller_service__WEBPACK_IMPORTED_MODULE_1__["SellerService"]
          }, {
            type: _verification_service__WEBPACK_IMPORTED_MODULE_2__["VerificationService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=seller-seller-module-es5.js.map