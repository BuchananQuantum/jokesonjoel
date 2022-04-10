import {Component} from '@angular/core';
import {NavController, Platform, PopoverController} from '@ionic/angular';
import {Listing} from '../../entities/myListing/listing';
import {GlobalFields} from '../../GlobalFields';
import {GlobalFieldsMyListing} from '../../GlobalFieldsMyListing';
import {Constants} from '../../Constants';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {ModalController} from '@ionic/angular';
import {CallNumber} from '@ionic-native/call-number/ngx';
import {LaunchNavigator} from '@ionic-native/launch-navigator/ngx';
import {Service} from '../../services/Service';

import {SocialSharing} from '@ionic-native/social-sharing/ngx';


import 'hammerjs';
import {TranslateService} from '@ngx-translate/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ImageAttribute} from 'ionic-image-loader';

import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {WorkHoursDay} from '../../entities/myListing/FiltersSearch_ML';
import {MyListingService} from '../../services/MyListingService';
import {PopoverRatings} from '../../MyListing/listingPage/popoverRatings/popoverRatings';
import {PopoverImg} from '../../Shared/popoverImg/popoverImg';
import {ModalWriteReview} from '../../MyListing/listingPage/modalWriteReview/modalWriteReview';
import {GlobalFieldsListingPro} from '../../GlobalFieldsListingPro';
import {Listing_LP, SearchResult_LP} from '../../entities/listingPro/Listing_LP';
import {ListingProService} from '../../services/ListingProService';
import {ModalWriteReview_LP} from './modalWriteReview/modalWriteReview_LP';


@Component({
  selector: 'page-listing',
  templateUrl: 'listing-page_LP.component.html',
  styleUrls: ['listing-page_LP.component.scss']

})
export class ListingPage_LP {

  listing: Listing;

  custFields: { key: string, label: string, value: string }[] = [];
  custRelatedListings: { key: string, label: string, listings: Listing[] }[] = [];

  GlobalFields = GlobalFields;
  GlobalFieldsMyListing = GlobalFieldsMyListing;
  GlobalFieldsListingPro = GlobalFieldsListingPro;
  Constants = Constants;

  iniFinished = false;

  daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  daysOfTheWeekLabel = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  lead: any = {};

  youtubeUrl;

  related_ads_listing: Listing_LP[];
  related_recent_listing: Listing_LP[];

  slideOpts = {
    slidesPerView: 1
  };

  lead_sent;
  lead_err;

  selectedAccoIndex=0;

  constructor(public service: Service, public mlservice: MyListingService, public modalCtrl: ModalController,
              private statusBar: StatusBar, private callNumber: CallNumber, private platform: Platform,
              private launchNavigator: LaunchNavigator, private socialSharing: SocialSharing,
              public translate: TranslateService, public popoverController: PopoverController,
              private _sanitizer: DomSanitizer, public navController: NavController, public inAppBrowser: InAppBrowser,
              private lpservice: ListingProService) {
    this.ini();
  }

  ini() {
    console.log(GlobalFieldsListingPro.selectedListing);


    // this.getCategories();
    this.getCustomFields();
    // this.getCustomTaxonomies();

    //  this.existCustomFieldToBeShown = this.ifExistCustomFieldTaxToBeShown();
    this.iniFinished = true;
    this.GlobalFields.loadingSoft = false;


    this.lpservice.getRelatedListings().subscribe((data: { ads_listings: Listing_LP[], recent_listings: Listing_LP[] }) => {
      if (data)
        this.related_ads_listing = data.ads_listings;
      this.related_recent_listing = data.recent_listings;
    });


    //this.mlservice.storeRecentViewedListing(GlobalFieldsMyListing.selectedListing);


    this.translate.get('DAY_MON').subscribe(msg1 => {
      this.translate.get('DAY_TUE').subscribe(msg2 => {
        this.translate.get('DAY_WED').subscribe(msg3 => {
          this.translate.get('DAY_THU').subscribe(msg4 => {
            this.translate.get('DAY_FRI').subscribe(msg5 => {
              this.translate.get('DAY_SAT').subscribe(msg6 => {
                this.translate.get('DAY_SUN').subscribe(msg7 => {
                  this.daysOfTheWeekLabel = [msg1, msg2, msg3, msg4, msg5, msg6, msg7];

                });
              });
            });
          });
        });
      });
    });
  }

