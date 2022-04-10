import {FiltersSearch_ML} from './entities/myListing/FiltersSearch_ML';
import {Dialogs} from '@ionic-native/dialogs/ngx';
import {AlertController, Platform} from '@ionic/angular';
import {Service} from './services/Service';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {NativeGeocoder} from '@ionic-native/native-geocoder/ngx';

import {TranslateService} from '@ngx-translate/core';

import {ThemeService} from './services/theme.service';
import {LocationService} from './services/LocationService';
import {GlobalFields} from './GlobalFields';
import {Router} from '@angular/router';
import {ListingTypeDetail} from './entities/myListing/listingTypeDetail';
import {ListingCategory} from './entities/listingCategory';
import {Listing} from './entities/myListing/listing';
import {MyListingService} from './services/MyListingService';

export class GlobalFieldsMyListing {

  public static listingTypesDetails: ListingTypeDetail[] = [];
  public static listingTags: ListingCategory[] = [];
  public static listingCategories: ListingCategory[] = [];
  public static regions: ListingCategory[] = [];

  public static firstLoading:boolean = true;

  //Selected things
  public static selectedListing: Listing;
  public static selectedTypeDetail: ListingTypeDetail;

  public static filteredListings: Listing[] = []; //Result of the search

  public static recentViewedListings: Listing[] = [];

  //filters, selected type part and other selected listings data
  public static filtersSearch: FiltersSearch_ML;
  public static searchByStringListings: Listing[] = [];
  public static basicSearch: boolean; //Used to avoid to replace the basic search when clicling on search home the search tab is opened
  public static searchString = '';
  public static oldSearchString = '';

  //Reviews
  public static customRatingsSelected: { key: string, value: any }[] = [];
  public static oldReview: any = undefined; //Used to temporary save the review


  //Add form fields and listing to be edited
  public static listingToEdit: Listing;
  public static addForm: FiltersSearch_ML;
  public static listingCustomTaxonomies: any;
  public static listingCustomFieldKeys: string[];





