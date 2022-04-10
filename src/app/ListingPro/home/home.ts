import {Component, ComponentRef} from '@angular/core';
import {ListingPage} from '../../MyListing/listingPage/listingPage';
import {Listing} from '../../entities/myListing/listing';
import {Post} from '../../entities/post';
import {Constants} from '../../Constants';
import {GlobalFields} from '../../GlobalFields';
import {AlertController, MenuController, ModalController, NavController, Platform, PopoverController} from '@ionic/angular';
import {ModalPost} from '../../Shared/modalPost/modalPost';
import {Service} from '../../services/Service';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {
  NativeGeocoder
} from '@ionic-native/native-geocoder/ngx';
import {DomSanitizer} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
import {LocationService} from '../../services/LocationService';
import {ImageAttribute} from 'ionic-image-loader';
import {AppVersion} from '@ionic-native/app-version/ngx';
import {GlobalFieldsMyListing} from '../../GlobalFieldsMyListing';
import {ModalGenericSearch_LP} from './modalGenericSearch/modal-generic-search_LP';
import {MyListingService} from '../../services/MyListingService';
import {ListingProService} from '../../services/ListingProService';
import {Listing_LP, SearchResult_LP} from '../../entities/listingPro/Listing_LP';
import {GlobalFieldsListingPro} from '../../GlobalFieldsListingPro';
import {ListingCategory} from '../../entities/listingCategory';
import {CategoriesList_LP} from '../categoriesList/categoriesList_LP';


// DOC: https://ionicframework.com/docs/building/running

// to build the apk: sudo ionic cordova build --release android


// per testare app: https://cordova-plugin-fcm.appspot.com/

// PER GENERARE APK: sudo cordova build android --release


// FIREBASE EXAMPLE -> https://medium.com/factory-mind/angular-firebase-typescript-step-by-step-tutorial-2ef887fc7d71

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.scss']
})
export class HomePage {

  Constants = Constants;
  GlobalFields = GlobalFields;
  GlobalFieldsMyListing = GlobalFieldsMyListing;
  GlobalFieldsListingPro = GlobalFieldsListingPro;
  post = ListingPage;

  site_details: any;
  recentListings: Listing_LP[];

  categoryToShow: ListingCategory[] = [];
  byCategoryListings: Listing_LP[][] = [];

  resultSearchListings: Listing_LP[] = [];
  posts: Post[] = [];

  oldScollPostion = 0;
  headerClass = '';

  slideOpts1 = {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true
  };
  slideOptsLess1 = {
    slidesPerView: 1.4,
    spaceBetween: 10,
    centeredSlides: true
  };

  slideOpts2 = {
    slidesPerView: 1.3

  };

  slideOpts3 = {
    slidesPerView: 2.8

  };

  loadingByCategories = true;

  public static popover = undefined;


  waitSearch = true;

  appName: string;

