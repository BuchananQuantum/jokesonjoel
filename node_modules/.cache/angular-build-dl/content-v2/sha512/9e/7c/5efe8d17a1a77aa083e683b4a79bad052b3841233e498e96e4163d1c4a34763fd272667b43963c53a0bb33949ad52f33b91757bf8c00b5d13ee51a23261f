(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Shared-tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Shared/customPage/customPage.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Shared/customPage/customPage.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- If Side menu is used-->\n<ion-header *ngIf=\"GlobalFields.site_details.navigationType==2\" translucent=\"true\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n  <ion-toolbar class=\"sidebarHeader\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: #3b3c3c\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{GlobalFields.site_details.nameCustomTab}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content  dir=\"{{GlobalFields.getLanguageLayout()}}\">\n\n\n    <div *ngIf=\"!isAUrl\" [innerHTML]=\"html\" style=\"padding: 16px; margin-top: 15px\"></div>\n\n    <div *ngIf=\"isAUrl\" style=\"height: 100%\">\n        <iframe [src]='secureUrl'\n                #iframe\n                webkitallowfullscreen mozallowfullscreen allowfullscreen\n                sandbox=\"allow-scripts allow-top-navigation allow-pointer-lock allow-forms allow-same-origin allow-popups\"\n                style=\"width: 100%; height: 100%; border: none\">\n        </iframe>\n    </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Shared/tabs/tabs.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Shared/tabs/tabs.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<ion-tabs *ngIf=\"!GlobalFields.loadingHard && !GlobalFields.firstLoading\" mode=\"ios\" style=\"height: 100%\">\n\n  <!-- Loading-->\n  <ion-tab-bar *ngIf=\"!GlobalFields.msgsSelected && GlobalFields.loadingHard\" mode=\"ios\" slot=\"bottom\" dir=\"{{GlobalFields.getLanguageLayout()}}\" style=\"border-top: none; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);\">\n    <ion-tab-button class=\"tab\" mode=\"ios\">\n      <ion-skeleton-text animated style=\"width: 20%; height: 30px; margin-right: 15px; margin-left: 15px\"></ion-skeleton-text>\n    </ion-tab-button>\n    <ion-tab-button class=\"tab\" mode=\"ios\">\n      <ion-skeleton-text animated style=\"width: 20%; height: 30px; margin-right: 15px; margin-left: 15px\"></ion-skeleton-text>\n    </ion-tab-button>\n    <ion-tab-button class=\"tab\" mode=\"ios\">\n      <ion-skeleton-text animated style=\"width: 20%; height: 30px; margin-right: 15px; margin-left: 15px\"></ion-skeleton-text>\n    </ion-tab-button>\n    <ion-tab-button class=\"tab\" mode=\"ios\">\n      <ion-skeleton-text animated style=\"width: 20%; height: 30px; margin-right: 15px; margin-left: 15px\"></ion-skeleton-text>\n    </ion-tab-button>\n    <ion-tab-button class=\"tab\" mode=\"ios\">\n      <ion-skeleton-text animated style=\"width: 20%; height: 30px; margin-right: 15px; margin-left: 15px\"></ion-skeleton-text>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n  <!-- Tabs -->\n  <ion-tab-bar *ngIf=\"GlobalFields.site_details.navigationType==1 && GlobalFields.showTabs && !GlobalFields.loadingHard\" mode=\"ios\" slot=\"bottom\" dir=\"{{GlobalFields.getLanguageLayout()}}\" style=\"border-top: none; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);\">\n    <ion-tab-button class=\"tab\" mode=\"ios\" [routerLink]=\"['/tabs/' + GlobalFields.site_details.themeEnabled + '/home']\" [ngStyle]=\"getStyleSelectedTab('home')\">\n        <i class=\"{{GlobalFields.site_details.homeTabIcon}}\" style=\"font-size: 22px\"></i>\n    </ion-tab-button>\n\n    <ion-tab-button class=\"tab\" *ngIf=\"GlobalFields.site_details.showCategoriesList\"\n                    [routerLink]=\"['/tabs/'+ GlobalFields.site_details.themeEnabled + '/categoriesList']\" [ngStyle]=\"getStyleSelectedTab('categoriesList')\">\n        <i class=\"{{GlobalFields.site_details.categoriesTabIcon}}\" style=\"font-size: 22px\"></i>\n    </ion-tab-button>\n\n    <ion-tab-button class=\"tab\" mode=\"ios\" [routerLink]=\"['/tabs/'+ GlobalFields.site_details.themeEnabled +'/search']\" [ngStyle]=\"getStyleSelectedTab('search')\" *ngIf=\"GlobalFields.site_details && GlobalFields.site_details.searchTabIcon\">\n        <i class=\"{{GlobalFields.site_details.searchTabIcon}}\" style=\"font-size: 22px\"></i>\n    </ion-tab-button>\n\n    <ion-tab-button class=\"tab\" mode=\"ios\" color=\"primary\" *ngIf=\"GlobalFields.site_details && GlobalFields.site_details.faPlusCustomTab\" (click)=\"openAddModal()\">\n        <i *ngIf=\"showCircleAsPlusIcon()\"\n           class=\"{{GlobalFields.site_details.faPlusCustomTab}}\" style=\"font-size: 20px;\n                padding: 10px;\n                padding-left: 0px;\n                padding-right: 0px;\n                border-radius: 50px;\n                width: 40px;\n                color: white;\n                box-shadow: 0 0px 6px rgba(0,0,0,.15)!important;\n            \"\n           [ngStyle]=\"GlobalFields.getPrimaryColorBackgroundJson()\"></i>\n\n        <i *ngIf=\"!showCircleAsPlusIcon()\"\n           class=\"{{GlobalFields.site_details.faPlusCustomTab}}\"\n           style=\"font-size: 20px;\n                padding: 10px;\n                padding-left: 12px;\n                padding-right: 10px;\n                border-radius: 50px;\n                color: #8c8c8c;\n                width: 40px;\"></i>\n    </ion-tab-button>\n\n    <ion-tab-button class=\"tab\" mode=\"ios\" *ngIf=\"GlobalFields.site_details && GlobalFields.site_details.customPageUrl && GlobalFields.site_details.faIconCustomTab\"\n                    [routerLink]=\"['/tabs/'+ GlobalFields.site_details.themeEnabled + '/customPage']\" [routerDirection]=\"'root'\" [ngStyle]=\"getStyleSelectedTab('customPage')\">\n        <i class=\"{{GlobalFields.site_details.faIconCustomTab}}\" style=\"font-size: 22px\"></i>\n    </ion-tab-button>\n\n    <ion-tab-button class=\"tab\" mode=\"ios\" *ngIf=\"GlobalFields.site_details && GlobalFields.site_details.shopTabIcon\"\n            [routerLink]=\"['/tabs/'+ GlobalFields.site_details.themeEnabled +'/shop']\" [ngStyle]=\"getStyleSelectedTab('shop')\">\n      <i class=\"{{GlobalFields.site_details.shopTabIcon}}\" style=\"font-size: 22px\"></i>\n    </ion-tab-button>\n\n  <ion-tab-button class=\"tab\" mode=\"ios\" *ngIf=\"GlobalFields.site_details && GlobalFields.site_details.msgTabIcon\"\n            [routerLink]=\"['/tabs/'+ GlobalFields.site_details.themeEnabled +'/messages']\" [ngStyle]=\"getStyleSelectedTab('messages')\">\n        <i class=\"{{GlobalFields.site_details.msgTabIcon}}\" style=\"font-size: 22px\"></i>\n    </ion-tab-button>\n\n    <ion-tab-button class=\"tab\" mode=\"ios\" [routerLink]=\"['/tabs/' + GlobalFields.site_details.themeEnabled + '/menuPage']\" [ngStyle]=\"getStyleSelectedTab('menuPage')\">\n        <i *ngIf=\"!GlobalFields.isLoggedIn || (! GlobalFields.profile || !GlobalFields.profile.user)\" class=\"{{GlobalFields.site_details.profileTabIcon}}\"  style=\"font-size: 22px\"></i>\n        <img *ngIf=\"GlobalFields.isLoggedIn && GlobalFields.profile && GlobalFields.profile.user\" src=\"{{GlobalFields.profile.user.avatar}}\" style=\"height: 25px; border-radius: 55px;\">\n    </ion-tab-button>\n\n  </ion-tab-bar>\n\n</ion-tabs>\n\n\n\n\n<!--\n    <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n        <ion-fab-button  color=\"primary\" (click)=\"openAddModal()\">\n            <i class=\"fas fa-plus \"   style=\"font-size: 22px\"></i>\n        </ion-fab-button>\n    </ion-fab>\n-->\n");

