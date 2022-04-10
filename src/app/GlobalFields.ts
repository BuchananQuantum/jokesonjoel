import {Listing} from './entities/myListing/listing';
import {Post} from './entities/post';
import {AlertController} from '@ionic/angular';
import {Service} from './services/Service';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {
  NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult
} from '@ionic-native/native-geocoder/ngx';

import {Config} from './entities/config';
import {TranslateService} from '@ngx-translate/core';

import * as Color from 'color';
import {ThemeService} from './services/theme.service';
import {LocationService} from './services/LocationService';
import {Profile} from './entities/profile';
import {Chat} from './entities/Chat';
import {Product} from './entities/Product';
import {Notification} from './entities/Notification';
import {User} from './entities/user';
import {GeocoderResult} from '@agm/core';


export class GlobalFields {

  public static mode?: string; //md or ios

  //site details and general data
  public static site_details: Config;
  public static posts: Post[] = [];
  public static notifications: Notification[] = [];

  //Popover review part
  public static selectedImg: string = '';

  //WooCommerce part
  public static selectedProduct: Product;
  public static selectedOrderUrl: string;

  //geo part
  public static lat: any;
  public static long: any;
  public static address: any;
  public static locationService: LocationService;

  //app status part
  public static showDemo = false; //This is to show the "choose a website demo screen// "
  public static firstLoading = true;
  public static loadingHard = false;
  public static loadingSoft = false;
  public static errorIni = false;
  public static errorString;


  //account part
  public static isLoggedIn: Boolean = false;
  public static profile: Profile;
  public static userRole: any;
  public static username = '';
  public static password = '';
  public static nonce = '';
  public static bookmarkedListings: Listing[] = [];


  //Messages part
  public static msgToOwner: any; //whens send a direct msg to a listing owner
  public static msgsSelected: Chat;
  public static showTabs = true;
  public static senderMsgSelected: User;


  //theme data
  public static theme = {
    primary: '#39BFBD',
    secondary: '#4CE0B3',
    tertiary: '#FF5E79',
    light: '#ffffff',
    medium: '#B682A5',
    dark: '#34162A'
  };


  //languages
  public static languages = [
    {val: 'Albanian', isChecked: false, flag: 'al', fontStyleClass: 'fontStyle1'},
    {val: 'Arabic', isChecked: false, flag: 'sa', fontStyleClass: 'fontStyle2'},
    {val: '繁體中文 Chinese (Traditional)', isChecked: false, flag: 'tw', fontStyleClass: 'fontStyle2'},
    {val: '简体中文 Chinese (Simplified)', isChecked: false, flag: 'cn', fontStyleClass: 'fontStyle2'},
    {val: 'Dansk', isChecked: false, flag: 'dk', fontStyleClass: 'fontStyle1'},
    {val: 'Deutsch', isChecked: false, flag: 'de', fontStyleClass: 'fontStyle2'},
    {val: 'Dutch', isChecked: false, flag: 'nl', fontStyleClass: 'fontStyle2'},
    {val: 'English', isChecked: true, flag: 'gb', fontStyleClass: 'fontStyle1'},
    {val: 'Español', isChecked: false, flag: 'es', fontStyleClass: 'fontStyle1'},
    {val: 'Français', isChecked: false, flag: 'fr', fontStyleClass: 'fontStyle1'},
    {val: 'Greek', isChecked: false, flag: 'gr', fontStyleClass: 'fontStyle2'},
    {val: 'Hebrew', isChecked: false, flag: 'il', fontStyleClass: 'fontStyle2'},
    {val: 'Italiano', isChecked: false, flag: 'it', fontStyleClass: 'fontStyle1'},
    {val: 'Japanese', isChecked: false, flag: 'jp', fontStyleClass: 'fontStyle2'},
    {val: 'Malay', isChecked: false, flag: 'my', fontStyleClass: 'fontStyle1'},
    {val: 'Polish', isChecked: false, flag: 'pl', fontStyleClass: 'fontStyle1'},
    {val: 'Portuguese', isChecked: false, flag: 'pt', fontStyleClass: 'fontStyle1'},
    {val: 'Romanian', isChecked: false, flag: 'ro', fontStyleClass: 'fontStyle1'},
    {val: 'Russian', isChecked: false, flag: 'ru', fontStyleClass: 'fontStyle2'}
  ];

