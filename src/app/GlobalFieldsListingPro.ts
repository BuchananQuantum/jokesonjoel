import {Dialogs} from '@ionic-native/dialogs/ngx';
import {AlertController, Platform} from '@ionic/angular';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {NativeGeocoder} from '@ionic-native/native-geocoder/ngx';

import {TranslateService} from '@ngx-translate/core';

import {ThemeService} from './services/theme.service';
import {LocationService} from './services/LocationService';
import {GlobalFields} from './GlobalFields';
import {Router} from '@angular/router';
import {ListingProService} from './services/ListingProService';
import {ListingCategory} from './entities/listingCategory';
import {Service} from './services/Service';
import {ListingTypeDetail_LP} from './entities/listingPro/ListingTypeDetail_LP';
import {FiltersSearch_LP} from './entities/listingPro/FiltersSearch_LP';
import {Listing_LP, Review_LP, SearchResult_LP} from './entities/listingPro/Listing_LP';

export class GlobalFieldsListingPro {

  public static listingCategories: ListingCategory[] = [];
  public static listingTypeDetail: ListingTypeDetail_LP;
  public static regions: ListingCategory[] = [];
  public static tags: ListingCategory[] = [];
  public static features: ListingCategory[] = [];
  public static bookmarkedListings: Listing_LP[];

  public static firstLoading: boolean = true;

  //Selected things
  public static selectedListing: Listing_LP;

  //filters, selected type part and other selected listings data
  public static filtersSearch: FiltersSearch_LP;
  public static filteredListings: Listing_LP[] = []; //Result of the search
  public static basicSearch: boolean = false; //Says if the search comes from Home or General search to avoid do the search again when opening the search page


  //Add form fields and listing to be edited
  public static listingToEdit: Listing_LP;
  public static addForm: FiltersSearch_LP;


  //Reviews
  public static customRatingsSelected: { key: string, value: any }[] = [];
  public static oldReview: Review_LP = undefined; //Used to temporary save the review


  public static init(service: Service, lpservice: ListingProService, dialogs: Dialogs, platform: Platform, geolocation: Geolocation,
                     nativeGeocoder: NativeGeocoder, alertController: AlertController, translate: TranslateService,
                     themeService: ThemeService, locationService: LocationService, router: Router) {

    console.log('fistLoading');

    this.firstLoading = true;

    // Concatenated calls
    GlobalFieldsListingPro.filtersSearch = new FiltersSearch_LP();

    let goodAPIs = 0;
    /*setTimeout(() => {
      if (goodAPIs < 2) {
        GlobalFields.errorIni = true;
        GlobalFields.errorString = 'Timeout reached. Check your internet connection or the website availability.';
      }

    }, 20000);*/

    // call 1
    lpservice.getAllCategoriesListings()
      .subscribe((data: any) => {
        this.listingCategories = data;

        console.log('getAllCategoriesListings(listingpro)');

        goodAPIs++;
        GlobalFieldsListingPro.endOfCalls(goodAPIs, geolocation, nativeGeocoder, alertController, service, locationService, router, translate);

      }, err => {
        GlobalFields.errorIni = true;
        GlobalFields.errorString = err.message;
        console.log(err);
      });

    // call 2
    lpservice.getAllTypeDetails()
      .subscribe((data: any) => {
        this.listingTypeDetail = data;
        console.log(this.listingTypeDetail);

        goodAPIs++;
        GlobalFieldsListingPro.endOfCalls(goodAPIs, geolocation, nativeGeocoder, alertController, service, locationService, router, translate);
      });

    /*
      for (var key in data) {
          let opts = data[key];
          this.filtersSearch.customTaxonomiesDropdownKeysOptions.push({key: key, options: opts, selected: []});
      } */

    if (!platform.is('mobileweb')) {
      console.log('non è browser');
      console.log(platform);
      /*dialogs.alert('Please wait')
          .then(() => console.log('Dialog dismissed'))
          .catch(e => console.log('Error displaying dialog', e));
          */
    }

    // call 3 (No blocking)
    lpservice.getAllRegionsListings()
      .subscribe((data: any) => {
        this.regions = data;
        console.log('getAllRegions(listingpro)');

      }, err => {
        GlobalFields.errorIni = true;
        GlobalFields.errorString = err.message;
        console.log(err);
      });

    // call 4 (No blocking)
    lpservice.getAllTagsListings()
      .subscribe((data: any) => {
        this.tags = data;

      }, err => {
        GlobalFields.errorIni = true;
        GlobalFields.errorString = err.message;
        console.log(err);
      });

    // call 5 (No blocking)
    lpservice.getAllFeaturesListings()
      .subscribe((data: any) => {
        this.features = data;

      }, err => {
        GlobalFields.errorIni = true;
        GlobalFields.errorString = err.message;
        console.log(err);
      });

  }

