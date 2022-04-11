(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menuPage-menuPage-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/menuPage_LP/bookmarksPage/bookmarksPage_LP.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/menuPage_LP/bookmarksPage/bookmarksPage_LP.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header dir=\"{{GlobalFields.getLanguageLayout()}}\"  translucent=\"true\" mode=\"{{GlobalFields.mode}}\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n    <ion-toolbar >\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"tabs/menuPage\" ></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{'BOOKMARKS' | translate}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content  class=\"cards-bg social-cards\" [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\" style=\"background-color: rgb(0, 0, 0)\">\r\n\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar style=\"padding: 15px\">\r\n      <ion-title size=\"large\">{{'BOOKMARKS' | translate}}</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n\r\n  <div style=\"padding: 15px;\">\r\n\r\n      <div *ngIf=\"GlobalFields.isLoggedIn \" style=\"padding-right: 0;padding-left: 0;\">\r\n        <span *ngIf=\"!loadingSection && GlobalFieldsListingPro.bookmarkedListings\">\r\n                 <!--   <div *ngFor=\"let listing of GlobalFields.bookmarkedListings;  let i = index\" style=\"margin:0px\">\r\n                   Commands\r\n                    <page-listingList [listing]=\"listing\" [type]=\"'2'\"  [search]=\"true\"></page-listingList>\r\n                  </div>\r\n          -->\r\n                  <ion-row *ngFor=\"let listing of GlobalFieldsListingPro.bookmarkedListings;  let i = index\" style=\"margin:0px\"\r\n                           dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n                            <ion-col size=\"11\" style=\"padding: 0 !important;\">\r\n                                <listingList_LP [listing]=\"listing\" [type]=\"'2'\" [search]=\"true\"></listingList_LP>\r\n                            </ion-col>\r\n                            <ion-col size=\"1\" style=\"padding: 0 !important; text-align: center; line-height: 100px;\">\r\n                              <button class=\"btnAction\" (click)=\"undoBookmark(listing.ID)\"><i class=\"fas fa-heart\" style=\"color: #FF5722;\"></i></button>\r\n                            </ion-col>\r\n                  </ion-row>\r\n\r\n              </span>\r\n          <span *ngIf=\"!loadingSection && (!GlobalFieldsListingPro.bookmarkedListings || GlobalFieldsListingPro.bookmarkedListings.length==0)\"\r\n                style=\"padding-left: 25px;\"> {{'NO_RESULTS' | translate}}</span>\r\n          <div *ngIf=\"loadingSection\" style=\"width: 100%; text-align: center;\"><i class=\"fas fa-spinner fa-spin\"></i>\r\n          </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menuPage/bookmarksPage/bookmarksPage.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menuPage/bookmarksPage/bookmarksPage.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header dir=\"{{GlobalFields.getLanguageLayout()}}\"  translucent=\"true\" mode=\"{{GlobalFields.mode}}\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n    <ion-toolbar >\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"tabs/menuPage\" ></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{'BOOKMARKS' | translate}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content  class=\"cards-bg social-cards\" [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\" style=\"background-color: rgb(0, 0, 0)\">\r\n\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar style=\"padding: 15px\">\r\n      <ion-title size=\"large\">{{'BOOKMARKS' | translate}}</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n\r\n  <div style=\"padding: 15px;\">\r\n\r\n      <div *ngIf=\"GlobalFields.isLoggedIn \" style=\"padding-right: 0;padding-left: 0;\">\r\n        <span *ngIf=\"!loadingSection && GlobalFields.bookmarkedListings\">\r\n                 <!--   <div *ngFor=\"let listing of GlobalFields.bookmarkedListings;  let i = index\" style=\"margin:0px\">\r\n                   Commands\r\n                    <page-listingList [listing]=\"listing\" [type]=\"'2'\"  [search]=\"true\"></page-listingList>\r\n                  </div>\r\n          -->\r\n                  <ion-row *ngFor=\"let listing of GlobalFields.bookmarkedListings;  let i = index\" style=\"margin:0px\"\r\n                           dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n                            <ion-col size=\"11\" style=\"padding: 0 !important;\">\r\n                                <page-listingList [listing]=\"listing\" [type]=\"'2'\" [search]=\"true\"></page-listingList>\r\n                            </ion-col>\r\n                            <ion-col size=\"1\" style=\"padding: 0 !important; text-align: center; line-height: 100px;\">\r\n                              <button class=\"btnAction\" (click)=\"undoBookmark(listing.id)\"><i class=\"fas fa-heart\" style=\"color: #FF5722;\"></i></button>\r\n                            </ion-col>\r\n                  </ion-row>\r\n\r\n              </span>\r\n          <span *ngIf=\"!loadingSection && (!GlobalFields.bookmarkedListings || GlobalFields.bookmarkedListings.length==0)\"\r\n                style=\"padding-left: 25px;\"> {{'NO_RESULTS' | translate}}</span>\r\n          <div *ngIf=\"loadingSection\" style=\"width: 100%; text-align: center;\"><i class=\"fas fa-spinner fa-spin\"></i>\r\n          </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menuPage/menuPage.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menuPage/menuPage.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-header translucent=\"true\" mode=\"{{GlobalFields.mode}}\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n  <ion-toolbar>\r\n    <!-- If Side menu is used-->\r\n    <ion-buttons *ngIf=\"GlobalFields.site_details.navigationType==2\" slot=\"start\">\r\n      <ion-menu-button style=\"color: #ffffff\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>{{'MENU' | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<!-- <ion-content  class=\"cards-bg social-cards\"   [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\" [scrollEvents]=\"true\" (ionScroll)=\"onScrollHideHeader($event)\">-->\r\n<ion-content class=\"cards-bg social-cards\" [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar style=\"padding: 15px\">\r\n      <ion-title size=\"large\">{{'MENU' | translate}}</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n\r\n  <!-- [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\" -->\r\n\r\n  <!--- Profile -->\r\n  <div *ngIf=\"GlobalFields.isLoggedIn\">\r\n    <div style=\"padding: 10px; margin-bottom: 30px; margin-top: 15px\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"8\">\r\n            <ion-label class=\"nameLabel\">{{GlobalFields.profile.user.display_name}}</ion-label>\r\n            <br>\r\n            <div>Joels a Joke</div>\r\n          </ion-col>\r\n          <ion-col size=\"4\">\r\n            <img src=\"{{GlobalFields.profile.user.avatar}}\"\r\n                 style=\"float: right; height: 50px; border-radius: 55px;\">\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- MyListing menu -->\r\n  <ion-list *ngIf=\"GlobalFields.site_details.themeEnabled!='listing-pro'\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n    <ion-item style=\"color: #ffffff;\" [disabled]=\"!GlobalFields.isLoggedIn\" button\r\n              [routerLink]=\"['/tabs/' + GlobalFields.site_details.themeEnabled + '/menuPage/myListingsPage']\" [detail]=\"false\">\r\n      <ion-icon name=\"list-outline\" slot=\"start\" style=\"height: 25px;\"></ion-icon>\r\n      <ion-label>\r\n        {{'MY_LISTINGS' | translate}}\r\n      </ion-label>\r\n      <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"chevron-forward-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\r\n      <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"chevron-back-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item style=\"color: #ffffff;\" [disabled]=\"!GlobalFields.isLoggedIn\" button [detail]=\"false\"\r\n              [routerLink]=\"['/tabs/' + GlobalFields.site_details.themeEnabled  + '/menuPage/bookmarksPage']\">\r\n      <ion-icon name=\"heart-outline\" slot=\"start\" style=\"height: 25px;\"></ion-icon>\r\n      <ion-label>\r\n        {{'BOOKMARKS' | translate}}\r\n      </ion-label>\r\n      <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"chevron-forward-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\r\n      <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"chevron-back-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"GlobalFields.site_details.enableNotifications\" style=\"color: #ffffff;\" button [detail]=\"false\"\r\n              [routerLink]=\"['/tabs/' + GlobalFields.site_details.themeEnabled + '/menuPage/notificationsPage']\">\r\n      <ion-icon name=\"notifications-outline\" slot=\"start\" style=\"height: 25px;\"></ion-icon>\r\n      <ion-label>\r\n        {{'NOTIFICATIONS' | translate}}\r\n      </ion-label>\r\n      <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"chevron-forward-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\r\n      <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"chevron-back-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item style=\"color: #ffffff;\" button [detail]=\"false\" [routerLink]=\"['/tabs/' + GlobalFields.site_details.themeEnabled + '/menuPage/settings']\">\r\n      <ion-icon name=\"cog-outline\" slot=\"start\" style=\"height: 25px;\"></ion-icon>\r\n      <ion-label>\r\n        {{'SETTINGS' | translate}}\r\n      </ion-label>\r\n      <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"chevron-forward-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\r\n      <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"chevron-back-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>    </ion-item>\r\n    <ion-item *ngIf=\"GlobalFields.isLoggedIn\" style=\"color: #ffffff;\" button (click)=\"logout()\" [detail]=\"false\">\r\n      <ion-icon name=\"log-out-outline\" slot=\"start\" style=\"height: 25px;\"></ion-icon>\r\n      <ion-label>\r\n        {{'LOGOUT' | translate}}\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n\r\n  <!-- ListingPro menu -->\r\n  <ion-list *ngIf=\"GlobalFields.site_details.themeEnabled=='listing-pro'\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n    <ion-item style=\"color: #ffffff;\" [disabled]=\"!GlobalFields.isLoggedIn\" button [detail]=\"false\"\r\n              [routerLink]=\"['/tabs/' + GlobalFields.site_details.themeEnabled  + '/menuPage/bookmarksPage_LP']\">\r\n      <ion-icon name=\"heart-outline\" slot=\"start\" style=\"height: 25px;\"></ion-icon>\r\n      <ion-label>\r\n        {{'BOOKMARKS' | translate}}\r\n      </ion-label>\r\n      <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"chevron-forward-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\r\n      <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"chevron-back-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"GlobalFields.site_details.enableNotifications\" style=\"color: #ffffff;\" button [detail]=\"false\"\r\n              [routerLink]=\"['/tabs/' + GlobalFields.site_details.themeEnabled + '/menuPage/notificationsPage']\">\r\n      <ion-icon name=\"notifications-outline\" slot=\"start\" style=\"height: 25px;\"></ion-icon>\r\n      <ion-label>\r\n        {{'NOTIFICATIONS' | translate}}\r\n      </ion-label>\r\n      <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"chevron-forward-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\r\n      <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"chevron-back-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item style=\"color: #ffffff;\" button [detail]=\"false\" [routerLink]=\"['/tabs/' + GlobalFields.site_details.themeEnabled + '/menuPage/settings']\">\r\n      <ion-icon name=\"cog-outline\" slot=\"start\" style=\"height: 25px;\"></ion-icon>\r\n      <ion-label>\r\n        {{'SETTINGS' | translate}}\r\n      </ion-label>\r\n      <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='ltr'\" name=\"chevron-forward-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>\r\n      <ion-icon *ngIf=\"GlobalFields.getLanguageLayout()=='rtl'\" name=\"chevron-back-outline\" slot=\"end\" style=\"height: 20px;\"></ion-icon>    </ion-item>\r\n    <ion-item *ngIf=\"GlobalFields.isLoggedIn\" style=\"color: #ffffff;\" button (click)=\"logout()\" [detail]=\"false\">\r\n      <ion-icon name=\"log-out-outline\" slot=\"start\" style=\"height: 25px;\"></ion-icon>\r\n      <ion-label>\r\n        {{'LOGOUT' | translate}}\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n\r\n\r\n  <div *ngIf=\"!GlobalFields.isLoggedIn\" class=\"pageSection\"\r\n       style=\"margin: 10px; padding: 15px; box-shadow: 0 5px 16px 0 rgba(0, 0, 0, 0.07) !important;\">\r\n    <loginComponent></loginComponent>\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <!-- Recently viewed-->\r\n  <div class=\"section\" style=\"margin-top: 50px; padding: 15px\"\r\n       *ngIf=\"GlobalFields.isLoggedIn && GlobalFieldsMyListing.recentViewedListings && GlobalFieldsMyListing.recentViewedListings.length > 0\">\r\n    <h4 style=\"margin: 0\"><i class=\"fas fa-history\"></i> {{'RECENTLY_VIEWED' | translate}}</h4><br>\r\n    <div *ngFor=\"let listing of GlobalFieldsMyListing.recentViewedListings;  let i = index\" style=\"margin:5px\">\r\n      <page-listingList [listing]=\"listing\" [type]=\"'2b'\" [search]=\"true\"></page-listingList>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div id=\"check-point\"></div>  <!-- Check point to the bottom -->\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menuPage/myListingsPage/myListingsPage.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menuPage/myListingsPage/myListingsPage.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\" mode=\"{{GlobalFields.mode}}\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n    <ion-toolbar >\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"tabs/menuPage\" ></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>{{'MY_LISTINGS' | translate}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content  class=\"cards-bg social-cards\" [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\" style=\"background-color: rgb(0, 0, 0)\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar style=\"padding: 15px\">\r\n      <ion-title size=\"large\">{{'MY_LISTINGS' | translate}}</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <div style=\"padding: 15px;\">\r\n\r\n      <ion-segment [(ngModel)]=\"selectedTab\" style=\"width: 50%; min-width: fit-content; margin: auto;\">\r\n          <ion-segment-button value=\"1\">\r\n              <ion-label>{{'STATS' | translate}}</ion-label>\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"2\">\r\n              <ion-label>{{'LISTINGS' | translate}}</ion-label>\r\n          </ion-segment-button>\r\n      </ion-segment>\r\n    <br>\r\n\r\n      <!-- STATS SEGMENT -->\r\n      <div *ngIf=\"selectedTab == 1\">\r\n          <!-- Stats listings-->\r\n          <div *ngIf=\"GlobalFields.isLoggedIn && currentUserInfo && currentUserInfo.user && currentUserInfo.user.meta && currentUserInfo.user.meta._mylisting_stats_cache\"\r\n               class=\"pageSection\">\r\n              <h3><i class=\"fas fa-signal\" [ngStyle]=\"GlobalFields.getPrimaryColorJson()\"></i> {{'STATS' | translate}}\r\n              </h3><br>\r\n              <span *ngIf=\"currentUserInfo.user.meta._mylisting_stats_cache.listings\"> <!-- stats listings -->\r\n              <div class=\"statsBox\" style=\"background: #6c1cff;\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n                  <h2 dir=\"{{GlobalFields.getLanguageLayout()}}\">{{currentUserInfo.user.meta._mylisting_stats_cache.listings.published}}</h2>\r\n                  <p dir=\"{{GlobalFields.getLanguageLayout()}}\">{{'LISTINGS_PUB' | translate}}</p>\r\n                  <i class=\"far fa-window-maximize\" dir=\"{{GlobalFields.getLanguageLayout()}}\"></i>\r\n              </div>\r\n              <div class=\"statsBox\" style=\"background: #911cff;\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n                  <h2 dir=\"{{GlobalFields.getLanguageLayout()}}\">{{currentUserInfo.user.meta._mylisting_stats_cache.listings.pending_approval}}</h2>\r\n                  <p dir=\"{{GlobalFields.getLanguageLayout()}}\">{{'LISTINGS_PEN' | translate}}</p>\r\n                  <i class=\"fas fa-pencil-ruler\" dir=\"{{GlobalFields.getLanguageLayout()}}\"></i>\r\n              </div>\r\n              <div class=\"statsBox\" style=\"background: #0079e0;\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n                  <h2 dir=\"{{GlobalFields.getLanguageLayout()}}\">{{currentUserInfo.user.meta._mylisting_stats_cache.listings.expired}}</h2>\r\n                  <p dir=\"{{GlobalFields.getLanguageLayout()}}\">{{'LISTINGS_EXP' | translate}}</p>\r\n                  <i class=\"far fa-clock\" dir=\"{{GlobalFields.getLanguageLayout()}}\"></i>\r\n              </div>\r\n          </span>\r\n          </div>\r\n\r\n\r\n          <!-- Views -->\r\n          <div *ngIf=\"GlobalFields.isLoggedIn\" class=\"pageSection\">\r\n              <h3><i class=\"far fa-eye\" [ngStyle]=\"GlobalFields.getPrimaryColorJson()\"></i> {{'VIEWS' | translate}}</h3>\r\n              <br>\r\n              <!-- stats listings -->\r\n              <div class=\"numberStats\">\r\n                  <p>\r\n                      <span class=\"animated-bars\"><i class=\"far fa-chart-bar\"></i></span>\r\n                      <span *ngIf=\"!loadingSection && currentUserInfo && currentUserInfo.user && currentUserInfo.user.meta && currentUserInfo.user.meta._mylisting_stats_cache && currentUserInfo.user.meta._mylisting_stats_cache.visits && currentUserInfo.user.meta._mylisting_stats_cache.visits.views\">\r\n                              <span *ngIf=\"currentUserInfo.user.meta._mylisting_stats_cache.visits.views.lastday\">{{currentUserInfo.user.meta._mylisting_stats_cache.visits.views.lastday}}</span>\r\n                              <span *ngIf=\"!currentUserInfo.user.meta._mylisting_stats_cache.visits.views.lastday\">-</span>\r\n                          </span>\r\n                      <span *ngIf=\"loadingSection\"> <i class=\"fas fa-spinner fa-spin\"></i></span>\r\n                      {{'LAST_24_HOURS' | translate}}\r\n                  </p>\r\n                  <p>\r\n                      <span class=\"animated-bars\"><i class=\"far fa-chart-bar\"></i></span>\r\n                      <span *ngIf=\"!loadingSection && currentUserInfo && currentUserInfo.user && currentUserInfo.user.meta && currentUserInfo.user.meta._mylisting_stats_cache && currentUserInfo.user.meta._mylisting_stats_cache.visits && currentUserInfo.user.meta._mylisting_stats_cache.visits.views\">\r\n                              <span *ngIf=\"currentUserInfo.user.meta._mylisting_stats_cache.visits.views.lastweek\">{{currentUserInfo.user.meta._mylisting_stats_cache.visits.views.lastweek}}</span>\r\n                              <span *ngIf=\"!currentUserInfo.user.meta._mylisting_stats_cache.visits.views.lastweek\">-</span>\r\n                          </span>\r\n                      <span *ngIf=\"loadingSection\"> <i class=\"fas fa-spinner fa-spin\"></i></span>\r\n                      {{'LAST_7_DAYS' | translate}}\r\n                  </p>\r\n                  <p>\r\n                      <span class=\"animated-bars\"><i class=\"far fa-chart-bar\"></i></span>\r\n                      <span *ngIf=\"!loadingSection && currentUserInfo && currentUserInfo.user && currentUserInfo.user.meta && currentUserInfo.user.meta._mylisting_stats_cache && currentUserInfo.user.meta._mylisting_stats_cache.visits && currentUserInfo.user.meta._mylisting_stats_cache.visits.views\">\r\n                              <span *ngIf=\"currentUserInfo.user.meta._mylisting_stats_cache.visits.views.lastmonth\">{{currentUserInfo.user.meta._mylisting_stats_cache.visits.views.lastmonth}}</span>\r\n                              <span *ngIf=\"!currentUserInfo.user.meta._mylisting_stats_cache.visits.views.lastmonth\">-</span>\r\n                          </span>\r\n                      <span *ngIf=\"loadingSection\"> <i class=\"fas fa-spinner fa-spin\"></i></span>\r\n                      {{'LAST_30_DAYS' | translate}}\r\n                  </p>\r\n              </div>\r\n          </div>\r\n\r\n          <!-- Unique views -->\r\n          <div *ngIf=\"GlobalFields.isLoggedIn\" class=\"pageSection\">\r\n              <h3><i class=\"fas fa-user-clock\" [ngStyle]=\"GlobalFields.getPrimaryColorJson()\"></i> {{'UNIQUE_VIEWS' |\r\n                  translate}}</h3><br>\r\n              <!-- stats listings -->\r\n              <div class=\"numberStats\">\r\n                  <p>\r\n                      <span class=\"animated-bars\"><i class=\"far fa-chart-bar\"></i></span>\r\n                      <span *ngIf=\"!loadingSection && currentUserInfo && currentUserInfo.user && currentUserInfo.user.meta && currentUserInfo.user.meta._mylisting_stats_cache && currentUserInfo.user.meta._mylisting_stats_cache.visits && currentUserInfo.user.meta._mylisting_stats_cache.visits.unique_views\">\r\n                              <span *ngIf=\"currentUserInfo.user.meta._mylisting_stats_cache.visits.unique_views.lastday\">{{currentUserInfo.user.meta._mylisting_stats_cache.visits.unique_views.lastday}}</span>\r\n                              <span *ngIf=\"!currentUserInfo.user.meta._mylisting_stats_cache.visits.unique_views.lastday\">-</span>\r\n                          </span>\r\n                      <span *ngIf=\"loadingSection\"> <i class=\"fas fa-spinner fa-spin\"></i></span>\r\n                      {{'LAST_24_HOURS' | translate}}\r\n                  </p>\r\n                  <p>\r\n                      <span class=\"animated-bars\"><i class=\"far fa-chart-bar\"></i></span>\r\n                      <span *ngIf=\"!loadingSection && currentUserInfo && currentUserInfo.user && currentUserInfo.user.meta && currentUserInfo.user.meta._mylisting_stats_cache && currentUserInfo.user.meta._mylisting_stats_cache.visits && currentUserInfo.user.meta._mylisting_stats_cache.visits.unique_views\">\r\n                              <span *ngIf=\"currentUserInfo.user.meta._mylisting_stats_cache.visits.unique_views.lastweek\">{{currentUserInfo.user.meta._mylisting_stats_cache.visits.unique_views.lastweek}}</span>\r\n                              <span *ngIf=\"!currentUserInfo.user.meta._mylisting_stats_cache.visits.unique_views.lastweek\">-</span>\r\n                          </span>\r\n                      <span *ngIf=\"loadingSection\"> <i class=\"fas fa-spinner fa-spin\"></i></span>\r\n                      {{'LAST_7_DAYS' | translate}}\r\n                  </p>\r\n                  <p>\r\n                      <span class=\"animated-bars\"><i class=\"far fa-chart-bar\"></i></span>\r\n                      <span *ngIf=\"!loadingSection && currentUserInfo && currentUserInfo.user && currentUserInfo.user.meta && currentUserInfo.user.meta._mylisting_stats_cache && currentUserInfo.user.meta._mylisting_stats_cache.visits && currentUserInfo.user.meta._mylisting_stats_cache.visits.unique_views\">\r\n                              <span *ngIf=\"currentUserInfo.user.meta._mylisting_stats_cache.visits.unique_views.lastmonth\">{{currentUserInfo.user.meta._mylisting_stats_cache.visits.unique_views.lastmonth}}</span>\r\n                              <span *ngIf=\"!currentUserInfo.user.meta._mylisting_stats_cache.visits.unique_views.lastmonth\">-</span>\r\n                          </span>\r\n                      <span *ngIf=\"loadingSection\"> <i class=\"fas fa-spinner fa-spin\"></i></span>\r\n                      {{'LAST_30_DAYS' | translate}}\r\n                  </p>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n\r\n      <!-- MYLISTINGS SEGMENT -->\r\n      <div *ngIf=\"selectedTab == 2\">\r\n          <!-- My listings-->\r\n          <div *ngIf=\"GlobalFields.isLoggedIn\" style=\"padding-left: 5px; padding-right: 5px;\">\r\n              <span *ngIf=\"!loadingSection && myListings\">\r\n                  <div *ngFor=\"let listing of myListings;  let i = index\" style=\"position: relative\">\r\n                      <div *ngIf=\"listing.post_status == Constants.LISTING_STATUS_PENDING\"\r\n                           dir=\"{{GlobalFields.getLanguageLayout()}}\" style=\"text-align: right\">\r\n                          <span class=\"statusListing\"> {{'APPROVAL_PENDING' | translate}}</span>\r\n                      </div>\r\n                      <ion-row dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n                            <ion-col size=\"11\" style=\"padding: 0 !important;\">\r\n                                <page-listingList [listing]=\"listing\" [type]=\"'2'\" [search]=\"true\"></page-listingList>\r\n                            </ion-col>\r\n                            <ion-col size=\"1\" style=\"padding: 0 !important; text-align: center;\">\r\n                              <button class=\"btnAction\" (click)=\"editListing(listing)\"><i class=\"fas fa-pencil-alt\" style=\"color: #00BCD4;\"></i></button>\r\n                              <button class=\"btnAction\" (click)=\"deleteListing(listing)\"><i class=\"fas fa-trash-alt\" style=\"color: #ff0000;\"></i></button>\r\n                            </ion-col>\r\n                      </ion-row>\r\n                  </div>\r\n              </span>\r\n              <div style=\"width: 100%; text-align: center;\" *ngIf=\"!noMoreMyListings && !loadingMoreData\"\r\n                   (click)=\"loadMoreMyListings()\">\r\n                  <ion-icon name=\"refresh\"></ion-icon>\r\n                  {{'LOAD_MORE' | translate}}\r\n              </div>\r\n\r\n              <div style=\"width: 100%; text-align: center;\" *ngIf=\"loadingMoreData\">\r\n                  <div class=\"lds-ellipsis\">\r\n                      <div></div>\r\n                      <div></div>\r\n                      <div></div>\r\n                      <div></div>\r\n                  </div>\r\n              </div>\r\n              <span *ngIf=\"!loadingMoreData && (!myListings || myListings.length==0)\" style=\"padding-left: 25px;\"> {{'NO_RESULTS' | translate}}</span>\r\n          </div>\r\n      </div>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menuPage/notificationsPage/notificationsPage.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menuPage/notificationsPage/notificationsPage.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\" mode=\"{{GlobalFields.mode}}\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"tabs/menuPage\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{'NOTIFICATIONS' | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"cards-bg social-cards\" [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n\r\n  <ion-header collapse=\"condense\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n    <ion-toolbar style=\"padding: 15px\">\r\n      <ion-title size=\"large\">{{'NOTIFICATIONS' | translate}}</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <div style=\"padding: 15px;\" *ngIf=\"GlobalFields.notifications && GlobalFields.notifications.length>0\">\r\n\r\n    <ion-list dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n      <ion-item *ngFor=\"let notif of GlobalFields.notifications\" style=\"margin-bottom: 10px\">\r\n        <span *ngIf=\"notif.payload\" style=\"width: 100%\">\r\n          <ion-label><b>{{notif.payload.title}}</b></ion-label>\r\n          <p>{{notif.payload.body}}</p>\r\n          <div style=\"width: 100%; text-align: right\" *ngIf=\"notif.payload && notif.payload.launchURL\">\r\n            <a (click)=\"openLink(notif.payload.launchURL)\">{{'EXPLORE' | translate}}</a>\r\n          </div>\r\n        </span>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n  </div>\r\n\r\n  <div style=\"padding: 15px;\"\r\n       *ngIf=\"!GlobalFields.notifications || (GlobalFields.notifications && GlobalFields.notifications.length==0)\"\r\n       dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n    {{'NO_RESULTS' | translate}}\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menuPage/settingsPage/settingsPage.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menuPage/settingsPage/settingsPage.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\" mode=\"{{GlobalFields.mode}}\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n  <ion-toolbar>\r\n    <ion-buttons *ngIf=\"navigateAsRoot && GlobalFields.site_details.navigationType==2\"  slot=\"start\">\r\n      <ion-menu-button style=\"color: #3b3c3c\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-back-button *ngIf=\"!navigateAsRoot\" slot=\"start\" defaultHref=\"tabs/menuPage\" ></ion-back-button>\r\n    <ion-title>{{'SETTINGS' | translate}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content  class=\"cards-bg social-cards\" [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\" style=\"background-color: rgb(0, 0, 0)\">\r\n\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar style=\"padding: 15px\">\r\n      <ion-title size=\"large\">{{'SETTINGS' | translate}}</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <div style=\"padding: 15px;\">\r\n\r\n      <div class=\"section\">\r\n          <ion-label>{{'CACHE_CONTROL' | translate}}</ion-label><br><br>\r\n          <ion-button color=\"danger\" (click)=\"clearCache()\">{{'CLEAR_CACHE' | translate}}</ion-button>\r\n      </div>\r\n      <div class=\"sectionLittler\" *ngIf=\"GlobalFields.site_details.privatePolicyUrl\">\r\n          <a (click)=\"openLink(GlobalFields.site_details.privatePolicyUrl)\" >{{'SEE_OUR_PRI_POL' | translate}}.</a>\r\n      </div>\r\n      <div class=\"sectionLittler\" *ngIf=\"GlobalFields.site_details.aboutUsUrl\">\r\n          <a (click)=\"openLink(GlobalFields.site_details.aboutUsUrl)\" >About us.</a>\r\n      </div>\r\n      <div class=\"sectionLittler\" *ngIf=\"GlobalFields.site_details.contactUsUrl\">\r\n          <a (click)=\"openLink(GlobalFields.site_details.contactUsUrl)\">Contact us.</a>\r\n      </div>\r\n\r\n      <div class=\"section\" style=\"margin-top: 40px;\">\r\n          <ion-label>{{'LANGUAGE' | translate}}</ion-label><br><br>\r\n          <ion-list style=\"margin-right: -15px; margin-left: -15px;\">\r\n\r\n                  <ion-item  *ngFor=\"let lang of GlobalFields.languages\">\r\n                      <ion-label><img src=\"../../assets/imgs/flags/{{lang.flag}}.png\" height=\"17\" width=\"25\"/> {{lang.val}}</ion-label>\r\n                      <ion-checkbox (ionFocus)=\"setLang(lang.flag)\" [(ngModel)]=\"lang.isChecked\"></ion-checkbox>\r\n                  </ion-item>\r\n          </ion-list>\r\n      </div>\r\n\r\n  </div>\r\n\r\n  <div *ngIf=\"appVersionNumber\" style=\"padding: 15px;\">\r\n    App version: {{appVersionNumber}}\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/ListingPro/menuPage_LP/bookmarksPage/bookmarksPage_LP.scss":
/*!****************************************************************************!*\
  !*** ./src/app/ListingPro/menuPage_LP/bookmarksPage/bookmarksPage_LP.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section {\n  margin-bottom: 50px;\n}\n\n.sectionLittler {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTGlzdGluZ1Byby9tZW51UGFnZV9MUC9ib29rbWFya3NQYWdlL0M6XFxqb2tlc29uam9lbFxcam9rZXNvbmpvZWwvc3JjXFxhcHBcXExpc3RpbmdQcm9cXG1lbnVQYWdlX0xQXFxib29rbWFya3NQYWdlXFxib29rbWFya3NQYWdlX0xQLnNjc3MiLCJzcmMvYXBwL0xpc3RpbmdQcm8vbWVudVBhZ2VfTFAvYm9va21hcmtzUGFnZS9ib29rbWFya3NQYWdlX0xQLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsbUJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL0xpc3RpbmdQcm8vbWVudVBhZ2VfTFAvYm9va21hcmtzUGFnZS9ib29rbWFya3NQYWdlX0xQLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbntcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcbi5zZWN0aW9uTGl0dGxlcntcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiIsIi5zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLnNlY3Rpb25MaXR0bGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/ListingPro/menuPage_LP/bookmarksPage/bookmarksPage_LP.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ListingPro/menuPage_LP/bookmarksPage/bookmarksPage_LP.ts ***!
  \**************************************************************************/
/*! exports provided: BookmarksPage_LP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarksPage_LP", function() { return BookmarksPage_LP; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _GlobalFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../GlobalFields */ "./src/app/GlobalFields.ts");
/* harmony import */ var _services_Service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/Service */ "./src/app/services/Service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/dialogs/ngx */ "./node_modules/@ionic-native/dialogs/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_MyListingService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/MyListingService */ "./src/app/services/MyListingService.ts");
/* harmony import */ var _services_ListingProService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/ListingProService */ "./src/app/services/ListingProService.ts");
/* harmony import */ var _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../GlobalFieldsListingPro */ "./src/app/GlobalFieldsListingPro.ts");