  //Sitemenu controller
  public static navigateAsRoot = false;

  public static timeZones = ['Africa/Abidjan', 'Africa/Accra', 'Africa/Addis_Ababa', 'Africa/Algiers', 'Africa/Asmara', 'Africa/Bamako', 'Africa/Bangui', 'Africa/Banjul', 'Africa/Bissau', 'Africa/Blantyre', 'Africa/Brazzaville', 'Africa/Bujumbura', 'Africa/Cairo', 'Africa/Casablanca', 'Africa/Ceuta', 'Africa/Conakry', 'Africa/Dakar', 'Africa/Dar_es_Salaam', 'Africa/Djibouti', 'Africa/Douala', 'Africa/El_Aaiun', 'Africa/Freetown', 'Africa/Gaborone', 'Africa/Harare', 'Africa/Johannesburg', 'Africa/Juba', 'Africa/Kampala', 'Africa/Khartoum', 'Africa/Kigali', 'Africa/Kinshasa', 'Africa/Lagos', 'Africa/Libreville', 'Africa/Lome', 'Africa/Luanda', 'Africa/Lubumbashi', 'Africa/Lusaka', 'Africa/Malabo', 'Africa/Maputo', 'Africa/Maseru', 'Africa/Mbabane', 'Africa/Mogadishu', 'Africa/Monrovia', 'Africa/Nairobi', 'Africa/Ndjamena', 'Africa/Niamey', 'Africa/Nouakchott', 'Africa/Ouagadougou', 'Africa/Porto-Novo', 'Africa/Sao_Tome', 'Africa/Tripoli', 'Africa/Tunis', 'Africa/Windhoek', 'America/Adak', 'America/Anchorage', 'America/Anguilla', 'America/Antigua', 'America/Araguaina', 'America/Argentina/Buenos_Aires', 'America/Argentina/Catamarca', 'America/Argentina/Cordoba', 'America/Argentina/Jujuy', 'America/Argentina/La_Rioja', 'America/Argentina/Mendoza', 'America/Argentina/Rio_Gallegos', 'America/Argentina/Salta', 'America/Argentina/San_Juan', 'America/Argentina/San_Luis', 'America/Argentina/Tucuman', 'America/Argentina/Ushuaia', 'America/Aruba', 'America/Asuncion', 'America/Atikokan', 'America/Bahia', 'America/Bahia_Banderas', 'America/Barbados', 'America/Belem', 'America/Belize', 'America/Blanc-Sablon', 'America/Boa_Vista', 'America/Bogota', 'America/Boise', 'America/Cambridge_Bay', 'America/Campo_Grande', 'America/Cancun', 'America/Caracas', 'America/Cayenne', 'America/Cayman', 'America/Chicago', 'America/Chihuahua', 'America/Costa_Rica', 'America/Creston', 'America/Cuiaba', 'America/Curacao', 'America/Danmarkshavn', 'America/Dawson', 'America/Dawson_Creek', 'America/Denver', 'America/Detroit', 'America/Dominica', 'America/Edmonton', 'America/Eirunepe', 'America/El_Salvador', 'America/Fort_Nelson', 'America/Fortaleza', 'America/Glace_Bay', 'America/Godthab', 'America/Goose_Bay', 'America/Grand_Turk', 'America/Grenada', 'America/Guadeloupe', 'America/Guatemala', 'America/Guayaquil', 'America/Guyana', 'America/Halifax', 'America/Havana', 'America/Hermosillo', 'America/Indiana/Indianapolis', 'America/Indiana/Knox', 'America/Indiana/Marengo', 'America/Indiana/Petersburg', 'America/Indiana/Tell_City', 'America/Indiana/Vevay', 'America/Indiana/Vincennes', 'America/Indiana/Winamac', 'America/Inuvik', 'America/Iqaluit', 'America/Jamaica', 'America/Juneau', 'America/Kentucky/Louisville', 'America/Kentucky/Monticello', 'America/Kralendijk', 'America/La_Paz', 'America/Lima', 'America/Los_Angeles', 'America/Lower_Princes', 'America/Maceio', 'America/Managua', 'America/Manaus', 'America/Marigot', 'America/Martinique', 'America/Matamoros', 'America/Mazatlan', 'America/Menominee', 'America/Merida', 'America/Metlakatla', 'America/Mexico_City', 'America/Miquelon', 'America/Moncton', 'America/Monterrey', 'America/Montevideo', 'America/Montserrat', 'America/Nassau', 'America/New_York', 'America/Nipigon', 'America/Nome', 'America/Noronha', 'America/North_Dakota/Beulah', 'America/North_Dakota/Center', 'America/North_Dakota/New_Salem', 'America/Ojinaga', 'America/Panama', 'America/Pangnirtung', 'America/Paramaribo', 'America/Phoenix', 'America/Port-au-Prince', 'America/Port_of_Spain', 'America/Porto_Velho', 'America/Puerto_Rico', 'America/Punta_Arenas', 'America/Rainy_River', 'America/Rankin_Inlet', 'America/Recife', 'America/Regina', 'America/Resolute', 'America/Rio_Branco', 'America/Santarem', 'America/Santiago', 'America/Santo_Domingo', 'America/Sao_Paulo', 'America/Scoresbysund', 'America/Sitka', 'America/St_Barthelemy', 'America/St_Johns', 'America/St_Kitts', 'America/St_Lucia', 'America/St_Thomas', 'America/St_Vincent', 'America/Swift_Current', 'America/Tegucigalpa', 'America/Thule', 'America/Thunder_Bay', 'America/Tijuana', 'America/Toronto', 'America/Tortola', 'America/Vancouver', 'America/Whitehorse', 'America/Winnipeg', 'America/Yakutat', 'America/Yellowknife', 'Antarctica/Casey', 'Antarctica/Davis', 'Antarctica/DumontDUrville', 'Antarctica/Macquarie', 'Antarctica/Mawson', 'Antarctica/McMurdo', 'Antarctica/Palmer', 'Antarctica/Rothera', 'Antarctica/Syowa', 'Antarctica/Troll', 'Antarctica/Vostok', 'Arctic/Longyearbyen', 'Asia/Aden', 'Asia/Almaty', 'Asia/Amman', 'Asia/Anadyr', 'Asia/Aqtau', 'Asia/Aqtobe', 'Asia/Ashgabat', 'Asia/Atyrau', 'Asia/Baghdad', 'Asia/Bahrain', 'Asia/Baku', 'Asia/Bangkok', 'Asia/Barnaul', 'Asia/Beirut', 'Asia/Bishkek', 'Asia/Brunei', 'Asia/Chita', 'Asia/Choibalsan', 'Asia/Colombo', 'Asia/Damascus', 'Asia/Dhaka', 'Asia/Dili', 'Asia/Dubai', 'Asia/Dushanbe', 'Asia/Famagusta', 'Asia/Gaza', 'Asia/Hebron', 'Asia/Ho_Chi_Minh', 'Asia/Hong_Kong', 'Asia/Hovd', 'Asia/Irkutsk', 'Asia/Jakarta', 'Asia/Jayapura', 'Asia/Jerusalem', 'Asia/Kabul', 'Asia/Kamchatka', 'Asia/Karachi', 'Asia/Kathmandu', 'Asia/Khandyga', 'Asia/Kolkata', 'Asia/Krasnoyarsk', 'Asia/Kuala_Lumpur', 'Asia/Kuching', 'Asia/Kuwait', 'Asia/Macau', 'Asia/Magadan', 'Asia/Makassar', 'Asia/Manila', 'Asia/Muscat', 'Asia/Nicosia', 'Asia/Novokuznetsk', 'Asia/Novosibirsk', 'Asia/Omsk', 'Asia/Oral', 'Asia/Phnom_Penh', 'Asia/Pontianak', 'Asia/Pyongyang', 'Asia/Qatar', 'Asia/Qyzylorda', 'Asia/Riyadh', 'Asia/Sakhalin', 'Asia/Samarkand', 'Asia/Seoul', 'Asia/Shanghai', 'Asia/Singapore', 'Asia/Srednekolymsk', 'Asia/Taipei', 'Asia/Tashkent', 'Asia/Tbilisi', 'Asia/Tehran', 'Asia/Thimphu', 'Asia/Tokyo', 'Asia/Tomsk', 'Asia/Ulaanbaatar', 'Asia/Urumqi', 'Asia/Ust-Nera', 'Asia/Vientiane', 'Asia/Vladivostok', 'Asia/Yakutsk', 'Asia/Yangon', 'Asia/Yekaterinburg', 'Asia/Yerevan', 'Atlantic/Azores', 'Atlantic/Bermuda', 'Atlantic/Canary', 'Atlantic/Cape_Verde', 'Atlantic/Faroe', 'Atlantic/Madeira', 'Atlantic/Reykjavik', 'Atlantic/South_Georgia', 'Atlantic/St_Helena', 'Atlantic/Stanley', 'Australia/Adelaide', 'Australia/Brisbane', 'Australia/Broken_Hill', 'Australia/Currie', 'Australia/Darwin', 'Australia/Eucla', 'Australia/Hobart', 'Australia/Lindeman', 'Australia/Lord_Howe', 'Australia/Melbourne', 'Australia/Perth', 'Australia/Sydney', 'Europe/Amsterdam', 'Europe/Andorra', 'Europe/Astrakhan', 'Europe/Athens', 'Europe/Belgrade', 'Europe/Berlin', 'Europe/Bratislava', 'Europe/Brussels', 'Europe/Bucharest', 'Europe/Budapest', 'Europe/Busingen', 'Europe/Chisinau', 'Europe/Copenhagen', 'Europe/Dublin', 'Europe/Gibraltar', 'Europe/Guernsey', 'Europe/Helsinki', 'Europe/Isle_of_Man', 'Europe/Istanbul', 'Europe/Jersey', 'Europe/Kaliningrad', 'Europe/Kiev', 'Europe/Kirov', 'Europe/Lisbon', 'Europe/Ljubljana', 'Europe/London', 'Europe/Luxembourg', 'Europe/Madrid', 'Europe/Malta', 'Europe/Mariehamn', 'Europe/Minsk', 'Europe/Monaco', 'Europe/Moscow', 'Europe/Oslo', 'Europe/Paris', 'Europe/Podgorica', 'Europe/Prague', 'Europe/Riga', 'Europe/Rome', 'Europe/Samara', 'Europe/San_Marino', 'Europe/Sarajevo', 'Europe/Saratov', 'Europe/Simferopol', 'Europe/Skopje', 'Europe/Sofia', 'Europe/Stockholm', 'Europe/Tallinn', 'Europe/Tirane', 'Europe/Ulyanovsk', 'Europe/Uzhgorod', 'Europe/Vaduz', 'Europe/Vatican', 'Europe/Vienna', 'Europe/Vilnius', 'Europe/Volgograd', 'Europe/Warsaw', 'Europe/Zagreb', 'Europe/Zaporozhye', 'Europe/Zurich', 'Indian/Antananarivo', 'Indian/Chagos', 'Indian/Christmas', 'Indian/Cocos', 'Indian/Comoro', 'Indian/Kerguelen', 'Indian/Mahe', 'Indian/Maldives', 'Indian/Mauritius', 'Indian/Mayotte', 'Indian/Reunion', 'Pacific/Apia', 'Pacific/Auckland', 'Pacific/Bougainville', 'Pacific/Chatham', 'Pacific/Chuuk', 'Pacific/Easter', 'Pacific/Efate', 'Pacific/Enderbury', 'Pacific/Fakaofo', 'Pacific/Fiji', 'Pacific/Funafuti', 'Pacific/Galapagos', 'Pacific/Gambier', 'Pacific/Guadalcanal', 'Pacific/Guam', 'Pacific/Honolulu', 'Pacific/Kiritimati', 'Pacific/Kosrae', 'Pacific/Kwajalein', 'Pacific/Majuro', 'Pacific/Marquesas', 'Pacific/Midway', 'Pacific/Nauru', 'Pacific/Niue', 'Pacific/Norfolk', 'Pacific/Noumea', 'Pacific/Pago_Pago', 'Pacific/Palau', 'Pacific/Pitcairn', 'Pacific/Pohnpei', 'Pacific/Port_Moresby', 'Pacific/Rarotonga', 'Pacific/Saipan', 'Pacific/Tahiti', 'Pacific/Tarawa', 'Pacific/Tongatapu', 'Pacific/Wake', 'Pacific/Wallis', 'UTC'];


