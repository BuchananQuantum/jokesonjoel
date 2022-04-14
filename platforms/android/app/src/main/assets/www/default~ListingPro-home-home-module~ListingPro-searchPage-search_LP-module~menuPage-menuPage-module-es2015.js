(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ListingPro-home-home-module~ListingPro-searchPage-search_LP-module~menuPage-menuPage-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/home/modalGenericSearch/modal-generic-search_LP.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/home/modalGenericSearch/modal-generic-search_LP.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-header (swiperight)=\"closeModal()\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n  <ion-toolbar style=\"padding: 10px;\">\r\n    <ion-row class=\"filters\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n      <ion-col no-padding  size=\"1\" style=\"text-align: center\">\r\n        <button class=\"btnFloatingWhite\" (click)=\"closeModal()\">\r\n          <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"chevron-back-outline\"></ion-icon>\r\n          <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"chevron-forward-outline\"></ion-icon>\r\n        </button>\r\n      </ion-col>\r\n      <ion-col no-padding  size=\"11\">\r\n        <ion-input clearInput placeholder=\"{{'WHAT_SEARCH' | translate}}\"\r\n                   [(ngModel)]=\"searchQuery\" enterkeyhint=\"search\"\r\n                   style=\"margin-left: 20px;padding-left: 0px !important; width: calc(100% - 10px);\"\r\n                   (keyup.enter)=\"generalSearch()\"\r\n                   (change)=\"results=undefined;\"\r\n                   (ionInput)=\"results= searchQuery=='' || !searchQuery ? undefined : results\"\r\n        ></ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content dir=\"{{GlobalFields.getLanguageLayout()}}\" style=\"padding-top: 20px;\">\r\n\r\n  <!-- Loading animation-->\r\n  <div *ngIf=\"loading\">\r\n    <ion-list>\r\n      <ion-list-header>\r\n        <ion-label><ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></ion-label>\r\n      </ion-list-header>\r\n      <ion-item *ngFor=\"let item of [1,2,3,4,5,6,7,8,9,10]\">\r\n        <ion-avatar slot=\"start\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n\r\n  <div>\r\n\r\n    <ion-list *ngIf=\"!results && !loading\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n\r\n      <!-- Search near me -->\r\n      <ion-list-header>\r\n        <ion-label style=\"text-transform: capitalize\"><b>{{'NEAR_YOU' | translate}}</b></ion-label>\r\n      </ion-list-header>\r\n      <span *ngFor=\"let cat of GlobalFieldsListingPro.listingCategories\">\r\n         <ion-item *ngIf=\"cat && cat.count>0\" style=\"color: #ffffff;\" [detail]=\"false\" (click)=\"searchNearMe(cat.name)\">\r\n          <span slot=\"start\" class=\"iconType\">\r\n            <img *ngIf=\"cat.icon1\" src=\"{{cat.icon1}}\" style=\"height: 20px;margin-top: -5px;\">\r\n          </span>\r\n          <ion-label>\r\n            {{cat.name}}\r\n            <br>\r\n            <span style=\"font-size: 9pt\">{{cat.count}} {{'LISTINGS' | translate}}</span>\r\n          </ion-label>\r\n          <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"chevron-forward-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\r\n          <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"chevron-back-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\r\n        </ion-item>\r\n      </span>\r\n    </ion-list>\r\n\r\n    <!-- Results -->\r\n\r\n    <span *ngIf=\"results && !loading\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n\r\n      <!-- No results -->\r\n      <ion-list *ngIf=\"!results.suggestions || ( (!results.suggestions.listing || results.suggestions.listing.length==0) && (!results.suggestions.cats || results.suggestions.cats.length==0)\r\n      && (!results.suggestions.tag || results.suggestions.tag.length==0))\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n          <ion-item style=\"color: #ffffff;\" [detail]=\"false\">\r\n            <span slot=\"start\" class=\"iconType\">\r\n            </span>\r\n            <ion-label>\r\n              <b>{{'NO_RESULTS' | translate}}</b>\r\n            </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n      <span *ngIf=\"results.suggestions\">\r\n\r\n        <!-- Listings -->\r\n        <ion-list *ngIf=\"results.suggestions.listing && results.suggestions.listing.length>0\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n          <ion-list-header>\r\n            <ion-label><b>{{'LISTINGS' | translate}}</b></ion-label>\r\n          </ion-list-header>\r\n          <span *ngFor=\"let listing of results.suggestions.listing\">\r\n            <ion-item (click)=\"getListingDetails(listing.ID)\"\r\n                      style=\"color: #ffffff;\" [detail]=\"false\">\r\n              <span slot=\"start\" class=\"iconType\">\r\n                <div *ngIf=\"listing.thumb\" class=\"imageCacheGeneralSearch\">\r\n                  <img-loader [src]=\"listing.thumb\" useImg [imgAttributes]=\"getImgCachedClass('imgAirbnbHomeType')\"></img-loader>\r\n                </div>\r\n              </span>\r\n              <ion-label>\r\n                <b>{{listing.title}}</b>\r\n                 <br>\r\n              <span style=\"font-size: 9pt\">\r\n                <span *ngIf=\"listing.locations && listing.locations.length>0;else second\">\r\n                  {{listing.locations[0].name}}\r\n                </span>\r\n                <ng-template #second *ngIf=\"listing.gAddress\">\r\n                  {{listing.gAddress}}\r\n                </ng-template>\r\n              </span>\r\n              </ion-label>\r\n              <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"chevron-forward-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\r\n              <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"chevron-back-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\r\n            </ion-item>\r\n          </span>\r\n        </ion-list>\r\n\r\n        <!-- Categories -->\r\n        <ion-list *ngIf=\"results.suggestions.cats && results.suggestions.cats.length>0\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n          <ion-list-header>\r\n            <ion-label><b>{{'CATEGORIES' | translate}}</b></ion-label>\r\n          </ion-list-header>\r\n          <span *ngFor=\"let cat of results.suggestions.cats\">\r\n            <ion-item style=\"color: #ffffff;\" [detail]=\"false\" (click)=\"getListingsByCategory(cat.name)\">\r\n              <span slot=\"start\" class=\"iconType\"><img *ngIf=\"cat.icon1\" src=\"{{cat.icon1}}\" style=\"height: 20px;margin-top: -5px;\"></span>\r\n            <ion-label>\r\n              <b>{{cat.name}}</b>\r\n              <br>\r\n              <span style=\"font-size: 9pt\">{{cat.count}} {{'LISTINGS' | translate}}</span>\r\n            </ion-label>\r\n            <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"chevron-forward-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\r\n            <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"chevron-back-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\r\n          </ion-item>\r\n          </span>\r\n        </ion-list>\r\n\r\n        <!-- Tags -->\r\n        <ion-list *ngIf=\"results.suggestions.tag && results.suggestions.tag.length>0\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n          <ion-list-header>\r\n            <ion-label><b>Features</b></ion-label>\r\n          </ion-list-header>\r\n          <span *ngFor=\"let tag of results.suggestions.tag\">\r\n            <ion-item (click)=\"getListingsByTag(tag)\"\r\n                      style=\"color: #ffffff;\" [detail]=\"false\">\r\n              <span slot=\"start\" class=\"iconType\"><i class=\"fas fa-hashtag\"></i></span>\r\n            <ion-label>\r\n              <b>{{tag.name}}</b>\r\n              <br>\r\n              <span style=\"font-size: 9pt\">{{tag.count}} {{'LISTINGS' | translate}}</span>\r\n            </ion-label>\r\n            <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"chevron-forward-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\r\n            <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"chevron-back-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\r\n          </ion-item>\r\n          </span>\r\n        </ion-list>\r\n\r\n\r\n\r\n      </span>\r\n\r\n\r\n\r\n    </span>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/listingList/listingList_LP.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/listingList/listingList_LP.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Box Type '1' or Box with logo Type '3'-->\r\n\r\n<ion-card *ngIf=\"type!='2'\" [className]=\"getCardClass()\" (click)=\"getListingDetails(listing)\" dir=\"{{GlobalFields.getLanguageLayout()}}\" style=\"height: auto; margin: 0px !important; \">\r\n    <!-- Img -->\r\n    <div [class.backImgBigger]=\"!little && type=='1' && search\" [class.backImgLittle]=\"little\" [class.backImg]=\"!little && type=='1' && (!search || GlobalFields.isWhiteBackground())\"\r\n         [class.backImgSquaredAndLogo]=\"type=='3'\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n        <img-loader *ngIf=\"listing.gallery\" [src]=\"getListingImg(listing)\" useImg [imgAttributes]=\"getImgCachedClass(type)\"></img-loader>\r\n    </div>\r\n    <!-- White content -->\r\n    <ion-card-content [class.whiteContentBoxStyleOnWhiteBack]=\"type=='1'\" [class.whiteContentBoxLogoStyle]=\"type=='3'\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n        <!-- Logo -->\r\n        <div *ngIf=\"type=='3' && listing.post_meta.business_logo\" class=\"logoCircleImg\">\r\n            <img-loader [src]=\"listing.post_meta.business_logo\" useImg [imgAttributes]=\"getImgCachedClassByClass('logoImgCache')\"></img-loader>\r\n        </div>\r\n        <!-- Type & reviews -->\r\n        <ion-grid *ngIf=\"listing.post_meta\" class=\"listingType\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n          <ion-row *ngIf=\"!little\">\r\n              <ion-col size=\"12\" class=\"typeTitle\">\r\n                  <span *ngIf=\"listing.category\" style=\"font-weight: 600;\">\r\n                    <img *ngIf=\"listing.category.icon1\" src=\"{{listing.category.icon1}}\" style=\"height: 13px; margin-right: 5px;\">\r\n                    {{listing.category.name}}</span>\r\n                  <!-- Featured -->\r\n                  <span *ngIf=\"listing.campaing_ads_enabled\" class=\"sponsoredAirbnb\">{{'FEATURED' | translate}}</span>\r\n                  <!-- reviews-->\r\n                  <span class=\"reviewCounterLittle\" *ngIf=\"!listing.reviews || listing.reviews.review_count == 0\">0 {{ 'REVIEWS' | translate }}</span>\r\n                  <span class=\"reviewCounterLittle\" *ngIf=\"listing.reviews && listing.reviews.review_count > 0\">\r\n                      <i class=\"fas fa-star starReviewAirbnb\"  style=\"float: initial; color: #ffc106\"></i>\r\n                      <span class=\"reviewCounterLittle\" style=\"float: initial; font-size: small;\"> {{listing.reviews.listing_rate}}</span>\r\n                      <span class=\"reviewCounterLittle\"  style=\"float: initial; font-weight: 200;\"> ({{listing.reviews.review_count}})</span>\r\n                  </span>\r\n              </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n        <!-- Title & Location-->\r\n        <div [class.titleLocationLeft]=\"type=='1'\" [class.titleLocationCenter]=\"type=='3'\">\r\n            <p [class.listingTitleListListingPro]=\"!little\" [class.listingTitleListListingProLittle]=\"little\" dir=\"{{GlobalFields.getLanguageLayout()}}\">{{listing.post_title}}  <i class=\"fas fa-check-circle\" *ngIf=\"isClaimed()\" style=\"color: #03A9F4;\"></i> </p>\r\n            <p class=\"listingLocation\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n              <span *ngIf=\"listing.location && listing.location.length>0\" ><i class=\"fas fa-map-marker-alt\"></i> {{listing.location[0].name}}</span>\r\n              <span *ngIf=\"!listing.location || listing.location.length==0 && listing.post_meta && listing.post_meta.gAddress\" ><i class=\"fas fa-map-marker-alt\"></i> {{listing.post_meta.gAddress}}</span>\r\n\r\n              <!-- Prices -->\r\n              <span class=\"listingType\" *ngIf=\"listing.post_meta && listing.post_meta.price_status && listing.post_meta.price_status!='notsay'\">\r\n              <div class=\"verticalDivisor\"></div>\r\n              <span *ngIf=\"listing.post_meta.price_status=='inexpensive'\">{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}</span>\r\n              <span *ngIf=\"listing.post_meta.price_status=='moderate'\">{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}</span>\r\n              <span *ngIf=\"listing.post_meta.price_status=='pricey'\">{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}</span>\r\n              <span *ngIf=\"listing.post_meta.price_status=='ultra_high_end'\">{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}</span>\r\n\r\n              <span *ngIf=\"listing.post_meta.list_price\"> {{listing.post_meta.list_price}}</span>\r\n\r\n              </span>\r\n\r\n            </p>\r\n        </div>\r\n        <ion-row *ngIf=\"little\" style=\"margin-top:5px\">\r\n          <ion-col size=\"12\" class=\"typeTitle\">\r\n            <!-- Featured -->\r\n            <span *ngIf=\"listing.campaing_ads_enabled\" class=\"sponsoredAirbnb\">{{'FEATURED' | translate}}</span>\r\n            <!-- reviews-->\r\n            <span class=\"reviewCounterLittle\" *ngIf=\"!listing.reviews || listing.reviews.review_count == 0\">0 {{ 'REVIEWS' | translate }}</span>\r\n            <span class=\"reviewCounterLittle\" *ngIf=\"listing.reviews && listing.reviews.review_count > 0\">\r\n                              <i class=\"fas fa-star starReviewAirbnb\"  style=\"float: initial; color: #ffc106\"></i>\r\n                              <span class=\"reviewCounterLittle\" style=\"float: initial; font-size: small;\"> {{listing.reviews.listing_rate}}</span>\r\n                              <span class=\"reviewCounterLittle\"  style=\"float: initial; font-weight: 200;\"> ({{listing.reviews.review_count}})</span>\r\n                          </span>\r\n          </ion-col>\r\n        </ion-row>\r\n    </ion-card-content>\r\n</ion-card>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-------------------- List type '2' -------------------->\r\n<ion-row *ngIf=\"type=='2'\" [className]=\"'rowListType' + isWhiteBackgroundBoxShadow()\"  (click)=\"getListingDetails(listing)\"  dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n    <ion-col size=\"4\" style=\"padding: 0 !important;\">\r\n\r\n        <div class=\"backImgList\" *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\">\r\n            <img-loader *ngIf=\"listing.gallery\" [src]=\"getListingImg(listing)\" useImg [imgAttributes]=\"getImgCachedClass(type)\"  [class.imgLoaderRTL]=\"GlobalFields.getLanguageLayout()=='rtl'\"></img-loader>\r\n        </div>\r\n        <div class=\"backImgList\" *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\">\r\n            <div class=\"imgRTLList\" [style.background]=\"'url(' +getListingImg(listing)+')'\"></div>\r\n        </div>\r\n\r\n    </ion-col>\r\n    <ion-col size=\"8\" style=\"padding-top: 10px;\">\r\n        <div class=\"listingType\" *ngIf=\"listing.post_meta\">\r\n          <span *ngIf=\"listing.category\">\r\n            <img *ngIf=\"listing.category.icon1\" src=\"{{listing.category.icon1}}\" style=\"height: 13px; margin-right: 5px;\">\r\n            {{listing.category.name}}\r\n          </span>\r\n          <!-- reviews-->\r\n            <span class=\"reviewCounterLittleList\" *ngIf=\"!listing.reviews || listing.reviews.review_count == 0\"   dir=\"{{GlobalFields.getLanguageLayout()}}\">0 {{'REVIEWS' | translate}}</span>\r\n            <div class=\"reviewsLabelHeaderLittle\" *ngIf=\"listing.reviews && listing.reviews.review_count > 0\">\r\n                <label class=\"reviewsBoxList\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n                    <label class=\"reviewScoreLittleList\">{{getTruncatedDecimal(listing.reviews.listing_rate)}}</label>\r\n                    <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"star\" class=\"starReviewList\" ></ion-icon>\r\n                    <label class=\"reviewCounterLittleList\">{{'ON' | translate}} {{listing.reviews.review_count}} {{'REVIEWS' | translate}}</label>\r\n                </label>\r\n            </div>\r\n        </div>\r\n        <p class=\"listingTitleListListingPro\" style=\"line-height: 16px !important;\" >{{listing.post_title}}  <i class=\"fas fa-check-circle\" *ngIf=\"isClaimed()\" style=\"color: #03A9F4;\"></i></p>\r\n        <p class=\"listingAddressLittle\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n          <span *ngIf=\"listing.location && listing.location.length>0\" ><i class=\"fas fa-map-marker-alt\"></i> {{listing.location[0].name}}</span>\r\n          <span *ngIf=\"!listing.location || listing.location.length==0 && listing.post_meta && listing.post_meta.gAddress\"><i class=\"fas fa-map-marker-alt\"></i> {{listing.post_meta.gAddress}}</span>\r\n\r\n          <!-- Prices -->\r\n          <span class=\"listingType\" *ngIf=\"listing.post_meta && listing.post_meta.price_status && listing.post_meta.price_status!='notsay'\">\r\n            <div class=\"verticalDivisor\"></div>\r\n            <span *ngIf=\"listing.post_meta.price_status=='inexpensive'\">{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}</span>\r\n            <span *ngIf=\"listing.post_meta.price_status=='moderate'\">{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}</span>\r\n            <span *ngIf=\"listing.post_meta.price_status=='pricey'\">{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}</span>\r\n            <span *ngIf=\"listing.post_meta.price_status=='ultra_high_end'\">{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}</span>\r\n\r\n            <span *ngIf=\"listing.post_meta.list_price\"> {{listing.post_meta.list_price}}</span>\r\n          </span>\r\n\r\n        </p>\r\n      <!-- Sponsored -->\r\n        <div class=\"boltIconList\" *ngIf=\"listing.campaing_ads_enabled\"><i class=\"fas fa-bolt\"></i></div>\r\n    </ion-col>\r\n</ion-row>\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/listingPage/listing-page_LP.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/listingPage/listing-page_LP.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header (swiperight)=\"closeModal()\"   dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n  <ion-toolbar style=\"background: linear-gradient( to bottom, #00000057, transparent );\" >\r\n    <div [class]=\"GlobalFields.getLanguageLayout()=='ltr' ? 'btnFloatingLeftDiv': 'btnFloatingRightDiv'\">\r\n      <button [class]=\"GlobalFields.site_details.headerBtnListingPageStyle == 2 ? 'btnFloatingWhite' : 'btnFloating'\" (click)=\"closeModal()\">\r\n        <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"arrow-back\"></ion-icon>\r\n        <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"arrow-forward\"></ion-icon>\r\n        <!--<span class=\"swipe\">{{ 'SWIPE' | translate }}</span> -->\r\n      </button>\r\n\r\n    </div>\r\n    <div [class]=\"GlobalFields.getLanguageLayout()=='ltr' ? 'btnFloatingRightDiv': 'btnFloatingLeftDiv'\" *ngIf=\"GlobalFieldsListingPro.selectedListing\">\r\n      <button [class]=\"GlobalFields.site_details.headerBtnListingPageStyle == 2 ? 'btnFloatingWhite' : 'btnFloating'\" (click)=\"share()\">\r\n        <i class=\"far fa-share-square\"></i>\r\n      </button>\r\n      <button [class]=\"GlobalFields.site_details.headerBtnListingPageStyle == 2 ? 'btnFloatingWhite' : 'btnFloating'\" *ngIf=\"GlobalFields.isLoggedIn\" (click)=\"writeReview()\">\r\n        <i class=\"far fa-comment-alt\"></i>\r\n      </button>\r\n      <button [class]=\"GlobalFields.site_details.headerBtnListingPageStyle == 2 ? 'btnFloatingWhite' : 'btnFloating'\" *ngIf=\"GlobalFields.isLoggedIn &&  GlobalFieldsListingPro.selectedListing\">\r\n        <i class=\"fas fa-heart\" [class.fullHearth]=\"GlobalFieldsListingPro.selectedListing.isBookmarked\" (click)=\"GlobalFieldsListingPro.selectedListing.isBookmarked ? undoBookmark() : doBookmark()\"></i>\r\n      </button>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n\r\n\r\n<ion-content *ngIf=\"GlobalFieldsListingPro.selectedListing && iniFinished && GlobalFieldsListingPro.selectedListing.post_meta\" class=\"topContent\"  [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\"  dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n\r\n\r\n\r\n  <div style=\"position: fixed; height: 90%; z-index: 1; width: 10%\" (swiperight)=\"closeModal()\" (swipeleft)=\"closeModal()\"></div>\r\n\r\n<!------------ AIRBNB STYLE ------ ------>\r\n  <span *ngIf=\"GlobalFields.site_details.listingPageType == 1\">\r\n    <div swipe-vertical (swipedown)=\"closeModal()\" class=\"postImg\" [style.background]=\"getBackground(GlobalFieldsListingPro.selectedListing)\"></div>\r\n  </span>\r\n<!------------END AIRBNB STYLE ------------>\r\n\r\n<!------------ LISTINGPRO STYLE ------------>\r\n\r\n  <span *ngIf=\"GlobalFields.site_details.listingPageType == 2\">\r\n      <!--  <div class=\"postImgVertical\" [style.background]=\"getBackgroundDarker(GlobalFieldsListingPro.selectedListing)\"> -->\r\n        <div class=\"postImgVertical\">\r\n\r\n          <img class=\"listingPageImgMyListingCached\" [src]=\"getBackgroundDarkerCached(GlobalFieldsListingPro.selectedListing)\">\r\n          <!--<img-loader [src]=\"getBackgroundDarkerCached(GlobalFieldsListingPro.selectedListing)\" useImg [imgAttributes]=\"getImgCachedClass('listingPageImgMyListingCached')\"></img-loader> -->\r\n\r\n\r\n          <div class=\"titleInTheMiddle\">\r\n              <!--logo-->\r\n            <div *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta && GlobalFieldsListingPro.selectedListing.post_meta.business_logo\" class=\"postLogoImgCentered\"\r\n                 [style.background]=\"'url(' + GlobalFieldsListingPro.selectedListing.post_meta.business_logo + ')'\"></div>\r\n\r\n            <div *ngIf=\"!GlobalFieldsListingPro.selectedListing.post_meta.business_logo\" class=\"postLogoImgCentered\"></div>\r\n\r\n            <!-- Title -->\r\n            <div class=\"\"></div>\r\n            <div class=\"listingPageTitleWhite\">{{GlobalFieldsListingPro.selectedListing.post_title}} <i class=\"fas fa-check-circle\" *ngIf=\"isClaimed()\" style=\"color: #03A9F4;\"></i> </div>\r\n\r\n            <!-- reviews numb-->\r\n            <br>\r\n            <span class=\"reviewCounterWhite\" *ngIf=\"!GlobalFieldsListingPro.selectedListing.reviews || GlobalFieldsListingPro.selectedListing.reviews.review_count == 0\">{{ 'NO_REVIEWS' | translate }}</span>\r\n            <div *ngIf=\"GlobalFieldsListingPro.selectedListing.reviews.review_count && GlobalFieldsListingPro.selectedListing.reviews.review_count > 0\">\r\n              <span *ngFor=\"let star of getStartsHtml(GlobalFieldsListingPro.selectedListing.reviews.listing_rate)\">\r\n                <ion-icon name='star{{star}}'style='float: initial; font-size: 20px'></ion-icon>\r\n              </span>\r\n              <div class=\"reviewCounterWhite\"> {{GlobalFieldsListingPro.selectedListing.reviews.review_count}} {{ 'REVIEW_REVIEWS' | translate }}</div>\r\n            </div>\r\n\r\n            <br>\r\n            <!-- Tagline -->\r\n            <div class=\"listingPageSubtitleWhite\" *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta && GlobalFieldsListingPro.selectedListing.post_meta.tagline_text\">\r\n              {{GlobalFieldsListingPro.selectedListing.post_meta.tagline_text}}\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n  </span>\r\n\r\n<!------------END MYLISTING STYLE ------------>\r\n\r\n\r\n\r\n\r\n  <ion-card-content style=\"padding: 5px; margin-bottom: 100px\">\r\n\r\n<!------------ AIRBNB STYLE ------------>\r\n  <span *ngIf=\"GlobalFields.site_details.listingPageType == 1\">\r\n      <!--logo-->\r\n      <div *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.business_logo\" class=\"postLogoImg\"\r\n           [style.background]=\"'url(' + GlobalFieldsListingPro.selectedListing.post_meta.business_logo + ')'\"></div>\r\n      <div *ngIf=\"!GlobalFieldsListingPro.selectedListing.post_meta.business_logo\" class=\"postLogoImgPlaceholder\"></div>\r\n\r\n      <!-- reviews numb-->\r\n      <div class=\"reviewsLabelHeader\">\r\n        <span class=\"reviewCounter\" *ngIf=\"!GlobalFieldsListingPro.selectedListing.reviews || GlobalFieldsListingPro.selectedListing.reviews.review_count == 0\">{{ 'NO_REVIEWS' | translate }}</span>\r\n        <div *ngIf=\"GlobalFieldsListingPro.selectedListing.reviews.review_count && GlobalFieldsListingPro.selectedListing.reviews.review_count > 0\">\r\n          <label class=\"reviewsBox\">\r\n            {{getTruncatedDecimal(GlobalFieldsListingPro.selectedListing.reviews.listing_rate)}}\r\n            <ion-icon name=\"star\" class=\"starReview\"></ion-icon>\r\n          </label>\r\n          <div class=\"reviewCounter\"> {{GlobalFieldsListingPro.selectedListing.reviews.review_count}} {{ 'REVIEW_REVIEWS' | translate }}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"listingPageType\"></div>\r\n      <br *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta && GlobalFieldsListingPro.selectedListing.post_meta.business_logo\">\r\n      <p class=\"listingPageTitle\">{{GlobalFieldsListingPro.selectedListing.post_title}} <i class=\"fas fa-check-circle\" *ngIf=\"isClaimed()\" style=\"color: #03A9F4;\"></i> </p>\r\n      <div class=\"listingPageSubtitle\" *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta && GlobalFieldsListingPro.selectedListing.post_meta.tagline_text\">\r\n        {{GlobalFieldsListingPro.selectedListing.post_meta.tagline_text}}\r\n      </div>\r\n    </span>\r\n<!------------END AIRBNB STYLE ------------>\r\n\r\n    <div class=\"divisor\" *ngIf=\"showContactInfo() && GlobalFieldsListingPro.selectedListing.post_meta && GlobalFields.isWhiteBackground()\"></div>\r\n    <div  [className]=\"getClassContainer()\" *ngIf=\"showContactInfo() && (GlobalFieldsListingPro.selectedListing.post_meta.gAddress ||\r\n    GlobalFieldsListingPro.selectedListing.post_meta.phone || GlobalFieldsListingPro.selectedListing.post_meta.email)\">\r\n      <b class=\"descriptionTitle\">\r\n        <i class=\"far fa-address-card faIconGoodPosition\"></i>\r\n        {{'CONTACT_INFO' | translate}}</b><br><br>\r\n      <ion-row *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.gAddress\">\r\n        <div class=\" iconCircleBox\">\r\n          <i class=\"fas fa-map-marker-alt\"></i>\r\n        </div>\r\n          <p class=\"labelHeader\">\r\n              <a (click)=\"goToNavigatorAction(GlobalFieldsListingPro.selectedListing.post_meta.gAddress)\"  style=\"width: 100%; color: inherit; \">\r\n\r\n              {{GlobalFieldsListingPro.selectedListing.post_meta.gAddress}}\r\n            </a>\r\n          </p>\r\n      </ion-row>\r\n      <ion-row  *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.phone\">\r\n        <div class=\"iconCircleBox\">\r\n          <i class=\"fas fa-phone\"></i>\r\n        </div>\r\n          <p  class=\"labelHeader\" (click)=\"callNumberAction(GlobalFieldsListingPro.selectedListing.post_meta.phone)\">{{GlobalFieldsListingPro.selectedListing.post_meta.phone}}</p>\r\n      </ion-row>\r\n      <ion-row *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.email\">\r\n          <div class=\" iconCircleBox\">\r\n            <i class=\"fas fa-envelope\"></i>\r\n          </div>\r\n          <p class=\"labelHeader\">\r\n            <a (click)=\"openLink('mailto:' + GlobalFieldsListingPro.selectedListing.post_meta.email + '?Subject=My%20Custom%20Subject')\" style=\"width: 100%; color: inherit; \">\r\n              {{GlobalFieldsListingPro.selectedListing.post_meta.email}}\r\n            </a>\r\n          </p>\r\n      </ion-row>\r\n    </div>\r\n\r\n\r\n    <!-- Category -->\r\n    <div class=\"divisor\" *ngIf=\"GlobalFieldsListingPro.selectedListing.category &&  GlobalFields.isWhiteBackground()\" ></div>\r\n    <div [className]=\"getClassContainer()\" *ngIf=\"GlobalFieldsListingPro.selectedListing.category\">\r\n      <b class=\"descriptionTitle\">\r\n        <i class=\"far fa-bookmark faIconGoodPosition\"></i>\r\n        {{'CATEGORIES' | translate}}\r\n      </b>\r\n      <div  class=\"listCategories\">\r\n        <span style=\"font-size: 9pt\">\r\n          <i *ngIf=\"!GlobalFieldsListingPro.selectedListing.category.icon1\" class=\"fas fa-bookmark iconCircleBoxCatRegions\" dir=\"{{GlobalFields.getLanguageLayout()}}\"></i>\r\n          <img *ngIf=\"GlobalFieldsListingPro.selectedListing.category.icon1\" src=\"{{GlobalFieldsListingPro.selectedListing.category.icon1}}\" class=\"iconImgBoxCatRegions\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n          {{GlobalFieldsListingPro.selectedListing.category.name}}\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <!-- Regions -->\r\n    <div class=\"divisor\" *ngIf=\"GlobalFieldsListingPro.selectedListing.location && GlobalFieldsListingPro.selectedListing.location.length>0 && GlobalFields.isWhiteBackground()\"></div>\r\n    <div [className]=\"getClassContainer()\" *ngIf=\"GlobalFieldsListingPro.selectedListing.location && GlobalFieldsListingPro.selectedListing.location.length>0\">\r\n      <b class=\"descriptionTitle\">\r\n        <i class=\"fas fa-map-marker faIconGoodPosition\"></i>\r\n        {{'REGIONS' | translate}}\r\n      </b>\r\n      <div class=\"listCategories\">\r\n          <span *ngFor=\"let region of GlobalFieldsListingPro.selectedListing.location\"  style=\"font-size: 9pt\">\r\n            <i *ngIf=\"!region.icon\" class=\"fas fa-map-marker iconCircleBoxCatRegions\" dir=\"{{GlobalFields.getLanguageLayout()}}\"></i>\r\n            <i *ngIf=\"region.icon\" class=\"{{region.icon + ' iconCircleBoxCatRegions'}} \" dir=\"{{GlobalFields.getLanguageLayout()}}\"></i>\r\n            {{region.name}}\r\n          </span>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"divisor\" *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta && GlobalFields.isWhiteBackground()\"></div>\r\n\r\n    <div  [className]=\"getClassContainer()\" *ngIf=\"GlobalFieldsListingPro.selectedListing.post_content\">\r\n     <b class=\"descriptionTitle\">\r\n       <i class=\"fas fa-align-left faIconGoodPosition\"></i>\r\n       {{ 'DESCRIPTION' | translate }}</b><br>\r\n      <p class=\"description\" [innerHTML]=\"GlobalFieldsListingPro.selectedListing.post_content\"></p>\r\n    </div>\r\n\r\n    <!-- Gallery -->\r\n    <div class=\"divisor\" *ngIf=\"GlobalFieldsListingPro.selectedListing.gallery && GlobalFieldsListingPro.selectedListing.gallery.main.length>0 && GlobalFields.isWhiteBackground()\"></div>\r\n    <div [className]=\"getClassContainer()\"  *ngIf=\"GlobalFieldsListingPro.selectedListing.gallery.main && GlobalFieldsListingPro.selectedListing.gallery.main.length>0\">\r\n      <div class=\"sliderWithCSS\">\r\n        <div *ngFor=\"let media of GlobalFieldsListingPro.selectedListing.gallery.main; let i = index\" class=\"galleryImg\" [style.background]=\"'url(' +media.full+')'\" (click)=\"openImgPopover(media.full)\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <!-- Video -->\r\n    <div class=\"divisor\" *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.video && GlobalFields.isWhiteBackground()\"></div>\r\n    <div [className]=\"getClassContainer()\" *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.video && GlobalFieldsListingPro.selectedListing.post_meta.video!=''\">\r\n      <b class=\"descriptionTitle\">\r\n        <i class=\"fab fa-youtube faIconGoodPosition\"></i>\r\n        Video\r\n      </b>\r\n      <div class=\"labelCustomDetails\" style=\"text-align: right\">\r\n        <a *ngIf=\"!youtubeUrl\" (click)=\"openLink(GlobalFieldsListingPro.selectedListing.post_meta.video)\"> Youtube <i class=\"fas fa-external-link-alt\"></i></a>\r\n        <iframe *ngIf=\"youtubeUrl\" webkitallowfullscreen mozallowfullscreen allowfullscreen\r\n                sandbox=\"allow-scripts allow-top-navigation allow-pointer-lock allow-forms allow-same-origin allow-popups\"\r\n                style=\"width: 100%; height: 100%; border: none\"\r\n                [src]=\"youtubeUrl\" frameborder=\"0\"></iframe>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  <!-- Custom taxonomies\r\n    <span *ngIf=\"custTaxonomies && custTaxonomies.length>0\">\r\n      <span *ngFor=\"let custTax of custTaxonomies\">\r\n        <div class=\"divisor\" *ngIf=\"custTax.show_in_detail_view && GlobalFields.isWhiteBackground()\"></div>\r\n        <div *ngIf=\"custTax.show_in_detail_view\" [className]=\"getClassContainer()\">\r\n           <b class=\"descriptionTitle\">\r\n            {{custTax.label}}\r\n          </b><br>\r\n          <div  class=\"listCategories\">\r\n            <span *ngFor=\"let val of custTax.value\" style=\"font-size: 9pt\">\r\n              <i *ngIf=\"val.icon\" class=\"{{val.icon + ' iconCircleBoxCatRegions'}} \" dir=\"{{GlobalFields.getLanguageLayout()}}\"></i>\r\n              <i *ngIf=\"!val.icon\" class=\"fas fa-hashtag iconCircleBoxCatRegions\" dir=\"{{GlobalFields.getLanguageLayout()}}\"></i>\r\n              {{val.name}}\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </span>\r\n    </span>\r\n    -->\r\n\r\n   <!-- Custom Related Listings\r\n    <span *ngIf=\"custRelatedListings && custRelatedListings.length>0\">\r\n      <span *ngFor=\"let custRelatedListing of custRelatedListings\">\r\n        <div class=\"divisor\"></div>\r\n        <div [className]=\"getClassContainer()\">\r\n          <b class=\"descriptionTitle\">\r\n            {{custRelatedListing.label}}\r\n          </b>\r\n          <span *ngFor=\"let listing of custRelatedListing.listings\">\r\n            <page-listingList [listing]=\"listing\" [type]=\"'2'\"  [search]=\"true\" (click)=\"closeModal()\"></page-listingList>\r\n          </span>\r\n          <span *ngIf=\"custRelatedListing.listings.length==0\">\r\n            0 {{'LISTINGS' | translate}}\r\n          </span>\r\n        </div>\r\n      </span>\r\n    </span>\r\n    -->\r\n\r\n    <!-- Table of custom fields -->\r\n    <div class=\"divisor\" *ngIf=\"custFields && custFields.length>0 && GlobalFields.isWhiteBackground()\"></div>\r\n    <div [className]=\"getClassContainer()\"  *ngIf=\"custFields && custFields.length>0\">\r\n      <b class=\"descriptionTitle\">\r\n        <i class=\"fas fa-grip-vertical faIconGoodPosition\"></i>\r\n        {{ 'DETAILS' | translate }} </b><br><br>\r\n      <span *ngFor=\"let field of custFields\" >\r\n        <ion-row  class=\"fontFamily tableRow\">\r\n          <!-- Not an Html field value -->\r\n          <ion-col col-4 style=\"text-transform: capitalize; padding-top: 10px;\" *ngIf=\"!isHTML(field.value)\">\r\n            <span *ngIf=\"field.key!='price'\">{{field.label}}</span>\r\n            <span *ngIf=\"field.key=='price'\">{{'PRICE' | translate}}</span>\r\n          </ion-col>\r\n          <!-- not html -->\r\n          <ion-col col-8 style=\"text-align: right\" *ngIf=\"!isHTML(field.value)\">\r\n            <p class=\"labelCustomDetails\" *ngIf=\"!isArray(field.value)\">\r\n             {{field.value}}\r\n            </p>\r\n            <div class=\"labelCustomDetails\" *ngIf=\"isArray(field.value)\">{{getStringFromArray(field.value)}}</div>\r\n          </ion-col>\r\n          <!-- Html field, full width-->\r\n          <ion-col *ngIf=\"isHTML(field.value)\"  col-12>\r\n            {{getNiceString(field.key)}} <br><br>\r\n            <div class=\"labelHTML\" *ngIf=\"isHTML(field.value) && !isURL(field.value)\" [innerHTML]=\"field.value\"></div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </span>\r\n    </div>\r\n\r\n    <!-- Map -->\r\n    <div class=\"divisor\"  *ngIf=\"fieldToBeShown('job_location') && GlobalFieldsListingPro.selectedListing.post_meta.gAddress && showContactInfo() && GlobalFields.isWhiteBackground()\"></div>\r\n    <div [className]=\"getClassContainer()\" *ngIf=\"fieldToBeShown('job_location') && GlobalFieldsListingPro.selectedListing.post_meta.gAddress && showContactInfo()\">\r\n      <a (click)=\"goToNavigatorAction(GlobalFieldsListingPro.selectedListing.post_meta.gAddress)\">\r\n        <b class=\"descriptionTitle\">\r\n          <i class=\"fas fa-map-marked-alt faIconGoodPosition\"></i>\r\n          {{ 'WHERE' | translate }}\r\n          <span style=\"float: right; font-weight: 200; font-size: small; margin-right: 10px\"> {{ 'GET_DIRECTIONS' | translate }}</span>\r\n        </b><br><br>\r\n        <img *ngIf=\"Constants.GoogleMapsKEY && Constants.GoogleMapsKEY != ''\" src=\"{{'https://maps.googleapis.com/maps/api/staticmap?center=' + GlobalFieldsListingPro.selectedListing.post_meta.gAddress +'&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7Clabel:%7C' + GlobalFieldsListingPro.selectedListing.post_meta.gAddress +'&key=' + Constants.GoogleMapsKEY}}\">\r\n        <div style=\"text-align: right; color: #484848; font-size: small; margin-top: 10px; margin-right: 10px\">{{GlobalFieldsListingPro.selectedListing.post_meta.gAddress}}</div>\r\n      </a>\r\n    </div>\r\n\r\n    <!-- Working hours -->\r\n    <div class=\"divisor\" *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.business_hours && GlobalFields.isWhiteBackground()\"></div>\r\n    <div  [className]=\"getClassContainer()\" *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.business_hours\">\r\n      <b class=\"descriptionTitle\">\r\n        <i class=\"far fa-clock faIconGoodPosition\"></i>\r\n        {{ 'WORK_HOURS' | translate }} </b><br><br>\r\n      <ion-row *ngFor=\"let day of daysOfTheWeek; let i = index\" class=\"fontFamily tableRow\">\r\n        <ion-col col-4 style=\"text-transform: capitalize;\">\r\n          {{daysOfTheWeekLabel[i]}}\r\n        </ion-col>\r\n        <ion-col col-8 style=\"text-align: right\">\r\n          <span *ngIf=\"!GlobalFieldsListingPro.selectedListing.post_meta.business_hours[day]\">{{ 'CLOSED_DAY' | translate }}</span>\r\n          <span *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.business_hours[day]\">\r\n            <div>{{GlobalFieldsListingPro.selectedListing.post_meta.business_hours[day].open}} - {{GlobalFieldsListingPro.selectedListing.post_meta.business_hours[day].close}}</div>\r\n           </span>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <!-- tags -->\r\n    <div class=\"divisor\" *ngIf=\"GlobalFieldsListingPro.selectedListing.tag && GlobalFieldsListingPro.selectedListing.tag.length>0 && GlobalFields.isWhiteBackground()\" ></div>\r\n    <div [className]=\"getClassContainer()\" *ngIf=\"GlobalFieldsListingPro.selectedListing.tag && GlobalFieldsListingPro.selectedListing.tag.length>0\">\r\n      <b class=\"descriptionTitle\">\r\n        <i class=\"fas fa-hashtag faIconGoodPosition\"></i>\r\n        Tags:\r\n      </b>\r\n      <div  class=\"listCategories\">\r\n        <span *ngFor=\"let tag of GlobalFieldsListingPro.selectedListing.tag\" style=\"font-size: 9pt\">\r\n          <i *ngIf=\"!tag.icon\" class=\"fas fa-hashtag iconCircleBoxCatRegions\" dir=\"{{GlobalFields.getLanguageLayout()}}\"></i>\r\n          <i *ngIf=\"tag.icon\" class=\"{{tag.icon + ' iconCircleBoxCatRegions'}} \" dir=\"{{GlobalFields.getLanguageLayout()}}\"></i>\r\n          {{tag.name}}\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <!-- features -->\r\n    <div class=\"divisor\" *ngIf=\"GlobalFieldsListingPro.selectedListing.feature && GlobalFieldsListingPro.selectedListing.feature.length>0 && GlobalFields.isWhiteBackground()\" ></div>\r\n    <div [className]=\"getClassContainer()\" *ngIf=\"GlobalFieldsListingPro.selectedListing.feature && GlobalFieldsListingPro.selectedListing.feature.length>0\">\r\n      <b class=\"descriptionTitle\">\r\n        <i class=\"fas fa-hashtag faIconGoodPosition\"></i>\r\n        Features:\r\n      </b>\r\n      <div  class=\"listCategories\">\r\n        <span *ngFor=\"let feat of GlobalFieldsListingPro.selectedListing.feature\" style=\"font-size: 9pt\">\r\n          <i *ngIf=\"!feat.icon\" class=\"fas fa-hashtag iconCircleBoxCatRegions\" dir=\"{{GlobalFields.getLanguageLayout()}}\"></i>\r\n          <i *ngIf=\"feat.icon\" class=\"{{feat.icon + ' iconCircleBoxCatRegions'}} \" dir=\"{{GlobalFields.getLanguageLayout()}}\"></i>\r\n          {{feat.name}}\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Comments Bubble -->\r\n    <div class=\"divisor\" *ngIf=\"GlobalFieldsListingPro.selectedListing.reviews && GlobalFieldsListingPro.selectedListing.reviews.reviews && GlobalFieldsListingPro.selectedListing.reviews.reviews.length>0 && GlobalFields.isWhiteBackground()\"></div>\r\n    <div  [className]=\"getClassContainer()\" *ngIf=\"GlobalFields.site_details.reviewStyle == 1 &&  GlobalFieldsListingPro.selectedListing.reviews.reviews && GlobalFieldsListingPro.selectedListing.reviews.reviews.length>0\" class=\"listCategories\">\r\n      <b class=\"descriptionTitle\">\r\n        <i class=\"far fa-star faIconGoodPosition\"></i>\r\n        {{ 'REVIEWS' | translate }}\r\n      </b>\r\n      <div style=\"max-height: 300px; overflow-y: auto;\">\r\n        <ion-grid *ngFor=\"let comm of GlobalFieldsListingPro.selectedListing.reviews.reviews\">\r\n          <ion-row>\r\n            <div col-2 style=\"width: 60px\">\r\n              <img src=\"{{comm.author_image}}\" style=\"height: 50px; width: 50px; border-radius: 50px; vertical-align: middle;\">\r\n            </div>\r\n            <ion-col col-6 style=\"text-transform: capitalize;\">\r\n              <div class=\"listingTitle\">{{comm.author_name}}</div>\r\n              <div class=\"listingLocation\">{{comm.post_date}}</div>\r\n            </ion-col>\r\n            <ion-col col-4 style=\"text-align: right\">\r\n              <label class=\"reviewsBox\" style=\"position: inherit\">\r\n                {{comm.rating['general_rating']}}\r\n                <ion-icon name=\"star\" class=\"starReview\"></ion-icon>\r\n              </label>\r\n               <ion-button *ngIf=\"comm.rating && hasMultipleRatings(comm.rating)\"  fill=\"clear\" class=\"btnRatings\"  (click)=\"openRatingsPopover($event, comm.rating)\"><i class=\"fas fa-chevron-down\"></i></ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"fontFamily\">\r\n            <ion-col col-12>\r\n              <div class=\"speech-bubble\">\r\n                <div class=\"commentBox\">\r\n                  <b *ngIf=\"comm.post_title\">{{comm.post_title}} <br></b>\r\n                  {{comm.post_content}}\r\n                </div>\r\n                <img class=\"imgComments\" *ngFor=\"let img of comm.gallery\" src=\"{{img.full}}\" (click)=\"openImgPopover(img.full)\">\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Comments Card-->\r\n    <div  [className]=\"getClassContainer()\" *ngIf=\"GlobalFields.site_details.reviewStyle != 1 &&  GlobalFieldsListingPro.selectedListing.reviews &&  GlobalFieldsListingPro.selectedListing.reviews.reviews && GlobalFieldsListingPro.selectedListing.reviews.reviews.length>0\" class=\"listCategories\">\r\n      <b class=\"descriptionTitle\">\r\n        <i class=\"far fa-star faIconGoodPosition\"></i>\r\n        {{ 'REVIEWS' | translate }}\r\n      </b>\r\n      <div style=\"max-height: 300px; overflow-y: auto;\">\r\n        <ion-grid *ngFor=\"let comm of GlobalFieldsListingPro.selectedListing.reviews.reviews\" class=\"cardReview\">\r\n          <ion-row>\r\n            <div col-2 style=\"width: 60px\">\r\n              <img src=\"{{comm.author_image}}\" style=\"height: 50px; width: 50px; border-radius: 50px; vertical-align: middle;\">\r\n            </div>\r\n            <ion-col col-6 style=\"text-transform: capitalize;\">\r\n              <div class=\"listingTitle\">{{comm.author_name}}</div>\r\n              <div class=\"listingLocation\">{{comm.post_date}}</div>\r\n            </ion-col>\r\n            <ion-col col-4 style=\"text-align: right\">\r\n              <label class=\"reviewsBox\" style=\"position: inherit\">\r\n                {{comm.rating['general_rating']}}\r\n                <ion-icon name=\"star\" class=\"starReview\"></ion-icon>\r\n              </label>\r\n              <ion-button *ngIf=\"comm.rating && hasMultipleRatings(comm.rating)\"  fill=\"clear\" class=\"btnRatings\"  (click)=\"openRatingsPopover($event, comm.rating)\"><i class=\"fas fa-chevron-down\"></i></ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"fontFamily\">\r\n\r\n            <ion-col col-12>\r\n              <div>\r\n                <div class=\"commentBoxCard\">\r\n                  <b *ngIf=\"comm.post_title\">{{comm.post_title}} <br></b>\r\n                  {{comm.post_content}}\r\n                </div>\r\n              </div>\r\n              <img class=\"imgComments\" *ngFor=\"let img of comm.gallery\" src=\"{{img.full}}\" (click)=\"openImgPopover(img.full)\">\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n\r\n      <!-- Write a review button -->\r\n      <div style=\"width: 100%; margin-top: 10px; display: flex;\">\r\n        <button class=\"addReview\" *ngIf=\"GlobalFields.isLoggedIn\"  (click)=\"writeReview()\" >\r\n          <i class=\"far fa-star\"></i> {{'WRITE_REVIEW' | translate}}\r\n        </button>\r\n        <button class=\"addReview\" *ngIf=\"!GlobalFields.isLoggedIn\" (click)=\"goToLogin()\" >\r\n          <i class=\"far fa-star\"></i> {{'WRITE_REVIEW' | translate}}\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <!-- Lead form -->\r\n    <div class=\"divisor\" *ngIf=\"GlobalFieldsListingPro.selectedListing.lead_gen && GlobalFieldsListingPro.selectedListing.lead_gen.length>0 && GlobalFields.isWhiteBackground()\"></div>\r\n    <div [className]=\"'leadContainer ' + getClassContainer()\" *ngIf=\"GlobalFieldsListingPro.selectedListing.lead_gen &&  GlobalFieldsListingPro.selectedListing.lead_gen.length>0\" class=\"listCategories\">\r\n      <b class=\"descriptionTitle\">\r\n        <i class=\"far fa-envelope faIconGoodPosition\"></i>\r\n        {{'CONTACT_INFO' | translate}}\r\n      </b>\r\n      <div *ngIf=\"!lead_sent\">\r\n        <ion-grid>\r\n          <ion-row *ngFor=\"let field of GlobalFieldsListingPro.selectedListing.lead_gen\" >\r\n            <div *ngIf=\"field.type!='textarea'\" col-2 style=\"width: 40px; line-height: 50px; text-align: center; font-size: 14pt; color: #909090;\">\r\n              <i *ngIf=\"field.name=='name7'\" class=\"fas fa-user\"></i>\r\n              <i *ngIf=\"field.name=='phone7'\" class=\"fas fa-phone\"></i>\r\n              <i *ngIf=\"field.type=='email'\" class=\"fas fa-envelope\"></i>\r\n              <i *ngIf=\"field.type=='textarea'\" class=\"far fa-comment-dots\"></i>\r\n              <i *ngIf=\"field.type!='phone7' && field.type!='name7' && field.type!='email'\" class=\"fas fa-pencil\"></i>\r\n              <span *ngIf=\"field.required==''\"> *</span>\r\n            </div>\r\n            <ion-col col-10 style=\"text-transform: capitalize;\">\r\n              <span *ngIf=\"field.type=='text' || field.type=='email'\">\r\n                <ion-input clearInput placeholder=\"{{field.placeholder}}\" [(ngModel)]=\"lead[field.name]\"></ion-input>\r\n              </span>\r\n              <span *ngIf=\"field.type=='textarea'\">\r\n                <ion-textarea class=\"textareaEditor\" rows=\"5\" cols=\"20\"  placeholder=\"{{field.placeholder}}\" [(ngModel)]=\"lead[field.name]\"></ion-textarea>\r\n              </span>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <div style=\"text-align: center\">\r\n          <button class=\"addReview\" (click)=\"sendLead()\" [disabled]=\"checkIfFieldsMissing()\">\r\n            <i class=\"far fa-paper-plane\"></i> Send\r\n          </button>\r\n        </div>\r\n\r\n      </div>\r\n      <div *ngIf=\"lead_sent\" style=\"text-align: center\">\r\n        <i class=\"fas fa-check-circle\" style=\"font-size: 48pt; padding: 30px; color: #64c28d;\"></i>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n    <!-- FAQs -->\r\n    <div class=\"divisor\" *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.faqs && GlobalFieldsListingPro.selectedListing.post_meta.faqs.faq.length>0 && GlobalFields.isWhiteBackground()\"></div>\r\n    <div  [className]=\"getClassContainer()\" *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.faqs && GlobalFieldsListingPro.selectedListing.post_meta.faqs.faq.length>0\">\r\n      <b class=\"descriptionTitle\">\r\n        <i class=\"far fa-clock faIconGoodPosition\"></i>\r\n        FAQs </b><br><br>\r\n      <ion-row *ngFor=\"let faq of GlobalFieldsListingPro.selectedListing.post_meta.faqs.faq; let i = index\" class=\"fontFamily tableRow\">\r\n        <div class=\"accordionContainer\">\r\n          <button class=\"accordion\" (click)=\"selectFAQIndex(i)\">{{faq}}</button>\r\n          <div class=\"panel\" [class.accordionOpen]=\"selectedAccoIndex==i\">\r\n            <p>{{GlobalFieldsListingPro.selectedListing.post_meta.faqs.faqans[i]}}</p>\r\n          </div>\r\n        </div>\r\n      </ion-row>\r\n    </div>\r\n\r\n\r\n    <!-- Related Ads listings -->\r\n    <div class=\"divisor\" *ngIf=\"related_ads_listing && related_ads_listing.length>0 && GlobalFields.isWhiteBackground()\"></div>\r\n    <div  class=\"sectionContainer\" *ngIf=\"related_ads_listing && related_ads_listing.length>0\">\r\n      <b class=\"descriptionTitle\">\r\n        Ads\r\n      </b>\r\n      <div *ngFor=\"let listing of related_ads_listing;  let i = index\" style=\"margin:5px\">\r\n        <listingList_LP [listing]=\"listing\" [type]=\"'2'\"  [search]=\"true\" (click)=\"closeModal()\"></listingList_LP>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Related Recent listings -->\r\n    <div class=\"divisor\" *ngIf=\"related_recent_listing && related_recent_listing.length>0 && GlobalFields.isWhiteBackground()\"></div>\r\n    <div  class=\"sectionContainer\" *ngIf=\"related_recent_listing && related_recent_listing.length>0\">\r\n      <b class=\"descriptionTitle\">\r\n        {{'RECENT' | translate}}\r\n      </b>\r\n      <div *ngFor=\"let listing of related_recent_listing;  let i = index\" style=\"margin:5px\">\r\n        <listingList_LP [listing]=\"listing\" [type]=\"'2'\"  [search]=\"true\" (click)=\"closeModal()\"></listingList_LP>\r\n      </div>\r\n    </div>\r\n\r\n  </ion-card-content>\r\n\r\n\r\n</ion-content>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<ion-footer style=\"background-color: rgb(0, 0, 0) !important; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);\" *ngIf=\"showContactInfo()\"   dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n  <ion-toolbar  style=\"background-color: rgb(0, 0, 0) !important;\">\r\n      <div *ngIf=\"GlobalFieldsListingPro.selectedListing && iniFinished\" style=\"display: inline-flex; width: 100%;list-style-type: none; padding-bottom:10px; white-space: nowrap; overflow-x: auto; overflow-y: hidden; -webkit-overflow-scrolling: touch;\">\r\n\r\n        <!-- Fast btns -->\r\n        <span style=\"display: inline-flex;\" [class.fastBtnPaddingLeft]=\"GlobalFields.site_details.showDirectMessageBtn && GlobalFields.getLanguageLayout() =='ltr'\" [class.fastBtnPaddingRight]=\"GlobalFields.site_details.showDirectMessageBtn && GlobalFields.getLanguageLayout() =='rtl'\">\r\n          <div [className]=\"getActionContainerClass()\" *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.website\" [style.background-color] = \"GlobalFields.site_details.actionButtonStyle=='2' ? 'white' : '#2ba3ff'\">\r\n            <a (click)=\"openLink(GlobalFieldsListingPro.selectedListing.post_meta.website)\">\r\n              <i class=\"fas fa-globe\" style=\"color: #2ba3ff\"></i>\r\n              <!-- <img src=\"../../assets/imgs/social_icons/envelope.svg\" style=\"height: 40px;\"/> -->\r\n              <span [className]=\"getActionLabelClass()\"> Website</span>\r\n            </a>\r\n          </div>\r\n          <div [className]=\"getActionContainerClass()\" *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.email\" [style.background-color] = \"GlobalFields.site_details.actionButtonStyle=='2' ? 'white' : '#FFC107'\">\r\n            <a (click)=\"openLink('mailto:' + GlobalFieldsListingPro.selectedListing.post_meta.email + '?Subject=My%20Custom%20Subject')\">\r\n              <i class=\"fas fa-envelope\" style=\"color: #FFC107\"></i>\r\n              <span [className]=\"getActionLabelClass()\"> Email</span>\r\n            </a>\r\n          </div>\r\n          <div [className]=\"getActionContainerClass()\" *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.whatsapp && GlobalFields.site_details.showWhatsappBtn\" [style.background-color] = \"GlobalFields.site_details.actionButtonStyle=='2' ? 'white' : '#25d366'\">\r\n            <a (click)=\"openLink('https://wa.me/' + clearSpaces(GlobalFieldsListingPro.selectedListing.post_meta.whatsapp))\">\r\n              <i class=\"fab fa-whatsapp\" style=\"color: #25d366\"></i>\r\n              <!-- <img src=\"../../assets/imgs/social_icons/whatsapp.svg\" style=\"height: 40px;\"/> -->\r\n              <span [className]=\"getActionLabelClass()\"> WhatsApp</span>\r\n            </a>\r\n          </div>\r\n          <div [className]=\"getActionContainerClass()\" *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.phone\" (click)=\"callNumberAction(GlobalFieldsListingPro.selectedListing.post_meta.phone)\" [style.background-color] = \"GlobalFields.site_details.actionButtonStyle=='2' ? 'white' : '#E91E63'\">\r\n            <i class=\"fas fa-phone\" style=\"color: #E91E63\"></i>\r\n            <!-- <img src=\"../../assets/imgs/social_icons/phone-call.svg\" style=\"height: 40px;\"/> -->\r\n            <span [className]=\"getActionLabelClass()\"> {{'CALL' | translate}}</span>\r\n          </div>\r\n\r\n          <div [className]=\"getActionContainerClass()\" *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.gAddress\" (click)=\"goToNavigatorAction(GlobalFieldsListingPro.selectedListing.post_meta.gAddress)\" [style.background-color] = \"GlobalFields.site_details.actionButtonStyle=='2' ? 'white' : '#03A9F4'\">\r\n              <i class=\"fas fa-map-marker-alt\" style=\"color: #03A9F4\"></i>\r\n              <span  [className]=\"getActionLabelClass()\" > {{'GO' | translate}}</span>\r\n          </div>\r\n          <div *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.facebook\" style=\"display: flex;\">\r\n            <div [className]=\"getActionContainerClass()\" [style.background-color] = \"GlobalFields.site_details.actionButtonStyle=='2' ? 'white' : getLinkColor('Facebook')\">\r\n              <a (click)=\"openLink(GlobalFieldsListingPro.selectedListing.post_meta.facebook)\" [style.color]=\"getLinkColor('Facebook')\">\r\n               <i class=\"{{getLinkIcon('Facebook')}}\"></i>\r\n               <span [className]=\"getActionLabelClass()\"> Facebook</span>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.instagram\" style=\"display: flex;\">\r\n            <div [className]=\"getActionContainerClass()\" [style.background-color] = \"GlobalFields.site_details.actionButtonStyle=='2' ? 'white' : getLinkColor('Instagram')\">\r\n              <a (click)=\"openLink(GlobalFieldsListingPro.selectedListing.post_meta.instagram)\" [style.color]=\"getLinkColor('Instagram')\">\r\n               <i class=\"{{getLinkIcon('Instagram')}}\"></i>\r\n               <span [className]=\"getActionLabelClass()\"> Instagram</span>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.twitter\" style=\"display: flex;\">\r\n            <div [className]=\"getActionContainerClass()\" [style.background-color] = \"GlobalFields.site_details.actionButtonStyle=='2' ? 'white' : getLinkColor('Twitter')\">\r\n              <a (click)=\"openLink(GlobalFieldsListingPro.selectedListing.post_meta.twitter)\" [style.color]=\"getLinkColor('Twitter')\">\r\n               <i class=\"{{getLinkIcon('Twitter')}}\"></i>\r\n               <span [className]=\"getActionLabelClass()\"> Twitter</span>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.linkedin\" style=\"display: flex;\">\r\n            <div [className]=\"getActionContainerClass()\" [style.background-color] = \"GlobalFields.site_details.actionButtonStyle=='2' ? 'white' : getLinkColor('Linkedin')\">\r\n              <a (click)=\"openLink(GlobalFieldsListingPro.selectedListing.post_meta.linkedin)\" [style.color]=\"getLinkColor('Linkedin')\">\r\n               <i class=\"{{getLinkIcon('linkedin')}}\"></i>\r\n                <!-- <img src=\"../../assets/imgs/social_icons/{{getLinkIcon(link.network)}}.svg\" style=\"height: 40px;\"/> -->\r\n               <span [className]=\"getActionLabelClass()\"> Linkedin</span>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </span>\r\n\r\n\r\n\r\n      </div>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/listingPage/modalWriteReview/modalWriteReview_LP.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/listingPage/modalWriteReview/modalWriteReview_LP.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header dir=\"{{GlobalFields.getLanguageLayout()}}\" style=\"background-color: white; border: none; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);\">\r\n  <ion-toolbar  class=\"toolbarHeader\">\r\n    <div class=\"headerContainer\">\r\n      <div class=\"headerCol1\">\r\n        <ion-icon name=\"close\" style=\"font-size: 20px; margin: 3px;\" (click)=\"closeModal()\"></ion-icon>\r\n      </div>\r\n      <div class=\"headerCol2\">\r\n        <h3 style=\"margin: 0\">{{'WRITE_REVIEW' | translate}}</h3>\r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content padding dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n\r\n  <div style=\"padding: 15px; margin-top: 15px\">\r\n\r\n    <!-- Stars chooser-->\r\n    <div *ngFor=\"let field of customFieldsStars\"  style=\"margin-bottom: 15px;\">\r\n      <ion-label position=\"floating\">{{field.label}}</ion-label><br>\r\n      <span *ngFor=\"let star of getStartsHtml(field.value); let i = index\">\r\n      <i [class]=\"star\" style='float: initial; font-size: 20px' (click)=\"field.value = i+1\"></i>\r\n    </span>\r\n    </div>\r\n\r\n    <div  style=\"margin-bottom: 15px;\">\r\n      <ion-label position=\"floating\">Title</ion-label>\r\n      <ion-input placeholder=\"Title\" [(ngModel)]=\"title\" type=\"text\"  style=\"border-bottom: solid 1px #d2d2d2; background-color: #f7f7f7; border-radius: 5px; padding: 5px;\"></ion-input>\r\n    </div>\r\n\r\n    <div  style=\"margin-bottom: 15px;\">\r\n      <ion-label position=\"floating\">{{'YOUR_MESSAGE' | translate}}</ion-label>\r\n      <ion-textarea placeholder=\"{{'YOUR_MESSAGE' | translate}}\" [(ngModel)]=\"comment\" rows=\"6\" autoGrow=\"true\" spellcheck=\"true\"  style=\"border-bottom: solid 1px #d2d2d2; background-color: #f7f7f7; border-radius: 5px; padding: 5px; min-height: 100px;\"></ion-textarea>\r\n    </div>\r\n\r\n    <span *ngIf=\"errorMgs\" style=\"color: #c61a42;\">{{errorMgs}}</span>\r\n    <br *ngIf=\"errorMgs\">\r\n    <br *ngIf=\"errorMgs\">\r\n\r\n\r\n    <ion-label position=\"floating\">{{'PHOTO' | translate}}</ion-label>\r\n    <div *ngIf=\"gallery\">\r\n      <span *ngFor=\"let img of gallery; let i = index\">\r\n        <img class=\"reviewImg\"  src=\"{{img.full}}\">\r\n        <i class=\"far fa-trash-alt\" style=\"color: #e43854\" (click)=\"deleteOldImg(i)\"></i>\r\n      </span>\r\n    </div>\r\n    <div style=\"display: inline\">\r\n      <div class=\"imgContainerInline\" *ngFor=\"let img of new_gallery; let i = index\">\r\n        <img [src]=\"img\" class=\"newReviewImg\">\r\n        <i class=\"far fa-trash-alt\" style=\"color: #e43854\" (click)=\"deleteNewImg(i)\"></i>\r\n      </div>\r\n    </div>\r\n\r\n    <br>\r\n    <ion-button (click)=\"openImagePicker()\"><i class=\"fas fa-plus\"></i></ion-button>\r\n    <br>\r\n\r\n    <br><br>\r\n\r\n    <button class=\"btnSendReview\"  [ngStyle]=\"GlobalFields.getPrimaryColorBackgroundJson()\" (click)=\"postAReview()\">\r\n      <span style=\"color: white\"><i class=\"far fa-comment-alt\" style=\"margin-right: 15px; text-transform: unset;\"></i> {{'WRITE_REVIEW' | translate}}</span>\r\n    </button>\r\n\r\n    <br><br>\r\n  </div>\r\n</ion-content>\r\n\r\n<!--\r\n<ion-footer  style=\"display: inline-flex;  padding: 5px; padding-top: 10px; border-top: solid #dbdbdb 1px; padding-bottom: 25px; box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px !important;\"   dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n  <ion-button color=\"success\" style=\"width: 100%; border-radius:5px; font-size: 18px; margin-left: 5px; font-weight: 600;\" (click)=\"postAReview();\">\r\n    <i class=\"far fa-comment-alt\" style=\"margin-right: 15px; text-transform: unset;\"></i>   {{'WRITE_REVIEW' | translate}}\r\n  </ion-button>\r\n</ion-footer>\r\n\r\n-->\r\n");

