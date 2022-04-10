(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["MyListing-categoriesList-categoriesList-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/MyListing/categoriesList/categoriesList.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/MyListing/categoriesList/categoriesList.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header translucent=\"true\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n    <ion-toolbar>\n      <!-- If Side menu is used-->\n      <ion-buttons *ngIf=\"GlobalFields.site_details.navigationType==2\" slot=\"start\" style=\"position: absolute;\">\n        <ion-menu-button style=\"color: #3b3c3c\"></ion-menu-button>\n      </ion-buttons>\n      <ion-segment *ngIf=\"!GlobalFields.site_details.categoryListTabContent || GlobalFields.site_details.categoryListTabContent == 3\" [(ngModel)]=\"tabShown\" style=\"width: 50%; min-width: fit-content; margin: auto;\">\n          <ion-segment-button value=\"1\">\n              <ion-label>{{'CATEGORIES' | translate}}</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"2\">\n              <ion-label>{{'REGIONS' | translate}}</ion-label>\n          </ion-segment-button>\n      </ion-segment>\n      <ion-title *ngIf=\"GlobalFields.site_details.categoryListTabContent ==1 || GlobalFields.site_details.categoryListTabContent == 2\">\n        <span *ngIf=\"GlobalFields.site_details.categoryListTabContent == 1\">{{'CATEGORIES' | translate}}</span>\n        <span *ngIf=\"GlobalFields.site_details.categoryListTabContent == 2\">{{'REGIONS' | translate}}</span>\n      </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<!-- Categories -->\n<ion-content class=\"cards-bg social-cards\" *ngIf=\"tabShown==1 && GlobalFieldsMyListing.listingCategories\" style=\"margin-top: 20px;\"\n             [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n\n\n\n\n  <!-- Loading animation-->\n  <div *ngIf=\"loading\">\n    <ion-list>\n      <ion-list-header>\n        <ion-label><ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></ion-label>\n      </ion-list-header>\n      <ion-item *ngFor=\"let item of [1,2,3,4,5,6,7,8,9,10]\">\n        <ion-avatar slot=\"start\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-avatar>\n        <ion-label>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n\n    <div *ngFor=\"let type of categories_by_type\" style=\"width: 100%; padding: 15px;\">\n        <h3 *ngIf=\"type.categories && type.categories.length>0\">{{type.type_name}}</h3>\n      <span *ngFor=\"let cat of type.categories\">\n        <ion-row *ngIf=\"cat.count\"  style=\"width: 100%; height: 130px;\"\n                 (click)=\"getListingsByCategory(cat, type.type_id)\">\n            <ion-col style=\"text-align: center\">\n                <!--<div class=\"backImg\" [style.background]=\"getBackground(cat)\">-->\n                <div class=\"backImg\">\n                    <img-loader [src]=\"getBackgroundCached(cat)\" useImg\n                                [imgAttributes]=\"getImgCachedClass('shadedImgCached categoryImgCached')\"></img-loader>\n\n                    <div class=\"text\">\n                        <span class=\"categoryBox\">{{cat.name}}</span>\n                        <br>\n                        <span style=\"position: relative; top: 24%;\">{{cat.count}} {{'LISTINGS' | translate}}</span>\n                    </div>\n                </div>\n            </ion-col>\n        </ion-row>\n      </span>\n    </div>\n\n</ion-content>\n\n<!-- Regions -->\n<ion-content class=\"cards-bg social-cards\" *ngIf=\"tabShown==2 && GlobalFieldsMyListing.regions\" style=\"margin-top: 20px;\"\n             [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n\n\n    <div style=\"width: 100%; padding: 15px;\" *ngIf=\"regions_by_type && regions_by_type.length>0\">\n      <div *ngFor=\"let type of regions_by_type\">\n        <h3 *ngIf=\"type.regions && type.regions.length>0\">{{type.type_name}}</h3>\n        <span *ngFor=\"let reg of type.regions\">\n          <ion-row *ngIf=\"reg.count\" style=\"width: 100%; height: 130px;\"\n                   (click)=\"getListingsByRegion(reg, type.type_id)\">\n              <ion-col style=\"text-align: center\">\n                  <!--<div class=\"backImg\" [style.background]=\"getBackground(cat)\">-->\n                  <div class=\"backImg\">\n                      <img-loader [src]=\"getBackgroundCachedRegions(reg)\" useImg\n                                  [imgAttributes]=\"getImgCachedClass('shadedImgCached categoryImgCached')\"></img-loader>\n                      <div class=\"text\">\n                          <span class=\"categoryBox\">{{reg.name}}</span>\n                          <br>\n                          <span style=\"position: relative; top: 24%;\">{{reg.count}} {{'LISTINGS' | translate}}</span>\n                      </div>\n                  </div>\n              </ion-col>\n          </ion-row>\n        </span>\n      </div>\n\n    </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/MyListing/categoriesList/categoriesList.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/MyListing/categoriesList/categoriesList.module.ts ***!
  \*******************************************************************/
/*! exports provided: CategoriesListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesListModule", function() { return CategoriesListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _categoriesList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./categoriesList */ "./src/app/MyListing/categoriesList/categoriesList.ts");








let CategoriesListModule = class CategoriesListModule {
};
CategoriesListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _categoriesList__WEBPACK_IMPORTED_MODULE_7__["CategoriesList"]
                }
            ])
        ],
        declarations: [_categoriesList__WEBPACK_IMPORTED_MODULE_7__["CategoriesList"]]
    })
], CategoriesListModule);