let BookmarksPage_LP = class BookmarksPage_LP {
    constructor(service, mlservice, lpservice, translate, navController, dialogs, platform, geolocation, nativeGeocoder, alertController, router, modalCtrl) {
        this.service = service;
        this.mlservice = mlservice;
        this.lpservice = lpservice;
        this.translate = translate;
        this.navController = navController;
        this.dialogs = dialogs;
        this.platform = platform;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.alertController = alertController;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"];
        this.GlobalFieldsListingPro = _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"];
        this.loadingSection = false;
    }
    ionViewDidEnter() {
        this.service.setWhiteBlackBackgroundStatusBar();
        if (_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].isLoggedIn) {
            this.getBookmarkedListings();
            this.getCurrentUserInfo();
        }
        else {
            this.router.navigateByUrl('tabs/menuPage');
        }
    }
    getCurrentUserInfo() {
        if (_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].isLoggedIn) {
            this.loadingSection = true;
            this.service.getCurrentUserInfo().subscribe((data) => {
                this.currentUserInfo = data;
                this.loadingSection = false;
            }, err => {
                this.service.refreshCookie();
            });
        }
    }
    getBookmarkedListings() {
        if (_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].isLoggedIn) {
            this.loadingSection = true;
            this.lpservice.getBookmarkedListings().subscribe((data) => {
                this.GlobalFieldsListingPro.bookmarkedListings = data;
                this.loadingSection = false;
                console.log(data);
            }, err => {
                this.service.refreshCookie();
            });
        }
    }
    undoBookmark(id) {
        this.loadingSection = true;
        this.lpservice.undoBookmark(id).subscribe((data) => {
            this.getBookmarkedListings();
        }, err => {
            this.service.refreshCookie();
        });
    }
};
BookmarksPage_LP.ctorParameters = () => [
    { type: _services_Service__WEBPACK_IMPORTED_MODULE_4__["Service"] },
    { type: _services_MyListingService__WEBPACK_IMPORTED_MODULE_10__["MyListingService"] },
    { type: _services_ListingProService__WEBPACK_IMPORTED_MODULE_11__["ListingProService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_6__["Dialogs"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeGeocoder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
BookmarksPage_LP = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'bookmarksPage',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bookmarksPage_LP.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/menuPage_LP/bookmarksPage/bookmarksPage_LP.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./bookmarksPage_LP.scss */ "./src/app/ListingPro/menuPage_LP/bookmarksPage/bookmarksPage_LP.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_4__["Service"], _services_MyListingService__WEBPACK_IMPORTED_MODULE_10__["MyListingService"], _services_ListingProService__WEBPACK_IMPORTED_MODULE_11__["ListingProService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_6__["Dialogs"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeGeocoder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
], BookmarksPage_LP);



/***/ }),

