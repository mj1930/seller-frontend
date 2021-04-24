(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "8/IB":
    /*!********************************************!*\
      !*** ./src/app/product/product.service.ts ***!
      \********************************************/

    /*! exports provided: ProductService */

    /***/
    function IB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductService", function () {
        return ProductService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ProductService = /*#__PURE__*/function () {
        function ProductService(http) {
          _classCallCheck(this, ProductService);

          this.http = http;
        }

        _createClass(ProductService, [{
          key: "addProduct",
          value: function addProduct(req) {
            return this.http.post('products/add-product-info', req);
          }
        }, {
          key: "addProductVariation",
          value: function addProductVariation(req) {
            return this.http.post('products/add-product-variation', req);
          }
        }, {
          key: "addProductSellingInfo",
          value: function addProductSellingInfo(req) {
            return this.http.post('products/add-product-selling-info', req);
          }
        }, {
          key: "addProductImages",
          value: function addProductImages(req) {
            return this.http.post('products/add-product-images', req);
          }
        }, {
          key: "addProductDescription",
          value: function addProductDescription(req) {
            return this.http.post('products/add-product-desc-info', req);
          }
        }, {
          key: "getCategories",
          value: function getCategories(body) {
            return this.http.post('category/get-all-categories', body);
          }
        }, {
          key: "getSubCategories",
          value: function getSubCategories(body) {
            return this.http.post('category/get-all-subcategories', body);
          }
        }, {
          key: "getProducts",
          value: function getProducts(req) {
            return this.http.post('products/get-all-products', req);
          }
        }, {
          key: "searchProduct",
          value: function searchProduct(term) {
            return this.http.get("products/search-products?term=".concat(term));
          }
        }, {
          key: "getProductDetails",
          value: function getProductDetails(id) {
            return this.http.get("products/get-product-details/".concat(id));
          }
        }]);

        return ProductService;
      }();

      ProductService.ɵfac = function ProductService_Factory(t) {
        return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProductService,
        factory: ProductService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
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
    "ZNij":
    /*!******************************************************************!*\
      !*** ./src/app/shared/services/auth-guard/auth-guard.service.ts ***!
      \******************************************************************/

    /*! exports provided: AuthGuardService */

    /***/
    function ZNij(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
        return AuthGuardService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../authentication/auth.service */
      "W4xs");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthGuardService = /*#__PURE__*/function () {
        function AuthGuardService(auth, router) {
          _classCallCheck(this, AuthGuardService);

          this.auth = auth;
          this.router = router;
        }

        _createClass(AuthGuardService, [{
          key: "canActivate",
          value: function canActivate() {
            if (!this.auth.isAuthenticated()) {
              this.router.navigate(['login']);
              return false;
            }

            return true;
          }
        }]);

        return AuthGuardService;
      }();

      AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
        return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuardService,
        factory: AuthGuardService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _authentication_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map