/***/ }),

/***/ "./src/app/ListingPro/home/modalGenericSearch/modal-generic-search_LP.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/ListingPro/home/modalGenericSearch/modal-generic-search_LP.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".iconType {\n  font-size: 13pt;\n  background-color: #f1f1f1 !important;\n  border-radius: 10px;\n  height: 35px;\n  text-align: center;\n  line-height: 40px;\n  width: 35px;\n  color: #3a3a3a;\n}\n\n.imageCacheGeneralSearch {\n  width: 35px;\n  height: 35px;\n  background-position: center !important;\n  background-size: cover !important;\n  -webkit-background-size: cover !important;\n  -moz-background-size: cover !important;\n  -o-background-size: cover !important;\n  border-radius: 5px;\n  background-color: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTGlzdGluZ1Byby9ob21lL21vZGFsR2VuZXJpY1NlYXJjaC9DOlxcam9rZXNvbmpvZWxcXGpva2Vzb25qb2VsL3NyY1xcYXBwXFxMaXN0aW5nUHJvXFxob21lXFxtb2RhbEdlbmVyaWNTZWFyY2hcXG1vZGFsLWdlbmVyaWMtc2VhcmNoX0xQLnNjc3MiLCJzcmMvYXBwL0xpc3RpbmdQcm8vaG9tZS9tb2RhbEdlbmVyaWNTZWFyY2gvbW9kYWwtZ2VuZXJpYy1zZWFyY2hfTFAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLGlDQUFBO0VBQ0EseUNBQUE7RUFDQSxzQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL0xpc3RpbmdQcm8vaG9tZS9tb2RhbEdlbmVyaWNTZWFyY2gvbW9kYWwtZ2VuZXJpYy1zZWFyY2hfTFAuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uVHlwZXtcclxuICBmb250LXNpemU6IDEzcHQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjQxLCAyNDEpICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGNvbG9yOiAjM2EzYTNhO1xyXG59XHJcblxyXG4uaW1hZ2VDYWNoZUdlbmVyYWxTZWFyY2h7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuIiwiLmljb25UeXBlIHtcbiAgZm9udC1zaXplOiAxM3B0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgd2lkdGg6IDM1cHg7XG4gIGNvbG9yOiAjM2EzYTNhO1xufVxuXG4uaW1hZ2VDYWNoZUdlbmVyYWxTZWFyY2gge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */");

/***/ }),