/***/ "./src/app/menuPage/bookmarksPage/bookmarksPage.scss":
/*!***********************************************************!*\
  !*** ./src/app/menuPage/bookmarksPage/bookmarksPage.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section {\n  margin-bottom: 50px;\n}\n\n.sectionLittler {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudVBhZ2UvYm9va21hcmtzUGFnZS9DOlxcam9rZXNvbmpvZWxcXGpva2Vzb25qb2VsL3NyY1xcYXBwXFxtZW51UGFnZVxcYm9va21hcmtzUGFnZVxcYm9va21hcmtzUGFnZS5zY3NzIiwic3JjL2FwcC9tZW51UGFnZS9ib29rbWFya3NQYWdlL2Jvb2ttYXJrc1BhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxtQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvbWVudVBhZ2UvYm9va21hcmtzUGFnZS9ib29rbWFya3NQYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbntcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcbi5zZWN0aW9uTGl0dGxlcntcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiIsIi5zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLnNlY3Rpb25MaXR0bGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/menuPage/bookmarksPage/bookmarksPage.ts":
/*!*********************************************************!*\
  !*** ./src/app/menuPage/bookmarksPage/bookmarksPage.ts ***!
  \*********************************************************/
/*! exports provided: BookmarksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarksPage", function() { return BookmarksPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _GlobalFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../GlobalFields */ "./src/app/GlobalFields.ts");
/* harmony import */ var _services_Service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/Service */ "./src/app/services/Service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/dialogs/ngx */ "./node_modules/@ionic-native/dialogs/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_MyListingService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/MyListingService */ "./src/app/services/MyListingService.ts");











