function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ListingPro-searchPage-search_LP-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/searchPage/filterModal/filterModal_LP.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/searchPage/filterModal/filterModal_LP.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppListingProSearchPageFilterModalFilterModal_LPHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header style=\"background-color: white; border: none; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);\">\n  <ion-toolbar>\n    <ion-row class=\"filters\">\n      <div style=\"background-color: white; padding: 10px; text-align: center; height: 100%;\">\n        <ion-icon name=\"close\" style=\"font-size: 20px;\" (click)=\"closeModal()\"></ion-icon>\n      </div>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content *ngIf=\"GlobalFieldsListingPro.listingTypeDetail && GlobalFieldsListingPro.listingTypeDetail.filter_status\"  [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\"  dir=\"{{GlobalFields.getLanguageLayout()}}\">\n\n  <div style=\"padding: 15px; height: 100%; width: 100%; margin-top: 10px; margin-bottom: 130px\">\n\n    <div>\n\n      <!-- Where - Search by keyword -->\n      <div class=\"filterSection\">\n        <i class=\"fas fa-search iconsChoices\"></i><ion-label class=\"titleSectionFilter\">{{'WHAT' | translate}}</ion-label>\n        <ion-input clearInput placeholder=\"Insert\"  style=\"margin-left: 15px; width: calc(100% - 30px);\"\n                   [(ngModel)]=\"GlobalFieldsListingPro.filtersSearch.skeyword\"></ion-input>\n      </div>\n\n      <!-- What - region/locations -->\n      <div class=\"filterSection\">\n        <i class=\"fas fa-map-marker-alt iconsChoices\"></i> <ion-label class=\"titleSectionFilter\">{{'WHERE' | translate}}\n       </ion-label>\n\n        <i *ngIf=\"!GlobalFieldsListingPro.filtersSearch.location || GlobalFieldsListingPro.filtersSearch.location != GlobalFields.address\" (click)=\"getMyAddress()\" class=\"fas fa-location-arrow\" style=\" float: left; margin-top: 45px;\"></i>\n        <i *ngIf=\"GlobalFieldsListingPro.filtersSearch.location && GlobalFieldsListingPro.filtersSearch.location == GlobalFields.address\"  (click)=\"getMyAddress()\" class=\"fas fa-location-arrow\" style=\" float: left; margin-top: 45px;\" [ngStyle]=\"GlobalFields.getPrimaryColorJson()\"></i>\n\n        <!-- Address -->\n        <div style=\"display: flex\"*ngIf=\"GlobalFieldsListingPro.filtersSearch.location\">\n          <div style=\"width: 80%; margin: auto; color: #9c9c9c; font-style: italic; margin: auto; padding: 10px 5px;\"> <!-- Location -->\n            {{GlobalFieldsListingPro.filtersSearch.location}}\n          </div>\n          <div style=\"width: 10%;\" *ngIf=\"GlobalFieldsListingPro.filtersSearch.location\" >\n            <i (click)=\"GlobalFieldsListingPro.filtersSearch.location = undefined\" class=\"far fa-trash-alt rightClearBtn\"></i>\n          </div>\n        </div>\n\n        <!-- Locations-->\n        <div *ngIf=\"!GlobalFieldsListingPro.filtersSearch.location\" style=\"width: 100%;\">\n          <i *ngIf=\"GlobalFieldsListingPro.filtersSearch.locations && GlobalFieldsListingPro.filtersSearch.locations!=''\" (click)=\"GlobalFieldsListingPro.filtersSearch.locations = undefined\" class=\"far fa-trash-alt rightClearBtn\"></i>\n          <ion-item style=\"padding:0px; width: calc(90% - 30px)\">\n            <ion-select [cancelText]=\"'CANCEL' | translate\" [okText]=\"'SELECT' | translate\" [(ngModel)]=\"GlobalFieldsListingPro.filtersSearch.locations\" placeholder=\"{{'SELECT' | translate}}\" selectedText=\"{{GlobalFieldsListingPro.filtersSearch.locations}}\">\n              <ion-select-option  *ngFor=\"let r of GlobalFieldsListingPro.regions\" value=\"{{r.name}}\">{{r.name}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </div>\n\n      </div>\n\n\n      <!-- Near me -->\n      <div class=\"filterSection\" *ngIf=\"GlobalFieldsListingPro.listingTypeDetail.filter_status.enable_nearme_search_filter\">\n        <br>\n        <ion-list>\n          <ion-item >\n            <ion-label>{{'NEAR_YOU' | translate}}</ion-label>\n            <ion-toggle color=\"primary\" [(ngModel)]=\"GlobalFieldsListingPro.filtersSearch.nearMe\"></ion-toggle>\n          </ion-item>\n        </ion-list>\n        <br>\n\n        <span *ngIf=\"GlobalFieldsListingPro.filtersSearch.nearMe\">\n           <!-- Proximity -->\n        <i class=\"far fa-dot-circle iconsChoices\"> </i> <ion-label class=\"titleSectionFilter\">Proximity</ion-label>\n          {{GlobalFieldsListingPro.filtersSearch.range}} {{GlobalFieldsListingPro.listingTypeDetail.filter_status.lp_nearme_filter_param}}\n          <ion-range [(ngModel)]=\"GlobalFieldsListingPro.filtersSearch.range\"\n                     min=\"{{GlobalFieldsListingPro.listingTypeDetail.filter_status.enable_readious_search_filter_min}}\"\n                     max=\"{{GlobalFieldsListingPro.listingTypeDetail.filter_status.enable_readious_search_filter_max}}\"\n                     step=\"10\"\n                     color=\"secondary\" pin=\"true\"></ion-range>\n        </span>\n      </div>\n\n      <!-- Prices -->\n      <div class=\"filterSection\" *ngIf=\"GlobalFieldsListingPro.listingTypeDetail.filter_status.enable_price_search_filter\" >\n        <ion-label class=\"titleSectionFilter\">{{'PRICE_RANGE' | translate}}</ion-label>\n        <br><br>\n        <ion-segment [(ngModel)]=\"GlobalFieldsListingPro.filtersSearch.price_status\">\n          <ion-segment-button value=\"'inexpensive'\">\n            <ion-label>{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"'moderate'\">\n            <ion-label>{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"'pricey'\">\n            <ion-label>{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"'ultra_high_end'\">\n            <ion-label>{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </div>\n\n\n      <!-- Booleans -->\n      <div class=\"filterSection\">\n        <br>\n        <ion-list>\n          <ion-item *ngIf=\"GlobalFieldsListingPro.listingTypeDetail.filter_status.enable_opentime_search_filter\">\n            <ion-label>{{'OPEN_NOW' | translate}}</ion-label>\n            <ion-toggle color=\"primary\" [(ngModel)]=\"GlobalFieldsListingPro.filtersSearch.openNow\"></ion-toggle>\n          </ion-item>\n        </ion-list>\n      </div>\n\n      <!-- categories-->\n      <div class=\"filterSection\" *ngIf=\"GlobalFieldsListingPro.listingTypeDetail.filter_status.enable_cats_search_filter && GlobalFieldsListingPro.listingCategories\">\n        <i class=\"fas fa-tasks iconsChoices\"></i> <ion-label class=\"titleSectionFilter\">{{'CATEGORIES' | translate}}</ion-label>\n        <i *ngIf=\"GlobalFieldsListingPro.filtersSearch.categories && GlobalFieldsListingPro.filtersSearch.categories.length > 0\" (click)=\"GlobalFieldsListingPro.filtersSearch.categories = undefined\" class=\"far fa-trash-alt rightClearBtn\"></i>\n        <ion-item style=\"padding:0px; width: calc(100% - 30px)\">\n          <ion-select [cancelText]=\"'CANCEL' | translate\" [okText]=\"'SELECT' | translate\"  [(ngModel)]=\"GlobalFieldsListingPro.filtersSearch.categories\" placeholder=\"{{'SELECT' | translate}}\" selectedText=\"{{GlobalFieldsListingPro.filtersSearch.categories}}\">\n            <ion-select-option *ngFor=\"let c of GlobalFieldsListingPro.listingCategories\" value=\"{{c.name}}\">{{c.name}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </div>\n\n      <!-- Extra fields filter -->\n      <span *ngIf=\"GlobalFieldsListingPro.listingTypeDetail.filter_status.enable_extrafields_filter\">\n\n       <!-- <h3 style=\"text-align: center\">MORE FILTERS</h3> -->\n\n\n        <!-- features -->\n        <div class=\"filterSection\">\n         <i class=\"far fa-check-circle iconsChoices\"></i> <ion-label class=\"titleSectionFilter\">{{'DETAILS'| translate}}</ion-label>\n          <ion-item *ngFor=\"let t of GlobalFieldsListingPro.filtersSearch.features\" style=\" font-size: 10pt; padding: 0; margin-bottom: -11px; background-color: transparent;\">\n            <ion-label>{{t.val.name}}</ion-label>\n            <ion-checkbox slot=\"end\" [(ngModel)]=\"t.isChecked\" ></ion-checkbox>\n          </ion-item>\n        </div>\n\n\n      </span>\n\n\n    </div>\n\n\n    <div class=\"filterSection\" style=\"text-align: right; color: #f13224;\" (click)=\"clearFilters()\"><i class=\"far fa-trash-alt\"></i> {{'CLEAR_FILTER'| translate}}</div>\n\n    <br>\n    <br>\n  </div>\n\n\n\n</ion-content>\n\n\n<ion-footer style=\"display: inline-flex; padding: 5px; padding-bottom: 20px; background-color: white; border: none;\"   dir=\"{{GlobalFields.getLanguageLayout()}}\">\n  <button class=\"buttonSearch\" [ngStyle]=\"GlobalFields.getPrimaryColorJson()\" (click)=\"getFilteredListingsFirstTime(); closeModal()\">\n    <ion-icon style=\"margin-bottom:-3px;\" name=\"search\"></ion-icon> <ion-text style=\"margin-left: 8px;\">{{'SHOW_RESULTS' | translate}}</ion-text>\n  </button>\n</ion-footer>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/searchPage/mapModal/mapModal_LP.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/searchPage/mapModal/mapModal_LP.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppListingProSearchPageMapModalMapModal_LPHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ionHeaderHeader\" dir=\"{{GlobalFields.getLanguageLayout()}}\" style=\"background-color: white; border: none; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);\">\n    <ion-toolbar  class=\"toolbarHeader\">\n        <div class=\"headerContainer\">\n            <div class=\"headerCol1\" (click)=\"closeModal()\">\n                <i class=\"fas fa-times\"  ></i>\n            </div>\n            <div class=\"headerCol2\">\n                <span>{{'MAP' | translate}}</span>\n            </div>\n        </div>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content  style=\"overflow: hidden;\"  dir=\"{{GlobalFields.getLanguageLayout()}}\">\n\n\n\n    <!-- ***************** Google Maps ***************** -->\n\n    <!-- https://github.com/SebastianM/angular-google-maps -->\n    <!-- https://www.npmjs.com/package/agm-direction -->\n    <span *ngIf=\"GlobalFields.site_details.mapType == 1\">\n        <agm-map *ngIf=\"!loading\"\n                 [latitude]=\"myLat\"\n                 [longitude]=\"myLng\"\n                 [zoom]=\"currentZoom\"\n                 [zoomControl]=\"false\"\n                 [streetViewControl]=\"false\"\n                 [clickableIcons]=\"false\"\n                 (centerChange)=\"centerChanged($event)\"\n                 [gestureHandling]=\"'greedy'\">\n\n            <agm-marker *ngIf=\"GlobalFields.lat && GlobalFields.long\"\n                    [latitude]=\"GlobalFields.lat\"\n                    [longitude]=\"GlobalFields.long\"\n                    [iconUrl]= \"{url: '../../../assets/imgs/street-view.png', labelOrigin:{x:22.5,y:20}, scaledSize: {height: 40, width: 40}}\">\n\n               <!-- <agm-info-window>\n                    <ion-button color=\"primary\">Search nearby listings</ion-button>\n                </agm-info-window>\n                -->\n            </agm-marker>\n\n           <!-- <agm-marker\n                    *ngFor=\"let m of positions; let i = index\"\n                    (markerClick)=\"clickedMarker(m)\"\n                    [latitude]=\"m.lat\"\n                    [longitude]=\"m.lng\"\n                    [markerDraggable]=\"m.draggable\"\n                    [label]=\"m.labelOptions\"\n                    [iconUrl]=\"m.iconUrl\">\n\n                <agm-info-window [isOpen]=\"m.listing == selectedListing\">\n                    <div style=\"width: 100%;\" *ngIf=\"selectedListing!=undefined\">\n                        <page-listingList [listing]=\"selectedListing\" [type]=\"'1'\" [search]=\"false\"></page-listingList>\n                    </div>\n                </agm-info-window>\n\n            </agm-marker>\n\n            -->\n\n             <agm-marker-cluster imagePath=\"https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclustererplus/images/m\">\n               <agm-overlay\n                       *ngFor=\"let m of positions; let i = index\"\n                       (markerClick)=\"clickedMarker(m)\"\n                       [latitude]=\"m.lat\"\n                       [longitude]=\"m.lng\">\n\n                    <!-- Custom pin HTML-->\n                    <div class=\"imgMapPin\"><img [src]=\"m.iconImgUrlHtml\"><img class=\"iconMapPinWithImg\" [src]=\"m.iconNameHtml\"></div>\n\n                   <!-- Window opened on click-->\n                    <agm-info-window [isOpen]=\"m.listing == selectedListing\">\n                        <div style=\"width: 100%;\" *ngIf=\"selectedListing!=undefined\">\n                            <listingList_LP [listing]=\"selectedListing\" [type]=\"'1'\" [search]=\"false\"></listingList_LP>\n                        </div>\n                    </agm-info-window>\n\n               </agm-overlay>\n              </agm-marker-cluster>\n\n\n\n            <!--  <agm-direction *ngFor=\"let pos of positions\" [origin]=\"pos\" [destination]=\"pos\"></agm-direction> -->\n        </agm-map>\n    </span>\n\n\n    <!-- ***************** Open Street Maps ***************** -->\n\n    <span *ngIf=\"GlobalFields.site_details.mapType == 2\">\n        <div id=\"map\" style=\"width:100%; height:100%;\"></div>\n\n\n        <div *ngIf=\"showSelected\" class=\"listingCard\">\n            <listingList_LP [listing]=\"selectedListing\" [type]=\"'1'\" [search]=\"true\"></listingList_LP>\n        </div>\n\n    </span>\n\n</ion-content>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/searchPage/searchPage_LP.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/searchPage/searchPage_LP.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppListingProSearchPageSearchPage_LPHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Lista tipi listing -->\n<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <!-- If Side menu is used-->\n    <ion-buttons *ngIf=\"GlobalFields.site_details.navigationType==2\" slot=\"start\">\n      <ion-menu-button style=\"color: #3b3c3c\"></ion-menu-button>\n    </ion-buttons>\n    <ion-row class=\"filters\">\n      <ion-col col-6 style=\"float: left\">\n        <ion-item *ngIf=\"GlobalFieldsListingPro.listingTypeDetail && GlobalFieldsListingPro.listingTypeDetail\">\n          <ion-select interface=\"popover\" [(ngModel)]=\"GlobalFieldsListingPro.filtersSearch.order\" style=\"max-width: 100%;\"\n                      [cancelText]=\"'CANCEL' | translate\" [okText]=\"'SELECT' | translate\"\n                      (ionChange)=\"initialCall(false)\">\n            <ion-label>asd <ion-icon name=\"list\" style=\"font-size: 24px !important; color: #484848 !important; font-weight: bolder; position: relative; top: 3px;\"></ion-icon></ion-label>\n            <ion-select-option *ngFor=\"let order of GlobalFieldsListingPro.listingTypeDetail.order_type\" value=\"{{order}}\">\n          <span [ngSwitch]=\"order\">\n            <span *ngSwitchCase=\"'MOST_REVIEWED'\">Most Reviewed</span>\n            <span *ngSwitchCase=\"'MOST_VIEWED'\">Most Viewed</span>\n            <span *ngSwitchCase=\"'HIGHEST_RATED'\">Highest Rated</span>\n          </span>\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col col-6 style=\"float: right\">\n        <button class=\"btnOrderSearch\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n          <span *ngIf=\"!GlobalFieldsListingPro.filtersSearch.listingsCount && GlobalFieldsListingPro.filtersSearch.listingsCount != 0\"></span>\n          <span *ngIf=\"GlobalFieldsListingPro.filtersSearch.listingsCount == 0\">{{'NO_RESULTS' | translate}}</span>\n          <span *ngIf=\"GlobalFieldsListingPro.filtersSearch.listingsCount && GlobalFieldsListingPro.filtersSearch.listingsCount > 0\"> {{GlobalFieldsListingPro.filtersSearch.listingsCount}} {{'RESULTS' | translate}}</span>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-content class=\"cards-bg social-cards\"  [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\"  [scrollEvents]=\"true\" (ionScroll)=\"onScrollHideHeader($event)\"> -->\n<ion-content class=\"cards-bg social-cards\"  [ngStyle]=\"GlobalFields.getBodyColorBackgroundJsonSearchPage()\"  dir=\"{{GlobalFields.getLanguageLayout()}}\">\n\n  <!-- Filter/Map buttons Float Buttons Style-->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"GlobalFields.site_details.filtersBtnStyle==1\">\n    <ion-fab-button class=\"filterDefaultBtnFiltersContainer\"   color=\"primary\" (click)=\"openFilter()\">\n      <i class=\"fas fa-filter\" style=\"font-size: 22px; color: white;\"></i>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\" *ngIf=\"GlobalFields.site_details.filtersBtnStyle==1\">\n    <ion-fab-button class=\"filterDefaultBtnFiltersContainer\"  color=\"primary\" (click)=\"openMap()\" [disabled]=\"!GlobalFieldsListingPro.filteredListings || !(GlobalFieldsListingPro.filteredListings.length > 0)\">\n      <i class=\"fas fa-map-marked-alt\" style=\"font-size: 22px; color: white;\"></i>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-fab vertical=\"bottom\" slot=\"fixed\" style=\"left: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%);\">\n    <ion-fab-button color=\"medium\" class=\"tripBtnFiltersContainer\" [class.tripBtnFiltersContainerAndroid]=\"isAndroid\" *ngIf=\"GlobalFields.site_details.filtersBtnStyle==2\">\n      <button (click)=\"openMap()\" style=\"border-radius: 50px 0 0 50px; border-right: 1px solid #eeeeee !important;\" [disabled]=\"!GlobalFieldsListingPro.filteredListings || !(GlobalFieldsListingPro.filteredListings.length > 0)\"><i class=\"fas fa-map-marked-alt\" [ngStyle]=\"GlobalFields.getPrimaryColorJson()\"></i> {{'MAP' | translate}}</button>\n      <button (click)=\"openFilter()\" style=\"border-radius: 0 50px 50px 0;\"><i class=\"fas fa-filter\" [ngStyle]=\"GlobalFields.getPrimaryColorJson()\"></i> {{'FILTERS' | translate}}</button>\n    </ion-fab-button>\n  </ion-fab>\n\n  <!-- Filter/Map buttons TripAdvisor Style\n  <div class=\"tripBtnFiltersContainer\" [class.tripBtnFiltersContainerAndroid]=\"isAndroid\" *ngIf=\"GlobalFields.site_details.filtersBtnStyle==2\">\n    <button (click)=\"openMap()\" style=\"border-radius: 50px 0 0 50px; border-right: 1px solid #eeeeee !important;\"><i class=\"fas fa-map-marked-alt\" [ngStyle]=\"GlobalFields.getPrimaryColorJson()\"></i> {{'MAP' | translate}}</button>\n    <button (click)=\"openFilter()\" style=\"border-radius: 0 50px 50px 0;\"><i class=\"fas fa-filter\" [ngStyle]=\"GlobalFields.getPrimaryColorJson()\"></i> {{'FILTERS' | translate}}</button>\n  </div>\n  -->\n\n  <ion-row>\n\n    <!-- List of results-->\n    <ion-row *ngIf=\"GlobalFieldsListingPro.filteredListings && GlobalFieldsListingPro.filteredListings.length>0\" style=\"width: 100%; margin-bottom: 100px;\">\n\n      <ion-col col-12 style=\"padding: 10px;\">\n        <div *ngFor=\"let listing of GlobalFieldsListingPro.filteredListings;  let i = index\" style=\"margin-bottom: 15px;\">\n          <listingList_LP [listing]=\"listing\" [search]=\"true\"></listingList_LP>\n        </div>\n\n        <!-- <div style=\"width: 100%; text-align: center;\" *ngIf=\"!GlobalFieldsMyListing.filtersSearch.noMorePage && !loadingMoreData\" (click)=\"loadData()\">\n          <ion-icon name=\"refresh\"></ion-icon> {{'LOAD_MORE' | translate}}\n        </div>\n        <div style=\"width: 100%; text-align: center;\" *ngIf=\"loadingMoreData\">\n          <div class=\"lds-ellipsis\"><div></div><div></div><div></div><div></div></div>\n        </div>-->\n\n        <div style=\"text-align: center; width: 100%; height: 300px; color: #afafaf; padding-top: 100px;\" *ngIf=\"loadingMoreData\">\n          <div style=\"margin-bottom: -10px\">\n            Loading more\n          </div>\n          <div class=\"lds-ellipsis\" ><div></div><div></div><div></div><div></div></div>\n        </div>\n\n         <ion-infinite-scroll *ngIf=\"!this.loadingMoreData && (GlobalFieldsListingPro.filtersSearch.pageCount > GlobalFieldsListingPro.filtersSearch.currentPage+1)\" threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n            <ion-infinite-scroll-content\n              loadingSpinner=\"dots\"\n              loadingText=\"{{'LOAD_MORE' | translate}}\">\n            </ion-infinite-scroll-content>\n         </ion-infinite-scroll>\n\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"GlobalFieldsListingPro.filteredListings && GlobalFieldsListingPro.filteredListings.length==0\" style=\"width: 100%;\">\n      <ion-col>\n        <div *ngIf=\"GlobalFieldsListingPro.filtersSearch.location\" class=\"noResults\">\n          {{'NO_NEAR_RESULTS' | translate}} <i>{{GlobalFieldsListingPro.filtersSearch.location}}</i> <br><br> {{'EDIT_FILTER_RETRY' | translate}}.\n        </div>\n        <div *ngIf=\"!GlobalFieldsListingPro.filtersSearch.location\" class=\"noResults\">\n         {{'NO_RESULTS' | translate}}. <br><br> {{'EDIT_FILTER_RETRY' | translate}}.\n        </div>\n\n        <ion-button expand=\"full\" color=\"primary\"  (click)=\"openFilter()\"><ion-icon name=\"switch\"></ion-icon> {{'FILTERS' | translate}}</ion-button>\n\n        <div (click)=\"clearFilters()\" style=\"padding: 15px; text-align: center; color: #F44336;\">\n          <i class=\"fas fa-trash\"></i> Clear filters\n        </div>\n\n\n      </ion-col>\n    </ion-row>\n\n\n    <div style=\"width: 100%; text-align: center; background-color: transparent; position: fixed; top: 50%;\" *ngIf=\"GlobalFieldsListingPro.filteredListings == undefined\">\n      <div class=\"lds-ellipsis\" ><div></div><div></div><div></div><div></div></div>\n    </div>\n\n\n  </ion-row>\n\n  <div id=\"check-point\"></div>  <!-- Check point to the bottom -->\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/ListingPro/searchPage/filterModal/filterModal_LP.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/ListingPro/searchPage/filterModal/filterModal_LP.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppListingProSearchPageFilterModalFilterModal_LPScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sectionTitleFilter {\n  font-size: 20px;\n  letter-spacing: normal !important;\n  color: #484848 !important;\n  padding-top: 2px !important;\n  padding-bottom: 2px !important;\n  padding: 5px;\n  margin-bottom: 10px;\n  line-height: 26px !important;\n}\n\n.iconsChoices {\n  padding-right: 5px;\n  font-size: 22px;\n  padding-left: 5px;\n}\n\n.rightClearBtn {\n  margin-right: 10px;\n  float: right;\n  margin-top: 18px;\n  z-index: 999;\n  color: #f13224;\n}\n\n.buttonSearch {\n  background-color: white;\n  width: 80%;\n  margin: auto;\n  font-size: 16px;\n  height: 35px;\n  font-weight: 600;\n  color: #3fdc7e;\n  border-radius: 50px;\n  border: solid 1px #f3f3f3;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTGlzdGluZ1Byby9zZWFyY2hQYWdlL2ZpbHRlck1vZGFsL0M6XFxsaXN0XFxpb25pY1xcaW9uaWMtYXBwL3NyY1xcYXBwXFxMaXN0aW5nUHJvXFxzZWFyY2hQYWdlXFxmaWx0ZXJNb2RhbFxcZmlsdGVyTW9kYWxfTFAuc2NzcyIsInNyYy9hcHAvTGlzdGluZ1Byby9zZWFyY2hQYWdlL2ZpbHRlck1vZGFsL2ZpbHRlck1vZGFsX0xQLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNBRjs7QURHQTtFQUNFLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQ0FBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvTGlzdGluZ1Byby9zZWFyY2hQYWdlL2ZpbHRlck1vZGFsL2ZpbHRlck1vZGFsX0xQLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5zZWN0aW9uVGl0bGVGaWx0ZXJ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBjb2xvcjogcmdiKDcyLCA3MiwgNzIpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAycHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDJweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uc0Nob2ljZXN7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLnJpZ2h0Q2xlYXJCdG57XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICB6LWluZGV4OiA5OTk7XG4gIGNvbG9yOiAjZjEzMjI0O1xufVxuXG4uYnV0dG9uU2VhcmNoe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogMzVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHJnYig2MywgMjIwLCAxMjYpO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjZjNmM2YzO1xuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4iLCIuc2VjdGlvblRpdGxlRmlsdGVyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNDg0ODQ4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAycHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDJweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uc0Nob2ljZXMge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi5yaWdodENsZWFyQnRuIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIHotaW5kZXg6IDk5OTtcbiAgY29sb3I6ICNmMTMyMjQ7XG59XG5cbi5idXR0b25TZWFyY2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogMzVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzZmRjN2U7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmM2YzZjM7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/ListingPro/searchPage/filterModal/filterModal_LP.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/ListingPro/searchPage/filterModal/filterModal_LP.ts ***!
    \*********************************************************************/

  /*! exports provided: FilterModal_LP */

  /***/
  function srcAppListingProSearchPageFilterModalFilterModal_LPTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterModal_LP", function () {
      return FilterModal_LP;
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


    var _GlobalFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../GlobalFields */
    "./src/app/GlobalFields.ts");
    /* harmony import */


    var _entities_checkboxType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../entities/checkboxType */
    "./src/app/entities/checkboxType.ts");
    /* harmony import */


    var _services_Service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/Service */
    "./src/app/services/Service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_LocationService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../services/LocationService */
    "./src/app/services/LocationService.ts");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
    /* harmony import */


    var _services_ListingProService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../services/ListingProService */
    "./src/app/services/ListingProService.ts");
    /* harmony import */


    var _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../GlobalFieldsListingPro */
    "./src/app/GlobalFieldsListingPro.ts");

    var FilterModal_LP = /*#__PURE__*/function () {
      function FilterModal_LP(service, lpservice, locationService, modalCrtl, translate, statusBar, modalCtrl, geolocation, nativeGeocoder, alertController) {
        _classCallCheck(this, FilterModal_LP);

        this.service = service;
        this.lpservice = lpservice;
        this.locationService = locationService;
        this.modalCrtl = modalCrtl;
        this.translate = translate;
        this.statusBar = statusBar;
        this.modalCtrl = modalCtrl;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.alertController = alertController;
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"];
        this.GlobalFieldsListingPro = _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"];
        this.categories = [];
        this.types = [];
        this.iniFilter();
        this.service.setWhiteBlackBackgroundStatusBar();
        console.log(_GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].filtersSearch);
      }

      _createClass(FilterModal_LP, [{
        key: "iniFilter",
        value: function iniFilter() {
          if (!_GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].filtersSearch) {
            this.prepareOptionsTags();
            this.prepareOptionsFeatures(); // this.prepareCustomFieldsDropdown();
          } else {
            /* if (GlobalFieldsListingPro.filtersSearch.tags.length == 0)
               this.prepareOptionsTags();*/
            if (_GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].filtersSearch.features.length == 0) this.prepareOptionsFeatures();
            /*  if (this.GlobalFieldsMyListing.filtersSearch.customFieldsDropdownKeys.length == 0 ||
                  this.GlobalFieldsMyListing.filtersSearch.customFieldsDropdownKeys.length == 0 ||
                  this.GlobalFieldsMyListing.filtersSearch.customFieldsDropdown.length == 0)
                  this.prepareCustomFieldsDropdown();
                  */
          }
        }
      }, {
        key: "prepareOptionsTags",
        value: function prepareOptionsTags() {
          _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].tags.forEach(function (cat) {
            if (cat.count > 0) {
              var c = new _entities_checkboxType__WEBPACK_IMPORTED_MODULE_3__["CheckboxType"]();
              c.isChecked = false;
              c.val = cat;

              _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].filtersSearch.tags.push(c);

              console.log(cat);
            }
          });
        }
      }, {
        key: "prepareOptionsFeatures",
        value: function prepareOptionsFeatures() {
          _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].features.forEach(function (cat) {
            if (cat.count > 0) {
              var c = new _entities_checkboxType__WEBPACK_IMPORTED_MODULE_3__["CheckboxType"]();
              c.isChecked = false;
              c.val = cat;

              _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].filtersSearch.features.push(c);

              console.log(cat);
            }
          });
        } //prepara un array di stringhe per le key dei custom fields dropdown e uno dove ogni elemento è un array di opzioni
        //poi inizializza a [] nella posizione corrispondente

        /*  prepareCustomFieldsDropdown() {
              this.GlobalFieldsMyListing.filtersSearch.customFieldsDropdownKeys = [];
              this.GlobalFieldsMyListing.filtersSearch.customTaxonomiesDropdownKeysOptions = [];
              this.GlobalFieldsMyListing.filtersSearch.customFieldsDropdown = [];
                  GlobalFieldsMyListing.selectedTypeDetail.case27_listing_type_search_page.advanced.facets.forEach(filter => {
                  if (filter.show_field && filter.show_field != 'job_tags' && filter.show_field != 'job_category' && filter.show_field != 'job_region' && filter.show_field != 'job_title') { //its a custom field
                      this.GlobalFieldsMyListing.filtersSearch.customFieldsDropdownKeys.push(filter.show_field);
                      let options = [];
                      if (GlobalFieldsMyListing.selectedTypeDetail.case27_listing_type_fields[filter.show_field].options)
                          for (const key of Object.keys(GlobalFieldsMyListing.selectedTypeDetail.case27_listing_type_fields[filter.show_field].options)) {
                              options.push(GlobalFieldsMyListing.selectedTypeDetail.case27_listing_type_fields[filter.show_field].options[key]);
                          }
                      this.GlobalFieldsMyListing.filtersSearch.customTaxonomiesDropdownKeysOptions.push(
                          {key: filter.show_field, options: options}
                      );
                  }
              });
              for (let i = 0; i < this.GlobalFieldsMyListing.filtersSearch.customFieldsDropdownKeys.length; i++) {
                  GlobalFieldsMyListing.filtersSearch.customFieldsDropdown.push([]);
              }
                  console.log(this.GlobalFieldsMyListing.filtersSearch.customTaxonomiesDropdownKeysOptions);
              }
        */

      }, {
        key: "getFilteredListingsFirstTime",
        value: function getFilteredListingsFirstTime() {
          _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].getFilteredListingFirstTime(this.lpservice, this.locationService, true);
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.modalCrtl.dismiss();
        }
      }, {
        key: "getMyAddress",
        value: function getMyAddress() {
          this.GlobalFields.getLocation(this.geolocation, this.nativeGeocoder, this.alertController, this.service, this.locationService);
          _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].filtersSearch.location = _GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].address;
        }
      }, {
        key: "clearFilters",
        value: function clearFilters() {
          _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].clearFilters();

          this.iniFilter();
        }
      }]);

      return FilterModal_LP;
    }();

    FilterModal_LP.ctorParameters = function () {
      return [{
        type: _services_Service__WEBPACK_IMPORTED_MODULE_4__["Service"]
      }, {
        type: _services_ListingProService__WEBPACK_IMPORTED_MODULE_11__["ListingProService"]
      }, {
        type: _services_LocationService__WEBPACK_IMPORTED_MODULE_7__["LocationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"]
      }, {
        type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_10__["NativeGeocoder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }];
    };

    FilterModal_LP = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-filter',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./filterModal_LP.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/searchPage/filterModal/filterModal_LP.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./filterModal_LP.scss */
      "./src/app/ListingPro/searchPage/filterModal/filterModal_LP.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_4__["Service"], _services_ListingProService__WEBPACK_IMPORTED_MODULE_11__["ListingProService"], _services_LocationService__WEBPACK_IMPORTED_MODULE_7__["LocationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_10__["NativeGeocoder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])], FilterModal_LP);
    /***/
  },

  /***/
  "./src/app/ListingPro/searchPage/mapModal/mapModal_LP.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/ListingPro/searchPage/mapModal/mapModal_LP.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppListingProSearchPageMapModalMapModal_LPScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sectionTitleFilter {\n  font-size: 20px;\n  letter-spacing: normal !important;\n  color: #484848 !important;\n  padding-top: 2px !important;\n  padding-bottom: 2px !important;\n  padding: 5px;\n  margin-bottom: 10px;\n  line-height: 26px !important;\n}\n\n.iconsChoices {\n  font-size: 22px;\n}\n\nagm-map {\n  height: 100%;\n}\n\n.toolbar-background {\n  background: transparent !important;\n  border: none !important;\n}\n\nion-content .scroll-content {\n  margin-top: 0px !important;\n}\n\n.header-ios .toolbar-background-ios {\n  border: none !important;\n  box-shadow: none !important;\n}\n\n.header-md .toolbar-background-md {\n  border: none !important;\n  box-shadow: none !important;\n}\n\n.header-md::after {\n  background-image: none !important;\n}\n\n.backImg {\n  width: 100%;\n  height: 100px;\n  background-position: center !important;\n  background-size: cover !important;\n  border-radius: 5px;\n}\n\n.listingCard {\n  position: fixed;\n  z-index: 999;\n  bottom: 15px;\n  width: 90% !important;\n  left: 5%;\n  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTGlzdGluZ1Byby9zZWFyY2hQYWdlL21hcE1vZGFsL0M6XFxsaXN0XFxpb25pY1xcaW9uaWMtYXBwL3NyY1xcYXBwXFxMaXN0aW5nUHJvXFxzZWFyY2hQYWdlXFxtYXBNb2RhbFxcbWFwTW9kYWxfTFAuc2NzcyIsInNyYy9hcHAvTGlzdGluZ1Byby9zZWFyY2hQYWdlL21hcE1vZGFsL21hcE1vZGFsX0xQLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBREdBO0VBQ0Usa0NBQUE7RUFDQSx1QkFBQTtBQ0FGOztBREdBO0VBQ0UsMEJBQUE7QUNBRjs7QURHQTtFQUNFLHVCQUFBO0VBQ0EsMkJBQUE7QUNBRjs7QURFQTtFQUNFLHVCQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURFQTtFQUNFLGlDQUFBO0FDQ0Y7O0FESUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0VBSUEsaUNBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsMERBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL0xpc3RpbmdQcm8vc2VhcmNoUGFnZS9tYXBNb2RhbC9tYXBNb2RhbF9MUC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uc2VjdGlvblRpdGxlRmlsdGVye1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWwgIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYig3MiwgNzIsIDcyKSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAycHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMjZweCAhaW1wb3J0YW50O1xufVxuXG4uaWNvbnNDaG9pY2Vze1xuICBmb250LXNpemU6IDIycHhcbn1cblxuYWdtLW1hcCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRvb2xiYXItYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCAuc2Nyb2xsLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1pb3MgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XG59XG4uaGVhZGVyLW1kIC50b29sYmFyLWJhY2tncm91bmQtbWQge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XG5cbn1cbi5oZWFkZXItbWQ6OmFmdGVye1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG59XG5cblxuXG4uYmFja0ltZ3tcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5saXN0aW5nQ2FyZHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk7XG4gIGJvdHRvbTogMTVweDtcbiAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xuICBsZWZ0OiA1JTtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMnB4IDRweCAwcHggIWltcG9ydGFudDtcbn1cblxuXG4iLCIuc2VjdGlvblRpdGxlRmlsdGVyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNDg0ODQ4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAycHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDJweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uc0Nob2ljZXMge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbmFnbS1tYXAge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50b29sYmFyLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQgLnNjcm9sbC1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItaW9zIC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1tZCAudG9vbGJhci1iYWNrZ3JvdW5kLW1kIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5iYWNrSW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5saXN0aW5nQ2FyZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5O1xuICBib3R0b206IDE1cHg7XG4gIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcbiAgbGVmdDogNSU7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCA0cHggMHB4ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ListingPro/searchPage/mapModal/mapModal_LP.ts":
  /*!***************************************************************!*\
    !*** ./src/app/ListingPro/searchPage/mapModal/mapModal_LP.ts ***!
    \***************************************************************/

  /*! exports provided: MapModal_LP */

  /***/
  function srcAppListingProSearchPageMapModalMapModal_LPTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapModal_LP", function () {
      return MapModal_LP;
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


    var _GlobalFields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../GlobalFields */
    "./src/app/GlobalFields.ts");
    /* harmony import */


    var _services_Service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/Service */
    "./src/app/services/Service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _filterModal_filterModal_LP__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../filterModal/filterModal_LP */
    "./src/app/ListingPro/searchPage/filterModal/filterModal_LP.ts");
    /* harmony import */


    var _services_LocationService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/LocationService */
    "./src/app/services/LocationService.ts");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! leaflet */
    "./node_modules/leaflet/dist/leaflet-src.js");
    /* harmony import */


    var leaflet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! leaflet.markercluster */
    "./node_modules/leaflet.markercluster/dist/leaflet.markercluster-src.js");
    /* harmony import */


    var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(leaflet_markercluster__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _services_MyListingService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../services/MyListingService */
    "./src/app/services/MyListingService.ts");
    /* harmony import */


    var _listingPage_listing_page_LP_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../listingPage/listing-page_LP.component */
    "./src/app/ListingPro/listingPage/listing-page_LP.component.ts");
    /* harmony import */


    var _services_ListingProService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../services/ListingProService */
    "./src/app/services/ListingProService.ts");
    /* harmony import */


    var _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../GlobalFieldsListingPro */
    "./src/app/GlobalFieldsListingPro.ts");

    var MapModal_LP = /*#__PURE__*/function () {
      function MapModal_LP(service, lpservice, mlservice, modalCtrl, locationService, alertController) {
        _classCallCheck(this, MapModal_LP);

        this.service = service;
        this.lpservice = lpservice;
        this.mlservice = mlservice;
        this.modalCtrl = modalCtrl;
        this.locationService = locationService;
        this.alertController = alertController; // slides: https://docs.google.com/presentation/d/e/2PACX-1vScoho1ensbR4qCI9AIuQN55BZVvK73pAjI7sumDvW3CrxxHnrmpXWUjx2-8CpFibqU1EjLKCRhuthJ/pub?start=false&loop=false&delayms=3000&slide=id.g291e604610_0_6

        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"];
        this.GlobalFieldsListingPro = _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"];
        this.selectedListing = undefined;
        this.myLat = 51.673858;
        this.myLng = 7.815982;
        this.loadingMoreData = false;
        this.currentZoom = 11;
        this.showSelected = false;
        this.loading = true;
        this.allListings = [];
        this.positions = []; //this.service.setTransparentBackgroundStatusBar();
      }

      _createClass(MapModal_LP, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          //show only listings in the result
          if (!this.GlobalFields.site_details.showMapAllListings) {
            this.getPositions();
          } else //show all the listings
            this.getAllListings();
        }
      }, {
        key: "iniMaps",
        value: function iniMaps() {
          if (_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].site_details.mapType == 2) // Open Street Maps
            this.getPositionsOSMaps();else if (_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].site_details.mapType == 1) // Google Maps
            this.loading = false;
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "getPositions",
        value: function getPositions() {
          var _this = this;

          this.loading = true;
          this.positions = [];
          this.myLat = 0;
          this.myLng = 0;
          console.log('get positions');
          var listings = [];
          if (!this.GlobalFields.site_details.showMapAllListings) listings = _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].filteredListings;else listings = this.allListings;
          var currentAddressCompute = 0;
          console.log(listings);
          listings.forEach(function (listing) {
            if (listing.post_meta) {
              _this.loading = true;

              if (listing.post_meta.latitude && listing.post_meta.latitude != '' && listing.post_meta.longitude && listing.post_meta.longitude != '') {
                _this.createPosition(listing, parseFloat(listing.post_meta.latitude), parseFloat(listing.post_meta.longitude));

                currentAddressCompute += 1;
                console.log(listing);

                _this.endOfComputeAddresses(listings.length, currentAddressCompute);
              } //Compute lat and long from gAddress
              else if (listing.post_meta && listing.post_meta.gAddress) {
                if (_GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].site_details.mapType == 1) {
                  _this.locationService.getMyLatLongFromGoogle(listing.post_meta.gAddress).subscribe(function (data) {
                    if (data.results && data.results.length > 0 && data.results[0].geometry && data.results[0].geometry.location) {
                      _this.createPosition(listing, data.results[0].geometry.location.lat, data.results[0].geometry.location.lng);

                      currentAddressCompute += 1;
                      console.log(listing);

                      _this.endOfComputeAddresses(listings.length, currentAddressCompute);
                    }
                  });
                } else {
                  //Open Street Maps
                  _this.locationService.getLatLongFromOpenMaps(listing.post_meta.gAddress).subscribe(function (data) {
                    console.log(data);

                    if (data && data.length > 0) {
                      _this.createPosition(listing, data[0].lat, data[0].lon);

                      currentAddressCompute += 1;
                      console.log(listing);

                      _this.endOfComputeAddresses(listings.length, currentAddressCompute);
                    }
                  });
                }
              } else {
                currentAddressCompute += 1;
                console.log(listing);

                _this.endOfComputeAddresses(listings.length, currentAddressCompute);
              }
            } else {
              currentAddressCompute += 1;
              console.log(listing);

              _this.endOfComputeAddresses(listings.length, currentAddressCompute);
            }
          }); //center of the map as mean lat and mean long of the results

          this.myLat = this.getMeanLat();
          this.myLng = this.getMeanLng();

          if (this.myLat == 0 && this.myLat == 0 && _GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].lat && _GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].lat) {
            this.myLat = _GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].lat;
            this.myLng = _GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].lat;
          }

          if (!_GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].filtersSearch.location) this.currentZoom = 6;
          console.log(this.myLat + ' ' + this.myLng);
        }
      }, {
        key: "endOfComputeAddresses",
        value: function endOfComputeAddresses(totals, current) {
          console.log(totals);
          console.log(current);

          if (totals == current) {
            console.log(this.positions);
            this.iniMaps();
          }
        }
      }, {
        key: "createPosition",
        value: function createPosition(listing, lat, _long) {
          var imgUrl = '';
          if (listing.category && listing.category.icon1) imgUrl = listing.category.icon1;else imgUrl = '../../assets/imgs/placeholder_location.png';
          this.positions.push({
            lat: parseFloat(listing.post_meta.latitude),
            lng: parseFloat(listing.post_meta.longitude),
            label: listing.post_title,
            draggable: false,
            listing: listing,
            iconUrl: this.getMarkerIcon(listing),
            iconNameHtml: imgUrl,
            iconImgUrlHtml: this.getListingImg(listing),
            labelOptions: {
              color: 'white',
              fontFamily: 'roboto',
              fontSize: '14px',
              fontWeight: 'bold',
              text: ' '
            }
          });
        }
      }, {
        key: "getPositionsOSMaps",
        value: function getPositionsOSMaps() {
          var _this2 = this;

          this.loading = true;
          console.log(this.currentZoom);
          console.log(_GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].filtersSearch.location);
          this.osMap = new leaflet__WEBPACK_IMPORTED_MODULE_7__["Map"]('map').setView([this.myLng, this.myLat], this.currentZoom);
          Object(leaflet__WEBPACK_IMPORTED_MODULE_7__["tileLayer"])('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright"  target="_blank">OpenStreetMap</a> contributors'
          }).addTo(this.osMap);
          var customMarkerIcon = Object(leaflet__WEBPACK_IMPORTED_MODULE_7__["icon"])({
            iconUrl: '../../assets/imgs/placeholder_location.png',
            iconSize: [64, 64],
            popupAnchor: [0, -20]
          });
          var makerToOpen;
          var markers = new leaflet__WEBPACK_IMPORTED_MODULE_7__["MarkerClusterGroup"]();

          var _loop = function _loop(i) {
            var pos = _this2.positions[i];
            var html = '<div class="imgMapPin" style="background-image: url(' + pos.iconImgUrlHtml + ')"><img class="iconMapPinWithImg" src="' + pos.iconNameHtml + '" style="background-color:#f1f1f1"></div>'; //Custom icon

            var defaultIcon = Object(leaflet__WEBPACK_IMPORTED_MODULE_7__["divIcon"])({
              iconUrl: '../../../assets/imgs/maps/marker-icon.png',
              shadowUrl: '../../../assets/imgs/maps/marker-shadow.png',
              html: html
            }); //Marker.prototype.options.icon = defaultIcon; //Set all the pins as equal

            var m = Object(leaflet__WEBPACK_IMPORTED_MODULE_7__["marker"])([pos.lat, pos.lng], {
              icon: defaultIcon
            });
            var address = '';
            if (pos.listing.location && pos.listing.location.length > 0) address = pos.listing.location[0].name;else if (pos.listing.post_meta && pos.listing.post_meta.gAddress) address = pos.listing.post_meta.gAddress;
            m.bindPopup("<b>".concat(pos.label, "</b><br><span class=\"listingLocation\">").concat(address, "</span>"), {
              autoClose: false
            }).on('click', function () {
              return _this2.clickedMarker(pos);
            }).on('popupclose', function () {
              return _this2.showSelected = false;
            });
            console.log(pos.listing);
            console.log(m); // if(!this.GlobalFields.site_details.showMapAllListings)
            //     m.addTo(this.osMap);
            // else

            markers.addLayer(m);
            if (i == 0) makerToOpen = m;
          };

          for (var i = 0; i < this.positions.length; i++) {
            _loop(i);
          } // if(this.GlobalFields.site_details.showMapAllListings)


          this.osMap.addLayer(markers); //this.osMap.setView([this.myLng, this.myLat], this.currentZoom);

          this.osMap.panTo([this.myLat, this.myLng]); //this.osMap.openPopup(makerToOpen.getPopup());

          setTimeout(function () {
            _this2.loading = false; //  this.osMap.panTo((new L.LatLng(this.myLat, this.myLng)));
          }, 1000);
        }
      }, {
        key: "getMeanLat",
        value: function getMeanLat() {
          var lat = 0;
          this.positions.forEach(function (mark) {
            lat = lat + mark.lat;
          });
          if (this.positions.length > 0) return lat / this.positions.length;
          return lat;
        }
      }, {
        key: "getMeanLng",
        value: function getMeanLng() {
          var lng = 0;
          this.positions.forEach(function (mark) {
            lng = lng + mark.lng;
          });
          if (this.positions.length > 0) return lng / this.positions.length;
          return lng;
        }
      }, {
        key: "clickedMarker",
        value: function clickedMarker(marker) {
          this.selectedListing = marker.listing;
          this.showSelected = true;
          console.log(marker.listing);
        }
      }, {
        key: "getMarkerIcon",
        value: function getMarkerIcon(listing) {
          var imgUrl = '';
          if (listing.category && listing.category.icon1) imgUrl = listing.category.icon1;else imgUrl = '../../assets/imgs/placeholder_location.png';
          var res = {
            url: imgUrl,
            labelOrigin: {
              x: 22.5,
              y: 20
            },
            scaledSize: this.getImgSize(imgUrl)
          };
          return res;
        }
      }, {
        key: "getImgSize",
        value: function getImgSize(url) {
          var res = {
            height: 40,
            width: 40
          };
          var img = new Image();
          img.src = url;

          if (Number(img.height) >= 40 && Number(img.width) >= 40) {
            if (Number(img.height) > Number(img.width)) res = {
              height: 40,
              width: 40 * (Number(img.width) / Number(img.height))
            };else if (Number(img.width) > Number(img.height)) res = {
              width: 40,
              height: 40 * (Number(img.height) / Number(img.width))
            };
          } else {
            res = {
              width: Number(img.width),
              height: Number(img.height)
            };
          }

          if (res.height == 0 || res.width == 0) res = {
            height: 40,
            width: 40
          };
          return res;
        }
      }, {
        key: "getImgWidth",
        value: function getImgWidth(url) {
          var img = new Image();
          img.src = url;

          if (Number(img.height) < 260) {
            return 'auto';
          } else {
            return '100%';
          }
        }
      }, {
        key: "openModalListing",
        value: function openModalListing() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalCtrl.create({
                      component: _listingPage_listing_page_LP_component__WEBPACK_IMPORTED_MODULE_10__["ListingPage_LP"]
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
        key: "openFilter",
        value: function openFilter(listing) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var filterModal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].selectedListing = listing;
                    _context2.next = 3;
                    return this.modalCtrl.create({
                      component: _filterModal_filterModal_LP__WEBPACK_IMPORTED_MODULE_5__["FilterModal_LP"]
                    });

                  case 3:
                    filterModal = _context2.sent;
                    _context2.next = 6;
                    return filterModal.present();

                  case 6:
                    return _context2.abrupt("return", _context2.sent);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "goToMyLocation",
        value: function goToMyLocation() {
          if (this.GlobalFields.lat && this.GlobalFields["long"]) {
            this.loading = true;
            this.myLat = this.GlobalFields.lat;
            this.myLng = this.GlobalFields["long"];
            this.currentZoom = 12;
            this.loading = false;
            console.log('goToMyLocation');
          }
        }
      }, {
        key: "centerChanged",
        value: function centerChanged(event) {//console.log(event);

          /*  this.myLat = event.myLat;
            this.myLng = event.myLng;
            */
        }
        /*
        loadData() {
          this.loadingMoreData = true;
          GlobalFieldsMyListing.filtersSearch.currentPage++;
          if (GlobalFieldsMyListing.filtersSearch.location) { //address
                //Convert address to Lat and Lng
            if (GlobalFields.site_details.mapType == 1) {
              this.locationService.getMyLatLongFromGoogle(GlobalFieldsMyListing.filtersSearch.location).subscribe((data: any) => {
                if (data.results && data.results.length > 0 && data.results[0].geometry && data.results[0].geometry.location) {
                  GlobalFieldsMyListing.filtersSearch.lat = data.results[0].geometry.location.lat;
                  GlobalFieldsMyListing.filtersSearch.lng = data.results[0].geometry.location.lng;
                }
              });
            } else { //Open Street Maps
              this.locationService.getLatLongFromOpenMaps(GlobalFieldsMyListing.filtersSearch.location).subscribe((data: any) => {
                console.log(data);
                if (data && data.length > 0) {
                  GlobalFieldsMyListing.filtersSearch.lat = data[0].lat;
                  GlobalFieldsMyListing.filtersSearch.lng = data[0].lon;
                }
              });
            }
                this.callServiceToGetFilteredListings();
          } else { //no address
            this.callServiceToGetFilteredListings();
          }
        }
          
        callServiceToGetFilteredListings() {
          this.mlservice.getFilteredListings()
            .subscribe((data: any) => {
              if (GlobalFieldsMyListing.filtersSearch.currentPage == 1) {
                GlobalFieldsMyListing.filteredListings = [];
                GlobalFieldsMyListing.filtersSearch.noMorePage = false;
              }
              GlobalFieldsMyListing.filteredListings = GlobalFieldsMyListing.filteredListings.concat(GlobalFieldsMyListing.fixWrongImgCoverField(data));
              console.log(data);
              this.getPositions();
              this.loadingMoreData = false;
                  if (GlobalFieldsMyListing.filteredListings.length < 10 || data.length == 0)
                GlobalFieldsMyListing.filtersSearch.noMorePage = true;
                });
        }
        */

      }, {
        key: "getAllListings",
        value: function getAllListings() {
          var _this3 = this;

          this.lpservice.getAllListings().subscribe(function (res) {
            if (res.success) {
              _this3.allListings = res.data;

              _this3.getPositions();

              _this3.iniMaps();
            }
          });
        }
      }, {
        key: "getListingImg",
        value: function getListingImg(listing) {
          var image = '';
          if (listing.gallery && listing.gallery.cover_image) image = listing.gallery.cover_image;else image = _GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"].site_details.placeholderImgUrl;
          return image;
        }
      }]);

      return MapModal_LP;
    }();

    MapModal_LP.ctorParameters = function () {
      return [{
        type: _services_Service__WEBPACK_IMPORTED_MODULE_3__["Service"]
      }, {
        type: _services_ListingProService__WEBPACK_IMPORTED_MODULE_11__["ListingProService"]
      }, {
        type: _services_MyListingService__WEBPACK_IMPORTED_MODULE_9__["MyListingService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _services_LocationService__WEBPACK_IMPORTED_MODULE_6__["LocationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    MapModal_LP = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'map-filter',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./mapModal_LP.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/searchPage/mapModal/mapModal_LP.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./mapModal_LP.scss */
      "./src/app/ListingPro/searchPage/mapModal/mapModal_LP.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_3__["Service"], _services_ListingProService__WEBPACK_IMPORTED_MODULE_11__["ListingProService"], _services_MyListingService__WEBPACK_IMPORTED_MODULE_9__["MyListingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _services_LocationService__WEBPACK_IMPORTED_MODULE_6__["LocationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])], MapModal_LP);
    /***/
  },

  /***/
  "./src/app/ListingPro/searchPage/searchPage_LP.scss":
  /*!**********************************************************!*\
    !*** ./src/app/ListingPro/searchPage/searchPage_LP.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppListingProSearchPageSearchPage_LPScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".oneColumnListImg {\n  width: 100%;\n  height: calc(100% - 70px);\n  background-position: center !important;\n  background-size: cover !important;\n  border-radius: 5px;\n}\n\n.btnToolSearch {\n  font-size: 20px;\n  width: 100%;\n  line-height: 2;\n  background-color: #ffffff;\n  padding: 5px;\n  text-align: center;\n  text-transform: uppercase !important;\n  color: #5294ff !important;\n  padding-top: 6px !important;\n  padding-bottom: 6px !important;\n  font-weight: 800 !important;\n  background-color: white !important;\n  box-shadow: rgba(0, 0, 0, 0.14) 0px 1px 1px 1px !important;\n  cursor: pointer !important;\n  border-radius: 80px !important;\n  border-width: initial !important;\n  border-style: none !important;\n  border-color: initial !important;\n  -o-border-image: initial !important;\n     border-image: initial !important;\n}\n\n.btnOrderSearch {\n  width: 100%;\n  line-height: 2;\n  background-color: transparent;\n  padding: 10px;\n  font-size: 14px !important;\n  letter-spacing: normal !important;\n  color: #484848 !important;\n  font-weight: 500;\n}\n\n.btnOrderSearch[dir=ltr] {\n  text-align: right;\n}\n\n.btnOrderSearch[dir=rtl] {\n  text-align: left;\n}\n\n.btnToolSearch span {\n  font-size: small;\n}\n\n.topFixed {\n  width: 100%;\n  bottom: 100px;\n  position: fixed;\n  z-index: 99;\n}\n\n.noResults {\n  font-size: small;\n  padding: 15px;\n}\n\n.filterDefaultBtnFiltersContainer {\n  background: transparent;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  border-radius: 50px !important;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.33);\n}\n\n.tripBtnFiltersContainerAndroid {\n  bottom: 55px !important;\n}\n\n/*\n.tripBtnFiltersContainer{\n  background: white;\n  position: fixed;\n  bottom: 75px;\n  z-index: 99999;\n  margin: auto;\n  left: 50%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  min-width: 170px;\n  height: 35px;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  transition: box-shadow 200ms ease-in !important;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: -moz-fit-content;\n  width: -webkit-fit-content;\n  width: fit-content;\n  border-radius: 50px;\n  font-size: 10pt;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.29);\n  border: solid 1px #f3f3f3;\n} */\n\n.tripBtnFiltersContainer {\n  background: white;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  min-width: 200px;\n  height: 40px !important;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: -moz-fit-content;\n  width: -webkit-fit-content;\n  width: fit-content;\n  border-radius: 50px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.33);\n  border: solid 1px #f3f3f3;\n}\n\n.tripBtnFiltersContainer button {\n  background: transparent;\n  padding: 0 5px;\n  width: 50%;\n  height: 45px !important;\n  text-overflow: ellipsis;\n  font-size: 13pt;\n}\n\n.tripBtnFiltersContainer button:focus {\n  background-color: #d8d8d8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTGlzdGluZ1Byby9zZWFyY2hQYWdlL0M6XFxsaXN0XFxpb25pY1xcaW9uaWMtYXBwL3NyY1xcYXBwXFxMaXN0aW5nUHJvXFxzZWFyY2hQYWdlXFxzZWFyY2hQYWdlX0xQLnNjc3MiLCJzcmMvYXBwL0xpc3RpbmdQcm8vc2VhcmNoUGFnZS9zZWFyY2hQYWdlX0xQLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0VBR0EseUJBQUE7RUFDQSxzQ0FBQTtFQUlBLGlDQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURLQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0VBQ0EsMERBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUNBQUE7S0FBQSxnQ0FBQTtBQ0ZGOztBRE9BO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0pGOztBRE9BO0VBQ0UsaUJBQUE7QUNKRjs7QURPQTtFQUNFLGdCQUFBO0FDSkY7O0FEUUE7RUFDRSxnQkFBQTtBQ0xGOztBRFFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0xGOztBRFFBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FDTEY7O0FEU0E7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMENBQUE7QUNORjs7QURXQTtFQUNFLHVCQUFBO0FDUkY7O0FEVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBQUE7O0FBMkJBO0VBQ0UsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0FDUEY7O0FEVUE7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNQRjs7QURTQTtFQUNFLHlCQUFBO0FDTkYiLCJmaWxlIjoic3JjL2FwcC9MaXN0aW5nUHJvL3NlYXJjaFBhZ2Uvc2VhcmNoUGFnZV9MUC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5vbmVDb2x1bW5MaXN0SW1ne1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAtd2Via2l0LWNhbGMoMTAwJSAtIDcwcHgpO1xuICBoZWlnaHQ6IC1tb3otY2FsYygxMDAlIC0gNzBweCk7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNzBweCk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cblxuLmJ0blRvb2xTZWFyY2h7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzUyOTRmZiAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogNnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA2cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE0KSAwcHggMXB4IDFweCAxcHggIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDgwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXdpZHRoOiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1zdHlsZTogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgYm9yZGVyLWltYWdlOiBpbml0aWFsICFpbXBvcnRhbnQ7XG59XG5cblxuXG4uYnRuT3JkZXJTZWFyY2h7XG4gIHdpZHRoOiAxMDAlO1xuICBsaW5lLWhlaWdodDogMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiByZ2IoNzIsIDcyLCA3MikgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmJ0bk9yZGVyU2VhcmNoW2Rpcj1cImx0clwiXXtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5idG5PcmRlclNlYXJjaFtkaXI9XCJydGxcIl17XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cblxuLmJ0blRvb2xTZWFyY2ggc3BhbntcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLnRvcEZpeGVke1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAxMDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTtcbn1cblxuLm5vUmVzdWx0c3tcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuXG4uZmlsdGVyRGVmYXVsdEJ0bkZpbHRlcnNDb250YWluZXJ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zMyk7XG59XG5cblxuXG4udHJpcEJ0bkZpbHRlcnNDb250YWluZXJBbmRyb2lke1xuICBib3R0b206IDU1cHggIWltcG9ydGFudDtcbn1cbi8qXG4udHJpcEJ0bkZpbHRlcnNDb250YWluZXJ7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNzVweDtcbiAgei1pbmRleDogOTk5OTk7XG4gIG1hcmdpbjogYXV0bztcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWluLXdpZHRoOiAxNzBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBlYXNlLWluICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcbiAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZm9udC1zaXplOiAxMHB0O1xuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yOSk7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmM2YzZjM7XG59ICovXG4udHJpcEJ0bkZpbHRlcnNDb250YWluZXJ7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcbiAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMzMpO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZjNmM2YzO1xufVxuXG4udHJpcEJ0bkZpbHRlcnNDb250YWluZXIgYnV0dG9ue1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMCA1cHg7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNDVweCAhaW1wb3J0YW50O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1zaXplOiAxM3B0O1xufVxuLnRyaXBCdG5GaWx0ZXJzQ29udGFpbmVyIGJ1dHRvbjpmb2N1c3tcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDhkODtcbn1cbiIsIi5vbmVDb2x1bW5MaXN0SW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogLXdlYmtpdC1jYWxjKDEwMCUgLSA3MHB4KTtcbiAgaGVpZ2h0OiAtbW96LWNhbGMoMTAwJSAtIDcwcHgpO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDcwcHgpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYnRuVG9vbFNlYXJjaCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzUyOTRmZiAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogNnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA2cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTQpIDBweCAxcHggMXB4IDFweCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogODBweCAhaW1wb3J0YW50O1xuICBib3JkZXItd2lkdGg6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgYm9yZGVyLXN0eWxlOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogaW5pdGlhbCAhaW1wb3J0YW50O1xuICBib3JkZXItaW1hZ2U6IGluaXRpYWwgIWltcG9ydGFudDtcbn1cblxuLmJ0bk9yZGVyU2VhcmNoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWwgIWltcG9ydGFudDtcbiAgY29sb3I6ICM0ODQ4NDggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmJ0bk9yZGVyU2VhcmNoW2Rpcj1sdHJdIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5idG5PcmRlclNlYXJjaFtkaXI9cnRsXSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5idG5Ub29sU2VhcmNoIHNwYW4ge1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4udG9wRml4ZWQge1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAxMDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTtcbn1cblxuLm5vUmVzdWx0cyB7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5maWx0ZXJEZWZhdWx0QnRuRmlsdGVyc0NvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zMyk7XG59XG5cbi50cmlwQnRuRmlsdGVyc0NvbnRhaW5lckFuZHJvaWQge1xuICBib3R0b206IDU1cHggIWltcG9ydGFudDtcbn1cblxuLypcbi50cmlwQnRuRmlsdGVyc0NvbnRhaW5lcntcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA3NXB4O1xuICB6LWluZGV4OiA5OTk5OTtcbiAgbWFyZ2luOiBhdXRvO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtaW4td2lkdGg6IDE3MHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zIGVhc2UtaW4gIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBmb250LXNpemU6IDEwcHQ7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjI5KTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2YzZjNmMztcbn0gKi9cbi50cmlwQnRuRmlsdGVyc0NvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcbiAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMzMpO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZjNmM2YzO1xufVxuXG4udHJpcEJ0bkZpbHRlcnNDb250YWluZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDQ1cHggIWltcG9ydGFudDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtc2l6ZTogMTNwdDtcbn1cblxuLnRyaXBCdG5GaWx0ZXJzQ29udGFpbmVyIGJ1dHRvbjpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGQ4ZDg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ListingPro/searchPage/searchPage_LP.ts":
  /*!********************************************************!*\
    !*** ./src/app/ListingPro/searchPage/searchPage_LP.ts ***!
    \********************************************************/

  /*! exports provided: SearchPage_LP */

  /***/
  function srcAppListingProSearchPageSearchPage_LPTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPage_LP", function () {
      return SearchPage_LP;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _GlobalFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../GlobalFields */
    "./src/app/GlobalFields.ts");
    /* harmony import */


    var _filterModal_filterModal_LP__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./filterModal/filterModal_LP */
    "./src/app/ListingPro/searchPage/filterModal/filterModal_LP.ts");
    /* harmony import */


    var _services_Service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/Service */
    "./src/app/services/Service.ts");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _mapModal_mapModal_LP__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./mapModal/mapModal_LP */
    "./src/app/ListingPro/searchPage/mapModal/mapModal_LP.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_LocationService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../services/LocationService */
    "./src/app/services/LocationService.ts");
    /* harmony import */


    var _services_MyListingService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../services/MyListingService */
    "./src/app/services/MyListingService.ts");
    /* harmony import */


    var _listingPage_listing_page_LP_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../listingPage/listing-page_LP.component */
    "./src/app/ListingPro/listingPage/listing-page_LP.component.ts");
    /* harmony import */


    var _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../GlobalFieldsListingPro */
    "./src/app/GlobalFieldsListingPro.ts");
    /* harmony import */


    var _services_ListingProService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../services/ListingProService */
    "./src/app/services/ListingProService.ts");

    var SearchPage_LP = /*#__PURE__*/function () {
      function SearchPage_LP(service, lpservice, mlservice, locationService, modalCtrl, statusBar, platform, translate, alertController) {
        _classCallCheck(this, SearchPage_LP);

        this.service = service;
        this.lpservice = lpservice;
        this.mlservice = mlservice;
        this.locationService = locationService;
        this.modalCtrl = modalCtrl;
        this.statusBar = statusBar;
        this.platform = platform;
        this.translate = translate;
        this.alertController = alertController;
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"];
        this.GlobalFieldsListingPro = _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"];
        this.loadingMoreData = false;
        this.oldScollPostion = 0;
        this.headerClass = '';
        this.customPopoverOptions = {
          header: 'Seleziona l\'ordine'
        }; //If not coming from some "search this" feature like near me or categories tab it initializes the search

        if (!_GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].basicSearch && !_GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].filtersSearch.location && !_GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].filtersSearch.categories) {
          this.initialCall(true);
        }

        _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].basicSearch = false;
      }

      _createClass(SearchPage_LP, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.platform.is('ios')) this.isAndroid = false;else this.isAndroid = true;
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.service.setWhiteBlackBackgroundStatusBar();
        }
      }, {
        key: "openModalListing",
        value: function openModalListing() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalCtrl.create({
                      component: _listingPage_listing_page_LP_component__WEBPACK_IMPORTED_MODULE_11__["ListingPage_LP"]
                    });

                  case 2:
                    modal = _context3.sent;
                    _context3.next = 5;
                    return modal.present();

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
        key: "openFilter",
        value: function openFilter(listing) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var filterModal;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].selectedListing = listing;
                    _context4.next = 3;
                    return this.modalCtrl.create({
                      component: _filterModal_filterModal_LP__WEBPACK_IMPORTED_MODULE_4__["FilterModal_LP"]
                    });

                  case 3:
                    filterModal = _context4.sent;
                    _context4.next = 6;
                    return filterModal.present();

                  case 6:
                    return _context4.abrupt("return", _context4.sent);

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "openMap",
        value: function openMap(listing) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var mapModal;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].selectedListing = listing;
                    _context5.next = 3;
                    return this.modalCtrl.create({
                      component: _mapModal_mapModal_LP__WEBPACK_IMPORTED_MODULE_7__["MapModal_LP"]
                    });

                  case 3:
                    mapModal = _context5.sent;
                    _context5.next = 6;
                    return mapModal.present();

                  case 6:
                    return _context5.abrupt("return", _context5.sent);

                  case 7:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "loadData",
        value: function loadData() {
          this.loadingMoreData = true;
          _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].filtersSearch.currentPage++;

          if (_GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].filtersSearch.location) {
            //address
            //Convert address to Lat and Lng
            if (_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].site_details.mapType == 1) {
              this.locationService.getMyLatLongFromGoogle(_GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].filtersSearch.location).subscribe(function (data) {
                if (data.results && data.results.length > 0 && data.results[0].geometry && data.results[0].geometry.location) {
                  _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].filtersSearch.lat = data.results[0].geometry.location.lat;
                  _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].filtersSearch.lng = data.results[0].geometry.location.lng;
                }
              });
            } else {
              //Open Street Maps
              this.locationService.getLatLongFromOpenMaps(_GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].filtersSearch.location).subscribe(function (data) {
                console.log(data);

                if (data && data.length > 0) {
                  _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].filtersSearch.lat = data[0].lat;
                  _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].filtersSearch.lng = data[0].lon;
                }
              });
            }

            this.callServiceToGetFilteredListings();
          } else {
            //no address
            this.callServiceToGetFilteredListings();
          }
        }
      }, {
        key: "toggleInfiniteScroll",
        value: function toggleInfiniteScroll() {
          this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
        }
      }, {
        key: "initialCall",
        value: function initialCall(reloadOrder) {
          this.GlobalFieldsListingPro.filteredListings = undefined;
          var setLocation = _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].filtersSearch.location;

          _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].clearFilters();

          if (setLocation) _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].filtersSearch.location = setLocation; //TODO: Set the order to a default one:
          // GlobalFieldsListingPro.filtersSearch.order = GlobalFieldsMyListing.selectedTypeDetail.case27_listing_type_search_page.order.options[0].key;

          _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].getFilteredListingFirstTime(this.lpservice, this.locationService, true);
        }
      }, {
        key: "callServiceToGetFilteredListings",
        value: function callServiceToGetFilteredListings() {
          var _this4 = this;

          this.lpservice.getFilteredListings().subscribe(function (res) {
            _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].filtersSearch.listingsCount = res.listingsCount;

            if (_GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].filtersSearch.currentPage == 0) {
              _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].filteredListings = []; //GlobalFieldsListingPro.filtersSearch.noMorePage = false;
            }

            _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].filteredListings = _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].filteredListings.concat(res.data);
            console.log(res.data);
            _this4.loadingMoreData = false;
            /*if (GlobalFieldsMyListing.filteredListings.length < 10 || res.data.length < 10)
              GlobalFieldsMyListing.filtersSearch.noMorePage = true;
            */
          });
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
        key: "clearFilters",
        value: function clearFilters() {
          _GlobalFieldsListingPro__WEBPACK_IMPORTED_MODULE_12__["GlobalFieldsListingPro"].clearFilters();

          this.initialCall(true);
        }
      }]);

      return SearchPage_LP;
    }();

    SearchPage_LP.ctorParameters = function () {
      return [{
        type: _services_Service__WEBPACK_IMPORTED_MODULE_5__["Service"]
      }, {
        type: _services_ListingProService__WEBPACK_IMPORTED_MODULE_13__["ListingProService"]
      }, {
        type: _services_MyListingService__WEBPACK_IMPORTED_MODULE_10__["MyListingService"]
      }, {
        type: _services_LocationService__WEBPACK_IMPORTED_MODULE_9__["LocationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])], SearchPage_LP.prototype, "infiniteScroll", void 0);
    SearchPage_LP = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-search',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./searchPage_LP.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ListingPro/searchPage/searchPage_LP.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./searchPage_LP.scss */
      "./src/app/ListingPro/searchPage/searchPage_LP.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_5__["Service"], _services_ListingProService__WEBPACK_IMPORTED_MODULE_13__["ListingProService"], _services_MyListingService__WEBPACK_IMPORTED_MODULE_10__["MyListingService"], _services_LocationService__WEBPACK_IMPORTED_MODULE_9__["LocationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])], SearchPage_LP);
    /***/
  },

  /***/
  "./src/app/ListingPro/searchPage/search_LP.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/ListingPro/searchPage/search_LP.module.ts ***!
    \***********************************************************/

  /*! exports provided: SearchPage_LPModule */

  /***/
  function srcAppListingProSearchPageSearch_LPModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPage_LPModule", function () {
      return SearchPage_LPModule;
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


    var _searchPage_LP__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./searchPage_LP */
    "./src/app/ListingPro/searchPage/searchPage_LP.ts");
    /* harmony import */


    var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared.module */
    "./src/app/shared.module.ts");
    /* harmony import */


    var _mapModal_mapModal_LP__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./mapModal/mapModal_LP */
    "./src/app/ListingPro/searchPage/mapModal/mapModal_LP.ts");
    /* harmony import */


    var _Shared_utilities_utilities_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../Shared/utilities/utilities.module */
    "./src/app/Shared/utilities/utilities.module.ts");
    /* harmony import */


    var _shared_LP_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../shared_LP.module */
    "./src/app/ListingPro/shared_LP.module.ts");
    /* harmony import */


    var _filterModal_filterModal_LP__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./filterModal/filterModal_LP */
    "./src/app/ListingPro/searchPage/filterModal/filterModal_LP.ts");

    var SearchPage_LPModule = /*#__PURE__*/_createClass(function SearchPage_LPModule() {
      _classCallCheck(this, SearchPage_LPModule);
    });

    SearchPage_LPModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: '',
        component: _searchPage_LP__WEBPACK_IMPORTED_MODULE_6__["SearchPage_LP"]
      }]), _Shared_utilities_utilities_module__WEBPACK_IMPORTED_MODULE_9__["UtilitiesModule"], _shared_LP_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule_LP"]],
      declarations: [_searchPage_LP__WEBPACK_IMPORTED_MODULE_6__["SearchPage_LP"], _mapModal_mapModal_LP__WEBPACK_IMPORTED_MODULE_8__["MapModal_LP"], _filterModal_filterModal_LP__WEBPACK_IMPORTED_MODULE_11__["FilterModal_LP"]],
      exports: [_mapModal_mapModal_LP__WEBPACK_IMPORTED_MODULE_8__["MapModal_LP"], _Shared_utilities_utilities_module__WEBPACK_IMPORTED_MODULE_9__["UtilitiesModule"]]
    })], SearchPage_LPModule);
    /***/
  }
}]);
//# sourceMappingURL=ListingPro-searchPage-search_LP-module-es5.js.map