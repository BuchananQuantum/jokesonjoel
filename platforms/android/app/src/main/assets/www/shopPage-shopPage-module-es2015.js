(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shopPage-shopPage-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Shared/shopPage/orderPage/orderPage.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Shared/shopPage/orderPage/orderPage.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n  <ion-toolbar dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"tabs/shop\" (click)=\"GlobalFields.selectedProduct = undefined\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Checkout</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n\r\n\r\n  <iframe [src]='secureUrl'\r\n          #iframe\r\n          webkitallowfullscreen mozallowfullscreen allowfullscreen\r\n          sandbox=\"allow-scripts allow-top-navigation allow-pointer-lock allow-forms allow-same-origin allow-popups\"\r\n          style=\"width: 100%; height: 100%; border: none\">\r\n  </iframe>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Shared/shopPage/productPage/productPage.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Shared/shopPage/productPage/productPage.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n  <ion-toolbar dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"tabs/shop\" (click)=\"GlobalFields.selectedProduct = undefined\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title *ngIf=\"GlobalFields.selectedProduct\">{{GlobalFields.selectedProduct.name}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n\r\n  <div *ngIf=\"GlobalFields.selectedProduct\" style=\"margin: 10px\">\r\n    <ion-slides *ngIf=\"GlobalFields.selectedProduct.images && GlobalFields.selectedProduct.images.length>0\">\r\n      <ion-slide *ngFor=\"let img of GlobalFields.selectedProduct.images\" style=\"background-color: whitesmoke;\">\r\n      <div style=\"text-align: center; background-color: whitesmoke;\">\r\n        <img src=\"{{img.src}}\" style=\"height: 150px; width: auto\"/>\r\n      </div>\r\n      </ion-slide>\r\n    </ion-slides>\r\n    <ion-card-header>\r\n      <ion-card-subtitle [innerHTML]=\"GlobalFields.selectedProduct.price_html\"></ion-card-subtitle>\r\n      <ion-card-title style=\"font-size: 12pt\">\r\n        {{GlobalFields.selectedProduct.name}}\r\n      </ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <div [innerHTML]=\"GlobalFields.selectedProduct.short_description\"></div>\r\n\r\n      <br><br>\r\n      <div style=\"text-align: center\">\r\n        <button style=\"margin-bottom: 10px; padding: 10px; border-radius: 50px; box-shadow: 0 2px 8px rgba(0,0,0,.15)!important; background-color: white;\" (click)=\"goToOrder()\">\r\n          <i class=\"fas fa-shopping-cart\"></i> {{'BUY_NOW' | translate}}\r\n        </button>\r\n      </div>\r\n\r\n\r\n    </ion-card-content>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Shared/shopPage/shopPage.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Shared/shopPage/shopPage.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\" mode=\"{{GlobalFields.mode}}\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n  <ion-toolbar>\r\n    <!-- If Side menu is used-->\r\n    <ion-buttons *ngIf=\"GlobalFields.site_details.navigationType==2\" slot=\"start\">\r\n      <ion-menu-button style=\"color: #3b3c3c\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>{{'SHOP' | translate}}</ion-title>\r\n    <ion-buttons slot=\"end\" style=\"position: absolute; right: 5px\">\r\n      <button *ngIf=\"!showFilters\" class=\"btn-search-header\" (click)=\"showFilters=!showFilters\" dir=\"{{GlobalFields.getLanguageLayout()}}\"><i class=\"fas fa-search\"></i></button>\r\n      <button *ngIf=\"showFilters\" class=\"btn-search-header\" style=\"color: red; padding: 8px 10px\" (click)=\"showFilters=!showFilters\" dir=\"{{GlobalFields.getLanguageLayout()}}\"><i class=\"fas fa-times\"></i></button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n\r\n  <ion-header *ngIf=\"!showFilters\" collapse=\"condense\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n    <ion-toolbar style=\"padding: 15px\">\r\n      <ion-title size=\"large\">{{'SHOP' | translate}}</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <div class=\"filtersBox\" *ngIf=\"showFilters\"  dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n    <ion-row  dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n      <ion-col size=\"4\"><b>{{'CATEGORIES' | translate}}:</b></ion-col>\r\n      <ion-col size=\"6\">\r\n        <span *ngFor=\"let cat of categories\">\r\n          <input type=\"checkbox\" id=\"{{'cat' + cat.id}}\" name=\"{{'cat' + cat.id}}\" [(ngModel)]=\"cat.selected\">\r\n          <label for=\"{{'cat' + cat.id}}\" style=\"padding-left: 10px;\">{{cat.name}}</label><br>\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <div style=\"text-align: right\"  dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n      <button class=\"btn-search-header\" style=\"position: relative\" [ngStyle]=\"GlobalFields.getPrimaryColorJson()\" (click)=\"loadFirstTimeProducts(); showFilters=false\">\r\n        <ion-icon name=\"search\"></ion-icon> {{'SHOW_RESULTS' | translate}}\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div *ngIf=\"!loading && products && products.length==0\" style=\"padding: 20px\">\r\n    No products\r\n  </div>\r\n\r\n  <span *ngFor=\"let prod of products\" >\r\n   <productList [product]=\"prod\"></productList>\r\n  </span>\r\n\r\n  <!-- Paging -->\r\n  <div *ngIf=\"!loading && products && lastNumber>19\" style=\"width: 100%; text-align: center; margin-top: 10px; margin-bottom: 20px;\" (click)=\"loadMoreProducts()\">\r\n    <ion-icon name=\"refresh\"></ion-icon> {{'LOAD_MORE' | translate}}\r\n  </div>\r\n\r\n  <!-- Loading -->\r\n  <div *ngIf=\"loading\">\r\n    <ion-list style=\"padding: 15px\">\r\n      <div *ngFor=\"let items of [1,2,3]\">\r\n        <ion-thumbnail style=\"width: 100%; height: 200px;\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-thumbnail>\r\n        <ion-label>\r\n          <h3><ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></h3>\r\n          <p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>\r\n          <p><ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text></p>\r\n        </ion-label>\r\n        <br>\r\n      </div>\r\n    </ion-list>\r\n  </div>\r\n\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/Shared/shopPage/orderPage/orderPage.scss":
/*!**********************************************************!*\
  !*** ./src/app/Shared/shopPage/orderPage/orderPage.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1NoYXJlZC9zaG9wUGFnZS9vcmRlclBhZ2Uvb3JkZXJQYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/Shared/shopPage/orderPage/orderPage.ts":
/*!********************************************************!*\
  !*** ./src/app/Shared/shopPage/orderPage/orderPage.ts ***!
  \********************************************************/
/*! exports provided: OrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPage", function() { return OrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/Service */ "./src/app/services/Service.ts");
/* harmony import */ var _GlobalFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../GlobalFields */ "./src/app/GlobalFields.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