let BookmarksPage = class BookmarksPage {
    constructor(service, mlservice, translate, navController, dialogs, platform, geolocation, nativeGeocoder, alertController, router, modalCtrl) {
        this.service = service;
        this.mlservice = mlservice;
        this.translate = translate;
        this.navController = navController;
        this.dialogs = dialogs;
        this.platform = platform;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.alertController = alertController;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"];
        this.loadingSection = false;
    }
    ionViewDidEnter() {
        this.service.setWhiteBlackBackgroundStatusBar();
        if (_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].isLoggedIn) {
            this.getBookmarkedListings();
            this.getCurrentUserInfo();
        }
        else {
            this.router.navigateByUrl('tabs/menuPage');
        }
    }
    getCurrentUserInfo() {
        if (_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].isLoggedIn) {
            this.loadingSection = true;
            this.service.getCurrentUserInfo().subscribe((data) => {
                this.currentUserInfo = data;
                this.loadingSection = false;
            }, err => {
                this.service.refreshCookie();
            });
        }
    }
    getBookmarkedListings() {
        if (_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].isLoggedIn) {
            this.loadingSection = true;
            this.mlservice.getBookmarkedListings().subscribe((data) => {
                this.GlobalFields.bookmarkedListings = data;
                this.loadingSection = false;
            }, err => {
                this.service.refreshCookie();
            });
        }
    }
    undoBookmark(id) {
        this.loadingSection = true;
        this.mlservice.undoBookmark(id).subscribe((data) => {
            this.getBookmarkedListings();
        }, err => {
            this.service.refreshCookie();
        });
    }
};
BookmarksPage.ctorParameters = () => [
    { type: _services_Service__WEBPACK_IMPORTED_MODULE_4__["Service"] },
    { type: _services_MyListingService__WEBPACK_IMPORTED_MODULE_10__["MyListingService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_6__["Dialogs"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeGeocoder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
BookmarksPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'bookmarksPage',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bookmarksPage.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menuPage/bookmarksPage/bookmarksPage.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./bookmarksPage.scss */ "./src/app/menuPage/bookmarksPage/bookmarksPage.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_4__["Service"], _services_MyListingService__WEBPACK_IMPORTED_MODULE_10__["MyListingService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_6__["Dialogs"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeGeocoder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
], BookmarksPage);



/***/ }),

