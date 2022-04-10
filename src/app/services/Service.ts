import {Injectable} from '@angular/core';
import {Constants} from '../Constants';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Listing} from '../entities/myListing/listing';
import {GlobalFields} from '../GlobalFields';
import {CacheService} from 'ionic-cache';
import {LocationService} from './LocationService';
import {NativeStorage} from '@ionic-native/native-storage/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {NavController, Platform} from '@ionic/angular';
import {Profile} from '../entities/profile';
import {GooglePlus} from '@ionic-native/google-plus/ngx';
import {Facebook} from '@ionic-native/facebook/ngx';
import {Notification} from '../entities/Notification';
import {OneSignal, OSNotification} from '@ionic-native/onesignal/ngx';
import {User} from '../entities/user';
import {MyListingService} from './MyListingService';


@Injectable({
  providedIn: 'root'
})
// Contains the general APIs used by all the themes
export class Service {

  selectedListing: Listing;

  GlobalFields: GlobalFields;

  public headers = new HttpHeaders({'Content-Type': 'multipart/form-data'});


  public suffix1 = '/wp-json/'; //PLEASE DON'T TOUCH IT
  public suffix2 = 'wp/v2/'; //PLEASE DON'T TOUCH IT
  public suffix3 = '/api/'; //PLEASE DON'T TOUCH IT
  public suffix4 = 'authenticationcla/'; //PLEASE DON'T TOUCH IT
  public suffix5 = 'bookmarkcla/'; //PLEASE DON'T TOUCH IT
  public suffix6 = 'listingcla/'; //PLEASE DON'T TOUCH IT
  public suffix7 = 'messagecla/'; //PLEASE DON'T TOUCH IT
  public suffix8 = 'packagecla/'; //PLEASE DON'T TOUCH IT
  public suffix2CustomApp = 'custom-listing-app/'; //PLEASE DON'T TOUCH IT
  public suffix2CustomAppLP = 'cla-listingpro-app/'; //PLEASE DON'T TOUCH IT


  constructor(private http: HttpClient, private cache: CacheService, private locationService: LocationService, private mlservice: MyListingService,
              private nativeStorage: NativeStorage, private statusBar: StatusBar, public platform: Platform,
              private googlePlus: GooglePlus, private fb: Facebook, private oneSignal: OneSignal, private navController: NavController) {
  }


  // doc della cache: https://www.npmjs.com/package/ionic-cache
  getConfig() {
    let url = Constants.url + this.suffix1 + this.suffix2CustomApp + 'config';
    let cacheKey = url;
    let request = this.http.get(url);

    return this.cache.loadFromObservable(cacheKey, request);
    //return this.http.get(url);
  }

  getRecentPosts(page?: number) {
    var url = Constants.url + this.suffix1 + this.suffix2 + 'posts';
    page = page ? page : 1;
    url = url + '?per_page=10&page=' + page;

    let cacheKey = url;
    let request = this.http.get(url);

    return this.cache.loadFromObservable(cacheKey, request);
  }


  getMediaById(id: any): Observable<any> {
    return this.http.get(Constants.url + this.suffix1 + this.suffix2 + 'media/' + id);

  }


  getHtmlFromCustomPageUrl(pageID: string) {

    let url = Constants.url + this.suffix1 + this.suffix2 + 'pages/' + pageID;

    let request = this.http.get(url);
    let cacheKey = url;

    // return this.cache.loadFromObservable(cacheKey, request);
    return this.http.get(url, {responseType: 'text'});

  }


  public storeNotifications(notification: OSNotification) {

    //first get them
    this.nativeStorage.getItem('notificationsCLA')
      .then(
        data => {
          console.log(data);
          if (notification && data.anotherProperty)
            GlobalFields.notifications = data.anotherProperty;
          //store it
          this.storeNotifications2(notification);
        },
        error => {
          console.error(error);
          this.storeNotifications2(notification);
        }
      );
  }

