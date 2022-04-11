function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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


    __webpack_exports__["default"] = "<ion-header style=\"background-color: white; border: none; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);\">\r\n  <ion-toolbar>\r\n    <ion-row class=\"filters\">\r\n      <div style=\"background-color: white; padding: 10px; text-align: center; height: 100%;\">\r\n        <ion-icon name=\"close\" style=\"font-size: 20px;\" (click)=\"closeModal()\"></ion-icon>\r\n      </div>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content *ngIf=\"GlobalFieldsListingPro.listingTypeDetail && GlobalFieldsListingPro.listingTypeDetail.filter_status\"  [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\"  dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n\r\n  <div style=\"padding: 15px; height: 100%; width: 100%; margin-top: 10px; margin-bottom: 130px\">\r\n\r\n    <div>\r\n\r\n      <!-- Where - Search by keyword -->\r\n      <div class=\"filterSection\">\r\n        <i class=\"fas fa-search iconsChoices\"></i><ion-label class=\"titleSectionFilter\">{{'WHAT' | translate}}</ion-label>\r\n        <ion-input clearInput placeholder=\"Insert\"  style=\"margin-left: 15px; width: calc(100% - 30px);\"\r\n                   [(ngModel)]=\"GlobalFieldsListingPro.filtersSearch.skeyword\"></ion-input>\r\n      </div>\r\n\r\n      <!-- What - region/locations -->\r\n      <div class=\"filterSection\">\r\n        <i class=\"fas fa-map-marker-alt iconsChoices\"></i> <ion-label class=\"titleSectionFilter\">{{'WHERE' | translate}}\r\n       </ion-label>\r\n\r\n        <i *ngIf=\"!GlobalFieldsListingPro.filtersSearch.location || GlobalFieldsListingPro.filtersSearch.location != GlobalFields.address\" (click)=\"getMyAddress()\" class=\"fas fa-location-arrow\" style=\" float: left; margin-top: 45px;\"></i>\r\n        <i *ngIf=\"GlobalFieldsListingPro.filtersSearch.location && GlobalFieldsListingPro.filtersSearch.location == GlobalFields.address\"  (click)=\"getMyAddress()\" class=\"fas fa-location-arrow\" style=\" float: left; margin-top: 45px;\" [ngStyle]=\"GlobalFields.getPrimaryColorJson()\"></i>\r\n\r\n        <!-- Address -->\r\n        <div style=\"display: flex\"*ngIf=\"GlobalFieldsListingPro.filtersSearch.location\">\r\n          <div style=\"width: 80%; margin: auto; color: #9c9c9c; font-style: italic; margin: auto; padding: 10px 5px;\"> <!-- Location -->\r\n            {{GlobalFieldsListingPro.filtersSearch.location}}\r\n          </div>\r\n          <div style=\"width: 10%;\" *ngIf=\"GlobalFieldsListingPro.filtersSearch.location\" >\r\n            <i (click)=\"GlobalFieldsListingPro.filtersSearch.location = undefined\" class=\"far fa-trash-alt rightClearBtn\"></i>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Locations-->\r\n        <div *ngIf=\"!GlobalFieldsListingPro.filtersSearch.location\" style=\"width: 100%;\">\r\n          <i *ngIf=\"GlobalFieldsListingPro.filtersSearch.locations && GlobalFieldsListingPro.filtersSearch.locations!=''\" (click)=\"GlobalFieldsListingPro.filtersSearch.locations = undefined\" class=\"far fa-trash-alt rightClearBtn\"></i>\r\n          <ion-item style=\"padding:0px; width: calc(90% - 30px)\">\r\n            <ion-select [cancelText]=\"'CANCEL' | translate\" [okText]=\"'SELECT' | translate\" [(ngModel)]=\"GlobalFieldsListingPro.filtersSearch.locations\" placeholder=\"{{'SELECT' | translate}}\" selectedText=\"{{GlobalFieldsListingPro.filtersSearch.locations}}\">\r\n              <ion-select-option  *ngFor=\"let r of GlobalFieldsListingPro.regions\" value=\"{{r.name}}\">{{r.name}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <!-- Near me -->\r\n      <div class=\"filterSection\" *ngIf=\"GlobalFieldsListingPro.listingTypeDetail.filter_status.enable_nearme_search_filter\">\r\n        <br>\r\n        <ion-list>\r\n          <ion-item >\r\n            <ion-label>{{'NEAR_YOU' | translate}}</ion-label>\r\n            <ion-toggle color=\"primary\" [(ngModel)]=\"GlobalFieldsListingPro.filtersSearch.nearMe\"></ion-toggle>\r\n          </ion-item>\r\n        </ion-list>\r\n        <br>\r\n\r\n        <span *ngIf=\"GlobalFieldsListingPro.filtersSearch.nearMe\">\r\n           <!-- Proximity -->\r\n        <i class=\"far fa-dot-circle iconsChoices\"> </i> <ion-label class=\"titleSectionFilter\">Proximity</ion-label>\r\n          {{GlobalFieldsListingPro.filtersSearch.range}} {{GlobalFieldsListingPro.listingTypeDetail.filter_status.lp_nearme_filter_param}}\r\n          <ion-range [(ngModel)]=\"GlobalFieldsListingPro.filtersSearch.range\"\r\n                     min=\"{{GlobalFieldsListingPro.listingTypeDetail.filter_status.enable_readious_search_filter_min}}\"\r\n                     max=\"{{GlobalFieldsListingPro.listingTypeDetail.filter_status.enable_readious_search_filter_max}}\"\r\n                     step=\"10\"\r\n                     color=\"secondary\" pin=\"true\"></ion-range>\r\n        </span>\r\n      </div>\r\n\r\n      <!-- Prices -->\r\n      <div class=\"filterSection\" *ngIf=\"GlobalFieldsListingPro.listingTypeDetail.filter_status.enable_price_search_filter\" >\r\n        <ion-label class=\"titleSectionFilter\">{{'PRICE_RANGE' | translate}}</ion-label>\r\n        <br><br>\r\n        <ion-segment [(ngModel)]=\"GlobalFieldsListingPro.filtersSearch.price_status\">\r\n          <ion-segment-button value=\"'inexpensive'\">\r\n            <ion-label>{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}</ion-label>\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"'moderate'\">\r\n            <ion-label>{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}</ion-label>\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"'pricey'\">\r\n            <ion-label>{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}</ion-label>\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"'ultra_high_end'\">\r\n            <ion-label>{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}{{GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol}}</ion-label>\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </div>\r\n\r\n\r\n      <!-- Booleans -->\r\n      <div class=\"filterSection\">\r\n        <br>\r\n        <ion-list>\r\n          <ion-item *ngIf=\"GlobalFieldsListingPro.listingTypeDetail.filter_status.enable_opentime_search_filter\">\r\n            <ion-label>{{'OPEN_NOW' | translate}}</ion-label>\r\n            <ion-toggle color=\"primary\" [(ngModel)]=\"GlobalFieldsListingPro.filtersSearch.openNow\"></ion-toggle>\r\n          </ion-item>\r\n        </ion-list>\r\n      </div>\r\n\r\n      <!-- categories-->\r\n      <div class=\"filterSection\" *ngIf=\"GlobalFieldsListingPro.listingTypeDetail.filter_status.enable_cats_search_filter && GlobalFieldsListingPro.listingCategories\">\r\n        <i class=\"fas fa-tasks iconsChoices\"></i> <ion-label class=\"titleSectionFilter\">{{'CATEGORIES' | translate}}</ion-label>\r\n        <i *ngIf=\"GlobalFieldsListingPro.filtersSearch.categories && GlobalFieldsListingPro.filtersSearch.categories.length > 0\" (click)=\"GlobalFieldsListingPro.filtersSearch.categories = undefined\" class=\"far fa-trash-alt rightClearBtn\"></i>\r\n        <ion-item style=\"padding:0px; width: calc(100% - 30px)\">\r\n          <ion-select [cancelText]=\"'CANCEL' | translate\" [okText]=\"'SELECT' | translate\"  [(ngModel)]=\"GlobalFieldsListingPro.filtersSearch.categories\" placeholder=\"{{'SELECT' | translate}}\" selectedText=\"{{GlobalFieldsListingPro.filtersSearch.categories}}\">\r\n            <ion-select-option *ngFor=\"let c of GlobalFieldsListingPro.listingCategories\" value=\"{{c.name}}\">{{c.name}}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <!-- Extra fields filter -->\r\n      <span *ngIf=\"GlobalFieldsListingPro.listingTypeDetail.filter_status.enable_extrafields_filter\">\r\n\r\n       <!-- <h3 style=\"text-align: center\">MORE FILTERS</h3> -->\r\n\r\n\r\n        <!-- features -->\r\n        <div class=\"filterSection\">\r\n         <i class=\"far fa-check-circle iconsChoices\"></i> <ion-label class=\"titleSectionFilter\">{{'DETAILS'| translate}}</ion-label>\r\n          <ion-item *ngFor=\"let t of GlobalFieldsListingPro.filtersSearch.features\" style=\" font-size: 10pt; padding: 0; margin-bottom: -11px; background-color: transparent;\">\r\n            <ion-label>{{t.val.name}}</ion-label>\r\n            <ion-checkbox slot=\"end\" [(ngModel)]=\"t.isChecked\" ></ion-checkbox>\r\n          </ion-item>\r\n        </div>\r\n\r\n\r\n      </span>\r\n\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"filterSection\" style=\"text-align: right; color: #f13224;\" (click)=\"clearFilters()\"><i class=\"far fa-trash-alt\"></i> {{'CLEAR_FILTER'| translate}}</div>\r\n\r\n    <br>\r\n    <br>\r\n  </div>\r\n\r\n\r\n\r\n</ion-content>\r\n\r\n\r\n<ion-footer style=\"display: inline-flex; padding: 5px; padding-bottom: 20px; background-color: white; border: none;\"   dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n  <button class=\"buttonSearch\" [ngStyle]=\"GlobalFields.getPrimaryColorJson()\" (click)=\"getFilteredListingsFirstTime(); closeModal()\">\r\n    <ion-icon style=\"margin-bottom:-3px;\" name=\"search\"></ion-icon> <ion-text style=\"margin-left: 8px;\">{{'SHOW_RESULTS' | translate}}</ion-text>\r\n  </button>\r\n</ion-footer>\r\n\r\n";
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


    __webpack_exports__["default"] = "<ion-header class=\"ionHeaderHeader\" dir=\"{{GlobalFields.getLanguageLayout()}}\" style=\"background-color: white; border: none; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);\">\r\n    <ion-toolbar  class=\"toolbarHeader\">\r\n        <div class=\"headerContainer\">\r\n            <div class=\"headerCol1\" (click)=\"closeModal()\">\r\n                <i class=\"fas fa-times\"  ></i>\r\n            </div>\r\n            <div class=\"headerCol2\">\r\n                <span>{{'MAP' | translate}}</span>\r\n            </div>\r\n        </div>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content  style=\"overflow: hidden;\"  dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n\r\n\r\n\r\n    <!-- ***************** Google Maps ***************** -->\r\n\r\n    <!-- https://github.com/SebastianM/angular-google-maps -->\r\n    <!-- https://www.npmjs.com/package/agm-direction -->\r\n    <span *ngIf=\"GlobalFields.site_details.mapType == 1\">\r\n        <agm-map *ngIf=\"!loading\"\r\n                 [latitude]=\"myLat\"\r\n                 [longitude]=\"myLng\"\r\n                 [zoom]=\"currentZoom\"\r\n                 [zoomControl]=\"false\"\r\n                 [streetViewControl]=\"false\"\r\n                 [clickableIcons]=\"false\"\r\n                 (centerChange)=\"centerChanged($event)\"\r\n                 [gestureHandling]=\"'greedy'\">\r\n\r\n            <agm-marker *ngIf=\"GlobalFields.lat && GlobalFields.long\"\r\n                    [latitude]=\"GlobalFields.lat\"\r\n                    [longitude]=\"GlobalFields.long\"\r\n                    [iconUrl]= \"{url: '../../../assets/imgs/street-view.png', labelOrigin:{x:22.5,y:20}, scaledSize: {height: 40, width: 40}}\">\r\n\r\n               <!-- <agm-info-window>\r\n                    <ion-button color=\"primary\">Search nearby listings</ion-button>\r\n                </agm-info-window>\r\n                -->\r\n            </agm-marker>\r\n\r\n           <!-- <agm-marker\r\n                    *ngFor=\"let m of positions; let i = index\"\r\n                    (markerClick)=\"clickedMarker(m)\"\r\n                    [latitude]=\"m.lat\"\r\n                    [longitude]=\"m.lng\"\r\n                    [markerDraggable]=\"m.draggable\"\r\n                    [label]=\"m.labelOptions\"\r\n                    [iconUrl]=\"m.iconUrl\">\r\n\r\n                <agm-info-window [isOpen]=\"m.listing == selectedListing\">\r\n                    <div style=\"width: 100%;\" *ngIf=\"selectedListing!=undefined\">\r\n                        <page-listingList [listing]=\"selectedListing\" [type]=\"'1'\" [search]=\"false\"></page-listingList>\r\n                    </div>\r\n                </agm-info-window>\r\n\r\n            </agm-marker>\r\n\r\n            -->\r\n\r\n             <agm-marker-cluster imagePath=\"https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclustererplus/images/m\">\r\n               <agm-overlay\r\n                       *ngFor=\"let m of positions; let i = index\"\r\n                       (markerClick)=\"clickedMarker(m)\"\r\n                       [latitude]=\"m.lat\"\r\n                       [longitude]=\"m.lng\">\r\n\r\n                    <!-- Custom pin HTML-->\r\n                    <div class=\"imgMapPin\"><img [src]=\"m.iconImgUrlHtml\"><img class=\"iconMapPinWithImg\" [src]=\"m.iconNameHtml\"></div>\r\n\r\n                   <!-- Window opened on click-->\r\n                    <agm-info-window [isOpen]=\"m.listing == selectedListing\">\r\n                        <div style=\"width: 100%;\" *ngIf=\"selectedListing!=undefined\">\r\n                            <listingList_LP [listing]=\"selectedListing\" [type]=\"'1'\" [search]=\"false\"></listingList_LP>\r\n                        </div>\r\n                    </agm-info-window>\r\n\r\n               </agm-overlay>\r\n              </agm-marker-cluster>\r\n\r\n\r\n\r\n            <!--  <agm-direction *ngFor=\"let pos of positions\" [origin]=\"pos\" [destination]=\"pos\"></agm-direction> -->\r\n        </agm-map>\r\n    </span>\r\n\r\n\r\n    <!-- ***************** Open Street Maps ***************** -->\r\n\r\n    <span *ngIf=\"GlobalFields.site_details.mapType == 2\">\r\n        <div id=\"map\" style=\"width:100%; height:100%;\"></div>\r\n\r\n\r\n        <div *ngIf=\"showSelected\" class=\"listingCard\">\r\n            <listingList_LP [listing]=\"selectedListing\" [type]=\"'1'\" [search]=\"true\"></listingList_LP>\r\n        </div>\r\n\r\n    </span>\r\n\r\n</ion-content>\r\n\r\n\r\n";
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


    __webpack_exports__["default"] = "<!-- Lista tipi listing -->\r\n<ion-header translucent=\"true\">\r\n  <ion-toolbar>\r\n    <!-- If Side menu is used-->\r\n    <ion-buttons *ngIf=\"GlobalFields.site_details.navigationType==2\" slot=\"start\">\r\n      <ion-menu-button style=\"color: #ffffff\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-row class=\"filters\">\r\n      <ion-col col-6 style=\"float: left\">\r\n        <ion-item *ngIf=\"GlobalFieldsListingPro.listingTypeDetail && GlobalFieldsListingPro.listingTypeDetail\">\r\n          <ion-select interface=\"popover\" [(ngModel)]=\"GlobalFieldsListingPro.filtersSearch.order\" style=\"max-width: 100%;\"\r\n                      [cancelText]=\"'CANCEL' | translate\" [okText]=\"'SELECT' | translate\"\r\n                      (ionChange)=\"initialCall(false)\">\r\n            <ion-label>asd <ion-icon name=\"list\" style=\"font-size: 24px !important; color: #484848 !important; font-weight: bolder; position: relative; top: 3px;\"></ion-icon></ion-label>\r\n            <ion-select-option *ngFor=\"let order of GlobalFieldsListingPro.listingTypeDetail.order_type\" value=\"{{order}}\">\r\n          <span [ngSwitch]=\"order\">\r\n            <span *ngSwitchCase=\"'MOST_REVIEWED'\">Most Reviewed</span>\r\n            <span *ngSwitchCase=\"'MOST_VIEWED'\">Most Viewed</span>\r\n            <span *ngSwitchCase=\"'HIGHEST_RATED'\">Highest Rated</span>\r\n          </span>\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col col-6 style=\"float: right\">\r\n        <button class=\"btnOrderSearch\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n          <span *ngIf=\"!GlobalFieldsListingPro.filtersSearch.listingsCount && GlobalFieldsListingPro.filtersSearch.listingsCount != 0\"></span>\r\n          <span *ngIf=\"GlobalFieldsListingPro.filtersSearch.listingsCount == 0\">{{'NO_RESULTS' | translate}}</span>\r\n          <span *ngIf=\"GlobalFieldsListingPro.filtersSearch.listingsCount && GlobalFieldsListingPro.filtersSearch.listingsCount > 0\"> {{GlobalFieldsListingPro.filtersSearch.listingsCount}} {{'RESULTS' | translate}}</span>\r\n        </button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- <ion-content class=\"cards-bg social-cards\"  [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\"  [scrollEvents]=\"true\" (ionScroll)=\"onScrollHideHeader($event)\"> -->\r\n<ion-content class=\"cards-bg social-cards\"  [ngStyle]=\"GlobalFields.getBodyColorBackgroundJsonSearchPage()\"  dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n\r\n  <!-- Filter/Map buttons Float Buttons Style-->\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"GlobalFields.site_details.filtersBtnStyle==1\">\r\n    <ion-fab-button class=\"filterDefaultBtnFiltersContainer\"   color=\"primary\" (click)=\"openFilter()\">\r\n      <i class=\"fas fa-filter\" style=\"font-size: 22px; color: white;\"></i>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\" *ngIf=\"GlobalFields.site_details.filtersBtnStyle==1\">\r\n    <ion-fab-button class=\"filterDefaultBtnFiltersContainer\"  color=\"primary\" (click)=\"openMap()\" [disabled]=\"!GlobalFieldsListingPro.filteredListings || !(GlobalFieldsListingPro.filteredListings.length > 0)\">\r\n      <i class=\"fas fa-map-marked-alt\" style=\"font-size: 22px; color: white;\"></i>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <ion-fab vertical=\"bottom\" slot=\"fixed\" style=\"left: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%);\">\r\n    <ion-fab-button color=\"medium\" class=\"tripBtnFiltersContainer\" [class.tripBtnFiltersContainerAndroid]=\"isAndroid\" *ngIf=\"GlobalFields.site_details.filtersBtnStyle==2\">\r\n      <button (click)=\"openMap()\" style=\"border-radius: 50px 0 0 50px; border-right: 1px solid #eeeeee !important;\" [disabled]=\"!GlobalFieldsListingPro.filteredListings || !(GlobalFieldsListingPro.filteredListings.length > 0)\"><i class=\"fas fa-map-marked-alt\" [ngStyle]=\"GlobalFields.getPrimaryColorJson()\"></i> {{'MAP' | translate}}</button>\r\n      <button (click)=\"openFilter()\" style=\"border-radius: 0 50px 50px 0;\"><i class=\"fas fa-filter\" [ngStyle]=\"GlobalFields.getPrimaryColorJson()\"></i> {{'FILTERS' | translate}}</button>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <!-- Filter/Map buttons TripAdvisor Style\r\n  <div class=\"tripBtnFiltersContainer\" [class.tripBtnFiltersContainerAndroid]=\"isAndroid\" *ngIf=\"GlobalFields.site_details.filtersBtnStyle==2\">\r\n    <button (click)=\"openMap()\" style=\"border-radius: 50px 0 0 50px; border-right: 1px solid #eeeeee !important;\"><i class=\"fas fa-map-marked-alt\" [ngStyle]=\"GlobalFields.getPrimaryColorJson()\"></i> {{'MAP' | translate}}</button>\r\n    <button (click)=\"openFilter()\" style=\"border-radius: 0 50px 50px 0;\"><i class=\"fas fa-filter\" [ngStyle]=\"GlobalFields.getPrimaryColorJson()\"></i> {{'FILTERS' | translate}}</button>\r\n  </div>\r\n  -->\r\n\r\n  <ion-row>\r\n\r\n    <!-- List of results-->\r\n    <ion-row *ngIf=\"GlobalFieldsListingPro.filteredListings && GlobalFieldsListingPro.filteredListings.length>0\" style=\"width: 100%; margin-bottom: 100px;\">\r\n\r\n      <ion-col col-12 style=\"padding: 10px;\">\r\n        <div *ngFor=\"let listing of GlobalFieldsListingPro.filteredListings;  let i = index\" style=\"margin-bottom: 15px;\">\r\n          <listingList_LP [listing]=\"listing\" [search]=\"true\"></listingList_LP>\r\n        </div>\r\n\r\n        <!-- <div style=\"width: 100%; text-align: center;\" *ngIf=\"!GlobalFieldsMyListing.filtersSearch.noMorePage && !loadingMoreData\" (click)=\"loadData()\">\r\n          <ion-icon name=\"refresh\"></ion-icon> {{'LOAD_MORE' | translate}}\r\n        </div>\r\n        <div style=\"width: 100%; text-align: center;\" *ngIf=\"loadingMoreData\">\r\n          <div class=\"lds-ellipsis\"><div></div><div></div><div></div><div></div></div>\r\n        </div>-->\r\n\r\n        <div style=\"text-align: center; width: 100%; height: 300px; color: #afafaf; padding-top: 100px;\" *ngIf=\"loadingMoreData\">\r\n          <div style=\"margin-bottom: -10px\">\r\n            Loading more\r\n          </div>\r\n          <div class=\"lds-ellipsis\" ><div></div><div></div><div></div><div></div></div>\r\n        </div>\r\n\r\n         <ion-infinite-scroll *ngIf=\"!this.loadingMoreData && (GlobalFieldsListingPro.filtersSearch.pageCount > GlobalFieldsListingPro.filtersSearch.currentPage+1)\" threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n            <ion-infinite-scroll-content\r\n              loadingSpinner=\"dots\"\r\n              loadingText=\"{{'LOAD_MORE' | translate}}\">\r\n            </ion-infinite-scroll-content>\r\n         </ion-infinite-scroll>\r\n\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"GlobalFieldsListingPro.filteredListings && GlobalFieldsListingPro.filteredListings.length==0\" style=\"width: 100%;\">\r\n      <ion-col>\r\n        <div *ngIf=\"GlobalFieldsListingPro.filtersSearch.location\" class=\"noResults\">\r\n          {{'NO_NEAR_RESULTS' | translate}} <i>{{GlobalFieldsListingPro.filtersSearch.location}}</i> <br><br> {{'EDIT_FILTER_RETRY' | translate}}.\r\n        </div>\r\n        <div *ngIf=\"!GlobalFieldsListingPro.filtersSearch.location\" class=\"noResults\">\r\n         {{'NO_RESULTS' | translate}}. <br><br> {{'EDIT_FILTER_RETRY' | translate}}.\r\n        </div>\r\n\r\n        <ion-button expand=\"full\" color=\"primary\"  (click)=\"openFilter()\"><ion-icon name=\"switch\"></ion-icon> {{'FILTERS' | translate}}</ion-button>\r\n\r\n        <div (click)=\"clearFilters()\" style=\"padding: 15px; text-align: center; color: #F44336;\">\r\n          <i class=\"fas fa-trash\"></i> Clear filters\r\n        </div>\r\n\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n    <div style=\"width: 100%; text-align: center; background-color: transparent; position: fixed; top: 50%;\" *ngIf=\"GlobalFieldsListingPro.filteredListings == undefined\">\r\n      <div class=\"lds-ellipsis\" ><div></div><div></div><div></div><div></div></div>\r\n    </div>\r\n\r\n\r\n  </ion-row>\r\n\r\n  <div id=\"check-point\"></div>  <!-- Check point to the bottom -->\r\n</ion-content>\r\n";
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


    __webpack_exports__["default"] = ".sectionTitleFilter {\n  font-size: 20px;\n  letter-spacing: normal !important;\n  color: #484848 !important;\n  padding-top: 2px !important;\n  padding-bottom: 2px !important;\n  padding: 5px;\n  margin-bottom: 10px;\n  line-height: 26px !important;\n}\n\n.iconsChoices {\n  padding-right: 5px;\n  font-size: 22px;\n  padding-left: 5px;\n}\n\n.rightClearBtn {\n  margin-right: 10px;\n  float: right;\n  margin-top: 18px;\n  z-index: 999;\n  color: #f13224;\n}\n\n.buttonSearch {\n  background-color: white;\n  width: 80%;\n  margin: auto;\n  font-size: 16px;\n  height: 35px;\n  font-weight: 600;\n  color: #3fdc7e;\n  border-radius: 50px;\n  border: solid 1px #f3f3f3;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTGlzdGluZ1Byby9zZWFyY2hQYWdlL2ZpbHRlck1vZGFsL0M6XFxqb2tlc29uam9lbFxcam9rZXNvbmpvZWwvc3JjXFxhcHBcXExpc3RpbmdQcm9cXHNlYXJjaFBhZ2VcXGZpbHRlck1vZGFsXFxmaWx0ZXJNb2RhbF9MUC5zY3NzIiwic3JjL2FwcC9MaXN0aW5nUHJvL3NlYXJjaFBhZ2UvZmlsdGVyTW9kYWwvZmlsdGVyTW9kYWxfTFAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBDQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9MaXN0aW5nUHJvL3NlYXJjaFBhZ2UvZmlsdGVyTW9kYWwvZmlsdGVyTW9kYWxfTFAuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc2VjdGlvblRpdGxlRmlsdGVye1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHJnYig3MiwgNzIsIDcyKSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctdG9wOiAycHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTogMnB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmljb25zQ2hvaWNlc3tcclxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcblxyXG4ucmlnaHRDbGVhckJ0bntcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGNvbG9yOiAjZjEzMjI0O1xyXG59XHJcblxyXG4uYnV0dG9uU2VhcmNoe1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogcmdiKDYzLCAyMjAsIDEyNik7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjZjNmM2YzO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG4iLCIuc2VjdGlvblRpdGxlRmlsdGVyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNDg0ODQ4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAycHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDJweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uc0Nob2ljZXMge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi5yaWdodENsZWFyQnRuIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIHotaW5kZXg6IDk5OTtcbiAgY29sb3I6ICNmMTMyMjQ7XG59XG5cbi5idXR0b25TZWFyY2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogMzVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzZmRjN2U7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmM2YzZjM7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn0iXX0= */";
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


    __webpack_exports__["default"] = ".sectionTitleFilter {\n  font-size: 20px;\n  letter-spacing: normal !important;\n  color: #484848 !important;\n  padding-top: 2px !important;\n  padding-bottom: 2px !important;\n  padding: 5px;\n  margin-bottom: 10px;\n  line-height: 26px !important;\n}\n\n.iconsChoices {\n  font-size: 22px;\n}\n\nagm-map {\n  height: 100%;\n}\n\n.toolbar-background {\n  background: transparent !important;\n  border: none !important;\n}\n\nion-content .scroll-content {\n  margin-top: 0px !important;\n}\n\n.header-ios .toolbar-background-ios {\n  border: none !important;\n  box-shadow: none !important;\n}\n\n.header-md .toolbar-background-md {\n  border: none !important;\n  box-shadow: none !important;\n}\n\n.header-md::after {\n  background-image: none !important;\n}\n\n.backImg {\n  width: 100%;\n  height: 100px;\n  background-position: center !important;\n  background-size: cover !important;\n  border-radius: 5px;\n}\n\n.listingCard {\n  position: fixed;\n  z-index: 999;\n  bottom: 15px;\n  width: 90% !important;\n  left: 5%;\n  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTGlzdGluZ1Byby9zZWFyY2hQYWdlL21hcE1vZGFsL0M6XFxqb2tlc29uam9lbFxcam9rZXNvbmpvZWwvc3JjXFxhcHBcXExpc3RpbmdQcm9cXHNlYXJjaFBhZ2VcXG1hcE1vZGFsXFxtYXBNb2RhbF9MUC5zY3NzIiwic3JjL2FwcC9MaXN0aW5nUHJvL3NlYXJjaFBhZ2UvbWFwTW9kYWwvbWFwTW9kYWxfTFAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSxrQ0FBQTtFQUNBLHVCQUFBO0FDQUY7O0FER0E7RUFDRSwwQkFBQTtBQ0FGOztBREdBO0VBQ0UsdUJBQUE7RUFDQSwyQkFBQTtBQ0FGOztBREVBO0VBQ0UsdUJBQUE7RUFDQSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUNBQUE7QUNDRjs7QURJQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0NBQUE7RUFJQSxpQ0FBQTtFQUNBLGtCQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFFBQUE7RUFDQSwwREFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvTGlzdGluZ1Byby9zZWFyY2hQYWdlL21hcE1vZGFsL21hcE1vZGFsX0xQLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnNlY3Rpb25UaXRsZUZpbHRlcntcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiByZ2IoNzIsIDcyLCA3MikgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogMnB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDJweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pY29uc0Nob2ljZXN7XHJcbiAgZm9udC1zaXplOiAyMnB4XHJcbn1cclxuXHJcbmFnbS1tYXAge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRvb2xiYXItYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQgLnNjcm9sbC1jb250ZW50IHtcclxuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlYWRlci1pb3MgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmUhaW1wb3J0YW50O1xyXG59XHJcbi5oZWFkZXItbWQgLnRvb2xiYXItYmFja2dyb3VuZC1tZCB7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbi5oZWFkZXItbWQ6OmFmdGVye1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcblxyXG4uYmFja0ltZ3tcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ubGlzdGluZ0NhcmR7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBib3R0b206IDE1cHg7XHJcbiAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xyXG4gIGxlZnQ6IDUlO1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCA0cHggMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4iLCIuc2VjdGlvblRpdGxlRmlsdGVyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNDg0ODQ4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAycHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDJweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uc0Nob2ljZXMge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbmFnbS1tYXAge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50b29sYmFyLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQgLnNjcm9sbC1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItaW9zIC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1tZCAudG9vbGJhci1iYWNrZ3JvdW5kLW1kIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5iYWNrSW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5saXN0aW5nQ2FyZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5O1xuICBib3R0b206IDE1cHg7XG4gIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcbiAgbGVmdDogNSU7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCA0cHggMHB4ICFpbXBvcnRhbnQ7XG59Il19 */";
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


    __webpack_exports__["default"] = ".oneColumnListImg {\n  width: 100%;\n  height: calc(100% - 70px);\n  background-position: center !important;\n  background-size: cover !important;\n  border-radius: 5px;\n}\n\n.btnToolSearch {\n  font-size: 20px;\n  width: 100%;\n  line-height: 2;\n  background-color: #ffffff;\n  padding: 5px;\n  text-align: center;\n  text-transform: uppercase !important;\n  color: #5294ff !important;\n  padding-top: 6px !important;\n  padding-bottom: 6px !important;\n  font-weight: 800 !important;\n  background-color: white !important;\n  box-shadow: rgba(0, 0, 0, 0.14) 0px 1px 1px 1px !important;\n  cursor: pointer !important;\n  border-radius: 80px !important;\n  border-width: initial !important;\n  border-style: none !important;\n  border-color: initial !important;\n  -o-border-image: initial !important;\n     border-image: initial !important;\n}\n\n.btnOrderSearch {\n  width: 100%;\n  line-height: 2;\n  background-color: transparent;\n  padding: 10px;\n  font-size: 14px !important;\n  letter-spacing: normal !important;\n  color: #484848 !important;\n  font-weight: 500;\n}\n\n.btnOrderSearch[dir=ltr] {\n  text-align: right;\n}\n\n.btnOrderSearch[dir=rtl] {\n  text-align: left;\n}\n\n.btnToolSearch span {\n  font-size: small;\n}\n\n.topFixed {\n  width: 100%;\n  bottom: 100px;\n  position: fixed;\n  z-index: 99;\n}\n\n.noResults {\n  font-size: small;\n  padding: 15px;\n}\n\n.filterDefaultBtnFiltersContainer {\n  background: transparent;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  border-radius: 50px !important;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.33);\n}\n\n.tripBtnFiltersContainerAndroid {\n  bottom: 55px !important;\n}\n\n/*\n.tripBtnFiltersContainer{\n  background: white;\n  position: fixed;\n  bottom: 75px;\n  z-index: 99999;\n  margin: auto;\n  left: 50%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  min-width: 170px;\n  height: 35px;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  transition: box-shadow 200ms ease-in !important;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: -moz-fit-content;\n  width: -webkit-fit-content;\n  width: fit-content;\n  border-radius: 50px;\n  font-size: 10pt;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.29);\n  border: solid 1px #f3f3f3;\n} */\n\n.tripBtnFiltersContainer {\n  background: white;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  min-width: 200px;\n  height: 40px !important;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: -moz-fit-content;\n  width: -webkit-fit-content;\n  width: fit-content;\n  border-radius: 50px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.33);\n  border: solid 1px #f3f3f3;\n}\n\n.tripBtnFiltersContainer button {\n  background: transparent;\n  padding: 0 5px;\n  width: 50%;\n  height: 45px !important;\n  text-overflow: ellipsis;\n  font-size: 13pt;\n}\n\n.tripBtnFiltersContainer button:focus {\n  background-color: #d8d8d8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTGlzdGluZ1Byby9zZWFyY2hQYWdlL0M6XFxqb2tlc29uam9lbFxcam9rZXNvbmpvZWwvc3JjXFxhcHBcXExpc3RpbmdQcm9cXHNlYXJjaFBhZ2VcXHNlYXJjaFBhZ2VfTFAuc2NzcyIsInNyYy9hcHAvTGlzdGluZ1Byby9zZWFyY2hQYWdlL3NlYXJjaFBhZ2VfTFAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFdBQUE7RUFHQSx5QkFBQTtFQUNBLHNDQUFBO0VBSUEsaUNBQUE7RUFDQSxrQkFBQTtBQ0RGOztBREtBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSwwREFBQTtFQUNBLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQ0FBQTtLQUFBLGdDQUFBO0FDRkY7O0FET0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDSkY7O0FET0E7RUFDRSxpQkFBQTtBQ0pGOztBRE9BO0VBQ0UsZ0JBQUE7QUNKRjs7QURRQTtFQUNFLGdCQUFBO0FDTEY7O0FEUUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDTEY7O0FEUUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUNMRjs7QURTQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtBQ05GOztBRFdBO0VBQ0UsdUJBQUE7QUNSRjs7QURVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FBQTs7QUEyQkE7RUFDRSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EseUJBQUE7QUNQRjs7QURVQTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ1BGOztBRFNBO0VBQ0UseUJBQUE7QUNORiIsImZpbGUiOiJzcmMvYXBwL0xpc3RpbmdQcm8vc2VhcmNoUGFnZS9zZWFyY2hQYWdlX0xQLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5vbmVDb2x1bW5MaXN0SW1ne1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogLXdlYmtpdC1jYWxjKDEwMCUgLSA3MHB4KTtcclxuICBoZWlnaHQ6IC1tb3otY2FsYygxMDAlIC0gNzBweCk7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA3MHB4KTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuXHJcbi5idG5Ub29sU2VhcmNoe1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBsaW5lLWhlaWdodDogMjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjNTI5NGZmICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy10b3A6IDZweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiA2cHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE0KSAwcHggMXB4IDFweCAxcHggIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXdpZHRoOiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXN0eWxlOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWltYWdlOiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLmJ0bk9yZGVyU2VhcmNoe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxpbmUtaGVpZ2h0OiAyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiByZ2IoNzIsIDcyLCA3MikgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uYnRuT3JkZXJTZWFyY2hbZGlyPVwibHRyXCJde1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uYnRuT3JkZXJTZWFyY2hbZGlyPVwicnRsXCJde1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcblxyXG4uYnRuVG9vbFNlYXJjaCBzcGFue1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbi50b3BGaXhlZHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3R0b206IDEwMHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA5OTtcclxufVxyXG5cclxuLm5vUmVzdWx0c3tcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcblxyXG4uZmlsdGVyRGVmYXVsdEJ0bkZpbHRlcnNDb250YWluZXJ7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zMyk7XHJcbn1cclxuXHJcblxyXG5cclxuLnRyaXBCdG5GaWx0ZXJzQ29udGFpbmVyQW5kcm9pZHtcclxuICBib3R0b206IDU1cHggIWltcG9ydGFudDtcclxufVxyXG4vKlxyXG4udHJpcEJ0bkZpbHRlcnNDb250YWluZXJ7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogNzVweDtcclxuICB6LWluZGV4OiA5OTk5OTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbGVmdDogNTAlO1xyXG4gIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xyXG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBtaW4td2lkdGg6IDE3MHB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjAwbXMgZWFzZS1pbiAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcclxuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBmb250LXNpemU6IDEwcHQ7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMjkpO1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICNmM2YzZjM7XHJcbn0gKi9cclxuLnRyaXBCdG5GaWx0ZXJzQ29udGFpbmVye1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xyXG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcclxuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zMyk7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2YzZjNmMztcclxufVxyXG5cclxuLnRyaXBCdG5GaWx0ZXJzQ29udGFpbmVyIGJ1dHRvbntcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nOiAwIDVweDtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogNDVweCAhaW1wb3J0YW50O1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIGZvbnQtc2l6ZTogMTNwdDtcclxufVxyXG4udHJpcEJ0bkZpbHRlcnNDb250YWluZXIgYnV0dG9uOmZvY3Vze1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGQ4ZDg7XHJcbn1cclxuIiwiLm9uZUNvbHVtbkxpc3RJbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAtd2Via2l0LWNhbGMoMTAwJSAtIDcwcHgpO1xuICBoZWlnaHQ6IC1tb3otY2FsYygxMDAlIC0gNzBweCk7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNzBweCk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5idG5Ub29sU2VhcmNoIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNTI5NGZmICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiA2cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDZweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNCkgMHB4IDFweCAxcHggMXB4ICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4MHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci13aWR0aDogaW5pdGlhbCAhaW1wb3J0YW50O1xuICBib3JkZXItc3R5bGU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1pbWFnZTogaW5pdGlhbCAhaW1wb3J0YW50O1xufVxuXG4uYnRuT3JkZXJTZWFyY2gge1xuICB3aWR0aDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzQ4NDg0OCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uYnRuT3JkZXJTZWFyY2hbZGlyPWx0cl0ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmJ0bk9yZGVyU2VhcmNoW2Rpcj1ydGxdIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmJ0blRvb2xTZWFyY2ggc3BhbiB7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbi50b3BGaXhlZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDEwMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5O1xufVxuXG4ubm9SZXN1bHRzIHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLmZpbHRlckRlZmF1bHRCdG5GaWx0ZXJzQ29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMzKTtcbn1cblxuLnRyaXBCdG5GaWx0ZXJzQ29udGFpbmVyQW5kcm9pZCB7XG4gIGJvdHRvbTogNTVweCAhaW1wb3J0YW50O1xufVxuXG4vKlxuLnRyaXBCdG5GaWx0ZXJzQ29udGFpbmVye1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDc1cHg7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBtYXJnaW46IGF1dG87XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1pbi13aWR0aDogMTcwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjAwbXMgZWFzZS1pbiAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMjkpO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZjNmM2YzO1xufSAqL1xuLnRyaXBCdG5GaWx0ZXJzQ29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zMyk7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmM2YzZjM7XG59XG5cbi50cmlwQnRuRmlsdGVyc0NvbnRhaW5lciBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMCA1cHg7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNDVweCAhaW1wb3J0YW50O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1zaXplOiAxM3B0O1xufVxuXG4udHJpcEJ0bkZpbHRlcnNDb250YWluZXIgYnV0dG9uOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDhkODtcbn0iXX0= */";
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

    var SearchPage_LPModule = function SearchPage_LPModule() {
      _classCallCheck(this, SearchPage_LPModule);
    };

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