/***/ "./src/app/menuPage/menuPage.module.ts":
/*!*********************************************!*\
  !*** ./src/app/menuPage/menuPage.module.ts ***!
  \*********************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menuPage */ "./src/app/menuPage/menuPage.ts");
/* harmony import */ var _settingsPage_settingsPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settingsPage/settingsPage */ "./src/app/menuPage/settingsPage/settingsPage.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _loginComponent_loginComponent_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loginComponent/loginComponent.module */ "./src/app/menuPage/loginComponent/loginComponent.module.ts");
/* harmony import */ var _myListingsPage_myListingsPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./myListingsPage/myListingsPage */ "./src/app/menuPage/myListingsPage/myListingsPage.ts");
/* harmony import */ var _bookmarksPage_bookmarksPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bookmarksPage/bookmarksPage */ "./src/app/menuPage/bookmarksPage/bookmarksPage.ts");
/* harmony import */ var _notificationsPage_notificationsPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./notificationsPage/notificationsPage */ "./src/app/menuPage/notificationsPage/notificationsPage.ts");
/* harmony import */ var _ListingPro_menuPage_LP_bookmarksPage_bookmarksPage_LP__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ListingPro/menuPage_LP/bookmarksPage/bookmarksPage_LP */ "./src/app/ListingPro/menuPage_LP/bookmarksPage/bookmarksPage_LP.ts");
/* harmony import */ var _ListingPro_shared_LP_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ListingPro/shared_LP.module */ "./src/app/ListingPro/shared_LP.module.ts");















let MenuPageModule = class MenuPageModule {
};
MenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _ListingPro_shared_LP_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule_LP"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _menuPage__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]
                }, {
                    path: 'settings',
                    component: _settingsPage_settingsPage__WEBPACK_IMPORTED_MODULE_7__["SettingsPage"]
                }, {
                    path: 'myListingsPage',
                    component: _myListingsPage_myListingsPage__WEBPACK_IMPORTED_MODULE_10__["MyListingsPage"]
                }, {
                    path: 'bookmarksPage',
                    component: _bookmarksPage_bookmarksPage__WEBPACK_IMPORTED_MODULE_11__["BookmarksPage"]
                }, {
                    path: 'bookmarksPage_LP',
                    component: _ListingPro_menuPage_LP_bookmarksPage_bookmarksPage_LP__WEBPACK_IMPORTED_MODULE_13__["BookmarksPage_LP"]
                }, {
                    path: 'notificationsPage',
                    component: _notificationsPage_notificationsPage__WEBPACK_IMPORTED_MODULE_12__["NotificationsPage"]
                }
            ]),
            _loginComponent_loginComponent_module__WEBPACK_IMPORTED_MODULE_9__["LoginComponentModule"]
        ],
        declarations: [_menuPage__WEBPACK_IMPORTED_MODULE_6__["MenuPage"], _settingsPage_settingsPage__WEBPACK_IMPORTED_MODULE_7__["SettingsPage"], _myListingsPage_myListingsPage__WEBPACK_IMPORTED_MODULE_10__["MyListingsPage"], _bookmarksPage_bookmarksPage__WEBPACK_IMPORTED_MODULE_11__["BookmarksPage"], _ListingPro_menuPage_LP_bookmarksPage_bookmarksPage_LP__WEBPACK_IMPORTED_MODULE_13__["BookmarksPage_LP"], _notificationsPage_notificationsPage__WEBPACK_IMPORTED_MODULE_12__["NotificationsPage"]]
    })
], MenuPageModule);



/***/ }),

