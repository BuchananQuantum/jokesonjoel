(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ListingPro-categoriesList-categoriesList_LP-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/categoriesList/categoriesList_LP.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/categoriesList/categoriesList_LP.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header translucent=\"true\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n    <ion-toolbar>\n      <!-- If Side menu is used-->\n      <ion-buttons *ngIf=\"GlobalFields.site_details.navigationType==2\" slot=\"start\" style=\"position: absolute;\">\n        <ion-menu-button style=\"color: #3b3c3c\"></ion-menu-button>\n      </ion-buttons>\n      <ion-segment *ngIf=\"!GlobalFields.site_details.categoryListTabContent || GlobalFields.site_details.categoryListTabContent == 3\" [(ngModel)]=\"tabShown\" style=\"width: 50%; min-width: fit-content; margin: auto;\">\n          <ion-segment-button value=\"1\">\n              <ion-label>{{'CATEGORIES' | translate}}</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"2\">\n              <ion-label>{{'REGIONS' | translate}}</ion-label>\n          </ion-segment-button>\n      </ion-segment>\n      <ion-title *ngIf=\"GlobalFields.site_details.categoryListTabContent ==1 || GlobalFields.site_details.categoryListTabContent == 2\">\n        <span *ngIf=\"GlobalFields.site_details.categoryListTabContent == 1\">{{'CATEGORIES' | translate}}</span>\n        <span *ngIf=\"GlobalFields.site_details.categoryListTabContent == 2\">{{'REGIONS' | translate}}</span>\n      </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<!-- Categories -->\n<ion-content class=\"cards-bg social-cards\" *ngIf=\"tabShown==1 && GlobalFieldsListingPro.listingCategories\" style=\"margin-top: 20px;\"\n             [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n\n  <div style=\"width: 100%; padding: 15px;\" >\n    <span *ngFor=\"let cat of GlobalFieldsListingPro.listingCategories\">\n      <ion-row *ngIf=\"cat.count\"  style=\"width: 100%; height: 130px;\" (click)=\"getListingsByCategory(cat)\">\n        <ion-col style=\"text-align: center\">\n          <!--<div class=\"backImg\" [style.background]=\"getBackground(cat)\">-->\n          <div class=\"backImg\">\n            <img-loader [src]=\"getBackgroundCachedRegions(cat)\" style=\"width: 100%;\" useImg\n                        [imgAttributes]=\"getImgCachedClass('shadedImgCached categoryImgCached')\"></img-loader>\n\n            <div class=\"text\">\n                <span class=\"categoryBox\">{{cat.name}}</span>\n                <br>\n                <span style=\"position: relative; top: 24%;\">{{cat.count}} {{'LISTINGS' | translate}}</span>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </span>\n  </div>\n\n</ion-content>\n\n<!-- Regions -->\n<ion-content class=\"cards-bg social-cards\" *ngIf=\"tabShown==2 && GlobalFieldsListingPro.regions\" style=\"margin-top: 20px;\"\n             [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n\n  <div style=\"width: 100%; padding: 15px;\" *ngIf=\"GlobalFieldsListingPro.regions && GlobalFieldsListingPro.regions.length>0\">\n    <span *ngFor=\"let reg of GlobalFieldsListingPro.regions\" >\n      <ion-row *ngIf=\"reg.count\" style=\"width: 100%; height: 130px;\"  (click)=\"getListingsByRegion(reg)\">\n        <ion-col style=\"text-align: center\">\n          <!--<div class=\"backImg\" [style.background]=\"getBackground(cat)\">-->\n          <div class=\"backImg\">\n            <img-loader [src]=\"getBackgroundCachedRegions(reg)\" useImg style=\"width: 100%;\"\n                        [imgAttributes]=\"getImgCachedClass('shadedImgCached categoryImgCached')\"></img-loader>\n            <div class=\"text\">\n                <span class=\"categoryBox\">{{reg.name}}</span>\n                <br>\n                <span style=\"position: relative; top: 24%;\">{{reg.count}} {{'LISTINGS' | translate}}</span>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </span>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/ListingPro/categoriesList/categoriesList_LP.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/ListingPro/categoriesList/categoriesList_LP.module.ts ***!
  \***********************************************************************/
/*! exports provided: CategoriesList_LPModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesList_LPModule", function() { return CategoriesList_LPModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _categoriesList_LP__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./categoriesList_LP */ "./src/app/ListingPro/categoriesList/categoriesList_LP.ts");








let CategoriesList_LPModule = class CategoriesList_LPModule {
};
CategoriesList_LPModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _categoriesList_LP__WEBPACK_IMPORTED_MODULE_7__["CategoriesList_LP"]
                }
            ])
        ],
        declarations: [_categoriesList_LP__WEBPACK_IMPORTED_MODULE_7__["CategoriesList_LP"]]
    })
], CategoriesList_LPModule);



/***/ }),

