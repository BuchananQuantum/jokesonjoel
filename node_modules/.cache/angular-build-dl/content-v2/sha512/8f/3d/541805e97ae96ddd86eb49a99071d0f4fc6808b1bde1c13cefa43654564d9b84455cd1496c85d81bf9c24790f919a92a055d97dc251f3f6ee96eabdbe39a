(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ListingPro-home-home-module~ListingPro-searchPage-search_LP-module~menuPage-menuPage-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/home/modalGenericSearch/modal-generic-search_LP.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/home/modalGenericSearch/modal-generic-search_LP.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header (swiperight)=\"closeModal()\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n  <ion-toolbar style=\"padding: 10px;\">\n    <ion-row class=\"filters\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n      <ion-col no-padding  size=\"1\" style=\"text-align: center\">\n        <button class=\"btnFloatingWhite\" (click)=\"closeModal()\">\n          <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"chevron-back-outline\"></ion-icon>\n          <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"chevron-forward-outline\"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col no-padding  size=\"11\">\n        <ion-input clearInput placeholder=\"{{'WHAT_SEARCH' | translate}}\"\n                   [(ngModel)]=\"searchQuery\" enterkeyhint=\"search\"\n                   style=\"margin-left: 20px;padding-left: 0px !important; width: calc(100% - 10px);\"\n                   (keyup.enter)=\"generalSearch()\"\n                   (change)=\"results=undefined;\"\n                   (ionInput)=\"results= searchQuery=='' || !searchQuery ? undefined : results\"\n        ></ion-input>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content dir=\"{{GlobalFields.getLanguageLayout()}}\" style=\"padding-top: 20px;\">\n\n  <!-- Loading animation-->\n  <div *ngIf=\"loading\">\n    <ion-list>\n      <ion-list-header>\n        <ion-label><ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text></ion-label>\n      </ion-list-header>\n      <ion-item *ngFor=\"let item of [1,2,3,4,5,6,7,8,9,10]\">\n        <ion-avatar slot=\"start\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-avatar>\n        <ion-label>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div>\n\n    <ion-list *ngIf=\"!results && !loading\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n\n      <!-- Search near me -->\n      <ion-list-header>\n        <ion-label style=\"text-transform: capitalize\"><b>{{'NEAR_YOU' | translate}}</b></ion-label>\n      </ion-list-header>\n      <span *ngFor=\"let cat of GlobalFieldsListingPro.listingCategories\">\n         <ion-item *ngIf=\"cat && cat.count>0\" style=\"color: #484848;\" [detail]=\"false\" (click)=\"searchNearMe(cat.name)\">\n          <span slot=\"start\" class=\"iconType\">\n            <img *ngIf=\"cat.icon1\" src=\"{{cat.icon1}}\" style=\"height: 20px;margin-top: -5px;\">\n          </span>\n          <ion-label>\n            {{cat.name}}\n            <br>\n            <span style=\"font-size: 9pt\">{{cat.count}} {{'LISTINGS' | translate}}</span>\n          </ion-label>\n          <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"chevron-forward-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\n          <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"chevron-back-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\n        </ion-item>\n      </span>\n    </ion-list>\n\n    <!-- Results -->\n\n    <span *ngIf=\"results && !loading\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n\n      <!-- No results -->\n      <ion-list *ngIf=\"!results.suggestions || ( (!results.suggestions.listing || results.suggestions.listing.length==0) && (!results.suggestions.cats || results.suggestions.cats.length==0)\n      && (!results.suggestions.tag || results.suggestions.tag.length==0))\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n          <ion-item style=\"color: #484848;\" [detail]=\"false\">\n            <span slot=\"start\" class=\"iconType\">\n            </span>\n            <ion-label>\n              <b>{{'NO_RESULTS' | translate}}</b>\n            </ion-label>\n        </ion-item>\n      </ion-list>\n\n      <span *ngIf=\"results.suggestions\">\n\n        <!-- Listings -->\n        <ion-list *ngIf=\"results.suggestions.listing && results.suggestions.listing.length>0\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n          <ion-list-header>\n            <ion-label><b>{{'LISTINGS' | translate}}</b></ion-label>\n          </ion-list-header>\n          <span *ngFor=\"let listing of results.suggestions.listing\">\n            <ion-item (click)=\"getListingDetails(listing.ID)\"\n                      style=\"color: #484848;\" [detail]=\"false\">\n              <span slot=\"start\" class=\"iconType\">\n                <div *ngIf=\"listing.thumb\" class=\"imageCacheGeneralSearch\">\n                  <img-loader [src]=\"listing.thumb\" useImg [imgAttributes]=\"getImgCachedClass('imgAirbnbHomeType')\"></img-loader>\n                </div>\n              </span>\n              <ion-label>\n                <b>{{listing.title}}</b>\n                 <br>\n              <span style=\"font-size: 9pt\">\n                <span *ngIf=\"listing.locations && listing.locations.length>0;else second\">\n                  {{listing.locations[0].name}}\n                </span>\n                <ng-template #second *ngIf=\"listing.gAddress\">\n                  {{listing.gAddress}}\n                </ng-template>\n              </span>\n              </ion-label>\n              <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"chevron-forward-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\n              <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"chevron-back-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\n            </ion-item>\n          </span>\n        </ion-list>\n\n        <!-- Categories -->\n        <ion-list *ngIf=\"results.suggestions.cats && results.suggestions.cats.length>0\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n          <ion-list-header>\n            <ion-label><b>{{'CATEGORIES' | translate}}</b></ion-label>\n          </ion-list-header>\n          <span *ngFor=\"let cat of results.suggestions.cats\">\n            <ion-item style=\"color: #484848;\" [detail]=\"false\" (click)=\"getListingsByCategory(cat.name)\">\n              <span slot=\"start\" class=\"iconType\"><img *ngIf=\"cat.icon1\" src=\"{{cat.icon1}}\" style=\"height: 20px;margin-top: -5px;\"></span>\n            <ion-label>\n              <b>{{cat.name}}</b>\n              <br>\n              <span style=\"font-size: 9pt\">{{cat.count}} {{'LISTINGS' | translate}}</span>\n            </ion-label>\n            <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"chevron-forward-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\n            <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"chevron-back-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\n          </ion-item>\n          </span>\n        </ion-list>\n\n        <!-- Tags -->\n        <ion-list *ngIf=\"results.suggestions.tag && results.suggestions.tag.length>0\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n          <ion-list-header>\n            <ion-label><b>Features</b></ion-label>\n          </ion-list-header>\n          <span *ngFor=\"let tag of results.suggestions.tag\">\n            <ion-item (click)=\"getListingsByTag(tag)\"\n                      style=\"color: #484848;\" [detail]=\"false\">\n              <span slot=\"start\" class=\"iconType\"><i class=\"fas fa-hashtag\"></i></span>\n            <ion-label>\n              <b>{{tag.name}}</b>\n              <br>\n              <span style=\"font-size: 9pt\">{{tag.count}} {{'LISTINGS' | translate}}</span>\n            </ion-label>\n            <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"chevron-forward-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\n            <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"chevron-back-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\n          </ion-item>\n          </span>\n        </ion-list>\n\n\n\n      </span>\n\n\n\n    </span>\n  </div>\n\n</ion-content>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/listingList/listingList_LP.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/listingList/listingList_LP.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Box Type '1' or Box with logo Type '3'-->\n\n<ion-card *ngIf=\"type!='2'\" [className]=\"getCardClass()\" (click)=\"getListingDetails(listing)\" dir=\"{{GlobalFields.getLanguageLayout()}}\" style=\"height: auto; margin: 0px !important; \">\n    <!-- Img -->\n    <div [class.backImgBigger]=\"!little && type=='1' && search\" [class.backImgLittle]=\"little\" [class.backImg]=\"!little && type=='1' && (!search || GlobalFields.isWhiteBackground())\"\n         [class.backImgSquaredAndLogo]=\"type=='3'\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n        <img-loader *ngIf=\"listing.gallery\" [src]=\"getListingImg(listing)\" useImg [imgAttributes]=\"getImgCachedClass(type)\"></img-loader>\n    </div>\n    <!-- White content -->\n    <ion-card-content [class.whiteContentBoxStyleOnWhiteBack]=\"type=='1'\" [class.whiteContentBoxLogoStyle]=\"type=='3'\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n        <!-- Logo -->\n        <div *ngIf=\"type=='3' && listing.post_meta.business_logo\" class=\"logoCircleImg\">\n            <img-loader [src]=\"listing.post_meta.business_logo\" useImg [imgAttributes]=\"getImgCachedClassByClass('logoImgCache')\"></img-loader>\n        </div>\n        <!-- Type & reviews -->\n        <ion-grid *ngIf=\"listing.post_meta\" class=\"listingType\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n          <ion-row *ngIf=\"!little\">\n              <ion-col size=\"12\" class=\"typeTitle\">\n                  <span *ngIf=\"listing.category\" style=\"font-weight: 400;\">\n                    <img *ngIf=\"listing.category.icon1\" src=\"{{listing.category.icon1}}\" style=\"height: 13px; margin-right: 5px;\">\n                    {{listing.category.name}}</span>\n                  <!-- Featured -->\n                  <span *ngIf=\"listing.campaing_ads_enabled\" class=\"sponsoredAirbnb\">{{'FEATURED' | translate}}</span>\n                  <!-- reviews-->\n                  <span class=\"reviewCounterLittle\" *ngIf=\"!listing.reviews || listing.reviews.review_count == 0\">0 {{ 'REVIEWS' | translate }}</span>\n                  <span class=\"reviewCounterLittle\" *ngIf=\"listing.reviews && listing.reviews.review_count > 0\">\n                      <i class=\"fas fa-star starReviewAirbnb\"  style=\"float: initial; color: #ffc106\"></i>\n                      <span class=\"reviewCounterLittle\" style=\"float: initial; font-size: small;\"> {{listing.reviews.listing_rate}}</span>\n                      <span class=\"reviewCounterLittle\"  style=\"float: initial; font-weight: 200;\"> ({{listing.reviews.review_count}})</span>\n                  </span>\n              </ion-col>\n          </ion-row>\n        </ion-grid>\n        <!-- Title & Location-->\n        <div [class.titleLocationLeft]=\"type=='1'\" [class.titleLocationCenter]=\"type=='3'\">\n            <p [class.listingTitleListListingPro]=\"!little\" [class.listingTitleListListingProLittle]=\"little\" dir=\"{{GlobalFields.getLanguageLayout()}}\">{{listing.post_title}}  <i class=\"fas fa-check-circle\" *ngIf=\"isClaimed()\" style=\"color: #03A9F4;\"></i> </p>\n            <p class=\"listingLocation\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n              <span *ngIf=\"listing.location && listing.location.length>0\" ><i class=\"fas fa-map-marker-alt\"></i> {{listing.location[0].name}}</span>\n              <span *ngIf=\"!listing.location || listing.location.length==0 && listing.post_meta && listing.post_meta.gAddress\" ><i class=\"fas fa-map-marker-alt\"></i> {{listing.post_meta.gAddress}}</span>\n\n              <!-- Prices -->\n              <span class=\"listingType\" *ngIf=\"listing.post_meta && listing.post_meta.price_status && listing.post_meta.price_status!='notsay'\">\n              <div class=\"verticalDivisor\"></div>\n              <span *ngIf=\"listing.post_meta.price_status=='inexpensive'\">{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}</span>\n              <span *ngIf=\"listing.post_meta.price_status=='moderate'\">{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}</span>\n              <span *ngIf=\"listing.post_meta.price_status=='pricey'\">{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}</span>\n              <span *ngIf=\"listing.post_meta.price_status=='ultra_high_end'\">{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}</span>\n\n              <span *ngIf=\"listing.post_meta.list_price\"> {{listing.post_meta.list_price}}</span>\n\n              </span>\n\n            </p>\n        </div>\n        <ion-row *ngIf=\"little\" style=\"margin-top:5px\">\n          <ion-col size=\"12\" class=\"typeTitle\">\n            <!-- Featured -->\n            <span *ngIf=\"listing.campaing_ads_enabled\" class=\"sponsoredAirbnb\">{{'FEATURED' | translate}}</span>\n            <!-- reviews-->\n            <span class=\"reviewCounterLittle\" *ngIf=\"!listing.reviews || listing.reviews.review_count == 0\">0 {{ 'REVIEWS' | translate }}</span>\n            <span class=\"reviewCounterLittle\" *ngIf=\"listing.reviews && listing.reviews.review_count > 0\">\n                              <i class=\"fas fa-star starReviewAirbnb\"  style=\"float: initial; color: #ffc106\"></i>\n                              <span class=\"reviewCounterLittle\" style=\"float: initial; font-size: small;\"> {{listing.reviews.listing_rate}}</span>\n                              <span class=\"reviewCounterLittle\"  style=\"float: initial; font-weight: 200;\"> ({{listing.reviews.review_count}})</span>\n                          </span>\n          </ion-col>\n        </ion-row>\n    </ion-card-content>\n</ion-card>\n\n\n\n\n\n\n\n<!-------------------- List type '2' -------------------->\n<ion-row *ngIf=\"type=='2'\" [className]=\"'rowListType' + isWhiteBackgroundBoxShadow()\"  (click)=\"getListingDetails(listing)\"  dir=\"{{GlobalFields.getLanguageLayout()}}\">\n    <ion-col size=\"4\" style=\"padding: 0 !important;\">\n\n        <div class=\"backImgList\" *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\">\n            <img-loader *ngIf=\"listing.gallery\" [src]=\"getListingImg(listing)\" useImg [imgAttributes]=\"getImgCachedClass(type)\"  [class.imgLoaderRTL]=\"GlobalFields.getLanguageLayout()=='rtl'\"></img-loader>\n        </div>\n        <div class=\"backImgList\" *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\">\n            <div class=\"imgRTLList\" [style.background]=\"'url(' +getListingImg(listing)+')'\"></div>\n        </div>\n\n    </ion-col>\n    <ion-col size=\"8\" style=\"padding-top: 10px;\">\n        <div class=\"listingType\" *ngIf=\"listing.post_meta\">\n          <span *ngIf=\"listing.category\">\n            <img *ngIf=\"listing.category.icon1\" src=\"{{listing.category.icon1}}\" style=\"height: 13px; margin-right: 5px;\">\n            {{listing.category.name}}\n          </span>\n          <!-- reviews-->\n            <span class=\"reviewCounterLittleList\" *ngIf=\"!listing.reviews || listing.reviews.review_count == 0\"   dir=\"{{GlobalFields.getLanguageLayout()}}\">0 {{'REVIEWS' | translate}}</span>\n            <div class=\"reviewsLabelHeaderLittle\" *ngIf=\"listing.reviews && listing.reviews.review_count > 0\">\n                <label class=\"reviewsBoxList\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n                    <label class=\"reviewScoreLittleList\">{{getTruncatedDecimal(listing.reviews.listing_rate)}}</label>\n                    <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"star\" class=\"starReviewList\" ></ion-icon>\n                    <label class=\"reviewCounterLittleList\">{{'ON' | translate}} {{listing.reviews.review_count}} {{'REVIEWS' | translate}}</label>\n                </label>\n            </div>\n        </div>\n        <p class=\"listingTitleListListingPro\" style=\"line-height: 16px !important;\" >{{listing.post_title}}  <i class=\"fas fa-check-circle\" *ngIf=\"isClaimed()\" style=\"color: #03A9F4;\"></i></p>\n        <p class=\"listingAddressLittle\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n          <span *ngIf=\"listing.location && listing.location.length>0\" ><i class=\"fas fa-map-marker-alt\"></i> {{listing.location[0].name}}</span>\n          <span *ngIf=\"!listing.location || listing.location.length==0 && listing.post_meta && listing.post_meta.gAddress\"><i class=\"fas fa-map-marker-alt\"></i> {{listing.post_meta.gAddress}}</span>\n\n          <!-- Prices -->\n          <span class=\"listingType\" *ngIf=\"listing.post_meta && listing.post_meta.price_status && listing.post_meta.price_status!='notsay'\">\n            <div class=\"verticalDivisor\"></div>\n            <span *ngIf=\"listing.post_meta.price_status=='inexpensive'\">{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}</span>\n            <span *ngIf=\"listing.post_meta.price_status=='moderate'\">{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}</span>\n            <span *ngIf=\"listing.post_meta.price_status=='pricey'\">{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}</span>\n            <span *ngIf=\"listing.post_meta.price_status=='ultra_high_end'\">{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}</span>\n\n            <span *ngIf=\"listing.post_meta.list_price\"> {{listing.post_meta.list_price}}</span>\n          </span>\n\n        </p>\n      <!-- Sponsored -->\n        <div class=\"boltIconList\" *ngIf=\"listing.campaing_ads_enabled\"><i class=\"fas fa-bolt\"></i></div>\n    </ion-col>\n</ion-row>\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/listingPage/listing-page_LP.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/listingPage/listing-page_LP.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header (swiperight)=\"closeModal()\"   dir=\"{{GlobalFields.getLanguageLayout()}}\">\n  <ion-toolbar style=\"background: linear-gradient( to bottom, #00000057, transparent );\" >\n    <div [class]=\"GlobalFields.getLanguageLayout()=='ltr' ? 'btnFloatingLeftDiv': 'btnFloatingRightDiv'\">\n      <button [class]=\"GlobalFields.site_details.headerBtnListingPageStyle == 2 ? 'btnFloatingWhite' : 'btnFloating'\" (click)=\"closeModal()\">\n        <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"arrow-back\"></ion-icon>\n        <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"arrow-forward\"></ion-icon>\n        <!--<span class=\"swipe\">{{ 'SWIPE' | translate }}</span> -->\n      </button>\n\n    </div>\n    <div [class]=\"GlobalFields.getLanguageLayout()=='ltr' ? 'btnFloatingRightDiv': 'btnFloatingLeftDiv'\" *ngIf=\"GlobalFieldsListingPro.selectedListing\">\n      <button [class]=\"GlobalFields.site_details.headerBtnListingPageStyle == 2 ? 'btnFloatingWhite' : 'btnFloating'\" (click)=\"share()\">\n        <i class=\"far fa-share-square\"></i>\n      </button>\n      <button [class]=\"GlobalFields.site_details.headerBtnListingPageStyle == 2 ? 'btnFloatingWhite' : 'btnFloating'\" *ngIf=\"GlobalFields.isLoggedIn\" (click)=\"writeReview()\">\n        <i class=\"far fa-comment-alt\"></i>\n      </button>\n      <button [class]=\"GlobalFields.site_details.headerBtnListingPageStyle == 2 ? 'btnFloatingWhite' : 'btnFloating'\" *ngIf=\"GlobalFields.isLoggedIn &&  GlobalFieldsListingPro.selectedListing\">\n        <i class=\"fas fa-heart\" [class.fullHearth]=\"GlobalFieldsListingPro.selectedListing.isBookmarked\" (click)=\"GlobalFieldsListingPro.selectedListing.isBookmarked ? undoBookmark() : doBookmark()\"></i>\n      </button>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n\n<ion-content *ngIf=\"GlobalFieldsListingPro.selectedListing && iniFinished && GlobalFieldsListingPro.selectedListing.post_meta\" class=\"topContent\"  [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\"  dir=\"{{GlobalFields.getLanguageLayout()}}\">\n\n\n\n  <div style=\"position: fixed; height: 90%; z-index: 1; width: 10%\" (swiperight)=\"closeModal()\" (swipeleft)=\"closeModal()\"></div>\n\n<!------------ AIRBNB STYLE ------ ------>\n  <span *ngIf=\"GlobalFields.site_details.listingPageType == 1\">\n    <div swipe-vertical (swipedown)=\"closeModal()\" class=\"postImg\" [style.background]=\"getBackground(GlobalFieldsListingPro.selectedListing)\"></div>\n  </span>\n<!------------END AIRBNB STYLE ------------>\n\n<!------------ LISTINGPRO STYLE ------------>\n\n  <span *ngIf=\"GlobalFields.site_details.listingPageType == 2\">\n      <!--  <div class=\"postImgVertical\" [style.background]=\"getBackgroundDarker(GlobalFieldsListingPro.selectedListing)\"> -->\n        <div class=\"postImgVertical\">\n\n          <img class=\"listingPageImgMyListingCached\" [src]=\"getBackgroundDarkerCached(GlobalFieldsListingPro.selectedListing)\">\n          <!--<img-loader [src]=\"getBackgroundDarkerCached(GlobalFieldsListingPro.selectedListing)\" useImg [imgAttributes]=\"getImgCachedClass('listingPageImgMyListingCached')\"></img-loader> -->\n\n\n          <div class=\"titleInTheMiddle\">\n              <!--logo-->\n            <div *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta && GlobalFieldsListingPro.selectedListing.post_meta.business_logo\" class=\"postLogoImgCentered\"\n                 [style.background]=\"'url(' + GlobalFieldsListingPro.selectedListing.post_meta.business_logo + ')'\"></div>\n\n            <div *ngIf=\"!GlobalFieldsListingPro.selectedListing.post_meta.business_logo\" class=\"postLogoImgCentered\"></div>\n\n            <!-- Title -->\n            <div class=\"\"></div>\n            <div class=\"listingPageTitleWhite\">{{GlobalFieldsListingPro.selectedListing.post_title}} <i class=\"fas fa-check-circle\" *ngIf=\"isClaimed()\" style=\"color: #03A9F4;\"></i> </div>\n\n            <!-- reviews numb-->\n            <br>\n            <span class=\"reviewCounterWhite\" *ngIf=\"!GlobalFieldsListingPro.selectedListing.reviews || GlobalFieldsListingPro.selectedListing.reviews.review_count == 0\">{{ 'NO_REVIEWS' | translate }}</span>\n            <div *ngIf=\"GlobalFieldsListingPro.selectedListing.reviews.review_count && GlobalFieldsListingPro.selectedListing.reviews.review_count > 0\">\n              <span *ngFor=\"let star of getStartsHtml(GlobalFieldsListingPro.selectedListing.reviews.listing_rate)\">\n                <ion-icon name='star{{star}}'style='float: initial; font-size: 20px'></ion-icon>\n              </span>\n              <div class=\"reviewCounterWhite\"> {{GlobalFieldsListingPro.selectedListing.reviews.review_count}} {{ 'REVIEW_REVIEWS' | translate }}</div>\n            </div>\n\n            <br>\n            <!-- Tagline -->\n            <div class=\"listingPageSubtitleWhite\" *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta && GlobalFieldsListingPro.selectedListing.post_meta.tagline_text\">\n              {{GlobalFieldsListingPro.selectedListing.post_meta.tagline_text}}\n            </div>\n\n          </div>\n        </div>\n  </span>\n\n<!------------END MYLISTING STYLE ------------>\n\n\n\n\n  <ion-card-content style=\"padding: 5px; margin-bottom: 100px\">\n\n<!------------ AIRBNB STYLE ------------>\n  <span *ngIf=\"GlobalFields.site_details.listingPageType == 1\">\n      <!--logo-->\n      <div *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.business_logo\" class=\"postLogoImg\"\n           [style.background]=\"'url(' + GlobalFieldsListingPro.selectedListing.post_meta.business_logo + ')'\"></div>\n      <div *ngIf=\"!GlobalFieldsListingPro.selectedListing.post_meta.business_logo\" class=\"postLogoImgPlaceholder\"></div>\n\n      <!-- reviews numb-->\n      <div class=\"reviewsLabelHeader\">\n        <span class=\"reviewCounter\" *ngIf=\"!GlobalFieldsListingPro.selectedListing.reviews || GlobalFieldsListingPro.selectedListing.reviews.review_count == 0\">{{ 'NO_REVIEWS' | translate }}</span>\n        <div *ngIf=\"GlobalFieldsListingPro.selectedListing.reviews.review_count && GlobalFieldsListingPro.selectedListing.reviews.review_count > 0\">\n          <label class=\"reviewsBox\">\n            {{getTruncatedDecimal(GlobalFieldsListingPro.selectedListing.reviews.listing_rate)}}\n            <ion-icon name=\"star\" class=\"starReview\"></ion-icon>\n          </label>\n          <div class=\"reviewCounter\"> {{GlobalFieldsListingPro.selectedListing.reviews.review_count}} {{ 'REVIEW_REVIEWS' | translate }}</div>\n        </div>\n      </div>\n      <div class=\"listingPageType\"></div>\n      <br *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta && GlobalFieldsListingPro.selectedListing.post_meta.business_logo\">\n      <p class=\"listingPageTitle\">{{GlobalFieldsListingPro.selectedListing.post_title}} <i class=\"fas fa-check-circle\" *ngIf=\"isClaimed()\" style=\"color: #03A9F4;\"></i> </p>\n      <div class=\"listingPageSubtitle\" *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta && GlobalFieldsListingPro.selectedListing.post_meta.tagline_text\">\n        {{GlobalFieldsListingPro.selectedListing.post_meta.tagline_text}}\n      </div>\n    </span>\n<!------------END AIRBNB STYLE ------------>\n\n    <div class=\"divisor\" *ngIf=\"showContactInfo() && GlobalFieldsListingPro.selectedListing.post_meta && GlobalFields.isWhiteBackground()\"></div>\n    <div  [className]=\"getClassContainer()\" *ngIf=\"showContactInfo() && (GlobalFieldsListingPro.selectedListing.post_meta.gAddress ||\n    GlobalFieldsListingPro.selectedListing.post_meta.phone || GlobalFieldsListingPro.selectedListing.post_meta.email)\">\n      <b class=\"descriptionTitle\">\n        <i class=\"far fa-address-card faIconGoodPosition\"></i>\n        {{'CONTACT_INFO' | translate}}</b><br><br>\n      <ion-row *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.gAddress\">\n        <div class=\" iconCircleBox\">\n          <i class=\"fas fa-map-marker-alt\"></i>\n        </div>\n          <p class=\"labelHeader\">\n              <a (click)=\"goToNavigatorAction(GlobalFieldsListingPro.selectedListing.post_meta.gAddress)\"  style=\"width: 100%; color: inherit; \">\n\n              {{GlobalFieldsListingPro.selectedListing.post_meta.gAddress}}\n            </a>\n          </p>\n      </ion-row>\n      <ion-row  *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.phone\">\n        <div class=\"iconCircleBox\">\n          <i class=\"fas fa-phone\"></i>\n        </div>\n          <p  class=\"labelHeader\" (click)=\"callNumberAction(GlobalFieldsListingPro.selectedListing.post_meta.phone)\">{{GlobalFieldsListingPro.selectedListing.post_meta.phone}}</p>\n      </ion-row>\n      <ion-row *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.email\">\n          <div class=\" iconCircleBox\">\n            <i class=\"fas fa-envelope\"></i>\n          </div>\n          <p class=\"labelHeader\">\n            <a (click)=\"openLink('mailto:' + GlobalFieldsListingPro.selectedListing.post_meta.email + '?Subject=My%20Custom%20Subject')\" style=\"width: 100%; color: inherit; \">\n              {{GlobalFieldsListingPro.selectedListing.post_meta.email}}\n            </a>\n          </p>\n      </ion-row>\n    </div>\n\n\n    <!-- Category -->\n    <div class=\"divisor\" *ngIf=\"GlobalFieldsListingPro.selectedListing.category &&  GlobalFields.isWhiteBackground()\" ></div>\n    <div [className]=\"getClassContainer()\" *ngIf=\"GlobalFieldsListingPro.selectedListing.category\">\n      <b class=\"descriptionTitle\">\n        <i class=\"far fa-bookmark faIconGoodPosition\"></i>\n        {{'CATEGORIES' | translate}}\n      </b>\n      <div  class=\"listCategories\">\n        <span style=\"font-size: 9pt\">\n          <i *ngIf=\"!GlobalFieldsListingPro.selectedListing.category.icon1\" class=\"fas fa-bookmark iconCircleBoxCatRegions\" dir=\"{{GlobalFields.getLanguageLayout()}}\"></i>\n          <img *ngIf=\"GlobalFieldsListingPro.selectedListing.category.icon1\" src=\"{{GlobalFieldsListingPro.selectedListing.category.icon1}}\" class=\"iconImgBoxCatRegions\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n          {{GlobalFieldsListingPro.selectedListing.category.name}}\n        </span>\n      </div>\n    </div>\n\n\n    <!-- Regions -->\n    <div class=\"divisor\" *ngIf=\"GlobalFieldsListingPro.selectedListing.location && GlobalFieldsListingPro.selectedListing.location.length>0 && GlobalFields.isWhiteBackground()\"></div>\n    <div [className]=\"getClassContainer()\" *ngIf=\"GlobalFieldsListingPro.selectedListing.location && GlobalFieldsListingPro.selectedListing.location.length>0\">\n      <b class=\"descriptionTitle\">\n        <i class=\"fas fa-map-marker faIconGoodPosition\"></i>\n        {{'REGIONS' | translate}}\n      </b>\n      <div class=\"listCategories\">\n          <span *ngFor=\"let region of GlobalFieldsListingPro.selectedListing.location\"  style=\"font-size: 9pt\">\n            <i *ngIf=\"!region.icon\" class=\"fas fa-map-marker iconCircleBoxCatRegions\" dir=\"{{GlobalFields.getLanguageLayout()}}\"></i>\n            <i *ngIf=\"region.icon\" class=\"{{region.icon + ' iconCircleBoxCatRegions'}} \" dir=\"{{GlobalFields.getLanguageLayout()}}\"></i>\n            {{region.name}}\n          </span>\n      </div>\n    </div>\n\n\n    <div class=\"divisor\" *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta && GlobalFields.isWhiteBackground()\"></div>\n\n    <div  [className]=\"getClassContainer()\" *ngIf=\"GlobalFieldsListingPro.selectedListing.post_content\">\n     <b class=\"descriptionTitle\">\n       <i class=\"fas fa-align-left faIconGoodPosition\"></i>\n       {{ 'DESCRIPTION' | translate }}</b><br>\n      <p class=\"description\" [innerHTML]=\"GlobalFieldsListingPro.selectedListing.post_content\"></p>\n    </div>\n\n    <!-- Gallery -->\n    <div class=\"divisor\" *ngIf=\"GlobalFieldsListingPro.selectedListing.gallery && GlobalFieldsListingPro.selectedListing.gallery.main.length>0 && GlobalFields.isWhiteBackground()\"></div>\n    <div [className]=\"getClassContainer()\"  *ngIf=\"GlobalFieldsListingPro.selectedListing.gallery.main && GlobalFieldsListingPro.selectedListing.gallery.main.length>0\">\n      <div class=\"sliderWithCSS\">\n        <div *ngFor=\"let media of GlobalFieldsListingPro.selectedListing.gallery.main; let i = index\" class=\"galleryImg\" [style.background]=\"'url(' +media.full+')'\" (click)=\"openImgPopover(media.full)\">\n        </div>\n      </div>\n    </div>\n\n\n    <!-- Video -->\n    <div class=\"divisor\" *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.video && GlobalFields.isWhiteBackground()\"></div>\n    <div [className]=\"getClassContainer()\" *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.video && GlobalFieldsListingPro.selectedListing.post_meta.video!=''\">\n      <b class=\"descriptionTitle\">\n        <i class=\"fab fa-youtube faIconGoodPosition\"></i>\n        Video\n      </b>\n      <div class=\"labelCustomDetails\" style=\"text-align: right\">\n        <a *ngIf=\"!youtubeUrl\" (click)=\"openLink(GlobalFieldsListingPro.selectedListing.post_meta.video)\"> Youtube <i class=\"fas fa-external-link-alt\"></i></a>\n        <iframe *ngIf=\"youtubeUrl\" webkitallowfullscreen mozallowfullscreen allowfullscreen\n                sandbox=\"allow-scripts allow-top-navigation allow-pointer-lock allow-forms allow-same-origin allow-popups\"\n                style=\"width: 100%; height: 100%; border: none\"\n                [src]=\"youtubeUrl\" frameborder=\"0\"></iframe>\n      </div>\n    </div>\n\n\n  <!-- Custom taxonomies\n    <span *ngIf=\"custTaxonomies && custTaxonomies.length>0\">\n      <span *ngFor=\"let custTax of custTaxonomies\">\n        <div class=\"divisor\" *ngIf=\"custTax.show_in_detail_view && GlobalFields.isWhiteBackground()\"></div>\n        <div *ngIf=\"custTax.show_in_detail_view\" [className]=\"getClassContainer()\">\n           <b class=\"descriptionTitle\">\n            {{custTax.label}}\n          </b><br>\n          <div  class=\"listCategories\">\n            <span *ngFor=\"let val of custTax.value\" style=\"font-size: 9pt\">\n              <i *ngIf=\"val.icon\" class=\"{{val.icon + ' iconCircleBoxCatRegions'}} \" dir=\"{{GlobalFields.getLanguageLayout()}}\"></i>\n              <i *ngIf=\"!val.icon\" class=\"fas fa-hashtag iconCircleBoxCatRegions\" dir=\"{{GlobalFields.getLanguageLayout()}}\"></i>\n              {{val.name}}\n            </span>\n          </div>\n        </div>\n      </span>\n    </span>\n    -->\n\n   <!-- Custom Related Listings\n    <span *ngIf=\"custRelatedListings && custRelatedListings.length>0\">\n      <span *ngFor=\"let custRelatedListing of custRelatedListings\">\n        <div class=\"divisor\"></div>\n        <div [className]=\"getClassContainer()\">\n          <b class=\"descriptionTitle\">\n            {{custRelatedListing.label}}\n          </b>\n          <span *ngFor=\"let listing of custRelatedListing.listings\">\n            <page-listingList [listing]=\"listing\" [type]=\"'2'\"  [search]=\"true\" (click)=\"closeModal()\"></page-listingList>\n          </span>\n          <span *ngIf=\"custRelatedListing.listings.length==0\">\n            0 {{'LISTINGS' | translate}}\n          </span>\n        </div>\n      </span>\n    </span>\n    -->\n\n    <!-- Table of custom fields -->\n    <div class=\"divisor\" *ngIf=\"custFields && custFields.length>0 && GlobalFields.isWhiteBackground()\"></div>\n    <div [className]=\"getClassContainer()\"  *ngIf=\"custFields && custFields.length>0\">\n      <b class=\"descriptionTitle\">\n        <i class=\"fas fa-grip-vertical faIconGoodPosition\"></i>\n        {{ 'DETAILS' | translate }} </b><br><br>\n      <span *ngFor=\"let field of custFields\" >\n        <ion-row  class=\"fontFamily tableRow\">\n          <!-- Not an Html field value -->\n          <ion-col col-4 style=\"text-transform: capitalize; padding-top: 10px;\" *ngIf=\"!isHTML(field.value)\">\n            <span *ngIf=\"field.key!='price'\">{{field.label}}</span>\n            <span *ngIf=\"field.key=='price'\">{{'PRICE' | translate}}</span>\n          </ion-col>\n          <!-- not html -->\n          <ion-col col-8 style=\"text-align: right\" *ngIf=\"!isHTML(field.value)\">\n            <p class=\"labelCustomDetails\" *ngIf=\"!isArray(field.value)\">\n             {{field.value}}\n            </p>\n            <div class=\"labelCustomDetails\" *ngIf=\"isArray(field.value)\">{{getStringFromArray(field.value)}}</div>\n          </ion-col>\n          <!-- Html field, full width-->\n          <ion-col *ngIf=\"isHTML(field.value)\"  col-12>\n            {{getNiceString(field.key)}} <br><br>\n            <div class=\"labelHTML\" *ngIf=\"isHTML(field.value) && !isURL(field.value)\" [innerHTML]=\"field.value\"></div>\n          </ion-col>\n        </ion-row>\n      </span>\n    </div>\n\n    <!-- Map -->\n    <div class=\"divisor\"  *ngIf=\"fieldToBeShown('job_location') && GlobalFieldsListingPro.selectedListing.post_meta.gAddress && showContactInfo() && GlobalFields.isWhiteBackground()\"></div>\n    <div [className]=\"getClassContainer()\" *ngIf=\"fieldToBeShown('job_location') && GlobalFieldsListingPro.selectedListing.post_meta.gAddress && showContactInfo()\">\n      <a (click)=\"goToNavigatorAction(GlobalFieldsListingPro.selectedListing.post_meta.gAddress)\">\n        <b class=\"descriptionTitle\">\n          <i class=\"fas fa-map-marked-alt faIconGoodPosition\"></i>\n          {{ 'WHERE' | translate }}\n          <span style=\"float: right; font-weight: 200; font-size: small; margin-right: 10px\"> {{ 'GET_DIRECTIONS' | translate }}</span>\n        </b><br><br>\n        <img *ngIf=\"Constants.GoogleMapsKEY && Constants.GoogleMapsKEY != ''\" src=\"{{'https://maps.googleapis.com/maps/api/staticmap?center=' + GlobalFieldsListingPro.selectedListing.post_meta.gAddress +'&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7Clabel:%7C' + GlobalFieldsListingPro.selectedListing.post_meta.gAddress +'&key=' + Constants.GoogleMapsKEY}}\">\n        <div style=\"text-align: right; color: #484848; font-size: small; margin-top: 10px; margin-right: 10px\">{{GlobalFieldsListingPro.selectedListing.post_meta.gAddress}}</div>\n      </a>\n    </div>\n\n    <!-- Working hours -->\n    <div class=\"divisor\" *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.business_hours && GlobalFields.isWhiteBackground()\"></div>\n    <div  [className]=\"getClassContainer()\" *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.business_hours\">\n      <b class=\"descriptionTitle\">\n        <i class=\"far fa-clock faIconGoodPosition\"></i>\n        {{ 'WORK_HOURS' | translate }} </b><br><br>\n      <ion-row *ngFor=\"let day of daysOfTheWeek; let i = index\" class=\"fontFamily tableRow\">\n        <ion-col col-4 style=\"text-transform: capitalize;\">\n          {{daysOfTheWeekLabel[i]}}\n        </ion-col>\n        <ion-col col-8 style=\"text-align: right\">\n          <span *ngIf=\"!GlobalFieldsListingPro.selectedListing.post_meta.business_hours[day]\">{{ 'CLOSED_DAY' | translate }}</span>\n          <span *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.business_hours[day]\">\n            <div>{{GlobalFieldsListingPro.selectedListing.post_meta.business_hours[day].open}} - {{GlobalFieldsListingPro.selectedListing.post_meta.business_hours[day].close}}</div>\n           </span>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <!-- tags -->\n    <div class=\"divisor\" *ngIf=\"GlobalFieldsListingPro.selectedListing.tag && GlobalFieldsListingPro.selectedListing.tag.length>0 && GlobalFields.isWhiteBackground()\" ></div>\n    <div [className]=\"getClassContainer()\" *ngIf=\"GlobalFieldsListingPro.selectedListing.tag && GlobalFieldsListingPro.selectedListing.tag.length>0\">\n      <b class=\"descriptionTitle\">\n        <i class=\"fas fa-hashtag faIconGoodPosition\"></i>\n        Tags:\n      </b>\n      <div  class=\"listCategories\">\n        <span *ngFor=\"let tag of GlobalFieldsListingPro.selectedListing.tag\" style=\"font-size: 9pt\">\n          <i *ngIf=\"!tag.icon\" class=\"fas fa-hashtag iconCircleBoxCatRegions\" dir=\"{{GlobalFields.getLanguageLayout()}}\"></i>\n          <i *ngIf=\"tag.icon\" class=\"{{tag.icon + ' iconCircleBoxCatRegions'}} \" dir=\"{{GlobalFields.getLanguageLayout()}}\"></i>\n          {{tag.name}}\n        </span>\n      </div>\n    </div>\n\n\n    <!-- features -->\n    <div class=\"divisor\" *ngIf=\"GlobalFieldsListingPro.selectedListing.feature && GlobalFieldsListingPro.selectedListing.feature.length>0 && GlobalFields.isWhiteBackground()\" ></div>\n    <div [className]=\"getClassContainer()\" *ngIf=\"GlobalFieldsListingPro.selectedListing.feature && GlobalFieldsListingPro.selectedListing.feature.length>0\">\n      <b class=\"descriptionTitle\">\n        <i class=\"fas fa-hashtag faIconGoodPosition\"></i>\n        Features:\n      </b>\n      <div  class=\"listCategories\">\n        <span *ngFor=\"let feat of GlobalFieldsListingPro.selectedListing.feature\" style=\"font-size: 9pt\">\n          <i *ngIf=\"!feat.icon\" class=\"fas fa-hashtag iconCircleBoxCatRegions\" dir=\"{{GlobalFields.getLanguageLayout()}}\"></i>\n          <i *ngIf=\"feat.icon\" class=\"{{feat.icon + ' iconCircleBoxCatRegions'}} \" dir=\"{{GlobalFields.getLanguageLayout()}}\"></i>\n          {{feat.name}}\n        </span>\n      </div>\n    </div>\n\n    <!-- Comments Bubble -->\n    <div class=\"divisor\" *ngIf=\"GlobalFieldsListingPro.selectedListing.reviews && GlobalFieldsListingPro.selectedListing.reviews.reviews && GlobalFieldsListingPro.selectedListing.reviews.reviews.length>0 && GlobalFields.isWhiteBackground()\"></div>\n    <div  [className]=\"getClassContainer()\" *ngIf=\"GlobalFields.site_details.reviewStyle == 1 &&  GlobalFieldsListingPro.selectedListing.reviews.reviews && GlobalFieldsListingPro.selectedListing.reviews.reviews.length>0\" class=\"listCategories\">\n      <b class=\"descriptionTitle\">\n        <i class=\"far fa-star faIconGoodPosition\"></i>\n        {{ 'REVIEWS' | translate }}\n      </b>\n      <div style=\"max-height: 300px; overflow-y: auto;\">\n        <ion-grid *ngFor=\"let comm of GlobalFieldsListingPro.selectedListing.reviews.reviews\">\n          <ion-row>\n            <div col-2 style=\"width: 60px\">\n              <img src=\"{{comm.author_image}}\" style=\"height: 50px; width: 50px; border-radius: 50px; vertical-align: middle;\">\n            </div>\n            <ion-col col-6 style=\"text-transform: capitalize;\">\n              <div class=\"listingTitle\">{{comm.author_name}}</div>\n              <div class=\"listingLocation\">{{comm.post_date}}</div>\n            </ion-col>\n            <ion-col col-4 style=\"text-align: right\">\n              <label class=\"reviewsBox\" style=\"position: inherit\">\n                {{comm.rating['general_rating']}}\n                <ion-icon name=\"star\" class=\"starReview\"></ion-icon>\n              </label>\n               <ion-button *ngIf=\"comm.rating && hasMultipleRatings(comm.rating)\"  fill=\"clear\" class=\"btnRatings\"  (click)=\"openRatingsPopover($event, comm.rating)\"><i class=\"fas fa-chevron-down\"></i></ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"fontFamily\">\n            <ion-col col-12>\n              <div class=\"speech-bubble\">\n                <div class=\"commentBox\">\n                  <b *ngIf=\"comm.post_title\">{{comm.post_title}} <br></b>\n                  {{comm.post_content}}\n                </div>\n                <img class=\"imgComments\" *ngFor=\"let img of comm.gallery\" src=\"{{img.full}}\" (click)=\"openImgPopover(img.full)\">\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n\n    <!-- Comments Card-->\n    <div  [className]=\"getClassContainer()\" *ngIf=\"GlobalFields.site_details.reviewStyle != 1 &&  GlobalFieldsListingPro.selectedListing.reviews &&  GlobalFieldsListingPro.selectedListing.reviews.reviews && GlobalFieldsListingPro.selectedListing.reviews.reviews.length>0\" class=\"listCategories\">\n      <b class=\"descriptionTitle\">\n        <i class=\"far fa-star faIconGoodPosition\"></i>\n        {{ 'REVIEWS' | translate }}\n      </b>\n      <div style=\"max-height: 300px; overflow-y: auto;\">\n        <ion-grid *ngFor=\"let comm of GlobalFieldsListingPro.selectedListing.reviews.reviews\" class=\"cardReview\">\n          <ion-row>\n            <div col-2 style=\"width: 60px\">\n              <img src=\"{{comm.author_image}}\" style=\"height: 50px; width: 50px; border-radius: 50px; vertical-align: middle;\">\n            </div>\n            <ion-col col-6 style=\"text-transform: capitalize;\">\n              <div class=\"listingTitle\">{{comm.author_name}}</div>\n              <div class=\"listingLocation\">{{comm.post_date}}</div>\n            </ion-col>\n            <ion-col col-4 style=\"text-align: right\">\n              <label class=\"reviewsBox\" style=\"position: inherit\">\n                {{comm.rating['general_rating']}}\n                <ion-icon name=\"star\" class=\"starReview\"></ion-icon>\n              </label>\n              <ion-button *ngIf=\"comm.rating && hasMultipleRatings(comm.rating)\"  fill=\"clear\" class=\"btnRatings\"  (click)=\"openRatingsPopover($event, comm.rating)\"><i class=\"fas fa-chevron-down\"></i></ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"fontFamily\">\n\n            <ion-col col-12>\n              <div>\n                <div class=\"commentBoxCard\">\n                  <b *ngIf=\"comm.post_title\">{{comm.post_title}} <br></b>\n                  {{comm.post_content}}\n                </div>\n              </div>\n              <img class=\"imgComments\" *ngFor=\"let img of comm.gallery\" src=\"{{img.full}}\" (click)=\"openImgPopover(img.full)\">\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n\n      <!-- Write a review button -->\n      <div style=\"width: 100%; margin-top: 10px; display: flex;\">\n        <button class=\"addReview\" *ngIf=\"GlobalFields.isLoggedIn\"  (click)=\"writeReview()\" >\n          <i class=\"far fa-star\"></i> {{'WRITE_REVIEW' | translate}}\n        </button>\n        <button class=\"addReview\" *ngIf=\"!GlobalFields.isLoggedIn\" (click)=\"goToLogin()\" >\n          <i class=\"far fa-star\"></i> {{'WRITE_REVIEW' | translate}}\n        </button>\n      </div>\n\n    </div>\n\n\n\n    <!-- Lead form -->\n    <div class=\"divisor\" *ngIf=\"GlobalFieldsListingPro.selectedListing.lead_gen && GlobalFieldsListingPro.selectedListing.lead_gen.length>0 && GlobalFields.isWhiteBackground()\"></div>\n    <div [className]=\"'leadContainer ' + getClassContainer()\" *ngIf=\"GlobalFieldsListingPro.selectedListing.lead_gen &&  GlobalFieldsListingPro.selectedListing.lead_gen.length>0\" class=\"listCategories\">\n      <b class=\"descriptionTitle\">\n        <i class=\"far fa-envelope faIconGoodPosition\"></i>\n        {{'CONTACT_INFO' | translate}}\n      </b>\n      <div *ngIf=\"!lead_sent\">\n        <ion-grid>\n          <ion-row *ngFor=\"let field of GlobalFieldsListingPro.selectedListing.lead_gen\" >\n            <div *ngIf=\"field.type!='textarea'\" col-2 style=\"width: 40px; line-height: 50px; text-align: center; font-size: 14pt; color: #909090;\">\n              <i *ngIf=\"field.name=='name7'\" class=\"fas fa-user\"></i>\n              <i *ngIf=\"field.name=='phone7'\" class=\"fas fa-phone\"></i>\n              <i *ngIf=\"field.type=='email'\" class=\"fas fa-envelope\"></i>\n              <i *ngIf=\"field.type=='textarea'\" class=\"far fa-comment-dots\"></i>\n              <i *ngIf=\"field.type!='phone7' && field.type!='name7' && field.type!='email'\" class=\"fas fa-pencil\"></i>\n              <span *ngIf=\"field.required==''\"> *</span>\n            </div>\n            <ion-col col-10 style=\"text-transform: capitalize;\">\n              <span *ngIf=\"field.type=='text' || field.type=='email'\">\n                <ion-input clearInput placeholder=\"{{field.placeholder}}\" [(ngModel)]=\"lead[field.name]\"></ion-input>\n              </span>\n              <span *ngIf=\"field.type=='textarea'\">\n                <ion-textarea class=\"textareaEditor\" rows=\"5\" cols=\"20\"  placeholder=\"{{field.placeholder}}\" [(ngModel)]=\"lead[field.name]\"></ion-textarea>\n              </span>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n        <div style=\"text-align: center\">\n          <button class=\"addReview\" (click)=\"sendLead()\" [disabled]=\"checkIfFieldsMissing()\">\n            <i class=\"far fa-paper-plane\"></i> Send\n          </button>\n        </div>\n\n      </div>\n      <div *ngIf=\"lead_sent\" style=\"text-align: center\">\n        <i class=\"fas fa-check-circle\" style=\"font-size: 48pt; padding: 30px; color: #64c28d;\"></i>\n      </div>\n\n    </div>\n\n\n    <!-- FAQs -->\n    <div class=\"divisor\" *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.faqs && GlobalFieldsListingPro.selectedListing.post_meta.faqs.faq.length>0 && GlobalFields.isWhiteBackground()\"></div>\n    <div  [className]=\"getClassContainer()\" *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.faqs && GlobalFieldsListingPro.selectedListing.post_meta.faqs.faq.length>0\">\n      <b class=\"descriptionTitle\">\n        <i class=\"far fa-clock faIconGoodPosition\"></i>\n        FAQs </b><br><br>\n      <ion-row *ngFor=\"let faq of GlobalFieldsListingPro.selectedListing.post_meta.faqs.faq; let i = index\" class=\"fontFamily tableRow\">\n        <div class=\"accordionContainer\">\n          <button class=\"accordion\" (click)=\"selectFAQIndex(i)\">{{faq}}</button>\n          <div class=\"panel\" [class.accordionOpen]=\"selectedAccoIndex==i\">\n            <p>{{GlobalFieldsListingPro.selectedListing.post_meta.faqs.faqans[i]}}</p>\n          </div>\n        </div>\n      </ion-row>\n    </div>\n\n\n    <!-- Related Ads listings -->\n    <div class=\"divisor\" *ngIf=\"related_ads_listing && related_ads_listing.length>0 && GlobalFields.isWhiteBackground()\"></div>\n    <div  class=\"sectionContainer\" *ngIf=\"related_ads_listing && related_ads_listing.length>0\">\n      <b class=\"descriptionTitle\">\n        Ads\n      </b>\n      <div *ngFor=\"let listing of related_ads_listing;  let i = index\" style=\"margin:5px\">\n        <listingList_LP [listing]=\"listing\" [type]=\"'2'\"  [search]=\"true\" (click)=\"closeModal()\"></listingList_LP>\n      </div>\n    </div>\n\n    <!-- Related Recent listings -->\n    <div class=\"divisor\" *ngIf=\"related_recent_listing && related_recent_listing.length>0 && GlobalFields.isWhiteBackground()\"></div>\n    <div  class=\"sectionContainer\" *ngIf=\"related_recent_listing && related_recent_listing.length>0\">\n      <b class=\"descriptionTitle\">\n        {{'RECENT' | translate}}\n      </b>\n      <div *ngFor=\"let listing of related_recent_listing;  let i = index\" style=\"margin:5px\">\n        <listingList_LP [listing]=\"listing\" [type]=\"'2'\"  [search]=\"true\" (click)=\"closeModal()\"></listingList_LP>\n      </div>\n    </div>\n\n  </ion-card-content>\n\n\n</ion-content>\n\n\n\n\n\n\n<ion-footer style=\"background-color: white !important; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);\" *ngIf=\"showContactInfo()\"   dir=\"{{GlobalFields.getLanguageLayout()}}\">\n  <ion-toolbar  style=\"background-color: white !important;\">\n      <div *ngIf=\"GlobalFieldsListingPro.selectedListing && iniFinished\" style=\"display: inline-flex; width: 100%;list-style-type: none; padding-bottom:10px; white-space: nowrap; overflow-x: auto; overflow-y: hidden; -webkit-overflow-scrolling: touch;\">\n\n        <!-- Fast btns -->\n        <span style=\"display: inline-flex;\" [class.fastBtnPaddingLeft]=\"GlobalFields.site_details.showDirectMessageBtn && GlobalFields.getLanguageLayout() =='ltr'\" [class.fastBtnPaddingRight]=\"GlobalFields.site_details.showDirectMessageBtn && GlobalFields.getLanguageLayout() =='rtl'\">\n          <div [className]=\"getActionContainerClass()\" *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.website\" [style.background-color] = \"GlobalFields.site_details.actionButtonStyle=='2' ? 'white' : '#2ba3ff'\">\n            <a (click)=\"openLink(GlobalFieldsListingPro.selectedListing.post_meta.website)\">\n              <i class=\"fas fa-globe\" style=\"color: #2ba3ff\"></i>\n              <!-- <img src=\"../../assets/imgs/social_icons/envelope.svg\" style=\"height: 40px;\"/> -->\n              <span [className]=\"getActionLabelClass()\"> Website</span>\n            </a>\n          </div>\n          <div [className]=\"getActionContainerClass()\" *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.email\" [style.background-color] = \"GlobalFields.site_details.actionButtonStyle=='2' ? 'white' : '#FFC107'\">\n            <a (click)=\"openLink('mailto:' + GlobalFieldsListingPro.selectedListing.post_meta.email + '?Subject=My%20Custom%20Subject')\">\n              <i class=\"fas fa-envelope\" style=\"color: #FFC107\"></i>\n              <span [className]=\"getActionLabelClass()\"> Email</span>\n            </a>\n          </div>\n          <div [className]=\"getActionContainerClass()\" *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.whatsapp && GlobalFields.site_details.showWhatsappBtn\" [style.background-color] = \"GlobalFields.site_details.actionButtonStyle=='2' ? 'white' : '#25d366'\">\n            <a (click)=\"openLink('https://wa.me/' + clearSpaces(GlobalFieldsListingPro.selectedListing.post_meta.whatsapp))\">\n              <i class=\"fab fa-whatsapp\" style=\"color: #25d366\"></i>\n              <!-- <img src=\"../../assets/imgs/social_icons/whatsapp.svg\" style=\"height: 40px;\"/> -->\n              <span [className]=\"getActionLabelClass()\"> WhatsApp</span>\n            </a>\n          </div>\n          <div [className]=\"getActionContainerClass()\" *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.phone\" (click)=\"callNumberAction(GlobalFieldsListingPro.selectedListing.post_meta.phone)\" [style.background-color] = \"GlobalFields.site_details.actionButtonStyle=='2' ? 'white' : '#E91E63'\">\n            <i class=\"fas fa-phone\" style=\"color: #E91E63\"></i>\n            <!-- <img src=\"../../assets/imgs/social_icons/phone-call.svg\" style=\"height: 40px;\"/> -->\n            <span [className]=\"getActionLabelClass()\"> {{'CALL' | translate}}</span>\n          </div>\n\n          <div [className]=\"getActionContainerClass()\" *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.gAddress\" (click)=\"goToNavigatorAction(GlobalFieldsListingPro.selectedListing.post_meta.gAddress)\" [style.background-color] = \"GlobalFields.site_details.actionButtonStyle=='2' ? 'white' : '#03A9F4'\">\n              <i class=\"fas fa-map-marker-alt\" style=\"color: #03A9F4\"></i>\n              <span  [className]=\"getActionLabelClass()\" > {{'GO' | translate}}</span>\n          </div>\n          <div *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.facebook\" style=\"display: flex;\">\n            <div [className]=\"getActionContainerClass()\" [style.background-color] = \"GlobalFields.site_details.actionButtonStyle=='2' ? 'white' : getLinkColor('Facebook')\">\n              <a (click)=\"openLink(GlobalFieldsListingPro.selectedListing.post_meta.facebook)\" [style.color]=\"getLinkColor('Facebook')\">\n               <i class=\"{{getLinkIcon('Facebook')}}\"></i>\n               <span [className]=\"getActionLabelClass()\"> Facebook</span>\n              </a>\n            </div>\n          </div>\n          <div *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.instagram\" style=\"display: flex;\">\n            <div [className]=\"getActionContainerClass()\" [style.background-color] = \"GlobalFields.site_details.actionButtonStyle=='2' ? 'white' : getLinkColor('Instagram')\">\n              <a (click)=\"openLink(GlobalFieldsListingPro.selectedListing.post_meta.instagram)\" [style.color]=\"getLinkColor('Instagram')\">\n               <i class=\"{{getLinkIcon('Instagram')}}\"></i>\n               <span [className]=\"getActionLabelClass()\"> Instagram</span>\n              </a>\n            </div>\n          </div>\n          <div *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.twitter\" style=\"display: flex;\">\n            <div [className]=\"getActionContainerClass()\" [style.background-color] = \"GlobalFields.site_details.actionButtonStyle=='2' ? 'white' : getLinkColor('Twitter')\">\n              <a (click)=\"openLink(GlobalFieldsListingPro.selectedListing.post_meta.twitter)\" [style.color]=\"getLinkColor('Twitter')\">\n               <i class=\"{{getLinkIcon('Twitter')}}\"></i>\n               <span [className]=\"getActionLabelClass()\"> Twitter</span>\n              </a>\n            </div>\n          </div>\n          <div *ngIf=\"GlobalFieldsListingPro.selectedListing.post_meta.linkedin\" style=\"display: flex;\">\n            <div [className]=\"getActionContainerClass()\" [style.background-color] = \"GlobalFields.site_details.actionButtonStyle=='2' ? 'white' : getLinkColor('Linkedin')\">\n              <a (click)=\"openLink(GlobalFieldsListingPro.selectedListing.post_meta.linkedin)\" [style.color]=\"getLinkColor('Linkedin')\">\n               <i class=\"{{getLinkIcon('linkedin')}}\"></i>\n                <!-- <img src=\"../../assets/imgs/social_icons/{{getLinkIcon(link.network)}}.svg\" style=\"height: 40px;\"/> -->\n               <span [className]=\"getActionLabelClass()\"> Linkedin</span>\n              </a>\n            </div>\n          </div>\n        </span>\n\n\n\n      </div>\n  </ion-toolbar>\n</ion-footer>\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/listingPage/modalWriteReview/modalWriteReview_LP.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/listingPage/modalWriteReview/modalWriteReview_LP.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header dir=\"{{GlobalFields.getLanguageLayout()}}\" style=\"background-color: white; border: none; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);\">\n  <ion-toolbar  class=\"toolbarHeader\">\n    <div class=\"headerContainer\">\n      <div class=\"headerCol1\">\n        <ion-icon name=\"close\" style=\"font-size: 20px; margin: 3px;\" (click)=\"closeModal()\"></ion-icon>\n      </div>\n      <div class=\"headerCol2\">\n        <h3 style=\"margin: 0\">{{'WRITE_REVIEW' | translate}}</h3>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding dir=\"{{GlobalFields.getLanguageLayout()}}\">\n\n  <div style=\"padding: 15px; margin-top: 15px\">\n\n    <!-- Stars chooser-->\n    <div *ngFor=\"let field of customFieldsStars\"  style=\"margin-bottom: 15px;\">\n      <ion-label position=\"floating\">{{field.label}}</ion-label><br>\n      <span *ngFor=\"let star of getStartsHtml(field.value); let i = index\">\n      <i [class]=\"star\" style='float: initial; font-size: 20px' (click)=\"field.value = i+1\"></i>\n    </span>\n    </div>\n\n    <div  style=\"margin-bottom: 15px;\">\n      <ion-label position=\"floating\">Title</ion-label>\n      <ion-input placeholder=\"Title\" [(ngModel)]=\"title\" type=\"text\"  style=\"border-bottom: solid 1px #d2d2d2; background-color: #f7f7f7; border-radius: 5px; padding: 5px;\"></ion-input>\n    </div>\n\n    <div  style=\"margin-bottom: 15px;\">\n      <ion-label position=\"floating\">{{'YOUR_MESSAGE' | translate}}</ion-label>\n      <ion-textarea placeholder=\"{{'YOUR_MESSAGE' | translate}}\" [(ngModel)]=\"comment\" rows=\"6\" autoGrow=\"true\" spellcheck=\"true\"  style=\"border-bottom: solid 1px #d2d2d2; background-color: #f7f7f7; border-radius: 5px; padding: 5px; min-height: 100px;\"></ion-textarea>\n    </div>\n\n    <span *ngIf=\"errorMgs\" style=\"color: #c61a42;\">{{errorMgs}}</span>\n    <br *ngIf=\"errorMgs\">\n    <br *ngIf=\"errorMgs\">\n\n\n    <ion-label position=\"floating\">{{'PHOTO' | translate}}</ion-label>\n    <div *ngIf=\"gallery\">\n      <span *ngFor=\"let img of gallery; let i = index\">\n        <img class=\"reviewImg\"  src=\"{{img.full}}\">\n        <i class=\"far fa-trash-alt\" style=\"color: #e43854\" (click)=\"deleteOldImg(i)\"></i>\n      </span>\n    </div>\n    <div style=\"display: inline\">\n      <div class=\"imgContainerInline\" *ngFor=\"let img of new_gallery; let i = index\">\n        <img [src]=\"img\" class=\"newReviewImg\">\n        <i class=\"far fa-trash-alt\" style=\"color: #e43854\" (click)=\"deleteNewImg(i)\"></i>\n      </div>\n    </div>\n\n    <br>\n    <ion-button (click)=\"openImagePicker()\"><i class=\"fas fa-plus\"></i></ion-button>\n    <br>\n\n    <br><br>\n\n    <button class=\"btnSendReview\"  [ngStyle]=\"GlobalFields.getPrimaryColorBackgroundJson()\" (click)=\"postAReview()\">\n      <span style=\"color: white\"><i class=\"far fa-comment-alt\" style=\"margin-right: 15px; text-transform: unset;\"></i> {{'WRITE_REVIEW' | translate}}</span>\n    </button>\n\n    <br><br>\n  </div>\n</ion-content>\n\n<!--\n<ion-footer  style=\"display: inline-flex;  padding: 5px; padding-top: 10px; border-top: solid #dbdbdb 1px; padding-bottom: 25px; box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px !important;\"   dir=\"{{GlobalFields.getLanguageLayout()}}\">\n  <ion-button color=\"success\" style=\"width: 100%; border-radius:5px; font-size: 18px; margin-left: 5px; font-weight: 600;\" (click)=\"postAReview();\">\n    <i class=\"far fa-comment-alt\" style=\"margin-right: 15px; text-transform: unset;\"></i>   {{'WRITE_REVIEW' | translate}}\n  </ion-button>\n</ion-footer>\n\n-->\n");

