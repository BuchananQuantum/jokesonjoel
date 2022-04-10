import {Component} from '@angular/core';
import {AlertController, ModalController, NavController} from '@ionic/angular';
import {Constants} from '../../../Constants';

import {GlobalFields} from '../../../GlobalFields';
import {Service} from '../../../services/Service';
import {LocationService} from '../../../services/LocationService';
import {ImageAttribute} from 'ionic-image-loader';
import {Listing} from '../../../entities/myListing/listing';
import {ListingPage_LP} from '../../listingPage/listing-page_LP.component';
import {ListingCategory} from '../../../entities/listingCategory';
import {CheckboxType} from '../../../entities/checkboxType';
import {ListingProService} from '../../../services/ListingProService';
import {TranslateService} from '@ngx-translate/core';
import {SuggestedSearch_LP} from '../../../entities/listingPro/SuggestedSearch_LP';
import {GlobalFieldsListingPro} from '../../../GlobalFieldsListingPro';


@Component({
  selector: 'modalGenericSearch',
  templateUrl: 'modal-generic-search_LP.html',
  styleUrls: ['modal-generic-search_LP.scss']
})
export class ModalGenericSearch_LP {

  Constants = Constants;
  GlobalFields = GlobalFields;
  GlobalFieldsListingPro = GlobalFieldsListingPro;

  searchQuery: string;

  loading = false;

  results: SuggestedSearch_LP;

  constructor(public viewCtrl: ModalController, private service: Service, private lpservice: ListingProService, public navController: NavController,
              public locationService: LocationService, public alertController: AlertController, public tranlsate: TranslateService) {

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


  generalSearch() {

    this.loading = true;
    this.lpservice.suggestedSearch(this.searchQuery).subscribe( (res:any)=>{
      this.results = res;
      this.loading = false;
    });
  }

  searchNearMe(name: string) {
    this.closeModal();
    console.log(this.GlobalFields.address);
    GlobalFieldsListingPro.clearFilters();

    GlobalFieldsListingPro.filtersSearch.categories = name;
    GlobalFieldsListingPro.filtersSearch.location = this.GlobalFields.address;
    // set default value to the proximity range
    GlobalFieldsListingPro.filtersSearch.range = GlobalFieldsListingPro.listingTypeDetail.filter_status.enable_readious_search_filter_default;

    GlobalFieldsListingPro.basicSearch = true;
    GlobalFieldsListingPro.getFilteredListingFirstTime(this.lpservice, this.locationService, true);
    this.navController.navigateForward('tabs/' + GlobalFields.site_details.themeEnabled + '/search');
  }


  getListingDetails(id:number) {
    console.log('getListingDetails');
    this.GlobalFields.loadingSoft = true;
    this.lpservice.getListingDetailsById(id).subscribe((data: Listing) => {
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
    console.log('openModalListing');

    const listingModal = await this.viewCtrl.create({
      component: ListingPage_LP,
    });
    return await listingModal.present();

  }

  getListingsByCategory(catName: string) {
    GlobalFieldsListingPro.clearFilters();
    GlobalFieldsListingPro.filtersSearch.categories = catName;

    this.closeModal();
    GlobalFieldsListingPro.basicSearch = true;
    GlobalFieldsListingPro.getFilteredListingFirstTime(this.lpservice, this.locationService, true);
    this.navController.navigateForward('tabs/' + GlobalFields.site_details.themeEnabled + '/search');
  }

  getListingsByTag(selTag: ListingCategory) {
    GlobalFieldsListingPro.clearFilters();

   GlobalFieldsListingPro.filtersSearch.skeyword = selTag.name;

    GlobalFieldsListingPro.basicSearch = true;
    GlobalFieldsListingPro.getFilteredListingFirstTime(this.lpservice, this.locationService, true);
    this.navController.navigateForward('tabs/' + GlobalFields.site_details.themeEnabled + '/search');
  }


  closeModal() {
    this.viewCtrl.dismiss();
  }

}