  public storeNotifications2(notification: OSNotification) {
    if (!GlobalFields.notifications)
      GlobalFields.notifications = [];

    const a = [notification] as Notification[];
    GlobalFields.notifications = a.concat(GlobalFields.notifications);
    if (GlobalFields.notifications.length == 11)
      GlobalFields.notifications = GlobalFields.notifications.slice(0, 9);

    this.nativeStorage.setItem('notificationsCLA', {property: 'value', anotherProperty: GlobalFields.notifications})
      .then(
        () => console.log('Stored item!'),
        error => {
          console.error('Error storing item', error);
          GlobalFields.notifications = [];
        }
      );
  }


  public getNotifications() {
    this.nativeStorage.getItem('notificationsCLA')
      .then(
        data => {
          console.log(data);
          if (data && data.anotherProperty)
            GlobalFields.notifications = data.anotherProperty;
        },
        error => {
          console.error(error);
          GlobalFields.notifications = [];
        }
      );
  }


  clearAllCache() {
    this.cache.clearAll();

  }


  setWhiteBlackBackgroundStatusBar() {
    /* console.log("setWhiteBlackBackgroundStatusBar");
     if (this.platform.is('android'))
         this.setTransparentBackgroundStatusBar();
     else{
         this.statusBar.overlaysWebView(false);
         this.statusBar.backgroundColorByName('black');
         this.statusBar.styleDefault();
     }
     */
  }

  initOneSignal() {

    console.log('Oensignal startInit');
    console.log(
      this.oneSignal.startInit(Constants.OneSignal_appID, Constants.OneSignal_googleProjectNumber)
    );

    console.log('Oensignal inFocusDisplaying');
    console.log(this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification));

    this.oneSignal.handleNotificationReceived().subscribe((res) => {
      // do something when notification is received
      //Is a direct message notification, no need to store it
      if (res && res.payload && !res.payload.additionalData)
        this.storeNotifications(res);
      console.log(res);
    });

    this.oneSignal.handleNotificationOpened().subscribe((res) => {
        // do something when a notification is opened

        //ONLY FOR MYLISTING
        // Is a direct message notification
        if (GlobalFields.isLoggedIn && res && res.notification.payload && res.notification.payload.additionalData
          && res.notification.payload.additionalData.notification_type == 1 && res.notification.payload.additionalData.sender) {
          GlobalFields.senderMsgSelected = new User();
          GlobalFields.senderMsgSelected.id = res.notification.payload.additionalData.sender.id;
          GlobalFields.senderMsgSelected.name = res.notification.payload.additionalData.sender.nickname;
          GlobalFields.loadingSoft = true;
          this.mlservice.getMsgsOfAChat(GlobalFields.senderMsgSelected.id).subscribe((data: any) => {
            GlobalFields.msgsSelected = data;
            GlobalFields.loadingSoft = false;
            this.navController.navigateForward('tabs/' + GlobalFields.site_details.themeEnabled + '/messages/chatPage');
          });

          console.log(res);
        }
      }
    );

