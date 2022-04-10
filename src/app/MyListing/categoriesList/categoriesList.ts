import {Component, OnInit} from '@angular/core';
import {NavController, Platform, PopoverController} from '@ionic/angular';
import {Listing} from '../../entities/myListing/listing';
import {GlobalFields} from '../../GlobalFields';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {ModalController} from '@ionic/angular';
import {CallNumber} from '@ionic-native/call-number/ngx';
import {LaunchNavigator} from '@ionic-native/launch-navigator/ngx';
import {Service} from '../../services/Service';

import {SocialSharing} from '@ionic-native/social-sharing/ngx';


import 'hammerjs';
import {TranslateService} from '@ngx-translate/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ListingCategory} from '../../entities/listingCategory';
import {LocationService} from '../../services/LocationService';
import {ImageAttribute} from 'ionic-image-loader';
import {ListingTypeDetail} from '../../entities/myListing/listingTypeDetail';
import {GlobalFieldsMyListing} from '../../GlobalFieldsMyListing';
import {MyListingService} from '../../services/MyListingService';

@Component({
  selector: 'categoriesList',
  templateUrl: 'categoriesList.html',
  styleUrls: ['categoriesList.scss']

})
export class CategoriesList implements OnInit{

  GlobalFields = GlobalFields;
  GlobalFieldsMyListing = GlobalFieldsMyListing;

  tabShown = 1;

  loading = true;
  listOfTypes: ListingTypeDetail[] = [];


  categories_by_type: { type_id: number, type_name: string, categories: ListingCategory[]}[] = [];
  regions_by_type: { type_id: number, type_name: string, regions: ListingCategory[]}[] = [];

  constructor(public service: Service, public mlservice: MyListingService, private _sanitizer: DomSanitizer, public translate: TranslateService,
              private locationService: LocationService, private navController: NavController) {
  }

  ngOnInit(){
    this.getCategoriesForEachType();
    this.getRegionsForEachType();
  }

  ionViewDidEnter() {
    if(GlobalFields.site_details.categoryListTabContent == 1)
      this.tabShown = 1;
    else if(GlobalFields.site_details.categoryListTabContent == 2)
      this.tabShown = 2;
    else
      this.tabShown = 1;
    console.log('ionViewDidEnter');
    this.service.setWhiteBlackBackgroundStatusBar();
  }


  getListingsByCategory(selectedCat: ListingCategory, typeId: any) {
    GlobalFieldsMyListing.clearFilters();

    if (selectedCat) {
      GlobalFieldsMyListing.filtersSearch.categories = [selectedCat.name];
      GlobalFieldsMyListing.filtersSearch.selectedType = typeId;
      // select Listing_LP Type
      GlobalFieldsMyListing.selectListingTypeDetail();

      GlobalFieldsMyListing.getFilteredListingFirstTime(this.mlservice, this.locationService, true);
      this.navController.navigateForward('tabs/' + GlobalFields.site_details.themeEnabled + '/search');
    }
  }

  getCategoriesForEachType() {

    this.loading = true;

    this.mlservice.getCountByTaxonomy('job_listing_category').subscribe((res: any) => {
      if (res && res.success && res.data && res.data.length>0) {
        res.data.forEach( type =>{
          this.categories_by_type.push({type_id: type.id, type_name: type.title, categories: type.terms});
        });

        this.loading = false;
      }
    }, err => {
      console.log(err);
    });
/*

    GlobalFieldsMyListing.listingTypesDetails.forEach(type => {
      //check if regions in in the search filter
      if(type.categories && type.categories.length>0) {
        const cats = type.categories.filter(cat => cat.count)
        this.categories_by_type.push({type_id: type.ID, type_name: type.post_title, categories: cats});
      }
    })*/
  }

  getRegionsForEachType() {

    this.loading = true;
    this.mlservice.getCountByTaxonomy('region').subscribe((res: any) => {
      if (res && res.success && res.data && res.data.length>0) {
        res.data.forEach( type =>{
          this.regions_by_type.push({type_id: type.id, type_name: type.title, regions: type.terms});
        });

        this.loading = false;
      }
    }, err => {
      console.log(err);
    });

/*
    GlobalFieldsMyListing.listingTypesDetails.forEach(type => {
      //check if regions in in the search filter
      if (type.case27_listing_type_search_page && type.case27_listing_type_search_page.advanced
        && type.case27_listing_type_search_page.advanced.facets && type.case27_listing_type_search_page.advanced.facets &&
        type.case27_listing_type_search_page.advanced.facets.some(el => el.show_field == 'region')) {
        this.mlservice.getRegionsByType(type.ID).subscribe((data: { success?: boolean, data?: ListingCategory[] }) => {
          if (data.success)
            data.data = data.data.filter(reg=> reg.count)
            this.regions_by_type.push({type_id: type.ID, type_name: type.post_title, regions: data.data});
        });
      }
    });*/
  }

  getListingsByRegion(selectedReg: ListingCategory, typeId: any) {
    GlobalFieldsMyListing.clearFilters();
    if (selectedReg) {
      console.log(selectedReg)
      GlobalFieldsMyListing.filtersSearch.region = selectedReg.name;
      GlobalFieldsMyListing.filtersSearch.selectedType = typeId;
      // select Listing_LP Type
      GlobalFieldsMyListing.selectListingTypeDetail();

      GlobalFieldsMyListing.getFilteredListingFirstTime(this.mlservice, this.locationService, true);
      this.navController.navigateForward('tabs/' + GlobalFields.site_details.themeEnabled + '/search');
    }
  }


  getBackground(category: any) {
    let image = '';
    //get the category from the categories call
    GlobalFieldsMyListing.listingCategories.forEach(cat => {
      if (cat.id == category.id)
        image = cat.image_url;
    });
    return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient(to top, rgba(23, 23, 23, 0.38), rgba(23, 23, 23, 0.38)), url(${image})`);
  }

  getBackgroundCached(category: ListingCategory) {
    let image = '';
    //get the category from the categories call
    if(category.image_url)
      image = category.image_url;
    if (!image)
      image = GlobalFields.site_details.placeholderImgUrl;
    return image;
  }

  getBackgroundCachedRegions(reg: ListingCategory) {
    if (reg.image_url)
      return reg.image_url;
    return GlobalFields.site_details.placeholderImgUrl;
  }

  getImgCachedClass(class_to_add: string): ImageAttribute[] {
    let class_name = 'imgCachedAsBackground ' + class_to_add;

    const imageAttributes: ImageAttribute[] = [];
    imageAttributes.push({
      element: 'class',
      value: class_name
    });


    return imageAttributes;
  }

}
