(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["MyListing-messagesPage-messagesPage-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/MyListing/messagesPage/chatPage/chatPage.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/MyListing/messagesPage/chatPage/chatPage.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header translucent=\"true\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n    <ion-toolbar dir=\"{{GlobalFields.getLanguageLayout()}}\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"tabs/messages\" (click)=\"GlobalFields.senderMsgSelected = undefined\"></ion-back-button>\n        </ion-buttons>\n        <ion-title *ngIf=\"GlobalFields.senderMsgSelected\" style=\"font-size: 9pt;\"><img class=\"avatarImg\"  src=\"{{GlobalFields.senderMsgSelected.avatar}}\"> {{GlobalFields.senderMsgSelected.name}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content *ngIf=\"loading\" style=\" position: fixed; background-color: white; z-index: 999999; top: 43px !important;\">\n  <div style=\"padding: 15px\">\n    <span *ngFor=\"let el of [1,2,3,4,5,6]\">\n       <div style=\"width: 100%; margin-bottom: 20px; height: 30px; position: relative;\">\n        <ion-skeleton-text style=\"width: 40%; position: absolute; left: 0\" animated></ion-skeleton-text>\n      </div>\n      <div style=\"width: 100%; margin-bottom: 20px; height: 30px; position: relative;\">\n        <ion-skeleton-text style=\"width: 40%; position: absolute; right: 0\" animated></ion-skeleton-text>\n      </div>\n    </span>\n  </div>\n\n</ion-content>\n\n<ion-content #scrollElement style=\"margin-top: 20px; transform: rotate(180deg);\"  *ngIf=\"GlobalFields.msgsSelected\" class=\"cards-bg social-cards\" [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\"  dir=\"{{GlobalFields.getLanguageLayout()}}\">\n\n    <div id=\"msgContainer\" style=\"transform: rotate(180deg);\" *ngIf=\"GlobalFields.msgsSelected && GlobalFields.msgsSelected.ml && GlobalFields.senderMsgSelected\" >\n\n        <ion-row *ngFor=\"let key of getKeysOfObj(GlobalFields.msgsSelected.ml)\"   dir=\"{{GlobalFields.getLanguageLayout()}}\">\n            <ion-col size=\"12\" style=\"padding: 15px; max-width: calc(100% - 60px)\"  *ngIf=\"GlobalFields.msgsSelected.ml[key]\">\n\n                <span class=\"msgDate\" [class.msgMineOther]=\"GlobalFields.msgsSelected.ml[key].sender == GlobalFields.senderMsgSelected.id\"   dir=\"{{GlobalFields.getLanguageLayout()}}\">{{getGoodStringDate(GlobalFields.msgsSelected.ml[key].utime * 1000)}}</span>\n                <p class=\"msgMine\" *ngIf=\"GlobalFields.msgsSelected.ml[key].sender != GlobalFields.senderMsgSelected.id\"  [ngStyle]=\"GlobalFields.getPrimaryColorBackgroundJson()\"   dir=\"{{GlobalFields.getLanguageLayout()}}\">{{GlobalFields.msgsSelected.ml[key].message}}</p>\n                <p class=\"msgOther\" *ngIf=\"GlobalFields.msgsSelected.ml[key].sender == GlobalFields.senderMsgSelected.id\"   dir=\"{{GlobalFields.getLanguageLayout()}}\">{{GlobalFields.msgsSelected.ml[key].message}}</p>\n            </ion-col>\n        </ion-row>\n\n        <p class=\"msgMine\" *ngIf=\"loadingMsg\"  [ngStyle]=\"GlobalFields.getPrimaryColorBackgroundJson()\"   dir=\"{{GlobalFields.getLanguageLayout()}}\"><i class=\"fas fa-spinner fa-spin\"></i></p>\n\n    </div>\n\n\n  <div style=\"transform: rotate(180deg); position: fixed; top: -1px; padding: 10px; padding-bottom:20px; width: 100%; background-color: white\">\n        <textarea id=\"myInput\" #myInput\n                  class=\"textAreaSend\"\n                  (keyup)=\"resize()\"\n                  placeholder=\"{{'YOUR_MESSAGE' | translate}}\"\n                  [(ngModel)]=\"msgToSend\"\n                  dir=\"{{GlobalFields.getLanguageLayout()}}\"\n        ></textarea>\n    <button class=\"btnSend\" [ngStyle]=\"GlobalFields.getPrimaryColorBackgroundJson()\" (click)=\"sendMsg()\" dir=\"{{GlobalFields.getLanguageLayout()}}\"><i class=\"far fa-paper-plane\"></i></button>\n  </div>\n\n  <!--<<div style=\"transform: rotate(180deg); position: fixed; box-shadow: 0 -1px 2px rgba(0,0,0,.1); top: -1px; padding: 10px; padding-bottom:20px; width: 100%; background-color: white\">\n     <!-row  dir=\"{{GlobalFields.getLanguageLayout()}}\">\n         <ion-col size=\"10\">\n             <ion-textarea style=\"border: solid 1px #e3e3e3; padding: 5px; border-radius: 5px;\"\n                     id=\"myInput\" #myInput\n                     [autoGrow]=\"true\"\n                     [autofocus]=\"true\"\n                     placeholder=\"{{'YOUR_MESSAGE' | translate}}\"\n                     [(ngModel)]=\"msgToSend\"\n                     dir=\"{{GlobalFields.getLanguageLayout()}}\"\n             >\n             </ion-textarea>\n         </ion-col>\n         <ion-col size=\"2\">\n             <button class=\"btnSend\" [disabled]=\"!this.msgToSend\" [ngStyle]=\"GlobalFields.getPrimaryColorBackgroundJson()\" (click)=\"sendMsg()\" dir=\"{{GlobalFields.getLanguageLayout()}}\"><i class=\"far fa-paper-plane\"></i></button>\n         </ion-col>\n     </ion-row>\n\n    </div>-->\n</ion-content>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/MyListing/messagesPage/messagesPage.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/MyListing/messagesPage/messagesPage.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"true\" mode=\"{{GlobalFields.mode}}\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n  <ion-toolbar>\n    <!-- If Side menu is used-->\n    <ion-buttons *ngIf=\"GlobalFields.site_details.navigationType==2\" slot=\"start\">\n      <ion-menu-button style=\"color: #3b3c3c\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{'MESSAGES' | translate}}</ion-title>\n    <ion-buttons *ngIf=\"GlobalFields.isLoggedIn\" style=\"padding-right: 10px;\" slot=\"end\">\n      <button *ngIf=\"!search\" class=\"btn-search-header\" (click)=\"search=true\">\n        <i class=\"fas fa-edit\"></i>\n      </button>\n      <button *ngIf=\"search\" class=\"btn-search-header\" style=\"padding: 8px 10px; color: red\" (click)=\"search=false; resultSearchListings=undefined\">\n        <i class=\"fas fa-times\"></i>\n      </button>    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<!-- Login -->\n<ion-content *ngIf=\"!GlobalFields.isLoggedIn\" class=\"cards-bg social-cards\" style=\"margin-top: 20px; padding: 15px\"\n             [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n  <!-- [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\"  -->\n\n  <ion-header collapse=\"condense\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n    <ion-toolbar style=\"padding: 15px\">\n      <ion-title size=\"large\">{{'MESSAGES' | translate}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <div class=\"pageSection\" style=\"margin: 15px; margin-top: 20px;\">\n    <loginComponent (loginComplete)=\"initMsg()\"></loginComponent>\n  </div>\n</ion-content>\n\n\n<!-- Msg list-->\n<ion-content *ngIf=\"GlobalFields.isLoggedIn\" class=\"cards-bg social-cards\" style=\"margin-top: 10px;\"\n             [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\n\n  <ion-header collapse=\"condense\">\n    <ion-toolbar style=\"padding: 15px\">\n      <ion-title size=\"large\">{{'MESSAGES' | translate}}</ion-title>\n    </ion-toolbar>\n    <ion-toolbar *ngIf=\"search\">\n      <ion-searchbar #searchInput placeholder=\"{{'START_A_NEW_CHAT' | translate}}\" animated showCancelButton=\"focus\"\n                     (ionInput)=\"searchByName($event);\" (ionClear)=\"resultSearchListings=[]; search=false\"\n                     (keyup.enter)=\"doTheSearch(); search=true\"\n                     (keypress)=\"doTheSearch($event); search=true\"></ion-searchbar>\n    </ion-toolbar>\n  </ion-header>\n\n  <!-- Only for android-->\n  <span class=\"hide-ios\" *ngIf=\"search\">\n        <ion-searchbar #searchInput animated showCancelButton=\"focus\" (ionInput)=\"searchByName($event);\"\n                       (ionClear)=\"resultSearchListings=[]; search=false\" (keyup.enter)=\"doTheSearch(); search=true\"\n                       (keypress)=\"doTheSearch($event); search=true\"></ion-searchbar>\n  </span>\n\n<!--\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshChats($event)\">\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n-->\n  <!-- Loading animation-->\n  <div *ngIf=\"loadingChats\">\n    <ion-list *ngFor=\"let item of [1,2,3,4,5,6,7,8,9,10]\">\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-avatar>\n        <ion-label>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div *ngIf=\"search\">\n    <ion-row *ngFor=\"let user of resultSearchListings\" style=\"line-height: 64px;\"\n             (click)=\"getMessages(user); search=false\">\n      <img class=\"avatarImg\" src=\"{{user.avatar}}\" style=\"margin: 5px; margin-right: 15px;\">\n      {{user.name}}\n    </ion-row>\n  </div>\n\n  <div style=\"width: 100%;\" *ngIf=\"!loadingChats && chats && !search\">\n    <ion-list>\n      <ion-item *ngFor=\"let chat of chats.chats\" (click)=\"getMessages(chat.op)\" button>\n     <!-- <ion-item *ngFor=\"let key of getKeysOfObj(chats.ml)\" (click)=\"getMessages(chats.ml[key].op)\" button>-->\n        <ion-avatar slot=\"start\">\n          <img src=\"{{chat.op.avatar}}\">\n        </ion-avatar>\n        <ion-label>\n          <h2 [class]=\"'chatName ' +(chat.seen == '0' ? 'newText' : '')\">{{chat.op.name}}</h2>\n          <h3 [class]=\"'chatMsg ' +(chat.seen == '0' ? 'newText' : '')\">{{chat.message}}</h3>\n          <p>{{getGoodStringDate(chat.utime * 1000)}}</p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n\n    <!--\n\n                <ion-row [className]=\"'rowListType ' + isWhiteBackgroundBoxShadow()\" >\n                    <ion-col size=\"2\" style=\"padding: 0 !important; text-align: center; margin-top: 8px;\" *ngIf=\"chats.ml[key]\">\n                        <img  [class]=\"'avatarImg ' +(chats.ml[key].seen == '0' ? 'newImg' : '')\"  src=\"{{chats.ml[key].op.avatar}}\">\n                    </ion-col>\n                    <ion-col size=\"10\" style=\"padding: 15px; max-width: calc(100% - 60px)\"  *ngIf=\"chats.ml[key]\">\n                        <div style=\"text-align: left;\">\n                            <div [class]=\"'chatName ' +(chats.ml[key].seen == '0' ? 'newText' : '')\">{{chats.ml[key].op.name}}</div>\n                            <div [class]=\"'chatMsg ' +(chats.ml[key].seen == '0' ? 'newText' : '')\">{{chats.ml[key].message}}</div>\n                            <div class=\"chatTime\">\n                                {{getGoodStringDate(chats.ml[key].utime * 1000)}}\n                            </div>\n                        </div>\n                    </ion-col>\n                </ion-row>-->\n  </div>\n\n\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/MyListing/messagesPage/chatPage/chatPage.scss":
/*!***************************************************************!*\
  !*** ./src/app/MyListing/messagesPage/chatPage/chatPage.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".textAreaSend {\n  float: left;\n  width: calc(100% - 50px);\n  background: transparent !important;\n  border: solid 1px #dedede !important;\n  padding: 10px;\n  font-size: 16px;\n  color: #242429;\n  min-height: 35px;\n  line-height: 1.2;\n  height: 35px;\n  box-shadow: none !important;\n  transition: 0.2s ease;\n  border-radius: 15px;\n  font-size: 15px;\n}\n\n.textAreaSend[dir=rtl] {\n  float: right;\n}\n\n.avatarImg {\n  width: 30px;\n  height: 30px;\n  min-height: 30px;\n  min-width: 30px;\n  border-radius: 50%;\n  margin-right: 5px;\n}\n\n.btnSend {\n  background: #6c1cff;\n  color: #fff;\n  border: #ffdead;\n  border-radius: 50px;\n  height: 40px;\n  width: 40px;\n  float: right;\n  outline: none !important;\n  transition: 0.2s ease;\n  display: flex;\n  align-items: center;\n  font-size: 14pt;\n  padding-left: 9px;\n}\n\n.btnSend[dir=rtl] {\n  float: left;\n  padding-left: 0px;\n  padding-right: 12px;\n}\n\n.btnSend:disabled {\n  opacity: 0.4;\n}\n\n.msgMine {\n  float: right;\n  background: #6c1cff;\n  color: #fff;\n  border-radius: 10px 0 10px 10px;\n  word-break: break-word;\n  overflow: hidden;\n  margin: 0;\n  padding: 9px 15px;\n  font-size: 15px;\n  line-height: 22px !important;\n}\n\n.msgMine[dir=rtl] {\n  float: left;\n}\n\n.msgOther {\n  float: left;\n  background: rgba(189, 189, 189, 0.21);\n  color: #242429;\n  border-radius: 0 10px 10px 10px;\n  word-break: break-word;\n  overflow: hidden;\n  margin: 0;\n  padding: 9px 15px;\n  font-size: 15px;\n  line-height: 22px !important;\n}\n\n.msgOther[dir=rtl] {\n  float: right;\n}\n\n.msgDate {\n  font-size: 8px;\n  display: block;\n  margin-bottom: 5px;\n  color: #7e7e89;\n  text-align: right;\n}\n\n.msgDate[dir=rtl] {\n  text-align: left;\n}\n\n.msgMineOther {\n  text-align: left !important;\n}\n\n#msgContainer {\n  width: 100%;\n  padding: 15px;\n  padding-bottom: 35px;\n  margin-top: 115px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTXlMaXN0aW5nL21lc3NhZ2VzUGFnZS9jaGF0UGFnZS9DOlxcbGlzdFxcaW9uaWNcXGlvbmljLWFwcC9zcmNcXGFwcFxcTXlMaXN0aW5nXFxtZXNzYWdlc1BhZ2VcXGNoYXRQYWdlXFxjaGF0UGFnZS5zY3NzIiwic3JjL2FwcC9NeUxpc3RpbmcvbWVzc2FnZXNQYWdlL2NoYXRQYWdlL2NoYXRQYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FER0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURJQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDREY7O0FES0E7RUFDRSxZQUFBO0FDRkY7O0FES0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FDRkY7O0FES0E7RUFDRSxXQUFBO0FDRkY7O0FES0E7RUFDRSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FDRkY7O0FES0E7RUFDRSxZQUFBO0FDRkY7O0FES0E7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDRkY7O0FES0E7RUFDRSxnQkFBQTtBQ0ZGOztBREtBO0VBQ0UsMkJBQUE7QUNGRjs7QURLQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvTXlMaXN0aW5nL21lc3NhZ2VzUGFnZS9jaGF0UGFnZS9jaGF0UGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRBcmVhU2VuZHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2RlZGVkZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMjQyNDI5O1xuICBtaW4taGVpZ2h0OiAzNXB4O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi50ZXh0QXJlYVNlbmRbZGlyPVwicnRsXCJde1xuICBmbG9hdDogcmlnaHQ7XG59XG5cblxuLmF2YXRhckltZ3tcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWluLWhlaWdodDogMzBweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uYnRuU2VuZHtcbiAgYmFja2dyb3VuZDogIzZjMWNmZjtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogI2ZmZGVhZDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IC4ycyBlYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHQ7XG4gIHBhZGRpbmctbGVmdDogOXB4O1xufVxuXG5cbi5idG5TZW5kW2Rpcj1cInJ0bFwiXXtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuXG59XG5cbi5idG5TZW5kOmRpc2FibGVke1xuICBvcGFjaXR5OiAwLjQ7XG59XG5cbi5tc2dNaW5le1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQ6ICM2YzFjZmY7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDAgMTBweCAxMHB4O1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDlweCAxNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4IWltcG9ydGFudDtcbn1cblxuLm1zZ01pbmVbZGlyPVwicnRsXCJde1xuICBmbG9hdDogbGVmdDtcbn1cblxuLm1zZ090aGVye1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZDogcmdiYSgxODksIDE4OSwgMTg5LCAwLjIxKTtcbiAgY29sb3I6ICMyNDI0Mjk7XG4gIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDEwcHg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogOXB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDIycHghaW1wb3J0YW50O1xufVxuXG4ubXNnT3RoZXJbZGlyPVwicnRsXCJde1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5tc2dEYXRle1xuICBmb250LXNpemU6IDhweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6ICM3ZTdlODk7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubXNnRGF0ZVtkaXI9XCJydGxcIl17XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5tc2dNaW5lT3RoZXJ7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbn1cblxuI21zZ0NvbnRhaW5lcntcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAzNXB4O1xuICBtYXJnaW4tdG9wOiAxMTVweDtcbn1cbiIsIi50ZXh0QXJlYVNlbmQge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXI6IHNvbGlkIDFweCAjZGVkZWRlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMyNDI0Mjk7XG4gIG1pbi1oZWlnaHQ6IDM1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGhlaWdodDogMzVweDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnRleHRBcmVhU2VuZFtkaXI9cnRsXSB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmF2YXRhckltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG4gIG1pbi13aWR0aDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmJ0blNlbmQge1xuICBiYWNrZ3JvdW5kOiAjNmMxY2ZmO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAjZmZkZWFkO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHQ7XG4gIHBhZGRpbmctbGVmdDogOXB4O1xufVxuXG4uYnRuU2VuZFtkaXI9cnRsXSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgcGFkZGluZy1yaWdodDogMTJweDtcbn1cblxuLmJ0blNlbmQ6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjQ7XG59XG5cbi5tc2dNaW5lIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kOiAjNmMxY2ZmO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwIDEwcHggMTBweDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA5cHggMTVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjJweCAhaW1wb3J0YW50O1xufVxuXG4ubXNnTWluZVtkaXI9cnRsXSB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubXNnT3RoZXIge1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZDogcmdiYSgxODksIDE4OSwgMTg5LCAwLjIxKTtcbiAgY29sb3I6ICMyNDI0Mjk7XG4gIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDEwcHg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogOXB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDIycHggIWltcG9ydGFudDtcbn1cblxuLm1zZ090aGVyW2Rpcj1ydGxdIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubXNnRGF0ZSB7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjb2xvcjogIzdlN2U4OTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tc2dEYXRlW2Rpcj1ydGxdIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm1zZ01pbmVPdGhlciB7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbn1cblxuI21zZ0NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzVweDtcbiAgbWFyZ2luLXRvcDogMTE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/MyListing/messagesPage/chatPage/chatPage.ts":
/*!*************************************************************!*\
  !*** ./src/app/MyListing/messagesPage/chatPage/chatPage.ts ***!
  \*************************************************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/Service */ "./src/app/services/Service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_LocationService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/LocationService */ "./src/app/services/LocationService.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _GlobalFields__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../GlobalFields */ "./src/app/GlobalFields.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_MyListingService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/MyListingService */ "./src/app/services/MyListingService.ts");










let ChatPage = class ChatPage {
    constructor(service, mlservice, _sanitizer, translate, locationService, navController, router) {
        this.service = service;
        this.mlservice = mlservice;
        this._sanitizer = _sanitizer;
        this.translate = translate;
        this.locationService = locationService;
        this.navController = navController;
        this.router = router;
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_7__["GlobalFields"];
        this.msgToSend = '';
        this.loading = true;
        this.loadingMsg = false;
    }
    ionViewDidEnter() {
        if (this.GlobalFields.senderMsgSelected && this.GlobalFields.senderMsgSelected.id) {
            this.mlservice.getMsgsOfAChat(this.GlobalFields.senderMsgSelected.id).subscribe((data) => {
                this.GlobalFields.msgsSelected = data;
                this.loading = false;
                this.resize();
                // this.content.scrollToBottom();
                if (_GlobalFields__WEBPACK_IMPORTED_MODULE_7__["GlobalFields"].senderMsgSelected)
                    console.log('Mark as seen');
                this.mlservice.markAsSeenChat(_GlobalFields__WEBPACK_IMPORTED_MODULE_7__["GlobalFields"].senderMsgSelected.id).subscribe((data) => {
                });
                this.refresher = setInterval(() => {
                    this.refreshChat();
                }, 2000);
            }, e => {
                this.router.navigateByUrl('tabs/messages');
            });
        }
        else
            this.router.navigateByUrl('tabs/messages');
    }
    ionViewWillLeave() {
        // this.GlobalFields.msgsSelected = undefined;
        clearInterval(this.refresher);
    }
    getKeysOfObj(obj) {
        const res = Object.keys(obj);
        if (!res)
            return [];
        return res;
    }
    resize() {
        /*const input = document.getElementById('myInput');
        const container = document.getElementById('msgContainer');
        if (input && container) {
            let newHeight = input.scrollHeight > (window.innerHeight / 2) ? Math.round(window.innerHeight / 2) : input.scrollHeight;
            if (!this.msgToSend || this.msgToSend == "")
                newHeight = 35;
            //input.style.height = (newHeight) + 'px';
            container.style.marginBottom = (newHeight + 50) + 'px';
            container.scrollTop = container.scrollHeight;
        }
        this.content.scrollToBottom();
       */
    }
    getGoodStringDate(timestamp) {
        return new Date(timestamp).toLocaleString();
    }
    sendMsg() {
        const msg = this.msgToSend;
        this.msgToSend = undefined;
        this.loadingMsg = true;
        //this.content.scrollToBottom();
        this.content.scrollToTop();
        setTimeout(() => {
            this.resize();
            //this.content.scrollToBottom();
            this.content.scrollToTop();
        }, 100);
        if (msg) {
            this.mlservice.sendMsg(msg, _GlobalFields__WEBPACK_IMPORTED_MODULE_7__["GlobalFields"].senderMsgSelected.id).subscribe(() => {
                this.loadingMsg = false;
                this.refreshChat(true);
            }), err => {
                console.log(err);
                this.msgToSend = msg;
                this.loadingMsg = false;
            };
        }
    }
    refreshChat(scroll) {
        console.log('RefreshChat');
        if (_GlobalFields__WEBPACK_IMPORTED_MODULE_7__["GlobalFields"].senderMsgSelected)
            this.mlservice.getMsgsOfAChat(_GlobalFields__WEBPACK_IMPORTED_MODULE_7__["GlobalFields"].senderMsgSelected.id).subscribe((data) => {
                this.GlobalFields.msgsSelected = data;
                if (scroll) {
                    setTimeout(() => {
                        this.resize();
                        // this.content.scrollToBottom();
                    }, 500);
                }
            });
    }
};
ChatPage.ctorParameters = () => [
    { type: _services_Service__WEBPACK_IMPORTED_MODULE_2__["Service"] },
    { type: _services_MyListingService__WEBPACK_IMPORTED_MODULE_9__["MyListingService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _services_LocationService__WEBPACK_IMPORTED_MODULE_5__["LocationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollElement'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"])
], ChatPage.prototype, "content", void 0);
ChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'chatPage',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chatPage.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/MyListing/messagesPage/chatPage/chatPage.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./chatPage.scss */ "./src/app/MyListing/messagesPage/chatPage/chatPage.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_2__["Service"], _services_MyListingService__WEBPACK_IMPORTED_MODULE_9__["MyListingService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
        _services_LocationService__WEBPACK_IMPORTED_MODULE_5__["LocationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], ChatPage);



/***/ }),

/***/ "./src/app/MyListing/messagesPage/messagesPage.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/MyListing/messagesPage/messagesPage.module.ts ***!
  \***************************************************************/
/*! exports provided: MessagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function() { return MessagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _messagesPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messagesPage */ "./src/app/MyListing/messagesPage/messagesPage.ts");
/* harmony import */ var _chatPage_chatPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chatPage/chatPage */ "./src/app/MyListing/messagesPage/chatPage/chatPage.ts");
/* harmony import */ var _menuPage_loginComponent_loginComponent_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../menuPage/loginComponent/loginComponent.module */ "./src/app/menuPage/loginComponent/loginComponent.module.ts");