/***/ "./src/app/menuPage/menuPage.scss":
/*!****************************************!*\
  !*** ./src/app/menuPage/menuPage.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3 {\n  margin: 0;\n}\n\n.section {\n  margin-bottom: 50px;\n  padding: 10px;\n}\n\n.nameLabel {\n  margin-top: 0px;\n  margin-right: 0px;\n  margin-bottom: 0px;\n  margin-left: 0px;\n  word-wrap: break-word;\n  font-size: 24px;\n  font-weight: bolder;\n  line-height: 1.125em;\n  color: #ffffff;\n}\n\n.iconMenu {\n  font-size: 16pt;\n  color: #565656;\n  width: 25px;\n}\n\n.iconRightMenu {\n  float: right;\n  margin-top: 5px;\n  color: #666666;\n  font-size: 16pt;\n}\n\n.btnLogin {\n  width: 100%;\n  padding: 10px;\n  font-size: 15pt;\n  border-radius: 5px;\n}\n\n.elementListTopMenu {\n  margin: 5px;\n  margin-bottom: 0px;\n  font-size: 12px;\n  line-height: 18px;\n  letter-spacing: -0.2px;\n  color: #484848;\n  padding-top: 6px !important;\n  padding-bottom: 6px !important;\n  cursor: pointer !important;\n  display: grid;\n  position: relative;\n  text-align: center;\n  width: 25%;\n  background: none;\n  font-weight: 800;\n  outline: none;\n  text-decoration: none;\n  transition: background 0.3s ease 0s, border-color 0.3s ease 0s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudVBhZ2UvQzpcXGpva2Vzb25qb2VsXFxqb2tlc29uam9lbC9zcmNcXGFwcFxcbWVudVBhZ2VcXG1lbnVQYWdlLnNjc3MiLCJzcmMvYXBwL21lbnVQYWdlL21lbnVQYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREdBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDhEQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9tZW51UGFnZS9tZW51UGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDN7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc2VjdGlvbntcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5uYW1lTGFiZWx7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBsaW5lLWhlaWdodDogMS4xMjVlbTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmljb25NZW51e1xyXG4gIGZvbnQtc2l6ZTogMTZwdDtcclxuICBjb2xvcjogIzU2NTY1NjtcclxuICB3aWR0aDogMjVweDtcclxufVxyXG5cclxuLmljb25SaWdodE1lbnV7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBjb2xvcjogIzY2NjY2NjtcclxuICBmb250LXNpemU6IDE2cHQ7XHJcbn1cclxuXHJcbi5idG5Mb2dpbntcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVwdDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcblxyXG4uZWxlbWVudExpc3RUb3BNZW51e1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcclxuICBjb2xvcjogIzQ4NDg0ODtcclxuICBwYWRkaW5nLXRvcDogNnB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDZweCAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMjUlO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZSAwcywgYm9yZGVyLWNvbG9yIDAuM3MgZWFzZSAwcztcclxufVxyXG4iLCJoMyB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubmFtZUxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgbGluZS1oZWlnaHQ6IDEuMTI1ZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uaWNvbk1lbnUge1xuICBmb250LXNpemU6IDE2cHQ7XG4gIGNvbG9yOiAjNTY1NjU2O1xuICB3aWR0aDogMjVweDtcbn1cblxuLmljb25SaWdodE1lbnUge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgY29sb3I6ICM2NjY2NjY7XG4gIGZvbnQtc2l6ZTogMTZwdDtcbn1cblxuLmJ0bkxvZ2luIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVwdDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZWxlbWVudExpc3RUb3BNZW51IHtcbiAgbWFyZ2luOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcbiAgY29sb3I6ICM0ODQ4NDg7XG4gIHBhZGRpbmctdG9wOiA2cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDZweCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyNSU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2UgMHMsIGJvcmRlci1jb2xvciAwLjNzIGVhc2UgMHM7XG59Il19 */");

/***/ }),

/***/ "./src/app/menuPage/menuPage.ts":
/*!**************************************!*\
  !*** ./src/app/menuPage/menuPage.ts ***!
  \**************************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/Service */ "./src/app/services/Service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _GlobalFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../GlobalFields */ "./src/app/GlobalFields.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Constants */ "./src/app/Constants.ts");
/* harmony import */ var _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../GlobalFieldsMyListing */ "./src/app/GlobalFieldsMyListing.ts");
/* harmony import */ var _services_MyListingService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/MyListingService */ "./src/app/services/MyListingService.ts");









let MenuPage = class MenuPage {
    constructor(service, mlservice, translate, navController) {
        this.service = service;
        this.mlservice = mlservice;
        this.translate = translate;
        this.navController = navController;
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"];
        this.GlobalFieldsMyListing = _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_7__["GlobalFieldsMyListing"];
        this.Constants = _Constants__WEBPACK_IMPORTED_MODULE_6__["Constants"];
        this.errorMgs = '';
        this.selectedMenu = 1;
        this.oldScollPostion = 0;
        this.headerClass = '';
    }
    ionViewDidEnter() {
        console.log('ionViewDidEnter');
        if (_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].site_details.themeEnabled == 'listing-pro')
            return;
        else
            this.mlservice.getRecentViewedListing();
        this.service.setWhiteBlackBackgroundStatusBar();
    }
    loginComplete(finished) {
        if (finished) { //Login ok
            this.errorMgs = '';
        }
    }
    logout() {
        this.service.logout();
    }
    isSelected(id) {
        if (this.selectedMenu == id)
            return ' selectedtypesListHorizontal primary';
        else
            return '';
    }
    isSelectedGetPrimaryColor(id) {
        if (this.selectedMenu == id)
            return this.GlobalFields.getPrimaryColorJson();
        else
            return undefined;
    }
    onScrollHideHeader(event) {
        // console.log(event);
        if (event.detail.scrollTop > 50 && !this.isElementInViewPort()) {
            if (this.oldScollPostion < event.detail.scrollTop)
                this.headerClass = 'headerHidden';
            if (this.oldScollPostion > event.detail.scrollTop)
                this.headerClass = 'headerShown';
        }
        this.oldScollPostion = event.detail.scrollTop;
    }
    //This function just check if element is fully in vertical viewport or not
    isElementInViewPort() {
        let el = document.getElementById('check-point');
        if (el) {
            const rect = el.getBoundingClientRect();
            return rect.bottom <= window.innerHeight;
        }
        return true;
    }
};
MenuPage.ctorParameters = () => [
    { type: _services_Service__WEBPACK_IMPORTED_MODULE_2__["Service"] },
    { type: _services_MyListingService__WEBPACK_IMPORTED_MODULE_8__["MyListingService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
MenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'menuPage',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./menuPage.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menuPage/menuPage.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./menuPage.scss */ "./src/app/menuPage/menuPage.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_2__["Service"], _services_MyListingService__WEBPACK_IMPORTED_MODULE_8__["MyListingService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
], MenuPage);



/***/ }),

