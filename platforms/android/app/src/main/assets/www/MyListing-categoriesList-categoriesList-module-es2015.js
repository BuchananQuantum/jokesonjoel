(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["MyListing-categoriesList-categoriesList-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/MyListing/categoriesList/categoriesList.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/MyListing/categoriesList/categoriesList.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-header translucent=\"true\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n    <ion-toolbar>\r\n      <!-- If Side menu is used-->\r\n      <ion-buttons *ngIf=\"GlobalFields.site_details.navigationType==2\" slot=\"start\" style=\"position: absolute;\">\r\n        <ion-menu-button style=\"color: #3b3c3c\"></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-segment *ngIf=\"!GlobalFields.site_details.categoryListTabContent || GlobalFields.site_details.categoryListTabContent == 3\" [(ngModel)]=\"tabShown\" style=\"width: 50%; min-width: fit-content; margin: auto;\">\r\n          <ion-segment-button value=\"1\">\r\n              <ion-label>{{'CATEGORIES' | translate}}</ion-label>\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"2\">\r\n              <ion-label>{{'REGIONS' | translate}}</ion-label>\r\n          </ion-segment-button>\r\n      </ion-segment>\r\n      <ion-title *ngIf=\"GlobalFields.site_details.categoryListTabContent ==1 || GlobalFields.site_details.categoryListTabContent == 2\">\r\n        <span *ngIf=\"GlobalFields.site_details.categoryListTabContent == 1\">{{'CATEGORIES' | translate}}</span>\r\n        <span *ngIf=\"GlobalFields.site_details.categoryListTabContent == 2\">{{'REGIONS' | translate}}</span>\r\n      </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<!-- Categories -->\r\n<ion-content class=\"cards-bg social-cards\" *ngIf=\"tabShown==1 && GlobalFieldsMyListing.listingCategories\" style=\"margin-top: 20px;\"\r\n             [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n\r\n\r\n\r\n\r\n  <!-- Loading animation-->\r\n  <div *ngIf=\"loading\">\r\n    <ion-list>\r\n      <ion-list-header>\r\n        <ion-label><ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></ion-label>\r\n      </ion-list-header>\r\n      <ion-item *ngFor=\"let item of [1,2,3,4,5,6,7,8,9,10]\">\r\n        <ion-avatar slot=\"start\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n\r\n    <div *ngFor=\"let type of categories_by_type\" style=\"width: 100%; padding: 15px;\">\r\n        <h3 *ngIf=\"type.categories && type.categories.length>0\">{{type.type_name}}</h3>\r\n      <span *ngFor=\"let cat of type.categories\">\r\n        <ion-row *ngIf=\"cat.count\"  style=\"width: 100%; height: 130px;\"\r\n                 (click)=\"getListingsByCategory(cat, type.type_id)\">\r\n            <ion-col style=\"text-align: center\">\r\n                <!--<div class=\"backImg\" [style.background]=\"getBackground(cat)\">-->\r\n                <div class=\"backImg\">\r\n                    <img-loader [src]=\"getBackgroundCached(cat)\" useImg\r\n                                [imgAttributes]=\"getImgCachedClass('shadedImgCached categoryImgCached')\"></img-loader>\r\n\r\n                    <div class=\"text\">\r\n                        <span class=\"categoryBox\">{{cat.name}}</span>\r\n                        <br>\r\n                        <span style=\"position: relative; top: 24%;\">{{cat.count}} {{'LISTINGS' | translate}}</span>\r\n                    </div>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n      </span>\r\n    </div>\r\n\r\n</ion-content>\r\n\r\n<!-- Regions -->\r\n<ion-content class=\"cards-bg social-cards\" *ngIf=\"tabShown==2 && GlobalFieldsMyListing.regions\" style=\"margin-top: 20px;\"\r\n             [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n\r\n\r\n    <div style=\"width: 100%; padding: 15px;\" *ngIf=\"regions_by_type && regions_by_type.length>0\">\r\n      <div *ngFor=\"let type of regions_by_type\">\r\n        <h3 *ngIf=\"type.regions && type.regions.length>0\">{{type.type_name}}</h3>\r\n        <span *ngFor=\"let reg of type.regions\">\r\n          <ion-row *ngIf=\"reg.count\" style=\"width: 100%; height: 130px;\"\r\n                   (click)=\"getListingsByRegion(reg, type.type_id)\">\r\n              <ion-col style=\"text-align: center\">\r\n                  <!--<div class=\"backImg\" [style.background]=\"getBackground(cat)\">-->\r\n                  <div class=\"backImg\">\r\n                      <img-loader [src]=\"getBackgroundCachedRegions(reg)\" useImg\r\n                                  [imgAttributes]=\"getImgCachedClass('shadedImgCached categoryImgCached')\"></img-loader>\r\n                      <div class=\"text\">\r\n                          <span class=\"categoryBox\">{{reg.name}}</span>\r\n                          <br>\r\n                          <span style=\"position: relative; top: 24%;\">{{reg.count}} {{'LISTINGS' | translate}}</span>\r\n                      </div>\r\n                  </div>\r\n              </ion-col>\r\n          </ion-row>\r\n        </span>\r\n      </div>\r\n\r\n    </div>\r\n\r\n</ion-content>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".backImg {\n  height: 110px;\n  width: 100%;\n  background-position: center !important;\n  background-size: cover !important;\n  border-radius: 5px;\n  -webkit-box-shadow: 0 4px 8px rgba(0, 0, 0, 0.18);\n  margin-bottom: 5px;\n  margin-top: 5px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.18);\n  display: inline-flex;\n  background-color: black;\n  position: relative;\n  overflow: hidden;\n  overflow-y: hidden;\n}\n\n.text {\n  text-align: center;\n  width: 100%;\n  color: white;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translateY(-50%) translateX(-50%);\n}\n\n.categoryBox {\n  font-weight: 900;\n  font-size: 18pt;\n  position: relative;\n  top: 22%;\n  line-height: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTXlMaXN0aW5nL2NhdGVnb3JpZXNMaXN0L0M6XFxqb2tlc29uam9lbFxcam9rZXNvbmpvZWwvc3JjXFxhcHBcXE15TGlzdGluZ1xcY2F0ZWdvcmllc0xpc3RcXGNhdGVnb3JpZXNMaXN0LnNjc3MiLCJzcmMvYXBwL015TGlzdGluZy9jYXRlZ29yaWVzTGlzdC9jYXRlZ29yaWVzTGlzdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpREFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlDQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxvREFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvTXlMaXN0aW5nL2NhdGVnb3JpZXNMaXN0L2NhdGVnb3JpZXNMaXN0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja0ltZ3tcclxuICBoZWlnaHQ6IDExMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG5cclxuLnRleHR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuXHJcbi5jYXRlZ29yeUJveHtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGZvbnQtc2l6ZTogMThwdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAyMiU7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuIiwiLmJhY2tJbWcge1xuICBoZWlnaHQ6IDExMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi50ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cbi5jYXRlZ29yeUJveCB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMThwdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDIyJTtcbiAgbGluZS1oZWlnaHQ6IDE7XG59Il19 */");

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