  getCustomFields() {

    if (GlobalFieldsListingPro.selectedListing.post_meta) {
      let price_value = '';
      if (GlobalFieldsListingPro.selectedListing.post_meta.price_status) {
        switch (GlobalFieldsListingPro.selectedListing.post_meta.price_status) {
          case 'inexpensive':
            price_value += GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol;
            break;
          case 'moderate':
            price_value += GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol;
            price_value += GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol;
            break;
          case 'pricey':
            price_value += GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol;
            price_value += GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol;
            price_value += GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol;
            break;
          case 'ultra_high_end':
            price_value += GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol;
            price_value += GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol;
            price_value += GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol;
            price_value += GlobalFieldsListingPro.listingTypeDetail.listing_pricerange_symbol;
            break;
        }
      }
      if (GlobalFieldsListingPro.selectedListing.post_meta.list_price)
        price_value += ' ' + GlobalFieldsListingPro.selectedListing.post_meta.list_price;
      if (price_value)
        this.custFields.push({key: 'price', value: price_value, label: 'Price'});
    }


    if (this.GlobalFieldsListingPro.listingTypeDetail.custom_fields && GlobalFieldsListingPro.selectedListing.post_custom_fields) {
      this.GlobalFieldsListingPro.listingTypeDetail.custom_fields.forEach(field => {
        if (GlobalFieldsListingPro.selectedListing.post_custom_fields[field.post_name])
          this.custFields.push({
            key: field.post_name,
            value: GlobalFieldsListingPro.selectedListing.post_custom_fields[field.post_name],
            label: field.post_title
          });
      });
    }

    console.log(this.custFields);
  }


  translateToArray() {
    if (GlobalFieldsMyListing.selectedListing.job_gallery) {
      let i = 1;
      let res = [];
      while (GlobalFieldsMyListing.selectedListing.job_gallery[i + '']) {
        res.push(GlobalFieldsMyListing.selectedListing.job_gallery[i + '']);
        i = i + 1;
      }
      GlobalFieldsMyListing.selectedListing.job_gallery = res;
      return;
    }
  }

  closeModal() {
    GlobalFieldsMyListing.selectedListing = undefined;
    //this.navCtrl.pop();
    this.modalCtrl.dismiss({});
  }


  getCustomField(key: string) {
    let res = GlobalFieldsMyListing.selectedListing['_' + key];
    if (!res)
      res = GlobalFieldsMyListing.selectedListing[key];
    return res;
  }

  fieldToBeShown(key: string) {
    /*
    let field = GlobalFieldsMyListing.selectedTypeDetail.case27_listing_type_fields[key];
    if (field && field.show_in_detail_view)
      return true;
    else
      false;*/
    return true;
  }

  isPresentCustomField(key: string) {
    let a = GlobalFieldsMyListing.selectedListing[key];
    let b = GlobalFieldsMyListing.selectedTypeDetail.case27_listing_type_fields[key.substr(1)];
    if (a != undefined && b != undefined)
      return true;
    else
      return false;
  }


  /*
    openModalGallery(index: number) {
      let photos = [];
      for (let media of {.listing_data._job_gallery) {
        photos.push({url: media});
      }
      let modal = this.modalCtrl.create(GalleryModal, {
        photos: photos,
        initialSlide: index
      });
      modal.present();
    }
  */

  async openModalGallery(index: number) {
    /* let photos = [];
     for (let media of this.listing.listing_data._job_gallery) {
         photos.push({url: media});
     }
     const modal = await this.modalCtrl.create({
             component: GalleryModal,
             componentProps: {
                 photos: photos,
                 initialSlide: index
             }
         });
     return await modal.present();
     */
  }


  getNiceString(s: string): string {
    let field = GlobalFieldsMyListing.selectedTypeDetail.case27_listing_type_fields[s];
    if (field)
      return field.label;
    else
      return '';
  }

  getCustomFieldFromListingType(s: string) {
    let field = GlobalFieldsMyListing.selectedTypeDetail.case27_listing_type_fields[s];
    return field;
  }

  generateArray(obj) {
    return Object.keys(obj).map((key) => {
      return {key: key, value: obj[key]};
    });
  }

  getStringFromArray(arr) {
    if (arr && Array.isArray(arr))
      return arr.join();
  }