  public static dataIsReady = true;


  public static async presentAlert(alertController: AlertController) {
    const alert = await alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }


  // First call, it controls the router
  public static preInit(data: Config, service: Service, themeService: ThemeService, translate: TranslateService) {
    this.site_details = data;
    console.log(data);
    this.site_details.listingPageType = parseInt(this.site_details.listingPageType);
    if (!this.site_details.navigationType)
      this.site_details.navigationType = 1;
    this.updateColor(themeService);
    this.setCustomFont(themeService);
    if (!this.site_details.placeholderImgUrl || this.site_details.placeholderImgUrl == '')
      this.site_details.placeholderImgUrl = 'assets/imgs/no_img.jpg';

    // OneSignal Code start:
    if (this.site_details.enableNotifications)
      service.initOneSignal();

    GlobalFields.firstLoading = false;
    console.log(GlobalFields.firstLoading);
  }


  //Get the user role if the user is logged in to avoid getting in n times
  public static getUserRole() {
    if (GlobalFields.site_details.userRoles && GlobalFields.site_details.userRoles.roles && GlobalFields.site_details.userRoles.roles.length > 0 &&
      GlobalFields.profile && GlobalFields.profile.user && GlobalFields.profile.user.role) {
      GlobalFields.userRole = GlobalFields.site_details.userRoles.roles.find(r => r.slug == GlobalFields.profile.user.role);
    }
  }

