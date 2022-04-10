import {Component, QueryList, ViewChildren} from '@angular/core';

import {AlertController, IonRouterOutlet, ModalController, NavController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {GlobalFields} from './GlobalFields';
import {Service} from './services/Service';
import {Dialogs} from '@ionic-native/dialogs/ngx';
import {ModalAddNode} from './MyListing/modalAdd/modalAdd';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {CacheService} from 'ionic-cache';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {NativeGeocoder} from '@ionic-native/native-geocoder/ngx';
import {TranslateService} from '@ngx-translate/core';
import {ThemeService} from './services/theme.service';
import {LocationService} from './services/LocationService';
import {catchError, tap} from 'rxjs/operators';
import {Config} from './entities/config';
import {of} from 'rxjs';
import {GlobalFieldsListingPro} from './GlobalFieldsListingPro';
import {GlobalFieldsMyListing} from './GlobalFieldsMyListing';


// declare var admob;


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList < IonRouterOutlet > ;


  GlobalFields = GlobalFields;
  GlobalFieldsListingPro = GlobalFieldsListingPro;
  GlobalFieldsMyListing = GlobalFieldsMyListing;





  appPages = [
    {
      title: 'home',
      url: '/home',
      icon: 'home'
    }
  ];


  lastTimeBackPress = 0;
  timePeriodToExit = 2000;

  constructor(private activatedRoute: ActivatedRoute, private platform: Platform, private router: Router, private splashScreen: SplashScreen,
              private statusBar: StatusBar, public service: Service, private dialogs: Dialogs,
              public modalCtrl: ModalController,private cache: CacheService, private geolocation: Geolocation,
              private nativeGeocoder: NativeGeocoder, private alertController: AlertController,
              private translate: TranslateService, public themeService: ThemeService,
              private locationService: LocationService,
              private navCtrl: NavController ) {
    //this.getDataFromResolver();

    this.platform.ready().then(() => {
      if (this.platform.is('android'))
        this.backButtonEvent();
    });

    this.initializeApp();
  }

  checkIfReady(){
    if(!GlobalFields.site_details)
      return false;
    if(GlobalFields.site_details.themeEnabled == 'listing-pro')
      return !GlobalFieldsListingPro.firstLoading;
    else //MyListing
      return !GlobalFieldsMyListing.firstLoading;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log(this.platform.platforms());
      if (this.platform.is('android')) {
        GlobalFields.mode = 'md';
        this.statusBar.overlaysWebView(false);
      } else {
        GlobalFields.mode = 'ios';
        this.splashScreen.hide();
        this.statusBar.overlaysWebView(false);
        this.statusBar.styleDefault();
        //styleDefault not work on ios 13 so need to put light content when dark mode is enabled
        //this.statusBar.styleLightContent();
      }

      //this.createBanner();
    });
  }



  //Add feature of back button in Android
  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(0, () => {
      this.routerOutlets.forEach(async(outlet: IonRouterOutlet) => {
        if (this.router.url != '/tabs/home') {
          // await this.router.navigate(['/']);
         // await this.location.back();
          this.navCtrl.back();
        } else if (this.router.url == '/tabs/home') {
          /*if (new Date().getTime() - this.lastTimeBackPress >= this.timePeriodToExit) {
            this.lastTimeBackPress = new Date().getTime();
            this.presentAlertConfirm();
          } else {
            navigator['app'].exitApp();
          }*/
          navigator['app'].exitApp();
        }
      });
    });
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      // header: 'Confirm!',
      message: 'Are you sure you want to exit the app?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {}
      }, {
        text: 'Close App',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    });

    await alert.present();
  }


  checkPlatform(): boolean {
    if (this.platform.is('mobileweb') || !this.platform.is('ios')) {
      return false;
    } else {
      return true;
    }
  }



  goTo(url: string) {
    this.router.navigateByUrl(url);
  }



  /*
      //DOC: https://admob-plus.github.io/docs/ionic.html
      createBanner() {

          admob.setDevMode(true);
          admob.banner.show({
              id: {
                  ios: 'ca-app-pub-xxx~xxx',
              },
          });


          admob.interstitial.show().then(() => {
              setTimeout(() => {
                  // @ts-ignore
                  admob.interstitial.hide({
                      android: Constants.AdmobAndroidAPPID,
                      ios: Constants.AdmobIosAPPID
                  });
              }, 10000);
          });
      }
  */

}