/***/ "./src/app/ListingPro/home/modalGenericSearch/modal-generic-search_LP.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/ListingPro/home/modalGenericSearch/modal-generic-search_LP.ts ***!
  \*******************************************************************************/
/*! exports provided: ModalGenericSearch_LP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalGenericSearch_LP", function() { return ModalGenericSearch_LP; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Constants */ "./src/app/Constants.ts");
/* harmony import */ var _GlobalFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../GlobalFields */ "./src/app/GlobalFields.ts");
/* harmony import */ var _services_Service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/Service */ "./src/app/services/Service.ts");
/* harmony import */ var _services_LocationService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/LocationService */ "./src/app/services/LocationService.ts");
/* harmony import */ var _listingPage_listing_page_LP_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../listingPage/listing-page_LP.component */ "./src/app/ListingPro/listingPage/listing-page_LP.component.ts");
/* harmony import */ var _services_ListingProService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/ListingProService */ "./src/app/services/ListingProService.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../GlobalFieldsListingPro */ "./src/app/GlobalFieldsListingPro.ts");











let ModalGenericSearch_LP = class ModalGenericSearch_LP {
    constructor(viewCtrl, service, lpservice, navController, locationService, alertController, tranlsate) {
        this.viewCtrl = viewCtrl;
        this.service = service;
        this.lpservice = lpservice;
        this.navController = navController;
        this.locationService = locationService;
        this.alertController = alertController;
        this.tranlsate = tranlsate;
        this.Constants = _Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"];
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"];
        this.GlobalFieldsListingPro = _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_10__["GlobalFieldsListingPro"];
        this.loading = false;
    }
    getImgCachedClass(class_to_add) {
        let class_name = 'shadedImgCached ' + class_to_add;
        const imageAttributes = [];
        imageAttributes.push({
            element: 'class',
            value: class_name
        });
        return imageAttributes;
    }
    generalSearch() {
        this.loading = true;
        this.lpservice.suggestedSearch(this.searchQuery).subscribe((res) => {
            this.results = res;
            this.loading = false;
        });
    }
    searchNearMe(name) {
        this.closeModal();
        console.log(this.GlobalFields.address);
        _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_10__["GlobalFieldsListingPro"].clearFilters();
        _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_10__["GlobalFieldsListingPro"].filtersSearch.categories = name;
        _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_10__["GlobalFieldsListingPro"].filtersSearch.location = this.GlobalFields.address;
        // set default value to the proximity range
        _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_10__["GlobalFieldsListingPro"].filtersSearch.range = _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_10__["GlobalFieldsListingPro"].listingTypeDetail.filter_status.enable_readious_search_filter_default;
        _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_10__["GlobalFieldsListingPro"].basicSearch = true;
        _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_10__["GlobalFieldsListingPro"].getFilteredListingFirstTime(this.lpservice, this.locationService, true);
        this.navController.navigateForward('tabs/' + _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].site_details.themeEnabled + '/search');
    }
    getListingDetails(id) {
        console.log('getListingDetails');
        this.GlobalFields.loadingSoft = true;
        this.lpservice.getListingDetailsById(id).subscribe((data) => {
            _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_10__["GlobalFieldsListingPro"].selectedListing = data;
            this.openModalListing();
        }, error => {
            console.log(error);
            let msg = '';
            if (error && error.error)
                msg = error.error.message;
            else if (error)
                msg = error.message;
            this.GlobalFields.openAlert(this.alertController, 'Error', 'Error on web server', msg);
            this.GlobalFields.loadingSoft = false;
        });
    }
    openModalListing() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('openModalListing');
            const listingModal = yield this.viewCtrl.create({
                component: _listingPage_listing_page_LP_component__WEBPACK_IMPORTED_MODULE_7__["ListingPage_LP"],
            });
            return yield listingModal.present();
        });
    }
    getListingsByCategory(catName) {
        _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_10__["GlobalFieldsListingPro"].clearFilters();
        _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_10__["GlobalFieldsListingPro"].filtersSearch.categories = catName;
        this.closeModal();
        _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_10__["GlobalFieldsListingPro"].basicSearch = true;
        _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_10__["GlobalFieldsListingPro"].getFilteredListingFirstTime(this.lpservice, this.locationService, true);
        this.navController.navigateForward('tabs/' + _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].site_details.themeEnabled + '/search');
    }
    getListingsByTag(selTag) {
        _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_10__["GlobalFieldsListingPro"].clearFilters();
        _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_10__["GlobalFieldsListingPro"].filtersSearch.skeyword = selTag.name;
        _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_10__["GlobalFieldsListingPro"].basicSearch = true;
        _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_10__["GlobalFieldsListingPro"].getFilteredListingFirstTime(this.lpservice, this.locationService, true);
        this.navController.navigateForward('tabs/' + _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].site_details.themeEnabled + '/search');
    }
    closeModal() {
        this.viewCtrl.dismiss();
    }
};
ModalGenericSearch_LP.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_Service__WEBPACK_IMPORTED_MODULE_5__["Service"] },
    { type: _services_ListingProService__WEBPACK_IMPORTED_MODULE_8__["ListingProService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_LocationService__WEBPACK_IMPORTED_MODULE_6__["LocationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] }
];
ModalGenericSearch_LP = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'modalGenericSearch',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal-generic-search_LP.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/home/modalGenericSearch/modal-generic-search_LP.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal-generic-search_LP.scss */ "./src/app/ListingPro/home/modalGenericSearch/modal-generic-search_LP.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_Service__WEBPACK_IMPORTED_MODULE_5__["Service"], _services_ListingProService__WEBPACK_IMPORTED_MODULE_8__["ListingProService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_LocationService__WEBPACK_IMPORTED_MODULE_6__["LocationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]])
], ModalGenericSearch_LP);



