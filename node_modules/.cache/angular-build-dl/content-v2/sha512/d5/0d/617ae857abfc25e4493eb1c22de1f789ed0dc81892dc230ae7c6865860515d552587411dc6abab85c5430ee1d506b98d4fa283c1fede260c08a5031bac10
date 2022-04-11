function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ListingPro-home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/home/home.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/home/home.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppListingProHomeHomeHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<!-- If Side menu is used-->\r\n<ion-header class=\"ion-header\" *ngIf=\"GlobalFields.site_details.navigationType==2\" translucent=\"false\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n  <ion-toolbar [class.sidebarHeader]=\"GlobalFields.site_details.homeType != 1 \">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button style=\"color: #00ffff\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <div *ngIf=\"GlobalFields.site_details.logoUrl\" style=\"text-align: center; width: 100%\">\r\n      <h2 class=\"logo-header\">UberBooty</h2>\r\n    </div>\r\n    <ion-title *ngIf=\"!GlobalFields.site_details.logoUrl\">{{appName}}</ion-title>\r\n    <ion-buttons slot=\"end\" style=\"margin-right: 10px\">\r\n      <button class=\"btn-search-header\" (click)=\"openModalSearch()\" dir=\"{{GlobalFields.getLanguageLayout()}}\"><i class=\"fas fa-search\"></i></button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- Header Airbnb type home if TABS-->\r\n<ion-header *ngIf=\"GlobalFields.site_details.homeType == 1 && GlobalFields.site_details.navigationType==1\" [class]=\"headerClass\"   dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n  <ion-toolbar>\r\n    <!-- If Side menu is used-->\r\n    <ion-buttons *ngIf=\"GlobalFields.site_details.navigationType==2\"  slot=\"start\">\r\n      <ion-menu-button style=\"color: #00ffff\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <div style=\"margin: 5px; margin-top: 15px; height: 65px; z-index: 100 !important;\">\r\n      <ion-row class=\"filters\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n          <ion-col no-padding  size=\"2\" style=\"text-align: center\"><img style=\"height: 50px;\" src=\"{{GlobalFields.site_details.logoUrl}}\"></ion-col>\r\n          <ion-col no-padding  size=\"10\">\r\n            <button class=\"btn-search\" (click)=\"openModalSearch()\" dir=\"{{GlobalFields.getLanguageLayout()}}\"><i style=\"color: aliceblue; font-size: 16px;\" class=\"fas fa-search\"></i> {{ 'SEARCH' | translate }} </button>\r\n            <!--<<button *ngIf=\"GlobalFields.address\" class=\"btn-search\" (click)=\"searchNearMe()\" dir=\"{{GlobalFields.getLanguageLayout()}}\"><i class=\"fas fa-search\"></i> {{ 'TRY_WITH' | translate }} \"{{GlobalFields.address}}\"</button>\r\n            <button *ngIf=\"!GlobalFields.address\" class=\"btn-search\" (click)=\"navController.navigateForward('tabs/' + GlobalFields.site_details.themeEnabled + '/search')\" dir=\"{{GlobalFields.getLanguageLayout()}}\"><i class=\"fas fa-search\"></i> {{ 'SEARCH' | translate }} </button>-->\r\n          </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- <ion-content class=\"cards-bg social-cards\" [scrollEvents]=\"true\" (ionScroll)=\"onScrollHideHeader($event)\"> -->\r\n<ion-content class=\"cards-bg social-cards\" dir=\"{{GlobalFields.getLanguageLayout()}}\"  [ngStyle]=\"getBackgroundBasedOnHomeType()\" >\r\n\r\n\r\n  <!-- Airbnb type home-->\r\n    <span class=\"section\" *ngIf=\"GlobalFieldsMyListing.listingTypesDetails && GlobalFields.site_details.homeType == 1\">\r\n        <ion-label class=\"titleSection\">  {{ 'WHAT_SEARCH' | translate }}</ion-label>\r\n        <ion-toolbar>\r\n            <ion-row class=\"filters\">\r\n              <ion-col no-padding col-12>\r\n                <ion-slides [options]=\"slideOpts3\" >\r\n                  <ion-slide *ngFor=\"let category of GlobalFieldsListingPro.listingCategories\" style=\"margin: 0px;\" (click)=\"searchByCat(category.term_id)\">\r\n                    <ion-card style=\"padding: 0;width: 100%; margin-right: 0px !important; margin-bottom: 15px !important;; height: 125px; \">\r\n                      <div *ngIf=\"category.image\" class=\"backImgAirbnbTypes\">\r\n                        <img-loader [src]=\"category.image\" useImg [imgAttributes]=\"getImgCachedClass('imgAirbnbHomeType')\"></img-loader>\r\n                      </div>\r\n                      <div *ngIf=\"!category.image\" class=\"backImgAirbnbTypes\" [style.background]=\"'url(' + GlobalFields.site_details.placeholderImgUrl + ')'\"></div>\r\n                        <ion-card-header style=\" padding: 0; height: 100%; line-height: 35px; text-align: left; padding-left: 15px;\">\r\n                            <span class=\"airbnbTypeName\">{{category.name}}</span>\r\n                        </ion-card-header>\r\n                    </ion-card>\r\n                  </ion-slide>\r\n                  <ion-slide></ion-slide>\r\n                </ion-slides>\r\n              </ion-col>\r\n            </ion-row>\r\n        </ion-toolbar>\r\n    </span>\r\n\r\n\r\n    <!-- Tripadvisor type home-->\r\n    <div *ngIf=\"GlobalFieldsMyListing.listingTypesDetails && GlobalFields.site_details.homeType == 3\">\r\n        <div class=\"backImgTrip\">\r\n            <img-loader *ngIf=\"GlobalFields.site_details.iconUrl\" [src]=\"GlobalFields.site_details.iconUrl\" useImg [imgAttributes]=\"getImgCachedClass('imgAirbnbHomeType')\"></img-loader>\r\n            <div *ngIf=\"!GlobalFields.site_details.iconUrl\" class=\"backImg\" [style.background]=\"'url(' + GlobalFields.site_details.placeholderImgUrl + ')'\"></div>\r\n            <div class=\"btn-search-trip\">\r\n                <button (click)=\"openModalSearch()\" dir=\"{{GlobalFields.getLanguageLayout()}}\"><i class=\"fas fa-search\"></i> {{ 'WHAT_SEARCH' | translate }} </button>\r\n            </div>\r\n        </div>\r\n        <section class=\"gridTripAdvisor\" *ngIf=\"GlobalFieldsMyListing.listingTypesDetails.length>1\">\r\n            <div class=\"divGridTrip\" *ngFor=\"let type of GlobalFieldsMyListing.listingTypesDetails\" (click)=\"searchByCat(type.ID)\">\r\n                <span>\r\n                    <i *ngIf=\"type.icon\" class=\"{{type.icon}}\"></i>\r\n                    <br>\r\n                    {{type.post_title}}\r\n                </span>\r\n            </div>\r\n        </section>\r\n\r\n        <div class=\"section\">\r\n            <ion-label class=\"titleSection\"> {{ 'EXPLORE' | translate }} {{ 'NEAR_YOU' | translate }}</ion-label>\r\n            <div class=\"backImgTrip\" style=\"height: 100px;\">\r\n                <div class=\"backImg\" [style.background]=\"'url(../../assets/imgs/GoogleMapTA.jpg)'\"></div>\r\n                <button class=\"btn-near-trip\" (click)=\"searchNearMe()\" dir=\"{{GlobalFields.getLanguageLayout()}}\"><i class=\"fas fa-map-pin\"></i> {{'SEARCH' | translate}} </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n  <!-- ListingPro type home with custom search -->\r\n  <div *ngIf=\"GlobalFields.site_details.homeType == 2\" class=\"totalPageBackImg \">\r\n\r\n      <img-loader [src]=\"GlobalFields.site_details.lpHomeBackUrl\" useImg [imgAttributes]=\"getImgCachedClass('imgCachedAsBackground shadedImgCached mylistingHomeImgCached')\"></img-loader>\r\n\r\n      <!--  <div class=\"backImgLogo2\" [style.background]=\"'url(' + GlobalFields.site_details.logoUrl + ')'\"></div> -->\r\n        <img *ngIf=\"GlobalFields.site_details.iconUrl\" src=\"{{GlobalFields.site_details.iconUrl}}\" [class]=\"'imgLogoHorizontal' + GlobalFields.getLanguageLayout()\" >\r\n\r\n\r\n        <div class=\"basicSearchContainer\">\r\n          <div class=\"filterSectionBasic\">\r\n            <ion-label class=\"titleSectionFilterBasic\">{{'WHAT' | translate}}</ion-label>\r\n            <ion-input clearInput placeholder=\"{{'WHAT_SEARCH' | translate}}\"  [(ngModel)]=\"GlobalFieldsListingPro.filtersSearch.skeyword\"\r\n                       style=\"margin-left: 30px;width: calc(100% - 30px);\"></ion-input>\r\n          </div>\r\n\r\n          <!-- Where - region/locations -->\r\n          <div class=\"filterSectionBasic\">\r\n            <ion-label class=\"titleSectionFilterBasic\">{{'WHERE' | translate}}</ion-label>\r\n          </div>\r\n          <div class=\"filterSectionBasic\">\r\n\r\n            <i *ngIf=\"!GlobalFieldsListingPro.filtersSearch.location || GlobalFieldsListingPro.filtersSearch.location != GlobalFields.address\" (click)=\"getMyAddress()\" class=\"fas fa-location-arrow\" style=\" float: left; margin-top: 15px;\"></i>\r\n            <i *ngIf=\"GlobalFieldsListingPro.filtersSearch.location && GlobalFieldsListingPro.filtersSearch.location == GlobalFields.address\"  (click)=\"getMyAddress()\" class=\"fas fa-location-arrow\" style=\" float: left; margin-top: 15px;\" [ngStyle]=\"GlobalFields.getPrimaryColorJson()\"></i>\r\n\r\n            <!-- Address -->\r\n            <div style=\"display: flex\"*ngIf=\"GlobalFieldsListingPro.filtersSearch.location\">\r\n              <div style=\"width: 80%; margin: auto; color: #ffffff; font-style: italic; margin: auto; padding: 10px 5px;\"> <!-- Location -->\r\n                {{GlobalFieldsListingPro.filtersSearch.location}}\r\n              </div>\r\n              <div style=\"width: 10%;\" *ngIf=\"GlobalFieldsListingPro.filtersSearch.location\" >\r\n                <i (click)=\"GlobalFieldsListingPro.filtersSearch.location = undefined\" class=\"far fa-trash-alt rightClearBtn\"></i>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Locations-->\r\n            <div *ngIf=\"!GlobalFieldsListingPro.filtersSearch.location\" style=\"width: 100%;\">\r\n              <i *ngIf=\"GlobalFieldsListingPro.filtersSearch.locations && GlobalFieldsListingPro.filtersSearch.locations!=''\" (click)=\"GlobalFieldsListingPro.filtersSearch.locations = undefined\" class=\"far fa-trash-alt rightClearBtn\"></i>\r\n              <ion-item style=\"padding:0px; width: calc(90% - 30px)\">\r\n                <ion-select [cancelText]=\"'CANCEL' | translate\" [okText]=\"'SELECT' | translate\" [(ngModel)]=\"GlobalFieldsListingPro.filtersSearch.locations\" placeholder=\"{{'SELECT' | translate}}\" selectedText=\"{{GlobalFieldsListingPro.filtersSearch.locations}}\">\r\n                  <ion-select-option  *ngFor=\"let r of GlobalFieldsListingPro.regions\" value=\"{{r.name}}\">{{r.name}}</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </div>\r\n\r\n            <!-- proximity -->\r\n            <div *ngIf=\"GlobalFieldsListingPro.filtersSearch.location\">\r\n              <ion-label class=\"titleSectionFilterBasic\"></ion-label>\r\n              {{GlobalFieldsListingPro.filtersSearch.range}} {{GlobalFieldsListingPro.listingTypeDetail.filter_status.lp_nearme_filter_param}}\r\n              <ion-item>\r\n                <ion-range [(ngModel)]=\"GlobalFieldsListingPro.filtersSearch.range\"\r\n                           min=\"{{GlobalFieldsListingPro.listingTypeDetail.filter_status.enable_readious_search_filter_min}}\"\r\n                           max=\"{{GlobalFieldsListingPro.listingTypeDetail.filter_status.enable_readious_search_filter_max}}\"\r\n                           step=\"{{10}}\"\r\n                           color=\"secondary\" pin=\"true\"></ion-range>\r\n              </ion-item>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <ion-button color=\"dark\" expand=\"block\" fill=\"outline\" style=\"margin-top:20px; border-radius: 5px;\" (click)=\"searchByBasicSearchFilter()\"><i class=\"fas fa-search\" style=\"font-size: 16px; padding: 10px; margin-bottom: 2px;\"></i> {{'SEARCH' | translate}}</ion-button>\r\n\r\n        </div>\r\n\r\n        <span class=\"swipe swipeDown swipeSpan\">{{'SWIPE_SEE_MORE' | translate}} <br> <i class=\"fas fa-chevron-down\"></i></span>\r\n\r\n    </div>\r\n\r\n\r\n  <!-- listings by Categories -->\r\n\r\n    <!-- Loading-->\r\n    <div *ngIf=\"loadingByCategories\" class=\"section\">\r\n      <ion-list style=\"padding: 5px\">\r\n        <div *ngFor=\"let items of [1,2,3]\">\r\n          <ion-thumbnail style=\"width: 100%; height: 100px;\">\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3><ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></h3>\r\n            <p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>\r\n            <p><ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text></p>\r\n          </ion-label>\r\n          <br>\r\n        </div>\r\n      </ion-list>\r\n    </div>\r\n\r\n    <!-- GET ONLY THE FIRST 5 CATEGORIES -->\r\n    <div *ngIf=\"!loadingByCategories\">\r\n        <span *ngFor=\"let category of categoryToShow;  let j = index\">\r\n          <!-- Loading-->\r\n          <div *ngIf=\"!byCategoryListings[j]\" class=\"section\">\r\n            <ion-list style=\"padding: 5px\">\r\n              <div *ngFor=\"let items of [1,2,3]\">\r\n                <ion-thumbnail style=\"width: 100%; height: 100px;\">\r\n                  <ion-skeleton-text animated></ion-skeleton-text>\r\n                </ion-thumbnail>\r\n                <ion-label>\r\n                  <h3><ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></h3>\r\n                  <p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>\r\n                  <p><ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text></p>\r\n                </ion-label>\r\n                <br>\r\n              </div>\r\n            </ion-list>\r\n          </div>\r\n            <!-- Listing by category -->\r\n          <div class=\"section\" *ngIf=\"byCategoryListings[j] && byCategoryListings[j].length>0\" style=\"padding-bottom: 0;\">\r\n              <ion-label class=\"titleSection\">\r\n                  {{ 'EXPLORE' | translate }}  {{category.name}}\r\n                  <ion-button  *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" color=\"dark\" fill=\"clear\" class=\"btnLight\" style=\"color:#17d01f; margin-top: 0px; position: absolute; right: 0; font-size: 10pt;\" (click)=\"searchByCat(category.name)\">{{'SEE_ALL' | translate}} ></ion-button>\r\n                  <ion-button  *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" color=\"dark\" fill=\"clear\" class=\"btnLight\" style=\"color:#17d01f; margin-top: 0px; position: absolute; left: 0; font-size: 10pt;\" (click)=\"searchByCat(category.name)\">{{'SEE_ALL' | translate}} ></ion-button>\r\n              </ion-label>\r\n              <div *ngIf=\"!loadingByCategories && byCategoryListings && byCategoryListings.length>0\">\r\n                  <ion-slides [options]=\"slideOpts2\">\r\n                      <ion-slide *ngFor=\"let listing of byCategoryListings[j];  let i = index\"  style=\"padding: 5px;\">\r\n                          <listingList_LP [listing]=\"listing\" [type]=\"'1'\" [search]=\"false\"></listingList_LP>\r\n                      </ion-slide>\r\n                  </ion-slides>\r\n              </div>\r\n              <!-- Loading -->\r\n              <div *ngIf=\"loadingByCategories\">\r\n                <ion-slides  [options]=\"slideOpts2\">\r\n                  <ion-slide *ngFor=\"let items of [1,2,3]\">\r\n                    <ion-thumbnail style=\"width: 100%; height: 100px;\">\r\n                      <ion-skeleton-text animated></ion-skeleton-text>\r\n                    </ion-thumbnail>\r\n                    <ion-label>\r\n                      <h3><ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></h3>\r\n                      <p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>\r\n                      <p><ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text></p>\r\n                    </ion-label>\r\n                    <br>\r\n                  </ion-slide>\r\n                </ion-slides>\r\n              </div>\r\n          </div>\r\n        </span>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n  <!-- recent listings -->\r\n\r\n  <ion-grid class=\"section\">\r\n      <ion-label class=\"titleSection\">{{ 'RECENT_LISTINGS' | translate }}</ion-label>\r\n    <!-- Loading-->\r\n    <ion-row *ngIf=\"recentListings==undefined\" >\r\n      <ion-col size=\"6\">\r\n          <ion-list style=\"padding: 5px\">\r\n            <div *ngFor=\"let items of [1,2,3]\">\r\n              <ion-thumbnail style=\"width: 100%; height: 100px;\">\r\n                <ion-skeleton-text animated></ion-skeleton-text>\r\n              </ion-thumbnail>\r\n              <ion-label>\r\n                <h3><ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></h3>\r\n                <p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>\r\n                <p><ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text></p>\r\n              </ion-label>\r\n              <br>\r\n            </div>\r\n          </ion-list>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-list style=\"padding: 5px\">\r\n          <div *ngFor=\"let items of [1,2,3]\">\r\n            <ion-thumbnail style=\"width: 100%; height: 100px;\">\r\n              <ion-skeleton-text animated></ion-skeleton-text>\r\n            </ion-thumbnail>\r\n            <ion-label>\r\n              <h3><ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></h3>\r\n              <p><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></p>\r\n              <p><ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text></p>\r\n            </ion-label>\r\n            <br>\r\n          </div>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n      <ion-row  style=\"margin-right: 0; margin-top: 10px;\">\r\n        <ion-col size=\"6\" style=\"padding-right: 5px\">\r\n        <span *ngFor=\"let listing of recentListings;  let i = index\">\r\n          <div *ngIf=\"i%2==0\" style=\"height: 180px;\">\r\n            <listingList_LP [listing]=\"listing\" [type]=\"'1'\" [little]=\"true\" [search]=\"false\"></listingList_LP>\r\n          </div>\r\n        </span>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"6\" style=\"padding-left: 5px\">\r\n        <span *ngFor=\"let listing of recentListings;  let i = index\">\r\n          <div style=\"height: 180px;\" *ngIf=\"i%2!=0\">\r\n            <listingList_LP [listing]=\"listing\" [type]=\"'1'\" [little]=\"true\"  [search]=\"false\" ></listingList_LP>\r\n          </div>\r\n        </span>\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n\r\n  <!-- Recent posts -->\r\n\r\n  <div *ngIf=\"posts && posts.length>0\" class=\"section\">\r\n      <ion-label class=\"titleSection\" style=\"margin-bottom: 10px\">{{ 'EXPLORE_POST' | translate }}</ion-label>\r\n      <ion-button  *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" color=\"dark\" fill=\"clear\" class=\"btnLight\" style=\"margin-top: 0px; position: absolute; right: 0; font-size: 10pt;\" [routerLink]=\"'posts'\">{{'SEE_ALL' | translate}} ></ion-button>\r\n      <ion-button  *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" color=\"dark\" fill=\"clear\" class=\"btnLight\" style=\"margin-top: 0px; position: absolute; left: 0; font-size: 10pt;\"  [routerLink]=\"'posts'\">{{'SEE_ALL' | translate}} ></ion-button>\r\n    <ion-row  class=\"filters\" *ngIf=\"posts\">\r\n      <ion-col no-padding col-12>\r\n        <ion-slides   [options]=\"slideOpts1\" >\r\n          <ion-slide *ngFor=\"let post of posts\" (click)=\"openModalPost(post)\">\r\n            <ion-card class=\"card card-ios\" >\r\n              <img-loader *ngIf=\"post.img_cover\" [src]=\"post.img_cover\" useImg [imgAttributes]=\"'postImg'\"></img-loader>\r\n<!--\r\n              <div *ngIf=\"post.img_cover\"  class=\"postImg\" [style.background]=\"'url(' + post.img_cover + ')'\"></div>\r\n-->             <div *ngIf=\"!post.img_cover\"  class=\"postImg\" [style.background]=\"'url(' + GlobalFields.site_details.placeholderImgUrl + ')'\"></div>\r\n                <ion-card-content style=\"text-align: left;\">\r\n                    <ion-label style=\"padding-left: 5px; font-size: 12pt; color: rgb(255, 255, 255)\" *ngIf=\"post.title.rendered && post.title.rendered\">{{post.title.rendered}}</ion-label>\r\n                    <p [innerHTML]=\"post.excerpt.rendered\" style=\"font-size: smaller; color: #ffffff; padding: 5px; padding-top: 0;\"></p>\r\n                </ion-card-content>\r\n            </ion-card>\r\n          </ion-slide>\r\n        </ion-slides>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </div>\r\n\r\n\r\n\r\n    <div id=\"check-point\"></div>  <!-- Check point to the bottom -->\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/ListingPro/home/home.module.ts":
  /*!************************************************!*\
    !*** ./src/app/ListingPro/home/home.module.ts ***!
    \************************************************/

  /*! exports provided: HomePageModule_LP */

  /***/
  function srcAppListingProHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule_LP", function () {
      return HomePageModule_LP;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared.module */
    "./src/app/shared.module.ts");
    /* harmony import */


    var _Shared_utilities_utilities_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../Shared/utilities/utilities.module */
    "./src/app/Shared/utilities/utilities.module.ts");
    /* harmony import */


    var _Shared_postsPage_postsPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../Shared/postsPage/postsPage */
    "./src/app/Shared/postsPage/postsPage.ts");
    /* harmony import */


    var _shared_LP_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../shared_LP.module */
    "./src/app/ListingPro/shared_LP.module.ts");
    /* harmony import */


    var _home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home */
    "./src/app/ListingPro/home/home.ts");

    var HomePageModule_LP = function HomePageModule_LP() {
      _classCallCheck(this, HomePageModule_LP);
    };

    HomePageModule_LP = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _shared_LP_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule_LP"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: '',
        component: _home__WEBPACK_IMPORTED_MODULE_10__["HomePage"]
      }, {
        path: 'posts',
        component: _Shared_postsPage_postsPage__WEBPACK_IMPORTED_MODULE_8__["PostsPage"]
      }]), _Shared_utilities_utilities_module__WEBPACK_IMPORTED_MODULE_7__["UtilitiesModule"]],
      declarations: [_home__WEBPACK_IMPORTED_MODULE_10__["HomePage"]]
    })], HomePageModule_LP);
    /***/
  },

  /***/
  "./src/app/ListingPro/home/home.scss":
  /*!*******************************************!*\
    !*** ./src/app/ListingPro/home/home.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppListingProHomeHomeScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".toolbar-background {\n  background-color: black;\n}\n\n.social-cards ion-col {\n  background-color: transparent !important;\n}\n\n.searchText {\n  color: #ffffff;\n}\n\n.inputSearchText {\n  color: white;\n}\n\n.section {\n  padding: 15px;\n  padding-bottom: 35px;\n  margin-bottom: 15px;\n  background-color: black;\n  color: white;\n}\n\n.titleSection {\n  font-size: 15pt;\n  height: 50px;\n}\n\n.regionTitle {\n  height: 150px;\n  text-align: center;\n  line-height: 140px;\n  background-color: rgba(45, 45, 45, 0.54);\n  border-radius: 5px;\n  color: white;\n  font-size: 16pt;\n  font-weight: 900;\n  width: 100%;\n  background-position: center !important;\n  background-size: cover !important;\n}\n\n.horizontalList {\n  overflow-x: auto;\n  display: inline-flex;\n  width: 100%;\n}\n\n.divHorizontalList {\n  width: 50% !important;\n  max-width: none !important;\n  margin: 5px;\n}\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n  margin: -5px;\n}\n\n.card-background-page .inner-scroll {\n  background-color: #000000;\n}\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 10pt;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n\n.social-cards ion-col {\n  padding: 0;\n  background-color: #f3f5f8;\n}\n\n.imgList {\n  height: 100px;\n  border-radius: 5px;\n}\n\n.imgTypes {\n  -o-object-fit: cover !important;\n     object-fit: cover !important;\n  border-radius: 5px;\n}\n\n.centralArrow {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.totalPageBackImg {\n  background: black;\n  position: relative;\n  width: 100%;\n  min-height: 100vh;\n  height: 100%;\n  background-position: center !important;\n  background-size: cover !important;\n  margin-bottom: 20px;\n  padding-bottom: 50px;\n  overflow: hidden;\n}\n\n.totalPageBackImg::after {\n  content: \"\";\n  background: black;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0.2;\n}\n\n.backImg {\n  width: 100%;\n  height: 100px;\n  background-position: center !important;\n  background-size: cover !important;\n  border-radius: 2px;\n  background-color: black;\n  position: relative;\n  overflow: hidden;\n}\n\n.backImgSquared {\n  width: 100px;\n  height: 100px;\n  background-position: center !important;\n  background-size: cover !important;\n  border-radius: 5px;\n}\n\n.backImgLogo {\n  background-size: 100% !important;\n  height: 50px;\n  background-repeat: no-repeat !important;\n  background-position: center !important;\n}\n\n.backImgLogo2 {\n  background-size: 100% !important;\n  background-repeat: no-repeat !important;\n  background-position: center !important;\n  position: relative;\n  top: 10%;\n  left: 25%;\n  display: flow-root;\n  height: 100px;\n  z-index: 4;\n  width: 50%;\n}\n\n.postImg {\n  width: 100%;\n  height: 200px;\n  background-position: center !important;\n  background-size: cover !important;\n}\n\n.homeTypeLabel {\n  padding: 5px;\n  font-size: 12pt;\n  color: black;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin: 0;\n}\n\n.basicSearchContainer {\n  padding: 20px;\n  z-index: 9;\n  background-color: black;\n  color: #f3f5f8;\n  position: relative;\n  top: 10%;\n  margin: 15px;\n  border-radius: 5px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.imgLogoHorizontalltr {\n  width: 50%;\n  height: auto;\n  margin-left: 25%;\n  z-index: 9;\n  position: relative;\n  margin-top: 60px;\n  margin-bottom: -25px;\n  display: none;\n}\n\n.imgLogoHorizontalrtl {\n  margin-right: 25% !important;\n  margin-left: 0 !important;\n  width: 50%;\n  z-index: 9;\n  position: relative;\n  margin-top: 60px;\n  margin-bottom: -25px;\n}\n\n.btn-search {\n  background-color: #ffffff !important;\n  transition: box-shadow 200ms ease-in !important;\n  border: 1px solid #EBEBEB !important;\n  border-radius: 63px;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.16);\n  color: #222323;\n  padding: 10px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: calc(100% - 2px);\n  display: block;\n  margin: 5px;\n  font-size: 10pt;\n}\n\n.btn-search i {\n  font-size: 12pt;\n  margin-right: 10px;\n}\n\n.typeTitle {\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n}\n\n.btnLight {\n  /* border: solid 1px #4392ff;*/\n  border-radius: 10px;\n  float: right;\n  /*padding: 10px;*/\n}\n\n.loadingSlide {\n  padding: 5px;\n  height: 200px;\n  line-height: 200px;\n  border: 1px solid #f0f0f0;\n  border-radius: 10px;\n  margin: 5px;\n  color: #c2c2c2;\n}\n\n.swipeSpan {\n  text-align: center;\n  color: white;\n  height: 100px;\n  line-height: 1;\n  position: absolute;\n  width: 140px;\n  left: 50%;\n  margin-left: -70px;\n}\n\n/* Airbnb */\n\n.airbnbTypeName {\n  color: #222222 !important;\n  font-weight: 600;\n}\n\n.backImgAirbnbTypes {\n  width: 100%;\n  height: 90px;\n  background-position: center !important;\n  background-size: cover !important;\n  -webkit-background-size: cover !important;\n  -moz-background-size: cover !important;\n  -o-background-size: cover !important;\n  border-radius: 5px 0 0;\n  background-color: black;\n  position: relative;\n  overflow: hidden;\n}\n\n/* Tripadvisor */\n\n.backImgTrip {\n  width: 100%;\n  height: 140px;\n  background-position: center !important;\n  background-size: cover !important;\n  border-radius: 5px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 0;\n}\n\n.gridTripAdvisor {\n  margin-bottom: 15px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  background-color: #f3f3f3;\n}\n\n.divGridTrip {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 49.75%;\n  margin-bottom: 0.5%;\n  background: white;\n  height: 60px;\n  margin: 0px;\n  margin-bottom: 1px;\n}\n\n.divGridTrip span {\n  text-align: center;\n  text-align: center;\n  color: #4c4c4c;\n  font-size: 10px;\n  line-height: 16px;\n  font-weight: 700;\n}\n\n.divGridTrip i {\n  font-size: 20px;\n}\n\n.divGridTrip:nth-last-child(n+5):first-child,\n.divGridTrip:nth-last-child(n+5):first-child ~ *,\n.divGridTrip:nth-last-child(n+6):first-child,\n.divGridTrip:nth-last-child(n+6):first-child ~ * {\n  flex-basis: 33%;\n}\n\n.divGridTrip:nth-child(5):last-child {\n  margin-right: auto;\n  margin-left: 0.5%;\n}\n\n.btn-search-trip {\n  position: absolute;\n  top: 50px;\n  width: 100%;\n  text-align: center;\n}\n\n.btn-search-trip button {\n  background-color: #ffffff !important;\n  transition: box-shadow 200ms ease-in !important;\n  border: 1px solid #EBEBEB !important;\n  width: 60%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: -moz-fit-content;\n  width: -webkit-fit-content;\n  width: fit-content;\n  margin: 0 auto;\n  display: block;\n  text-align: left;\n  font-size: small;\n  border-radius: 50px;\n  padding: 12px 20px;\n  padding-right: 30px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);\n  color: #4c4c4c;\n}\n\n.btn-search-trip i {\n  float: right;\n  margin-right: -20px;\n  color: #000a12;\n}\n\n.btn-near-trip {\n  border: 1px solid #EBEBEB !important;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin: 0 auto;\n  display: block;\n  text-align: left;\n  font-size: small;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);\n  color: #010a11;\n  position: absolute;\n  right: 8px;\n  bottom: 8px;\n  padding: 10px 24px;\n  border-radius: 0 !important;\n  background-color: rgba(255, 255, 255, 0.8);\n}\n\n.rightClearBtn {\n  margin-right: 10px;\n  float: right;\n  margin-top: 18px;\n  z-index: 999;\n  color: #f13224;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTGlzdGluZ1Byby9ob21lL0M6XFxqb2tlc29uam9lbFxcam9rZXNvbmpvZWwvc3JjXFxhcHBcXExpc3RpbmdQcm9cXGhvbWVcXGhvbWUuc2NzcyIsInNyYy9hcHAvTGlzdGluZ1Byby9ob21lL2hvbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHVCQUFBO0FDQUY7O0FERUE7RUFDRSx3Q0FBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtBQ0dGOztBREFBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNHRjs7QUREQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDSUY7O0FEQUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO0VBSUEsaUNBQUE7QUNHRjs7QUREQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FDSUY7O0FERkE7RUFDRSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ0tGOztBRERFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNJSjs7QURGRTtFQUNFLHlCQUFBO0FDSUo7O0FEREU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0dKOztBREFFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDRUo7O0FER0E7RUFDRSxVQUFBO0VBQ0EseUJBQUE7QUNBRjs7QURLQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBREtBO0VBQ0UsK0JBQUE7S0FBQSw0QkFBQTtFQUNBLGtCQUFBO0FDRkY7O0FES0E7RUFDRSxTQUFBO0VBQ0Es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Q29udGVudCI6WyJcclxuLnRvb2xiYXItYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xyXG59XHJcbi5zb2NpYWwtY2FyZHMgaW9uLWNvbHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbi5zZWFyY2hUZXh0e1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5pbnB1dFNlYXJjaFRleHR7XHJcbiAgY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcblxyXG4uc2VjdGlvbntcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi50aXRsZVNlY3Rpb257XHJcbiAgZm9udC1zaXplOiAxNXB0O1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuXHJcbi5yZWdpb25UaXRsZXtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMTQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NSwgNDUsIDQ1LCAwLjU0KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTZwdDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhvcml6b250YWxMaXN0e1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmRpdkhvcml6b250YWxMaXN0e1xyXG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xyXG5cclxuICBpb24tY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46LTVweDtcclxuICB9XHJcbiAgLmlubmVyLXNjcm9sbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtdGl0bGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzNiU7XHJcbiAgICBmb250LXNpemU6IDEwcHQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMGVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MiU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5zb2NpYWwtY2FyZHMgaW9uLWNvbCB7XHJcbiAgcGFkZGluZzogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNWY4O1xyXG59XHJcblxyXG5cclxuXHJcbi5pbWdMaXN0e1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uaW1nVHlwZXN7XHJcbiAgb2JqZWN0LWZpdDogY292ZXIgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5jZW50cmFsQXJyb3d7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpXHJcbn1cclxuXHJcblxyXG4udG90YWxQYWdlQmFja0ltZ3tcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcblxyXG4udG90YWxQYWdlQmFja0ltZzo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6Jyc7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6MTAwJTtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6MDtcclxuICBsZWZ0OjA7XHJcbiAgb3BhY2l0eTowLjI7XHJcbn1cclxuXHJcbi5iYWNrSW1ne1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5iYWNrSW1nU3F1YXJlZHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uYmFja0ltZ0xvZ297XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG4uYmFja0ltZ0xvZ28ye1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxMCU7XHJcbiAgbGVmdDogMjUlO1xyXG4gIGRpc3BsYXk6IGZsb3ctcm9vdDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHotaW5kZXg6IDQ7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG4ucG9zdEltZ3tcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ob21lVHlwZUxhYmVse1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBmb250LXNpemU6IDEycHQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcblxyXG4uYmFzaWNTZWFyY2hDb250YWluZXJ7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB6LWluZGV4Ojk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIGNvbG9yOiAjZjNmNWY4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDEwJTtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxufVxyXG5cclxuLmltZ0xvZ29Ib3Jpem9udGFsbHRye1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgei1pbmRleDogOTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAtMjVweDtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5pbWdMb2dvSG9yaXpvbnRhbHJ0bCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyNSUgIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgei1pbmRleDogOTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAtMjVweDtcclxufVxyXG5cclxuLmJ0bi1zZWFyY2h7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjAwbXMgZWFzZS1pbiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFQkVCRUIgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA2M3B4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICBjb2xvcjogIzIyMjMyMztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMnB4KTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDVweDtcclxuICBmb250LXNpemU6IDEwcHQ7XHJcbn1cclxuXHJcbi5idG4tc2VhcmNoIGl7XHJcbiAgZm9udC1zaXplOiAxMnB0O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnR5cGVUaXRsZXtcclxuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi5idG5MaWdodHtcclxuIC8qIGJvcmRlcjogc29saWQgMXB4ICM0MzkyZmY7Ki9cclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICAvKnBhZGRpbmc6IDEwcHg7Ki9cclxufVxyXG5cclxuLmxvYWRpbmdTbGlkZXtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBsaW5lLWhlaWdodDogMjAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmMDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGNvbG9yOiAjYzJjMmMyO1xyXG59XHJcblxyXG4uc3dpcGVTcGFue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogLTcwcHg7XHJcbn1cclxuXHJcblxyXG4vKiBBaXJibmIgKi9cclxuXHJcbi5haXJibmJUeXBlTmFtZXtcclxuICBjb2xvcjogIzIyMjIyMiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmJhY2tJbWdBaXJibmJUeXBlc3tcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA1cHggMCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4vKiBUcmlwYWR2aXNvciAqL1xyXG5cclxuLmJhY2tJbWdUcmlwe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTQwcHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuXHJcbi5ncmlkVHJpcEFkdmlzb3J7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcclxufVxyXG5cclxuLmRpdkdyaWRUcmlwe1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWdyb3c6IDA7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgZmxleC1iYXNpczogNDkuNzUlO1xyXG4gIG1hcmdpbi1ib3R0b206IC41JTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG59XHJcblxyXG4uZGl2R3JpZFRyaXAgc3BhbntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjNGM0YzRjO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uZGl2R3JpZFRyaXAgaXtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcblxyXG4uZGl2R3JpZFRyaXA6bnRoLWxhc3QtY2hpbGQobis1KTpmaXJzdC1jaGlsZCxcclxuLmRpdkdyaWRUcmlwOm50aC1sYXN0LWNoaWxkKG4rNSk6Zmlyc3QtY2hpbGQgfiAqLFxyXG5cclxuLmRpdkdyaWRUcmlwOm50aC1sYXN0LWNoaWxkKG4rNik6Zmlyc3QtY2hpbGQsXHJcbi5kaXZHcmlkVHJpcDpudGgtbGFzdC1jaGlsZChuKzYpOmZpcnN0LWNoaWxkIH4gKiB7XHJcblxyXG4gIGZsZXgtYmFzaXM6IDMzJTtcclxufVxyXG5cclxuXHJcbi5kaXZHcmlkVHJpcDpudGgtY2hpbGQoNSk6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiAuNSU7XHJcbn1cclxuXHJcbi5idG4tc2VhcmNoLXRyaXB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJ0bi1zZWFyY2gtdHJpcCBidXR0b257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjAwbXMgZWFzZS1pbiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFQkVCRUIgIWltcG9ydGFudDtcclxuICB3aWR0aDogNjAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDAsMCwwLC4xNik7XHJcbiAgY29sb3I6ICM0YzRjNGM7XHJcbn1cclxuXHJcbi5idG4tc2VhcmNoLXRyaXAgaXtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcclxuICBjb2xvcjogIzAwMGExMjtcclxufVxyXG5cclxuLmJ0bi1uZWFyLXRyaXB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0VCRUJFQiAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gIGNvbG9yOiAjMDEwYTExO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogOHB4O1xyXG4gIGJvdHRvbTogOHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMjRweDtcclxuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG59XHJcblxyXG4ucmlnaHRDbGVhckJ0bntcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGNvbG9yOiAjZjEzMjI0O1xyXG59XHJcbiIsIi50b29sYmFyLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLnNvY2lhbC1jYXJkcyBpb24tY29sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaFRleHQge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmlucHV0U2VhcmNoVGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNlY3Rpb24ge1xuICBwYWRkaW5nOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRpdGxlU2VjdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTVwdDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ucmVnaW9uVGl0bGUge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NSwgNDUsIDQ1LCAwLjU0KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZwdDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xufVxuXG4uaG9yaXpvbnRhbExpc3Qge1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kaXZIb3Jpem9udGFsTGlzdCB7XG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgaW9uLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAtNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pbm5lci1zY3JvbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5jYXJkLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM2JTtcbiAgZm9udC1zaXplOiAxMHB0O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MiU7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnNvY2lhbC1jYXJkcyBpb24tY29sIHtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjVmODtcbn1cblxuLmltZ0xpc3Qge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5pbWdUeXBlcyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmNlbnRyYWxBcnJvdyB7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4udG90YWxQYWdlQmFja0ltZyB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRvdGFsUGFnZUJhY2tJbWc6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbi5iYWNrSW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5iYWNrSW1nU3F1YXJlZCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmJhY2tJbWdMb2dvIHtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmJhY2tJbWdMb2dvMiB7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTAlO1xuICBsZWZ0OiAyNSU7XG4gIGRpc3BsYXk6IGZsb3ctcm9vdDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgei1pbmRleDogNDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLnBvc3RJbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG59XG5cbi5ob21lVHlwZUxhYmVsIHtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDEycHQ7XG4gIGNvbG9yOiBibGFjaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmJhc2ljU2VhcmNoQ29udGFpbmVyIHtcbiAgcGFkZGluZzogMjBweDtcbiAgei1pbmRleDogOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiAjZjNmNWY4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTAlO1xuICBtYXJnaW46IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmltZ0xvZ29Ib3Jpem9udGFsbHRyIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMjUlO1xuICB6LWluZGV4OiA5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IC0yNXB4O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaW1nTG9nb0hvcml6b250YWxydGwge1xuICBtYXJnaW4tcmlnaHQ6IDI1JSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICB3aWR0aDogNTAlO1xuICB6LWluZGV4OiA5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IC0yNXB4O1xufVxuXG4uYnRuLXNlYXJjaCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBlYXNlLWluICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFQkVCRUIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNjNweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBjb2xvcjogIzIyMjMyMztcbiAgcGFkZGluZzogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAycHgpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbn1cblxuLmJ0bi1zZWFyY2ggaSB7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4udHlwZVRpdGxlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50O1xufVxuXG4uYnRuTGlnaHQge1xuICAvKiBib3JkZXI6IHNvbGlkIDFweCAjNDM5MmZmOyovXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgLypwYWRkaW5nOiAxMHB4OyovXG59XG5cbi5sb2FkaW5nU2xpZGUge1xuICBwYWRkaW5nOiA1cHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGNvbG9yOiAjYzJjMmMyO1xufVxuXG4uc3dpcGVTcGFuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNDBweDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTcwcHg7XG59XG5cbi8qIEFpcmJuYiAqL1xuLmFpcmJuYlR5cGVOYW1lIHtcbiAgY29sb3I6ICMyMjIyMjIgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJhY2tJbWdBaXJibmJUeXBlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHggMCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBUcmlwYWR2aXNvciAqL1xuLmJhY2tJbWdUcmlwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTQwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmdyaWRUcmlwQWR2aXNvciB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xufVxuXG4uZGl2R3JpZFRyaXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgZmxleC1iYXNpczogNDkuNzUlO1xuICBtYXJnaW4tYm90dG9tOiAwLjUlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xufVxuXG4uZGl2R3JpZFRyaXAgc3BhbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzRjNGM0YztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmRpdkdyaWRUcmlwIGkge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5kaXZHcmlkVHJpcDpudGgtbGFzdC1jaGlsZChuKzUpOmZpcnN0LWNoaWxkLFxuLmRpdkdyaWRUcmlwOm50aC1sYXN0LWNoaWxkKG4rNSk6Zmlyc3QtY2hpbGQgfiAqLFxuLmRpdkdyaWRUcmlwOm50aC1sYXN0LWNoaWxkKG4rNik6Zmlyc3QtY2hpbGQsXG4uZGl2R3JpZFRyaXA6bnRoLWxhc3QtY2hpbGQobis2KTpmaXJzdC1jaGlsZCB+ICoge1xuICBmbGV4LWJhc2lzOiAzMyU7XG59XG5cbi5kaXZHcmlkVHJpcDpudGgtY2hpbGQoNSk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDAuNSU7XG59XG5cbi5idG4tc2VhcmNoLXRyaXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bi1zZWFyY2gtdHJpcCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjAwbXMgZWFzZS1pbiAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRUJFQkVCICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA2MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBjb2xvcjogIzRjNGM0Yztcbn1cblxuLmJ0bi1zZWFyY2gtdHJpcCBpIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xuICBjb2xvcjogIzAwMGExMjtcbn1cblxuLmJ0bi1uZWFyLXRyaXAge1xuICBib3JkZXI6IDFweCBzb2xpZCAjRUJFQkVCICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgY29sb3I6ICMwMTBhMTE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDhweDtcbiAgYm90dG9tOiA4cHg7XG4gIHBhZGRpbmc6IDEwcHggMjRweDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG59XG5cbi5yaWdodENsZWFyQnRuIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIHotaW5kZXg6IDk5OTtcbiAgY29sb3I6ICNmMTMyMjQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ListingPro/home/home.ts":
  /*!*****************************************!*\
    !*** ./src/app/ListingPro/home/home.ts ***!
    \*****************************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppListingProHomeHomeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _MyListing_listingPage_listingPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../MyListing/listingPage/listingPage */
    "./src/app/MyListing/listingPage/listingPage.ts");
    /* harmony import */


    var _Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../Constants */
    "./src/app/Constants.ts");
    /* harmony import */


    var _GlobalFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../GlobalFields */
    "./src/app/GlobalFields.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _Shared_modalPost_modalPost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../Shared/modalPost/modalPost */
    "./src/app/Shared/modalPost/modalPost.ts");
    /* harmony import */


    var _services_Service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/Service */
    "./src/app/services/Service.ts");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_LocationService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../services/LocationService */
    "./src/app/services/LocationService.ts");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../GlobalFieldsMyListing */
    "./src/app/GlobalFieldsMyListing.ts");
    /* harmony import */


    var _modalGenericSearch_modal_generic_search_LP__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./modalGenericSearch/modal-generic-search_LP */
    "./src/app/ListingPro/home/modalGenericSearch/modal-generic-search_LP.ts");
    /* harmony import */


    var _services_MyListingService__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../services/MyListingService */
    "./src/app/services/MyListingService.ts");
    /* harmony import */


    var _services_ListingProService__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../services/ListingProService */
    "./src/app/services/ListingProService.ts");
    /* harmony import */


    var _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../GlobalFieldsListingPro */
    "./src/app/GlobalFieldsListingPro.ts"); // DOC: https://ionicframework.com/docs/building/running
    // to build the apk: sudo ionic cordova build --release android
    // per testare app: https://cordova-plugin-fcm.appspot.com/
    // PER GENERARE APK: sudo cordova build android --release
    // FIREBASE EXAMPLE -> https://medium.com/factory-mind/angular-firebase-typescript-step-by-step-tutorial-2ef887fc7d71


    var HomePage = /*#__PURE__*/function () {
      function HomePage(service, lpservice, mlservice, locationService, modalCtrl, popoverController, navController, statusBar, platform, nativeGeocoder, _sanitizer, translate, alertController, menu, appVersion) {
        var _this = this;

        _classCallCheck(this, HomePage);

        /*  this.imgCacheService.store("http://www.like-agency.it/media/k2/items/cache/d6086de322f98f66cc694f32ea284557_XL.jpg").then( res =>{
              console.log(res);
          });
          this.imgCacheService.restore("http://www.like-agency.it/media/k2/items/cache/d6086de322f98f66cc694f32ea284557_XL.jpg");
          */
        this.service = service;
        this.lpservice = lpservice;
        this.mlservice = mlservice;
        this.locationService = locationService;
        this.modalCtrl = modalCtrl;
        this.popoverController = popoverController;
        this.navController = navController;
        this.statusBar = statusBar;
        this.platform = platform;
        this.nativeGeocoder = nativeGeocoder;
        this._sanitizer = _sanitizer;
        this.translate = translate;
        this.alertController = alertController;
        this.menu = menu;
        this.appVersion = appVersion;
        this.Constants = _Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"];
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"];
        this.GlobalFieldsMyListing = _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_14__["GlobalFieldsMyListing"];
        this.GlobalFieldsListingPro = _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"];
        this.post = _MyListing_listingPage_listingPage__WEBPACK_IMPORTED_MODULE_2__["ListingPage"];
        this.categoryToShow = [];
        this.byCategoryListings = [];
        this.resultSearchListings = [];
        this.posts = [];
        this.oldScollPostion = 0;
        this.headerClass = '';
        this.slideOpts1 = {
          slidesPerView: 1,
          spaceBetween: 10,
          centeredSlides: true
        };
        this.slideOptsLess1 = {
          slidesPerView: 1.4,
          spaceBetween: 10,
          centeredSlides: true
        };
        this.slideOpts2 = {
          slidesPerView: 1.3
        };
        this.slideOpts3 = {
          slidesPerView: 2.8
        };
        this.loadingByCategories = true;
        this.waitSearch = true;
        this.appVersion.getAppName().then(function (value) {
          _this.appName = value;
        })["catch"](function (err) {
          _this.appName = 'Custom ListingPro App';
        });
        lpservice.getRecentListings().subscribe(function (data) {
          _this.recentListings = data.data;
          console.log(_this.recentListings);
        });
        /* Get the listing by category for the home section */

        this.byCategoryListings = [];
        /* Show only the first 5 categories */

        console.log(_GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].listingCategories);
        var goodCategories = [];

        if (_GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].listingCategories && _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].listingCategories.length > 0) {
          _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].listingCategories.forEach(function (cat) {
            if (cat.count > 0) goodCategories.push(cat);
          });

          var max = goodCategories.length < 5 ? goodCategories.length - 1 : 5;
          console.log(goodCategories);
          console.log(max);

          var _loop = function _loop(i) {
            _this.categoryToShow.push(goodCategories[i]);

            _this.byCategoryListings.push([]);

            lpservice.getListingsFilteredByCategory(goodCategories[i].term_id).subscribe(function (data) {
              _this.byCategoryListings[i] = data.data;
              console.log(_this.byCategoryListings);
              _this.loadingByCategories = false; //The first arriving makes the loading off
            });
          };

          for (var i = 0; i < max; i++) {
            _loop(i);
          }

          console.log(this.categoryToShow);
        } else {
          this.loadingByCategories = false;
        }

        service.getRecentPosts().subscribe(function (data) {
          _this.posts = data;

          _this.posts.forEach(function (post) {
            service.getMediaById(post.featured_media).subscribe(function (data) {
              console.log('url: ' + data.source_url);

              if (data) {
                post.img_cover = data.source_url;
              }
            });
          });
        });
        this.GlobalFields.getMyAddress(this.service, this.locationService, this.nativeGeocoder);

        _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].clearFilters();
      }

      _createClass(HomePage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          /* if (GlobalFields.site_details.homeType == 2)
               this.service.setTransparentBackgroundStatusBar();
           else*/
          this.service.setWhiteBlackBackgroundStatusBar();
          /* this.subscription = this.platform.backButton.subscribe(()=>{
             navigator['app'].exitApp();
           });*/
        }
      }, {
        key: "openModalSearch",
        value: function openModalSearch() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalCtrl.create({
                      component: _modalGenericSearch_modal_generic_search_LP__WEBPACK_IMPORTED_MODULE_15__["ModalGenericSearch_LP"]
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "openModalPost",
        value: function openModalPost(post) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalCtrl.create({
                      component: _Shared_modalPost_modalPost__WEBPACK_IMPORTED_MODULE_6__["ModalPost"],
                      componentProps: {
                        post: post
                      }
                    });

                  case 2:
                    modal = _context2.sent;
                    _context2.next = 5;
                    return modal.present();

                  case 5:
                    return _context2.abrupt("return", _context2.sent);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
        /*
            openModalListing(listing: Listing_LP) {
                    this.service.selectedListing = listing;
                    const listingModal = this.modalCtrl.create(ListingPage_LP);
                listingModal.present();
                    //  this.navCtrl.push(ListingPage_LP);
                }
            */

      }, {
        key: "getListingDetails",
        value: function getListingDetails(listing) {
          var _this2 = this;

          this.GlobalFields.loadingSoft = true;
          this.mlservice.getListingDetailsById(listing.ID).subscribe(function (data) {
            _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].selectedListing = data;

            _this2.openModalListing();
          }, function (error) {
            console.log(error);
            var msg = '';
            if (error && error.error) msg = error.error.message;else if (error) msg = error.message;

            _this2.GlobalFields.openAlert(_this2.alertController, 'Error', 'Error on web server', msg);

            _this2.GlobalFields.loadingSoft = false;
          });
        }
      }, {
        key: "openModalListing",
        value: function openModalListing() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var listingModal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalCtrl.create({
                      component: _MyListing_listingPage_listingPage__WEBPACK_IMPORTED_MODULE_2__["ListingPage"]
                    });

                  case 2:
                    listingModal = _context3.sent;
                    _context3.next = 5;
                    return listingModal.present();

                  case 5:
                    return _context3.abrupt("return", _context3.sent);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "isFeatured",
        value: function isFeatured(listing) {
          /* if (!listing.listing_data._featured)
                return '';
            if (listing.listing_data._featured == '1')
                return 'featured';
            else */
          return '';
        }
        /*
          async openModalListing(listing: Listing_LP) {
            const modal = await this.modalCtrl.create(ListingPage_LP,{ listing: listing });
            return await modal.present();
          }
        */

      }, {
        key: "getRandomRegionBack",
        value: function getRandomRegionBack(i) {
          var a = Math.round(i % 3) + 1;
          return '../../assets/imgs/r_' + a + '.jpg';
        }
      }, {
        key: "searchByCat",
        value: function searchByCat(cat_name) {
          _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].clearFilters();

          _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].filtersSearch.categories = cat_name;

          _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].getFilteredListingFirstTime(this.lpservice, this.locationService, true);

          this.navController.navigateForward('tabs/' + _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].site_details.themeEnabled + '/search');
        }
      }, {
        key: "searchByBasicSearchFilter",
        value: function searchByBasicSearchFilter() {
          _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].getFilteredListingFirstTime(this.lpservice, this.locationService, true);

          _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].basicSearch = true;
          this.navController.navigateForward('tabs/' + _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].site_details.themeEnabled + '/search');
        }
      }, {
        key: "toStringCategories",
        value: function toStringCategories() {
          if (!_GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_14__["GlobalFieldsMyListing"].filtersSearch.categories || _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_14__["GlobalFieldsMyListing"].filtersSearch.categories.length == 0) return "";

          if (Array.isArray(_GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_14__["GlobalFieldsMyListing"].filtersSearch.categories)) {
            if (_GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_14__["GlobalFieldsMyListing"].filtersSearch.categories.length > 3) return _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_14__["GlobalFieldsMyListing"].filtersSearch.categories.length + " selected";else return _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_14__["GlobalFieldsMyListing"].filtersSearch.categories.toString();
          } else return _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_14__["GlobalFieldsMyListing"].filtersSearch.categories;
        }
      }, {
        key: "isSelected",
        value: function isSelected(id) {
          if (_GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_14__["GlobalFieldsMyListing"].filtersSearch.selectedType == id) return ' selectedtypesListHorizontalWhite';else return '';
        }
      }, {
        key: "selectListingType",
        value: function selectListingType() {
          _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_14__["GlobalFieldsMyListing"].clearFilters();

          console.log(_GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_14__["GlobalFieldsMyListing"].filtersSearch.selectedType);

          _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_14__["GlobalFieldsMyListing"].selectListingTypeDetail();
        }
      }, {
        key: "getBackground",
        value: function getBackground(image) {
          return this._sanitizer.bypassSecurityTrustStyle("linear-gradient(to top, rgba(255, 255, 255, 0.17), rgba(23, 23, 23, 0.38)), url(".concat(image, ")"));
        }
      }, {
        key: "getMyAddress",
        value: function getMyAddress() {
          _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].filtersSearch.location = _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].address;
        }
      }, {
        key: "searchNearMe",
        value: function searchNearMe() {
          console.log(this.GlobalFields.address);
          _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].filtersSearch.location = this.GlobalFields.address; // set default value to the proximity range

          _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].filtersSearch.range = _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].listingTypeDetail.filter_status.enable_readious_search_filter_default;

          _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].getFilteredListingFirstTime(this.lpservice, this.locationService, true);

          this.navController.navigateForward('tabs/' + _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].site_details.themeEnabled + '/search');
        }
      }, {
        key: "toStringTaxonomies",
        value: function toStringTaxonomies(key) {
          var tax = _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_14__["GlobalFieldsMyListing"].getCustomTaxonomiesByKey(key);

          if (tax) {
            return tax.selected;
          }
        }
      }, {
        key: "toStringCustomFields",
        value: function toStringCustomFields(key) {
          var tax = _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_14__["GlobalFieldsMyListing"].getCustomFieldsByKey(key);

          if (tax) {
            /*  if (!tax.selected || tax.selected.length == 0)
                  return "";
              else if (tax.selected.length > 3)
                  return tax.selected.length + " selected";
              else {*/
            return tax.selected; // }
          }
        }
      }, {
        key: "toStringRegions",
        value: function toStringRegions() {
          if (!_GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_14__["GlobalFieldsMyListing"].filtersSearch.region) return '';
          return _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_14__["GlobalFieldsMyListing"].filtersSearch.region;
        }
      }, {
        key: "onScrollHideHeader",
        value: function onScrollHideHeader(event) {
          // console.log(event);
          if (event.detail.scrollTop > 50 && !this.isElementInViewPort()) {
            if (this.oldScollPostion < event.detail.scrollTop) this.headerClass = 'headerHidden';
            if (this.oldScollPostion > event.detail.scrollTop) this.headerClass = 'headerShown';
          }

          this.oldScollPostion = event.detail.scrollTop;
        } //This function just check if element is fully in vertical viewport or not

      }, {
        key: "isElementInViewPort",
        value: function isElementInViewPort() {
          var el = document.getElementById('check-point');

          if (el) {
            var rect = el.getBoundingClientRect();
            return rect.bottom <= window.innerHeight;
          }

          return true;
        }
      }, {
        key: "getImgCachedClass",
        value: function getImgCachedClass(class_to_add) {
          var class_name = 'shadedImgCached ' + class_to_add;
          var imageAttributes = [];
          imageAttributes.push({
            element: 'class',
            value: class_name
          });
          return imageAttributes;
        }
      }, {
        key: "getBackgroundBasedOnHomeType",
        value: function getBackgroundBasedOnHomeType() {
          if (_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].site_details.homeType == 3) return _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].getBodyColorBackgroundJson();
        }
      }, {
        key: "openSideMenu",
        value: function openSideMenu() {
          this.menu.enable(true, 'appMenu');
        }
      }]);

      return HomePage;
    }();

    HomePage.popover = undefined;

    HomePage.ctorParameters = function () {
      return [{
        type: _services_Service__WEBPACK_IMPORTED_MODULE_7__["Service"]
      }, {
        type: _services_ListingProService__WEBPACK_IMPORTED_MODULE_17__["ListingProService"]
      }, {
        type: _services_MyListingService__WEBPACK_IMPORTED_MODULE_16__["MyListingService"]
      }, {
        type: _services_LocationService__WEBPACK_IMPORTED_MODULE_12__["LocationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
      }, {
        type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_9__["NativeGeocoder"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
      }, {
        type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_13__["AppVersion"]
      }];
    };

    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/home/home.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.scss */
      "./src/app/ListingPro/home/home.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_7__["Service"], _services_ListingProService__WEBPACK_IMPORTED_MODULE_17__["ListingProService"], _services_MyListingService__WEBPACK_IMPORTED_MODULE_16__["MyListingService"], _services_LocationService__WEBPACK_IMPORTED_MODULE_12__["LocationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_9__["NativeGeocoder"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_13__["AppVersion"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=ListingPro-home-home-module-es5.js.map