  public static init(service: Service, mlservice: MyListingService, dialogs: Dialogs, platform: Platform, geolocation: Geolocation,
                     nativeGeocoder: NativeGeocoder, alertController: AlertController, translate: TranslateService,
                     themeService: ThemeService, locationService: LocationService, router: Router) {

    console.log('fistLoading');
    this.firstLoading = true;

    // Concatenated calls
    this.filtersSearch = new FiltersSearch_ML();

    let goodAPIs = 0;
    setTimeout(() => {
      if (goodAPIs < 2) {
        GlobalFields.errorIni = true;
        GlobalFields.errorString = 'Timeout reached. Check your internet connection or the website availability.';
      }

    }, 20000);

    // call 1
    mlservice.getAllCategoriesListings()
      .subscribe((data: any) => {
        this.listingCategories = data;

        console.log('getAllCategoriesListings');

         goodAPIs++;
         GlobalFieldsMyListing.endOfCalls(goodAPIs, geolocation, nativeGeocoder, alertController, service, locationService, router, translate);

      }, err => {
        GlobalFields.errorIni = true; GlobalFields.errorString = err.message; console.log(err)
      });


    // call 2
    mlservice.getAllTypeDetails()
      .subscribe((data: any) => {
        this.listingTypesDetails = data;
        for (const type of this.listingTypesDetails) {
          if (type.featured_media != 0) {
            service.getMediaById(type.featured_media)
              .subscribe((data: any) => {
                  console.log('url: ' + data.source_url);
                  if (data) {
                    type.img_cover = data.source_url;
                  }
                }
              );
          }
        }
        this.filtersSearch.selectedType = this.listingTypesDetails[0].ID;
        this.selectListingTypeDetail();

        console.log(this.listingCustomFieldKeys);

        for (var key in data) {
          let opts = data[key];
          this.filtersSearch.customTaxonomiesDropdownKeysOptions.push({key: key, options: opts, selected: []});
        }


        goodAPIs++;
        this.endOfCalls(goodAPIs, geolocation, nativeGeocoder, alertController, service, locationService, router, translate);

        // call 3
        mlservice.getCustomTaxonomies()
          .subscribe((data: any) => {
            this.listingCustomTaxonomies = data;
            console.log('getCustomTaxonomies');

            this.filtersSearch.customTaxonomiesDropdownKeysOptions = [];

            //prepare the custom taxonomies
            for (var key in data) {
              let opts = data[key];
              this.filtersSearch.customTaxonomiesDropdownKeysOptions.push({key: key, options: opts, selected: []});
            }

            //prepare the custom fields

            this.listingCustomFieldKeys = [];
            this.filtersSearch.customFieldsDropdownKeysOptions = [];
            this.filtersSearch.customFieldsText = [];
            this.listingTypesDetails.forEach(type => {
              //array of keys
              for (let key in type.case27_listing_type_fields) {
                if (type.case27_listing_type_fields[key]) {
                  if (type.case27_listing_type_fields[key].is_custom) {
                    this.listingCustomFieldKeys.push(key);
                  }
                }
              }
              //array of custom fields for dropdowns
              let facets = type.case27_listing_type_search_page.advanced.facets as any[];
              this.listingCustomFieldKeys.forEach(key => {
                let field = type.case27_listing_type_search_page.advanced.facets.find(temp => temp.show_field == key);
                if (field) {
                  if (field.type == 'text' || field.type == 'wp-search')
                    this.filtersSearch.customFieldsText.push({key: field.show_field, selected: ''});
                  else
                    this.filtersSearch.customFieldsDropdownKeysOptions.push({
                      key: field.show_field,
                      options: field.data_choices,
                      selected: []
                    });
                }
              });
            });


           goodAPIs++;
            this.endOfCalls(goodAPIs, geolocation, nativeGeocoder, alertController, service, locationService, router, translate);

          }, err => {
            GlobalFields.errorIni = true;
            GlobalFields.errorString = err.message;
          });

      }, err => {
        GlobalFields.errorIni = true;
        GlobalFields.errorString = err.message;
        console.log(err);
      });

    // call 4
    mlservice.getAllTags()
      .subscribe((data: any) => {
        this.listingTags = data;
       // goodAPIs++;
       // GlobalFieldsMyListing.endOfCalls(goodAPIs, geolocation, nativeGeocoder, alertController, service, locationService, router);

      }, err => {
        // GlobalFields.errorIni = true; GlobalFields.errorString = err.message; console.log(err)
      });

    // call 5
    mlservice.getRegions()
      .subscribe((data: any) => {
        this.regions = data;
        console.log('getRegions');

        //goodAPIs++;
        //this.endOfCalls(goodAPIs, geolocation, nativeGeocoder, alertController, service, locationService);

      }, err => {
        //GlobalFields.errorIni = true; GlobalFields.errorString = err.message;
      });


    mlservice.getRecentViewedListing();


    if (!platform.is('mobileweb')) {
      console.log('non è browser');
      console.log(platform);
      /*dialogs.alert('Please wait')
          .then(() => console.log('Dialog dismissed'))
          .catch(e => console.log('Error displaying dialog', e));
          */
    }
  }

  public static endOfCalls(goodAPIs: number, geolocation, nativeGeocoder, alertController, service, locationService, router: Router, translate: TranslateService) {
    if (goodAPIs == 2) {
      // fine
      GlobalFields.getLocation(geolocation, nativeGeocoder, alertController, service, locationService);
      service.getProfileFromStorage();
      this.firstLoading = false;
      GlobalFields.loadingHard = false;

      console.log('end firstLoading');

      router.navigateByUrl('tabs/' + GlobalFields.site_details.themeEnabled + '/home');
      translate.setDefaultLang('gb');
      GlobalFields.setLang(GlobalFields.site_details.language, translate);


    }
  }