  isHTML(str) {
    if (str && !Array.isArray(str)) {
      let a = document.createElement('div');
      a.innerHTML = str;

      for (let c = a.childNodes, i = c.length; i--;) {
        if (c[i].nodeType == 1) return true;
      }
    }
    return false;
  }

  isURL(str) {

    if (str && !Array.isArray(str)) {

      let pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
      return !!pattern.test(str);
    }
    return false;
  }


  isArray(str) {
    if (str && Array.isArray(str)) {
      return true;
    }
    return false;
  }

  isShortCode(str: string) {
    if (str && typeof str === 'string')
      return (str.includes('[') && str.includes(']'));
    else true;
  }

  getWorkingHours(day: any) {
    let res = '';
    if (day && day.open)
      day.entry_hours.forEach((d, i) => {
        res = res + d.from + ' - ' + d.to;
        if (i < day.entry_hours.length - 1)
          res = res + '<br>';
      });
    if (res != '')
      return res;
    else
      return '-';
  }

  getStartsHtml(rating: number): string[] {
    let num = rating;
    let res = [];
    let maxNumberStarts = 5;
    for (let i = 0; i < maxNumberStarts; i++) {
      if (num >= 1) {
        res.push('');
        num = num - 1;
      } else if (num > 0) {
        res.push('-half');
        num = 0;
      } else {
        res.push('-outline');
      }
    }
    return res;
  }

  getNumberFromString(s: string): number {
    return parseInt(s);
  }

  getCategories() {
    let res = [];
    if (GlobalFieldsMyListing.selectedListing.job_listing_category) {
      GlobalFieldsMyListing.selectedListing.job_listing_category.forEach(id => {
        let p = GlobalFieldsMyListing.getCategoryId(id);
        GlobalFieldsMyListing.listingCategories.forEach(cat => {
          if (cat.id == id) {
            res.push(cat);
          }
        });
      });
    }
    GlobalFieldsMyListing.selectedListing.job_listing_category = res;
  }


  getLinkIcon(net: string) {


    switch (net) {
      case 'Facebook' :
      case 'facebook' :
      case 'fb' : {
        return 'fab fa-facebook';
      }
      case 'Instagram' :
      case 'instagram' :
      case 'insta' : {
        return 'fab fa-instagram';
      }
      case 'Website' :
      case 'website' :
      case 'web' : {
        return 'fas fa-globe';
      }
      case 'Twitter' :
      case 'twitter' : {
        return 'fab fa-twitter';
      }
      case 'LinkedIn' :
      case 'linkedin' : {
        return 'fab fa-linkedin';
      }
      case 'Pinterest' :
      case 'pinterest' : {
        return 'fab fa-pinterest';
      }
      case 'YouTube' :
      case 'youtube' : {
        return 'fab fa-youtube';
      }
      case 'Google+' :
      case 'google': {
        return 'fab fa-google';
      }
      case 'Reddit' :
      case 'reddit': {
        return 'fab fa-reddit';
      }
      case 'Snapchat' :
      case 'snapchat': {
        return 'fab fa-snapchat';
      }
      case 'Tumblr' :
      case 'tumblr': {
        return 'fab fa-tumblr';
      }
      default :
        return 'fas fa-link';
    }
  }

  getLinkColor(net: string) {
    switch (net) {
      case 'Facebook' :
      case 'facebook' :
      case 'fb' : {
        return '#3B5998';
      }
      case 'Instagram' :
      case 'instagram' :
      case 'insta' : {
        return '#E1306C';
      }
      case 'Website' :
      case 'website' :
      case 'web' : {
        return '#499EFF';
      }
      case 'Twitter' :
      case 'twitter' : {
        return '#1dcaff';
      }
      case 'Pinterest' :
      case 'pinterest' : {
        return '#E60023';
      }
      case 'YouTube' :
      case 'youtube' : {
        return '#F44336';
      }
      case 'Google+' :
      case 'google': {
        return '#F44336';
      }
      case 'Reddit' :
      case 'reddit': {
        return '#ff4500';
      }
      case 'Snapchat' :
      case 'snapchat': {
        return '#FFEB3B';
      }
      case 'Tumblr' :
      case 'tumblr': {
        return '#34526f';
      }
      default :
        return '#499EFF';
    }
  }