/***/ }),

/***/ "./src/app/Shared/customPage/customPage.scss":
/*!***************************************************!*\
  !*** ./src/app/Shared/customPage/customPage.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1NoYXJlZC9jdXN0b21QYWdlL2N1c3RvbVBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/Shared/customPage/customPage.ts":
/*!*************************************************!*\
  !*** ./src/app/Shared/customPage/customPage.ts ***!
  \*************************************************/
/*! exports provided: CustomPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPage", function() { return CustomPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/Service */ "./src/app/services/Service.ts");
/* harmony import */ var _GlobalFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../GlobalFields */ "./src/app/GlobalFields.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





let CustomPage = class CustomPage {
    constructor(service, sanitizer) {
        this.service = service;
        this.sanitizer = sanitizer;
        this.html = '';
        this.isAUrl = false;
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"];
        this.loadUrl();
    }
    ionViewDidEnter() {
        this.service.setWhiteBlackBackgroundStatusBar();
        //To be called only when something changed (eg user logged out)
        this.isLoggedIn = (_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].profile != undefined && _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].profile.cookie != undefined);
        console.log(this.wasLoggedIn);
        console.log(this.isLoggedIn);
        if (this.wasLoggedIn != this.isLoggedIn) {
            console.log("Call it again");
            this.loadUrl();
        }
    }
    //It store the url to be called by the iframe
    loadUrl() {
        this.isAUrl = this.isURL(this.GlobalFields.site_details.customPageUrl);
        if (!this.isAUrl)
            this.getHtml();
        else {
            let url = this.GlobalFields.site_details.customPageUrl;
            if (this.isLoggedIn) {
                this.wasLoggedIn = true;
                url = url + '?cla_cookie=' + _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].profile.cookie;
            }
            else {
                this.wasLoggedIn = false;
                url = url + '?cla_cookie=' + 'logout';
            }
            if (!url.includes('https')) {
                url.replace('http', 'https');
            }
            this.secureUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        }
    }
    getHtml() {
        this.service.getHtmlFromCustomPageUrl(this.GlobalFields.site_details.customPageUrl).subscribe((data) => {
            data = JSON.parse(data);
            if (data && data.content)
                this.html = data.content.rendered;
        });
    }
    isURL(str) {
        let pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(str);
    }
};
CustomPage.ctorParameters = () => [
    { type: _services_Service__WEBPACK_IMPORTED_MODULE_2__["Service"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
];
CustomPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./customPage.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Shared/customPage/customPage.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./customPage.scss */ "./src/app/Shared/customPage/customPage.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_2__["Service"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
], CustomPage);



