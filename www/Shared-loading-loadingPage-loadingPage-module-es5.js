function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Shared-loading-loadingPage-loadingPage-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Shared/loading/loadingPage/loadingPage.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Shared/loading/loadingPage/loadingPage.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedLoadingLoadingPageLoadingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content  class=\"cards-bg social-cards\" style=\"z-index: 99999;\">\n  <loading [softLoading]=\"false\"></loading>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/Shared/loading/loadingPage/loadingPage.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/Shared/loading/loadingPage/loadingPage.module.ts ***!
    \******************************************************************/

  /*! exports provided: LoadingPageModule */

  /***/
  function srcAppSharedLoadingLoadingPageLoadingPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingPageModule", function () {
      return LoadingPageModule;
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


    var _loadingPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./loadingPage */
    "./src/app/Shared/loading/loadingPage/loadingPage.ts");
    /* harmony import */


    var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared.module */
    "./src/app/shared.module.ts");

    var LoadingPageModule = /*#__PURE__*/_createClass(function LoadingPageModule() {
      _classCallCheck(this, LoadingPageModule);
    });

    LoadingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: '',
        component: _loadingPage__WEBPACK_IMPORTED_MODULE_6__["LoadingPage"]
      }]), _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_loadingPage__WEBPACK_IMPORTED_MODULE_6__["LoadingPage"]]
    })], LoadingPageModule);
    /***/
  },

  /***/
  "./src/app/Shared/loading/loadingPage/loadingPage.ts":
  /*!***********************************************************!*\
    !*** ./src/app/Shared/loading/loadingPage/loadingPage.ts ***!
    \***********************************************************/

  /*! exports provided: LoadingPage */

  /***/
  function srcAppSharedLoadingLoadingPageLoadingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingPage", function () {
      return LoadingPage;
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

    var LoadingPage = /*#__PURE__*/_createClass(function LoadingPage() {
      _classCallCheck(this, LoadingPage);

      //This page is used only just default route while a theme is nto set yet (config call not ended yet)
      this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_2__["GlobalFields"];
    });

    LoadingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'loading-page',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./loadingPage.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Shared/loading/loadingPage/loadingPage.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LoadingPage);
    /***/
  }
}]);
//# sourceMappingURL=Shared-loading-loadingPage-loadingPage-module-es5.js.map