  constructor(public service: Service, public lpservice: ListingProService, public mlservice: MyListingService, public locationService: LocationService, public modalCtrl: ModalController, public popoverController: PopoverController,
              public navController: NavController, public statusBar: StatusBar, public platform: Platform, private nativeGeocoder: NativeGeocoder,
              private _sanitizer: DomSanitizer, public translate: TranslateService, public alertController: AlertController, private menu: MenuController,
              public appVersion: AppVersion) {


    /*  this.imgCacheService.store("http://www.like-agency.it/media/k2/items/cache/d6086de322f98f66cc694f32ea284557_XL.jpg").then( res =>{
          console.log(res);
      });
      this.imgCacheService.restore("http://www.like-agency.it/media/k2/items/cache/d6086de322f98f66cc694f32ea284557_XL.jpg");

*/


    this.appVersion.getAppName().then(value => {
      this.appName = value;
    }).catch(err => {
      this.appName = 'Custom ListingPro App';
    });

    lpservice.getRecentListings().subscribe((data: SearchResult_LP) => {
        this.recentListings = data.data;
        console.log(this.recentListings);
    });

    /* Get the listing by category for the home section */
    this.byCategoryListings = [];

    /* Show only the first 5 categories */
    console.log(GlobalFieldsListingPro.listingCategories)

    const goodCategories: ListingCategory[] = [];

    if(GlobalFieldsListingPro.listingCategories && GlobalFieldsListingPro.listingCategories.length>0){

      GlobalFieldsListingPro.listingCategories.forEach(cat =>{
        if(cat.count>0)
          goodCategories.push(cat);
      })

      const max = goodCategories.length<5 ? goodCategories.length -1 : 5;

      console.log(goodCategories)
      console.log(max)

      for (let i = 0; i < max; i++) {
        this.categoryToShow.push(goodCategories[i]);
        this.byCategoryListings.push([]);
        lpservice.getListingsFilteredByCategory(goodCategories[i].term_id)
            .subscribe((data: SearchResult_LP) => {
              this.byCategoryListings[i]=data.data;
              console.log(this.byCategoryListings)
              this.loadingByCategories = false; //The first arriving makes the loading off
            });
      }
      console.log(this.categoryToShow)

    }else {
      this.loadingByCategories = false;
    }

    service.getRecentPosts()
      .subscribe((data: any) => {
        this.posts = data;
        this.posts.forEach(post => {
          service.getMediaById(post.featured_media)
            .subscribe((data: any) => {
                console.log('url: ' + data.source_url);
                if (data) {
                  post.img_cover = data.source_url;
                }
              }
            );
        });
      });

    this.GlobalFields.getMyAddress(this.service, this.locationService, this.nativeGeocoder);

    GlobalFieldsListingPro.clearFilters();

  }

  ionViewDidEnter() {
    /* if (GlobalFields.site_details.homeType == 2)
         this.service.setTransparentBackgroundStatusBar();
     else*/
    this.service.setWhiteBlackBackgroundStatusBar();

   /* this.subscription = this.platform.backButton.subscribe(()=>{
      navigator['app'].exitApp();
    });*/
  }


  async openModalSearch() {

    const modal = await this.modalCtrl.create({
      component: ModalGenericSearch_LP,
    });
    return await modal.present();
  }

  async openModalPost(post: Post) {

    const modal = await this.modalCtrl.create({
      component: ModalPost,
      componentProps: {post: post}
    });
    return await modal.present();
  }

  /*
      openModalListing(listing: Listing_LP) {

          this.service.selectedListing = listing;

          const listingModal = this.modalCtrl.create(ListingPage_LP);
          listingModal.present();

          //  this.navCtrl.push(ListingPage_LP);

      }

  */


  getListingDetails(listing: Listing_LP) {
    this.GlobalFields.loadingSoft = true;
    this.mlservice.getListingDetailsById(listing.ID).subscribe((data: Listing) => {
      GlobalFieldsListingPro.selectedListing = data;
      this.openModalListing();

    }, error => {
      console.log(error);
      let msg = '';
      if (error && error.error)
        msg = error.error.message;
      else if (error)
        msg = error.message;
      this.GlobalFields.openAlert(this.alertController, 'Error', 'Error on web server', msg);
      this.GlobalFields.loadingSoft = false;
    });
  }


  async openModalListing() {
    const listingModal = await this.modalCtrl.create({
      component: ListingPage,
    });
    return await listingModal.present();

    //  this.navCtrl.push(ListingPage_LP);

  }

  isFeatured(listing: Listing) {
    /* if (!listing.listing_data._featured)
          return '';
      if (listing.listing_data._featured == '1')
          return 'featured';
      else */
    return '';
  }

  /*
    async openModalListing(listing: Listing_LP) {
      const modal = await this.modalCtrl.create(ListingPage_LP,{ listing: listing });
      return await modal.present();
    }
  */


  getRandomRegionBack(i: number) {
    let a = Math.round(i % 3) + 1;

    return '../../assets/imgs/r_' + a + '.jpg';

  }



  searchByCat(cat_name: any) {
    GlobalFieldsListingPro.clearFilters();
    GlobalFieldsListingPro.filtersSearch.categories = cat_name;
    GlobalFieldsListingPro.getFilteredListingFirstTime(this.lpservice, this.locationService, true);
    this.navController.navigateForward('tabs/' + GlobalFields.site_details.themeEnabled + '/search');
  }

