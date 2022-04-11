(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ListingPro-categoriesList-categoriesList_LP-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/categoriesList/categoriesList_LP.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/categoriesList/categoriesList_LP.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-header translucent=\"true\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n    <ion-toolbar>\r\n      <!-- If Side menu is used-->\r\n      <ion-buttons *ngIf=\"GlobalFields.site_details.navigationType==2\" slot=\"start\" style=\"position: absolute;\">\r\n        <ion-menu-button style=\"color: #00ffff\"></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-segment *ngIf=\"!GlobalFields.site_details.categoryListTabContent || GlobalFields.site_details.categoryListTabContent == 3\" [(ngModel)]=\"tabShown\" style=\"width: 50%; min-width: fit-content; margin: auto;\">\r\n          <ion-segment-button value=\"1\">\r\n              <ion-label>{{'CATEGORIES' | translate}}</ion-label>\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"2\">\r\n              <ion-label>{{'REGIONS' | translate}}</ion-label>\r\n          </ion-segment-button>\r\n      </ion-segment>\r\n      <ion-title *ngIf=\"GlobalFields.site_details.categoryListTabContent ==1 || GlobalFields.site_details.categoryListTabContent == 2\">\r\n        <span *ngIf=\"GlobalFields.site_details.categoryListTabContent == 1\">{{'CATEGORIES' | translate}}</span>\r\n        <span *ngIf=\"GlobalFields.site_details.categoryListTabContent == 2\">{{'REGIONS' | translate}}</span>\r\n      </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<!-- Categories -->\r\n<ion-content class=\"cards-bg social-cards\" *ngIf=\"tabShown==1 && GlobalFieldsListingPro.listingCategories\" style=\"margin-top: 20px;\"\r\n             [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n\r\n  <div style=\"width: 100%; padding: 15px;\" >\r\n    <span *ngFor=\"let cat of GlobalFieldsListingPro.listingCategories\">\r\n      <ion-row *ngIf=\"cat.count\"  style=\"width: 100%; height: 130px;\" (click)=\"getListingsByCategory(cat)\">\r\n        <ion-col style=\"text-align: center\">\r\n          <!--<div class=\"backImg\" [style.background]=\"getBackground(cat)\">-->\r\n          <div class=\"backImg\">\r\n            <img-loader [src]=\"getBackgroundCachedRegions(cat)\" style=\"width: 100%;\" useImg\r\n                        [imgAttributes]=\"getImgCachedClass('shadedImgCached categoryImgCached')\"></img-loader>\r\n\r\n            <div class=\"text\">\r\n                <span class=\"categoryBox\">{{cat.name}}</span>\r\n                <br>\r\n                <span style=\"position: relative; top: 24%;\">{{cat.count}} {{'LISTINGS' | translate}}</span>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </span>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<!-- Regions -->\r\n<ion-content class=\"cards-bg social-cards\" *ngIf=\"tabShown==2 && GlobalFieldsListingPro.regions\" style=\"margin-top: 20px;\"\r\n             [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n\r\n  <div style=\"width: 100%; padding: 15px;\" *ngIf=\"GlobalFieldsListingPro.regions && GlobalFieldsListingPro.regions.length>0\">\r\n    <span *ngFor=\"let reg of GlobalFieldsListingPro.regions\" >\r\n      <ion-row *ngIf=\"reg.count\" style=\"width: 100%; height: 130px;\"  (click)=\"getListingsByRegion(reg)\">\r\n        <ion-col style=\"text-align: center\">\r\n          <!--<div class=\"backImg\" [style.background]=\"getBackground(cat)\">-->\r\n          <div class=\"backImg\">\r\n            <img-loader [src]=\"getBackgroundCachedRegions(reg)\" useImg style=\"width: 100%;\"\r\n                        [imgAttributes]=\"getImgCachedClass('shadedImgCached categoryImgCached')\"></img-loader>\r\n            <div class=\"text\">\r\n                <span class=\"categoryBox\">{{reg.name}}</span>\r\n                <br>\r\n                <span style=\"position: relative; top: 24%;\">{{reg.count}} {{'LISTINGS' | translate}}</span>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </span>\r\n  </div>\r\n\r\n</ion-content>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".backImg {\n  height: 110px;\n  width: 100%;\n  background-position: center !important;\n  background-size: cover !important;\n  border-radius: 5px;\n  -webkit-box-shadow: 0 4px 8px rgba(0, 0, 0, 0.18);\n  margin-bottom: 5px;\n  margin-top: 5px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.18);\n  display: inline-flex;\n  background-color: black;\n  position: relative;\n  overflow: hidden;\n  overflow-y: hidden;\n}\n\n.text {\n  text-align: center;\n  width: 100%;\n  color: white;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translateY(-50%) translateX(-50%);\n}\n\n.categoryBox {\n  font-weight: 900;\n  font-size: 18pt;\n  position: relative;\n  top: 22%;\n  line-height: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTGlzdGluZ1Byby9jYXRlZ29yaWVzTGlzdC9DOlxcam9rZXNvbmpvZWxcXGpva2Vzb25qb2VsL3NyY1xcYXBwXFxMaXN0aW5nUHJvXFxjYXRlZ29yaWVzTGlzdFxcY2F0ZWdvcmllc0xpc3RfTFAuc2NzcyIsInNyYy9hcHAvTGlzdGluZ1Byby9jYXRlZ29yaWVzTGlzdC9jYXRlZ29yaWVzTGlzdF9MUC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpREFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlDQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxvREFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvTGlzdGluZ1Byby9jYXRlZ29yaWVzTGlzdC9jYXRlZ29yaWVzTGlzdF9MUC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tJbWd7XHJcbiAgaGVpZ2h0OiAxMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuXHJcbi50ZXh0e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcblxyXG4uY2F0ZWdvcnlCb3h7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBmb250LXNpemU6IDE4cHQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMjIlO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcbiIsIi5iYWNrSW1nIHtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4udGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpO1xufVxuXG4uY2F0ZWdvcnlCb3gge1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDE4cHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyMiU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufSJdfQ== */");

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