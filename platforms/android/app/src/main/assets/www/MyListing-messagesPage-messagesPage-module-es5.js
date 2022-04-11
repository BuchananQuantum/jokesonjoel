function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["MyListing-messagesPage-messagesPage-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/MyListing/messagesPage/chatPage/chatPage.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/MyListing/messagesPage/chatPage/chatPage.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMyListingMessagesPageChatPageChatPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<ion-header translucent=\"true\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n    <ion-toolbar dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"tabs/messages\" (click)=\"GlobalFields.senderMsgSelected = undefined\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title *ngIf=\"GlobalFields.senderMsgSelected\" style=\"font-size: 9pt;\"><img class=\"avatarImg\"  src=\"{{GlobalFields.senderMsgSelected.avatar}}\"> {{GlobalFields.senderMsgSelected.name}}</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content *ngIf=\"loading\" style=\" position: fixed; background-color: rgb(0, 0, 0); z-index: 999999; top: 43px !important;\">\r\n  <div style=\"padding: 15px\">\r\n    <span *ngFor=\"let el of [1,2,3,4,5,6]\">\r\n       <div style=\"width: 100%; margin-bottom: 20px; height: 30px; position: relative;\">\r\n        <ion-skeleton-text style=\"width: 40%; position: absolute; left: 0\" animated></ion-skeleton-text>\r\n      </div>\r\n      <div style=\"width: 100%; margin-bottom: 20px; height: 30px; position: relative;\">\r\n        <ion-skeleton-text style=\"width: 40%; position: absolute; right: 0\" animated></ion-skeleton-text>\r\n      </div>\r\n    </span>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<ion-content #scrollElement style=\"margin-top: 20px; transform: rotate(180deg);\"  *ngIf=\"GlobalFields.msgsSelected\" class=\"cards-bg social-cards\" [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\"  dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n\r\n    <div id=\"msgContainer\" style=\"transform: rotate(180deg);\" *ngIf=\"GlobalFields.msgsSelected && GlobalFields.msgsSelected.ml && GlobalFields.senderMsgSelected\" >\r\n\r\n        <ion-row *ngFor=\"let key of getKeysOfObj(GlobalFields.msgsSelected.ml)\"   dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n            <ion-col size=\"12\" style=\"padding: 15px; max-width: calc(100% - 60px)\"  *ngIf=\"GlobalFields.msgsSelected.ml[key]\">\r\n\r\n                <span class=\"msgDate\" [class.msgMineOther]=\"GlobalFields.msgsSelected.ml[key].sender == GlobalFields.senderMsgSelected.id\"   dir=\"{{GlobalFields.getLanguageLayout()}}\">{{getGoodStringDate(GlobalFields.msgsSelected.ml[key].utime * 1000)}}</span>\r\n                <p class=\"msgMine\" *ngIf=\"GlobalFields.msgsSelected.ml[key].sender != GlobalFields.senderMsgSelected.id\"  [ngStyle]=\"GlobalFields.getPrimaryColorBackgroundJson()\"   dir=\"{{GlobalFields.getLanguageLayout()}}\">{{GlobalFields.msgsSelected.ml[key].message}}</p>\r\n                <p class=\"msgOther\" *ngIf=\"GlobalFields.msgsSelected.ml[key].sender == GlobalFields.senderMsgSelected.id\"   dir=\"{{GlobalFields.getLanguageLayout()}}\">{{GlobalFields.msgsSelected.ml[key].message}}</p>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <p class=\"msgMine\" *ngIf=\"loadingMsg\"  [ngStyle]=\"GlobalFields.getPrimaryColorBackgroundJson()\"   dir=\"{{GlobalFields.getLanguageLayout()}}\"><i class=\"fas fa-spinner fa-spin\"></i></p>\r\n\r\n    </div>\r\n\r\n\r\n  <div style=\"transform: rotate(180deg); position: fixed; top: -1px; padding: 10px; padding-bottom:20px; width: 100%; background-color: white\">\r\n        <textarea id=\"myInput\" #myInput\r\n                  class=\"textAreaSend\"\r\n                  (keyup)=\"resize()\"\r\n                  placeholder=\"{{'YOUR_MESSAGE' | translate}}\"\r\n                  [(ngModel)]=\"msgToSend\"\r\n                  dir=\"{{GlobalFields.getLanguageLayout()}}\"\r\n        ></textarea>\r\n    <button class=\"btnSend\" [ngStyle]=\"GlobalFields.getPrimaryColorBackgroundJson()\" (click)=\"sendMsg()\" dir=\"{{GlobalFields.getLanguageLayout()}}\"><i class=\"far fa-paper-plane\"></i></button>\r\n  </div>\r\n\r\n  <!--<<div style=\"transform: rotate(180deg); position: fixed; box-shadow: 0 -1px 2px rgba(0,0,0,.1); top: -1px; padding: 10px; padding-bottom:20px; width: 100%; background-color: white\">\r\n     <!-row  dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n         <ion-col size=\"10\">\r\n             <ion-textarea style=\"border: solid 1px #e3e3e3; padding: 5px; border-radius: 5px;\"\r\n                     id=\"myInput\" #myInput\r\n                     [autoGrow]=\"true\"\r\n                     [autofocus]=\"true\"\r\n                     placeholder=\"{{'YOUR_MESSAGE' | translate}}\"\r\n                     [(ngModel)]=\"msgToSend\"\r\n                     dir=\"{{GlobalFields.getLanguageLayout()}}\"\r\n             >\r\n             </ion-textarea>\r\n         </ion-col>\r\n         <ion-col size=\"2\">\r\n             <button class=\"btnSend\" [disabled]=\"!this.msgToSend\" [ngStyle]=\"GlobalFields.getPrimaryColorBackgroundJson()\" (click)=\"sendMsg()\" dir=\"{{GlobalFields.getLanguageLayout()}}\"><i class=\"far fa-paper-plane\"></i></button>\r\n         </ion-col>\r\n     </ion-row>\r\n\r\n    </div>-->\r\n</ion-content>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/MyListing/messagesPage/messagesPage.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/MyListing/messagesPage/messagesPage.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMyListingMessagesPageMessagesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent=\"true\" mode=\"{{GlobalFields.mode}}\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n  <ion-toolbar>\r\n    <!-- If Side menu is used-->\r\n    <ion-buttons *ngIf=\"GlobalFields.site_details.navigationType==2\" slot=\"start\">\r\n      <ion-menu-button style=\"color: #3b3c3c\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>{{'MESSAGES' | translate}}</ion-title>\r\n    <ion-buttons *ngIf=\"GlobalFields.isLoggedIn\" style=\"padding-right: 10px;\" slot=\"end\">\r\n      <button *ngIf=\"!search\" class=\"btn-search-header\" (click)=\"search=true\">\r\n        <i class=\"fas fa-edit\"></i>\r\n      </button>\r\n      <button *ngIf=\"search\" class=\"btn-search-header\" style=\"padding: 8px 10px; color: red\" (click)=\"search=false; resultSearchListings=undefined\">\r\n        <i class=\"fas fa-times\"></i>\r\n      </button>    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<!-- Login -->\r\n<ion-content *ngIf=\"!GlobalFields.isLoggedIn\" class=\"cards-bg social-cards\" style=\"margin-top: 20px; padding: 15px\"\r\n             [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n  <!-- [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\"  -->\r\n\r\n  <ion-header collapse=\"condense\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n    <ion-toolbar style=\"padding: 15px\">\r\n      <ion-title size=\"large\">{{'MESSAGES' | translate}}</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <div class=\"pageSection\" style=\"margin: 15px; margin-top: 20px;\">\r\n    <loginComponent (loginComplete)=\"initMsg()\"></loginComponent>\r\n  </div>\r\n</ion-content>\r\n\r\n\r\n<!-- Msg list-->\r\n<ion-content *ngIf=\"GlobalFields.isLoggedIn\" class=\"cards-bg social-cards\" style=\"margin-top: 10px;\"\r\n             [ngStyle]=\"GlobalFields.getBodyColorBackgroundJson()\" dir=\"{{GlobalFields.getLanguageLayout()}}\">\r\n\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar style=\"padding: 15px\">\r\n      <ion-title size=\"large\">{{'MESSAGES' | translate}}</ion-title>\r\n    </ion-toolbar>\r\n    <ion-toolbar *ngIf=\"search\">\r\n      <ion-searchbar #searchInput placeholder=\"{{'START_A_NEW_CHAT' | translate}}\" animated showCancelButton=\"focus\"\r\n                     (ionInput)=\"searchByName($event);\" (ionClear)=\"resultSearchListings=[]; search=false\"\r\n                     (keyup.enter)=\"doTheSearch(); search=true\"\r\n                     (keypress)=\"doTheSearch($event); search=true\"></ion-searchbar>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <!-- Only for android-->\r\n  <span class=\"hide-ios\" *ngIf=\"search\">\r\n        <ion-searchbar #searchInput animated showCancelButton=\"focus\" (ionInput)=\"searchByName($event);\"\r\n                       (ionClear)=\"resultSearchListings=[]; search=false\" (keyup.enter)=\"doTheSearch(); search=true\"\r\n                       (keypress)=\"doTheSearch($event); search=true\"></ion-searchbar>\r\n  </span>\r\n\r\n<!--\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refreshChats($event)\">\r\n    <ion-refresher-content>\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n-->\r\n  <!-- Loading animation-->\r\n  <div *ngIf=\"loadingChats\">\r\n    <ion-list *ngFor=\"let item of [1,2,3,4,5,6,7,8,9,10]\">\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n\r\n  <div *ngIf=\"search\">\r\n    <ion-row *ngFor=\"let user of resultSearchListings\" style=\"line-height: 64px;\"\r\n             (click)=\"getMessages(user); search=false\">\r\n      <img class=\"avatarImg\" src=\"{{user.avatar}}\" style=\"margin: 5px; margin-right: 15px;\">\r\n      {{user.name}}\r\n    </ion-row>\r\n  </div>\r\n\r\n  <div style=\"width: 100%;\" *ngIf=\"!loadingChats && chats && !search\">\r\n    <ion-list>\r\n      <ion-item *ngFor=\"let chat of chats.chats\" (click)=\"getMessages(chat.op)\" button>\r\n     <!-- <ion-item *ngFor=\"let key of getKeysOfObj(chats.ml)\" (click)=\"getMessages(chats.ml[key].op)\" button>-->\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"{{chat.op.avatar}}\">\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2 [class]=\"'chatName ' +(chat.seen == '0' ? 'newText' : '')\">{{chat.op.name}}</h2>\r\n          <h3 [class]=\"'chatMsg ' +(chat.seen == '0' ? 'newText' : '')\">{{chat.message}}</h3>\r\n          <p>{{getGoodStringDate(chat.utime * 1000)}}</p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n\r\n    <!--\r\n\r\n                <ion-row [className]=\"'rowListType ' + isWhiteBackgroundBoxShadow()\" >\r\n                    <ion-col size=\"2\" style=\"padding: 0 !important; text-align: center; margin-top: 8px;\" *ngIf=\"chats.ml[key]\">\r\n                        <img  [class]=\"'avatarImg ' +(chats.ml[key].seen == '0' ? 'newImg' : '')\"  src=\"{{chats.ml[key].op.avatar}}\">\r\n                    </ion-col>\r\n                    <ion-col size=\"10\" style=\"padding: 15px; max-width: calc(100% - 60px)\"  *ngIf=\"chats.ml[key]\">\r\n                        <div style=\"text-align: left;\">\r\n                            <div [class]=\"'chatName ' +(chats.ml[key].seen == '0' ? 'newText' : '')\">{{chats.ml[key].op.name}}</div>\r\n                            <div [class]=\"'chatMsg ' +(chats.ml[key].seen == '0' ? 'newText' : '')\">{{chats.ml[key].message}}</div>\r\n                            <div class=\"chatTime\">\r\n                                {{getGoodStringDate(chats.ml[key].utime * 1000)}}\r\n                            </div>\r\n                        </div>\r\n                    </ion-col>\r\n                </ion-row>-->\r\n  </div>\r\n\r\n\r\n</ion-content>\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/MyListing/messagesPage/chatPage/chatPage.scss":
  /*!***************************************************************!*\
    !*** ./src/app/MyListing/messagesPage/chatPage/chatPage.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMyListingMessagesPageChatPageChatPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".textAreaSend {\n  float: left;\n  width: calc(100% - 50px);\n  background: transparent !important;\n  border: solid 1px #dedede !important;\n  padding: 10px;\n  font-size: 16px;\n  color: #242429;\n  min-height: 35px;\n  line-height: 1.2;\n  height: 35px;\n  box-shadow: none !important;\n  transition: 0.2s ease;\n  border-radius: 15px;\n  font-size: 15px;\n}\n\n.textAreaSend[dir=rtl] {\n  float: right;\n}\n\n.avatarImg {\n  width: 30px;\n  height: 30px;\n  min-height: 30px;\n  min-width: 30px;\n  border-radius: 50%;\n  margin-right: 5px;\n}\n\n.btnSend {\n  background: #6c1cff;\n  color: #fff;\n  border: #ffdead;\n  border-radius: 50px;\n  height: 40px;\n  width: 40px;\n  float: right;\n  outline: none !important;\n  transition: 0.2s ease;\n  display: flex;\n  align-items: center;\n  font-size: 14pt;\n  padding-left: 9px;\n}\n\n.btnSend[dir=rtl] {\n  float: left;\n  padding-left: 0px;\n  padding-right: 12px;\n}\n\n.btnSend:disabled {\n  opacity: 0.4;\n}\n\n.msgMine {\n  float: right;\n  background: #6c1cff;\n  color: #fff;\n  border-radius: 10px 0 10px 10px;\n  word-break: break-word;\n  overflow: hidden;\n  margin: 0;\n  padding: 9px 15px;\n  font-size: 15px;\n  line-height: 22px !important;\n}\n\n.msgMine[dir=rtl] {\n  float: left;\n}\n\n.msgOther {\n  float: left;\n  background: rgba(189, 189, 189, 0.21);\n  color: #242429;\n  border-radius: 0 10px 10px 10px;\n  word-break: break-word;\n  overflow: hidden;\n  margin: 0;\n  padding: 9px 15px;\n  font-size: 15px;\n  line-height: 22px !important;\n}\n\n.msgOther[dir=rtl] {\n  float: right;\n}\n\n.msgDate {\n  font-size: 8px;\n  display: block;\n  margin-bottom: 5px;\n  color: #7e7e89;\n  text-align: right;\n}\n\n.msgDate[dir=rtl] {\n  text-align: left;\n}\n\n.msgMineOther {\n  text-align: left !important;\n}\n\n#msgContainer {\n  width: 100%;\n  padding: 15px;\n  padding-bottom: 35px;\n  margin-top: 115px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTXlMaXN0aW5nL21lc3NhZ2VzUGFnZS9jaGF0UGFnZS9DOlxcam9rZXNvbmpvZWxcXGpva2Vzb25qb2VsL3NyY1xcYXBwXFxNeUxpc3RpbmdcXG1lc3NhZ2VzUGFnZVxcY2hhdFBhZ2VcXGNoYXRQYWdlLnNjc3MiLCJzcmMvYXBwL015TGlzdGluZy9tZXNzYWdlc1BhZ2UvY2hhdFBhZ2UvY2hhdFBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0FGOztBRElBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURLQTtFQUNFLFlBQUE7QUNGRjs7QURLQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUNGRjs7QURLQTtFQUNFLFdBQUE7QUNGRjs7QURLQTtFQUNFLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUNGRjs7QURLQTtFQUNFLFlBQUE7QUNGRjs7QURLQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURLQTtFQUNFLGdCQUFBO0FDRkY7O0FES0E7RUFDRSwyQkFBQTtBQ0ZGOztBREtBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9NeUxpc3RpbmcvbWVzc2FnZXNQYWdlL2NoYXRQYWdlL2NoYXRQYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dEFyZWFTZW5ke1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICNkZWRlZGUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzI0MjQyOTtcclxuICBtaW4taGVpZ2h0OiAzNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi50ZXh0QXJlYVNlbmRbZGlyPVwicnRsXCJde1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuXHJcbi5hdmF0YXJJbWd7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgbWluLXdpZHRoOiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmJ0blNlbmR7XHJcbiAgYmFja2dyb3VuZDogIzZjMWNmZjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXI6ICNmZmRlYWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiAuMnMgZWFzZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB0O1xyXG4gIHBhZGRpbmctbGVmdDogOXB4O1xyXG59XHJcblxyXG5cclxuLmJ0blNlbmRbZGlyPVwicnRsXCJde1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcblxyXG59XHJcblxyXG4uYnRuU2VuZDpkaXNhYmxlZHtcclxuICBvcGFjaXR5OiAwLjQ7XHJcbn1cclxuXHJcbi5tc2dNaW5le1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBiYWNrZ3JvdW5kOiAjNmMxY2ZmO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMCAxMHB4IDEwcHg7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiA5cHggMTVweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXNnTWluZVtkaXI9XCJydGxcIl17XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5tc2dPdGhlcntcclxuICBmbG9hdDogbGVmdDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDE4OSwgMTg5LCAxODksIDAuMjEpO1xyXG4gIGNvbG9yOiAjMjQyNDI5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDEwcHg7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiA5cHggMTVweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXNnT3RoZXJbZGlyPVwicnRsXCJde1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLm1zZ0RhdGV7XHJcbiAgZm9udC1zaXplOiA4cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGNvbG9yOiAjN2U3ZTg5O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ubXNnRGF0ZVtkaXI9XCJydGxcIl17XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLm1zZ01pbmVPdGhlcntcclxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNtc2dDb250YWluZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzVweDtcclxuICBtYXJnaW4tdG9wOiAxMTVweDtcclxufVxyXG4iLCIudGV4dEFyZWFTZW5kIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2RlZGVkZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMjQyNDI5O1xuICBtaW4taGVpZ2h0OiAzNXB4O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi50ZXh0QXJlYVNlbmRbZGlyPXJ0bF0ge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5hdmF0YXJJbWcge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5idG5TZW5kIHtcbiAgYmFja2dyb3VuZDogIzZjMWNmZjtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogI2ZmZGVhZDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB0O1xuICBwYWRkaW5nLWxlZnQ6IDlweDtcbn1cblxuLmJ0blNlbmRbZGlyPXJ0bF0ge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XG59XG5cbi5idG5TZW5kOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC40O1xufVxuXG4ubXNnTWluZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZDogIzZjMWNmZjtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMCAxMHB4IDEwcHg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogOXB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDIycHggIWltcG9ydGFudDtcbn1cblxuLm1zZ01pbmVbZGlyPXJ0bF0ge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLm1zZ090aGVyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTg5LCAxODksIDE4OSwgMC4yMSk7XG4gIGNvbG9yOiAjMjQyNDI5O1xuICBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAxMHB4O1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDlweCAxNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tc2dPdGhlcltkaXI9cnRsXSB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLm1zZ0RhdGUge1xuICBmb250LXNpemU6IDhweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6ICM3ZTdlODk7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubXNnRGF0ZVtkaXI9cnRsXSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5tc2dNaW5lT3RoZXIge1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbiNtc2dDb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDM1cHg7XG4gIG1hcmdpbi10b3A6IDExNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/MyListing/messagesPage/chatPage/chatPage.ts":
  /*!*************************************************************!*\
    !*** ./src/app/MyListing/messagesPage/chatPage/chatPage.ts ***!
    \*************************************************************/

  /*! exports provided: ChatPage */

  /***/
  function srcAppMyListingMessagesPageChatPageChatPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatPage", function () {
      return ChatPage;
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


    var _services_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/Service */
    "./src/app/services/Service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_LocationService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/LocationService */
    "./src/app/services/LocationService.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _GlobalFields__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../GlobalFields */
    "./src/app/GlobalFields.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_MyListingService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../services/MyListingService */
    "./src/app/services/MyListingService.ts");

    var ChatPage = /*#__PURE__*/function () {
      function ChatPage(service, mlservice, _sanitizer, translate, locationService, navController, router) {
        _classCallCheck(this, ChatPage);

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

      _createClass(ChatPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

          if (this.GlobalFields.senderMsgSelected && this.GlobalFields.senderMsgSelected.id) {
            this.mlservice.getMsgsOfAChat(this.GlobalFields.senderMsgSelected.id).subscribe(function (data) {
              _this.GlobalFields.msgsSelected = data;
              _this.loading = false;

              _this.resize(); // this.content.scrollToBottom();


              if (_GlobalFields__WEBPACK_IMPORTED_MODULE_7__["GlobalFields"].senderMsgSelected) console.log('Mark as seen');

              _this.mlservice.markAsSeenChat(_GlobalFields__WEBPACK_IMPORTED_MODULE_7__["GlobalFields"].senderMsgSelected.id).subscribe(function (data) {});

              _this.refresher = setInterval(function () {
                _this.refreshChat();
              }, 2000);
            }, function (e) {
              _this.router.navigateByUrl('tabs/messages');
            });
          } else this.router.navigateByUrl('tabs/messages');
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          // this.GlobalFields.msgsSelected = undefined;
          clearInterval(this.refresher);
        }
      }, {
        key: "getKeysOfObj",
        value: function getKeysOfObj(obj) {
          var res = Object.keys(obj);
          if (!res) return [];
          return res;
        }
      }, {
        key: "resize",
        value: function resize() {
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
      }, {
        key: "getGoodStringDate",
        value: function getGoodStringDate(timestamp) {
          return new Date(timestamp).toLocaleString();
        }
      }, {
        key: "sendMsg",
        value: function sendMsg() {
          var _this2 = this;

          var msg = this.msgToSend;
          this.msgToSend = undefined;
          this.loadingMsg = true; //this.content.scrollToBottom();

          this.content.scrollToTop();
          setTimeout(function () {
            _this2.resize(); //this.content.scrollToBottom();


            _this2.content.scrollToTop();
          }, 100);

          if (msg) {
            this.mlservice.sendMsg(msg, _GlobalFields__WEBPACK_IMPORTED_MODULE_7__["GlobalFields"].senderMsgSelected.id).subscribe(function () {
              _this2.loadingMsg = false;

              _this2.refreshChat(true);
            }), function (err) {
              console.log(err);
              _this2.msgToSend = msg;
              _this2.loadingMsg = false;
            };
          }
        }
      }, {
        key: "refreshChat",
        value: function refreshChat(scroll) {
          var _this3 = this;

          console.log('RefreshChat');
          if (_GlobalFields__WEBPACK_IMPORTED_MODULE_7__["GlobalFields"].senderMsgSelected) this.mlservice.getMsgsOfAChat(_GlobalFields__WEBPACK_IMPORTED_MODULE_7__["GlobalFields"].senderMsgSelected.id).subscribe(function (data) {
            _this3.GlobalFields.msgsSelected = data;

            if (scroll) {
              setTimeout(function () {
                _this3.resize(); // this.content.scrollToBottom();

              }, 500);
            }
          });
        }
      }]);

      return ChatPage;
    }();

    ChatPage.ctorParameters = function () {
      return [{
        type: _services_Service__WEBPACK_IMPORTED_MODULE_2__["Service"]
      }, {
        type: _services_MyListingService__WEBPACK_IMPORTED_MODULE_9__["MyListingService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }, {
        type: _services_LocationService__WEBPACK_IMPORTED_MODULE_5__["LocationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollElement'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"])], ChatPage.prototype, "content", void 0);
    ChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'chatPage',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./chatPage.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/MyListing/messagesPage/chatPage/chatPage.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./chatPage.scss */
      "./src/app/MyListing/messagesPage/chatPage/chatPage.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_2__["Service"], _services_MyListingService__WEBPACK_IMPORTED_MODULE_9__["MyListingService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _services_LocationService__WEBPACK_IMPORTED_MODULE_5__["LocationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])], ChatPage);
    /***/
  },

  /***/
  "./src/app/MyListing/messagesPage/messagesPage.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/MyListing/messagesPage/messagesPage.module.ts ***!
    \***************************************************************/

  /*! exports provided: MessagesPageModule */

  /***/
  function srcAppMyListingMessagesPageMessagesPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function () {
      return MessagesPageModule;
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


    var _messagesPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./messagesPage */
    "./src/app/MyListing/messagesPage/messagesPage.ts");
    /* harmony import */


    var _chatPage_chatPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./chatPage/chatPage */
    "./src/app/MyListing/messagesPage/chatPage/chatPage.ts");
    /* harmony import */


    var _menuPage_loginComponent_loginComponent_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../menuPage/loginComponent/loginComponent.module */
    "./src/app/menuPage/loginComponent/loginComponent.module.ts");

    var MessagesPageModule = function MessagesPageModule() {
      _classCallCheck(this, MessagesPageModule);
    };

    MessagesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
        path: '',
        component: _messagesPage__WEBPACK_IMPORTED_MODULE_7__["MessagesPage"]
      }, {
        path: 'chatPage',
        component: _chatPage_chatPage__WEBPACK_IMPORTED_MODULE_8__["ChatPage"]
      }]), _menuPage_loginComponent_loginComponent_module__WEBPACK_IMPORTED_MODULE_9__["LoginComponentModule"]],
      declarations: [_messagesPage__WEBPACK_IMPORTED_MODULE_7__["MessagesPage"], _chatPage_chatPage__WEBPACK_IMPORTED_MODULE_8__["ChatPage"]]
    })], MessagesPageModule);
    /***/
  },

  /***/
  "./src/app/MyListing/messagesPage/messagesPage.scss":
  /*!**********************************************************!*\
    !*** ./src/app/MyListing/messagesPage/messagesPage.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMyListingMessagesPageMessagesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".boxShadowList {\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);\n}\n\n.rowListType {\n  background: white;\n  margin-bottom: 10px;\n  border-radius: 5px;\n  padding: 0 5px 0 5px;\n}\n\n.avatarImg {\n  width: 54px;\n  height: 54px;\n  min-height: 54px;\n  min-width: 54px;\n  border-radius: 50%;\n}\n\n.newImg {\n  border: 2px solid #f24286;\n  padding: 2px;\n  width: 56px !important;\n  height: 56px !important;\n  min-height: 56px !important;\n  min-width: 56px !important;\n}\n\n.newText {\n  color: #242429 !important;\n  font-weight: 600 !important;\n}\n\n.chatName {\n  color: #242429;\n  font-weight: 600;\n  font-size: 11pt;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-transform: capitalize;\n  max-width: calc(100% - 20px);\n}\n\n.chatMsg {\n  font-size: 9pt;\n  line-height: 17px;\n  margin-top: 5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-transform: capitalize;\n  margin-bottom: 0;\n  color: #7e7e89;\n  max-width: calc(100% - 20px);\n}\n\n.chatTime {\n  position: absolute;\n  right: 0px;\n  text-align: right;\n  top: 0;\n  height: 100%;\n  padding: 9px 0px 15px 80px;\n  font-size: 9px;\n  color: #7e7e89;\n  display: grid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTXlMaXN0aW5nL21lc3NhZ2VzUGFnZS9DOlxcam9rZXNvbmpvZWxcXGpva2Vzb25qb2VsL3NyY1xcYXBwXFxNeUxpc3RpbmdcXG1lc3NhZ2VzUGFnZVxcbWVzc2FnZXNQYWdlLnNjc3MiLCJzcmMvYXBwL015TGlzdGluZy9tZXNzYWdlc1BhZ2UvbWVzc2FnZXNQYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFRSwwQ0FBQTtBQ0FGOztBRElBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNERjs7QURJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURJQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0FDREY7O0FESUE7RUFDRSx5QkFBQTtFQUNBLDJCQUFBO0FDREY7O0FESUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvTXlMaXN0aW5nL21lc3NhZ2VzUGFnZS9tZXNzYWdlc1BhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYm94U2hhZG93TGlzdHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwwLDAsLjEpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwwLDAsLjEpO1xyXG59XHJcblxyXG5cclxuLnJvd0xpc3RUeXBle1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDAgNXB4IDAgNXB4O1xyXG59XHJcblxyXG4uYXZhdGFySW1ne1xyXG4gIHdpZHRoOiA1NHB4O1xyXG4gIGhlaWdodDogNTRweDtcclxuICBtaW4taGVpZ2h0OiA1NHB4O1xyXG4gIG1pbi13aWR0aDogNTRweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5uZXdJbWd7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2YyNDI4NjtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgd2lkdGg6IDU2cHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDU2cHggIWltcG9ydGFudDtcclxuICBtaW4taGVpZ2h0OiA1NnB4ICFpbXBvcnRhbnQ7XHJcbiAgbWluLXdpZHRoOiA1NnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uZXdUZXh0e1xyXG4gIGNvbG9yOiAjMjQyNDI5IWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNjAwIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNoYXROYW1le1xyXG4gIGNvbG9yOiAjMjQyNDI5O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxMXB0O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG59XHJcblxyXG4uY2hhdE1zZ3tcclxuICBmb250LXNpemU6IDlwdDtcclxuICBsaW5lLWhlaWdodDogMTdweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgY29sb3I6ICM3ZTdlODk7XHJcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxufVxyXG5cclxuLmNoYXRUaW1le1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMHB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogOXB4IDBweCAxNXB4IDgwcHg7XHJcbiAgZm9udC1zaXplOiA5cHg7XHJcbiAgY29sb3I6ICM3ZTdlODk7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxufVxyXG4iLCIuYm94U2hhZG93TGlzdCB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5yb3dMaXN0VHlwZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDAgNXB4IDAgNXB4O1xufVxuXG4uYXZhdGFySW1nIHtcbiAgd2lkdGg6IDU0cHg7XG4gIGhlaWdodDogNTRweDtcbiAgbWluLWhlaWdodDogNTRweDtcbiAgbWluLXdpZHRoOiA1NHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5uZXdJbWcge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjI0Mjg2O1xuICBwYWRkaW5nOiAycHg7XG4gIHdpZHRoOiA1NnB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNTZweCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiA1NnB4ICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogNTZweCAhaW1wb3J0YW50O1xufVxuXG4ubmV3VGV4dCB7XG4gIGNvbG9yOiAjMjQyNDI5ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbn1cblxuLmNoYXROYW1lIHtcbiAgY29sb3I6ICMyNDI0Mjk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTFwdDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xufVxuXG4uY2hhdE1zZyB7XG4gIGZvbnQtc2l6ZTogOXB0O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGNvbG9yOiAjN2U3ZTg5O1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xufVxuXG4uY2hhdFRpbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogOXB4IDBweCAxNXB4IDgwcHg7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBjb2xvcjogIzdlN2U4OTtcbiAgZGlzcGxheTogZ3JpZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/MyListing/messagesPage/messagesPage.ts":
  /*!********************************************************!*\
    !*** ./src/app/MyListing/messagesPage/messagesPage.ts ***!
    \********************************************************/

  /*! exports provided: MessagesPage */

  /***/
  function srcAppMyListingMessagesPageMessagesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesPage", function () {
      return MessagesPage;
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


    var _services_Service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/Service */
    "./src/app/services/Service.ts");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _services_LocationService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/LocationService */
    "./src/app/services/LocationService.ts");
    /* harmony import */


    var _services_MyListingService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../services/MyListingService */
    "./src/app/services/MyListingService.ts");

    var MessagesPage = /*#__PURE__*/function () {
      function MessagesPage(service, mlservice, _sanitizer, translate, locationService, navController) {
        _classCallCheck(this, MessagesPage);

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

      _createClass(MessagesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initMsg();
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this4 = this;

          this.GlobalFields.showTabs = true;

          if (this.GlobalFields.msgToOwner) {
            this.msgToOwner = this.GlobalFields.msgToOwner;
            if (_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].isLoggedIn) this.getMessages(this.msgToOwner);
          }

          this.GlobalFields.msgToOwner = undefined;
          this.GlobalFields.loadingHard = false; //this.GlobalFields.msgsSelected = undefined;

          console.log('ionViewDidEnter');

          if (this.GlobalFields.isLoggedIn) {
            this.refresher = setInterval(function () {
              _this4.getNewChatsInterval();
            }, 3000);
          }

          this.service.setWhiteBlackBackgroundStatusBar();
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          clearInterval(this.refresher);
        }
      }, {
        key: "initMsg",
        value: function initMsg() {
          if (this.GlobalFields.isLoggedIn) {
            this.getChats(); //this.service.getRecentViewedListing();

            if (this.msgToOwner) this.getMessages(this.msgToOwner);
          }
        }
      }, {
        key: "getChats",
        value: function getChats() {
          var _this5 = this;

          this.loadingChats = true;
          this.mlservice.getChats().subscribe(function (data) {
            _this5.chats = data;
            _this5.loadingChats = false;
          }, function (e) {
            this.service.refreshCookie();
          });
        }
      }, {
        key: "refreshChats",
        value: function refreshChats(event) {
          var _this6 = this;

          this.loadingChats = true;
          this.mlservice.getChats().subscribe(function (data) {
            _this6.chats = data;
            _this6.loadingChats = false;
            event.target.complete();
          });
        }
      }, {
        key: "getNewChatsInterval",
        value: function getNewChatsInterval() {
          var _this7 = this;

          console.log('getNewChatsInterval');

          if (this.GlobalFields.isLoggedIn) {
            this.mlservice.getChats().subscribe(function (data) {
              _this7.chats = data;
            });
          }
        }
      }, {
        key: "getMessages",
        value: function getMessages(user) {
          this.msgToOwner = undefined;

          if (user && user.id) {
            //this.GlobalFields.loadingSoft = true;
            this.GlobalFields.senderMsgSelected = user;
            this.GlobalFields.showTabs = false;
            this.navController.navigateForward('tabs/' + _GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].site_details.themeEnabled + '/messages/chatPage');
          }
        }
      }, {
        key: "isWhiteBackgroundBoxShadow",
        value: function isWhiteBackgroundBoxShadow() {
          if (_GlobalFields__WEBPACK_IMPORTED_MODULE_3__["GlobalFields"].isWhiteBackground()) return '';else return ' boxShadowList';
        }
      }, {
        key: "getKeysOfObj",
        value: function getKeysOfObj(obj) {
          var res = Object.keys(obj);
          if (!res) return [];
          return res;
        }
      }, {
        key: "getBackground",
        value: function getBackground(image) {
          return this._sanitizer.bypassSecurityTrustStyle("url(".concat(image, ")"));
        }
      }, {
        key: "getGoodStringDate",
        value: function getGoodStringDate(timestamp) {
          return new Date(timestamp).toLocaleString();
        }
      }, {
        key: "searchByName",
        value: function searchByName(ev) {
          this.searchString = ev.target.value;
        }
      }, {
        key: "doTheSearch",
        value: function doTheSearch(event) {
          var _this8 = this;

          console.log('Enter called');
          console.log(event);
          var doIt = false;
          if (event && event.key === 'Enter') // Do stuff}
            doIt = true;else if (!event) doIt = true;

          if (doIt) {
            this.resultSearchListings = [];
            setTimeout(function () {
              _this8.waitSearch = false;
              _this8.loadingChats = true;

              if (!_this8.waitSearch && _this8.searchString && _this8.searchString != '') {
                _this8.mlservice.getMsgUsersByString(_this8.searchString).subscribe(function (data) {
                  _this8.resultSearchListings = data;
                  _this8.loadingChats = false;
                });

                _this8.waitSearch = true;
              }
            }, 500);
          }
        }
      }]);

      return MessagesPage;
    }();

    MessagesPage.ctorParameters = function () {
      return [{
        type: _services_Service__WEBPACK_IMPORTED_MODULE_4__["Service"]
      }, {
        type: _services_MyListingService__WEBPACK_IMPORTED_MODULE_9__["MyListingService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }, {
        type: _services_LocationService__WEBPACK_IMPORTED_MODULE_8__["LocationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    MessagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'messagesPage',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./messagesPage.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/MyListing/messagesPage/messagesPage.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./messagesPage.scss */
      "./src/app/MyListing/messagesPage/messagesPage.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_Service__WEBPACK_IMPORTED_MODULE_4__["Service"], _services_MyListingService__WEBPACK_IMPORTED_MODULE_9__["MyListingService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _services_LocationService__WEBPACK_IMPORTED_MODULE_8__["LocationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], MessagesPage);
    /***/
  }
}]);
//# sourceMappingURL=MyListing-messagesPage-messagesPage-module-es5.js.map