let MessagesPageModule = class MessagesPageModule {
};
MessagesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _messagesPage__WEBPACK_IMPORTED_MODULE_7__["MessagesPage"]
                },
                {
                    path: 'chatPage',
                    component: _chatPage_chatPage__WEBPACK_IMPORTED_MODULE_8__["ChatPage"]
                }
            ]),
            _menuPage_loginComponent_loginComponent_module__WEBPACK_IMPORTED_MODULE_9__["LoginComponentModule"]
        ],
        declarations: [_messagesPage__WEBPACK_IMPORTED_MODULE_7__["MessagesPage"], _chatPage_chatPage__WEBPACK_IMPORTED_MODULE_8__["ChatPage"]]
    })
], MessagesPageModule);



/***/ }),

/***/ "./src/app/MyListing/messagesPage/messagesPage.scss":
/*!**********************************************************!*\
  !*** ./src/app/MyListing/messagesPage/messagesPage.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".boxShadowList {\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);\n}\n\n.rowListType {\n  background: white;\n  margin-bottom: 10px;\n  border-radius: 5px;\n  padding: 0 5px 0 5px;\n}\n\n.avatarImg {\n  width: 54px;\n  height: 54px;\n  min-height: 54px;\n  min-width: 54px;\n  border-radius: 50%;\n}\n\n.newImg {\n  border: 2px solid #f24286;\n  padding: 2px;\n  width: 56px !important;\n  height: 56px !important;\n  min-height: 56px !important;\n  min-width: 56px !important;\n}\n\n.newText {\n  color: #242429 !important;\n  font-weight: 600 !important;\n}\n\n.chatName {\n  color: #242429;\n  font-weight: 600;\n  font-size: 11pt;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-transform: capitalize;\n  max-width: calc(100% - 20px);\n}\n\n.chatMsg {\n  font-size: 9pt;\n  line-height: 17px;\n  margin-top: 5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-transform: capitalize;\n  margin-bottom: 0;\n  color: #7e7e89;\n  max-width: calc(100% - 20px);\n}\n\n.chatTime {\n  position: absolute;\n  right: 0px;\n  text-align: right;\n  top: 0;\n  height: 100%;\n  padding: 9px 0px 15px 80px;\n  font-size: 9px;\n  color: #7e7e89;\n  display: grid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTXlMaXN0aW5nL21lc3NhZ2VzUGFnZS9DOlxcbGlzdFxcaW9uaWNcXGlvbmljLWFwcC9zcmNcXGFwcFxcTXlMaXN0aW5nXFxtZXNzYWdlc1BhZ2VcXG1lc3NhZ2VzUGFnZS5zY3NzIiwic3JjL2FwcC9NeUxpc3RpbmcvbWVzc2FnZXNQYWdlL21lc3NhZ2VzUGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUUsMENBQUE7QUNBRjs7QURJQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDREY7O0FESUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtBQ0RGOztBRElBO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUNERjs7QURJQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL015TGlzdGluZy9tZXNzYWdlc1BhZ2UvbWVzc2FnZXNQYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5ib3hTaGFkb3dMaXN0e1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwwLDAsLjEpO1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsMCwwLC4xKTtcbn1cblxuXG4ucm93TGlzdFR5cGV7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDAgNXB4IDAgNXB4O1xufVxuXG4uYXZhdGFySW1ne1xuICB3aWR0aDogNTRweDtcbiAgaGVpZ2h0OiA1NHB4O1xuICBtaW4taGVpZ2h0OiA1NHB4O1xuICBtaW4td2lkdGg6IDU0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLm5ld0ltZ3tcbiAgYm9yZGVyOiAycHggc29saWQgI2YyNDI4NjtcbiAgcGFkZGluZzogMnB4O1xuICB3aWR0aDogNTZweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDU2cHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogNTZweCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDU2cHggIWltcG9ydGFudDtcbn1cblxuLm5ld1RleHR7XG4gIGNvbG9yOiAjMjQyNDI5IWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCFpbXBvcnRhbnQ7XG59XG5cbi5jaGF0TmFtZXtcbiAgY29sb3I6ICMyNDI0Mjk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTFwdDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xufVxuXG4uY2hhdE1zZ3tcbiAgZm9udC1zaXplOiA5cHQ7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgY29sb3I6ICM3ZTdlODk7XG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG59XG5cbi5jaGF0VGltZXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDlweCAwcHggMTVweCA4MHB4O1xuICBmb250LXNpemU6IDlweDtcbiAgY29sb3I6ICM3ZTdlODk7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG4iLCIuYm94U2hhZG93TGlzdCB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5yb3dMaXN0VHlwZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDAgNXB4IDAgNXB4O1xufVxuXG4uYXZhdGFySW1nIHtcbiAgd2lkdGg6IDU0cHg7XG4gIGhlaWdodDogNTRweDtcbiAgbWluLWhlaWdodDogNTRweDtcbiAgbWluLXdpZHRoOiA1NHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5uZXdJbWcge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjI0Mjg2O1xuICBwYWRkaW5nOiAycHg7XG4gIHdpZHRoOiA1NnB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNTZweCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiA1NnB4ICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogNTZweCAhaW1wb3J0YW50O1xufVxuXG4ubmV3VGV4dCB7XG4gIGNvbG9yOiAjMjQyNDI5ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbn1cblxuLmNoYXROYW1lIHtcbiAgY29sb3I6ICMyNDI0Mjk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTFwdDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xufVxuXG4uY2hhdE1zZyB7XG4gIGZvbnQtc2l6ZTogOXB0O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGNvbG9yOiAjN2U3ZTg5O1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xufVxuXG4uY2hhdFRpbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogOXB4IDBweCAxNXB4IDgwcHg7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBjb2xvcjogIzdlN2U4OTtcbiAgZGlzcGxheTogZ3JpZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/MyListing/messagesPage/messagesPage.ts":
/*!********************************************************!*\
  !*** ./src/app/MyListing/messagesPage/messagesPage.ts ***!
  \********************************************************/