  searchByBasicSearchFilter() {
    GlobalFieldsListingPro.getFilteredListingFirstTime(this.lpservice, this.locationService, true);
    GlobalFieldsListingPro.basicSearch = true;
    this.navController.navigateForward('tabs/' + GlobalFields.site_details.themeEnabled + '/search');
  }

  toStringCategories(): string {
    if (!GlobalFieldsMyListing.filtersSearch.categories || GlobalFieldsMyListing.filtersSearch.categories.length == 0)
      return "";
    if(Array.isArray(GlobalFieldsMyListing.filtersSearch.categories)) {
      if (GlobalFieldsMyListing.filtersSearch.categories.length > 3)
        return GlobalFieldsMyListing.filtersSearch.categories.length + " selected";
      else
        return GlobalFieldsMyListing.filtersSearch.categories.toString();
    }else
      return GlobalFieldsMyListing.filtersSearch.categories;

  }

  isSelected(id: any) {
    if (GlobalFieldsMyListing.filtersSearch.selectedType == id)
      return ' selectedtypesListHorizontalWhite';
    else
      return '';
  }

  selectListingType() {
    GlobalFieldsMyListing.clearFilters();
    console.log(GlobalFieldsMyListing.filtersSearch.selectedType);
    GlobalFieldsMyListing.selectListingTypeDetail();

  }


  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient(to top, rgba(255, 255, 255, 0.17), rgba(23, 23, 23, 0.38)), url(${image})`);
  }

  getMyAddress() {
    GlobalFieldsListingPro.filtersSearch.location = GlobalFields.address;
  }


  searchNearMe() {
    console.log(this.GlobalFields.address);
    GlobalFieldsListingPro.filtersSearch.location = this.GlobalFields.address;
    // set default value to the proximity range
    GlobalFieldsListingPro.filtersSearch.range = GlobalFieldsListingPro.listingTypeDetail.filter_status.enable_readious_search_filter_default;
    GlobalFieldsListingPro.getFilteredListingFirstTime(this.lpservice, this.locationService, true);
    this.navController.navigateForward('tabs/' + GlobalFields.site_details.themeEnabled + '/search');
  }


  toStringTaxonomies(key: string): string {
    let tax = GlobalFieldsMyListing.getCustomTaxonomiesByKey(key);
    if (tax) {
      return tax.selected;
    }

  }

  toStringCustomFields(key: string): string {
    let tax = GlobalFieldsMyListing.getCustomFieldsByKey(key);
    if (tax) {
      /*  if (!tax.selected || tax.selected.length == 0)
            return "";
        else if (tax.selected.length > 3)
            return tax.selected.length + " selected";
        else {*/
      return tax.selected;
      // }
    }

  }

  toStringRegions(): string {

    if (!GlobalFieldsMyListing.filtersSearch.region)
      return '';
    return GlobalFieldsMyListing.filtersSearch.region;

  }


  onScrollHideHeader(event: CustomEvent) {
    // console.log(event);
    if (event.detail.scrollTop > 50 && !this.isElementInViewPort()) {
      if (this.oldScollPostion < event.detail.scrollTop)
        this.headerClass = 'headerHidden';
      if (this.oldScollPostion > event.detail.scrollTop)
        this.headerClass = 'headerShown';
    }
    this.oldScollPostion = event.detail.scrollTop;
  }

  //This function just check if element is fully in vertical viewport or not
  isElementInViewPort() {
    let el = document.getElementById('check-point');
    if (el) {
      const rect = el.getBoundingClientRect();
      return rect.bottom <= window.innerHeight;
    }
    return true;
  }


  getImgCachedClass(class_to_add: string): ImageAttribute[] {
    let class_name = 'shadedImgCached ' + class_to_add;

    const imageAttributes: ImageAttribute[] = [];
    imageAttributes.push({
      element: 'class',
      value: class_name
    });


    return imageAttributes;
  }

  getBackgroundBasedOnHomeType() {
    if (GlobalFields.site_details.homeType == 3)
      return GlobalFields.getBodyColorBackgroundJson();
  }

  openSideMenu() {
    this.menu.enable(true, 'appMenu');
  }
}