/***/ }),

/***/ "./src/app/Shared/tabs/tabs.module.ts":
/*!********************************************!*\
  !*** ./src/app/Shared/tabs/tabs.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/Shared/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs */ "./src/app/Shared/tabs/tabs.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/Shared/tabs/tabs.router.module.ts":
/*!***************************************************!*\
  !*** ./src/app/Shared/tabs/tabs.router.module.ts ***!
  \***************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs */ "./src/app/Shared/tabs/tabs.ts");
/* harmony import */ var _GlobalFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../GlobalFields */ "./src/app/GlobalFields.ts");





function getDefaultPath() {
    if (_GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].site_details)
        return 'tabs/' + _GlobalFields__WEBPACK_IMPORTED_MODULE_4__["GlobalFields"].site_details.themeEnabled + '/home';
    else
        return 'loading';
}
const routes = [
    {
        path: 'my-listing',
        component: _tabs__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../MyListing/home/home.module */ "./src/app/MyListing/home/home.module.ts")).then(m => m.HomePageModule)
                    }
                ]
            },
            {
                path: 'search',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../../MyListing/searchPage/search.module */ "./src/app/MyListing/searchPage/search.module.ts")).then(m => m.SearchPageModule)
                    }
                ]
            },
            {
                path: 'categoriesList',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | MyListing-categoriesList-categoriesList-module */ "MyListing-categoriesList-categoriesList-module").then(__webpack_require__.bind(null, /*! ../../MyListing/categoriesList/categoriesList.module */ "./src/app/MyListing/categoriesList/categoriesList.module.ts")).then(m => m.CategoriesListModule)
                    }
                ]
            },
            {
                path: 'messages',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | MyListing-messagesPage-messagesPage-module */ "MyListing-messagesPage-messagesPage-module").then(__webpack_require__.bind(null, /*! ../../MyListing/messagesPage/messagesPage.module */ "./src/app/MyListing/messagesPage/messagesPage.module.ts")).then(m => m.MessagesPageModule)
                    }
                ]
            }, {
                path: 'customPage',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | customPage-customPage-module */ "customPage-customPage-module").then(__webpack_require__.bind(null, /*! ../customPage/customPage.module */ "./src/app/Shared/customPage/customPage.module.ts")).then(m => m.CustomPageModule)
                    }
                ]
            },
            {
                path: 'shop',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | shopPage-shopPage-module */ "shopPage-shopPage-module").then(__webpack_require__.bind(null, /*! ../shopPage/shopPage.module */ "./src/app/Shared/shopPage/shopPage.module.ts")).then(m => m.ShopPageModule)
                    }
                ]
            },
            {
                path: 'menuPage',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | menuPage-menuPage-module */[__webpack_require__.e("default~ListingPro-home-home-module~ListingPro-searchPage-search_LP-module~menuPage-menuPage-module"), __webpack_require__.e("menuPage-menuPage-module")]).then(__webpack_require__.bind(null, /*! ../../menuPage/menuPage.module */ "./src/app/menuPage/menuPage.module.ts")).then(m => m.MenuPageModule)
                    }
                ]
            }
        ]
    },
    {
        path: 'customPage',
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | customPage-customPage-module */ "customPage-customPage-module").then(__webpack_require__.bind(null, /*! ../customPage/customPage.module */ "./src/app/Shared/customPage/customPage.module.ts")).then(m => m.CustomPageModule)
            }
        ]
    },
    {
        path: 'shop',
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | shopPage-shopPage-module */ "shopPage-shopPage-module").then(__webpack_require__.bind(null, /*! ../shopPage/shopPage.module */ "./src/app/Shared/shopPage/shopPage.module.ts")).then(m => m.ShopPageModule)
            }
        ]
    },
    {
        path: 'menuPage',
        children: [
            {
                path: '',
                loadChildren: () => Promise.all(/*! import() | menuPage-menuPage-module */[__webpack_require__.e("default~ListingPro-home-home-module~ListingPro-searchPage-search_LP-module~menuPage-menuPage-module"), __webpack_require__.e("menuPage-menuPage-module")]).then(__webpack_require__.bind(null, /*! ../../menuPage/menuPage.module */ "./src/app/menuPage/menuPage.module.ts")).then(m => m.MenuPageModule)
            }
        ]
    },
    {
        path: 'listing-pro',
        component: _tabs__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | ListingPro-home-home-module */[__webpack_require__.e("default~ListingPro-home-home-module~ListingPro-searchPage-search_LP-module~menuPage-menuPage-module"), __webpack_require__.e("ListingPro-home-home-module")]).then(__webpack_require__.bind(null, /*! ../../ListingPro/home/home.module */ "./src/app/ListingPro/home/home.module.ts")).then(m => m.HomePageModule_LP)
                    }
                ]
            },
            {
                path: 'search',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | ListingPro-searchPage-search_LP-module */[__webpack_require__.e("default~ListingPro-home-home-module~ListingPro-searchPage-search_LP-module~menuPage-menuPage-module"), __webpack_require__.e("ListingPro-searchPage-search_LP-module")]).then(__webpack_require__.bind(null, /*! ../../ListingPro/searchPage/search_LP.module */ "./src/app/ListingPro/searchPage/search_LP.module.ts")).then(m => m.SearchPage_LPModule)
                    }
                ]
            },
            {
                path: 'categoriesList',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | ListingPro-categoriesList-categoriesList_LP-module */ "ListingPro-categoriesList-categoriesList_LP-module").then(__webpack_require__.bind(null, /*! ../../ListingPro/categoriesList/categoriesList_LP.module */ "./src/app/ListingPro/categoriesList/categoriesList_LP.module.ts")).then(m => m.CategoriesList_LPModule)
                    }
                ]
            }, {
                path: 'customPage',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | customPage-customPage-module */ "customPage-customPage-module").then(__webpack_require__.bind(null, /*! ../customPage/customPage.module */ "./src/app/Shared/customPage/customPage.module.ts")).then(m => m.CustomPageModule)
                    }
                ]
            },
            {
                path: 'shop',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | shopPage-shopPage-module */ "shopPage-shopPage-module").then(__webpack_require__.bind(null, /*! ../shopPage/shopPage.module */ "./src/app/Shared/shopPage/shopPage.module.ts")).then(m => m.ShopPageModule)
                    }
                ]
            },
            {
                path: 'menuPage',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | menuPage-menuPage-module */[__webpack_require__.e("default~ListingPro-home-home-module~ListingPro-searchPage-search_LP-module~menuPage-menuPage-module"), __webpack_require__.e("menuPage-menuPage-module")]).then(__webpack_require__.bind(null, /*! ../../menuPage/menuPage.module */ "./src/app/menuPage/menuPage.module.ts")).then(m => m.MenuPageModule)
                    }
                ]
            }
        ]
    }, {
        path: '',
        redirectTo: getDefaultPath(),
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/Shared/tabs/tabs.ts":
/*!*************************************!*\
  !*** ./src/app/Shared/tabs/tabs.ts ***!
  \*************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _MyListing_home_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../MyListing/home/home */ "./src/app/MyListing/home/home.ts");