  //get current location in myLat long
  public static getLocation(geolocation: Geolocation, nativeGeocoder: NativeGeocoder, alertController: AlertController, service: Service, locationService: LocationService) {

    console.log('Getting the location');

    console.log(geolocation);
    geolocation.getCurrentPosition({enableHighAccuracy: true}).then((resp) => {
      GlobalFields.lat = resp.coords.latitude;
      GlobalFields.long = resp.coords.longitude;
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);


      GlobalFields.getMyAddress(service, locationService, nativeGeocoder);

    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
    });

  }

  public static getMyAddress(service: Service, locationService: LocationService, nativeGeocoder: NativeGeocoder) {

    console.log('Get my location');

    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    if (!GlobalFields.lat && !GlobalFields.long) {
      GlobalFields.lat = 51.509865;
      GlobalFields.long = -0.118092;
    }


    if (GlobalFields.site_details.mapType == 1) { //Google Maps
      nativeGeocoder.reverseGeocode(GlobalFields.lat, GlobalFields.long, options)
        .then((result: NativeGeocoderResult[]) => {
          console.log(JSON.stringify(result));

          GlobalFields.address = '';
          
          let address_res_locality = result.find(res => res.locality!="" && res.locality!=undefined);
            if(!address_res_locality)
              address_res_locality = result[0];

          if (GlobalFields.site_details.themeEnabled == 'listing-pro') { //It wants only the city
            let city = '';
            if(address_res_locality.locality)
              city = address_res_locality.locality;
            else if(result[0].subAdministrativeArea)
              city = result[0].subAdministrativeArea;
            else if(result[0].administrativeArea)
              city = result[0].administrativeArea;
            
            GlobalFields.address = GlobalFields.address + city;

          } else { //Complete address
            if(result[0].thoroughfare) //Street
              GlobalFields.address = result[0].thoroughfare + ', '
            if(result[0].subThoroughfare) //Address number
              GlobalFields.address = GlobalFields.address + result[0].subThoroughfare + ', '

            //City
            let city = '';
            if(address_res_locality.locality)
              city = address_res_locality.locality + ', '
            else if(result[0].subAdministrativeArea)
              city = result[0].subAdministrativeArea + ', '
            else if(result[0].administrativeArea)
              city = result[0].administrativeArea + ', '

            GlobalFields.address = GlobalFields.address + city + result[0].countryName;
          }
        })
        .catch((error: any) => { //not avalailable the native service
          console.log(error);
          locationService.getMyAddressFromGoogle(GlobalFields.lat, GlobalFields.long).subscribe((data: any) => {
            if (GlobalFields.site_details.themeEnabled == 'listing-pro') //ListingPro need only the city
              if (data)
                if (data.results && data.results.length > 0) {
                  let res: GeocoderResult[] = data.results;
                  let city_addr = res.find(addr => {
                    addr.types && addr.types.find(el => el.includes('locality'))
                  })
                  res.forEach(addr => {
                    if (addr.types.some(t => t.includes('locality'))) {
                      GlobalFields.address = addr.address_components[0].long_name
                    }
                  })
                  if(!GlobalFields.address)
                    GlobalFields.address = data.results[0].formatted_address;
                } else//Complete address
                if (data && data.results && data.results.length > 0)
                  GlobalFields.address = data.results[0].formatted_address;
          });

        });
    } else { //Open Street Maps
      locationService.getAddressFromOpenMaps(GlobalFields.lat, GlobalFields.long).subscribe(res => {
        if (GlobalFields.site_details.themeEnabled == 'listing-pro') { //ListingPro need only the city
          if (res && res.address && res.city)
            GlobalFields.address = res.city;
        } else//Complete address
          GlobalFields.address = res.display_name;
      });
    }


  }


  public static setLang(lang, translate: TranslateService) {

    console.log(lang);
    GlobalFields.languages.forEach(l => {
      if (l.flag == lang) {
        l.isChecked = true;
        translate.use(lang);
        console.log('language setted');
        //change font based on language
        let html = document.getElementById('mainHtmlTag');
        if (html)
          html.className = l.fontStyleClass;
      } else {
        l.isChecked = false;
      }
    });
  }


  public static getPrimaryColorJson(): any {
    return {'color': this.site_details.primaryColor};
  }

  public static getPrimaryColorBackgroundJson(): any {
    return {'background-color': this.site_details.primaryColor};
  }


  public static getBodyColorJson(): any {
    return {'color': this.site_details.bodyBackgroundColor};
  }

  public static isWhiteBackground(): boolean {
    if (!this.site_details.bodyBackgroundColor ||
      this.site_details.bodyBackgroundColor == 'white' ||
      this.site_details.bodyBackgroundColor == '#fff' ||
      this.site_details.bodyBackgroundColor == '#ffffff')
      return true;
    else
      return false;
  }

  public static getBodyColorBackgroundJson(): any {
    return {'background-color': this.site_details.bodyBackgroundColor};
  }

  //Return white background if listing list type is airbnb
  public static getBodyColorBackgroundJsonSearchPage(): any {
    return {'background-color': this.site_details.bodyBackgroundColor};
  }

  public static updateColor(themeService: ThemeService) {
    const color: string = this.site_details.primaryColor; // I'M ASSUMING THE PICKER RETURNS IT AS A STRING LIKE '#333333'

    GlobalFields.theme.primary = this.site_details.primaryColor;
    themeService.setTheme(GlobalFields.theme);

    let myTags = document.getElementsByClassName('dynamic-primary-color');
    for (let i = 0; i < myTags.length; i++) {
      (myTags.item(i) as HTMLElement).style.color = color;
      // myTags[i].style.backgroundColor = color;
      // UPDATE ANYTHING ELSE YOU WANT
    }
  }

  public static setCustomFont(themeService: ThemeService) {
    if (this.site_details.customGoogleFontFamily)
      themeService.setGlobalFont(this.site_details.customGoogleFontFamily);
    else
      themeService.setGlobalFont('Didact Gothic');
  }


  public static duplicateObj(obj: any) {
    return JSON.parse(JSON.stringify(obj));
  }


  public static async openAlert(alertController: AlertController, header?: string, subHeader?: string, msg?: string) {
    const alert = await alertController.create({
      header: 'Error',
      subHeader: 'Error on your server',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }


  public static async openSuccessAlert(alertController: AlertController, header?: string, subHeader?: string, msg?: string, btnMsg?: string) {
    const alert = await alertController.create({
      header: header,
      subHeader: subHeader,
      message: msg,
      buttons: [btnMsg]
    });

    await alert.present();
  }

  public static getLanguageLayout() {

    const language = GlobalFields.languages.find(l => l.isChecked);
    if (language) {
      if (language.flag == 'sa' || language.flag == 'il')
        return 'rtl';
      else
        return 'ltr';
    }
  }


  public static getOnlyTimeFromDate(time?: string) {
    const t1 = time.split('T');
    console.log(t1);
    if (t1 && t1.length > 1) { //the format is 2020-09-01T07:00:54.821-00:00
      const t2 = t1[1].split(':');
      if (t2.length > 1) {
        const hr = t2[0];
        const mm = t2[1];
        console.log(hr + ':' + mm);
        return hr + ':' + mm;
      }
    } else if (t1 && t1.length == 1) { //the format is 18:00
      const t2 = t1[0].split(':');
      if (t2.length > 1) {
        const hr = t2[0];
        const mm = t2[1];
        console.log(hr + ':' + mm);
        return hr + ':' + mm;
      }
    }
  }

}
