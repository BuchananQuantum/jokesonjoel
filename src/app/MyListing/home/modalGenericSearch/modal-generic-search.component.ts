import {Component} from '@angular/core';
import {AlertController, ModalController, NavController} from '@ionic/angular';
import {Constants} from '../../../Constants';

import {GlobalFields} from '../../../GlobalFields';
import {Service} from '../../../services/Service';
import {LocationService} from '../../../services/LocationService';
import {EntityGeneralSearchResult, GeneralSearchResult} from '../../../entities/generalSearchResult';
import {ImageAttribute} from 'ionic-image-loader';
import {Listing} from '../../../entities/myListing/listing';
import {ListingPage} from '../../listingPage/listingPage';
import {ListingCategory} from '../../../entities/listingCategory';
import {CheckboxType} from '../../../entities/checkboxType';
import {GlobalFieldsMyListing} from '../../../GlobalFieldsMyListing';
import {MyListingService} from '../../../services/MyListingService';


@Component({
  selector: 'modalGenericSearch',
  templateUrl: 'modal-generic-search.component.html',
  styleUrls: ['modal-generic-search.component.scss']
})
export class ModalGenericSearch {

  Constants = Constants;
  GlobalFields = GlobalFields;
  GlobalFieldsMyListing = GlobalFieldsMyListing;

  searchQuery: string;

  loading = false;

  results: GeneralSearchResult;

  constructor(public viewCtrl: ModalController, private service: Service, private mlservice: MyListingService, public navController: NavController,
              public locationService: LocationService, public alertController: AlertController) {

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
    this.mlservice.getGeneralSearch(this.searchQuery).subscribe((res: any) => {
      if (res && res.success) {
        this.results = res.data;

        //Get the icons for Tags
        if(this.results && this.results.tags.length>0)
          this.results.tags.forEach(tag => {
            const t2 = GlobalFieldsMyListing.listingTags.find( t => t.term_id==tag.id);
            if (t2)
              tag.icon = t2.icon
            else
              tag.icon = 'fas fa-hashtag';
          })
        //Get the icons for Categories
        if(this.results && this.results.categories.length>0)
          this.results.categories.forEach(cat => {
            const c2 = GlobalFieldsMyListing.listingCategories.find( c => c.id==cat.id);
            if (c2)
              cat.icon = c2.icon
            else
              cat.icon = 'fas fa-bookmark';
          })
        //Get the icons for Regions
        if(this.results && this.results.regions.length>0)
          this.results.regions.forEach(reg => {
            const r2 = GlobalFieldsMyListing.regions.find( r => r.id==reg.id);
            if (r2)
              reg.icon = r2.icon
            else
              reg.icon = 'fas fa-globe';
          })


        this.loading = false;
      }
    }, err => {
      this.results = undefined;
    });
  }

  searchNearMe(id: any) {
    this.closeModal();
    console.log(this.GlobalFields.address);
    GlobalFieldsMyListing.clearFilters();

    GlobalFieldsMyListing.filtersSearch.selectedType = id;
    GlobalFieldsMyListing.selectListingTypeDetail();
    GlobalFieldsMyListing.filtersSearch.location = this.GlobalFields.address;
    // set default value to the proximity range
    GlobalFieldsMyListing.filtersSearch.range = GlobalFieldsMyListing.getDefaultProximity('basic');
    GlobalFieldsMyListing.getFilteredListingFirstTime(this.mlservice, this.locationService, true);
    this.navController.navigateForward('tabs/' + GlobalFields.site_details.themeEnabled + '/search');
  }

  searchByType(id: any) {
    this.closeModal();
    GlobalFieldsMyListing.clearFilters();
    GlobalFieldsMyListing.filtersSearch.selectedType = id;
    GlobalFieldsMyListing.selectListingTypeDetail();
    GlobalFieldsMyListing.getFilteredListingFirstTime(this.mlservice, this.locationService, true);
    this.navController.navigateForward('tabs/' + GlobalFields.site_details.themeEnabled + '/search');
  }

  getListingDetails(listing) {
    console.log('getListingDetails');
    this.GlobalFields.loadingSoft = true;
    this.mlservice.getListingDetailsById(listing.id).subscribe((data: Listing) => {
      GlobalFieldsMyListing.selectedListing = data;
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
      component: ListingPage,
    });
    return await listingModal.present();

    //  this.navCtrl.push(ListingPage_LP);

  }

  getListingsByCategory(catName: string, typeId: any) {
    GlobalFieldsMyListing.clearFilters();

    GlobalFieldsMyListing.filtersSearch.categories = [catName];
    GlobalFieldsMyListing.filtersSearch.selectedType = typeId;
    // select Listing_LP Type
    GlobalFieldsMyListing.selectListingTypeDetail();

    this.closeModal();

    GlobalFieldsMyListing.getFilteredListingFirstTime(this.mlservice, this.locationService, true);
    this.navController.navigateForward('tabs/' + GlobalFields.site_details.themeEnabled + '/search');
  }

  getListingsByTag(selTag: EntityGeneralSearchResult, typeId: any) {
    GlobalFieldsMyListing.clearFilters();

    GlobalFieldsMyListing.filtersSearch.selectedType = typeId;
    // select Listing_LP Type
    GlobalFieldsMyListing.selectListingTypeDetail();

    //prepareOptionsTags
    GlobalFieldsMyListing.selectedTypeDetail.tags.forEach(tag => {
      let c = new CheckboxType();
      c.isChecked = tag.id == selTag.id;
      c.val = tag;
      GlobalFieldsMyListing.filtersSearch.tags.push(c);
    });


    this.closeModal();

    GlobalFieldsMyListing.getFilteredListingFirstTime(this.mlservice, this.locationService, true);
    this.navController.navigateForward('tabs/' + GlobalFields.site_details.themeEnabled + '/search');
  }


  getListingsByRegion(regName: string, typeId: any) {
    GlobalFieldsMyListing.clearFilters();

    GlobalFieldsMyListing.filtersSearch.region = regName;
    GlobalFieldsMyListing.filtersSearch.selectedType = typeId;
    // select Listing_LP Type
    GlobalFieldsMyListing.selectListingTypeDetail();

    this.closeModal();

    GlobalFieldsMyListing.getFilteredListingFirstTime(this.mlservice, this.locationService, true);
    this.navController.navigateForward('tabs/' + GlobalFields.site_details.themeEnabled + '/search');
  }


  closeModal() {
    this.viewCtrl.dismiss();
  }

}