/***/ "./src/app/menuPage/myListingsPage/myListingsPage.scss":
/*!*************************************************************!*\
  !*** ./src/app/menuPage/myListingsPage/myListingsPage.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section {\n  margin-bottom: 50px;\n}\n\n.sectionLittler {\n  margin-bottom: 10px;\n}\n\n.section {\n  margin-bottom: 50px;\n}\n\n.sectionLittler {\n  margin-bottom: 10px;\n}\n\n.statsSection {\n  background: #fff;\n  padding: 15px;\n  margin-bottom: 15px;\n  transition: box-shadow 0.25s ease-in-out;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.07);\n  border-radius: 3px;\n}\n\n.statsBox {\n  width: 100%;\n  border-radius: 2px;\n  overflow: hidden;\n  display: flex;\n  height: 60px;\n  padding: 15px;\n  margin-bottom: 10px;\n  align-items: center;\n  color: white;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n}\n\n.statsBox h2[dir=ltr] {\n  margin-right: 15px;\n}\n\n.statsBox h2[dir=rtl] {\n  margin-left: 15px;\n}\n\n.statsBox p {\n  margin-top: 25px;\n}\n\n.statsBox i {\n  color: rgba(0, 0, 0, 0.15);\n  position: absolute;\n  font-size: 28px;\n}\n\n.statsBox i[dir=ltr] {\n  right: 50px;\n}\n\n.statsBox i[dir=rtl] {\n  left: 50px;\n}\n\n.numberStats {\n  text-align: center;\n  font-size: 14px;\n  display: flex;\n  justify-content: space-around;\n  color: #757d83;\n}\n\n.numberStats p span {\n  font-size: 22px;\n  font-weight: 400;\n  margin-bottom: 10px;\n  color: #383838;\n  display: flex;\n  /* -webkit-box-align: center; */\n  align-items: center;\n  justify-content: center;\n  transition: 0.2s ease;\n}\n\n.animated-bars {\n  width: 2px;\n  background: rgba(0, 0, 0, 0.15);\n  height: 12px;\n  border-radius: 0;\n  position: relative;\n  transition: 0.2s ease;\n  margin: auto;\n}\n\n.statusListing {\n  padding: 5px;\n  border-radius: 50px;\n  background-color: #eeeeee;\n  /*position: absolute;\n  bottom: 5px;\n  z-index: 99999;*/\n  font-size: 7pt;\n  left: 10px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudVBhZ2UvbXlMaXN0aW5nc1BhZ2UvQzpcXGpva2Vzb25qb2VsXFxqb2tlc29uam9lbC9zcmNcXGFwcFxcbWVudVBhZ2VcXG15TGlzdGluZ3NQYWdlXFxteUxpc3RpbmdzUGFnZS5zY3NzIiwic3JjL2FwcC9tZW51UGFnZS9teUxpc3RpbmdzUGFnZS9teUxpc3RpbmdzUGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRjs7QURDQTtFQUNFLG1CQUFBO0FDRUY7O0FEQ0E7RUFDRSxtQkFBQTtBQ0VGOztBREFBO0VBQ0UsbUJBQUE7QUNHRjs7QURBQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBR0Esd0NBQUE7RUFHQSwyQ0FBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUdBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7QUNHRjs7QUREQTtFQUNFLGlCQUFBO0FDSUY7O0FERkE7RUFDRSxnQkFBQTtBQ0tGOztBREhBO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNNRjs7QURKQTtFQUNFLFdBQUE7QUNPRjs7QURMQTtFQUNFLFVBQUE7QUNRRjs7QURMQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUdBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUNRRjs7QUROQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUdBLGFBQUE7RUFDQSwrQkFBQTtFQUVBLG1CQUFBO0VBR0EsdUJBQUE7RUFFQSxxQkFBQTtBQ1NGOztBRE5BO0VBQ0UsVUFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSxxQkFBQTtFQUNBLFlBQUE7QUNTRjs7QURMQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0E7O2tCQUFBO0VBR0EsY0FBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUNRRiIsImZpbGUiOiJzcmMvYXBwL21lbnVQYWdlL215TGlzdGluZ3NQYWdlL215TGlzdGluZ3NQYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbntcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcbi5zZWN0aW9uTGl0dGxlcntcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbntcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcbi5zZWN0aW9uTGl0dGxlcntcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uc3RhdHNTZWN0aW9ue1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC1ib3gtc2hhZG93IC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC1ib3gtc2hhZG93IC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuMjVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjI1cyBlYXNlLWluLW91dCwgLXdlYmtpdC1ib3gtc2hhZG93IC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsMCwwLC4wNyk7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMDcpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuXHJcbi5zdGF0c0JveHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zdGF0c0JveCBoMltkaXI9XCJsdHJcIl17XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcbi5zdGF0c0JveCBoMltkaXI9XCJydGxcIl17XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuLnN0YXRzQm94IHB7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG4uc3RhdHNCb3ggaSB7XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjE1KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG59XHJcbi5zdGF0c0JveCBpW2Rpcj1cImx0clwiXXtcclxuICByaWdodDogNTBweDtcclxufVxyXG4uc3RhdHNCb3ggaVtkaXI9XCJydGxcIl17XHJcbiAgbGVmdDogNTBweDtcclxufVxyXG5cclxuLm51bWJlclN0YXRze1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBjb2xvcjogIzc1N2Q4MztcclxufVxyXG4ubnVtYmVyU3RhdHMgcCBzcGFue1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgY29sb3I6ICMzODM4Mzg7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvKiAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyOyAqL1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjJzIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5hbmltYXRlZC1iYXJzIHtcclxuICB3aWR0aDogMnB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjE1KTtcclxuICBoZWlnaHQ6IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnMgZWFzZTtcclxuICB0cmFuc2l0aW9uOiAuMnMgZWFzZTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcblxyXG4uc3RhdHVzTGlzdGluZ3tcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xyXG4gIC8qcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogNXB4O1xyXG4gIHotaW5kZXg6IDk5OTk5OyovXHJcbiAgZm9udC1zaXplOiA3cHQ7XHJcbiAgbGVmdDogMTBweDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuIiwiLnNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uc2VjdGlvbkxpdHRsZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5zZWN0aW9uTGl0dGxlciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5zdGF0c1NlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtYm94LXNoYWRvdyAwLjI1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC1ib3gtc2hhZG93IDAuMjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMjVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LWJveC1zaGFkb3cgMC4yNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA3KTtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA3KTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uc3RhdHNCb3gge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNjBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3RhdHNCb3ggaDJbZGlyPWx0cl0ge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5zdGF0c0JveCBoMltkaXI9cnRsXSB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uc3RhdHNCb3ggcCB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5zdGF0c0JveCBpIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuXG4uc3RhdHNCb3ggaVtkaXI9bHRyXSB7XG4gIHJpZ2h0OiA1MHB4O1xufVxuXG4uc3RhdHNCb3ggaVtkaXI9cnRsXSB7XG4gIGxlZnQ6IDUwcHg7XG59XG5cbi5udW1iZXJTdGF0cyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBjb2xvcjogIzc1N2Q4Mztcbn1cblxuLm51bWJlclN0YXRzIHAgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICMzODM4Mzg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLyogLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjsgKi9cbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuXG4uYW5pbWF0ZWQtYmFycyB7XG4gIHdpZHRoOiAycHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGhlaWdodDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5zdGF0dXNMaXN0aW5nIHtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xuICAvKnBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1cHg7XG4gIHotaW5kZXg6IDk5OTk5OyovXG4gIGZvbnQtc2l6ZTogN3B0O1xuICBsZWZ0OiAxMHB4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/menuPage/myListingsPage/myListingsPage.ts":
/*!***********************************************************!*\
  !*** ./src/app/menuPage/myListingsPage/myListingsPage.ts ***!
  \***********************************************************/
/*! exports provided: MyListingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyListingsPage", function() { return MyListingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _GlobalFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../GlobalFields */ "./src/app/GlobalFields.ts");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Constants */ "./src/app/Constants.ts");
/* harmony import */ var _services_Service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/Service */ "./src/app/services/Service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/dialogs/ngx */ "./node_modules/@ionic-native/dialogs/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _MyListing_modalAdd_modalAdd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../MyListing/modalAdd/modalAdd */ "./src/app/MyListing/modalAdd/modalAdd.ts");
/* harmony import */ var _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../GlobalFieldsMyListing */ "./src/app/GlobalFieldsMyListing.ts");
/* harmony import */ var _services_MyListingService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/MyListingService */ "./src/app/services/MyListingService.ts");