/***/ }),

/***/ "./src/app/MyListing/categoriesList/categoriesList.scss":
/*!**************************************************************!*\
  !*** ./src/app/MyListing/categoriesList/categoriesList.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".backImg {\n  height: 110px;\n  width: 100%;\n  background-position: center !important;\n  background-size: cover !important;\n  border-radius: 5px;\n  -webkit-box-shadow: 0 4px 8px rgba(0, 0, 0, 0.18);\n  margin-bottom: 5px;\n  margin-top: 5px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.18);\n  display: inline-flex;\n  background-color: black;\n  position: relative;\n  overflow: hidden;\n  overflow-y: hidden;\n}\n\n.text {\n  text-align: center;\n  width: 100%;\n  color: white;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translateY(-50%) translateX(-50%);\n}\n\n.categoryBox {\n  font-weight: 900;\n  font-size: 18pt;\n  position: relative;\n  top: 22%;\n  line-height: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTXlMaXN0aW5nL2NhdGVnb3JpZXNMaXN0L0M6XFxsaXN0XFxpb25pY1xcaW9uaWMtYXBwL3NyY1xcYXBwXFxNeUxpc3RpbmdcXGNhdGVnb3JpZXNMaXN0XFxjYXRlZ29yaWVzTGlzdC5zY3NzIiwic3JjL2FwcC9NeUxpc3RpbmcvY2F0ZWdvcmllc0xpc3QvY2F0ZWdvcmllc0xpc3Quc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esb0RBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL015TGlzdGluZy9jYXRlZ29yaWVzTGlzdC9jYXRlZ29yaWVzTGlzdC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tJbWd7XG4gIGhlaWdodDogMTEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLnRleHR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpO1xufVxuXG4uY2F0ZWdvcnlCb3h7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMThwdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDIyJTtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4iLCIuYmFja0ltZyB7XG4gIGhlaWdodDogMTEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLnRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLmNhdGVnb3J5Qm94IHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAxOHB0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjIlO1xuICBsaW5lLWhlaWdodDogMTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/MyListing/categoriesList/categoriesList.ts":
/*!************************************************************!*\
  !*** ./src/app/MyListing/categoriesList/categoriesList.ts ***!
  \************************************************************/
/*! exports provided: CategoriesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesList", function() { return CategoriesList; });
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
/* harmony import */ var _services_MyListingService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/MyListingService */ "./src/app/services/MyListingService.ts");