/*! exports provided: MessagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPage", function() { return MessagesPage; });
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
/* harmony import */ var _services_MyListingService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/MyListingService */ "./src/app/services/MyListingService.ts");










let MessagesPage = class MessagesPage {
    constructor(service, mlservice, _sanitizer, translate, locationService, navController) {
        this.service = service;
        this.mlservice = mlservice;
        this._sanitizer = _sanitizer;
        this.translate = translate;
        this.locationService = locationService;
        this.navController = navController;
        this.loadingChats = true;
        this.GlobalFields = _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"];
        this.search = false;
        this.waitSearch = false;
        this.resultSearchListings = [];
    }
    ngOnInit() {
        this.initMsg();
    }
    ionViewDidEnter() {
        this.GlobalFields.showTabs = true;
        if (this.GlobalFields.msgToOwner) {
            this.msgToOwner = this.GlobalFields.msgToOwner;
            if (_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].isLoggedIn)
                this.getMessages(this.msgToOwner);
        }
        this.GlobalFields.msgToOwner = undefined;
        this.GlobalFields.loadingHard = false;
        //this.GlobalFields.msgsSelected = undefined;
        console.log('ionViewDidEnter');
        if (this.GlobalFields.isLoggedIn) {
            this.refresher = setInterval(() => {
                this.getNewChatsInterval();
            }, 3000);
        }
        this.service.setWhiteBlackBackgroundStatusBar();
    }
    ionViewWillLeave() {
        clearInterval(this.refresher);
    }
    initMsg() {
        if (this.GlobalFields.isLoggedIn) {
            this.getChats();
            //this.service.getRecentViewedListing();
            if (this.msgToOwner)
                this.getMessages(this.msgToOwner);
        }
    }
    getChats() {
        this.loadingChats = true;
        this.mlservice.getChats().subscribe((data) => {
            this.chats = data;
            this.loadingChats = false;
        }, function (e) {
            this.service.refreshCookie();
        });
    }
    refreshChats(event) {
        this.loadingChats = true;
        this.mlservice.getChats().subscribe((data) => {
            this.chats = data;
            this.loadingChats = false;
            event.target.complete();
        });
    }
    getNewChatsInterval() {
        console.log('getNewChatsInterval');
        if (this.GlobalFields.isLoggedIn) {
            this.mlservice.getChats().subscribe((data) => {
                this.chats = data;
            });
        }
    }
    getMessages(user) {
        this.msgToOwner = undefined;
        if (user && user.id) {
            //this.GlobalFields.loadingSoft = true;
            this.GlobalFields.senderMsgSelected = user;
            this.GlobalFields.showTabs = false;
            this.navController.navigateForward('tabs/' + _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].site_details.themeEnabled + '/messages/chatPage');
        }
    }
    isWhiteBackgroundBoxShadow() {
        if (_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].isWhiteBackground())
            return '';
        else
            return ' boxShadowList';
    }
    getKeysOfObj(obj) {
        const res = Object.keys(obj);
        if (!res)
            return [];
        return res;
    }
    getBackground(image) {
        return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
    }
    getGoodStringDate(timestamp) {
        return new Date(timestamp).toLocaleString();
    }
    searchByName(ev) {
        this.searchString = ev.target.value;
    }
    doTheSearch(event) {
        console.log('Enter called');
        console.log(event);
        let doIt = false;
        if (event && event.key === 'Enter') // Do stuff}
            doIt = true;
        else if (!event)
            doIt = true;
        if (doIt) {
            this.resultSearchListings = [];
            setTimeout(() => {
                this.waitSearch = false;
                this.loadingChats = true;
                if (!this.waitSearch && this.searchString && this.searchString != '') {
                    this.mlservice.getMsgUsersByString(this.searchString)
                        .subscribe((data) => {
                        this.resultSearchListings = data;
                        this.loadingChats = false;
                    });
                    this.waitSearch = true;
                }
            }, 500);
        }
    }
};
MessagesPage.ctorParameters = () => [
    { type: _services_Service__WEBPACK_IMPORTED_MODULE_4__["Service"] },
    { type: _services_MyListingService__WEBPACK_IMPORTED_MODULE_9__["MyListingService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _services_LocationService__WEBPACK_IMPORTED_MODULE_8__["LocationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
MessagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'messagesPage',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./messagesPage.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/MyListing/messagesPage/messagesPage.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./messagesPage.scss */ "./src/app/MyListing/messagesPage/messagesPage.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_4__["Service"], _services_MyListingService__WEBPACK_IMPORTED_MODULE_9__["MyListingService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
        _services_LocationService__WEBPACK_IMPORTED_MODULE_8__["LocationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], MessagesPage);



/***/ })

}]);
//# sourceMappingURL=MyListing-messagesPage-messagesPage-module-es2015.js.map