/***/ "./src/app/ListingPro/categoriesList/categoriesList_LP.scss":
/*!******************************************************************!*\
  !*** ./src/app/ListingPro/categoriesList/categoriesList_LP.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".backImg {\n  height: 110px;\n  width: 100%;\n  background-position: center !important;\n  background-size: cover !important;\n  border-radius: 5px;\n  -webkit-box-shadow: 0 4px 8px rgba(0, 0, 0, 0.18);\n  margin-bottom: 5px;\n  margin-top: 5px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.18);\n  display: inline-flex;\n  background-color: black;\n  position: relative;\n  overflow: hidden;\n  overflow-y: hidden;\n}\n\n.text {\n  text-align: center;\n  width: 100%;\n  color: white;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translateY(-50%) translateX(-50%);\n}\n\n.categoryBox {\n  font-weight: 900;\n  font-size: 18pt;\n  position: relative;\n  top: 22%;\n  line-height: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTGlzdGluZ1Byby9jYXRlZ29yaWVzTGlzdC9DOlxcbGlzdFxcaW9uaWNcXGlvbmljLWFwcC9zcmNcXGFwcFxcTGlzdGluZ1Byb1xcY2F0ZWdvcmllc0xpc3RcXGNhdGVnb3JpZXNMaXN0X0xQLnNjc3MiLCJzcmMvYXBwL0xpc3RpbmdQcm8vY2F0ZWdvcmllc0xpc3QvY2F0ZWdvcmllc0xpc3RfTFAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esb0RBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL0xpc3RpbmdQcm8vY2F0ZWdvcmllc0xpc3QvY2F0ZWdvcmllc0xpc3RfTFAuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrSW1ne1xuICBoZWlnaHQ6IDExMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi50ZXh0e1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLmNhdGVnb3J5Qm94e1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDE4cHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyMiU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuIiwiLmJhY2tJbWcge1xuICBoZWlnaHQ6IDExMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi50ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cbi5jYXRlZ29yeUJveCB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMThwdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDIyJTtcbiAgbGluZS1oZWlnaHQ6IDE7XG59Il19 */");

/***/ }),

/***/ "./src/app/ListingPro/categoriesList/categoriesList_LP.ts":
/*!****************************************************************!*\
  !*** ./src/app/ListingPro/categoriesList/categoriesList_LP.ts ***!
  \****************************************************************/
/*! exports provided: CategoriesList_LP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesList_LP", function() { return CategoriesList_LP; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _GlobalFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../GlobalFields */ "./src/app/GlobalFields.ts");
/* harmony import */ var _services_Service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/Service */ "./src/app/services/Service.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _services_LocationService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/LocationService */ "./src/app/services/LocationService.ts");
/* harmony import */ var _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../GlobalFieldsMyListing */ "./src/app/GlobalFieldsMyListing.ts");
/* harmony import */ var _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../GlobalFieldsListingPro */ "./src/app/GlobalFieldsListingPro.ts");
/* harmony import */ var _services_ListingProService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/ListingProService */ "./src/app/services/ListingProService.ts");












let CategoriesList_LP = class CategoriesList_LP {
    constructor(service, lpservice, _sanitizer, translate, locationService, navController) {
        this.service = service;
        this.lpservice = lpservice;
        this._sanitizer = _sanitizer;
        this.translate = translate;
        this.locationService = locationService;
        this.navController = navController;
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"];
        this.GlobalFieldsListingPro = _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_10__["GlobalFieldsListingPro"];
        this.tabShown = 1;
    }
    ngOnInit() { }
    ionViewDidEnter() {
        if (_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].site_details.categoryListTabContent == 1)
            this.tabShown = 1;
        else if (_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].site_details.categoryListTabContent == 2)
            this.tabShown = 2;
        else
            this.tabShown = 1;
        console.log('ionViewDidEnter');
        this.service.setWhiteBlackBackgroundStatusBar();
    }
    getListingsByCategory(selectedCat) {
        _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_10__["GlobalFieldsListingPro"].clearFilters();
        _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_10__["GlobalFieldsListingPro"].filtersSearch.categories = selectedCat.name;
        _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_10__["GlobalFieldsListingPro"].getFilteredListingFirstTime(this.lpservice, this.locationService, true);
        this.navController.navigateForward('tabs/' + _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].site_details.themeEnabled + '/search');
    }
    getListingsByRegion(selectedReg) {
        _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_10__["GlobalFieldsListingPro"].clearFilters();
        _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_10__["GlobalFieldsListingPro"].filtersSearch.locations = selectedReg.name;
        _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_10__["GlobalFieldsListingPro"].getFilteredListingFirstTime(this.lpservice, this.locationService, true);
        this.navController.navigateForward('tabs/' + _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].site_details.themeEnabled + '/search');
    }
    getBackground(category) {
        let image = '';
        //get the category from the categories call
        _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_9__["GlobalFieldsMyListing"].listingCategories.forEach(cat => {
            if (cat.id == category.id)
                image = cat.image_url;
        });
        return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient(to top, rgba(23, 23, 23, 0.38), rgba(23, 23, 23, 0.38)), url(${image})`);
    }
    getBackgroundCachedRegions(reg) {
        if (reg.image)
            return reg.image;
        return _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].site_details.placeholderImgUrl;
    }
    getImgCachedClass(class_to_add) {
        let class_name = 'imgCachedAsBackground ' + class_to_add;
        const imageAttributes = [];
        imageAttributes.push({
            element: 'class',
            value: class_name
        });
        return imageAttributes;
    }
};
CategoriesList_LP.ctorParameters = () => [
    { type: _services_Service__WEBPACK_IMPORTED_MODULE_4__["Service"] },
    { type: _services_ListingProService__WEBPACK_IMPORTED_MODULE_11__["ListingProService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _services_LocationService__WEBPACK_IMPORTED_MODULE_8__["LocationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
CategoriesList_LP = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'categoriesList',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./categoriesList_LP.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/categoriesList/categoriesList_LP.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./categoriesList_LP.scss */ "./src/app/ListingPro/categoriesList/categoriesList_LP.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_4__["Service"], _services_ListingProService__WEBPACK_IMPORTED_MODULE_11__["ListingProService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
        _services_LocationService__WEBPACK_IMPORTED_MODULE_8__["LocationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], CategoriesList_LP);



/***/ })

}]);
//# sourceMappingURL=ListingPro-categoriesList-categoriesList_LP-module-es2015.js.map