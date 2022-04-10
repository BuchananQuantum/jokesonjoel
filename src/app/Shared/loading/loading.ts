import {Component, Input} from '@angular/core';
import {GlobalFields} from '../../GlobalFields';
import {Service} from '../../services/Service';
import {Dialogs} from '@ionic-native/dialogs/ngx';
import {AlertController, Platform} from '@ionic/angular';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {NativeGeocoder} from '@ionic-native/native-geocoder/ngx';
import {TranslateService} from '@ngx-translate/core';
import {ThemeService} from '../../services/theme.service';
import {LocationService} from '../../services/LocationService';
import {ActivatedRoute, Router} from '@angular/router';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import {CacheService} from 'ionic-cache';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {Constants} from '../../Constants';
import {GlobalFieldsListingPro} from '../../GlobalFieldsListingPro';
import {GlobalFieldsMyListing} from '../../GlobalFieldsMyListing';
import {MyListingService} from '../../services/MyListingService';
import {ListingProService} from '../../services/ListingProService';

@Component({
  selector: 'loading',
  templateUrl: 'loading.html',
  styleUrls: ['loading.scss']

})
export class Loading {

  @Input() softLoading: boolean;

  GlobalFields = GlobalFields;

  constructor(private activatedRoute: ActivatedRoute, private service: Service, private mlservice: MyListingService,
              private lpservice: ListingProService, private dialogs: Dialogs, private platform: Platform, private geolocation: Geolocation,
              private nativeGeocoder: NativeGeocoder, private alertController: AlertController, private translate: TranslateService,
              private themeService: ThemeService, private locationService: LocationService, private cache: CacheService,
              private splashScreen: SplashScreen, private router: Router) {

    if(Constants.url=='')
      GlobalFields.showDemo = true;
    else
      this.iniApp();
  }


  selectTheme(theme:string){
    if(theme=='ml') {
      Constants.url = Constants.demo_ml.url;
      Constants.ConsumerKeyWoo = Constants.demo_ml.ConsumerKeyWoo;
      Constants.ConsumerSecretWoo = Constants.demo_ml.ConsumerSecretWoo;
    }else if(theme=='lp') {
      Constants.url = Constants.demo_lp.url;
      Constants.ConsumerKeyWoo = Constants.demo_lp.ConsumerKeyWoo;
      Constants.ConsumerSecretWoo = Constants.demo_lp.ConsumerSecretWoo;
    }
    GlobalFields.showDemo = false;
    this.iniApp();
  }

  iniApp(){

    //Initial call
    if (GlobalFields.firstLoading) {
      this.getFirstData();
    }
  }


  getFirstData() {
    this.service.getConfig().subscribe(data => {

      console.log(data);
      GlobalFields.preInit(data, this.service, this.themeService, this.translate);
      console.log('ini app');
      this.cache.setDefaultTTL(60 * 60); //set default cache TTL for 1 hour

      // Get the first calls based on the theme
      // If no theme, default to MyListing to support old plugin versions
      if (GlobalFields.site_details.themeEnabled == Constants.LISTING_PRO)
        GlobalFieldsListingPro.init(this.service,this.lpservice, this.dialogs, this.platform, this.geolocation, this.nativeGeocoder, this.alertController, this.translate, this.themeService, this.locationService, this.router);
      else if (GlobalFields.site_details.themeEnabled == Constants.MY_LISTING) //MyListing
        GlobalFieldsMyListing.init(this.service, this.mlservice, this.dialogs, this.platform, this.geolocation, this.nativeGeocoder, this.alertController, this.translate, this.themeService, this.locationService, this.router);
      else {
        GlobalFields.site_details.themeEnabled = Constants.MY_LISTING;
        GlobalFieldsMyListing.init(this.service, this.mlservice, this.dialogs, this.platform, this.geolocation, this.nativeGeocoder, this.alertController, this.translate, this.themeService, this.locationService, this.router);
      }

    }),
      catchError((err) => {
        console.log(err);
        return of(null);
      });
  }


  retryInit() {
    GlobalFields.errorIni = false;
    this.service.clearAllCache();
    this.getFirstData();
  }

}