/* harmony import */ var _customPage_customPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customPage/customPage */ "./src/app/Shared/customPage/customPage.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _MyListing_modalAdd_modalAdd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../MyListing/modalAdd/modalAdd */ "./src/app/MyListing/modalAdd/modalAdd.ts");
/* harmony import */ var _MyListing_searchPage_searchPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../MyListing/searchPage/searchPage */ "./src/app/MyListing/searchPage/searchPage.ts");
/* harmony import */ var _GlobalFields__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../GlobalFields */ "./src/app/GlobalFields.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ListingPro_modalAdd_LP_modalAdd_LP__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ListingPro/modalAdd_LP/modalAdd_LP */ "./src/app/ListingPro/modalAdd_LP/modalAdd_LP.ts");










let TabsPage = class TabsPage {
    constructor(modalCtrl, router) {
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.tab1Root = _MyListing_home_home__WEBPACK_IMPORTED_MODULE_2__["HomePage"];
        this.tab2Root = _MyListing_searchPage_searchPage__WEBPACK_IMPORTED_MODULE_6__["SearchPage"];
        this.tab3Root = _customPage_customPage__WEBPACK_IMPORTED_MODULE_3__["CustomPage"];
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_7__["GlobalFields"];
        this.selectedPath = '';
        this.selectedPath = this.router.url;
        this.router.events.subscribe((event) => {
            if (event && event.url) {
                this.selectedPath = event.url;
            }
        });
    }
    /*
        openAddModal() {
            let profileModal = this.modalCtrl.create(ModalAddNode, {userId: 8675309});
            profileModal.present();
        }
    */
    openAddModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const profileModal = yield this.modalCtrl.create({
                component: _GlobalFields__WEBPACK_IMPORTED_MODULE_7__["GlobalFields"].site_details.themeEnabled == "listing-pro" ? _ListingPro_modalAdd_LP_modalAdd_LP__WEBPACK_IMPORTED_MODULE_9__["ModalAdd_LP"] : _MyListing_modalAdd_modalAdd__WEBPACK_IMPORTED_MODULE_5__["ModalAddNode"],
                componentProps: { userId: 8675309 }
            });
            return yield profileModal.present();
        });
    }
    getStyleSelectedTab(path) {
        if (this.selectedPath.includes(path))
            return { 'color': this.GlobalFields.site_details.primaryColor, 'border-bottom': 'solid 2px' };
    }
    showCircleAsPlusIcon() {
        let count = 0;
        const tabs = document.getElementsByClassName("tab");
        if (tabs && tabs.length > 0)
            count = tabs.length;
        count;
        return (count % 2 == 1 ? true : false);
    }
};
TabsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabs.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Shared/tabs/tabs.html")).default
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=Shared-tabs-tabs-module-es2015.js.map