/***/ }),

/***/ "./src/app/ListingPro/listingList/listingList_LP.scss":
/*!************************************************************!*\
  !*** ./src/app/ListingPro/listingList/listingList_LP.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toolbar-background {\n  background-color: white;\n}\n\n.social-cards ion-col {\n  background-color: transparent !important;\n}\n\n.searchText {\n  color: #9E9E9E;\n}\n\n.inputSearchText {\n  color: black;\n}\n\n.section {\n  padding: 5px;\n  margin: 15px;\n  margin-bottom: 45px;\n  background-color: #000000;\n}\n\n.titleSection {\n  font-size: 16pt;\n  height: 50px;\n}\n\n.regionTitle {\n  height: 150px;\n  text-align: center;\n  line-height: 140px;\n  background-color: rgba(45, 45, 45, 0.54);\n  border-radius: 5px;\n  color: white;\n  font-size: 16pt;\n  font-weight: 900;\n  width: 100%;\n  background-position: center !important;\n  background-size: cover !important;\n}\n\n.horizontalList {\n  overflow-x: auto;\n  display: inline-flex;\n  width: 100%;\n}\n\n.rowListType {\n  background: white;\n  margin: 5px;\n  margin-bottom: 10px;\n  border-radius: 5px;\n  height: 90px;\n}\n\n.listingAddressLittle {\n  margin: 0px;\n  font-size: 7pt;\n  color: #979797;\n  max-height: 30px;\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  -webkit-line-clamp: 1 !important;\n  display: -webkit-box !important;\n  visibility: visible;\n}\n\n.divHorizontalList {\n  width: 50% !important;\n  max-width: none !important;\n  margin: 5px;\n}\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n  margin: -5px;\n}\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 10pt;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n\n.social-cards ion-col {\n  padding: 0;\n  background-color: #f3f5f8;\n}\n\n.imgList {\n  height: 100px;\n  border-radius: 5px;\n}\n\n.imgTypes {\n  -o-object-fit: cover !important;\n     object-fit: cover !important;\n  border-radius: 5px;\n}\n\n.centralArrow {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.totalPageBackImg {\n  background: url(https://cdn-images-1.medium.com/max/1600/0*I-sI3u34g0ydRqyA);\n  position: relative;\n  width: 100%;\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  height: 100%;\n  background-position: center !important;\n  background-size: cover !important;\n  margin-bottom: 20px;\n  padding-bottom: 50px;\n}\n\n.totalPageBackImg::after {\n  content: \"\";\n  background: black;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0.2;\n}\n\n.borderList {\n  /*border: 1px solid #f0f0f0;*/\n  border: none;\n  border-radius: 5px;\n}\n\n.boxShadowList {\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);\n}\n\n.backImgBigger {\n  width: 100%;\n  height: 150px;\n  background-position: center !important;\n  background-size: cover !important;\n  overflow: hidden;\n  position: relative;\n}\n\n.backImgList {\n  width: 100%;\n  height: 90px;\n  background-position: center !important;\n  background-size: cover !important;\n  border-radius: 5px 0 0 5px;\n  overflow: hidden;\n}\n\n.backImgList[dir=ltr] {\n  margin-right: -25px;\n}\n\n.imgRTLList {\n  background: url(//i0.wp.com/danceup.dance/wp-content/uploads/listing-uploads/gallery/2019/12/imgListing-6.jpeg);\n  width: 100%;\n  height: 90px;\n  background-position: center !important;\n  background-size: cover !important;\n  border-radius: 0 5px 5px 0;\n  cursor: pointer;\n}\n\n/*White background*/\n\n.backImg {\n  width: 100%;\n  height: 100px;\n  border-radius: 5px;\n  background-position: center !important;\n  background-size: cover !important;\n  overflow: hidden;\n}\n\n.backImgLittle {\n  width: 100%;\n  height: 80px;\n  border-radius: 5px;\n  background-position: center !important;\n  background-size: cover !important;\n  overflow: hidden;\n}\n\n.backImgSquaredAndLogo {\n  width: 100%;\n  height: 130px;\n  background-color: black;\n  position: relative;\n  overflow: hidden;\n}\n\n.backImgSquared {\n  width: 100px;\n  height: 100px;\n  background-position: center !important;\n  background-size: cover !important;\n  border-radius: 5px;\n}\n\n.backImgLogo {\n  background-size: 100% !important;\n  height: 50px;\n  background-repeat: no-repeat !important;\n  background-position: center !important;\n}\n\n.backImgLogo2 {\n  background-size: 100% !important;\n  background-repeat: no-repeat !important;\n  background-position: center !important;\n  position: relative;\n  top: 10%;\n  left: 25%;\n  display: flow-root;\n  height: 100px;\n  z-index: 4;\n  width: 50%;\n}\n\n.postImg {\n  width: 100%;\n  height: 300px;\n  background-position: center !important;\n  background-size: cover !important;\n}\n\n.homeTypeLabel {\n  padding: 5px;\n  font-size: 12pt;\n  color: black;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin: 0;\n}\n\n.basicSearchContainer {\n  padding: 20px;\n  z-index: 9;\n  background-color: black;\n  color: #f3f5f8;\n  position: relative;\n  top: 10%;\n  margin: 15px;\n  border-radius: 5px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.imgLogoHorizontal {\n  width: 50%;\n  height: auto;\n  margin-left: 25%;\n  z-index: 9;\n  position: relative;\n  margin-top: 60px;\n  margin-bottom: -25px;\n}\n\n.typeTitle {\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  padding: 0;\n  text-align: initial;\n}\n\n.btnLight {\n  /* border: solid 1px #4392ff;*/\n  border-radius: 10px;\n  float: right;\n  /*padding: 10px;*/\n}\n\n.reviewCounterLittle {\n  color: #ffffff;\n  font-size: 12pt;\n  font-weight: 600;\n  float: right;\n  line-height: 1;\n  text-transform: none !important;\n}\n\n.reviewCounterLittleList {\n  color: #ffffff;\n  font-weight: 600;\n  line-height: 1;\n  font-size: 8pt;\n  margin-top: 5px;\n  text-transform: none !important;\n}\n\n.reviewCounterLittleList[dir=rtl] {\n  float: left;\n}\n\n.reviewCounterLittleList[dir=ltr] {\n  float: right;\n}\n\n.reviewScoreLittle {\n  font-size: 11pt;\n  font-weight: bolder;\n  float: left;\n  line-height: 1.7;\n  text-transform: none !important;\n}\n\n.reviewScoreLittleList {\n  font-size: 10pt;\n  font-weight: bolder;\n  float: left;\n  line-height: 1.7;\n  text-transform: none !important;\n}\n\n.starReview {\n  font-size: medium;\n  margin-left: 2px;\n  margin-right: 5px;\n  color: #ffc106 !important;\n  position: relative;\n  top: 2px;\n}\n\n.starReviewList {\n  font-size: medium;\n  margin-left: 2px;\n  margin-right: 5px;\n  color: #ffc106 !important;\n  position: relative;\n  top: 1px;\n}\n\nstarReviewAirbnb {\n  font-size: 12px;\n  margin-left: 2px;\n  margin-right: 5px;\n  color: #ffc106 !important;\n  position: relative;\n  top: 1px;\n}\n\n.listingType {\n  font-weight: 800 !important;\n  line-height: 16px !important;\n  letter-spacing: normal !important;\n  text-transform: uppercase !important;\n  color: #767676;\n  text-overflow: ellipsis !important;\n  white-space: nowrap !important;\n  font-size: 11px !important;\n  overflow: hidden !important;\n  font-weight: bold;\n  margin: 0;\n  padding: 0;\n  /* text-align: left;*/\n  text-align: initial;\n}\n\n.badgeLeftFloat {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 32px;\n  margin-right: 5px;\n  font-weight: 700;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  top: 20px;\n  line-height: 20px;\n  z-index: 9;\n  background-color: #ffffff2e;\n  font-size: 8pt;\n  padding: 6px 10px;\n  color: #fff;\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px);\n  border-radius: 50px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0 2px 8px;\n}\n\n.boltIcon {\n  width: 32px;\n  padding-left: 12px;\n  border: solid 1px #FFEB3B;\n  color: #FFEB3B;\n  font-size: 9pt;\n}\n\n.boltIconList {\n  position: absolute;\n  right: 5px;\n  bottom: 5px;\n  width: 23px;\n  text-align: center;\n  height: 23px;\n  border: solid 1px;\n  line-height: 24px;\n  color: #ffc106;\n  border-radius: 100px;\n  font-size: 8pt;\n}\n\n.logoCircleImg {\n  width: 60px;\n  height: 60px;\n  overflow: hidden;\n  border-radius: 50%;\n  z-index: 9;\n  background-color: #fff;\n  background-size: cover;\n  position: absolute;\n  top: -25px;\n  left: 50%;\n  transform: translateX(-50%);\n  background-position: center !important;\n  background-size: cover !important;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);\n}\n\n.sponsoredAirbnb {\n  background-color: white;\n  color: #FFC107;\n  border: solid 1px;\n  border-radius: 2px;\n  padding: 1px 3px !important;\n  margin-left: 5px !important;\n  -webkit-box-align: center !important;\n  font-size: 8px !important;\n  line-height: 12px !important;\n  align-items: center !important;\n  display: inline-flex !important;\n  display: inline-block !important;\n  vertical-align: top !important;\n  white-space: normal !important;\n  -webkit-animation-duration: 0.3s !important;\n  animation-duration: 0.3s !important;\n  -webkit-animation-name: keyframe_18jn58a !important;\n  animation-name: keyframe_18jn58a !important;\n  -webkit-animation-timing-function: ease-in-out !important;\n  animation-timing-function: ease-in-out !important;\n  opacity: 1 !important;\n  visibility: visible !important;\n}\n\n.sponsoredAirbnb i {\n  display: none;\n}\n\n.sponsoredFloat {\n  height: 32px;\n  margin-right: 5px;\n  font-weight: 700;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  left: 15px;\n  top: 15px;\n  position: fixed;\n  line-height: 16px;\n  z-index: 9;\n  background-color: #ffffff2e;\n  padding: 6px 10px;\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px);\n  border-radius: 50px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0 2px 8px;\n  width: 32px;\n  padding-left: 12px;\n  border: solid 1px #FFEB3B;\n  color: #FFEB3B;\n  font-size: 9pt;\n}\n\n.sponsoredFloat span {\n  display: none;\n}\n\n/* Custom fields box type */\n\n.backImgTrip {\n  width: 100%;\n  height: 140px;\n  background-position: center !important;\n  background-size: cover !important;\n  border-radius: 5px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 0;\n}\n\n.gridBox {\n  margin-bottom: 15px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.floatGridBox {\n  margin-bottom: 15px;\n  display: flex;\n  position: fixed;\n  top: 10px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.divGridBox {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 49.75%;\n  margin-bottom: 0.5%;\n  height: 30px;\n  margin: 0px;\n  margin-bottom: 1px;\n}\n\n.divGridBox span {\n  text-align: center;\n  text-align: center;\n  color: #4c4c4c;\n  font-size: 10px;\n  line-height: 16px;\n  font-weight: 700;\n}\n\n.divGridBox i {\n  font-size: 20px;\n}\n\n.divGridBox:nth-last-child(n+5):first-child,\n.divGridBox:nth-last-child(n+5):first-child ~ *,\n.divGridBox:nth-last-child(n+6):first-child,\n.divGridBox:nth-last-child(n+6):first-child ~ * {\n  flex-basis: 33%;\n}\n\n.divGridBox:nth-child(5):last-child {\n  margin-right: auto;\n  margin-left: 0.5%;\n}\n\n.paddingTopLogoBoxFooter {\n  bottom: 10px;\n  position: absolute;\n  width: 90%;\n  left: 5%;\n}\n\n.verticalDivisor {\n  margin-left: 5px;\n  margin-right: 5px;\n  display: inline;\n  border-left: solid 1px #b8b8b8;\n  height: 100%;\n  width: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTGlzdGluZ1Byby9saXN0aW5nTGlzdC9DOlxcam9rZXNvbmpvZWxcXGpva2Vzb25qb2VsL3NyY1xcYXBwXFxMaXN0aW5nUHJvXFxsaXN0aW5nTGlzdFxcbGlzdGluZ0xpc3RfTFAuc2NzcyIsInNyYy9hcHAvTGlzdGluZ1Byby9saXN0aW5nTGlzdC9saXN0aW5nTGlzdF9MUC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsdUJBQUE7QUNBRjs7QURFQTtFQUNFLHdDQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0FDR0Y7O0FEQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNHRjs7QUREQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDSUY7O0FEQUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO0VBSUEsaUNBQUE7QUNHRjs7QUREQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FDSUY7O0FEREE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0lGOztBRERBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0FDSUY7O0FERkE7RUFDRSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ0tGOztBRERFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNJSjs7QURERTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDR0o7O0FEQUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNFSjs7QURHQTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtBQ0FGOztBREtBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDRkY7O0FES0E7RUFDRSwrQkFBQTtLQUFBLDRCQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURLQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsZ0NBQUE7QUNGRjs7QURNQTtFQUNFLDRFQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFBQSw0QkFBQTtFQUFBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDSEY7O0FET0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FDSkY7O0FET0E7RUFDRSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRE9BO0VBRUUsMENBQUE7QUNKRjs7QURRQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0NBQUE7RUFJQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNMRjs7QURTQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7RUFJQSxpQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUNORjs7QURTQTtFQUNFLG1CQUFBO0FDTkY7O0FEU0E7RUFDRSwrR0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7RUFJQSxpQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQ05GOztBRFNBLG1CQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBSUEsaUNBQUE7RUFDQSxnQkFBQTtBQ05GOztBRFNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBSUEsaUNBQUE7RUFDQSxnQkFBQTtBQ05GOztBRFdBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNSRjs7QURXQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0NBQUE7RUFJQSxpQ0FBQTtFQUNBLGtCQUFBO0FDUkY7O0FEWUE7RUFDRSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0FDVEY7O0FEV0E7RUFDRSxnQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUNSRjs7QURVQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0NBQUE7RUFJQSxpQ0FBQTtBQ1BGOztBRFVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQ1BGOztBRFdBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSwrR0FBQTtBQ1JGOztBRFdBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNSRjs7QURXQTtFQUNFLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNSRjs7QURXQTtFQUNDLDhCQUFBO0VBQ0MsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNSRjs7QURZQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0FDVEY7O0FEWUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQ1RGOztBRFdBO0VBQ0UsV0FBQTtBQ1JGOztBRFVBO0VBQ0UsWUFBQTtBQ1BGOztBRFdBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUNSRjs7QURVQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FDUEY7O0FEVUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ1BGOztBRFNBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNORjs7QURTQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNORjs7QURXQTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNELHFCQUFBO0VBQ0MsbUJBQUE7QUNSRjs7QURXQTtFQUNFLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0RBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7QUNSRjs7QURXQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNSRjs7QURXQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUNSRjs7QURXQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUVBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSxpQ0FBQTtFQUNBLDBDQUFBO0FDUkY7O0FEV0E7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsbURBQUE7RUFDQSwyQ0FBQTtFQUNBLHlEQUFBO0VBQ0EsaURBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FDUkY7O0FEVUE7RUFDRSxhQUFBO0FDUEY7O0FEVUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGtEQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ1BGOztBRFVBO0VBQ0UsYUFBQTtBQ1BGOztBRFlBLDJCQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUlBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNURjs7QURhQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQ1ZGOztBRGFBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUNWRjs7QURhQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ1ZGOztBRGFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ1ZGOztBRGFBO0VBQ0UsZUFBQTtBQ1ZGOztBRGNBOzs7O0VBTUUsZUFBQTtBQ2JGOztBRGlCQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNkRjs7QURrQkE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQ2ZGOztBRG1CQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ2hCRiIsImZpbGUiOiJzcmMvYXBwL0xpc3RpbmdQcm8vbGlzdGluZ0xpc3QvbGlzdGluZ0xpc3RfTFAuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uc29jaWFsLWNhcmRzIGlvbi1jb2x7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4uc2VhcmNoVGV4dHtcclxuICBjb2xvcjogIzlFOUU5RTtcclxufVxyXG4uaW5wdXRTZWFyY2hUZXh0e1xyXG4gIGNvbG9yOmJsYWNrO1xyXG59XHJcblxyXG4uc2VjdGlvbntcclxuICBwYWRkaW5nOjVweDtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi50aXRsZVNlY3Rpb257XHJcbiAgZm9udC1zaXplOiAxNnB0O1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuXHJcbi5yZWdpb25UaXRsZXtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMTQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NSwgNDUsIDQ1LCAwLjU0KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTZwdDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhvcml6b250YWxMaXN0e1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5yb3dMaXN0VHlwZXtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBtYXJnaW46IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBoZWlnaHQ6IDkwcHhcclxufVxyXG5cclxuLmxpc3RpbmdBZGRyZXNzTGl0dGxle1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGZvbnQtc2l6ZTogN3B0O1xyXG4gIGNvbG9yOiAjOTc5Nzk3O1xyXG4gIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3ggIWltcG9ydGFudDtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcbi5kaXZIb3Jpem9udGFsTGlzdHtcclxuICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcclxuXHJcbiAgaW9uLWNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOi01cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC10aXRsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDM2JTtcclxuICAgIGZvbnQtc2l6ZTogMTBwdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gIC5jYXJkLXN1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4wZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUyJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLnNvY2lhbC1jYXJkcyBpb24tY29sIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y1Zjg7XHJcbn1cclxuXHJcblxyXG5cclxuLmltZ0xpc3R7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5pbWdUeXBlc3tcclxuICBvYmplY3QtZml0OiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmNlbnRyYWxBcnJvd3tcclxuICBtYXJnaW46IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSlcclxufVxyXG5cclxuXHJcbi50b3RhbFBhZ2VCYWNrSW1ne1xyXG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL2Nkbi1pbWFnZXMtMS5tZWRpdW0uY29tL21heC8xNjAwLzAqSS1zSTN1MzRnMHlkUnF5QSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuXHJcbi50b3RhbFBhZ2VCYWNrSW1nOjphZnRlciB7XHJcbiAgY29udGVudDonJztcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHRvcDowO1xyXG4gIGxlZnQ6MDtcclxuICBvcGFjaXR5OjAuMjtcclxufVxyXG5cclxuLmJvcmRlckxpc3R7XHJcbiAgLypib3JkZXI6IDFweCBzb2xpZCAjZjBmMGYwOyovXHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmJveFNoYWRvd0xpc3R7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsMCwwLC4xKTtcclxuICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsMCwwLC4xKTtcclxufVxyXG5cclxuXHJcbi5iYWNrSW1nQmlnZ2Vye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuXHJcbi5iYWNrSW1nTGlzdHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uYmFja0ltZ0xpc3RbZGlyPVwibHRyXCJde1xyXG4gIG1hcmdpbi1yaWdodDogLTI1cHg7XHJcbn1cclxuXHJcbi5pbWdSVExMaXN0e1xyXG4gIGJhY2tncm91bmQ6IHVybCgvL2kwLndwLmNvbS9kYW5jZXVwLmRhbmNlL3dwLWNvbnRlbnQvdXBsb2Fkcy9saXN0aW5nLXVwbG9hZHMvZ2FsbGVyeS8yMDE5LzEyL2ltZ0xpc3RpbmctNi5qcGVnKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qV2hpdGUgYmFja2dyb3VuZCovXHJcbi5iYWNrSW1ne1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmJhY2tJbWdMaXR0bGV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcblxyXG5cclxuLmJhY2tJbWdTcXVhcmVkQW5kTG9nb3tcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uYmFja0ltZ1NxdWFyZWR7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcblxyXG4uYmFja0ltZ0xvZ297XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG4uYmFja0ltZ0xvZ28ye1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxMCU7XHJcbiAgbGVmdDogMjUlO1xyXG4gIGRpc3BsYXk6IGZsb3ctcm9vdDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHotaW5kZXg6IDQ7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG4ucG9zdEltZ3tcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ob21lVHlwZUxhYmVse1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBmb250LXNpemU6IDEycHQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcblxyXG4uYmFzaWNTZWFyY2hDb250YWluZXJ7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB6LWluZGV4Ojk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIGNvbG9yOiAjZjNmNWY4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDEwJTtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxufVxyXG5cclxuLmltZ0xvZ29Ib3Jpem9udGFse1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgei1pbmRleDogOTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAtMjVweDtcclxufVxyXG5cclxuLnR5cGVUaXRsZXtcclxuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRleHQtYWxpZ246IGluaXRpYWw7XHJcbn1cclxuXHJcbi5idG5MaWdodHtcclxuIC8qIGJvcmRlcjogc29saWQgMXB4ICM0MzkyZmY7Ki9cclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICAvKnBhZGRpbmc6IDEwcHg7Ki9cclxufVxyXG5cclxuXHJcbi5yZXZpZXdDb3VudGVyTGl0dGxle1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTJwdDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmV2aWV3Q291bnRlckxpdHRsZUxpc3R7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBmb250LXNpemU6IDhwdDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4ucmV2aWV3Q291bnRlckxpdHRsZUxpc3RbZGlyPVwicnRsXCJde1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5yZXZpZXdDb3VudGVyTGl0dGxlTGlzdFtkaXI9XCJsdHJcIl17XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG5cclxuLnJldmlld1Njb3JlTGl0dGxle1xyXG4gIGZvbnQtc2l6ZTogMTFwdDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4ucmV2aWV3U2NvcmVMaXR0bGVMaXN0e1xyXG4gIGZvbnQtc2l6ZTogMTBwdDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN0YXJSZXZpZXd7XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBjb2xvcjogI2ZmYzEwNiAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDJweDtcclxufVxyXG4uc3RhclJldmlld0xpc3R7XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBjb2xvcjogI2ZmYzEwNiAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDFweDtcclxufVxyXG5cclxuc3RhclJldmlld0FpcmJuYntcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBjb2xvcjogI2ZmYzEwNiAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDFweDtcclxufVxyXG5cclxuXHJcblxyXG4ubGlzdGluZ1R5cGV7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcclxuICBjb2xvcjogcmdiKDExOCwgMTE4LCAxMTgpO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuIC8qIHRleHQtYWxpZ246IGxlZnQ7Ki9cclxuICB0ZXh0LWFsaWduOiBpbml0aWFsO1xyXG59XHJcblxyXG4uYmFkZ2VMZWZ0RmxvYXR7XHJcbiAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XHJcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdG9wOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIHotaW5kZXg6IDk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjJlO1xyXG4gIGZvbnQtc2l6ZTogOHB0O1xyXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwwLDAsLjE1KSAwIDJweCA4cHg7XHJcbn1cclxuXHJcbi5ib2x0SWNvbntcclxuICB3aWR0aDogMzJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI0ZGRUIzQjtcclxuICBjb2xvcjogI0ZGRUIzQjtcclxuICBmb250LXNpemU6IDlwdDtcclxufVxyXG5cclxuLmJvbHRJY29uTGlzdHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDVweDtcclxuICBib3R0b206IDVweDtcclxuICB3aWR0aDogMjNweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAyM3B4O1xyXG4gIGJvcmRlcjogc29saWQgMXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGNvbG9yOiAjZmZjMTA2O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gIGZvbnQtc2l6ZTogOHB0O1xyXG59XHJcblxyXG4ubG9nb0NpcmNsZUltZ3tcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgei1pbmRleDogOTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTI1cHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4uc3BvbnNvcmVkQWlyYm5ie1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiAjRkZDMTA3O1xyXG4gIGJvcmRlcjogc29saWQgMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBwYWRkaW5nOiAxcHggM3B4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDhweCAhaW1wb3J0YW50O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcCAhaW1wb3J0YW50O1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcyAhaW1wb3J0YW50O1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcyAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGtleWZyYW1lXzE4am41OGEgIWltcG9ydGFudDtcclxuICBhbmltYXRpb24tbmFtZToga2V5ZnJhbWVfMThqbjU4YSAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQgIWltcG9ydGFudDtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dCAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNwb25zb3JlZEFpcmJuYiBpIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc3BvbnNvcmVkRmxvYXR7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBsZWZ0OiAxNXB4O1xyXG4gIHRvcDogMTVweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgei1pbmRleDogOTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMmU7XHJcbiAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAwIDJweCA4cHg7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICNGRkVCM0I7XHJcbiAgY29sb3I6ICNGRkVCM0I7XHJcbiAgZm9udC1zaXplOiA5cHQ7XHJcbn1cclxuXHJcbi5zcG9uc29yZWRGbG9hdCBzcGFue1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuLyogQ3VzdG9tIGZpZWxkcyBib3ggdHlwZSAqL1xyXG4uYmFja0ltZ1RyaXB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxNDBweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG5cclxuLmdyaWRCb3h7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5mbG9hdEdyaWRCb3h7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDEwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmRpdkdyaWRCb3h7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZ3JvdzogMDtcclxuICBmbGV4LXNocmluazogMDtcclxuICBmbGV4LWJhc2lzOiA0OS43NSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogLjUlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBtYXJnaW46IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbn1cclxuXHJcbi5kaXZHcmlkQm94IHNwYW57XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzRjNGM0YztcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmRpdkdyaWRCb3ggaXtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcblxyXG4uZGl2R3JpZEJveDpudGgtbGFzdC1jaGlsZChuKzUpOmZpcnN0LWNoaWxkLFxyXG4uZGl2R3JpZEJveDpudGgtbGFzdC1jaGlsZChuKzUpOmZpcnN0LWNoaWxkIH4gKixcclxuXHJcbi5kaXZHcmlkQm94Om50aC1sYXN0LWNoaWxkKG4rNik6Zmlyc3QtY2hpbGQsXHJcbi5kaXZHcmlkQm94Om50aC1sYXN0LWNoaWxkKG4rNik6Zmlyc3QtY2hpbGQgfiAqIHtcclxuXHJcbiAgZmxleC1iYXNpczogMzMlO1xyXG59XHJcblxyXG5cclxuLmRpdkdyaWRCb3g6bnRoLWNoaWxkKDUpOmxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogLjUlO1xyXG59XHJcblxyXG5cclxuLnBhZGRpbmdUb3BMb2dvQm94Rm9vdGVye1xyXG4gIGJvdHRvbTogMTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBsZWZ0OiA1JTtcclxufVxyXG5cclxuXHJcbi52ZXJ0aWNhbERpdmlzb3J7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAjYjhiOGI4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMXB4O1xyXG59XHJcbiIsIi50b29sYmFyLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnNvY2lhbC1jYXJkcyBpb24tY29sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaFRleHQge1xuICBjb2xvcjogIzlFOUU5RTtcbn1cblxuLmlucHV0U2VhcmNoVGV4dCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnNlY3Rpb24ge1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogNDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1cblxuLnRpdGxlU2VjdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTZwdDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ucmVnaW9uVGl0bGUge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NSwgNDUsIDQ1LCAwLjU0KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZwdDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xufVxuXG4uaG9yaXpvbnRhbExpc3Qge1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yb3dMaXN0VHlwZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW46IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDkwcHg7XG59XG5cbi5saXN0aW5nQWRkcmVzc0xpdHRsZSB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDdwdDtcbiAgY29sb3I6ICM5Nzk3OTc7XG4gIG1heC1oZWlnaHQ6IDMwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94ICFpbXBvcnRhbnQ7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5kaXZIb3Jpem9udGFsTGlzdCB7XG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgaW9uLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAtNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5jYXJkLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM2JTtcbiAgZm9udC1zaXplOiAxMHB0O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MiU7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnNvY2lhbC1jYXJkcyBpb24tY29sIHtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjVmODtcbn1cblxuLmltZ0xpc3Qge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5pbWdUeXBlcyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmNlbnRyYWxBcnJvdyB7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4udG90YWxQYWdlQmFja0ltZyB7XG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL2Nkbi1pbWFnZXMtMS5tZWRpdW0uY29tL21heC8xNjAwLzAqSS1zSTN1MzRnMHlkUnF5QSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4udG90YWxQYWdlQmFja0ltZzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDAuMjtcbn1cblxuLmJvcmRlckxpc3Qge1xuICAvKmJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7Ki9cbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5ib3hTaGFkb3dMaXN0IHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmJhY2tJbWdCaWdnZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJhY2tJbWdMaXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYmFja0ltZ0xpc3RbZGlyPWx0cl0ge1xuICBtYXJnaW4tcmlnaHQ6IC0yNXB4O1xufVxuXG4uaW1nUlRMTGlzdCB7XG4gIGJhY2tncm91bmQ6IHVybCgvL2kwLndwLmNvbS9kYW5jZXVwLmRhbmNlL3dwLWNvbnRlbnQvdXBsb2Fkcy9saXN0aW5nLXVwbG9hZHMvZ2FsbGVyeS8yMDE5LzEyL2ltZ0xpc3RpbmctNi5qcGVnKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qV2hpdGUgYmFja2dyb3VuZCovXG4uYmFja0ltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYmFja0ltZ0xpdHRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5iYWNrSW1nU3F1YXJlZEFuZExvZ28ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJhY2tJbWdTcXVhcmVkIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYmFja0ltZ0xvZ28ge1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uYmFja0ltZ0xvZ28yIHtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMCU7XG4gIGxlZnQ6IDI1JTtcbiAgZGlzcGxheTogZmxvdy1yb290O1xuICBoZWlnaHQ6IDEwMHB4O1xuICB6LWluZGV4OiA0O1xuICB3aWR0aDogNTAlO1xufVxuXG4ucG9zdEltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbn1cblxuLmhvbWVUeXBlTGFiZWwge1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbiAgY29sb3I6IGJsYWNrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYmFzaWNTZWFyY2hDb250YWluZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICB6LWluZGV4OiA5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6ICNmM2Y1Zjg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMCU7XG4gIG1hcmdpbjogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uaW1nTG9nb0hvcml6b250YWwge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIHotaW5kZXg6IDk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgbWFyZ2luLWJvdHRvbTogLTI1cHg7XG59XG5cbi50eXBlVGl0bGUge1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGluaXRpYWw7XG59XG5cbi5idG5MaWdodCB7XG4gIC8qIGJvcmRlcjogc29saWQgMXB4ICM0MzkyZmY7Ki9cbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICAvKnBhZGRpbmc6IDEwcHg7Ki9cbn1cblxuLnJldmlld0NvdW50ZXJMaXR0bGUge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxMnB0O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmbG9hdDogcmlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucmV2aWV3Q291bnRlckxpdHRsZUxpc3Qge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtc2l6ZTogOHB0O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5yZXZpZXdDb3VudGVyTGl0dGxlTGlzdFtkaXI9cnRsXSB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ucmV2aWV3Q291bnRlckxpdHRsZUxpc3RbZGlyPWx0cl0ge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5yZXZpZXdTY29yZUxpdHRsZSB7XG4gIGZvbnQtc2l6ZTogMTFwdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5yZXZpZXdTY29yZUxpdHRsZUxpc3Qge1xuICBmb250LXNpemU6IDEwcHQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZsb2F0OiBsZWZ0O1xuICBsaW5lLWhlaWdodDogMS43O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uc3RhclJldmlldyB7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY29sb3I6ICNmZmMxMDYgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbn1cblxuLnN0YXJSZXZpZXdMaXN0IHtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBjb2xvcjogI2ZmYzEwNiAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXB4O1xufVxuXG5zdGFyUmV2aWV3QWlyYm5iIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY29sb3I6ICNmZmMxMDYgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDFweDtcbn1cblxuLmxpc3RpbmdUeXBlIHtcbiAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTZweCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbiAgY29sb3I6ICM3Njc2NzY7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgLyogdGV4dC1hbGlnbjogbGVmdDsqL1xuICB0ZXh0LWFsaWduOiBpbml0aWFsO1xufVxuXG4uYmFkZ2VMZWZ0RmxvYXQge1xuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0b3A6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB6LWluZGV4OiA5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMmU7XG4gIGZvbnQtc2l6ZTogOHB0O1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xuICBiYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMCAycHggOHB4O1xufVxuXG4uYm9sdEljb24ge1xuICB3aWR0aDogMzJweDtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjRkZFQjNCO1xuICBjb2xvcjogI0ZGRUIzQjtcbiAgZm9udC1zaXplOiA5cHQ7XG59XG5cbi5ib2x0SWNvbkxpc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIGJvdHRvbTogNXB4O1xuICB3aWR0aDogMjNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDIzcHg7XG4gIGJvcmRlcjogc29saWQgMXB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6ICNmZmMxMDY7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBmb250LXNpemU6IDhwdDtcbn1cblxuLmxvZ29DaXJjbGVJbWcge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjVweDtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5zcG9uc29yZWRBaXJibmIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICNGRkMxMDc7XG4gIGJvcmRlcjogc29saWQgMXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDFweCAzcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogOHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3AgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcyAhaW1wb3J0YW50O1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3MgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZToga2V5ZnJhbWVfMThqbjU4YSAhaW1wb3J0YW50O1xuICBhbmltYXRpb24tbmFtZToga2V5ZnJhbWVfMThqbjU4YSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0ICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0ICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xufVxuXG4uc3BvbnNvcmVkQWlyYm5iIGkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc3BvbnNvcmVkRmxvYXQge1xuICBoZWlnaHQ6IDMycHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGxlZnQ6IDE1cHg7XG4gIHRvcDogMTVweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgei1pbmRleDogOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjJlO1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAwIDJweCA4cHg7XG4gIHdpZHRoOiAzMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNGRkVCM0I7XG4gIGNvbG9yOiAjRkZFQjNCO1xuICBmb250LXNpemU6IDlwdDtcbn1cblxuLnNwb25zb3JlZEZsb2F0IHNwYW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBDdXN0b20gZmllbGRzIGJveCB0eXBlICovXG4uYmFja0ltZ1RyaXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uZ3JpZEJveCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZmxvYXRHcmlkQm94IHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDEwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZGl2R3JpZEJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmbGV4LWJhc2lzOiA0OS43NSU7XG4gIG1hcmdpbi1ib3R0b206IDAuNSU7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbn1cblxuLmRpdkdyaWRCb3ggc3BhbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzRjNGM0YztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmRpdkdyaWRCb3ggaSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmRpdkdyaWRCb3g6bnRoLWxhc3QtY2hpbGQobis1KTpmaXJzdC1jaGlsZCxcbi5kaXZHcmlkQm94Om50aC1sYXN0LWNoaWxkKG4rNSk6Zmlyc3QtY2hpbGQgfiAqLFxuLmRpdkdyaWRCb3g6bnRoLWxhc3QtY2hpbGQobis2KTpmaXJzdC1jaGlsZCxcbi5kaXZHcmlkQm94Om50aC1sYXN0LWNoaWxkKG4rNik6Zmlyc3QtY2hpbGQgfiAqIHtcbiAgZmxleC1iYXNpczogMzMlO1xufVxuXG4uZGl2R3JpZEJveDpudGgtY2hpbGQoNSk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDAuNSU7XG59XG5cbi5wYWRkaW5nVG9wTG9nb0JveEZvb3RlciB7XG4gIGJvdHRvbTogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOTAlO1xuICBsZWZ0OiA1JTtcbn1cblxuLnZlcnRpY2FsRGl2aXNvciB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggI2I4YjhiODtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/ListingPro/listingList/listingList_LP.ts":
/*!**********************************************************!*\
  !*** ./src/app/ListingPro/listingList/listingList_LP.ts ***!
  \**********************************************************/
/*! exports provided: ListingList_LP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingList_LP", function() { return ListingList_LP; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Constants */ "./src/app/Constants.ts");
/* harmony import */ var _GlobalFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../GlobalFields */ "./src/app/GlobalFields.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_Service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/Service */ "./src/app/services/Service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _services_MyListingService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/MyListingService */ "./src/app/services/MyListingService.ts");
/* harmony import */ var _entities_listingPro_Listing_LP__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../entities/listingPro/Listing_LP */ "./src/app/entities/listingPro/Listing_LP.ts");
/* harmony import */ var _services_ListingProService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/ListingProService */ "./src/app/services/ListingProService.ts");
/* harmony import */ var _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../GlobalFieldsListingPro */ "./src/app/GlobalFieldsListingPro.ts");
/* harmony import */ var _listingPage_listing_page_LP_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../listingPage/listing-page_LP.component */ "./src/app/ListingPro/listingPage/listing-page_LP.component.ts");