let OrderPage = class OrderPage {
    constructor(service, sanitizer) {
        this.service = service;
        this.sanitizer = sanitizer;
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"];
        this.secureUrl = this.getSecurePageURL();
    }
    ionViewDidEnter() {
        this.service.setWhiteBlackBackgroundStatusBar();
        this.GlobalFields.selectedProduct;
    }
    getSecurePageURL() {
        let url = this.GlobalFields.selectedOrderUrl;
        this.GlobalFields.selectedOrderUrl = undefined;
        if (!url.includes("https")) {
            url.replace("http", "https");
        }
        return this.sanitizer.bypassSecurityTrustResourceUrl(url + '?cookie=' + _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].profile.cookie);
    }
};
OrderPage.ctorParameters = () => [
    { type: _services_Service__WEBPACK_IMPORTED_MODULE_2__["Service"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
];
OrderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-order',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./orderPage.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Shared/shopPage/orderPage/orderPage.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./orderPage.scss */ "./src/app/Shared/shopPage/orderPage/orderPage.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_2__["Service"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
], OrderPage);



/***/ }),

/***/ "./src/app/Shared/shopPage/productPage/productPage.scss":
/*!**************************************************************!*\
  !*** ./src/app/Shared/shopPage/productPage/productPage.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1NoYXJlZC9zaG9wUGFnZS9wcm9kdWN0UGFnZS9wcm9kdWN0UGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/Shared/shopPage/productPage/productPage.ts":
/*!************************************************************!*\
  !*** ./src/app/Shared/shopPage/productPage/productPage.ts ***!
  \************************************************************/
/*! exports provided: ProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPage", function() { return ProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/Service */ "./src/app/services/Service.ts");
/* harmony import */ var _GlobalFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../GlobalFields */ "./src/app/GlobalFields.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");






let ProductPage = class ProductPage {
    constructor(service, router, inAppBrowser) {
        this.service = service;
        this.router = router;
        this.inAppBrowser = inAppBrowser;
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"];
        this.products = [];
    }
    ionViewDidEnter() {
        if (!_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedProduct)
            this.router.navigateByUrl('/tabs/shop');
        this.service.setWhiteBlackBackgroundStatusBar();
    }
    goToOrder() {
        // this.router.navigate(['tabs/shop/order'])
        let url = _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedProduct.permalink;
        if (_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].profile)
            url = url + '?cla_cookie=' + _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].profile.cookie;
        const browser = this.inAppBrowser.create(url, '_blank');
    }
};
ProductPage.ctorParameters = () => [
    { type: _services_Service__WEBPACK_IMPORTED_MODULE_2__["Service"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"] }
];
ProductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-product',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./productPage.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Shared/shopPage/productPage/productPage.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./productPage.scss */ "./src/app/Shared/shopPage/productPage/productPage.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_2__["Service"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"]])
], ProductPage);



/***/ }),

/***/ "./src/app/Shared/shopPage/shopPage.module.ts":
/*!****************************************************!*\
  !*** ./src/app/Shared/shopPage/shopPage.module.ts ***!
  \****************************************************/
/*! exports provided: ShopPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopPageModule", function() { return ShopPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shopPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shopPage */ "./src/app/Shared/shopPage/shopPage.ts");
/* harmony import */ var _orderPage_orderPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./orderPage/orderPage */ "./src/app/Shared/shopPage/orderPage/orderPage.ts");
/* harmony import */ var _productPage_productPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./productPage/productPage */ "./src/app/Shared/shopPage/productPage/productPage.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");