  public static endOfCalls(goodAPIs: number, geolocation, nativeGeocoder, alertController, service, locationService, router: Router, translate: TranslateService) {
    if (goodAPIs == 2) {
      // fine
      GlobalFields.getLocation(geolocation, nativeGeocoder, alertController, service, locationService);
      service.getProfileFromStorage();
      console.log('end firstLoading LP');

      this.firstLoading = false;
      GlobalFields.loadingHard = false;


      router.navigateByUrl('tabs/' + GlobalFields.site_details.themeEnabled + '/home');

      translate.setDefaultLang('gb');
      GlobalFields.setLang(GlobalFields.site_details.language, translate);

    }
  }


  public static clearFilters() {

    //clear all but not the location
    this.filtersSearch.skeyword = '';
    this.filtersSearch.categories = undefined;
    this.filtersSearch.location = undefined;
    this.filtersSearch.locations = undefined;
    this.filtersSearch.price_status = undefined;
    this.filtersSearch.range = GlobalFieldsListingPro.listingTypeDetail.filter_status.enable_readious_search_filter_default;
    this.filtersSearch.nearMe = false;
    this.filtersSearch.openNow = false;
    this.filtersSearch.features = [];

  }

  //means the page must be the first
  public static getFilteredListingFirstTime(service: ListingProService, locationService: LocationService, stats?: boolean) {
    this.filteredListings = undefined;
    this.filtersSearch.currentPage = 0;
    this.filtersSearch.listingsCount = undefined;

    if (this.filtersSearch.location) { //address
      if (GlobalFields.site_details.mapType == 1) { //Google Maps
        locationService.getMyLatLongFromGoogle(this.filtersSearch.location).subscribe((d: any) => {  //traduco indirizzo
          let data = d.data ? d.data : d;
          if (stats)
            this.filtersSearch.listingsCount = d.count;
          if (data && data.results && data.results.length > 0 && data.results[0].geometry && data.results[0].geometry.location) {
            this.filtersSearch.lat = data.results[0].geometry.location.lat;
            this.filtersSearch.lng = data.results[0].geometry.location.lng;
          }
          console.log('Get listings near lat long gmap ' + this.filtersSearch.lat + ';' + this.filtersSearch.lng);
          this.doSearch(service, stats);
        });
      } else { //Open Street Maps
        locationService.getLatLongFromOpenMaps(this.filtersSearch.location).subscribe((data: any[]) => {
          console.log(data);
          if (data && data.length > 0) {
            this.filtersSearch.lat = parseFloat(data[0].lat);
            this.filtersSearch.lng = parseFloat(data[0].lon);
          }
          console.log('Get listings near lat long openstreet ' + this.filtersSearch.lat + ';' + this.filtersSearch.lng);
          this.doSearch(service, stats);
        });
      }
    } else {
      this.doSearch(service, stats);
    }
  }

  static doSearch(service: ListingProService, stats?: boolean) {
    service.getFilteredListings()
      .subscribe((res: SearchResult_LP) => {
        if (res) {
          this.filtersSearch.listingsCount = res.listingsCount;
          this.filtersSearch.pageCount = res.pageCount;
          this.filtersSearch.currentPage = res.pageNumber;

          if (this.filtersSearch.currentPage == 0) {
            this.filteredListings = [];
            // this.filtersSearch.noMorePage = false;
          }

          /*if (this.filteredListings.length < 10 || data.length == 0)
            this.filtersSearch.noMorePage = true;*/

          this.filteredListings = this.filteredListings.concat(res.data);
        } else
          this.filteredListings = [];
      });
  }


}