let ListingList_LP = class ListingList_LP {
    constructor(service, lpservice, mlservice, modalCtrl, navController, platform, translate, _sanitizer, alertController) {
        this.service = service;
        this.lpservice = lpservice;
        this.mlservice = mlservice;
        this.modalCtrl = modalCtrl;
        this.navController = navController;
        this.platform = platform;
        this.translate = translate;
        this._sanitizer = _sanitizer;
        this.alertController = alertController;
        this.Constants = _Constants__WEBPACK_IMPORTED_MODULE_2__["Constants"];
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"];
        this.GlobalFieldsListingPro = _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_11__["GlobalFieldsListingPro"];
    }
    ngOnInit() {
        if (!this.type) {
            switch (_GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_11__["GlobalFieldsListingPro"].listingTypeDetail.search_template) {
                case 'grid_view':
                    this.type = '3';
                    break;
                case 'grid_view2':
                    this.type = '1';
                    break;
                case 'grid_view3':
                    this.type = '3';
                    break;
                case 'grid_view_v2':
                    this.type = '1';
                    break;
                case 'grid_view_v3':
                    this.type = '3';
                    break;
                case 'list_view':
                    this.type = '2';
                    break;
                case 'list_view_v2':
                    this.type = '2';
                    break;
                case 'lp-list-view-compact':
                    this.type = '2';
                    break;
                default:
                    this.type = '2';
                    break;
            }
        }
    }
    getListingDetails(listing) {
        console.log('getListingDetails');
        this.GlobalFields.loadingSoft = true;
        this.lpservice.getListingDetailsById(listing.ID).subscribe((data) => {
            _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_11__["GlobalFieldsListingPro"].selectedListing = data;
            this.openModalListing();
        }, error => {
            console.log(error);
            let msg = '';
            if (error && error.error)
                msg = error.error.message;
            else if (error)
                msg = error.message;
            this.GlobalFields.openAlert(this.alertController, 'Error', 'Error on web server', msg);
            this.GlobalFields.loadingSoft = false;
        });
    }
    openModalListing() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('openModalListing');
            const listingModal = yield this.modalCtrl.create({
                component: _listingPage_listing_page_LP_component__WEBPACK_IMPORTED_MODULE_12__["ListingPage_LP"],
            });
            return yield listingModal.present();
            //  this.navCtrl.push(ListingPage_LP);
        });
    }
    isWhiteBackgroundBoxShadow() {
        if (_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].isWhiteBackground())
            return '';
        else
            return ' boxShadowList';
    }
    getCardClass() {
        if (this.search)
            return 'listCardNoFixedHeight card card-ios ';
        else
            return 'listCard card card-ios ';
    }
    getImgCachedClass(type) {
        let class_name = 'imgCachedAsBackground ';
        if (type == '1') {
            if (this.search)
                class_name = class_name + 'backImgBiggerCached backgroundListingImgCached shadedImgCachedAirbnb';
            else
                class_name = class_name + 'backImgCached backgroundListingImgCached shadedImgCachedAirbnb';
        }
        if (type == '2' || type == '2b')
            class_name = class_name + 'backImgListCache';
        if (type == '3')
            class_name = class_name + 'backImgSquaredAndLogoCached shadedImgCached';
        const imageAttributes = [];
        imageAttributes.push({
            element: 'class',
            value: class_name
        });
        return imageAttributes;
    }
    getImgCachedClassByClass(classes) {
        let class_name = 'imgCachedAsBackground ' + classes;
        const imageAttributes = [];
        imageAttributes.push({
            element: 'class',
            value: class_name
        });
        return imageAttributes;
    }
    isClaimed() {
        if (this.listing.post_meta && this.listing.post_meta.claimed_section == "claimed")
            return true;
        else
            return false;
    }
    getListingImg(listing) {
        let image = '';
        if (listing.gallery && listing.gallery.cover_image)
            image = listing.gallery.cover_image;
        else
            image = _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].site_details.placeholderImgUrl;
        return image;
    }
    getBackgroundDarker(listing) {
        let image = '';
        if (listing.img_cover)
            image = listing.img_cover;
        if (!listing.img_cover && listing.listing_data && listing.listing_data._job_cover)
            image = listing.listing_data._job_cover;
        else if (!listing.img_cover && listing.listing_data && !listing.listing_data._job_cover)
            image = _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].site_details.placeholderImgUrl;
        return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient(to top, rgba(23, 23, 23, 0.52), rgba(23, 23, 23, 0.52)), url(${image})`);
    }
    getStartsHtml(rating) {
        let num = (parseFloat(rating)) / 2;
        let res = [];
        while (num >= 1) {
            res.push('');
            num = num - 1;
        }
        if (num < 1 && num > 0)
            res.push('-half');
        for (let i = 0; i < 5 - res.length; i++) {
            res.push('-outline');
        }
        return res;
    }
    getTruncatedDecimal(n) {
        return n.toFixed(1);
    }
};
ListingList_LP.popover = undefined;
ListingList_LP.ctorParameters = () => [
    { type: _services_Service__WEBPACK_IMPORTED_MODULE_5__["Service"] },
    { type: _services_ListingProService__WEBPACK_IMPORTED_MODULE_10__["ListingProService"] },
    { type: _services_MyListingService__WEBPACK_IMPORTED_MODULE_8__["MyListingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _entities_listingPro_Listing_LP__WEBPACK_IMPORTED_MODULE_9__["Listing_LP"])
], ListingList_LP.prototype, "listing", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], ListingList_LP.prototype, "search", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], ListingList_LP.prototype, "type", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], ListingList_LP.prototype, "little", void 0);
ListingList_LP = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'listingList_LP',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./listingList_LP.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/listingList/listingList_LP.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./listingList_LP.scss */ "./src/app/ListingPro/listingList/listingList_LP.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_5__["Service"], _services_ListingProService__WEBPACK_IMPORTED_MODULE_10__["ListingProService"], _services_MyListingService__WEBPACK_IMPORTED_MODULE_8__["MyListingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], ListingList_LP);



/***/ }),

/***/ "./src/app/ListingPro/listingPage/listing-page_LP.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/ListingPro/listingPage/listing-page_LP.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".blackOverlayPostImg {\n  width: 100%;\n  position: absolute;\n  top: 0px;\n  background: linear-gradient(to bottom, #ffffff00, rgba(23, 23, 23, 0.27));\n  height: 250px;\n}\n\n.postLogoImg {\n  border-radius: 50px;\n  position: relative;\n  border: solid white 3px;\n  background-position: center !important;\n  background-size: cover !important;\n  background-color: white !important;\n  box-shadow: 0 3px 9px 3px rgba(0, 0, 0, 0.05) !important;\n  width: 100px;\n  height: 100px;\n  margin: auto;\n  margin-top: -50px;\n}\n\n.postLogoImgCentered {\n  border-radius: 50px;\n  background-position: center !important;\n  background-size: cover !important;\n  width: 60px;\n  height: 60px;\n  display: inline-block;\n}\n\n.postLogoImgPlaceholder {\n  width: 100px;\n  height: 100px;\n  margin-top: -50px;\n}\n\n.listingPageType {\n  font-weight: 800 !important;\n  line-height: 16px !important;\n  letter-spacing: normal !important;\n  text-transform: uppercase !important;\n  color: #767676;\n  text-overflow: ellipsis !important;\n  white-space: nowrap !important;\n  margin-bottom: 2px !important;\n  font-size: 11px !important;\n  overflow: hidden !important;\n  font-weight: bold;\n  margin-top: -5px;\n  padding: 5px;\n  text-align: left;\n  width: 100%;\n  padding-right: 5px;\n  margin-top: -20px;\n}\n\n.listingPageTitle {\n  font-weight: 800 !important;\n  font-size: 22px !important;\n  line-height: 23px !important;\n  margin-bottom: -10px;\n  letter-spacing: normal !important;\n  color: #484848 !important;\n  text-overflow: ellipsis !important;\n  display: -webkit-box !important;\n  -webkit-line-clamp: 2 !important;\n  overflow: hidden !important;\n  padding: 10px;\n}\n\n.listingPageTitleWhite {\n  font-weight: 900 !important;\n  font-size: 30px !important;\n  margin-bottom: -10px;\n  letter-spacing: normal !important;\n  text-overflow: ellipsis !important;\n  -webkit-line-clamp: 2 !important;\n  overflow: hidden !important;\n  padding: 0;\n  line-height: 1.2;\n}\n\n.listingPageSubtitle {\n  text-overflow: ellipsis !important;\n  display: -webkit-box !important;\n  -webkit-box-orient: vertical !important;\n  overflow: hidden !important;\n  padding: 10px;\n  font-size: smaller;\n  color: #979797;\n}\n\n.listingPageSubtitleWhite {\n  text-overflow: ellipsis !important;\n  -webkit-box-orient: vertical !important;\n  overflow: hidden !important;\n  padding: 10px;\n  font-weight: bold;\n}\n\n.iconStyle {\n  padding-left: 10px;\n  font-size: large;\n  max-width: 8.33333%;\n}\n\n.labelHeader {\n  margin: 0px !important;\n  word-wrap: break-word !important;\n  position: relative;\n  font-size: 16px !important;\n  font-weight: 600 !important;\n  width: calc(100% - 50px);\n  left: 4px;\n  color: #ffffff;\n}\n\n.labelCustomDetails {\n  margin: 0px !important;\n  word-wrap: break-word !important;\n  font-size: 16px !important;\n  font-weight: 600 !important;\n  color: #ffffff !important;\n  line-height: 35px;\n}\n\n.labelHTML {\n  margin: 0px !important;\n  word-wrap: break-word !important;\n  font-size: 14px !important;\n  font-weight: 600 !important;\n  line-height: 1.4444444444em !important;\n  color: #ffffff !important;\n  text-align: left;\n}\n\n.categoryLabel {\n  padding: 4px;\n  margin: 5px;\n  width: 100% !important;\n  color: #ffffff;\n  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px !important;\n  margin-bottom: 4px !important;\n  text-align: left !important;\n  border-width: 1px !important;\n  border-style: solid !important;\n  border-color: rgba(0, 0, 0, 0.1) !important;\n  -o-border-image: initial !important;\n     border-image: initial !important;\n  border-radius: 3px !important;\n}\n\n.listCategories {\n  list-style-type: none;\n  white-space: nowrap;\n  overflow-x: auto;\n  overflow-y: hidden;\n  line-height: 3;\n}\n\n.descriptionTitle {\n  margin: 0px !important;\n  word-wrap: break-word !important;\n  font-size: 16px !important;\n  font-weight: 800;\n  line-height: 1.4444444444em !important;\n  color: #ffffff !important;\n  padding: 5px;\n  text-transform: uppercase;\n}\n\n.description {\n  margin: 0px !important;\n  font-size: 16px !important;\n  font-weight: 600 !important;\n  line-height: 1.4em !important;\n  color: #ffffff !important;\n  padding: 5px;\n  /* white-space: pre-wrap;*/\n  padding-left: 10px;\n}\n\n.toolbar-background {\n  background: transparent !important;\n  border: none !important;\n}\n\nion-content .scroll-content {\n  margin-top: 0px !important;\n}\n\n.header-ios .toolbar-background-ios {\n  border: none !important;\n  box-shadow: none !important;\n}\n\n.header-md .toolbar-background-md {\n  border: none !important;\n  box-shadow: none !important;\n}\n\n.header-md::after {\n  background-image: none !important;\n}\n\n.backBtn {\n  font-size: 32px !important;\n  font-weight: 600;\n  margin-top: -6px;\n  transition: none 0s ease 0s;\n}\n\n.tableRow {\n  margin: -10px 15px 5px 15px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding-top: 5px;\n  padding-bottom: 2px;\n  font-size: smaller;\n}\n\n.mainDetails {\n  margin: 15px;\n  border-radius: 15px;\n  background-image: linear-gradient(to bottom right, #f3f3f3, #f5f5f5);\n  padding: 5px;\n}\n\n.iconGoodPosition {\n  position: relative;\n  top: 2px;\n  left: 0px;\n}\n\n.faIconGoodPosition {\n  font-size: 17px;\n  margin-right: 5px;\n  margin-left: 5px;\n}\n\n.iconCircleBox {\n  display: inline-block;\n  width: 25px;\n  height: 25px;\n  line-height: 25px;\n  margin-right: 5px;\n  margin-left: 5px;\n  color: #70778b;\n  font-size: 13px;\n  border-radius: 50px;\n  text-align: center;\n  background-color: #f3f3f6;\n  vertical-align: middle;\n  max-width: 8.33333%;\n  margin-bottom: 5px;\n}\n\n.iconImgBoxCatRegions {\n  display: inline-block;\n  width: 26px;\n  height: 26px;\n  line-height: 26px;\n  margin-left: 10px;\n  margin-right: 5px;\n  color: #70778b;\n  font-size: 14px;\n  text-align: center;\n  vertical-align: middle;\n  max-width: 8.33333%;\n  margin-bottom: 5px;\n}\n\n.iconCircleBoxCatRegions {\n  display: inline-block;\n  width: 26px;\n  height: 26px;\n  line-height: 26px;\n  margin-left: 10px;\n  color: #70778b;\n  font-size: 14px;\n  border-radius: 50px;\n  text-align: center;\n  background-color: #f3f3f6;\n  vertical-align: middle;\n  max-width: 8.33333%;\n  margin-bottom: 5px;\n}\n\n.iconCircleBoxCatRegions[dir=rtl] {\n  margin-left: 0px;\n  margin-right: 10px;\n}\n\n.reviewsLabelHeader {\n  text-align: right;\n  width: 100%;\n  padding-right: 5px;\n  font-size: small;\n  margin-top: -45px;\n}\n\n.reviewsLabelHeaderLittle {\n  font-size: small;\n  text-align: right;\n  margin-top: -20px;\n}\n\n.fastBtnPaddingLeft {\n  padding-left: 10px;\n}\n\n.fastBtnPaddingRight {\n  padding-right: 50px;\n}\n\n.fastBtnsContainer {\n  margin: 5px;\n  padding: 2px;\n  padding-left: 7px;\n  padding-right: 7px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border: 1px solid #e7e7ed;\n  border-radius: 2px;\n  text-align: center;\n}\n\n.fastBtnsContainerFull {\n  padding: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n  width: -moz-fit-content;\n  width: -webkit-fit-content;\n  width: fit-content;\n  text-align: center;\n  font-size: 14px;\n  border-radius: 100px;\n  position: relative;\n  right: 0px;\n  height: 30px;\n  margin: 5px;\n  color: black !important;\n  background-color: white !important;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.29);\n}\n\n.fastBtnLabel {\n  color: #70778b;\n  font-size: 10pt;\n}\n\n.fastBtnLabelWhite {\n  color: #4c4c4c;\n  font-size: 10pt;\n}\n\n.fastBtnIcon {\n  position: relative;\n  top: 3px;\n}\n\n.fastBtnIcon[dir=ltr] {\n  right: 5px;\n}\n\n.fastBtnIcon[dir=rtl] {\n  left: 5px;\n}\n\n.topBar {\n  position: fixed;\n  width: 100%;\n  z-index: 99;\n  height: 50px;\n  padding: 5px;\n  padding-top: 10px;\n  background: linear-gradient(to bottom, #00000057, transparent);\n}\n\n.bottomBar {\n  position: fixed;\n  width: 100%;\n  z-index: 99;\n  bottom: 0;\n  height: 50px;\n  padding-top: 10px;\n  background: white;\n  box-shadow: 0 3px 9px 3px rgba(0, 0, 0, 0.05) !important;\n  border-top: 1px solid #EBEBEB !important;\n  padding: 10px 0 !important;\n}\n\nion-conten {\n  --offset-top: 50px;\n}\n\n.sliderWithCSS {\n  overflow-x: auto;\n  height: 250px;\n  width: 100%;\n  list-style-type: none;\n  white-space: nowrap;\n  overflow-x: auto;\n  overflow-y: hidden;\n  line-height: 3;\n}\n\n.postImg {\n  width: 100%;\n  height: 250px;\n  display: inline-block;\n  font-size: 1pt;\n  background-position: center !important;\n  background-size: cover !important;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.41), rgba(255, 255, 255, 0));\n}\n\n.galleryImg {\n  margin: 5px;\n  width: 90%;\n  height: 250px;\n  display: inline-block;\n  font-size: 1pt;\n  background-position: center !important;\n  background-size: cover !important;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.41), rgba(255, 255, 255, 0));\n}\n\n.postImgVertical {\n  width: 100%;\n  height: 450px;\n  background-position: center !important;\n  background-size: cover !important;\n  background: black;\n}\n\n.titleInTheMiddle {\n  z-index: 20;\n  transform: translateY(50%);\n  color: white;\n  text-align: center;\n  width: 100%;\n  display: inline-block;\n}\n\n.speech-bubble {\n  position: relative;\n  background-image: linear-gradient(to bottom right, #4889ff, #00a1ff);\n  border-radius: 0.4em;\n  padding: 15px;\n  color: white;\n}\n\n.speech-bubble:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 25%;\n  width: 0;\n  height: 0;\n  border: 15px solid transparent;\n  border-bottom-color: #438cff;\n  border-top: 0;\n  border-left: 0;\n  margin-left: -7.5px;\n  margin-top: -14px;\n}\n\n.commentBox {\n  white-space: normal;\n  line-height: 1.2;\n  font-size: 10pt;\n}\n\n.commentBoxCard {\n  white-space: normal;\n  line-height: 1;\n  color: #575757;\n  font-size: 9pt;\n}\n\n.cardReview {\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12);\n  margin: 5px;\n  margin-top: 10px;\n  padding: 10px;\n  border-radius: 10px;\n  background-color: whitesmoke;\n}\n\n.btnRatings {\n  margin-top: -10px;\n  margin-left: -10px;\n  color: #4a4a4a;\n  margin-right: -10px;\n}\n\n.imgComments {\n  height: 50px;\n  margin: 5px;\n}\n\n.addReview {\n  text-align: center;\n  font-size: 14px;\n  border-radius: 100px;\n  position: relative;\n  right: 0px;\n  height: 30px;\n  min-width: 50%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n  line-height: 1px;\n  color: black;\n  background-color: white;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);\n}\n\n.fullHearth {\n  color: #FF5722;\n}\n\n.leadContainer {\n  border: solid 1px #e0dfe2;\n  padding: 10px;\n  padding-bottom: 20px;\n  border-radius: 5px;\n  padding: 10px;\n  padding-bottom: 20px;\n  border-radius: 5px;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12);\n}\n\n/* Style the buttons that are used to open and close the accordion panel */\n\n.accordion {\n  background-color: whitesmoke;\n  color: #444;\n  cursor: pointer;\n  padding: 18px;\n  width: 100%;\n  text-align: left;\n  border: none;\n  outline: none;\n  transition: 0.4s;\n}\n\n/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */\n\n.active, .accordion:hover {\n  background-color: white;\n}\n\n/* Style the accordion panel. Note: hidden by default */\n\n.panel {\n  padding: 18px;\n  background-color: white;\n  display: none;\n  overflow: hidden;\n}\n\n.accordionContainer {\n  border: solid 1px #e0dfe2;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12);\n  margin: 10px 5px;\n  width: 100%;\n}\n\n.accordionOpen {\n  display: block !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTGlzdGluZ1Byby9saXN0aW5nUGFnZS9DOlxcam9rZXNvbmpvZWxcXGpva2Vzb25qb2VsL3NyY1xcYXBwXFxMaXN0aW5nUHJvXFxsaXN0aW5nUGFnZVxcbGlzdGluZy1wYWdlX0xQLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9MaXN0aW5nUHJvL2xpc3RpbmdQYWdlL2xpc3RpbmctcGFnZV9MUC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSx5RUFBQTtFQUNBLGFBQUE7QUNGRjs7QURLQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0VBSUEsaUNBQUE7RUFDQSxrQ0FBQTtFQUNBLHdEQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNIRjs7QURNQTtFQUNFLG1CQUFBO0VBQ0Esc0NBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNIRjs7QURNQTtFQUVFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNKRjs7QURPQTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNKRjs7QURPQTtFQUNFLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtBQ0pGOztBRE1BO0VBQ0UsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNIRjs7QURNQTtFQUNFLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSx1Q0FBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0hGOztBRE1BO0VBQ0Usa0NBQUE7RUFDQSx1Q0FBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURNQTtFQUNFLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FDSEY7O0FETUE7RUFDRSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNIRjs7QURNQTtFQUNFLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDSEY7O0FETUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLDBEQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1DQUFBO0tBQUEsZ0NBQUE7RUFDQSw2QkFBQTtBQ0hGOztBRE1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDSEY7O0FETUE7RUFDRSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLHNDQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNIRjs7QURNQTtFQUNFLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0QsMEJBQUE7RUFDQyxrQkFBQTtBQ0hGOztBRE1BO0VBQ0Usa0NBQUE7RUFDQSx1QkFBQTtBQ0hGOztBRE1BO0VBQ0UsMEJBQUE7QUNIRjs7QURNQTtFQUNFLHVCQUFBO0VBQ0EsMkJBQUE7QUNIRjs7QURLQTtFQUNFLHVCQUFBO0VBQ0EsMkJBQUE7QUNGRjs7QURLQTtFQUNFLGlDQUFBO0FDRkY7O0FETUE7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFFQSwyQkFBQTtBQ0hGOztBRE9BO0VBQ0UsMkJBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRFFBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0VBQUE7RUFDQSxZQUFBO0FDTEY7O0FEUUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDTEY7O0FEUUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0xGOztBRFFBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDTEY7O0FEUUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0xGOztBRFFBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0xGOztBRFFBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0xGOztBRFFBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDTEY7O0FET0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNKRjs7QURRQTtFQUNFLGtCQUFBO0FDTEY7O0FEUUE7RUFDRSxtQkFBQTtBQ0xGOztBRFFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDTEY7O0FEUUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7QUNMRjs7QURRQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDTEY7O0FEUUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0xGOztBRFFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FDTEY7O0FEUUE7RUFDRSxVQUFBO0FDTEY7O0FET0E7RUFDRSxTQUFBO0FDSkY7O0FET0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsOERBQUE7QUNKRjs7QURPQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHdEQUFBO0VBQ0Esd0NBQUE7RUFDQSwwQkFBQTtBQ0pGOztBRE9BO0VBQ0Usa0JBQUE7QUNKRjs7QURPQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0NBQUE7RUFJQSxpQ0FBQTtFQUNBLDhFQUFBO0FDSkY7O0FET0E7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxzQ0FBQTtFQUlBLGlDQUFBO0VBQ0EsOEVBQUE7QUNKRjs7QURRQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0NBQUE7RUFJQSxpQ0FBQTtFQUNBLGlCQUFBO0FDTEY7O0FEUUE7RUFDRSxXQUFBO0VBRUEsMEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNMRjs7QURRQTtFQUNFLGtCQUFBO0VBQ0Esb0VBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDTEY7O0FEUUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0xGOztBRFFBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNMRjs7QURRQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDTEY7O0FEUUE7RUFFRSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FDTEY7O0FEUUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDTEY7O0FEUUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0xGOztBRFFBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHlDQUFBO0FDTEY7O0FEUUE7RUFDRSxjQUFBO0FDTEY7O0FEUUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7QUNMRjs7QURRQSwwRUFBQTs7QUFDQTtFQUNFLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0xGOztBRFFBLDBJQUFBOztBQUNBO0VBQ0UsdUJBQUE7QUNMRjs7QURRQSx1REFBQTs7QUFDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0xGOztBRFFBO0VBQ0UseUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0xGOztBRFFBO0VBQ0UseUJBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL0xpc3RpbmdQcm8vbGlzdGluZ1BhZ2UvbGlzdGluZy1wYWdlX0xQLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuLmJsYWNrT3ZlcmxheVBvc3RJbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZmZmZmMDAsIHJnYmEoMjMsIDIzLCAyMywgMC4yNykpO1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbn1cclxuXHJcbi5wb3N0TG9nb0ltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAzcHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDlweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1KSAhaW1wb3J0YW50O1xyXG5cclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbn1cclxuXHJcbi5wb3N0TG9nb0ltZ0NlbnRlcmVkIHtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ucG9zdExvZ29JbWdQbGFjZWhvbGRlciB7XHJcblxyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIG1hcmdpbi10b3A6IC01MHB4O1xyXG59XHJcblxyXG4ubGlzdGluZ1BhZ2VUeXBlIHtcclxuICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHggIWltcG9ydGFudDtcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjNzY3Njc2O1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDJweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICBtYXJnaW4tdG9wOiAtMjBweDtcclxufVxyXG5cclxuLmxpc3RpbmdQYWdlVGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDAgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDIycHggIWltcG9ydGFudDtcclxuICBsaW5lLWhlaWdodDogMjNweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWwgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzQ4NDg0OCAhaW1wb3J0YW50O1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3ggIWltcG9ydGFudDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDIgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4ubGlzdGluZ1BhZ2VUaXRsZVdoaXRlIHtcclxuICBmb250LXdlaWdodDogOTAwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG5cclxuLmxpc3RpbmdQYWdlU3VidGl0bGUge1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3ggIWltcG9ydGFudDtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gIGNvbG9yOiAjOTc5Nzk3XHJcbn1cclxuXHJcbi5saXN0aW5nUGFnZVN1YnRpdGxlV2hpdGUge1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbCAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaWNvblN0eWxlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBtYXgtd2lkdGg6IDguMzMzMzMlO1xyXG59XHJcblxyXG4ubGFiZWxIZWFkZXIge1xyXG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XHJcbiAgbGVmdDogNHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ubGFiZWxDdXN0b21EZXRhaWxzIHtcclxuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG59XHJcblxyXG4ubGFiZWxIVE1MIHtcclxuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICBsaW5lLWhlaWdodDogMS40NDQ0NDQ0NDQ0NDQ0NDQ0ZW0gIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5jYXRlZ29yeUxhYmVsIHtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggNHB4IDBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDRweCAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICBib3JkZXItd2lkdGg6IDFweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1pbWFnZTogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGlzdENhdGVnb3JpZXMge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIGxpbmUtaGVpZ2h0OiAzO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb25UaXRsZSB7XHJcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQ0NDQ0NDQ0NDQ0NDQ0NDRlbSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNGVtICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAvKiB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7Ki9cclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi50b29sYmFyLWJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IC5zY3JvbGwtY29udGVudCB7XHJcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcclxufVxyXG4uaGVhZGVyLW1kIC50b29sYmFyLWJhY2tncm91bmQtbWQge1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmUhaW1wb3J0YW50O1xyXG5cclxufVxyXG4uaGVhZGVyLW1kOjphZnRlcntcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uYmFja0J0biB7XHJcbiAgZm9udC1zaXplOiAzMnB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tdG9wOiAtNnB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZSAwcyBlYXNlIDBzO1xyXG4gIHRyYW5zaXRpb246IG5vbmUgMHMgZWFzZSAwcztcclxufVxyXG5cclxuXHJcbi50YWJsZVJvdyB7XHJcbiAgbWFyZ2luOiAtMTBweCAxNXB4IDVweCAxNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuXHJcbi5tYWluRGV0YWlscyB7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgI2YzZjNmMyAsICNmNWY1ZjUpO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmljb25Hb29kUG9zaXRpb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDJweDtcclxuICBsZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5mYUljb25Hb29kUG9zaXRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4uaWNvbkNpcmNsZUJveHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgY29sb3I6ICM3MDc3OGI7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjY7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBtYXgtd2lkdGg6IDguMzMzMzMlO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmljb25JbWdCb3hDYXRSZWdpb25ze1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMjZweDtcclxuICBoZWlnaHQ6IDI2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgY29sb3I6ICM3MDc3OGI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1heC13aWR0aDogOC4zMzMzMyU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uaWNvbkNpcmNsZUJveENhdFJlZ2lvbnN7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAyNnB4O1xyXG4gIGhlaWdodDogMjZweDtcclxuICBsaW5lLWhlaWdodDogMjZweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBjb2xvcjogIzcwNzc4YjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmNjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1heC13aWR0aDogOC4zMzMzMyU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uaWNvbkNpcmNsZUJveENhdFJlZ2lvbnNbZGlyPVwicnRsXCJde1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ucmV2aWV3c0xhYmVsSGVhZGVyIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBtYXJnaW4tdG9wOiAtNDVweDtcclxufVxyXG4ucmV2aWV3c0xhYmVsSGVhZGVyTGl0dGxlIHtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG5cclxufVxyXG5cclxuLmZhc3RCdG5QYWRkaW5nTGVmdHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5mYXN0QnRuUGFkZGluZ1JpZ2h0e1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiB9XHJcblxyXG4uZmFzdEJ0bnNDb250YWluZXJ7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIHBhZGRpbmctbGVmdDogN3B4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDdweDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U3ZTdlZDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZmFzdEJ0bnNDb250YWluZXJGdWxse1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcclxuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yOSk7XHJcbn1cclxuXHJcbi5mYXN0QnRuTGFiZWx7XHJcbiAgY29sb3I6ICM3MDc3OGI7XHJcbiAgZm9udC1zaXplOiAxMHB0O1xyXG59XHJcblxyXG4uZmFzdEJ0bkxhYmVsV2hpdGV7XHJcbiAgY29sb3I6ICM0YzRjNGM7XHJcbiAgZm9udC1zaXplOiAxMHB0O1xyXG59XHJcblxyXG4uZmFzdEJ0bkljb257XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogM3B4O1xyXG59XHJcblxyXG4uZmFzdEJ0bkljb25bZGlyPVwibHRyXCJde1xyXG4gIHJpZ2h0OiA1cHg7XHJcbn1cclxuLmZhc3RCdG5JY29uW2Rpcj1cInJ0bFwiXXtcclxuICBsZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi50b3BCYXJ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCB0byBib3R0b20sICMwMDAwMDA1NywgdHJhbnNwYXJlbnQgKTtcclxufVxyXG5cclxuLmJvdHRvbUJhcntcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogOTk7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDNweCA5cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNSkgIWltcG9ydGFudDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI0VCRUJFQiAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDEwcHggMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tY29udGVue1xyXG4gIC0tb2Zmc2V0LXRvcDogNTBweDtcclxufVxyXG5cclxuLnNsaWRlcldpdGhDU1N7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIGxpbmUtaGVpZ2h0OiAzO1xyXG59XHJcblxyXG4ucG9zdEltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxcHQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAwLjQxKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7XHJcbn1cclxuXHJcbi5nYWxsZXJ5SW1nIHtcclxuICBtYXJnaW46NXB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxcHQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAwLjQxKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7XHJcbn1cclxuXHJcblxyXG4ucG9zdEltZ1ZlcnRpY2FsIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbn1cclxuXHJcbi50aXRsZUluVGhlTWlkZGxle1xyXG4gIHotaW5kZXg6IDIwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5zcGVlY2gtYnViYmxlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzQ4ODlmZiwgIzAwYTFmZik7XHJcbiAgYm9yZGVyLXJhZGl1czogLjRlbTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNwZWVjaC1idWJibGU6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMjUlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBib3JkZXI6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzQzOGNmZjtcclxuICBib3JkZXItdG9wOiAwO1xyXG4gIGJvcmRlci1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAtNy41cHg7XHJcbiAgbWFyZ2luLXRvcDogLTE0cHg7XHJcbn1cclxuXHJcbi5jb21tZW50Qm94e1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBmb250LXNpemU6IDEwcHQ7XHJcbn1cclxuXHJcbi5jb21tZW50Qm94Q2FyZHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGNvbG9yOiAjNTc1NzU3O1xyXG4gIGZvbnQtc2l6ZTogOXB0O1xyXG59XHJcblxyXG4uY2FyZFJldmlld3tcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi5idG5SYXRpbmdze1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICBjb2xvcjogIzRhNGE0YTtcclxuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xyXG59XHJcblxyXG4uaW1nQ29tbWVudHN7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uYWRkUmV2aWV3e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIG1pbi13aWR0aDogNTAlO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbGluZS1oZWlnaHQ6IDFweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbi5mdWxsSGVhcnRoe1xyXG4gIGNvbG9yOiAjRkY1NzIyXHJcbn1cclxuXHJcbi5sZWFkQ29udGFpbmVye1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICNlMGRmZTI7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDZweCByZ2IoMCAwIDAgLyAxMiUpO1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgYnV0dG9ucyB0aGF0IGFyZSB1c2VkIHRvIG9wZW4gYW5kIGNsb3NlIHRoZSBhY2NvcmRpb24gcGFuZWwgKi9cclxuLmFjY29yZGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICBjb2xvcjogIzQ0NDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMThweDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIGJ1dHRvbiBpZiBpdCBpcyBjbGlja2VkIG9uIChhZGQgdGhlIC5hY3RpdmUgY2xhc3Mgd2l0aCBKUyksIGFuZCB3aGVuIHlvdSBtb3ZlIHRoZSBtb3VzZSBvdmVyIGl0IChob3ZlcikgKi9cclxuLmFjdGl2ZSwgLmFjY29yZGlvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIFN0eWxlIHRoZSBhY2NvcmRpb24gcGFuZWwuIE5vdGU6IGhpZGRlbiBieSBkZWZhdWx0ICovXHJcbi5wYW5lbCB7XHJcbiAgcGFkZGluZzogMThweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5hY2NvcmRpb25Db250YWluZXJ7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2UwZGZlMjtcclxuICBib3gtc2hhZG93OiAwIDFweCA2cHggcmdiKDAgMCAwIC8gMTIlKTtcclxuICBtYXJnaW46IDEwcHggNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYWNjb3JkaW9uT3BlbntcclxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5ibGFja092ZXJsYXlQb3N0SW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmZmZmYwMCwgcmdiYSgyMywgMjMsIDIzLCAwLjI3KSk7XG4gIGhlaWdodDogMjUwcHg7XG59XG5cbi5wb3N0TG9nb0ltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAzcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDNweCA5cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNSkgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IC01MHB4O1xufVxuXG4ucG9zdExvZ29JbWdDZW50ZXJlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnBvc3RMb2dvSW1nUGxhY2Vob2xkZXIge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbi10b3A6IC01MHB4O1xufVxuXG4ubGlzdGluZ1BhZ2VUeXBlIHtcbiAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTZweCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbiAgY29sb3I6ICM3Njc2NzY7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuXG4ubGlzdGluZ1BhZ2VUaXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA4MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMnB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNDg0ODQ4ICFpbXBvcnRhbnQ7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMiAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5saXN0aW5nUGFnZVRpdGxlV2hpdGUge1xuICBmb250LXdlaWdodDogOTAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDIgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuXG4ubGlzdGluZ1BhZ2VTdWJ0aXRsZSB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWwgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IHNtYWxsZXI7XG4gIGNvbG9yOiAjOTc5Nzk3O1xufVxuXG4ubGlzdGluZ1BhZ2VTdWJ0aXRsZVdoaXRlIHtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaWNvblN0eWxlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IGxhcmdlO1xuICBtYXgtd2lkdGg6IDguMzMzMzMlO1xufVxuXG4ubGFiZWxIZWFkZXIge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICB3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XG4gIGxlZnQ6IDRweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5sYWJlbEN1c3RvbURldGFpbHMge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG59XG5cbi5sYWJlbEhUTUwge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDEuNDQ0NDQ0NDQ0NGVtICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jYXRlZ29yeUxhYmVsIHtcbiAgcGFkZGluZzogNHB4O1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCA0cHggMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDRweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci13aWR0aDogMXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1zdHlsZTogc29saWQgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbiAgYm9yZGVyLWltYWdlOiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xufVxuXG4ubGlzdENhdGVnb3JpZXMge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgbGluZS1oZWlnaHQ6IDM7XG59XG5cbi5kZXNjcmlwdGlvblRpdGxlIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogODAwO1xuICBsaW5lLWhlaWdodDogMS40NDQ0NDQ0NDQ0ZW0gIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMS40ZW0gIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgcGFkZGluZzogNXB4O1xuICAvKiB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7Ki9cbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4udG9vbGJhci1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IC5zY3JvbGwtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWlvcyAudG9vbGJhci1iYWNrZ3JvdW5kLWlvcyB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItbWQgLnRvb2xiYXItYmFja2dyb3VuZC1tZCB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItbWQ6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYmFja0J0biB7XG4gIGZvbnQtc2l6ZTogMzJweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiAtNnB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmUgMHMgZWFzZSAwcztcbiAgdHJhbnNpdGlvbjogbm9uZSAwcyBlYXNlIDBzO1xufVxuXG4udGFibGVSb3cge1xuICBtYXJnaW46IC0xMHB4IDE1cHggNXB4IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbn1cblxuLm1haW5EZXRhaWxzIHtcbiAgbWFyZ2luOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjZjNmM2YzLCAjZjVmNWY1KTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uaWNvbkdvb2RQb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAycHg7XG4gIGxlZnQ6IDBweDtcbn1cblxuLmZhSWNvbkdvb2RQb3NpdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5pY29uQ2lyY2xlQm94IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGNvbG9yOiAjNzA3NzhiO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmNjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWF4LXdpZHRoOiA4LjMzMzMzJTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uaWNvbkltZ0JveENhdFJlZ2lvbnMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGNvbG9yOiAjNzA3NzhiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWF4LXdpZHRoOiA4LjMzMzMzJTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uaWNvbkNpcmNsZUJveENhdFJlZ2lvbnMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY29sb3I6ICM3MDc3OGI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2Y2O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXgtd2lkdGg6IDguMzMzMzMlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5pY29uQ2lyY2xlQm94Q2F0UmVnaW9uc1tkaXI9cnRsXSB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnJldmlld3NMYWJlbEhlYWRlciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBmb250LXNpemU6IHNtYWxsO1xuICBtYXJnaW4tdG9wOiAtNDVweDtcbn1cblxuLnJldmlld3NMYWJlbEhlYWRlckxpdHRsZSB7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cblxuLmZhc3RCdG5QYWRkaW5nTGVmdCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmZhc3RCdG5QYWRkaW5nUmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xufVxuXG4uZmFzdEJ0bnNDb250YWluZXIge1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgcGFkZGluZy1yaWdodDogN3B4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlN2U3ZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZmFzdEJ0bnNDb250YWluZXJGdWxsIHtcbiAgcGFkZGluZzogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDVweDtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI5KTtcbn1cblxuLmZhc3RCdG5MYWJlbCB7XG4gIGNvbG9yOiAjNzA3NzhiO1xuICBmb250LXNpemU6IDEwcHQ7XG59XG5cbi5mYXN0QnRuTGFiZWxXaGl0ZSB7XG4gIGNvbG9yOiAjNGM0YzRjO1xuICBmb250LXNpemU6IDEwcHQ7XG59XG5cbi5mYXN0QnRuSWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzcHg7XG59XG5cbi5mYXN0QnRuSWNvbltkaXI9bHRyXSB7XG4gIHJpZ2h0OiA1cHg7XG59XG5cbi5mYXN0QnRuSWNvbltkaXI9cnRsXSB7XG4gIGxlZnQ6IDVweDtcbn1cblxuLnRvcEJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwMDAwMDA1NywgdHJhbnNwYXJlbnQpO1xufVxuXG4uYm90dG9tQmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTk7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDlweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1KSAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0VCRUJFQiAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbiB7XG4gIC0tb2Zmc2V0LXRvcDogNTBweDtcbn1cblxuLnNsaWRlcldpdGhDU1Mge1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIGxpbmUtaGVpZ2h0OiAzO1xufVxuXG4ucG9zdEltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMXB0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwgMCwgMCwgMC40MSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xufVxuXG4uZ2FsbGVyeUltZyB7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDI1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMXB0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwgMCwgMCwgMC40MSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xufVxuXG4ucG9zdEltZ1ZlcnRpY2FsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuLnRpdGxlSW5UaGVNaWRkbGUge1xuICB6LWluZGV4OiAyMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc3BlZWNoLWJ1YmJsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzQ4ODlmZiwgIzAwYTFmZik7XG4gIGJvcmRlci1yYWRpdXM6IDAuNGVtO1xuICBwYWRkaW5nOiAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zcGVlY2gtYnViYmxlOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDI1JTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjNDM4Y2ZmO1xuICBib3JkZXItdG9wOiAwO1xuICBib3JkZXItbGVmdDogMDtcbiAgbWFyZ2luLWxlZnQ6IC03LjVweDtcbiAgbWFyZ2luLXRvcDogLTE0cHg7XG59XG5cbi5jb21tZW50Qm94IHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZm9udC1zaXplOiAxMHB0O1xufVxuXG4uY29tbWVudEJveENhcmQge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMTtcbiAgY29sb3I6ICM1NzU3NTc7XG4gIGZvbnQtc2l6ZTogOXB0O1xufVxuXG4uY2FyZFJldmlldyB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBtYXJnaW46IDVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLmJ0blJhdGluZ3Mge1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBjb2xvcjogIzRhNGE0YTtcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbn1cblxuLmltZ0NvbW1lbnRzIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDVweDtcbn1cblxuLmFkZFJldmlldyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1pbi13aWR0aDogNTAlO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbjogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDFweDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5mdWxsSGVhcnRoIHtcbiAgY29sb3I6ICNGRjU3MjI7XG59XG5cbi5sZWFkQ29udGFpbmVyIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2UwZGZlMjtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgYm94LXNoYWRvdzogMCAxcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi8qIFN0eWxlIHRoZSBidXR0b25zIHRoYXQgYXJlIHVzZWQgdG8gb3BlbiBhbmQgY2xvc2UgdGhlIGFjY29yZGlvbiBwYW5lbCAqL1xuLmFjY29yZGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIGNvbG9yOiAjNDQ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi8qIEFkZCBhIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIGJ1dHRvbiBpZiBpdCBpcyBjbGlja2VkIG9uIChhZGQgdGhlIC5hY3RpdmUgY2xhc3Mgd2l0aCBKUyksIGFuZCB3aGVuIHlvdSBtb3ZlIHRoZSBtb3VzZSBvdmVyIGl0IChob3ZlcikgKi9cbi5hY3RpdmUsIC5hY2NvcmRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLyogU3R5bGUgdGhlIGFjY29yZGlvbiBwYW5lbC4gTm90ZTogaGlkZGVuIGJ5IGRlZmF1bHQgKi9cbi5wYW5lbCB7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYWNjb3JkaW9uQ29udGFpbmVyIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2UwZGZlMjtcbiAgYm94LXNoYWRvdzogMCAxcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIG1hcmdpbjogMTBweCA1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWNjb3JkaW9uT3BlbiB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/ListingPro/listingPage/listing-page_LP.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ListingPro/listingPage/listing-page_LP.component.ts ***!
  \*********************************************************************/
/*! exports provided: ListingPage_LP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingPage_LP", function() { return ListingPage_LP; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _GlobalFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../GlobalFields */ "./src/app/GlobalFields.ts");
/* harmony import */ var _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../GlobalFieldsMyListing */ "./src/app/GlobalFieldsMyListing.ts");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Constants */ "./src/app/Constants.ts");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/launch-navigator/ngx */ "./node_modules/@ionic-native/launch-navigator/ngx/index.js");
/* harmony import */ var _services_Service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/Service */ "./src/app/services/Service.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_MyListingService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/MyListingService */ "./src/app/services/MyListingService.ts");
/* harmony import */ var _MyListing_listingPage_popoverRatings_popoverRatings__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../MyListing/listingPage/popoverRatings/popoverRatings */ "./src/app/MyListing/listingPage/popoverRatings/popoverRatings.ts");
/* harmony import */ var _Shared_popoverImg_popoverImg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../Shared/popoverImg/popoverImg */ "./src/app/Shared/popoverImg/popoverImg.ts");
/* harmony import */ var _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../GlobalFieldsListingPro */ "./src/app/GlobalFieldsListingPro.ts");
/* harmony import */ var _services_ListingProService__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../services/ListingProService */ "./src/app/services/ListingProService.ts");
/* harmony import */ var _modalWriteReview_modalWriteReview_LP__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modalWriteReview/modalWriteReview_LP */ "./src/app/ListingPro/listingPage/modalWriteReview/modalWriteReview_LP.ts");






















let ListingPage_LP = class ListingPage_LP {
    constructor(service, mlservice, modalCtrl, statusBar, callNumber, platform, launchNavigator, socialSharing, translate, popoverController, _sanitizer, navController, inAppBrowser, lpservice) {
        this.service = service;
        this.mlservice = mlservice;
        this.modalCtrl = modalCtrl;
        this.statusBar = statusBar;
        this.callNumber = callNumber;
        this.platform = platform;
        this.launchNavigator = launchNavigator;
        this.socialSharing = socialSharing;
        this.translate = translate;
        this.popoverController = popoverController;
        this._sanitizer = _sanitizer;
        this.navController = navController;
        this.inAppBrowser = inAppBrowser;
        this.lpservice = lpservice;
        this.custFields = [];
        this.custRelatedListings = [];
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"];
        this.GlobalFieldsMyListing = _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_4__["GlobalFieldsMyListing"];
        this.GlobalFieldsListingPro = _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"];
        this.Constants = _Constants__WEBPACK_IMPORTED_MODULE_5__["Constants"];
        this.iniFinished = false;
        this.daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        this.daysOfTheWeekLabel = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        this.lead = {};
        this.slideOpts = {
            slidesPerView: 1
        };
        this.selectedAccoIndex = 0;
        this.ini();
    }
    ini() {
        console.log(_GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].selectedListing);
        // this.getCategories();
        this.getCustomFields();
        // this.getCustomTaxonomies();
        //  this.existCustomFieldToBeShown = this.ifExistCustomFieldTaxToBeShown();
        this.iniFinished = true;
        this.GlobalFields.loadingSoft = false;
        this.lpservice.getRelatedListings().subscribe((data) => {
            if (data)
                this.related_ads_listing = data.ads_listings;
            this.related_recent_listing = data.recent_listings;
        });
        //this.mlservice.storeRecentViewedListing(GlobalFieldsMyListing.selectedListing);
        this.translate.get('DAY_MON').subscribe(msg1 => {
            this.translate.get('DAY_TUE').subscribe(msg2 => {
                this.translate.get('DAY_WED').subscribe(msg3 => {
                    this.translate.get('DAY_THU').subscribe(msg4 => {
                        this.translate.get('DAY_FRI').subscribe(msg5 => {
                            this.translate.get('DAY_SAT').subscribe(msg6 => {
                                this.translate.get('DAY_SUN').subscribe(msg7 => {
                                    this.daysOfTheWeekLabel = [msg1, msg2, msg3, msg4, msg5, msg6, msg7];
                                });
                            });
                        });
                    });
                });
            });
        });
    }
    getCustomFields() {
        if (_GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].selectedListing.post_meta) {
            let price_value = '';
            if (_GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].selectedListing.post_meta.price_status) {
                switch (_GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].selectedListing.post_meta.price_status) {
                    case 'inexpensive':
                        price_value += _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].listingTypeDetail.listing_pricerange_symbol;
                        break;
                    case 'moderate':
                        price_value += _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].listingTypeDetail.listing_pricerange_symbol;
                        price_value += _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].listingTypeDetail.listing_pricerange_symbol;
                        break;
                    case 'pricey':
                        price_value += _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].listingTypeDetail.listing_pricerange_symbol;
                        price_value += _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].listingTypeDetail.listing_pricerange_symbol;
                        price_value += _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].listingTypeDetail.listing_pricerange_symbol;
                        break;
                    case 'ultra_high_end':
                        price_value += _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].listingTypeDetail.listing_pricerange_symbol;
                        price_value += _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].listingTypeDetail.listing_pricerange_symbol;
                        price_value += _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].listingTypeDetail.listing_pricerange_symbol;
                        price_value += _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].listingTypeDetail.listing_pricerange_symbol;
                        break;
                }
            }
            if (_GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].selectedListing.post_meta.list_price)
                price_value += ' ' + _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].selectedListing.post_meta.list_price;
            if (price_value)
                this.custFields.push({ key: 'price', value: price_value, label: 'Price' });
        }
        if (this.GlobalFieldsListingPro.listingTypeDetail.custom_fields && _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].selectedListing.post_custom_fields) {
            this.GlobalFieldsListingPro.listingTypeDetail.custom_fields.forEach(field => {
                if (_GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].selectedListing.post_custom_fields[field.post_name])
                    this.custFields.push({
                        key: field.post_name,
                        value: _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].selectedListing.post_custom_fields[field.post_name],
                        label: field.post_title
                    });
            });
        }
        console.log(this.custFields);
    }
    translateToArray() {
        if (_GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_4__["GlobalFieldsMyListing"].selectedListing.job_gallery) {
            let i = 1;
            let res = [];
            while (_GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_4__["GlobalFieldsMyListing"].selectedListing.job_gallery[i + '']) {
                res.push(_GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_4__["GlobalFieldsMyListing"].selectedListing.job_gallery[i + '']);
                i = i + 1;
            }
            _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_4__["GlobalFieldsMyListing"].selectedListing.job_gallery = res;
            return;
        }
    }
    closeModal() {
        _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_4__["GlobalFieldsMyListing"].selectedListing = undefined;
        //this.navCtrl.pop();
        this.modalCtrl.dismiss({});
    }
    getCustomField(key) {
        let res = _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_4__["GlobalFieldsMyListing"].selectedListing['_' + key];
        if (!res)
            res = _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_4__["GlobalFieldsMyListing"].selectedListing[key];
        return res;
    }
    fieldToBeShown(key) {
        /*
        let field = GlobalFieldsMyListing.selectedTypeDetail.case27_listing_type_fields[key];
        if (field && field.show_in_detail_view)
          return true;
        else
          false;*/
        return true;
    }
    isPresentCustomField(key) {
        let a = _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_4__["GlobalFieldsMyListing"].selectedListing[key];
        let b = _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_4__["GlobalFieldsMyListing"].selectedTypeDetail.case27_listing_type_fields[key.substr(1)];
        if (a != undefined && b != undefined)
            return true;
        else
            return false;
    }
    /*
      openModalGallery(index: number) {
        let photos = [];
        for (let media of {.listing_data._job_gallery) {
          photos.push({url: media});
        }
        let modal = this.modalCtrl.create(GalleryModal, {
          photos: photos,
          initialSlide: index
        });
        modal.present();
      }
    */
    openModalGallery(index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /* let photos = [];
             for (let media of this.listing.listing_data._job_gallery) {
                 photos.push({url: media});
             }
             const modal = await this.modalCtrl.create({
                     component: GalleryModal,
                     componentProps: {
                         photos: photos,
                         initialSlide: index
                     }
                 });
             return await modal.present();
             */
        });
    }
    getNiceString(s) {
        let field = _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_4__["GlobalFieldsMyListing"].selectedTypeDetail.case27_listing_type_fields[s];
        if (field)
            return field.label;
        else
            return '';
    }
    getCustomFieldFromListingType(s) {
        let field = _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_4__["GlobalFieldsMyListing"].selectedTypeDetail.case27_listing_type_fields[s];
        return field;
    }
    generateArray(obj) {
        return Object.keys(obj).map((key) => {
            return { key: key, value: obj[key] };
        });
    }
    getStringFromArray(arr) {
        if (arr && Array.isArray(arr))
            return arr.join();
    }
    isHTML(str) {
        if (str && !Array.isArray(str)) {
            let a = document.createElement('div');
            a.innerHTML = str;
            for (let c = a.childNodes, i = c.length; i--;) {
                if (c[i].nodeType == 1)
                    return true;
            }
        }
        return false;
    }
    isURL(str) {
        if (str && !Array.isArray(str)) {
            let pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
                '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
                '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
                '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
            return !!pattern.test(str);
        }
        return false;
    }
    isArray(str) {
        if (str && Array.isArray(str)) {
            return true;
        }
        return false;
    }
    isShortCode(str) {
        if (str && typeof str === 'string')
            return (str.includes('[') && str.includes(']'));
        else
            true;
    }
    getWorkingHours(day) {
        let res = '';
        if (day && day.open)
            day.entry_hours.forEach((d, i) => {
                res = res + d.from + ' - ' + d.to;
                if (i < day.entry_hours.length - 1)
                    res = res + '<br>';
            });
        if (res != '')
            return res;
        else
            return '-';
    }
    getStartsHtml(rating) {
        let num = rating;
        let res = [];
        let maxNumberStarts = 5;
        for (let i = 0; i < maxNumberStarts; i++) {
            if (num >= 1) {
                res.push('');
                num = num - 1;
            }
            else if (num > 0) {
                res.push('-half');
                num = 0;
            }
            else {
                res.push('-outline');
            }
        }
        return res;
    }
    getNumberFromString(s) {
        return parseInt(s);
    }
    getCategories() {
        let res = [];
        if (_GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_4__["GlobalFieldsMyListing"].selectedListing.job_listing_category) {
            _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_4__["GlobalFieldsMyListing"].selectedListing.job_listing_category.forEach(id => {
                let p = _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_4__["GlobalFieldsMyListing"].getCategoryId(id);
                _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_4__["GlobalFieldsMyListing"].listingCategories.forEach(cat => {
                    if (cat.id == id) {
                        res.push(cat);
                    }
                });
            });
        }
        _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_4__["GlobalFieldsMyListing"].selectedListing.job_listing_category = res;
    }
    getLinkIcon(net) {
        switch (net) {
            case 'Facebook':
            case 'facebook':
            case 'fb': {
                return 'fab fa-facebook';
            }
            case 'Instagram':
            case 'instagram':
            case 'insta': {
                return 'fab fa-instagram';
            }
            case 'Website':
            case 'website':
            case 'web': {
                return 'fas fa-globe';
            }
            case 'Twitter':
            case 'twitter': {
                return 'fab fa-twitter';
            }
            case 'LinkedIn':
            case 'linkedin': {
                return 'fab fa-linkedin';
            }
            case 'Pinterest':
            case 'pinterest': {
                return 'fab fa-pinterest';
            }
            case 'YouTube':
            case 'youtube': {
                return 'fab fa-youtube';
            }
            case 'Google+':
            case 'google': {
                return 'fab fa-google';
            }
            case 'Reddit':
            case 'reddit': {
                return 'fab fa-reddit';
            }
            case 'Snapchat':
            case 'snapchat': {
                return 'fab fa-snapchat';
            }
            case 'Tumblr':
            case 'tumblr': {
                return 'fab fa-tumblr';
            }
            default:
                return 'fas fa-link';
        }
    }
    getLinkColor(net) {
        switch (net) {
            case 'Facebook':
            case 'facebook':
            case 'fb': {
                return '#3B5998';
            }
            case 'Instagram':
            case 'instagram':
            case 'insta': {
                return '#E1306C';
            }
            case 'Website':
            case 'website':
            case 'web': {
                return '#499EFF';
            }
            case 'Twitter':
            case 'twitter': {
                return '#1dcaff';
            }
            case 'Pinterest':
            case 'pinterest': {
                return '#E60023';
            }
            case 'YouTube':
            case 'youtube': {
                return '#F44336';
            }
            case 'Google+':
            case 'google': {
                return '#F44336';
            }
            case 'Reddit':
            case 'reddit': {
                return '#ff4500';
            }
            case 'Snapchat':
            case 'snapchat': {
                return '#FFEB3B';
            }
            case 'Tumblr':
            case 'tumblr': {
                return '#34526f';
            }
            default:
                return '#499EFF';
        }
    }
    callNumberAction(number) {
        console.log('Call number ' + number);
        if (!this.platform.is('mobileweb')) //non è browser
         {
            this.callNumber.callNumber(this.clearSpaces(number) + '', true)
                .then(res => console.log('Launched dialer!', res))
                .catch(err => console.log('Error launching dialer', err));
        }
    }
    goToNavigatorAction(address) {
        console.log('Go to ' + address);
        if (!this.platform.is('mobileweb')) //non è browser
         {
            this.launchNavigator;
            this.launchNavigator.navigate(address)
                .then(success => console.log('Launched navigator'), error => console.log('Error launching navigator', error));
        }
    }
    clearSpaces(s) {
        return s.replace(' ', '').replace(' ', '').replace(' ', '');
    }
    share() {
        console.log(_GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].selectedListing.url);
        this.socialSharing.share('Check this link', '', '', _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].selectedListing.url).then(function () {
            console.log('Successful share');
        }).catch(function (error) {
            console.log('Error sharing:', error);
        });
    }
    getActionContainerClass() {
        if (_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].site_details.actionButtonStyle == '2')
            return 'fastBtnsContainer';
        else
            return 'fastBtnsContainerFull';
    }
    getActionLabelClass() {
        if (_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].site_details.actionButtonStyle == '2')
            return 'fastBtnLabel';
        else
            return 'fastBtnLabelWhite';
    }
    getCustomFieldTaxonomyOptionByKey(key, optID) {
        /*   console.log(key);
           console.log(optID);
           console.log(GlobalFieldsMyListing.filtersSearch.customFieldsDropdownKeysOptions);
           console.log(GlobalFieldsMyListing.filtersSearch.customTaxonomiesDropdownKeysOptions);
       */
        //is a custom field ?
        let field = _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_4__["GlobalFieldsMyListing"].filtersSearch.customFieldsDropdownKeysOptions.find(term => term.key == key);
        if (field && field.options) {
            let opt = field.options.find(temp => temp.term_id == optID);
            if (opt) //is not an array
                return opt.name;
            else if (Array.isArray(optID)) { //is an array
                let res = '';
                for (let i = 0; i < optID.length; i++) {
                    let opt = field.options.find(temp => temp.term_id == optID[i]);
                    if (opt) {
                        if (i < optID.length - 1)
                            res += opt.name + ', ';
                        else
                            res += opt.name;
                    }
                }
                return res;
            }
            else if (optID.constructor === Object) { //is an object
                let res = '';
                for (let property in optID) {
                    res += optID[property] + ' ';
                }
                return res;
            }
        }
        //is a taxonomy ?
        field = _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_4__["GlobalFieldsMyListing"].filtersSearch.customTaxonomiesDropdownKeysOptions.find(term => term.key == key);
        if (field && field.options) {
            let opt = field.options.find(temp => temp.term_id == optID);
            if (opt) //is not an array
                return opt.name;
            else if (Array.isArray(optID)) { //is an array
                let res = '';
                for (let i = 0; i < optID.length; i++) {
                    let opt = field.options.find(temp => temp.term_id == optID[i]);
                    if (opt) {
                        if (i < optID.length - 1)
                            res += opt.name + ', ';
                        else
                            res += opt.name;
                    }
                }
                return res;
            }
            else if (optID.constructor === Object) { //is an object
                let res = '';
                for (let property in optID) {
                    res += optID[property] + ' ';
                }
                return res;
            }
        }
        return optID;
    }
    showContactInfo() {
        //if no data to show
        /*  if ((!GlobalFieldsMyListing.selectedListing || (!GlobalFieldsMyListing.selectedListing.job_email && !GlobalFieldsMyListing.selectedListing.job_phone &&
            !GlobalFieldsMyListing.selectedListing.job_location && !GlobalFieldsMyListing.selectedListing.links)))
            return false;*/
        if (this.GlobalFields.site_details.contactInfoChoice == '1') //show always
            return true;
        if (this.GlobalFields.site_details.contactInfoChoice == '3') //hide always
            return false;
        if (this.GlobalFields.site_details.contactInfoChoice == '2' && this.isClaimed()) //Show if claimed
            return true;
        else
            return false;
    }
    isClaimed() {
        if (_GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].selectedListing.post_meta && _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].selectedListing.post_meta.claimed_section == 'claimed')
            return true;
        else
            return false;
    }
    openRatingsPopover(ev, ratings) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const keys = Object.keys(ratings);
            _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].customRatingsSelected = [];
            if (keys)
                keys.forEach(key => {
                    if (key != 'general_rating')
                        _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].customRatingsSelected.push({ key: key, value: ratings[key] });
                });
            const popover = yield this.popoverController.create({
                component: _MyListing_listingPage_popoverRatings_popoverRatings__WEBPACK_IMPORTED_MODULE_16__["PopoverRatings"],
                cssClass: '',
                event: ev,
                translucent: true
            });
            return yield popover.present();
        });
    }
    openImgPopover(url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].selectedImg = url;
            const popover = yield this.popoverController.create({
                component: _Shared_popoverImg_popoverImg__WEBPACK_IMPORTED_MODULE_17__["PopoverImg"],
                cssClass: 'popoverImg',
                translucent: true
            });
            return yield popover.present();
        });
    }
    getClassContainer() {
        if (this.GlobalFields.isWhiteBackground())
            return 'sectionContainer';
        else
            return 'sectionContainerNotWhiteBackground';
    }
    getBackground(listing) {
        let image = '';
        if (listing && listing.gallery && listing.gallery.cover_image)
            image = listing.gallery.cover_image;
        else
            image = _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].site_details.placeholderImgUrl;
        return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
    }
    getBackgroundDarker(listing) {
        let image = '';
        if (listing.img_cover)
            image = listing.img_cover;
        if (!listing.img_cover && listing.job_cover)
            image = listing.job_cover;
        else if (!listing.img_cover)
            image = _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].site_details.placeholderImgUrl;
        return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient(to top, rgba(23, 23, 23, 0.52), rgba(23, 23, 23, 0.52)), url(${image})`);
    }
    getBackgroundDarkerCached(listing) {
        let image = '';
        if (listing.gallery.cover_image)
            image = listing.gallery.cover_image;
        else
            image = _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].site_details.placeholderImgUrl;
        return image;
    }
    writeReview() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].oldReview = this.youAlreadyReviewed();
            const modal = yield this.modalCtrl.create({
                component: _modalWriteReview_modalWriteReview_LP__WEBPACK_IMPORTED_MODULE_20__["ModalWriteReview_LP"],
            });
            modal.present();
            const { data } = yield modal.onWillDismiss();
            this.ini();
        });
    }
    checkIfFieldsMissing() {
        return _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].selectedListing.lead_gen.some(field => field && field.required == '' && this.isVoidField(this.lead[field.name]));
    }
    isVoidField(field) {
        if (!field)
            return true;
        if (field == '')
            return true;
        return false;
    }
    sendLead() {
        this.GlobalFields.loadingSoft = true; //Loading;
        if (!this.checkIfFieldsMissing()) {
            this.lpservice.leadGen(this.lead, _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].selectedListing.ID, _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].selectedListing.post_author, _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].selectedListing.post_author)
                .subscribe((res) => {
                this.GlobalFields.loadingSoft = false;
                if (res)
                    if (res.success)
                        this.lead_sent = true;
                    else {
                        this.lead_sent = false;
                        this.lead_err = res.message;
                    }
                else {
                    this.lead_sent = false;
                    this.lead_err = 'Error on server';
                }
            }, error => {
                this.GlobalFields.loadingSoft = false;
                this.lead_sent = 0;
                this.lead_err = 'Error on server';
            });
        }
    }
    goToLogin() {
        this.navController.navigateForward('tabs/menuPage');
        this.closeModal();
    }
    doBookmark() {
        _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].selectedListing.isBookmarked = true;
        _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].loadingSoft = true;
        this.lpservice.doBookmark(_GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].selectedListing.ID).subscribe((data) => {
            _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].loadingSoft = false;
            this.lpservice.getBookmarkedListings().subscribe((data) => {
                _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].bookmarkedListings = data;
            });
        }, err => {
            _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].loadingSoft = false;
            this.service.refreshCookie();
        });
    }
    undoBookmark() {
        _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].selectedListing.isBookmarked = false;
        _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].loadingSoft = true;
        this.lpservice.undoBookmark(_GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].selectedListing.ID).subscribe((data) => {
            _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].loadingSoft = false;
            this.lpservice.getBookmarkedListings().subscribe((data) => {
                _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].bookmarkedListings = data;
            });
        }, err => {
            _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].loadingSoft = false;
            this.service.refreshCookie();
        });
    }
    getTruncatedDecimal(n) {
        let num = parseFloat(n);
        return num.toFixed(1);
    }
    youAlreadyReviewed() {
        let rev = undefined;
        if (_GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].selectedListing.reviews && _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].selectedListing.reviews.reviews)
            rev = _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_18__["GlobalFieldsListingPro"].selectedListing.reviews.reviews.find(comm => comm.post_author == this.GlobalFields.profile.user.id + '');
        return rev;
    }
    getImgCachedClass(class_to_add) {
        let class_name = ' ' + class_to_add;
        const imageAttributes = [];
        imageAttributes.push({
            element: 'class',
            value: class_name
        });
        return imageAttributes;
    }
    goToMessage() {
        this.GlobalFields.msgToOwner = _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_4__["GlobalFieldsMyListing"].selectedListing.author;
        this.closeModal();
        this.navController.navigateForward('tabs/' + _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].site_details.themeEnabled + '/messages');
    }
    openLink(url) {
        console.log(url);
        const browser = this.inAppBrowser.create(url, '_system');
        // browser.close();
    }
    getPrefixIfExist(field) {
        let res = '';
        if (_GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_4__["GlobalFieldsMyListing"].selectedTypeDetail.case27_listing_type_single_page_options && _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_4__["GlobalFieldsMyListing"].selectedTypeDetail.case27_listing_type_single_page_options.cover_details && _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_4__["GlobalFieldsMyListing"].selectedTypeDetail.case27_listing_type_single_page_options.cover_details.length > 0) {
            _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_4__["GlobalFieldsMyListing"].selectedTypeDetail.case27_listing_type_single_page_options.cover_details.forEach(obj => {
                if (obj.field == field.key)
                    res = obj.prefix;
            });
        }
        return res;
    }
    getSuffixIfExist(field) {
        let res = '';
        if (_GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_4__["GlobalFieldsMyListing"].selectedTypeDetail.case27_listing_type_single_page_options && _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_4__["GlobalFieldsMyListing"].selectedTypeDetail.case27_listing_type_single_page_options.cover_details && _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_4__["GlobalFieldsMyListing"].selectedTypeDetail.case27_listing_type_single_page_options.cover_details.length > 0) {
            _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_4__["GlobalFieldsMyListing"].selectedTypeDetail.case27_listing_type_single_page_options.cover_details.forEach(obj => {
                if (obj.field == field.key)
                    res = obj.suffix;
            });
        }
        return res;
    }
    checkIfHasPackageToBeShown(_key) {
        const key = _key.replace('_', '');
        const field = _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_4__["GlobalFieldsMyListing"].selectedTypeDetail.case27_listing_type_fields[key];
        //    conditions?: {key?: string, compare?: string, value?: string}[];
        if (field) {
            if (!field.conditions)
                return true;
            if (field.conditions.length == 0)
                return true;
            if (field.conditions.some(cond => {
                return cond.some(c => {
                    if (c.key == '__listing_package' && c.compare == '==' &&
                        (!c.value || c.value == '' || c.value == _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_4__["GlobalFieldsMyListing"].selectedListing.package_id))
                        return true;
                    else
                        return false;
                });
            }))
                return true;
        }
        return false;
    }
    getSanifiedUrl(url) {
        if (url && url.includes('youtube') && url.split('?').length > 0) {
            const r_url = 'https://youtube.com/embed/' + url.split('?')[1].replace('v=', '');
            console.log(r_url);
            return this._sanitizer.bypassSecurityTrustResourceUrl(r_url);
        }
    }
    hasMultipleRatings(ratings) {
        const keys = Object.keys(ratings);
        if (keys && keys.length > 1)
            return true;
        else
            return false;
    }
    selectFAQIndex(index) {
        this.selectedAccoIndex = this.selectedAccoIndex == index ? undefined : index;
    }
};
ListingPage_LP.ctorParameters = () => [
    { type: _services_Service__WEBPACK_IMPORTED_MODULE_9__["Service"] },
    { type: _services_MyListingService__WEBPACK_IMPORTED_MODULE_15__["MyListingService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__["CallNumber"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_8__["LaunchNavigator"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DomSanitizer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_14__["InAppBrowser"] },
    { type: _services_ListingProService__WEBPACK_IMPORTED_MODULE_19__["ListingProService"] }
];
ListingPage_LP = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-listing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./listing-page_LP.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/listingPage/listing-page_LP.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./listing-page_LP.component.scss */ "./src/app/ListingPro/listingPage/listing-page_LP.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_9__["Service"], _services_MyListingService__WEBPACK_IMPORTED_MODULE_15__["MyListingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__["CallNumber"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_8__["LaunchNavigator"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DomSanitizer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_14__["InAppBrowser"],
        _services_ListingProService__WEBPACK_IMPORTED_MODULE_19__["ListingProService"]])
], ListingPage_LP);