/***/ }),

/***/ "./src/app/ListingPro/home/modalGenericSearch/modal-generic-search_LP.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/ListingPro/home/modalGenericSearch/modal-generic-search_LP.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".iconType {\n  font-size: 13pt;\n  background-color: #f1f1f1 !important;\n  border-radius: 10px;\n  height: 35px;\n  text-align: center;\n  line-height: 40px;\n  width: 35px;\n  color: #3a3a3a;\n}\n\n.imageCacheGeneralSearch {\n  width: 35px;\n  height: 35px;\n  background-position: center !important;\n  background-size: cover !important;\n  -webkit-background-size: cover !important;\n  -moz-background-size: cover !important;\n  -o-background-size: cover !important;\n  border-radius: 5px;\n  background-color: #f1f1f1;\n  position: relative;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTGlzdGluZ1Byby9ob21lL21vZGFsR2VuZXJpY1NlYXJjaC9DOlxcbGlzdFxcaW9uaWNcXGlvbmljLWFwcC9zcmNcXGFwcFxcTGlzdGluZ1Byb1xcaG9tZVxcbW9kYWxHZW5lcmljU2VhcmNoXFxtb2RhbC1nZW5lcmljLXNlYXJjaF9MUC5zY3NzIiwic3JjL2FwcC9MaXN0aW5nUHJvL2hvbWUvbW9kYWxHZW5lcmljU2VhcmNoL21vZGFsLWdlbmVyaWMtc2VhcmNoX0xQLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSxpQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esc0NBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9MaXN0aW5nUHJvL2hvbWUvbW9kYWxHZW5lcmljU2VhcmNoL21vZGFsLWdlbmVyaWMtc2VhcmNoX0xQLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvblR5cGV7XG4gIGZvbnQtc2l6ZTogMTNwdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjQxLCAyNDEpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgd2lkdGg6IDM1cHg7XG4gIGNvbG9yOiAjM2EzYTNhO1xufVxuXG4uaW1hZ2VDYWNoZUdlbmVyYWxTZWFyY2h7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiIsIi5pY29uVHlwZSB7XG4gIGZvbnQtc2l6ZTogMTNwdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAzNXB4O1xuICBjb2xvcjogIzNhM2EzYTtcbn1cblxuLmltYWdlQ2FjaGVHZW5lcmFsU2VhcmNoIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = (".toolbar-background {\n  background-color: white;\n}\n\n.social-cards ion-col {\n  background-color: transparent !important;\n}\n\n.searchText {\n  color: #9E9E9E;\n}\n\n.inputSearchText {\n  color: black;\n}\n\n.section {\n  padding: 5px;\n  margin: 15px;\n  margin-bottom: 45px;\n}\n\n.titleSection {\n  font-size: 16pt;\n  height: 50px;\n}\n\n.regionTitle {\n  height: 150px;\n  text-align: center;\n  line-height: 140px;\n  background-color: rgba(45, 45, 45, 0.54);\n  border-radius: 5px;\n  color: white;\n  font-size: 16pt;\n  font-weight: 900;\n  width: 100%;\n  background-position: center !important;\n  background-size: cover !important;\n}\n\n.horizontalList {\n  overflow-x: auto;\n  display: inline-flex;\n  width: 100%;\n}\n\n.rowListType {\n  background: white;\n  margin: 5px;\n  margin-bottom: 10px;\n  border-radius: 5px;\n  height: 90px;\n}\n\n.listingAddressLittle {\n  margin: 0px;\n  font-size: 7pt;\n  color: #979797;\n  max-height: 30px;\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  -webkit-line-clamp: 1 !important;\n  display: -webkit-box !important;\n  visibility: visible;\n}\n\n.divHorizontalList {\n  width: 50% !important;\n  max-width: none !important;\n  margin: 5px;\n}\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n  margin: -5px;\n}\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 10pt;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n\n.social-cards ion-col {\n  padding: 0;\n  background-color: #f3f5f8;\n}\n\n.imgList {\n  height: 100px;\n  border-radius: 5px;\n}\n\n.imgTypes {\n  -o-object-fit: cover !important;\n     object-fit: cover !important;\n  border-radius: 5px;\n}\n\n.centralArrow {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.totalPageBackImg {\n  background: url(https://cdn-images-1.medium.com/max/1600/0*I-sI3u34g0ydRqyA);\n  position: relative;\n  width: 100%;\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  height: 100%;\n  background-position: center !important;\n  background-size: cover !important;\n  margin-bottom: 20px;\n  padding-bottom: 50px;\n}\n\n.totalPageBackImg::after {\n  content: \"\";\n  background: black;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0.2;\n}\n\n.borderList {\n  /*border: 1px solid #f0f0f0;*/\n  border: none;\n  border-radius: 5px;\n}\n\n.boxShadowList {\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);\n}\n\n.backImgBigger {\n  width: 100%;\n  height: 150px;\n  background-position: center !important;\n  background-size: cover !important;\n  overflow: hidden;\n  position: relative;\n}\n\n.backImgList {\n  width: 100%;\n  height: 90px;\n  background-position: center !important;\n  background-size: cover !important;\n  border-radius: 5px 0 0 5px;\n  overflow: hidden;\n}\n\n.backImgList[dir=ltr] {\n  margin-right: -25px;\n}\n\n.imgRTLList {\n  background: url(//i0.wp.com/danceup.dance/wp-content/uploads/listing-uploads/gallery/2019/12/imgListing-6.jpeg);\n  width: 100%;\n  height: 90px;\n  background-position: center !important;\n  background-size: cover !important;\n  border-radius: 0 5px 5px 0;\n  cursor: pointer;\n}\n\n/*White background*/\n\n.backImg {\n  width: 100%;\n  height: 100px;\n  border-radius: 5px;\n  background-position: center !important;\n  background-size: cover !important;\n  overflow: hidden;\n}\n\n.backImgLittle {\n  width: 100%;\n  height: 80px;\n  border-radius: 5px;\n  background-position: center !important;\n  background-size: cover !important;\n  overflow: hidden;\n}\n\n.backImgSquaredAndLogo {\n  width: 100%;\n  height: 130px;\n  background-color: black;\n  position: relative;\n  overflow: hidden;\n}\n\n.backImgSquared {\n  width: 100px;\n  height: 100px;\n  background-position: center !important;\n  background-size: cover !important;\n  border-radius: 5px;\n}\n\n.backImgLogo {\n  background-size: 100% !important;\n  height: 50px;\n  background-repeat: no-repeat !important;\n  background-position: center !important;\n}\n\n.backImgLogo2 {\n  background-size: 100% !important;\n  background-repeat: no-repeat !important;\n  background-position: center !important;\n  position: relative;\n  top: 10%;\n  left: 25%;\n  display: flow-root;\n  height: 100px;\n  z-index: 4;\n  width: 50%;\n}\n\n.postImg {\n  width: 100%;\n  height: 300px;\n  background-position: center !important;\n  background-size: cover !important;\n}\n\n.homeTypeLabel {\n  padding: 5px;\n  font-size: 12pt;\n  color: black;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin: 0;\n}\n\n.basicSearchContainer {\n  padding: 20px;\n  z-index: 9;\n  background-color: white;\n  position: relative;\n  top: 10%;\n  margin: 15px;\n  border-radius: 5px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.imgLogoHorizontal {\n  width: 50%;\n  height: auto;\n  margin-left: 25%;\n  z-index: 9;\n  position: relative;\n  margin-top: 60px;\n  margin-bottom: -25px;\n}\n\n.typeTitle {\n  overflow: hidden !important;\n  text-overflow: ellipsis !important;\n  padding: 0;\n  text-align: initial;\n}\n\n.btnLight {\n  /* border: solid 1px #4392ff;*/\n  border-radius: 10px;\n  float: right;\n  /*padding: 10px;*/\n}\n\n.reviewCounterLittle {\n  color: #6b6b6b;\n  font-size: 9pt;\n  font-weight: 400;\n  float: right;\n  line-height: 1;\n  text-transform: none !important;\n}\n\n.reviewCounterLittleList {\n  color: #6b6b6b;\n  font-weight: 400;\n  line-height: 1;\n  font-size: 8pt;\n  margin-top: 5px;\n  text-transform: none !important;\n}\n\n.reviewCounterLittleList[dir=rtl] {\n  float: left;\n}\n\n.reviewCounterLittleList[dir=ltr] {\n  float: right;\n}\n\n.reviewScoreLittle {\n  font-size: 11pt;\n  font-weight: bolder;\n  float: left;\n  line-height: 1.7;\n  text-transform: none !important;\n}\n\n.reviewScoreLittleList {\n  font-size: 10pt;\n  font-weight: bolder;\n  float: left;\n  line-height: 1.7;\n  text-transform: none !important;\n}\n\n.starReview {\n  font-size: medium;\n  margin-left: 2px;\n  margin-right: 5px;\n  color: #ffc106 !important;\n  position: relative;\n  top: 2px;\n}\n\n.starReviewList {\n  font-size: medium;\n  margin-left: 2px;\n  margin-right: 5px;\n  color: #ffc106 !important;\n  position: relative;\n  top: 1px;\n}\n\nstarReviewAirbnb {\n  font-size: 12px;\n  margin-left: 2px;\n  margin-right: 5px;\n  color: #ffc106 !important;\n  position: relative;\n  top: 1px;\n}\n\n.listingType {\n  font-weight: 800 !important;\n  line-height: 16px !important;\n  letter-spacing: normal !important;\n  text-transform: uppercase !important;\n  color: #767676;\n  text-overflow: ellipsis !important;\n  white-space: nowrap !important;\n  font-size: 11px !important;\n  overflow: hidden !important;\n  font-weight: bold;\n  margin: 0;\n  padding: 0;\n  /* text-align: left;*/\n  text-align: initial;\n}\n\n.badgeLeftFloat {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 32px;\n  margin-right: 5px;\n  font-weight: 700;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  top: 20px;\n  line-height: 20px;\n  z-index: 9;\n  background-color: #ffffff2e;\n  font-size: 8pt;\n  padding: 6px 10px;\n  color: #fff;\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px);\n  border-radius: 50px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0 2px 8px;\n}\n\n.boltIcon {\n  width: 32px;\n  padding-left: 12px;\n  border: solid 1px #FFEB3B;\n  color: #FFEB3B;\n  font-size: 9pt;\n}\n\n.boltIconList {\n  position: absolute;\n  right: 5px;\n  bottom: 5px;\n  width: 23px;\n  text-align: center;\n  height: 23px;\n  border: solid 1px;\n  line-height: 24px;\n  color: #ffc106;\n  border-radius: 100px;\n  font-size: 8pt;\n}\n\n.logoCircleImg {\n  width: 60px;\n  height: 60px;\n  overflow: hidden;\n  border-radius: 50%;\n  z-index: 9;\n  background-color: #fff;\n  background-size: cover;\n  position: absolute;\n  top: -25px;\n  left: 50%;\n  transform: translateX(-50%);\n  background-position: center !important;\n  background-size: cover !important;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);\n}\n\n.sponsoredAirbnb {\n  background-color: white;\n  color: #FFC107;\n  border: solid 1px;\n  border-radius: 2px;\n  padding: 1px 3px !important;\n  margin-left: 5px !important;\n  -webkit-box-align: center !important;\n  font-size: 8px !important;\n  line-height: 12px !important;\n  align-items: center !important;\n  display: inline-flex !important;\n  display: inline-block !important;\n  vertical-align: top !important;\n  white-space: normal !important;\n  -webkit-animation-duration: 0.3s !important;\n  animation-duration: 0.3s !important;\n  -webkit-animation-name: keyframe_18jn58a !important;\n  animation-name: keyframe_18jn58a !important;\n  -webkit-animation-timing-function: ease-in-out !important;\n  animation-timing-function: ease-in-out !important;\n  opacity: 1 !important;\n  visibility: visible !important;\n}\n\n.sponsoredAirbnb i {\n  display: none;\n}\n\n.sponsoredFloat {\n  height: 32px;\n  margin-right: 5px;\n  font-weight: 700;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  left: 15px;\n  top: 15px;\n  position: fixed;\n  line-height: 16px;\n  z-index: 9;\n  background-color: #ffffff2e;\n  padding: 6px 10px;\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px);\n  border-radius: 50px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0 2px 8px;\n  width: 32px;\n  padding-left: 12px;\n  border: solid 1px #FFEB3B;\n  color: #FFEB3B;\n  font-size: 9pt;\n}\n\n.sponsoredFloat span {\n  display: none;\n}\n\n/* Custom fields box type */\n\n.backImgTrip {\n  width: 100%;\n  height: 140px;\n  background-position: center !important;\n  background-size: cover !important;\n  border-radius: 5px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 0;\n}\n\n.gridBox {\n  margin-bottom: 15px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.floatGridBox {\n  margin-bottom: 15px;\n  display: flex;\n  position: fixed;\n  top: 10px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.divGridBox {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 49.75%;\n  margin-bottom: 0.5%;\n  height: 30px;\n  margin: 0px;\n  margin-bottom: 1px;\n}\n\n.divGridBox span {\n  text-align: center;\n  text-align: center;\n  color: #4c4c4c;\n  font-size: 10px;\n  line-height: 16px;\n  font-weight: 700;\n}\n\n.divGridBox i {\n  font-size: 20px;\n}\n\n.divGridBox:nth-last-child(n+5):first-child,\n.divGridBox:nth-last-child(n+5):first-child ~ *,\n.divGridBox:nth-last-child(n+6):first-child,\n.divGridBox:nth-last-child(n+6):first-child ~ * {\n  flex-basis: 33%;\n}\n\n.divGridBox:nth-child(5):last-child {\n  margin-right: auto;\n  margin-left: 0.5%;\n}\n\n.paddingTopLogoBoxFooter {\n  bottom: 10px;\n  position: absolute;\n  width: 90%;\n  left: 5%;\n}\n\n.verticalDivisor {\n  margin-left: 5px;\n  margin-right: 5px;\n  display: inline;\n  border-left: solid 1px #b8b8b8;\n  height: 100%;\n  width: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTGlzdGluZ1Byby9saXN0aW5nTGlzdC9DOlxcbGlzdFxcaW9uaWNcXGlvbmljLWFwcC9zcmNcXGFwcFxcTGlzdGluZ1Byb1xcbGlzdGluZ0xpc3RcXGxpc3RpbmdMaXN0X0xQLnNjc3MiLCJzcmMvYXBwL0xpc3RpbmdQcm8vbGlzdGluZ0xpc3QvbGlzdGluZ0xpc3RfTFAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHVCQUFBO0FDQUY7O0FERUE7RUFDRSx3Q0FBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtBQ0dGOztBREFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0dGOztBRERBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNJRjs7QURBQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7RUFJQSxpQ0FBQTtBQ0dGOztBRERBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUNJRjs7QUREQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDSUY7O0FEREE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7QUNJRjs7QURGQTtFQUNFLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FDS0Y7O0FEREU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0lKOztBRERFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNHSjs7QURBRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0VKOztBREdBO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO0FDQUY7O0FES0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURLQTtFQUNFLCtCQUFBO0tBQUEsNEJBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBREtBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxnQ0FBQTtBQ0ZGOztBRE1BO0VBQ0UsNEVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUFBLDRCQUFBO0VBQUEsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNIRjs7QURPQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7QUNKRjs7QURPQTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSkY7O0FET0E7RUFFRSwwQ0FBQTtBQ0pGOztBRFFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUlBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0xGOztBRFNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtFQUlBLGlDQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQ05GOztBRFNBO0VBQ0UsbUJBQUE7QUNORjs7QURTQTtFQUNFLCtHQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtFQUlBLGlDQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDTkY7O0FEU0EsbUJBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFJQSxpQ0FBQTtFQUNBLGdCQUFBO0FDTkY7O0FEU0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFJQSxpQ0FBQTtFQUNBLGdCQUFBO0FDTkY7O0FEV0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1JGOztBRFdBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUlBLGlDQUFBO0VBQ0Esa0JBQUE7QUNSRjs7QURZQTtFQUNFLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBQ0Esc0NBQUE7QUNURjs7QURXQTtFQUNFLGdDQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQ1JGOztBRFVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUlBLGlDQUFBO0FDUEY7O0FEVUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FDUEY7O0FEV0E7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEsK0dBQUE7QUNSRjs7QURXQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDUkY7O0FEV0E7RUFDRSwyQkFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDUkY7O0FEV0E7RUFDQyw4QkFBQTtFQUNDLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDUkY7O0FEWUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtBQ1RGOztBRFlBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUNURjs7QURXQTtFQUNFLFdBQUE7QUNSRjs7QURVQTtFQUNFLFlBQUE7QUNQRjs7QURXQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FDUkY7O0FEVUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQ1BGOztBRFVBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNQRjs7QURTQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDTkY7O0FEU0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDTkY7O0FEV0E7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDRCxxQkFBQTtFQUNDLG1CQUFBO0FDUkY7O0FEV0E7RUFDRSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtEQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0FDUkY7O0FEV0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDUkY7O0FEV0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDUkY7O0FEV0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFFQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQ0FBQTtBQ1JGOztBRFdBO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQ0FBQTtFQUNBLG1EQUFBO0VBQ0EsMkNBQUE7RUFDQSx5REFBQTtFQUNBLGlEQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQ1JGOztBRFVBO0VBQ0UsYUFBQTtBQ1BGOztBRFVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrREFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNQRjs7QURVQTtFQUNFLGFBQUE7QUNQRjs7QURZQSwyQkFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0NBQUE7RUFJQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDVEY7O0FEYUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUNWRjs7QURhQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FDVkY7O0FEYUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNWRjs7QURhQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNWRjs7QURhQTtFQUNFLGVBQUE7QUNWRjs7QURjQTs7OztFQU1FLGVBQUE7QUNiRjs7QURpQkE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDZEY7O0FEa0JBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUNmRjs7QURtQkE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNoQkYiLCJmaWxlIjoic3JjL2FwcC9MaXN0aW5nUHJvL2xpc3RpbmdMaXN0L2xpc3RpbmdMaXN0X0xQLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50b29sYmFyLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5zb2NpYWwtY2FyZHMgaW9uLWNvbHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi5zZWFyY2hUZXh0e1xuICBjb2xvcjogIzlFOUU5RTtcbn1cbi5pbnB1dFNlYXJjaFRleHR7XG4gIGNvbG9yOmJsYWNrO1xufVxuXG4uc2VjdGlvbntcbiAgcGFkZGluZzo1cHg7XG4gIG1hcmdpbjogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogNDVweDtcbn1cbi50aXRsZVNlY3Rpb257XG4gIGZvbnQtc2l6ZTogMTZwdDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG5cbi5yZWdpb25UaXRsZXtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMTQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDUsIDQ1LCA0NSwgMC41NCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHQ7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbn1cbi5ob3Jpem9udGFsTGlzdHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucm93TGlzdFR5cGV7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW46IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDkwcHhcbn1cblxuLmxpc3RpbmdBZGRyZXNzTGl0dGxle1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiA3cHQ7XG4gIGNvbG9yOiAjOTc5Nzk3O1xuICBtYXgtaGVpZ2h0OiAzMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveCAhaW1wb3J0YW50O1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLmRpdkhvcml6b250YWxMaXN0e1xuICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSB7XG5cbiAgaW9uLWNhcmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOi01cHg7XG4gIH1cblxuICAuY2FyZC10aXRsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzYlO1xuICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gIC5jYXJkLXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMGVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUyJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG59XG5cbi5zb2NpYWwtY2FyZHMgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y1Zjg7XG59XG5cblxuXG4uaW1nTGlzdHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaW1nVHlwZXN7XG4gIG9iamVjdC1maXQ6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmNlbnRyYWxBcnJvd3tcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSlcbn1cblxuXG4udG90YWxQYWdlQmFja0ltZ3tcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vY2RuLWltYWdlcy0xLm1lZGl1bS5jb20vbWF4LzE2MDAvMCpJLXNJM3UzNGcweWRScXlBKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cblxuLnRvdGFsUGFnZUJhY2tJbWc6OmFmdGVyIHtcbiAgY29udGVudDonJztcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDoxMDAlO1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgdG9wOjA7XG4gIGxlZnQ6MDtcbiAgb3BhY2l0eTowLjI7XG59XG5cbi5ib3JkZXJMaXN0e1xuICAvKmJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7Ki9cbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5ib3hTaGFkb3dMaXN0e1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwwLDAsLjEpO1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsMCwwLC4xKTtcbn1cblxuXG4uYmFja0ltZ0JpZ2dlcntcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cblxuLmJhY2tJbWdMaXN0e1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5iYWNrSW1nTGlzdFtkaXI9XCJsdHJcIl17XG4gIG1hcmdpbi1yaWdodDogLTI1cHg7XG59XG5cbi5pbWdSVExMaXN0e1xuICBiYWNrZ3JvdW5kOiB1cmwoLy9pMC53cC5jb20vZGFuY2V1cC5kYW5jZS93cC1jb250ZW50L3VwbG9hZHMvbGlzdGluZy11cGxvYWRzL2dhbGxlcnkvMjAxOS8xMi9pbWdMaXN0aW5nLTYuanBlZyk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKldoaXRlIGJhY2tncm91bmQqL1xuLmJhY2tJbWd7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYmFja0ltZ0xpdHRsZXtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuXG5cbi5iYWNrSW1nU3F1YXJlZEFuZExvZ297XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYmFja0ltZ1NxdWFyZWR7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuXG4uYmFja0ltZ0xvZ297XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG4uYmFja0ltZ0xvZ28ye1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwJTtcbiAgbGVmdDogMjUlO1xuICBkaXNwbGF5OiBmbG93LXJvb3Q7XG4gIGhlaWdodDogMTAwcHg7XG4gIHotaW5kZXg6IDQ7XG4gIHdpZHRoOiA1MCU7XG59XG4ucG9zdEltZ3tcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xufVxuXG4uaG9tZVR5cGVMYWJlbHtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDEycHQ7XG4gIGNvbG9yOiBibGFjaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbjogMDtcbn1cblxuXG4uYmFzaWNTZWFyY2hDb250YWluZXJ7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHotaW5kZXg6OTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMCU7XG4gIG1hcmdpbjogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpLCAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsLjEyKTtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xufVxuXG4uaW1nTG9nb0hvcml6b250YWx7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgei1pbmRleDogOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICBtYXJnaW4tYm90dG9tOiAtMjVweDtcbn1cblxuLnR5cGVUaXRsZXtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBpbml0aWFsO1xufVxuXG4uYnRuTGlnaHR7XG4gLyogYm9yZGVyOiBzb2xpZCAxcHggIzQzOTJmZjsqL1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIC8qcGFkZGluZzogMTBweDsqL1xufVxuXG5cbi5yZXZpZXdDb3VudGVyTGl0dGxle1xuICBjb2xvcjogIzZiNmI2YjtcbiAgZm9udC1zaXplOiA5cHQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZsb2F0OiByaWdodDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5yZXZpZXdDb3VudGVyTGl0dGxlTGlzdHtcbiAgY29sb3I6ICM2YjZiNmI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LXNpemU6IDhwdDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xufVxuLnJldmlld0NvdW50ZXJMaXR0bGVMaXN0W2Rpcj1cInJ0bFwiXXtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ucmV2aWV3Q291bnRlckxpdHRsZUxpc3RbZGlyPVwibHRyXCJde1xuICBmbG9hdDogcmlnaHQ7XG59XG5cblxuLnJldmlld1Njb3JlTGl0dGxle1xuICBmb250LXNpemU6IDExcHQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZsb2F0OiBsZWZ0O1xuICBsaW5lLWhlaWdodDogMS43O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xufVxuLnJldmlld1Njb3JlTGl0dGxlTGlzdHtcbiAgZm9udC1zaXplOiAxMHB0O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmbG9hdDogbGVmdDtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnN0YXJSZXZpZXd7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY29sb3I6ICNmZmMxMDYgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbn1cbi5zdGFyUmV2aWV3TGlzdHtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBjb2xvcjogI2ZmYzEwNiAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXB4O1xufVxuXG5zdGFyUmV2aWV3QWlyYm5ie1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBjb2xvcjogI2ZmYzEwNiAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMXB4O1xufVxuXG5cblxuLmxpc3RpbmdUeXBle1xuICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWwgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xuICBjb2xvcjogcmdiKDExOCwgMTE4LCAxMTgpO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gLyogdGV4dC1hbGlnbjogbGVmdDsqL1xuICB0ZXh0LWFsaWduOiBpbml0aWFsO1xufVxuXG4uYmFkZ2VMZWZ0RmxvYXR7XG4gIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IDMycHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRvcDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHotaW5kZXg6IDk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYyZTtcbiAgZm9udC1zaXplOiA4cHQ7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLDAsMCwuMTUpIDAgMnB4IDhweDtcbn1cblxuLmJvbHRJY29ue1xuICB3aWR0aDogMzJweDtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjRkZFQjNCO1xuICBjb2xvcjogI0ZGRUIzQjtcbiAgZm9udC1zaXplOiA5cHQ7XG59XG5cbi5ib2x0SWNvbkxpc3R7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgYm90dG9tOiA1cHg7XG4gIHdpZHRoOiAyM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMjNweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogI2ZmYzEwNjtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGZvbnQtc2l6ZTogOHB0O1xufVxuXG4ubG9nb0NpcmNsZUltZ3tcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiA5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTI1cHg7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uc3BvbnNvcmVkQWlyYm5ie1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICNGRkMxMDc7XG4gIGJvcmRlcjogc29saWQgMXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDFweCAzcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogOHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3AgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcyAhaW1wb3J0YW50O1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3MgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZToga2V5ZnJhbWVfMThqbjU4YSAhaW1wb3J0YW50O1xuICBhbmltYXRpb24tbmFtZToga2V5ZnJhbWVfMThqbjU4YSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0ICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0ICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xufVxuLnNwb25zb3JlZEFpcmJuYiBpIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNwb25zb3JlZEZsb2F0e1xuICBoZWlnaHQ6IDMycHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGxlZnQ6IDE1cHg7XG4gIHRvcDogMTVweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgei1pbmRleDogOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjJlO1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAwIDJweCA4cHg7XG4gIHdpZHRoOiAzMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNGRkVCM0I7XG4gIGNvbG9yOiAjRkZFQjNCO1xuICBmb250LXNpemU6IDlwdDtcbn1cblxuLnNwb25zb3JlZEZsb2F0IHNwYW57XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuXG4vKiBDdXN0b20gZmllbGRzIGJveCB0eXBlICovXG4uYmFja0ltZ1RyaXB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE0MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cblxuLmdyaWRCb3h7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZmxvYXRHcmlkQm94e1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5kaXZHcmlkQm94e1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgZmxleC1iYXNpczogNDkuNzUlO1xuICBtYXJnaW4tYm90dG9tOiAuNSU7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbn1cblxuLmRpdkdyaWRCb3ggc3BhbntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNGM0YzRjO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZGl2R3JpZEJveCBpe1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cblxuLmRpdkdyaWRCb3g6bnRoLWxhc3QtY2hpbGQobis1KTpmaXJzdC1jaGlsZCxcbi5kaXZHcmlkQm94Om50aC1sYXN0LWNoaWxkKG4rNSk6Zmlyc3QtY2hpbGQgfiAqLFxuXG4uZGl2R3JpZEJveDpudGgtbGFzdC1jaGlsZChuKzYpOmZpcnN0LWNoaWxkLFxuLmRpdkdyaWRCb3g6bnRoLWxhc3QtY2hpbGQobis2KTpmaXJzdC1jaGlsZCB+ICoge1xuXG4gIGZsZXgtYmFzaXM6IDMzJTtcbn1cblxuXG4uZGl2R3JpZEJveDpudGgtY2hpbGQoNSk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IC41JTtcbn1cblxuXG4ucGFkZGluZ1RvcExvZ29Cb3hGb290ZXJ7XG4gIGJvdHRvbTogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOTAlO1xuICBsZWZ0OiA1JTtcbn1cblxuXG4udmVydGljYWxEaXZpc29ye1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZGlzcGxheTogaW5saW5lO1xuICBib3JkZXItbGVmdDogc29saWQgMXB4ICNiOGI4Yjg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDFweDtcbn1cbiIsIi50b29sYmFyLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnNvY2lhbC1jYXJkcyBpb24tY29sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaFRleHQge1xuICBjb2xvcjogIzlFOUU5RTtcbn1cblxuLmlucHV0U2VhcmNoVGV4dCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnNlY3Rpb24ge1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogNDVweDtcbn1cblxuLnRpdGxlU2VjdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTZwdDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ucmVnaW9uVGl0bGUge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NSwgNDUsIDQ1LCAwLjU0KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZwdDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xufVxuXG4uaG9yaXpvbnRhbExpc3Qge1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yb3dMaXN0VHlwZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW46IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDkwcHg7XG59XG5cbi5saXN0aW5nQWRkcmVzc0xpdHRsZSB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDdwdDtcbiAgY29sb3I6ICM5Nzk3OTc7XG4gIG1heC1oZWlnaHQ6IDMwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94ICFpbXBvcnRhbnQ7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5kaXZIb3Jpem9udGFsTGlzdCB7XG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgaW9uLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAtNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5jYXJkLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM2JTtcbiAgZm9udC1zaXplOiAxMHB0O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MiU7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnNvY2lhbC1jYXJkcyBpb24tY29sIHtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjVmODtcbn1cblxuLmltZ0xpc3Qge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5pbWdUeXBlcyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmNlbnRyYWxBcnJvdyB7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4udG90YWxQYWdlQmFja0ltZyB7XG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL2Nkbi1pbWFnZXMtMS5tZWRpdW0uY29tL21heC8xNjAwLzAqSS1zSTN1MzRnMHlkUnF5QSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4udG90YWxQYWdlQmFja0ltZzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDAuMjtcbn1cblxuLmJvcmRlckxpc3Qge1xuICAvKmJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7Ki9cbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5ib3hTaGFkb3dMaXN0IHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmJhY2tJbWdCaWdnZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJhY2tJbWdMaXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYmFja0ltZ0xpc3RbZGlyPWx0cl0ge1xuICBtYXJnaW4tcmlnaHQ6IC0yNXB4O1xufVxuXG4uaW1nUlRMTGlzdCB7XG4gIGJhY2tncm91bmQ6IHVybCgvL2kwLndwLmNvbS9kYW5jZXVwLmRhbmNlL3dwLWNvbnRlbnQvdXBsb2Fkcy9saXN0aW5nLXVwbG9hZHMvZ2FsbGVyeS8yMDE5LzEyL2ltZ0xpc3RpbmctNi5qcGVnKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qV2hpdGUgYmFja2dyb3VuZCovXG4uYmFja0ltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYmFja0ltZ0xpdHRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5iYWNrSW1nU3F1YXJlZEFuZExvZ28ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJhY2tJbWdTcXVhcmVkIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYmFja0ltZ0xvZ28ge1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uYmFja0ltZ0xvZ28yIHtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMCU7XG4gIGxlZnQ6IDI1JTtcbiAgZGlzcGxheTogZmxvdy1yb290O1xuICBoZWlnaHQ6IDEwMHB4O1xuICB6LWluZGV4OiA0O1xuICB3aWR0aDogNTAlO1xufVxuXG4ucG9zdEltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbn1cblxuLmhvbWVUeXBlTGFiZWwge1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbiAgY29sb3I6IGJsYWNrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYmFzaWNTZWFyY2hDb250YWluZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICB6LWluZGV4OiA5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwJTtcbiAgbWFyZ2luOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5pbWdMb2dvSG9yaXpvbnRhbCB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgei1pbmRleDogOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICBtYXJnaW4tYm90dG9tOiAtMjVweDtcbn1cblxuLnR5cGVUaXRsZSB7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogaW5pdGlhbDtcbn1cblxuLmJ0bkxpZ2h0IHtcbiAgLyogYm9yZGVyOiBzb2xpZCAxcHggIzQzOTJmZjsqL1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIC8qcGFkZGluZzogMTBweDsqL1xufVxuXG4ucmV2aWV3Q291bnRlckxpdHRsZSB7XG4gIGNvbG9yOiAjNmI2YjZiO1xuICBmb250LXNpemU6IDlwdDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnJldmlld0NvdW50ZXJMaXR0bGVMaXN0IHtcbiAgY29sb3I6ICM2YjZiNmI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LXNpemU6IDhwdDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucmV2aWV3Q291bnRlckxpdHRsZUxpc3RbZGlyPXJ0bF0ge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnJldmlld0NvdW50ZXJMaXR0bGVMaXN0W2Rpcj1sdHJdIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ucmV2aWV3U2NvcmVMaXR0bGUge1xuICBmb250LXNpemU6IDExcHQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZsb2F0OiBsZWZ0O1xuICBsaW5lLWhlaWdodDogMS43O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucmV2aWV3U2NvcmVMaXR0bGVMaXN0IHtcbiAgZm9udC1zaXplOiAxMHB0O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmbG9hdDogbGVmdDtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnN0YXJSZXZpZXcge1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGNvbG9yOiAjZmZjMTA2ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAycHg7XG59XG5cbi5zdGFyUmV2aWV3TGlzdCB7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY29sb3I6ICNmZmMxMDYgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDFweDtcbn1cblxuc3RhclJldmlld0FpcmJuYiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGNvbG9yOiAjZmZjMTA2ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxcHg7XG59XG5cbi5saXN0aW5nVHlwZSB7XG4gIGZvbnQtd2VpZ2h0OiA4MDAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE2cHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzY3Njc2O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIC8qIHRleHQtYWxpZ246IGxlZnQ7Ki9cbiAgdGV4dC1hbGlnbjogaW5pdGlhbDtcbn1cblxuLmJhZGdlTGVmdEZsb2F0IHtcbiAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogMzJweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdG9wOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgei1pbmRleDogOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjJlO1xuICBmb250LXNpemU6IDhwdDtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDAgMnB4IDhweDtcbn1cblxuLmJvbHRJY29uIHtcbiAgd2lkdGg6IDMycHg7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI0ZGRUIzQjtcbiAgY29sb3I6ICNGRkVCM0I7XG4gIGZvbnQtc2l6ZTogOXB0O1xufVxuXG4uYm9sdEljb25MaXN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICBib3R0b206IDVweDtcbiAgd2lkdGg6IDIzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAyM3B4O1xuICBib3JkZXI6IHNvbGlkIDFweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjZmZjMTA2O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgZm9udC1zaXplOiA4cHQ7XG59XG5cbi5sb2dvQ2lyY2xlSW1nIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiA5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTI1cHg7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uc3BvbnNvcmVkQWlyYm5iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjRkZDMTA3O1xuICBib3JkZXI6IHNvbGlkIDFweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiAxcHggM3B4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiA1cHggIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDhweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTJweCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuM3MgIWltcG9ydGFudDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGtleWZyYW1lXzE4am41OGEgIWltcG9ydGFudDtcbiAgYW5pbWF0aW9uLW5hbWU6IGtleWZyYW1lXzE4am41OGEgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dCAhaW1wb3J0YW50O1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbn1cblxuLnNwb25zb3JlZEFpcmJuYiBpIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNwb25zb3JlZEZsb2F0IHtcbiAgaGVpZ2h0OiAzMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsZWZ0OiAxNXB4O1xuICB0b3A6IDE1cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHotaW5kZXg6IDk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYyZTtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xuICBiYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMCAycHggOHB4O1xuICB3aWR0aDogMzJweDtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjRkZFQjNCO1xuICBjb2xvcjogI0ZGRUIzQjtcbiAgZm9udC1zaXplOiA5cHQ7XG59XG5cbi5zcG9uc29yZWRGbG9hdCBzcGFuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogQ3VzdG9tIGZpZWxkcyBib3ggdHlwZSAqL1xuLmJhY2tJbWdUcmlwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTQwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmdyaWRCb3gge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmZsb2F0R3JpZEJveCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxMHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmRpdkdyaWRCb3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgZmxleC1iYXNpczogNDkuNzUlO1xuICBtYXJnaW4tYm90dG9tOiAwLjUlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG59XG5cbi5kaXZHcmlkQm94IHNwYW4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM0YzRjNGM7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5kaXZHcmlkQm94IGkge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5kaXZHcmlkQm94Om50aC1sYXN0LWNoaWxkKG4rNSk6Zmlyc3QtY2hpbGQsXG4uZGl2R3JpZEJveDpudGgtbGFzdC1jaGlsZChuKzUpOmZpcnN0LWNoaWxkIH4gKixcbi5kaXZHcmlkQm94Om50aC1sYXN0LWNoaWxkKG4rNik6Zmlyc3QtY2hpbGQsXG4uZGl2R3JpZEJveDpudGgtbGFzdC1jaGlsZChuKzYpOmZpcnN0LWNoaWxkIH4gKiB7XG4gIGZsZXgtYmFzaXM6IDMzJTtcbn1cblxuLmRpdkdyaWRCb3g6bnRoLWNoaWxkKDUpOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAwLjUlO1xufVxuXG4ucGFkZGluZ1RvcExvZ29Cb3hGb290ZXIge1xuICBib3R0b206IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDkwJTtcbiAgbGVmdDogNSU7XG59XG5cbi52ZXJ0aWNhbERpdmlzb3Ige1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZGlzcGxheTogaW5saW5lO1xuICBib3JkZXItbGVmdDogc29saWQgMXB4ICNiOGI4Yjg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDFweDtcbn0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = (".blackOverlayPostImg {\n  width: 100%;\n  position: absolute;\n  top: 0px;\n  background: linear-gradient(to bottom, #ffffff00, rgba(23, 23, 23, 0.27));\n  height: 250px;\n}\n\n.postLogoImg {\n  border-radius: 50px;\n  position: relative;\n  border: solid white 3px;\n  background-position: center !important;\n  background-size: cover !important;\n  background-color: white !important;\n  box-shadow: 0 3px 9px 3px rgba(0, 0, 0, 0.05) !important;\n  width: 100px;\n  height: 100px;\n  margin: auto;\n  margin-top: -50px;\n}\n\n.postLogoImgCentered {\n  border-radius: 50px;\n  background-position: center !important;\n  background-size: cover !important;\n  width: 60px;\n  height: 60px;\n  display: inline-block;\n}\n\n.postLogoImgPlaceholder {\n  width: 100px;\n  height: 100px;\n  margin-top: -50px;\n}\n\n.listingPageType {\n  font-weight: 800 !important;\n  line-height: 16px !important;\n  letter-spacing: normal !important;\n  text-transform: uppercase !important;\n  color: #767676;\n  text-overflow: ellipsis !important;\n  white-space: nowrap !important;\n  margin-bottom: 2px !important;\n  font-size: 11px !important;\n  overflow: hidden !important;\n  font-weight: bold;\n  margin-top: -5px;\n  padding: 5px;\n  text-align: left;\n  width: 100%;\n  padding-right: 5px;\n  margin-top: -20px;\n}\n\n.listingPageTitle {\n  font-weight: 800 !important;\n  font-size: 22px !important;\n  line-height: 23px !important;\n  margin-bottom: -10px;\n  letter-spacing: normal !important;\n  color: #484848 !important;\n  text-overflow: ellipsis !important;\n  display: -webkit-box !important;\n  -webkit-line-clamp: 2 !important;\n  overflow: hidden !important;\n  padding: 10px;\n}\n\n.listingPageTitleWhite {\n  font-weight: 900 !important;\n  font-size: 30px !important;\n  margin-bottom: -10px;\n  letter-spacing: normal !important;\n  text-overflow: ellipsis !important;\n  -webkit-line-clamp: 2 !important;\n  overflow: hidden !important;\n  padding: 0;\n  line-height: 1.2;\n}\n\n.listingPageSubtitle {\n  text-overflow: ellipsis !important;\n  display: -webkit-box !important;\n  -webkit-box-orient: vertical !important;\n  overflow: hidden !important;\n  padding: 10px;\n  font-size: smaller;\n  color: #979797;\n}\n\n.listingPageSubtitleWhite {\n  text-overflow: ellipsis !important;\n  -webkit-box-orient: vertical !important;\n  overflow: hidden !important;\n  padding: 10px;\n  font-weight: bold;\n}\n\n.iconStyle {\n  padding-left: 10px;\n  font-size: large;\n  max-width: 8.33333%;\n}\n\n.labelHeader {\n  margin: 0px !important;\n  word-wrap: break-word !important;\n  position: relative;\n  font-size: 12px !important;\n  font-weight: 400 !important;\n  top: 8px;\n  width: calc(100% - 50px);\n  font-style: italic;\n}\n\n.labelCustomDetails {\n  margin: 0px !important;\n  word-wrap: break-word !important;\n  font-size: 12px !important;\n  font-weight: 400 !important;\n  color: #484848 !important;\n  line-height: 35px;\n}\n\n.labelHTML {\n  margin: 0px !important;\n  word-wrap: break-word !important;\n  font-size: 12px !important;\n  font-weight: 400 !important;\n  line-height: 1.4444444444em !important;\n  color: #484848 !important;\n  text-align: left;\n}\n\n.categoryLabel {\n  padding: 4px;\n  margin: 5px;\n  width: 100% !important;\n  color: #232323;\n  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px !important;\n  margin-bottom: 4px !important;\n  text-align: left !important;\n  border-width: 1px !important;\n  border-style: solid !important;\n  border-color: rgba(0, 0, 0, 0.1) !important;\n  -o-border-image: initial !important;\n     border-image: initial !important;\n  border-radius: 3px !important;\n}\n\n.listCategories {\n  list-style-type: none;\n  white-space: nowrap;\n  overflow-x: auto;\n  overflow-y: hidden;\n  line-height: 3;\n}\n\n.descriptionTitle {\n  margin: 0px !important;\n  word-wrap: break-word !important;\n  font-size: 14px !important;\n  font-weight: 500;\n  line-height: 1.4444444444em !important;\n  color: #484848 !important;\n  padding: 5px;\n  text-transform: uppercase;\n}\n\n.description {\n  margin: 0px !important;\n  font-size: 14px !important;\n  font-weight: 400 !important;\n  line-height: 1.4em !important;\n  color: #484848 !important;\n  padding: 5px;\n  /* white-space: pre-wrap;*/\n  padding-left: 10px;\n}\n\n.toolbar-background {\n  background: transparent !important;\n  border: none !important;\n}\n\nion-content .scroll-content {\n  margin-top: 0px !important;\n}\n\n.header-ios .toolbar-background-ios {\n  border: none !important;\n  box-shadow: none !important;\n}\n\n.header-md .toolbar-background-md {\n  border: none !important;\n  box-shadow: none !important;\n}\n\n.header-md::after {\n  background-image: none !important;\n}\n\n.backBtn {\n  font-size: 32px !important;\n  font-weight: 600;\n  margin-top: -6px;\n  transition: none 0s ease 0s;\n}\n\n.tableRow {\n  margin: -10px 15px 5px 15px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding-top: 5px;\n  padding-bottom: 2px;\n  font-size: smaller;\n}\n\n.mainDetails {\n  margin: 15px;\n  border-radius: 15px;\n  background-image: linear-gradient(to bottom right, #f3f3f3, #f5f5f5);\n  padding: 5px;\n}\n\n.iconGoodPosition {\n  position: relative;\n  top: 2px;\n  left: 0px;\n}\n\n.faIconGoodPosition {\n  font-size: 17px;\n  margin-right: 5px;\n  margin-left: 5px;\n}\n\n.iconCircleBox {\n  display: inline-block;\n  width: 25px;\n  height: 25px;\n  line-height: 25px;\n  margin-right: 5px;\n  margin-left: 5px;\n  color: #70778b;\n  font-size: 13px;\n  border-radius: 50px;\n  text-align: center;\n  background-color: #f3f3f6;\n  vertical-align: middle;\n  max-width: 8.33333%;\n  margin-bottom: 5px;\n}\n\n.iconImgBoxCatRegions {\n  display: inline-block;\n  width: 26px;\n  height: 26px;\n  line-height: 26px;\n  margin-left: 10px;\n  margin-right: 5px;\n  color: #70778b;\n  font-size: 14px;\n  text-align: center;\n  vertical-align: middle;\n  max-width: 8.33333%;\n  margin-bottom: 5px;\n}\n\n.iconCircleBoxCatRegions {\n  display: inline-block;\n  width: 26px;\n  height: 26px;\n  line-height: 26px;\n  margin-left: 10px;\n  color: #70778b;\n  font-size: 14px;\n  border-radius: 50px;\n  text-align: center;\n  background-color: #f3f3f6;\n  vertical-align: middle;\n  max-width: 8.33333%;\n  margin-bottom: 5px;\n}\n\n.iconCircleBoxCatRegions[dir=rtl] {\n  margin-left: 0px;\n  margin-right: 10px;\n}\n\n.reviewsLabelHeader {\n  text-align: right;\n  width: 100%;\n  padding-right: 5px;\n  font-size: small;\n  margin-top: -45px;\n}\n\n.reviewsLabelHeaderLittle {\n  font-size: small;\n  text-align: right;\n  margin-top: -20px;\n}\n\n.fastBtnPaddingLeft {\n  padding-left: 10px;\n}\n\n.fastBtnPaddingRight {\n  padding-right: 50px;\n}\n\n.fastBtnsContainer {\n  margin: 5px;\n  padding: 2px;\n  padding-left: 7px;\n  padding-right: 7px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border: 1px solid #e7e7ed;\n  border-radius: 2px;\n  text-align: center;\n}\n\n.fastBtnsContainerFull {\n  padding: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n  width: -moz-fit-content;\n  width: -webkit-fit-content;\n  width: fit-content;\n  text-align: center;\n  font-size: 14px;\n  border-radius: 100px;\n  position: relative;\n  right: 0px;\n  height: 30px;\n  margin: 5px;\n  color: black !important;\n  background-color: white !important;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.29);\n}\n\n.fastBtnLabel {\n  color: #70778b;\n  font-size: 10pt;\n}\n\n.fastBtnLabelWhite {\n  color: #4c4c4c;\n  font-size: 10pt;\n}\n\n.fastBtnIcon {\n  position: relative;\n  top: 3px;\n}\n\n.fastBtnIcon[dir=ltr] {\n  right: 5px;\n}\n\n.fastBtnIcon[dir=rtl] {\n  left: 5px;\n}\n\n.topBar {\n  position: fixed;\n  width: 100%;\n  z-index: 99;\n  height: 50px;\n  padding: 5px;\n  padding-top: 10px;\n  background: linear-gradient(to bottom, #00000057, transparent);\n}\n\n.bottomBar {\n  position: fixed;\n  width: 100%;\n  z-index: 99;\n  bottom: 0;\n  height: 50px;\n  padding-top: 10px;\n  background: white;\n  box-shadow: 0 3px 9px 3px rgba(0, 0, 0, 0.05) !important;\n  border-top: 1px solid #EBEBEB !important;\n  padding: 10px 0 !important;\n}\n\nion-conten {\n  --offset-top: 50px;\n}\n\n.sliderWithCSS {\n  overflow-x: auto;\n  height: 250px;\n  width: 100%;\n  list-style-type: none;\n  white-space: nowrap;\n  overflow-x: auto;\n  overflow-y: hidden;\n  line-height: 3;\n}\n\n.postImg {\n  width: 100%;\n  height: 250px;\n  display: inline-block;\n  font-size: 1pt;\n  background-position: center !important;\n  background-size: cover !important;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.41), rgba(255, 255, 255, 0));\n}\n\n.galleryImg {\n  margin: 5px;\n  width: 90%;\n  height: 250px;\n  display: inline-block;\n  font-size: 1pt;\n  background-position: center !important;\n  background-size: cover !important;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.41), rgba(255, 255, 255, 0));\n}\n\n.postImgVertical {\n  width: 100%;\n  height: 450px;\n  background-position: center !important;\n  background-size: cover !important;\n  background: black;\n}\n\n.titleInTheMiddle {\n  z-index: 20;\n  transform: translateY(50%);\n  color: white;\n  text-align: center;\n  width: 100%;\n  display: inline-block;\n}\n\n.speech-bubble {\n  position: relative;\n  background-image: linear-gradient(to bottom right, #4889ff, #00a1ff);\n  border-radius: 0.4em;\n  padding: 15px;\n  color: white;\n}\n\n.speech-bubble:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 25%;\n  width: 0;\n  height: 0;\n  border: 15px solid transparent;\n  border-bottom-color: #438cff;\n  border-top: 0;\n  border-left: 0;\n  margin-left: -7.5px;\n  margin-top: -14px;\n}\n\n.commentBox {\n  white-space: normal;\n  line-height: 1.2;\n  font-size: 10pt;\n}\n\n.commentBoxCard {\n  white-space: normal;\n  line-height: 1;\n  color: #575757;\n  font-size: 9pt;\n}\n\n.cardReview {\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12);\n  margin: 5px;\n  margin-top: 10px;\n  padding: 10px;\n  border-radius: 10px;\n  background-color: whitesmoke;\n}\n\n.btnRatings {\n  margin-top: -10px;\n  margin-left: -10px;\n  color: #4a4a4a;\n  margin-right: -10px;\n}\n\n.imgComments {\n  height: 50px;\n  margin: 5px;\n}\n\n.addReview {\n  text-align: center;\n  font-size: 14px;\n  border-radius: 100px;\n  position: relative;\n  right: 0px;\n  height: 30px;\n  min-width: 50%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n  line-height: 1px;\n  color: black;\n  background-color: white;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);\n}\n\n.fullHearth {\n  color: #FF5722;\n}\n\n.leadContainer {\n  border: solid 1px #e0dfe2;\n  padding: 10px;\n  padding-bottom: 20px;\n  border-radius: 5px;\n  padding: 10px;\n  padding-bottom: 20px;\n  border-radius: 5px;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12);\n}\n\n/* Style the buttons that are used to open and close the accordion panel */\n\n.accordion {\n  background-color: whitesmoke;\n  color: #444;\n  cursor: pointer;\n  padding: 18px;\n  width: 100%;\n  text-align: left;\n  border: none;\n  outline: none;\n  transition: 0.4s;\n}\n\n/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */\n\n.active, .accordion:hover {\n  background-color: white;\n}\n\n/* Style the accordion panel. Note: hidden by default */\n\n.panel {\n  padding: 18px;\n  background-color: white;\n  display: none;\n  overflow: hidden;\n}\n\n.accordionContainer {\n  border: solid 1px #e0dfe2;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12);\n  margin: 10px 5px;\n  width: 100%;\n}\n\n.accordionOpen {\n  display: block !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTGlzdGluZ1Byby9saXN0aW5nUGFnZS9DOlxcbGlzdFxcaW9uaWNcXGlvbmljLWFwcC9zcmNcXGFwcFxcTGlzdGluZ1Byb1xcbGlzdGluZ1BhZ2VcXGxpc3RpbmctcGFnZV9MUC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvTGlzdGluZ1Byby9saXN0aW5nUGFnZS9saXN0aW5nLXBhZ2VfTFAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EseUVBQUE7RUFDQSxhQUFBO0FDRkY7O0FES0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQ0FBQTtFQUlBLGlDQUFBO0VBQ0Esa0NBQUE7RUFDQSx3REFBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDSEY7O0FETUE7RUFDRSxtQkFBQTtFQUNBLHNDQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDSEY7O0FETUE7RUFFRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDSkY7O0FET0E7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDSkY7O0FET0E7RUFDRSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7QUNKRjs7QURNQTtFQUNFLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDSEY7O0FETUE7RUFDRSxrQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsdUNBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNIRjs7QURNQTtFQUNFLGtDQUFBO0VBQ0EsdUNBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0hGOztBRE1BO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSEY7O0FETUE7RUFDRSxzQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsUUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUNIRjs7QURNQTtFQUNFLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ0hGOztBRE1BO0VBQ0Usc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNIRjs7QURNQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsMERBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUNBQUE7S0FBQSxnQ0FBQTtFQUNBLDZCQUFBO0FDSEY7O0FETUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNIRjs7QURNQTtFQUNFLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0NBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0hGOztBRE1BO0VBQ0Usc0JBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDRCwwQkFBQTtFQUNDLGtCQUFBO0FDSEY7O0FETUE7RUFDRSxrQ0FBQTtFQUNBLHVCQUFBO0FDSEY7O0FETUE7RUFDRSwwQkFBQTtBQ0hGOztBRE1BO0VBQ0UsdUJBQUE7RUFDQSwyQkFBQTtBQ0hGOztBREtBO0VBQ0UsdUJBQUE7RUFDQSwyQkFBQTtBQ0ZGOztBREtBO0VBQ0UsaUNBQUE7QUNGRjs7QURNQTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLDJCQUFBO0FDSEY7O0FET0E7RUFDRSwyQkFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSkY7O0FEUUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxvRUFBQTtFQUNBLFlBQUE7QUNMRjs7QURRQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNMRjs7QURRQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDTEY7O0FEUUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNMRjs7QURRQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDTEY7O0FEUUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDTEY7O0FEUUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDTEY7O0FEUUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNMRjs7QURPQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0pGOztBRFFBO0VBQ0Usa0JBQUE7QUNMRjs7QURRQTtFQUNFLG1CQUFBO0FDTEY7O0FEUUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNMRjs7QURRQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQ0FBQTtBQ0xGOztBRFFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNMRjs7QURRQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDTEY7O0FEUUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7QUNMRjs7QURRQTtFQUNFLFVBQUE7QUNMRjs7QURPQTtFQUNFLFNBQUE7QUNKRjs7QURPQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw4REFBQTtBQ0pGOztBRE9BO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0RBQUE7RUFDQSx3Q0FBQTtFQUNBLDBCQUFBO0FDSkY7O0FET0E7RUFDRSxrQkFBQTtBQ0pGOztBRE9BO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0pGOztBRE9BO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxzQ0FBQTtFQUlBLGlDQUFBO0VBQ0EsOEVBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHNDQUFBO0VBSUEsaUNBQUE7RUFDQSw4RUFBQTtBQ0pGOztBRFFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUlBLGlDQUFBO0VBQ0EsaUJBQUE7QUNMRjs7QURRQTtFQUNFLFdBQUE7RUFFQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0xGOztBRFFBO0VBQ0Usa0JBQUE7RUFDQSxvRUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNMRjs7QURRQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDTEY7O0FEUUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0xGOztBRFFBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNMRjs7QURRQTtFQUVFLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7QUNMRjs7QURRQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNMRjs7QURRQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDTEY7O0FEUUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EseUNBQUE7QUNMRjs7QURRQTtFQUNFLGNBQUE7QUNMRjs7QURRQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtBQ0xGOztBRFFBLDBFQUFBOztBQUNBO0VBQ0UsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDTEY7O0FEUUEsMElBQUE7O0FBQ0E7RUFDRSx1QkFBQTtBQ0xGOztBRFFBLHVEQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDTEY7O0FEUUE7RUFDRSx5QkFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDTEY7O0FEUUE7RUFDRSx5QkFBQTtBQ0xGIiwiZmlsZSI6InNyYy9hcHAvTGlzdGluZ1Byby9saXN0aW5nUGFnZS9saXN0aW5nLXBhZ2VfTFAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG4uYmxhY2tPdmVybGF5UG9zdEltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZmZmZmMDAsIHJnYmEoMjMsIDIzLCAyMywgMC4yNykpO1xuICBoZWlnaHQ6IDI1MHB4O1xufVxuXG4ucG9zdExvZ29JbWcge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogc29saWQgd2hpdGUgM3B4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAzcHggOXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDUpICFpbXBvcnRhbnQ7XG5cbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IC01MHB4O1xufVxuXG4ucG9zdExvZ29JbWdDZW50ZXJlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnBvc3RMb2dvSW1nUGxhY2Vob2xkZXIge1xuXG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG59XG5cbi5saXN0aW5nUGFnZVR5cGUge1xuICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWwgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzc2NzY3NjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAycHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG5cbi5saXN0aW5nUGFnZVRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIycHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDIzcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWwgIWltcG9ydGFudDtcbiAgY29sb3I6ICM0ODQ4NDggIWltcG9ydGFudDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgIWltcG9ydGFudDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3ggIWltcG9ydGFudDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5saXN0aW5nUGFnZVRpdGxlV2hpdGUge1xuICBmb250LXdlaWdodDogOTAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDIgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuXG4ubGlzdGluZ1BhZ2VTdWJ0aXRsZSB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWwgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IHNtYWxsZXI7XG4gIGNvbG9yOiAjOTc5Nzk3XG59XG5cbi5saXN0aW5nUGFnZVN1YnRpdGxlV2hpdGUge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pY29uU3R5bGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIG1heC13aWR0aDogOC4zMzMzMyU7XG59XG5cbi5sYWJlbEhlYWRlciB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIHRvcDogOHB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmxhYmVsQ3VzdG9tRGV0YWlscyB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzQ4NDg0OCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMzVweDtcbn1cblxuLmxhYmVsSFRNTCB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMS40NDQ0NDQ0NDQ0NDQ0NDQ0ZW0gIWltcG9ydGFudDtcbiAgY29sb3I6ICM0ODQ4NDggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNhdGVnb3J5TGFiZWwge1xuICBwYWRkaW5nOiA0cHg7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzIzMjMyMztcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMnB4IDRweCAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXdpZHRoOiAxcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKSAhaW1wb3J0YW50O1xuICBib3JkZXItaW1hZ2U6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0Q2F0ZWdvcmllcyB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBsaW5lLWhlaWdodDogMztcbn1cblxuLmRlc2NyaXB0aW9uVGl0bGUge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ0NDQ0NDQ0NDQ0NDQ0NDRlbSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzQ4NDg0OCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjRlbSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzQ4NDg0OCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHg7XG4gLyogd2hpdGUtc3BhY2U6IHByZS13cmFwOyovXG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLnRvb2xiYXItYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCAuc2Nyb2xsLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1pb3MgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XG59XG4uaGVhZGVyLW1kIC50b29sYmFyLWJhY2tncm91bmQtbWQge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XG5cbn1cbi5oZWFkZXItbWQ6OmFmdGVye1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG59XG5cblxuLmJhY2tCdG4ge1xuICBmb250LXNpemU6IDMycHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogLTZweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lIDBzIGVhc2UgMHM7XG4gIHRyYW5zaXRpb246IG5vbmUgMHMgZWFzZSAwcztcbn1cblxuXG4udGFibGVSb3cge1xuICBtYXJnaW46IC0xMHB4IDE1cHggNXB4IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbn1cblxuXG4ubWFpbkRldGFpbHMge1xuICBtYXJnaW46IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICNmM2YzZjMgLCAjZjVmNWY1KTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uaWNvbkdvb2RQb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAycHg7XG4gIGxlZnQ6IDBweDtcbn1cblxuLmZhSWNvbkdvb2RQb3NpdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5pY29uQ2lyY2xlQm94e1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY29sb3I6ICM3MDc3OGI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2Y2O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXgtd2lkdGg6IDguMzMzMzMlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5pY29uSW1nQm94Q2F0UmVnaW9uc3tcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBjb2xvcjogIzcwNzc4YjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1heC13aWR0aDogOC4zMzMzMyU7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmljb25DaXJjbGVCb3hDYXRSZWdpb25ze1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY29sb3I6ICM3MDc3OGI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2Y2O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXgtd2lkdGg6IDguMzMzMzMlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5pY29uQ2lyY2xlQm94Q2F0UmVnaW9uc1tkaXI9XCJydGxcIl17XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnJldmlld3NMYWJlbEhlYWRlciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBmb250LXNpemU6IHNtYWxsO1xuICBtYXJnaW4tdG9wOiAtNDVweDtcbn1cbi5yZXZpZXdzTGFiZWxIZWFkZXJMaXR0bGUge1xuICBmb250LXNpemU6IHNtYWxsO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG5cbn1cblxuLmZhc3RCdG5QYWRkaW5nTGVmdHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uZmFzdEJ0blBhZGRpbmdSaWdodHtcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbiB9XG5cbi5mYXN0QnRuc0NvbnRhaW5lcntcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDdweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTdlN2VkO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZhc3RCdG5zQ29udGFpbmVyRnVsbHtcbiAgcGFkZGluZzogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDVweDtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI5KTtcbn1cblxuLmZhc3RCdG5MYWJlbHtcbiAgY29sb3I6ICM3MDc3OGI7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbn1cblxuLmZhc3RCdG5MYWJlbFdoaXRle1xuICBjb2xvcjogIzRjNGM0YztcbiAgZm9udC1zaXplOiAxMHB0O1xufVxuXG4uZmFzdEJ0bkljb257XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzcHg7XG59XG5cbi5mYXN0QnRuSWNvbltkaXI9XCJsdHJcIl17XG4gIHJpZ2h0OiA1cHg7XG59XG4uZmFzdEJ0bkljb25bZGlyPVwicnRsXCJde1xuICBsZWZ0OiA1cHg7XG59XG5cbi50b3BCYXJ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCggdG8gYm90dG9tLCAjMDAwMDAwNTcsIHRyYW5zcGFyZW50ICk7XG59XG5cbi5ib3R0b21CYXJ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5O1xuICBib3R0b206IDA7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDNweCA5cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNSkgIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFQkVCRUIgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweCAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW57XG4gIC0tb2Zmc2V0LXRvcDogNTBweDtcbn1cblxuLnNsaWRlcldpdGhDU1N7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgbGluZS1oZWlnaHQ6IDM7XG59XG5cbi5wb3N0SW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxcHQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAwLjQxKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7XG59XG5cbi5nYWxsZXJ5SW1nIHtcbiAgbWFyZ2luOjVweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDFwdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuNDEpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTtcbn1cblxuXG4ucG9zdEltZ1ZlcnRpY2FsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuLnRpdGxlSW5UaGVNaWRkbGV7XG4gIHotaW5kZXg6IDIwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zcGVlY2gtYnViYmxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjNDg4OWZmLCAjMDBhMWZmKTtcbiAgYm9yZGVyLXJhZGl1czogLjRlbTtcbiAgcGFkZGluZzogMTVweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3BlZWNoLWJ1YmJsZTphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMjUlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXI6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM0MzhjZmY7XG4gIGJvcmRlci10b3A6IDA7XG4gIGJvcmRlci1sZWZ0OiAwO1xuICBtYXJnaW4tbGVmdDogLTcuNXB4O1xuICBtYXJnaW4tdG9wOiAtMTRweDtcbn1cblxuLmNvbW1lbnRCb3h7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbn1cblxuLmNvbW1lbnRCb3hDYXJke1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMTtcbiAgY29sb3I6ICM1NzU3NTc7XG4gIGZvbnQtc2l6ZTogOXB0O1xufVxuXG4uY2FyZFJldmlld3tcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm94LXNoYWRvdzogMCAxcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIG1hcmdpbjogNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4uYnRuUmF0aW5nc3tcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgY29sb3I6ICM0YTRhNGE7XG4gIG1hcmdpbi1yaWdodDogLTEwcHg7XG59XG5cbi5pbWdDb21tZW50c3tcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDVweDtcbn1cblxuLmFkZFJldmlld3tcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWluLXdpZHRoOiA1MCU7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiBhdXRvO1xuICBsaW5lLWhlaWdodDogMXB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLmZ1bGxIZWFydGh7XG4gIGNvbG9yOiAjRkY1NzIyXG59XG5cbi5sZWFkQ29udGFpbmVye1xuICBib3JkZXI6IHNvbGlkIDFweCAjZTBkZmUyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBib3gtc2hhZG93OiAwIDFweCA2cHggcmdiKDAgMCAwIC8gMTIlKTtcbn1cblxuLyogU3R5bGUgdGhlIGJ1dHRvbnMgdGhhdCBhcmUgdXNlZCB0byBvcGVuIGFuZCBjbG9zZSB0aGUgYWNjb3JkaW9uIHBhbmVsICovXG4uYWNjb3JkaW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgY29sb3I6ICM0NDQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMThweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLyogQWRkIGEgYmFja2dyb3VuZCBjb2xvciB0byB0aGUgYnV0dG9uIGlmIGl0IGlzIGNsaWNrZWQgb24gKGFkZCB0aGUgLmFjdGl2ZSBjbGFzcyB3aXRoIEpTKSwgYW5kIHdoZW4geW91IG1vdmUgdGhlIG1vdXNlIG92ZXIgaXQgKGhvdmVyKSAqL1xuLmFjdGl2ZSwgLmFjY29yZGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4vKiBTdHlsZSB0aGUgYWNjb3JkaW9uIHBhbmVsLiBOb3RlOiBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuLnBhbmVsIHtcbiAgcGFkZGluZzogMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5hY2NvcmRpb25Db250YWluZXJ7XG4gIGJvcmRlcjogc29saWQgMXB4ICNlMGRmZTI7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDZweCByZ2IoMCAwIDAgLyAxMiUpO1xuICBtYXJnaW46IDEwcHggNXB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFjY29yZGlvbk9wZW57XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG4iLCIuYmxhY2tPdmVybGF5UG9zdEltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZmZmZmMDAsIHJnYmEoMjMsIDIzLCAyMywgMC4yNykpO1xuICBoZWlnaHQ6IDI1MHB4O1xufVxuXG4ucG9zdExvZ29JbWcge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogc29saWQgd2hpdGUgM3B4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAzcHggOXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDUpICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbn1cblxuLnBvc3RMb2dvSW1nQ2VudGVyZWQge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wb3N0TG9nb0ltZ1BsYWNlaG9sZGVyIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbn1cblxuLmxpc3RpbmdQYWdlVHlwZSB7XG4gIGZvbnQtd2VpZ2h0OiA4MDAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE2cHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzY3Njc2O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDJweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cblxuLmxpc3RpbmdQYWdlVGl0bGUge1xuICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjJweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMjNweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzQ4NDg0OCAhaW1wb3J0YW50O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveCAhaW1wb3J0YW50O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDIgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubGlzdGluZ1BhZ2VUaXRsZVdoaXRlIHtcbiAgZm9udC13ZWlnaHQ6IDkwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWwgIWltcG9ydGFudDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgcGFkZGluZzogMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuLmxpc3RpbmdQYWdlU3VidGl0bGUge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveCAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xuICBjb2xvcjogIzk3OTc5Nztcbn1cblxuLmxpc3RpbmdQYWdlU3VidGl0bGVXaGl0ZSB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWwgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmljb25TdHlsZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgbWF4LXdpZHRoOiA4LjMzMzMzJTtcbn1cblxuLmxhYmVsSGVhZGVyIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgdG9wOiA4cHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ubGFiZWxDdXN0b21EZXRhaWxzIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNDg0ODQ4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xufVxuXG4ubGFiZWxIVE1MIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ0NDQ0NDQ0NDRlbSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzQ4NDg0OCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY2F0ZWdvcnlMYWJlbCB7XG4gIHBhZGRpbmc6IDRweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMjMyMzIzO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggNHB4IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiA0cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICBib3JkZXItd2lkdGg6IDFweCAhaW1wb3J0YW50O1xuICBib3JkZXItc3R5bGU6IHNvbGlkICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1pbWFnZTogaW5pdGlhbCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcbn1cblxuLmxpc3RDYXRlZ29yaWVzIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIGxpbmUtaGVpZ2h0OiAzO1xufVxuXG4uZGVzY3JpcHRpb25UaXRsZSB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDQ0NDQ0NDQ0NGVtICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNDg0ODQ4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDEuNGVtICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNDg0ODQ4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgLyogd2hpdGUtc3BhY2U6IHByZS13cmFwOyovXG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLnRvb2xiYXItYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCAuc2Nyb2xsLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1pb3MgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLW1kIC50b29sYmFyLWJhY2tncm91bmQtbWQge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmJhY2tCdG4ge1xuICBmb250LXNpemU6IDMycHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogLTZweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lIDBzIGVhc2UgMHM7XG4gIHRyYW5zaXRpb246IG5vbmUgMHMgZWFzZSAwcztcbn1cblxuLnRhYmxlUm93IHtcbiAgbWFyZ2luOiAtMTBweCAxNXB4IDVweCAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICBmb250LXNpemU6IHNtYWxsZXI7XG59XG5cbi5tYWluRGV0YWlscyB7XG4gIG1hcmdpbjogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgI2YzZjNmMywgI2Y1ZjVmNSk7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmljb25Hb29kUG9zaXRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4O1xuICBsZWZ0OiAwcHg7XG59XG5cbi5mYUljb25Hb29kUG9zaXRpb24ge1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uaWNvbkNpcmNsZUJveCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjb2xvcjogIzcwNzc4YjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjY7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1heC13aWR0aDogOC4zMzMzMyU7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmljb25JbWdCb3hDYXRSZWdpb25zIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBjb2xvcjogIzcwNzc4YjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1heC13aWR0aDogOC4zMzMzMyU7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmljb25DaXJjbGVCb3hDYXRSZWdpb25zIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjNzA3NzhiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmNjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWF4LXdpZHRoOiA4LjMzMzMzJTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uaWNvbkNpcmNsZUJveENhdFJlZ2lvbnNbZGlyPXJ0bF0ge1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5yZXZpZXdzTGFiZWxIZWFkZXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgbWFyZ2luLXRvcDogLTQ1cHg7XG59XG5cbi5yZXZpZXdzTGFiZWxIZWFkZXJMaXR0bGUge1xuICBmb250LXNpemU6IHNtYWxsO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG5cbi5mYXN0QnRuUGFkZGluZ0xlZnQge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5mYXN0QnRuUGFkZGluZ1JpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbn1cblxuLmZhc3RCdG5zQ29udGFpbmVyIHtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDdweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTdlN2VkO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZhc3RCdG5zQ29udGFpbmVyRnVsbCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcbiAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yOSk7XG59XG5cbi5mYXN0QnRuTGFiZWwge1xuICBjb2xvcjogIzcwNzc4YjtcbiAgZm9udC1zaXplOiAxMHB0O1xufVxuXG4uZmFzdEJ0bkxhYmVsV2hpdGUge1xuICBjb2xvcjogIzRjNGM0YztcbiAgZm9udC1zaXplOiAxMHB0O1xufVxuXG4uZmFzdEJ0bkljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogM3B4O1xufVxuXG4uZmFzdEJ0bkljb25bZGlyPWx0cl0ge1xuICByaWdodDogNXB4O1xufVxuXG4uZmFzdEJ0bkljb25bZGlyPXJ0bF0ge1xuICBsZWZ0OiA1cHg7XG59XG5cbi50b3BCYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDAwMDAwNTcsIHRyYW5zcGFyZW50KTtcbn1cblxuLmJvdHRvbUJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5O1xuICBib3R0b206IDA7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDNweCA5cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNSkgIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFQkVCRUIgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweCAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW4ge1xuICAtLW9mZnNldC10b3A6IDUwcHg7XG59XG5cbi5zbGlkZXJXaXRoQ1NTIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgaGVpZ2h0OiAyNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBsaW5lLWhlaWdodDogMztcbn1cblxuLnBvc3RJbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDFwdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuNDEpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTtcbn1cblxuLmdhbGxlcnlJbWcge1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDFwdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuNDEpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTtcbn1cblxuLnBvc3RJbWdWZXJ0aWNhbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ1MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbi50aXRsZUluVGhlTWlkZGxlIHtcbiAgei1pbmRleDogMjA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNwZWVjaC1idWJibGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM0ODg5ZmYsICMwMGExZmYpO1xuICBib3JkZXItcmFkaXVzOiAwLjRlbTtcbiAgcGFkZGluZzogMTVweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3BlZWNoLWJ1YmJsZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAyNSU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlcjogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzQzOGNmZjtcbiAgYm9yZGVyLXRvcDogMDtcbiAgYm9yZGVyLWxlZnQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAtNy41cHg7XG4gIG1hcmdpbi10b3A6IC0xNHB4O1xufVxuXG4uY29tbWVudEJveCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbn1cblxuLmNvbW1lbnRCb3hDYXJkIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGNvbG9yOiAjNTc1NzU3O1xuICBmb250LXNpemU6IDlwdDtcbn1cblxuLmNhcmRSZXZpZXcge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3gtc2hhZG93OiAwIDFweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgbWFyZ2luOiA1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5idG5SYXRpbmdzIHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgY29sb3I6ICM0YTRhNGE7XG4gIG1hcmdpbi1yaWdodDogLTEwcHg7XG59XG5cbi5pbWdDb21tZW50cyB7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5hZGRSZXZpZXcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtaW4td2lkdGg6IDUwJTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW46IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAxcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uZnVsbEhlYXJ0aCB7XG4gIGNvbG9yOiAjRkY1NzIyO1xufVxuXG4ubGVhZENvbnRhaW5lciB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNlMGRmZTI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4vKiBTdHlsZSB0aGUgYnV0dG9ucyB0aGF0IGFyZSB1c2VkIHRvIG9wZW4gYW5kIGNsb3NlIHRoZSBhY2NvcmRpb24gcGFuZWwgKi9cbi5hY2NvcmRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBjb2xvcjogIzQ0NDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4vKiBBZGQgYSBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZSBidXR0b24gaWYgaXQgaXMgY2xpY2tlZCBvbiAoYWRkIHRoZSAuYWN0aXZlIGNsYXNzIHdpdGggSlMpLCBhbmQgd2hlbiB5b3UgbW92ZSB0aGUgbW91c2Ugb3ZlciBpdCAoaG92ZXIpICovXG4uYWN0aXZlLCAuYWNjb3JkaW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi8qIFN0eWxlIHRoZSBhY2NvcmRpb24gcGFuZWwuIE5vdGU6IGhpZGRlbiBieSBkZWZhdWx0ICovXG4ucGFuZWwge1xuICBwYWRkaW5nOiAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmFjY29yZGlvbkNvbnRhaW5lciB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNlMGRmZTI7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBtYXJnaW46IDEwcHggNXB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFjY29yZGlvbk9wZW4ge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = (".tableRowThinner {\n  font-size: 10pt;\n}\n\n.btnSubmit {\n  width: 100%;\n  padding: 10px;\n  font-size: 15pt;\n  border-radius: 5px;\n}\n\n.formContainer {\n  position: fixed;\n  top: 15%;\n  width: calc(90% - 20px);\n  border-radius: 5px;\n  left: 30px;\n  padding: 15px;\n  background-color: white;\n}\n\n.formLabel {\n  margin-top: 0px;\n  margin-right: 0px;\n  margin-bottom: 0px;\n  margin-left: 0px;\n  word-wrap: break-word;\n  font-size: 32px;\n  font-weight: bolder;\n  line-height: 1.125em;\n}\n\n.empty {\n  color: rgba(45, 45, 45, 0.21);\n}\n\n.colored {\n  color: #ffc106;\n}\n\n.reviewImg {\n  margin: 5px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100px;\n  height: 100px;\n}\n\n.newReviewImg {\n  margin: 5px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 50px;\n  height: 50px;\n}\n\n.imgContainerInline {\n  display: inline;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.btnSendReview {\n  width: 100%;\n  padding: 10px;\n  font-size: 15pt;\n  border-radius: 5px;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTGlzdGluZ1Byby9saXN0aW5nUGFnZS9tb2RhbFdyaXRlUmV2aWV3L0M6XFxsaXN0XFxpb25pY1xcaW9uaWMtYXBwL3NyY1xcYXBwXFxMaXN0aW5nUHJvXFxsaXN0aW5nUGFnZVxcbW9kYWxXcml0ZVJldmlld1xcbW9kYWxXcml0ZVJldmlld19MUC5zY3NzIiwic3JjL2FwcC9MaXN0aW5nUHJvL2xpc3RpbmdQYWdlL21vZGFsV3JpdGVSZXZpZXcvbW9kYWxXcml0ZVJldmlld19MUC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSw2QkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvTGlzdGluZ1Byby9saXN0aW5nUGFnZS9tb2RhbFdyaXRlUmV2aWV3L21vZGFsV3JpdGVSZXZpZXdfTFAuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZVJvd1RoaW5uZXIge1xuICBmb250LXNpemU6IDEwcHQ7XG59XG5cbi5idG5TdWJtaXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNXB0O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5mb3JtQ29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDE1JTtcbiAgd2lkdGg6IGNhbGMoOTAlIC0gMjBweCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbGVmdDogMzBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5mb3JtTGFiZWwge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBsaW5lLWhlaWdodDogMS4xMjVlbTtcbn1cblxuLmVtcHR5IHtcbiAgY29sb3I6IHJnYmEoNDUsIDQ1LCA0NSwgLjIxKTtcbn1cblxuLmNvbG9yZWQge1xuICBjb2xvcjogI2ZmYzEwNjtcbn1cblxuLnJldmlld0ltZyB7XG4gIG1hcmdpbjogNXB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ubmV3UmV2aWV3SW1nIHtcbiAgbWFyZ2luOiA1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uaW1nQ29udGFpbmVySW5saW5le1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLmJ0blNlbmRSZXZpZXd7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE1cHQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggM3B4IDEwcHg7XG59IiwiLnRhYmxlUm93VGhpbm5lciB7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbn1cblxuLmJ0blN1Ym1pdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE1cHQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmZvcm1Db250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTUlO1xuICB3aWR0aDogY2FsYyg5MCUgLSAyMHB4KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBsZWZ0OiAzMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmZvcm1MYWJlbCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjEyNWVtO1xufVxuXG4uZW1wdHkge1xuICBjb2xvcjogcmdiYSg0NSwgNDUsIDQ1LCAwLjIxKTtcbn1cblxuLmNvbG9yZWQge1xuICBjb2xvcjogI2ZmYzEwNjtcbn1cblxuLnJldmlld0ltZyB7XG4gIG1hcmdpbjogNXB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ubmV3UmV2aWV3SW1nIHtcbiAgbWFyZ2luOiA1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uaW1nQ29udGFpbmVySW5saW5lIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5idG5TZW5kUmV2aWV3IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVwdDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAzcHggMTBweDtcbn0iXX0= */");

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