let MyListingsPage = class MyListingsPage {
    constructor(service, mlservice, translate, navController, dialogs, platform, geolocation, nativeGeocoder, alertController, router, modalCtrl) {
        this.service = service;
        this.mlservice = mlservice;
        this.translate = translate;
        this.navController = navController;
        this.dialogs = dialogs;
        this.platform = platform;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.alertController = alertController;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"];
        this.Constants = _Constants__WEBPACK_IMPORTED_MODULE_4__["Constants"];
        this.selectedTab = 1;
        this.currentPage = 1;
        this.loadingSection = false;
        this.loadingMoreData = false;
        this.noMoreMyListings = false;
        this.translate.get('ARE_YOU_SURE').subscribe((msg) => {
            this.are_you_sure = msg;
        });
        this.translate.get('ARE_YOU_SURE_DELETING').subscribe((msg) => {
            this.you_are_deleting = msg;
        });
        this.translate.get('ALERT_YES').subscribe((msg) => {
            this.yes = msg;
        });
        this.translate.get('CANCEL').subscribe((msg) => {
            this.cancel = msg;
        });
        this.translate.get('SUCCESS_MSG').subscribe((msg) => {
            this.success_msg = msg;
        });
        this.translate.get('SUCCESS_DELETE_MSG').subscribe((msg) => {
            this.success_delete_msg = msg;
        });
        this.translate.get('ALERT_CLOSE').subscribe((msg) => {
            this.close_msg = msg;
        });
    }
    ionViewDidEnter() {
        this.service.setWhiteBlackBackgroundStatusBar();
        if (_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].isLoggedIn) {
            this.getMyListings();
            this.getCurrentUserInfo();
        }
        else {
            this.router.navigateByUrl('tabs/menuPage');
        }
    }
    getMyListings() {
        if (_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].isLoggedIn) {
            this.loadingMoreData = true;
            this.mlservice.getMyListings(this.currentPage).subscribe((data) => {
                if (!this.myListings || this.currentPage == 1)
                    this.myListings = [];
                this.myListings = this.myListings.concat(data);
                if (data && data.length < 20)
                    this.noMoreMyListings = true;
                this.loadingMoreData = false;
            }, err => {
                this.service.refreshCookie();
            });
        }
    }
    loadMoreMyListings() {
        this.loadingMoreData = true;
        this.currentPage++;
        this.getMyListings();
    }
    getCurrentUserInfo() {
        if (_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].isLoggedIn) {
            this.loadingSection = true;
            this.service.getCurrentUserInfo().subscribe((data) => {
                this.currentUserInfo = data;
                this.loadingSection = false;
            }, err => {
                this.service.refreshCookie();
            });
        }
    }
    editListing(listing) {
        this.GlobalFields.loadingSoft = true;
        this.mlservice.getMyListingDetailsById(listing.id).subscribe((data) => {
            if (data) {
                _GlobalFieldsMyListing__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsMyListing"].listingToEdit = data;
                this.openAddModal();
                this.GlobalFields.loadingSoft = false;
            }
        }, error => {
            console.log(error);
            let msg = "";
            if (error && error.error)
                msg = error.error.message;
            else if (error)
                msg = error.message;
            this.GlobalFields.openAlert(this.alertController, "Error", "Error on web server", msg);
            this.GlobalFields.loadingSoft = false;
        });
    }
    deleteListing(listing) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const name = (listing && listing.title && listing.title.rendered) ? listing.title.rendered : "";
            const id = (listing && listing.id) ? listing.id : undefined;
            const alert = yield this.alertController.create({
                header: this.are_you_sure,
                message: this.you_are_deleting + ' <strong>' + name + '</strong>',
                buttons: [
                    {
                        text: this.cancel,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: this.yes,
                        handler: () => {
                            this.GlobalFields.loadingSoft = true;
                            this.mlservice.deleteListing(listing.id).subscribe((data) => {
                                this.GlobalFields.openSuccessAlert(this.alertController, this.success_msg, this.success_delete_msg, "", this.close_msg);
                                this.GlobalFields.loadingSoft = false;
                                this.currentPage = 1;
                                this.service.clearAllCache();
                                this.getMyListings();
                            }, error => {
                                console.log(error);
                                let msg = "";
                                if (error && error.error)
                                    msg = error.error.message;
                                else if (error)
                                    msg = error.message;
                                this.GlobalFields.openAlert(this.alertController, "Error", "Error on web server", msg);
                                this.GlobalFields.loadingSoft = false;
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    openAddModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.listingToEdit);
            const modal = yield this.modalCtrl.create({
                component: _MyListing_modalAdd_modalAdd__WEBPACK_IMPORTED_MODULE_11__["ModalAddNode"],
                componentProps: { a: undefined }
            });
            return yield modal.present();
        });
    }
};
MyListingsPage.ctorParameters = () => [
    { type: _services_Service__WEBPACK_IMPORTED_MODULE_5__["Service"] },
    { type: _services_MyListingService__WEBPACK_IMPORTED_MODULE_13__["MyListingService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_7__["Dialogs"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_9__["NativeGeocoder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
MyListingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'myListingsPage',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./myListingsPage.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menuPage/myListingsPage/myListingsPage.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./myListingsPage.scss */ "./src/app/menuPage/myListingsPage/myListingsPage.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_5__["Service"], _services_MyListingService__WEBPACK_IMPORTED_MODULE_13__["MyListingService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_7__["Dialogs"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_9__["NativeGeocoder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])
], MyListingsPage);



/***/ }),

/***/ "./src/app/menuPage/notificationsPage/notificationsPage.scss":
/*!*******************************************************************!*\
  !*** ./src/app/menuPage/notificationsPage/notificationsPage.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section {\n  margin-bottom: 50px;\n}\n\n.sectionLittler {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudVBhZ2Uvbm90aWZpY2F0aW9uc1BhZ2UvQzpcXGpva2Vzb25qb2VsXFxqb2tlc29uam9lbC9zcmNcXGFwcFxcbWVudVBhZ2VcXG5vdGlmaWNhdGlvbnNQYWdlXFxub3RpZmljYXRpb25zUGFnZS5zY3NzIiwic3JjL2FwcC9tZW51UGFnZS9ub3RpZmljYXRpb25zUGFnZS9ub3RpZmljYXRpb25zUGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRjs7QURDQTtFQUNFLG1CQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9tZW51UGFnZS9ub3RpZmljYXRpb25zUGFnZS9ub3RpZmljYXRpb25zUGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb257XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG4uc2VjdGlvbkxpdHRsZXJ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufSIsIi5zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLnNlY3Rpb25MaXR0bGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/menuPage/notificationsPage/notificationsPage.ts":
/*!*****************************************************************!*\
  !*** ./src/app/menuPage/notificationsPage/notificationsPage.ts ***!
  \*****************************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _GlobalFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../GlobalFields */ "./src/app/GlobalFields.ts");
/* harmony import */ var _services_Service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/Service */ "./src/app/services/Service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");







let NotificationsPage = class NotificationsPage {
    constructor(service, translate, navController, inAppBrowser) {
        this.service = service;
        this.translate = translate;
        this.navController = navController;
        this.inAppBrowser = inAppBrowser;
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"];
        this.service.getNotifications();
    }
    openLink(url) {
        console.log(url);
        const browser = this.inAppBrowser.create(url, '_blank');
        // browser.close();
    }
};
NotificationsPage.ctorParameters = () => [
    { type: _services_Service__WEBPACK_IMPORTED_MODULE_4__["Service"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"] }
];
NotificationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'notificationsPage',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notificationsPage.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menuPage/notificationsPage/notificationsPage.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./notificationsPage.scss */ "./src/app/menuPage/notificationsPage/notificationsPage.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_4__["Service"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"]])
], NotificationsPage);



/***/ }),

/***/ "./src/app/menuPage/settingsPage/settingsPage.scss":
/*!*********************************************************!*\
  !*** ./src/app/menuPage/settingsPage/settingsPage.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section {\n  margin-bottom: 50px;\n}\n\n.sectionLittler {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudVBhZ2Uvc2V0dGluZ3NQYWdlL0M6XFxqb2tlc29uam9lbFxcam9rZXNvbmpvZWwvc3JjXFxhcHBcXG1lbnVQYWdlXFxzZXR0aW5nc1BhZ2VcXHNldHRpbmdzUGFnZS5zY3NzIiwic3JjL2FwcC9tZW51UGFnZS9zZXR0aW5nc1BhZ2Uvc2V0dGluZ3NQYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsbUJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL21lbnVQYWdlL3NldHRpbmdzUGFnZS9zZXR0aW5nc1BhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9ue1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuLnNlY3Rpb25MaXR0bGVye1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn0iLCIuc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5zZWN0aW9uTGl0dGxlciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/menuPage/settingsPage/settingsPage.ts":
/*!*******************************************************!*\
  !*** ./src/app/menuPage/settingsPage/settingsPage.ts ***!
  \*******************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _GlobalFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../GlobalFields */ "./src/app/GlobalFields.ts");
/* harmony import */ var _services_Service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/Service */ "./src/app/services/Service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/dialogs/ngx */ "./node_modules/@ionic-native/dialogs/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/theme.service */ "./src/app/services/theme.service.ts");
/* harmony import */ var _services_LocationService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/LocationService */ "./src/app/services/LocationService.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");














let SettingsPage = class SettingsPage {
    constructor(service, translate, navController, dialogs, platform, geolocation, nativeGeocoder, alertController, themeService, locationService, inAppBrowser, appVersion, router) {
        this.service = service;
        this.translate = translate;
        this.navController = navController;
        this.dialogs = dialogs;
        this.platform = platform;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.alertController = alertController;
        this.themeService = themeService;
        this.locationService = locationService;
        this.inAppBrowser = inAppBrowser;
        this.appVersion = appVersion;
        this.router = router;
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"];
        this.appVersionNumber = '';
        this.navigateAsRoot = false;
        this.appVersion.getVersionNumber().then(value => {
            this.appVersionNumber = value;
        }).catch(err => {
            console.log(err);
        });
    }
    ionViewDidEnter() {
        //To avoid showing the back button if the navigation to this page is as root page
        this.navigateAsRoot = _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].navigateAsRoot;
        _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].navigateAsRoot = false;
    }
    clearCache() {
        this.service.clearAllCache();
        this.GlobalFields.loadingHard = true;
        setTimeout(() => {
            _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].firstLoading = true;
        }, 200);
    }
    setLang(lang) {
        _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].setLang(lang, this.translate);
        _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].loadingHard = true;
        setTimeout(() => {
            _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].loadingHard = false;
        }, 100);
    }
    goBack() {
        this.navController.pop();
    }
    openLink(url) {
        console.log(url);
        const browser = this.inAppBrowser.create(url, '_blank');
        // browser.close();
    }
};
SettingsPage.ctorParameters = () => [
    { type: _services_Service__WEBPACK_IMPORTED_MODULE_4__["Service"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_6__["Dialogs"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeGeocoder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_theme_service__WEBPACK_IMPORTED_MODULE_9__["ThemeService"] },
    { type: _services_LocationService__WEBPACK_IMPORTED_MODULE_10__["LocationService"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__["InAppBrowser"] },
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_12__["AppVersion"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] }
];
SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'settings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settingsPage.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menuPage/settingsPage/settingsPage.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settingsPage.scss */ "./src/app/menuPage/settingsPage/settingsPage.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_4__["Service"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_6__["Dialogs"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeGeocoder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _services_theme_service__WEBPACK_IMPORTED_MODULE_9__["ThemeService"],
        _services_LocationService__WEBPACK_IMPORTED_MODULE_10__["LocationService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__["InAppBrowser"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_12__["AppVersion"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]])
], SettingsPage);



/***/ })

}]);
//# sourceMappingURL=menuPage-menuPage-module-es2015.js.map