/***/ }),

/***/ "./src/app/ListingPro/listingPage/modalWriteReview/modalWriteReview_LP.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/ListingPro/listingPage/modalWriteReview/modalWriteReview_LP.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tableRowThinner {\n  font-size: 10pt;\n}\n\n.btnSubmit {\n  width: 100%;\n  padding: 10px;\n  font-size: 15pt;\n  border-radius: 5px;\n}\n\n.formContainer {\n  position: fixed;\n  top: 15%;\n  width: calc(90% - 20px);\n  border-radius: 5px;\n  left: 30px;\n  padding: 15px;\n  background-color: white;\n}\n\n.formLabel {\n  margin-top: 0px;\n  margin-right: 0px;\n  margin-bottom: 0px;\n  margin-left: 0px;\n  word-wrap: break-word;\n  font-size: 32px;\n  font-weight: bolder;\n  line-height: 1.125em;\n}\n\n.empty {\n  color: rgba(45, 45, 45, 0.21);\n}\n\n.colored {\n  color: #ffc106;\n}\n\n.reviewImg {\n  margin: 5px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100px;\n  height: 100px;\n}\n\n.newReviewImg {\n  margin: 5px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 50px;\n  height: 50px;\n}\n\n.imgContainerInline {\n  display: inline;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.btnSendReview {\n  width: 100%;\n  padding: 10px;\n  font-size: 15pt;\n  border-radius: 5px;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTGlzdGluZ1Byby9saXN0aW5nUGFnZS9tb2RhbFdyaXRlUmV2aWV3L0M6XFxqb2tlc29uam9lbFxcam9rZXNvbmpvZWwvc3JjXFxhcHBcXExpc3RpbmdQcm9cXGxpc3RpbmdQYWdlXFxtb2RhbFdyaXRlUmV2aWV3XFxtb2RhbFdyaXRlUmV2aWV3X0xQLnNjc3MiLCJzcmMvYXBwL0xpc3RpbmdQcm8vbGlzdGluZ1BhZ2UvbW9kYWxXcml0ZVJldmlldy9tb2RhbFdyaXRlUmV2aWV3X0xQLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLDZCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9MaXN0aW5nUHJvL2xpc3RpbmdQYWdlL21vZGFsV3JpdGVSZXZpZXcvbW9kYWxXcml0ZVJldmlld19MUC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlUm93VGhpbm5lciB7XHJcbiAgZm9udC1zaXplOiAxMHB0O1xyXG59XHJcblxyXG4uYnRuU3VibWl0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVwdDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5mb3JtQ29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAxNSU7XHJcbiAgd2lkdGg6IGNhbGMoOTAlIC0gMjBweCk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGxlZnQ6IDMwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZvcm1MYWJlbCB7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBsaW5lLWhlaWdodDogMS4xMjVlbTtcclxufVxyXG5cclxuLmVtcHR5IHtcclxuICBjb2xvcjogcmdiYSg0NSwgNDUsIDQ1LCAuMjEpO1xyXG59XHJcblxyXG4uY29sb3JlZCB7XHJcbiAgY29sb3I6ICNmZmMxMDY7XHJcbn1cclxuXHJcbi5yZXZpZXdJbWcge1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4ubmV3UmV2aWV3SW1nIHtcclxuICBtYXJnaW46IDVweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5pbWdDb250YWluZXJJbmxpbmV7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLmJ0blNlbmRSZXZpZXd7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDE1cHQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDNweCAxMHB4O1xyXG59IiwiLnRhYmxlUm93VGhpbm5lciB7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbn1cblxuLmJ0blN1Ym1pdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE1cHQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmZvcm1Db250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTUlO1xuICB3aWR0aDogY2FsYyg5MCUgLSAyMHB4KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBsZWZ0OiAzMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmZvcm1MYWJlbCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjEyNWVtO1xufVxuXG4uZW1wdHkge1xuICBjb2xvcjogcmdiYSg0NSwgNDUsIDQ1LCAwLjIxKTtcbn1cblxuLmNvbG9yZWQge1xuICBjb2xvcjogI2ZmYzEwNjtcbn1cblxuLnJldmlld0ltZyB7XG4gIG1hcmdpbjogNXB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ubmV3UmV2aWV3SW1nIHtcbiAgbWFyZ2luOiA1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uaW1nQ29udGFpbmVySW5saW5lIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5idG5TZW5kUmV2aWV3IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVwdDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAzcHggMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/ListingPro/listingPage/modalWriteReview/modalWriteReview_LP.ts":
/*!********************************************************************************!*\
  !*** ./src/app/ListingPro/listingPage/modalWriteReview/modalWriteReview_LP.ts ***!
  \********************************************************************************/