  public static selectListingTypeDetail() {
    this.selectedTypeDetail = this.listingTypesDetails.find(res => res.ID == this.filtersSearch.selectedType);
    // set default value to the range
    if (this.selectedTypeDetail)
      this.selectedTypeDetail.case27_listing_type_search_page.advanced.facets.forEach(filter => {
        if (filter.type == 'proximity') {
          this.filtersSearch.range = this.getDefaultProximity('advanced');
        }
      });
  }

  public static getListingTypeNameBySlug(slug: string): string {
    const res = this.listingTypesDetails.find(temp => temp.post_name == slug);
    if (res)
      return res.post_title;
    else
      return '-';
  }

  public static getListingTypeBySlug(slug: string): ListingTypeDetail {
    const res = this.listingTypesDetails.find(temp => temp.post_name == slug);
    if (res)
      return res;
    else
      return undefined;
  }

  public static getListingTypeKeyById(id: number): string {
    const res = this.listingTypesDetails.find(temp => temp.ID == id);
    if (res)
      return res.post_name;
    else
      return '-';
  }


  //means the page must be the first
  public static getFilteredListingFirstTime(service: MyListingService, locationService: LocationService, stats?: boolean) {
    this.filteredListings = undefined;
    this.filtersSearch.currentPage = 1;
    this.filtersSearch.countListings = undefined;

    if (this.filtersSearch.location) { //address


      if (GlobalFields.site_details.mapType == 1) { //Google Maps
        locationService.getMyLatLongFromGoogle(this.filtersSearch.location).subscribe((d: any) => {  //traduco indirizzo

          let data = d.data ? d.data : d;
          if (stats)
            this.filtersSearch.countListings = d.count;

          if (data && data.results && data.results.length > 0 && data.results[0].geometry && data.results[0].geometry.location) {
            this.filtersSearch.lat = data.results[0].geometry.location.lat;
            this.filtersSearch.lng = data.results[0].geometry.location.lng;
          }

          console.log('Get listings near lat long gmap ' + this.filtersSearch.lat + ';' + this.filtersSearch.lng);
          service.getFilteredListings(stats).subscribe((d: any) => {
              let data = d.data ? d.data : d;
              if (stats)
                this.filtersSearch.countListings = d.count;

              if (this.filtersSearch.currentPage == 1) {
                this.filteredListings = [];
                this.filtersSearch.noMorePage = false;
              }

              this.filteredListings = this.filteredListings.concat(this.fixWrongImgCoverField(data));
              if (this.filteredListings.length < 10 || data.length == 0)
                this.filtersSearch.noMorePage = true;
            });
        });
      } else { //Open Street Maps
        locationService.getLatLongFromOpenMaps(this.filtersSearch.location).subscribe((data: any[]) => {
          console.log(data);
          if (data && data.length > 0) {
            this.filtersSearch.lat = parseFloat(data[0].lat);
            this.filtersSearch.lng = parseFloat(data[0].lon);
          }

          console.log('Get listings near lat long openstreet ' + this.filtersSearch.lat + ';' + this.filtersSearch.lng);

          service.getFilteredListings(stats)
            .subscribe((d: any) => {

              let data = d.data ? d.data : d;
              if (stats)
                this.filtersSearch.countListings = d.count;

              if (this.filtersSearch.currentPage == 1) {
                this.filteredListings = [];
                this.filtersSearch.noMorePage = false;
              }

              this.filteredListings = this.filteredListings.concat(this.fixWrongImgCoverField(data));
              if (this.filteredListings.length < 10 || data.length == 0)
                this.filtersSearch.noMorePage = true;
            });
        });
      }
    } else {
      service.getFilteredListings(stats)
        .subscribe((d: any) => {
          if (d) {

            let data = d.data ? d.data : d;
            if (stats)
              this.filtersSearch.countListings = d.count;

            if (this.filtersSearch.currentPage == 1) {
              this.filteredListings = [];
              this.filtersSearch.noMorePage = false;
            }

            this.filteredListings = this.filteredListings.concat(this.fixWrongImgCoverField(data));
            if (this.filteredListings.length < 10 || data.length == 0)
              this.filtersSearch.noMorePage = true;
          } else
            this.filteredListings = [];
        });

    }
  }