let ShopPageModule = class ShopPageModule {
};
ShopPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _shopPage__WEBPACK_IMPORTED_MODULE_6__["ShopPage"]
                }, {
                    path: 'product',
                    component: _productPage_productPage__WEBPACK_IMPORTED_MODULE_8__["ProductPage"]
                }, {
                    path: 'order',
                    component: _orderPage_orderPage__WEBPACK_IMPORTED_MODULE_7__["OrderPage"]
                }
            ]),
            _shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
        ],
        declarations: [_shopPage__WEBPACK_IMPORTED_MODULE_6__["ShopPage"], _orderPage_orderPage__WEBPACK_IMPORTED_MODULE_7__["OrderPage"], _productPage_productPage__WEBPACK_IMPORTED_MODULE_8__["ProductPage"]]
    })
], ShopPageModule);



/***/ }),

/***/ "./src/app/Shared/shopPage/shopPage.scss":
/*!***********************************************!*\
  !*** ./src/app/Shared/shopPage/shopPage.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".filtersBox {\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.09);\n  padding: 10px;\n  margin: 10px;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvU2hhcmVkL3Nob3BQYWdlL0M6XFxqb2tlc29uam9lbFxcam9rZXNvbmpvZWwvc3JjXFxhcHBcXFNoYXJlZFxcc2hvcFBhZ2VcXHNob3BQYWdlLnNjc3MiLCJzcmMvYXBwL1NoYXJlZC9zaG9wUGFnZS9zaG9wUGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9TaGFyZWQvc2hvcFBhZ2Uvc2hvcFBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0ZXJzQm94e1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDhweCByZ2IoMCAwIDAgLyA5JSk7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuIiwiLmZpbHRlcnNCb3gge1xuICBib3gtc2hhZG93OiAwIDFweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Shared/shopPage/shopPage.ts":
/*!*********************************************!*\
  !*** ./src/app/Shared/shopPage/shopPage.ts ***!
  \*********************************************/
/*! exports provided: ShopPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopPage", function() { return ShopPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/Service */ "./src/app/services/Service.ts");
/* harmony import */ var _GlobalFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../GlobalFields */ "./src/app/GlobalFields.ts");
/* harmony import */ var _services_WooCommerceService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/WooCommerceService */ "./src/app/services/WooCommerceService.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");






let ShopPage = class ShopPage {
    constructor(service, wooCommerceService, translate) {
        this.service = service;
        this.wooCommerceService = wooCommerceService;
        this.translate = translate;
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"];
        this.products = [];
        this.categories = [];
        this.loading = true;
        this.lastNumber = 20;
        this.page = 1;
        this.showFilters = false;
        this.loadFirstTimeProducts();
        this.loadCategories();
    }
    ionViewDidEnter() {
        this.service.setWhiteBlackBackgroundStatusBar();
    }
    loadCategories() {
        this.wooCommerceService.getAllProductCategories(0).subscribe((res) => {
            if (res && res.length > 0)
                this.categories = this.categories.concat(res);
        });
    }
    loadFirstTimeProducts() {
        this.page = 0;
        this.products = [];
        this.loadMoreProducts();
    }
    loadMoreProducts() {
        this.loading = true;
        //User can add listings, so show packages
        /*if (GlobalFields.isLoggedIn && GlobalFields.userRole.can_add_listings) {
          this.wooCommerceService.getPromotionPackages(this.page).subscribe((res: Product[]) => {
            if (res && res.length > 0) {
              this.products = this.products.concat(res);
              this.lastNumber = res.length;
              this.page = this.page + 1;
            } else
              this.lastNumber = 0;
            this.loadingHard = false;
          });
        }*/
        //User CANNOT add listings, show all products
        //  else {
        const categoriesSelected = [];
        if (this.categories && this.categories.length > 0)
            this.categories.forEach(cat => {
                if (cat.selected)
                    categoriesSelected.push(cat.id);
            });
        this.wooCommerceService.getAllProducts(this.page, categoriesSelected).subscribe((res) => {
            if (res && res.length > 0) {
                this.products = this.products.concat(res);
                this.lastNumber = res.length;
                this.page = this.page + 1;
            }
            else
                this.lastNumber = 0;
            this.loading = false;
        });
        // }
    }
};
ShopPage.ctorParameters = () => [
    { type: _services_Service__WEBPACK_IMPORTED_MODULE_2__["Service"] },
    { type: _services_WooCommerceService__WEBPACK_IMPORTED_MODULE_4__["WooCommerceService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
];
ShopPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-shop',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./shopPage.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Shared/shopPage/shopPage.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./shopPage.scss */ "./src/app/Shared/shopPage/shopPage.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_2__["Service"], _services_WooCommerceService__WEBPACK_IMPORTED_MODULE_4__["WooCommerceService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
], ShopPage);



/***/ })

}]);
//# sourceMappingURL=shopPage-shopPage-module-es2015.js.map