/*! exports provided: ModalWriteReview_LP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalWriteReview_LP", function() { return ModalWriteReview_LP; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _GlobalFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../GlobalFields */ "./src/app/GlobalFields.ts");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_Service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/Service */ "./src/app/services/Service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../GlobalFieldsMyListing */ "./src/app/GlobalFieldsMyListing.ts");
/* harmony import */ var _services_MyListingService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/MyListingService */ "./src/app/services/MyListingService.ts");
/* harmony import */ var _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../GlobalFieldsListingPro */ "./src/app/GlobalFieldsListingPro.ts");
/* harmony import */ var _services_ListingProService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../services/ListingProService */ "./src/app/services/ListingProService.ts");
















let ModalWriteReview_LP = class ModalWriteReview_LP {
    constructor(translate, service, lpservice, mlservice, statusBar, modalCtrl, navParams, alertController, imagePicker, sanitizer, webview, platform, base64) {
        this.translate = translate;
        this.service = service;
        this.lpservice = lpservice;
        this.mlservice = mlservice;
        this.statusBar = statusBar;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.imagePicker = imagePicker;
        this.sanitizer = sanitizer;
        this.webview = webview;
        this.platform = platform;
        this.base64 = base64;
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"];
        this.GlobalFieldsListingPro = _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_14__["GlobalFieldsListingPro"];
        this.customFieldsStars = [];
        this.review = undefined;
        this.gallery = [];
        this.new_gallery = []; //string[] ios | SafeHtml[] android
        this.new_gallery_File = [];
        this.new_gallery_Name = [];
        this.cameraOptions = {
            maximumImagesCount: 1,
            quality: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["OutputType"].DATA_URL
        };
        this.errorMgs = '';
        _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_14__["GlobalFieldsListingPro"].listingTypeDetail.ratings.multi_rating.forEach(rat => {
            this.customFieldsStars.push({ key: rat, value: 0, label: rat });
        });
        if (_GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_14__["GlobalFieldsListingPro"].oldReview) { //already inserted a comment
            this.title = _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_14__["GlobalFieldsListingPro"].oldReview.post_title;
            this.comment = _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_14__["GlobalFieldsListingPro"].oldReview.post_content;
            if (_GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_14__["GlobalFieldsListingPro"].oldReview.gallery)
                this.gallery = _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_14__["GlobalFieldsListingPro"].oldReview.gallery;
            console.log(this.customFieldsStars);
            console.log(_GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsMyListing"].oldReview);
            for (let i = 0; i < this.customFieldsStars.length; i++) {
                let index = undefined;
                this.customFieldsStars.forEach(cust_rat => {
                    cust_rat.value = _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_14__["GlobalFieldsListingPro"].oldReview.rating[cust_rat.key];
                    if (!cust_rat.value)
                        cust_rat.value = 0;
                });
            }
        }
    }
    ionViewDidEnter() {
        this.service.setWhiteBlackBackgroundStatusBar();
    }
    postAReview() {
        this.errorMgs = '';
        if (!this.comment || this.comment == '') {
            this.errorMgs = 'Enter a message';
            return;
        }
        this.customFieldsStars.forEach(elem => {
            if (elem.value == 0) {
                this.errorMgs = 'Enter at list 1 star';
                return;
            }
        });
        if (!this.errorMgs) {
            this.GlobalFields.loadingSoft = true;
            if (this.gallery && this.gallery.length > 0)
                this.gallery.forEach(img => {
                    //galleryIds.push(img.id);
                });
            const rew_id = _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_14__["GlobalFieldsListingPro"].oldReview && _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_14__["GlobalFieldsListingPro"].oldReview.ID ? _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_14__["GlobalFieldsListingPro"].oldReview.ID : undefined;
            this.lpservice.postAReview(rew_id, _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_14__["GlobalFieldsListingPro"].selectedListing.ID, this.title, this.comment, this.customFieldsStars, this.gallery, this.new_gallery_File, this.new_gallery_Name).subscribe(() => {
                this.service.clearAllCache();
                setTimeout(() => {
                    this.lpservice.getListingDetailsById(_GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_14__["GlobalFieldsListingPro"].selectedListing.ID).subscribe(data => {
                        _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_14__["GlobalFieldsListingPro"].selectedListing = data;
                        this.GlobalFields.loadingSoft = false;
                        _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_14__["GlobalFieldsListingPro"].filtersSearch.currentPage = 0;
                        _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_14__["GlobalFieldsListingPro"].doSearch(this.lpservice);
                        this.closeModal();
                    }, error => {
                        console.log(error);
                        let msg = '';
                        if (error && error.error)
                            msg = error.error.message;
                        else if (error)
                            msg = error.message;
                        this.GlobalFields.openAlert(this.alertController, 'Error', 'Error on server', msg);
                        this.GlobalFields.loadingSoft = false;
                    });
                }, 100);
            }, err => {
                this.errorMgs = 'Error on server';
                console.log(err);
                this.GlobalFields.loadingSoft = false;
            });
        }
    }
    getStartsHtml(rating) {
        let num = rating;
        let max = 5;
        let res = [];
        while (num >= 1) {
            res.push('fas fa-star colored');
            num = num - 1;
            max = max - 1;
        }
        for (let i = 0; i < max; i++) {
            res.push('far fa-star empty');
        }
        return res;
    }
    getSecurePageURL(url) {
        if (!url.includes('https')) {
            url.replace('http', 'https');
        }
        return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' + url);
    }
    openImagePicker() {
        let outputType = 0; //0 Return image file URI, 1 base64img on android crash BUT WORKS FOR Information google-ios
        if (this.platform.is('ios'))
            outputType = 1;
        if (this.platform.is('android'))
            outputType = 0;
        try {
            let options = {
                maximumImagesCount: 15,
                outputType: outputType
            };
            this.imagePicker.getPictures(options).then((results) => {
                for (let i = 0; i < results.length; i++) {
                    console.log(results[i]);
                    if (results[i] != 0 && results[i] != '0' && results[i] != 'K') { //This is returned when no permission when button is clicked
                        if (outputType === 0) { //file URI - Android
                            this.base64.encodeFile(results[i]).then((base64File) => {
                                // this.new_gallery.push(base64File);
                                if (base64File) {
                                    //base64File.replace("image/*", "image/jpeg")
                                    console.log(base64File);
                                    this.new_gallery.push(window.Ionic.WebView.convertFileSrc(results[i]));
                                    this.new_gallery_Name.push(results[i]);
                                    this.new_gallery_File.push(this.service.dataURItoBlob(base64File));
                                }
                            }, (err) => {
                                console.log(err);
                            });
                        }
                        if (outputType === 1) { //base64 - Information google-ios
                            this.new_gallery.push('data:image/jpeg;base64,' + results[i]);
                            this.new_gallery_Name.push(results[i]);
                            this.new_gallery_File.push(this.service.dataURItoBlob(this.new_gallery[this.new_gallery.length - 1]));
                        }
                    }
                }
            }, (err) => {
                //For testing in browser
                console.log(err);
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    deleteOldImg(index) {
        this.gallery.splice(index, 1);
    }
    deleteNewImg(index) {
        this.new_gallery.splice(index, 1);
        this.new_gallery_File.splice(index, 1);
        this.new_gallery_Name.splice(index, 1);
    }
    closeModal() {
        //this.service.setTransparentBackgroundStatusBar();
        this.modalCtrl.dismiss({});
    }
};
ModalWriteReview_LP.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _services_Service__WEBPACK_IMPORTED_MODULE_6__["Service"] },
    { type: _services_ListingProService__WEBPACK_IMPORTED_MODULE_15__["ListingProService"] },
    { type: _services_MyListingService__WEBPACK_IMPORTED_MODULE_13__["MyListingService"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["ImagePicker"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_11__["Base64"] }
];
ModalWriteReview_LP = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'modalWriteReview_LP',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modalWriteReview_LP.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/listingPage/modalWriteReview/modalWriteReview_LP.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modalWriteReview_LP.scss */ "./src/app/ListingPro/listingPage/modalWriteReview/modalWriteReview_LP.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _services_Service__WEBPACK_IMPORTED_MODULE_6__["Service"], _services_ListingProService__WEBPACK_IMPORTED_MODULE_15__["ListingProService"], _services_MyListingService__WEBPACK_IMPORTED_MODULE_13__["MyListingService"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
        _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["ImagePicker"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"],
        _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_11__["Base64"]])
], ModalWriteReview_LP);



/***/ }),