let CategoriesList = class CategoriesList {
    constructor(service, mlservice, _sanitizer, translate, locationService, navController) {
        this.service = service;
        this.mlservice = mlservice;
        this._sanitizer = _sanitizer;
        this.translate = translate;
        this.locationService = locationService;
        this.navController = navController;
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"];
        this.GlobalFieldsMyListing = _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_9__["GlobalFieldsMyListing"];
        this.tabShown = 1;
        this.loading = true;
        this.listOfTypes = [];
        this.categories_by_type = [];
        this.regions_by_type = [];
    }
    ngOnInit() {
        this.getCategoriesForEachType();
        this.getRegionsForEachType();
    }
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
    getListingsByCategory(selectedCat, typeId) {
        _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_9__["GlobalFieldsMyListing"].clearFilters();
        if (selectedCat) {
            _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_9__["GlobalFieldsMyListing"].filtersSearch.categories = [selectedCat.name];
            _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_9__["GlobalFieldsMyListing"].filtersSearch.selectedType = typeId;
            // select Listing_LP Type
            _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_9__["GlobalFieldsMyListing"].selectListingTypeDetail();
            _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_9__["GlobalFieldsMyListing"].getFilteredListingFirstTime(this.mlservice, this.locationService, true);
            this.navController.navigateForward('tabs/' + _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].site_details.themeEnabled + '/search');
        }
    }
    getCategoriesForEachType() {
        this.loading = true;
        this.mlservice.getCountByTaxonomy('job_listing_category').subscribe((res) => {
            if (res && res.success && res.data && res.data.length > 0) {
                res.data.forEach(type => {
                    this.categories_by_type.push({ type_id: type.id, type_name: type.title, categories: type.terms });
                });
                this.loading = false;
            }
        }, err => {
            console.log(err);
        });
        /*
        
            GlobalFieldsMyListing.listingTypesDetails.forEach(type => {
              //check if regions in in the search filter
              if(type.categories && type.categories.length>0) {
                const cats = type.categories.filter(cat => cat.count)
                this.categories_by_type.push({type_id: type.ID, type_name: type.post_title, categories: cats});
              }
            })*/
    }
    getRegionsForEachType() {
        this.loading = true;
        this.mlservice.getCountByTaxonomy('region').subscribe((res) => {
            if (res && res.success && res.data && res.data.length > 0) {
                res.data.forEach(type => {
                    this.regions_by_type.push({ type_id: type.id, type_name: type.title, regions: type.terms });
                });
                this.loading = false;
            }
        }, err => {
            console.log(err);
        });
        /*
            GlobalFieldsMyListing.listingTypesDetails.forEach(type => {
              //check if regions in in the search filter
              if (type.case27_listing_type_search_page && type.case27_listing_type_search_page.advanced
                && type.case27_listing_type_search_page.advanced.facets && type.case27_listing_type_search_page.advanced.facets &&
                type.case27_listing_type_search_page.advanced.facets.some(el => el.show_field == 'region')) {
                this.mlservice.getRegionsByType(type.ID).subscribe((data: { success?: boolean, data?: ListingCategory[] }) => {
                  if (data.success)
                    data.data = data.data.filter(reg=> reg.count)
                    this.regions_by_type.push({type_id: type.ID, type_name: type.post_title, regions: data.data});
                });
              }
            });*/
    }
    getListingsByRegion(selectedReg, typeId) {
        _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_9__["GlobalFieldsMyListing"].clearFilters();
        if (selectedReg) {
            console.log(selectedReg);
            _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_9__["GlobalFieldsMyListing"].filtersSearch.region = selectedReg.name;
            _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_9__["GlobalFieldsMyListing"].filtersSearch.selectedType = typeId;
            // select Listing_LP Type
            _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_9__["GlobalFieldsMyListing"].selectListingTypeDetail();
            _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_9__["GlobalFieldsMyListing"].getFilteredListingFirstTime(this.mlservice, this.locationService, true);
            this.navController.navigateForward('tabs/' + _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].site_details.themeEnabled + '/search');
        }
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
    getBackgroundCached(category) {
        let image = '';
        //get the category from the categories call
        if (category.image_url)
            image = category.image_url;
        if (!image)
            image = _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].site_details.placeholderImgUrl;
        return image;
    }
    getBackgroundCachedRegions(reg) {
        if (reg.image_url)
            return reg.image_url;
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
CategoriesList.ctorParameters = () => [
    { type: _services_Service__WEBPACK_IMPORTED_MODULE_4__["Service"] },
    { type: _services_MyListingService__WEBPACK_IMPORTED_MODULE_10__["MyListingService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _services_LocationService__WEBPACK_IMPORTED_MODULE_8__["LocationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
CategoriesList = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'categoriesList',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./categoriesList.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/MyListing/categoriesList/categoriesList.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./categoriesList.scss */ "./src/app/MyListing/categoriesList/categoriesList.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_4__["Service"], _services_MyListingService__WEBPACK_IMPORTED_MODULE_10__["MyListingService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
        _services_LocationService__WEBPACK_IMPORTED_MODULE_8__["LocationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], CategoriesList);



/***/ })

}]);
//# sourceMappingURL=MyListing-categoriesList-categoriesList-module-es2015.js.map