  public static fixWrongImgCoverField(listings: Listing[]): Listing[] {
    if (listings) {
      for (let i = 0; i < listings.length; i++) {
        if (!listings[i].img_cover)
          listings[i].img_cover = listings[i].img_cover;
      }
      return listings;
    } else
      return [];
  }


  public static clearFilters() {

    //clear all but not the location
    this.filtersSearch.categories = [];
    this.filtersSearch.location = undefined;
    this.filtersSearch.region = undefined;
    this.filtersSearch.tags = [];
    this.filtersSearch.customTaxonomiesDropdownKeysOptions.forEach(t => t.selected = undefined);
    this.filtersSearch.customFieldsDropdownKeysOptions.forEach(t => t.selected = undefined);
    this.filtersSearch.range = undefined;
    this.filtersSearch.name = undefined;
    this.filtersSearch.date = undefined;

  }



  public static getCustomTaxonomiesByKey(key: string): any {
    let res = this.filtersSearch.customTaxonomiesDropdownKeysOptions.find(a => a.key == key);
    return res;
  }

  public static getCustomFieldsByKey(key: string): any {
    let res = this.filtersSearch.customFieldsDropdownKeysOptions.find(a => a.key == key);
    return res;
  }

  public static getCustomTextFieldsByKey(key: string): any {
    let res = this.filtersSearch.customFieldsText.find(a => a.key == key);
    return res;
  }

  public static getCustomTaxonomiesByKeyAddForm(key: string): any {
    let res = this.addForm.customTaxonomiesDropdownKeysOptions.find(a => a.key == key);
    return res;
  }

  public static getCustomFieldsByKeyAddForm(key: string): any {
    let res = this.addForm.customFieldsDropdownKeysOptions.find(a => a.key == key);
    return res;
  }

  public static getCustomFieldsMultiselectByKeyAddForm(key: string): any {
    let res = this.addForm.customFieldsMultiselectKeysOptions.find(a => a.key == key);
    return res;
  }


  public static filterNotCustomFields(fields: any[]): any[] {
    let res = [];
    if (fields && fields.length > 0)
      fields.forEach(key => {
        if (!key.includes('cover') &&
          !key.includes('job_video') &&
          !key.includes('description') &&
          !key.includes('edited') &&
          !key.includes('logo') &&
          !key.includes('expires') &&
          !key.includes('tagline') &&
          !key.includes('links') &&
          !key.includes('geo') &&
          !key.includes('price_range') &&
          !key.includes('key') &&
          !key.includes('thumbnail_id') &&
          !key.includes('work_hours') &&
          !key.includes('case27_listing_type') &&
          !key.includes('job_category') &&
          !key.includes('location') &&
          !key.includes('phone') &&
          !key.includes('email') &&
          !key.includes('title') &&
          !key.includes('yoast') &&
          !key.includes('gallery') &&
          !key.includes('tags') &&
          !key.includes('package_id') &&
          !key.includes('region') &&
          !key.includes('edit') &&
          !key.includes('claimed') &&
          !key.includes('case27') &&
          !key.includes('meta') &&
          !key.includes('Meta') &&
          !key.includes('wp') &&
          !key.includes('application') &&
          !key.includes('featured') &&
          !key.includes('jetpack') &&
          !key.includes('_job_date') &&
          !key.includes('oembed') &&
          !key.includes('cache')
        )
          if (!this.filtersSearch.customTaxonomiesDropdownKeysOptions.find(tax => tax.key == key)) {
            res.push(key);
          }
      });
    return res;
  }

  public static filterNotCustomTaxonomies(fields: any[]): string[] {
    let res = [];
    for (let key in fields) {
      if (!key.includes('job_listing_category') &&
        !key.includes('region') &&
        !key.includes('case27_job_listing_tags')
      )
        res.push(key);
    }
    return res;
  }


  public static keyIsACustomField(key: string): boolean {
    let a = this.listingCustomFieldKeys.find(k => k == key);
    if (a)
      return true;
    else
      return false;
  }