  callNumberAction(number: string) {
    console.log('Call number ' + number);
    if (!this.platform.is('mobileweb')) //non è browser
    {
      this.callNumber.callNumber(this.clearSpaces(number) + '', true)
        .then(res => console.log('Launched dialer!', res))
        .catch(err => console.log('Error launching dialer', err));
    }
  }

  goToNavigatorAction(address: string) {
    console.log('Go to ' + address);
    if (!this.platform.is('mobileweb')) //non è browser
    {
      this.launchNavigator;
      this.launchNavigator.navigate(address)
        .then(
          success => console.log('Launched navigator'),
          error => console.log('Error launching navigator', error)
        );
    }
  }

  clearSpaces(s: string) {
    return s.replace(' ', '').replace(' ', '').replace(' ', '');
  }


  share() {
    console.log(GlobalFieldsListingPro.selectedListing.url);
    this.socialSharing.share('Check this link', '', '', GlobalFieldsListingPro.selectedListing.url).then(function () {
      console.log('Successful share');
    }).catch(function (error) {
      console.log('Error sharing:', error);
    });
  }

  getActionContainerClass(): string {
    if (GlobalFields.site_details.actionButtonStyle == '2')
      return 'fastBtnsContainer';
    else
      return 'fastBtnsContainerFull';
  }

  getActionLabelClass(): string {
    if (GlobalFields.site_details.actionButtonStyle == '2')
      return 'fastBtnLabel';
    else
      return 'fastBtnLabelWhite';
  }


  getCustomFieldTaxonomyOptionByKey(key: string, optID: any): string | any | any[] {
    /*   console.log(key);
       console.log(optID);
       console.log(GlobalFieldsMyListing.filtersSearch.customFieldsDropdownKeysOptions);
       console.log(GlobalFieldsMyListing.filtersSearch.customTaxonomiesDropdownKeysOptions);
   */
    //is a custom field ?
    let field = GlobalFieldsMyListing.filtersSearch.customFieldsDropdownKeysOptions.find(term => term.key == key);
    if (field && field.options) {
      let opt = field.options.find(temp => temp.term_id == optID);
      if (opt) //is not an array
        return opt.name;
      else if (Array.isArray(optID)) { //is an array
        let res = '';
        for (let i = 0; i < optID.length; i++) {
          let opt = field.options.find(temp => temp.term_id == optID[i]);
          if (opt) {
            if (i < optID.length - 1)
              res += opt.name + ', ';
            else
              res += opt.name;
          }
        }
        return res;
      } else if (optID.constructor === Object) {//is an object
        let res = '';
        for (let property in optID) {
          res += optID[property] + ' ';
        }
        return res;
      }
    }

    //is a taxonomy ?
    field = GlobalFieldsMyListing.filtersSearch.customTaxonomiesDropdownKeysOptions.find(term => term.key == key);
    if (field && field.options) {
      let opt = field.options.find(temp => temp.term_id == optID);
      if (opt) //is not an array
        return opt.name;
      else if (Array.isArray(optID)) { //is an array
        let res = '';
        for (let i = 0; i < optID.length; i++) {
          let opt = field.options.find(temp => temp.term_id == optID[i]);
          if (opt) {
            if (i < optID.length - 1)
              res += opt.name + ', ';
            else
              res += opt.name;
          }
        }
        return res;
      } else if (optID.constructor === Object) {//is an object
        let res = '';
        for (let property in optID) {
          res += optID[property] + ' ';
        }
        return res;
      }
    }

    return optID;
  }

  showContactInfo(): boolean {
    //if no data to show
    /*  if ((!GlobalFieldsMyListing.selectedListing || (!GlobalFieldsMyListing.selectedListing.job_email && !GlobalFieldsMyListing.selectedListing.job_phone &&
        !GlobalFieldsMyListing.selectedListing.job_location && !GlobalFieldsMyListing.selectedListing.links)))
        return false;*/

    if (this.GlobalFields.site_details.contactInfoChoice == '1') //show always
      return true;
    if (this.GlobalFields.site_details.contactInfoChoice == '3') //hide always
      return false;
    if (this.GlobalFields.site_details.contactInfoChoice == '2' && this.isClaimed()) //Show if claimed
      return true;
    else return false;
  }