    console.log('Oensignal endInit');
    this.oneSignal.endInit();
  }


  //**************************************************** AUTHENTICATED AND LOGIN CALLS ***************************************************

  socialLogin(type: number, authToken: string) {
    let url = Constants.url + this.suffix3 + this.suffix4 + 'connect';

    let body = new FormData();

    body.append('type', type + '');
    body.append('access_token', authToken);

    return this.http.post(url, body);
  }

  getNonce() {
    let url = Constants.url;
    if (GlobalFields.site_details.themeEnabled == 'listing-pro')
      url += this.suffix1 + this.suffix2CustomAppLP + this.suffix4 + 'get_nonce/?controller=authenticationcla&method=generate_auth_cookie';
    else
      url += this.suffix3 + 'get_nonce/?controller=authenticationcla&method=generate_auth_cookie';


    let request = this.http.get(url);

    return this.http.get(url, {responseType: 'text'});
  }

  getNonceRegistration() {
    let url = Constants.url;
    if (GlobalFields.site_details.themeEnabled == 'listing-pro')
      url += this.suffix1 + this.suffix2CustomAppLP + this.suffix4 + 'get_nonce/?controller=authenticationcla&method=register_user';
    else
      url += this.suffix3 + this.suffix4 + 'get_nonce/?controller=authenticationcla&method=register_user';

    let request = this.http.get(url);

    return this.http.get(url, {responseType: 'text'});
  }

  getNoncePswRecovery() {
    let url = Constants.url;
    if (GlobalFields.site_details.themeEnabled == 'listing-pro')
      url += this.suffix1 + this.suffix2CustomAppLP + this.suffix4 + 'get_nonce/?controller=authenticationcla&method=reset_password';
    else
      url += this.suffix3 + this.suffix4 + 'get_nonce/?controller=authenticationcla&method=reset_password';

    let request = this.http.get(url);

    return this.http.get(url, {responseType: 'text'});
  }


  loginOld(username: string, password: string, nonce: string) {
    let url = Constants.url + this.suffix3 + this.suffix4 + 'generate_auth_cookie/?username='
      + username +
      '&password=' + password +
      '&nonce=' + nonce;

    let request = this.http.get(url);

    return this.http.get(url, {responseType: 'text'});
  }

  login(username: string, password: string, nonce: string) {
    let url = Constants.url;
    if (GlobalFields.site_details.themeEnabled == 'listing-pro')
      url += this.suffix1 + this.suffix2CustomAppLP + this.suffix4 + 'generate_auth_cookie';
    else
      url += this.suffix3 + this.suffix4 + 'generate_auth_cookie';


    let body = new FormData();

    body.append('username', username);
    body.append('password', password);
    body.append('nonce', nonce);

    return this.http.post(url, body);
  }

  registration(email: string, password: string, nonce: string) {
    let url = Constants.url;
    if (GlobalFields.site_details.themeEnabled == 'listing-pro')
      url += this.suffix1 + this.suffix2CustomAppLP + this.suffix4 + 'register_user';
    else
      url += this.suffix3 + this.suffix4 + 'register_user';

    let body = new FormData();

    body.append('user_email', email);
    body.append('user_login', email);
    body.append('user_pass', password);
    body.append('nonce', nonce);
    body.append('notify', 'both');

    return this.http.post(url, body);
  }

  pswRecovery(email: string, nonce: string) {
    let url = Constants.url + this.suffix3 + this.suffix4 + 'reset_password';

    let body = new FormData();

    body.append('user_login', email);
    body.append('nonce', nonce);

    return this.http.post(url, body);
  }


  public storeProfile(profile: Profile) {
    GlobalFields.profile.auth_username = GlobalFields.username;
    GlobalFields.profile.auth_password = GlobalFields.password;

    const theme = GlobalFields.site_details.themeEnabled

    this.nativeStorage.setItem('profileCLA_' + theme, {property: 'value', anotherProperty: GlobalFields.profile})
      .then(
        () => console.log('Stored item!'),
        error => console.error('Error storing item', error)
      );
  }

  public getProfileFromStorage() {
    const theme = GlobalFields.site_details.themeEnabled

    this.nativeStorage.getItem('profileCLA_' + theme)
      .then(
        data => {
          console.log(data);
          GlobalFields.profile = data.anotherProperty;
          GlobalFields.getUserRole();
          if (GlobalFields.profile)
            GlobalFields.isLoggedIn = true;
        },
        error => console.error(error)
      );
  }

  public logout() {
    //Send External ID to OneSignal
    if (GlobalFields.site_details.enableNotifications && GlobalFields.profile && GlobalFields.profile.user)
      try {
        this.oneSignal.setExternalUserId('');
      } catch (e) {
        console.log(e);
      }

    this.nativeStorage.remove('profileCLA')
      .then(
        data => {
          console.log(data);
          GlobalFields.isLoggedIn = false;
          GlobalFields.profile = undefined;
        },
        error => {
          console.error(error);
          GlobalFields.isLoggedIn = false;
          GlobalFields.profile = undefined;
        }
      );

    try {
      this.googlePlus.disconnect().then(res => {
        console.log(res);
      }).catch(e => {
        console.log(e);
      });
      this.fb.logout().then(res => {
        console.log(res);
      }).catch(e => {
        console.log(e);
      });
    } catch (e) {
      console.log(e);
    }

  }

  public refreshCookie() {
    GlobalFields.loadingHard = true;
    this.getNonce().subscribe((data: string) => {
      if (data) {
        GlobalFields.nonce = JSON.parse(data).nonce;

        this.getProfileFromStorage();
        console.log(GlobalFields.profile);
        GlobalFields.username = GlobalFields.profile.auth_username;
        GlobalFields.password = GlobalFields.profile.auth_password;

        this.login(GlobalFields.username, GlobalFields.password, GlobalFields.nonce).subscribe((data: any) => {
          GlobalFields.getUserRole();
          if (GlobalFields.profile.status == 'error') { //Login error
            GlobalFields.isLoggedIn = false;
            GlobalFields.loadingHard = false;
          } else { //Login ok
            GlobalFields.profile = data;
            this.storeProfile(GlobalFields.profile);
            GlobalFields.isLoggedIn = true;
            GlobalFields.loadingHard = true;
          }

          GlobalFields.loadingHard = false;
        }, err => {
          GlobalFields.loadingHard = false;
        });
      }
    }, err => {
      try {
        this.logout();
        GlobalFields.profile = JSON.parse(err.error);
        GlobalFields.isLoggedIn = false;
        GlobalFields.loadingSoft = false;
      } catch (e) { //no network
        GlobalFields.loadingSoft = false;
      }
    });
  }

  public getCurrentUserInfo() {
    let url = Constants.url;

    if (GlobalFields.site_details.themeEnabled == 'listing-pro')
      url += this.suffix1 + this.suffix2CustomAppLP + this.suffix4 + 'get_currentuserinfo/?cookie=' + GlobalFields.profile.cookie;
    else
      url += this.suffix3 + this.suffix4 + 'get_currentuserinfo/?cookie=' + GlobalFields.profile.cookie;

    let cacheKey = url;
    return this.http.get(url);

  }


  public uploadImgListing(file: Blob, file_name: string, field: string) {

    let url = Constants.url + this.suffix3 + this.suffix6 + 'upload';

    console.log(file);
    console.log(file_name);
    let body = new FormData();
    let ext = (file.type && file.type.split('/') && file.type.split('/').length > 0) ? file.type.split('/')[1] : 'jpg';
    if (ext.includes('*') && file_name.split('.').length > 0)
      ext = file_name.split('.')[file_name.split('.').length - 1];
    body.append('cookie', GlobalFields.profile.cookie);
    body.append(field, file, 'imgListing.' + ext);

    return this.http.post(url, body);
  }

  public getImgBlob(file_uri: string) {

    let headers = new HttpHeaders({'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin', 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    });

    return this.http.get(file_uri,
      {
        responseType: 'blob',
        headers: headers
      });
  }

  public dataURItoBlob(dataURI: string): Blob {
    // convert base64 to raw binary data held in a string
    const byteString = atob(dataURI.split(',')[1]);

    // separate out the mime component
    let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to an ArrayBuffer
    let arrayBuffer = new ArrayBuffer(byteString.length);
    let _ia = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      _ia[i] = byteString.charCodeAt(i);
    }

    let dataView = new DataView(arrayBuffer);
    let blob = new Blob([dataView], {type: mimeString});
    return blob;

  }


}