/***/ "./src/app/ListingPro/shared_LP.module.ts":
/*!************************************************!*\
  !*** ./src/app/ListingPro/shared_LP.module.ts ***!
  \************************************************/
/*! exports provided: SharedModule_LP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule_LP", function() { return SharedModule_LP; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var ionic_image_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-image-loader */ "./node_modules/ionic-image-loader/__ivy_ngcc__/fesm2015/ionic-image-loader.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _listingList_listingList_LP__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listingList/listingList_LP */ "./src/app/ListingPro/listingList/listingList_LP.ts");
/* harmony import */ var _listingPage_listing_page_LP_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./listingPage/listing-page_LP.component */ "./src/app/ListingPro/listingPage/listing-page_LP.component.ts");
/* harmony import */ var _home_modalGenericSearch_modal_generic_search_LP__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/modalGenericSearch/modal-generic-search_LP */ "./src/app/ListingPro/home/modalGenericSearch/modal-generic-search_LP.ts");
/* harmony import */ var _listingPage_modalWriteReview_modalWriteReview_LP__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./listingPage/modalWriteReview/modalWriteReview_LP */ "./src/app/ListingPro/listingPage/modalWriteReview/modalWriteReview_LP.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");












let SharedModule_LP = class SharedModule_LP {
};
SharedModule_LP = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"]
        ],
        declarations: [
            _listingList_listingList_LP__WEBPACK_IMPORTED_MODULE_7__["ListingList_LP"],
            _listingPage_listing_page_LP_component__WEBPACK_IMPORTED_MODULE_8__["ListingPage_LP"],
            _home_modalGenericSearch_modal_generic_search_LP__WEBPACK_IMPORTED_MODULE_9__["ModalGenericSearch_LP"],
            _listingPage_modalWriteReview_modalWriteReview_LP__WEBPACK_IMPORTED_MODULE_10__["ModalWriteReview_LP"]
        ],
        exports: [
            _listingList_listingList_LP__WEBPACK_IMPORTED_MODULE_7__["ListingList_LP"],
            _listingPage_listing_page_LP_component__WEBPACK_IMPORTED_MODULE_8__["ListingPage_LP"],
            ionic_image_loader__WEBPACK_IMPORTED_MODULE_5__["IonicImageLoader"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"]
        ],
        entryComponents: [
            _listingPage_listing_page_LP_component__WEBPACK_IMPORTED_MODULE_8__["ListingPage_LP"],
            _home_modalGenericSearch_modal_generic_search_LP__WEBPACK_IMPORTED_MODULE_9__["ModalGenericSearch_LP"],
            _listingPage_modalWriteReview_modalWriteReview_LP__WEBPACK_IMPORTED_MODULE_10__["ModalWriteReview_LP"]
        ]
    })
], SharedModule_LP);



/***/ })

}]);
//# sourceMappingURL=default~ListingPro-home-home-module~ListingPro-searchPage-search_LP-module~menuPage-menuPage-module-es2015.js.map