  //Proximity default values
  /*
  In the array GlobalFieldsMyListing.selectedTypeDetail.case27_listing_type_search_page.advanced.facets[] search for type=='proximity'
  Can also have options setted instead of the single fields
  * {
    default: "20"
    default_label: ""
    is_primary: false
    label: "Proximity:"
    max: "80"
    options: []
    step: 1
    type: "proximity"
    units: "metric"
    }
  *
  * */
  public static getMinimumProximity(search_type: string) { //'advanced' or 'basic' search
    let v = 0;

    if (this.selectedTypeDetail.case27_listing_type_search_page[search_type] &&
      this.selectedTypeDetail.case27_listing_type_search_page[search_type].facets) {
      const opt = this.selectedTypeDetail.case27_listing_type_search_page[search_type].facets.find(el => el.type == 'proximity');
      if (opt)
        v = opt.min;
      if (!v && opt.options && opt.options.lenght > 0) { //case it has options array
        const o = opt.options.find(el => el.name == 'min');
        if (o)
          v = o.value;
      }
      if (!v)
        v = 0;
    }
    return v;

  }


  public static getMaximumProximity(search_type: string) { //'advanced' or 'basic' search
    let v = 500;

    if (this.selectedTypeDetail.case27_listing_type_search_page[search_type] &&
      this.selectedTypeDetail.case27_listing_type_search_page[search_type].facets) {
      const opt = this.selectedTypeDetail.case27_listing_type_search_page[search_type].facets.find(el => el.type == 'proximity');
      if (opt)
        v = opt.max;
      if (!v && opt.options && opt.options.lenght > 0) { //case it has options array
        const o = opt.options.find(el => el.name == 'max');
        if (o)
          v = o.value;
      }
      if (!v)
        v = 500;
    }
    return v;

  }

  public static getUnitRangeProximity(search_type: string) { //'advanced' or 'basic' search
    let v = 'metric';
    if (this.selectedTypeDetail.case27_listing_type_search_page[search_type] &&
      this.selectedTypeDetail.case27_listing_type_search_page[search_type].facets) {
      const opt = this.selectedTypeDetail.case27_listing_type_search_page[search_type].facets.find(el => el.type == 'proximity');
      if (opt)
        v = opt.units;
      if (!v && opt.options) { //case it has options array
        const o = opt.options.find(el => el.name == 'units');
        if (o)
          v = o.value;
      }
      if (!v)
        v = 'metric';
    }
    return v;

  }


  public static getStepProximity(search_type: string) { //'advanced' or 'basic' search
    let v = 1;
    if (this.selectedTypeDetail.case27_listing_type_search_page[search_type] &&
      this.selectedTypeDetail.case27_listing_type_search_page[search_type].facets) {
      const opt = this.selectedTypeDetail.case27_listing_type_search_page[search_type].facets.find(el => el.type == 'proximity');
      if (opt)
        v = opt.step;
      if (!v && opt.options && opt.options.lenght > 0) { //case it has options array
        const o = opt.options.find(el => el.name == 'step');
        if (o)
          v = o.value;
      }
      if (!v)
        v = 1;
    }
    return v;
  }

  public static getDefaultProximity(search_type: string) { //'advanced' or 'basic' search

    let v = 10;
    if (this.selectedTypeDetail.case27_listing_type_search_page[search_type] &&
      this.selectedTypeDetail.case27_listing_type_search_page[search_type].facets) {
      const opt = this.selectedTypeDetail.case27_listing_type_search_page[search_type].facets.find(el => el.type == 'proximity');
      if (opt)
        v = opt.default;
      if (!v && opt.options && opt.options.lenght > 0) { //case it has options array
        const o = opt.options.find(el => el.name == 'default');
        if (o)
          v = o.value;
      }
      if (!v)
        v = 10;
    }
    return v;
  }


  public static getCategoryId(id: any): ListingCategory {
    this.listingCategories.forEach(cat => {
      if (cat.id == id) {
        return cat;
      }
    });
    return undefined;
  }





}