  isClaimed(): boolean {
    if (GlobalFieldsListingPro.selectedListing.post_meta && GlobalFieldsListingPro.selectedListing.post_meta.claimed_section == 'claimed')
      return true;
    else return false;
  }

  async openRatingsPopover(ev: any, ratings: any) {

    const keys = Object.keys(ratings);

    GlobalFieldsListingPro.customRatingsSelected = [];

    if (keys)
      keys.forEach(key => {
        if (key != 'general_rating')
          GlobalFieldsListingPro.customRatingsSelected.push({key: key, value: ratings[key]});
      });

    const popover = await this.popoverController.create({
      component: PopoverRatings,
      cssClass: '',
      event: ev,
      translucent: true
    });
    return await popover.present();

  }


  async openImgPopover(url: string) {

    GlobalFields.selectedImg = url;

    const popover = await this.popoverController.create({
      component: PopoverImg,
      cssClass: 'popoverImg',
      translucent: true
    });
    return await popover.present();

  }


  getClassContainer() {
    if (this.GlobalFields.isWhiteBackground())
      return 'sectionContainer';
    else return 'sectionContainerNotWhiteBackground';

  }


  getBackground(listing: Listing_LP) {
    let image = '';
    if (listing && listing.gallery && listing.gallery.cover_image)
      image = listing.gallery.cover_image;
    else
      image = GlobalFields.site_details.placeholderImgUrl;
    return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }


  getBackgroundDarker(listing: Listing) {
    let image = '';

    if (listing.img_cover)
      image = listing.img_cover;
    if (!listing.img_cover && listing.job_cover)
      image = listing.job_cover;
    else if (!listing.img_cover)
      image = GlobalFields.site_details.placeholderImgUrl;
    return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient(to top, rgba(23, 23, 23, 0.52), rgba(23, 23, 23, 0.52)), url(${image})`);
  }

  getBackgroundDarkerCached(listing: Listing_LP) {
    let image = '';

    if (listing.gallery.cover_image)
      image = listing.gallery.cover_image;
    else
      image = GlobalFields.site_details.placeholderImgUrl;
    return image;
  }

  async writeReview() {

    GlobalFieldsListingPro.oldReview = this.youAlreadyReviewed();

    const modal = await this.modalCtrl.create({
      component: ModalWriteReview_LP,
    });
    modal.present();

    const {data} = await modal.onWillDismiss();
    this.ini();

  }

  checkIfFieldsMissing() {
    return GlobalFieldsListingPro.selectedListing.lead_gen.some(field =>
      field && field.required == '' && this.isVoidField(this.lead[field.name]));
  }

  isVoidField(field: any) {
    if (!field) return true;
    if (field == '') return true;
    return false;
  }

  sendLead() {
    this.GlobalFields.loadingSoft = true; //Loading;
    if (!this.checkIfFieldsMissing()) {
      this.lpservice.leadGen(this.lead, GlobalFieldsListingPro.selectedListing.ID, GlobalFieldsListingPro.selectedListing.post_author, GlobalFieldsListingPro.selectedListing.post_author)
        .subscribe((res: { errors?: any[], message?: string, success?: boolean }) => {
          this.GlobalFields.loadingSoft = false;
          if (res)
            if (res.success)
              this.lead_sent = true;
            else {
              this.lead_sent = false;
              this.lead_err = res.message;
            } else {
            this.lead_sent = false;
            this.lead_err = 'Error on server';
          }
        }, error => {
          this.GlobalFields.loadingSoft = false;
          this.lead_sent = 0;
          this.lead_err = 'Error on server';
        });
    }
  }

  goToLogin() {
    this.navController.navigateForward('tabs/menuPage');
    this.closeModal();
  }

  doBookmark() {
    GlobalFieldsListingPro.selectedListing.isBookmarked = true;
    GlobalFields.loadingSoft = true;
    this.lpservice.doBookmark(GlobalFieldsListingPro.selectedListing.ID).subscribe((data: any) => {
      GlobalFields.loadingSoft = false;
      this.lpservice.getBookmarkedListings().subscribe((data: any) => {
        GlobalFieldsListingPro.bookmarkedListings = data;
      });

    }, err => {
      GlobalFields.loadingSoft = false;
      this.service.refreshCookie();
    });
  }

  undoBookmark() {
    GlobalFieldsListingPro.selectedListing.isBookmarked = false;
    GlobalFields.loadingSoft = true;
    this.lpservice.undoBookmark(GlobalFieldsListingPro.selectedListing.ID).subscribe((data: any) => {
      GlobalFields.loadingSoft = false;
      this.lpservice.getBookmarkedListings().subscribe((data: any) => {
        GlobalFieldsListingPro.bookmarkedListings = data;
      });

    }, err => {
      GlobalFields.loadingSoft = false;
      this.service.refreshCookie();
    });
  }


  getTruncatedDecimal(n: any) {
    let num = parseFloat(n);
    return num.toFixed(1);
  }

  youAlreadyReviewed() {
    let rev = undefined;
    if (GlobalFieldsListingPro.selectedListing.reviews && GlobalFieldsListingPro.selectedListing.reviews.reviews)
      rev = GlobalFieldsListingPro.selectedListing.reviews.reviews.find(comm => comm.post_author == this.GlobalFields.profile.user.id + '');
    return rev;
  }

  getImgCachedClass(class_to_add: string): ImageAttribute[] {
    let class_name = ' ' + class_to_add;

    const imageAttributes: ImageAttribute[] = [];
    imageAttributes.push({
      element: 'class',
      value: class_name
    });


    return imageAttributes;
  }


  goToMessage() {
    this.GlobalFields.msgToOwner = GlobalFieldsMyListing.selectedListing.author;
    this.closeModal();
    this.navController.navigateForward('tabs/' + GlobalFields.site_details.themeEnabled + '/messages');
  }


  openLink(url: string) {
    console.log(url);
    const browser = this.inAppBrowser.create(url, '_system');


    // browser.close();
  }


  getPrefixIfExist(field: { key: string, value: string, show_in_detail_view?: boolean }) {
    let res = '';
    if (GlobalFieldsMyListing.selectedTypeDetail.case27_listing_type_single_page_options && GlobalFieldsMyListing.selectedTypeDetail.case27_listing_type_single_page_options.cover_details && GlobalFieldsMyListing.selectedTypeDetail.case27_listing_type_single_page_options.cover_details.length > 0) {
      GlobalFieldsMyListing.selectedTypeDetail.case27_listing_type_single_page_options.cover_details.forEach(obj => {
        if (obj.field == field.key)
          res = obj.prefix;
      });
    }
    return res;
  }

  getSuffixIfExist(field: { key: string, value: string, show_in_detail_view?: boolean }) {
    let res = '';
    if (GlobalFieldsMyListing.selectedTypeDetail.case27_listing_type_single_page_options && GlobalFieldsMyListing.selectedTypeDetail.case27_listing_type_single_page_options.cover_details && GlobalFieldsMyListing.selectedTypeDetail.case27_listing_type_single_page_options.cover_details.length > 0) {
      GlobalFieldsMyListing.selectedTypeDetail.case27_listing_type_single_page_options.cover_details.forEach(obj => {
        if (obj.field == field.key)
          res = obj.suffix;
      });
    }
    return res;
  }

  checkIfHasPackageToBeShown(_key: string): boolean {
    const key = _key.replace('_', '');
    const field = GlobalFieldsMyListing.selectedTypeDetail.case27_listing_type_fields[key];
    //    conditions?: {key?: string, compare?: string, value?: string}[];
    if (field) {
      if (!field.conditions) return true;
      if (field.conditions.length == 0) return true;

      if (
        field.conditions.some(cond => {
          return cond.some(c => {
            if (c.key == '__listing_package' && c.compare == '==' &&
              (!c.value || c.value == '' || c.value == GlobalFieldsMyListing.selectedListing.package_id)
            )
              return true;
            else return false;
          });

        })
      )
        return true;
    }
    return false;
  }


  getSanifiedUrl(url: string) {
    if (url && url.includes('youtube') && url.split('?').length > 0) {
      const r_url = 'https://youtube.com/embed/' + url.split('?')[1].replace('v=', '');
      console.log(r_url);
      return this._sanitizer.bypassSecurityTrustResourceUrl(r_url);
    }
  }

  hasMultipleRatings(ratings) {
    const keys = Object.keys(ratings);
    if (keys && keys.length > 1)
      return true;
    else
      return false;
  }

  selectFAQIndex(index:number){
    this.selectedAccoIndex = this.selectedAccoIndex==index ? undefined : index;
  }
}
