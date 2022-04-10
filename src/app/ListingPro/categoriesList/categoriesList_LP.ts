import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {GlobalFields} from '../../GlobalFields';
import {Service} from '../../services/Service';

import 'hammerjs';
import {TranslateService} from '@ngx-translate/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ListingCategory} from '../../entities/listingCategory';
import {LocationService} from '../../services/LocationService';
import {ImageAttribute} from 'ionic-image-loader';
import {GlobalFieldsMyListing} from '../../GlobalFieldsMyListing';
import {GlobalFieldsListingPro} from '../../GlobalFieldsListingPro';
import {ListingProService} from '../../services/ListingProService';

@Component({
  selector: 'categoriesList',
  templateUrl: 'categoriesList_LP.html',
  styleUrls: ['categoriesList_LP.scss']

})
export class CategoriesList_LP implements OnInit {

  GlobalFields = GlobalFields;
  GlobalFieldsListingPro = GlobalFieldsListingPro;

  tabShown = 1;

  constructor(public service: Service, public lpservice: ListingProService,  private _sanitizer: DomSanitizer, public translate: TranslateService,
              private locationService: LocationService, private navController: NavController) {
  }

  ngOnInit() {}

  ionViewDidEnter() {
    if (GlobalFields.site_details.categoryListTabContent == 1)
      this.tabShown = 1;
    else if (GlobalFields.site_details.categoryListTabContent == 2)
      this.tabShown = 2;
    else
      this.tabShown = 1;
    console.log('ionViewDidEnter');
    this.service.setWhiteBlackBackgroundStatusBar();
  }


  getListingsByCategory(selectedCat: ListingCategory) {
    GlobalFieldsListingPro.clearFilters();
    GlobalFieldsListingPro.filtersSearch.categories = selectedCat.name;
    GlobalFieldsListingPro.getFilteredListingFirstTime(this.lpservice, this.locationService, true);
    this.navController.navigateForward('tabs/' + GlobalFields.site_details.themeEnabled + '/search');
  }

  getListingsByRegion(selectedReg: ListingCategory) {
    GlobalFieldsListingPro.clearFilters();
    GlobalFieldsListingPro.filtersSearch.locations = selectedReg.name;
    GlobalFieldsListingPro.getFilteredListingFirstTime(this.lpservice, this.locationService, true);
    this.navController.navigateForward('tabs/' + GlobalFields.site_details.themeEnabled + '/search');
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


  getBackgroundCachedRegions(reg: ListingCategory) {
    if (reg.image)
      return reg.image;
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
