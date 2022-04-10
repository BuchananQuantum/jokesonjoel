import {Component} from '@angular/core';
import {GlobalFields} from '../../../GlobalFields';
import {CheckboxType} from '../../../entities/checkboxType';
import {Service} from '../../../services/Service';
import {AlertController, ModalController} from '@ionic/angular';
import {TranslateService} from '@ngx-translate/core';
import {LocationService} from '../../../services/LocationService';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {NativeGeocoder} from '@ionic-native/native-geocoder/ngx';
import {GlobalFieldsMyListing} from '../../../GlobalFieldsMyListing';
import {MyListingService} from '../../../services/MyListingService';
import {ListingProService} from '../../../services/ListingProService';
import {GlobalFieldsListingPro} from '../../../GlobalFieldsListingPro';


@Component({
  selector: 'page-filter',
  templateUrl: 'filterModal_LP.html',
  styleUrls: ['filterModal_LP.scss']
})
export class FilterModal_LP {

  GlobalFields = GlobalFields;
  GlobalFieldsListingPro = GlobalFieldsListingPro;

  categories: CheckboxType[] = [];
  types: CheckboxType[] = [];

  constructor(public service: Service, public lpservice: ListingProService, public locationService: LocationService, public modalCrtl: ModalController, public translate: TranslateService, private statusBar: StatusBar,
              public modalCtrl: ModalController, private geolocation: Geolocation,
              private nativeGeocoder: NativeGeocoder, private alertController: AlertController) {

    this.iniFilter();

    this.service.setWhiteBlackBackgroundStatusBar();


    console.log(GlobalFieldsListingPro.filtersSearch);

  }

  iniFilter() {
    if (!GlobalFieldsListingPro.filtersSearch) {
      this.prepareOptionsTags();
      this.prepareOptionsFeatures();
      // this.prepareCustomFieldsDropdown();
    } else {
     /* if (GlobalFieldsListingPro.filtersSearch.tags.length == 0)
        this.prepareOptionsTags();*/
      if (GlobalFieldsListingPro.filtersSearch.features.length == 0)
        this.prepareOptionsFeatures();
      /*  if (this.GlobalFieldsMyListing.filtersSearch.customFieldsDropdownKeys.length == 0 ||
            this.GlobalFieldsMyListing.filtersSearch.customFieldsDropdownKeys.length == 0 ||
            this.GlobalFieldsMyListing.filtersSearch.customFieldsDropdown.length == 0)
            this.prepareCustomFieldsDropdown();
            */

    }
  }


  prepareOptionsTags() {
    GlobalFieldsListingPro.tags.forEach(cat => {
      if(cat.count>0) {
        let c = new CheckboxType();
        c.isChecked = false;
        c.val = cat;
        GlobalFieldsListingPro.filtersSearch.tags.push(c);
        console.log(cat);
      }
    });
  }

  prepareOptionsFeatures() {
    GlobalFieldsListingPro.features.forEach(cat => {
      if(cat.count>0) {
        let c = new CheckboxType();
        c.isChecked = false;
        c.val = cat;
        GlobalFieldsListingPro.filtersSearch.features.push(c);
        console.log(cat);
      }
    });
  }

  //prepara un array di stringhe per le key dei custom fields dropdown e uno dove ogni elemento è un array di opzioni
  //poi inizializza a [] nella posizione corrispondente
  /*  prepareCustomFieldsDropdown() {
        this.GlobalFieldsMyListing.filtersSearch.customFieldsDropdownKeys = [];
        this.GlobalFieldsMyListing.filtersSearch.customTaxonomiesDropdownKeysOptions = [];
        this.GlobalFieldsMyListing.filtersSearch.customFieldsDropdown = [];

        GlobalFieldsMyListing.selectedTypeDetail.case27_listing_type_search_page.advanced.facets.forEach(filter => {
            if (filter.show_field && filter.show_field != 'job_tags' && filter.show_field != 'job_category' && filter.show_field != 'job_region' && filter.show_field != 'job_title') { //its a custom field
                this.GlobalFieldsMyListing.filtersSearch.customFieldsDropdownKeys.push(filter.show_field);
                let options = [];
                if (GlobalFieldsMyListing.selectedTypeDetail.case27_listing_type_fields[filter.show_field].options)
                    for (const key of Object.keys(GlobalFieldsMyListing.selectedTypeDetail.case27_listing_type_fields[filter.show_field].options)) {
                        options.push(GlobalFieldsMyListing.selectedTypeDetail.case27_listing_type_fields[filter.show_field].options[key]);
                    }
                this.GlobalFieldsMyListing.filtersSearch.customTaxonomiesDropdownKeysOptions.push(
                    {key: filter.show_field, options: options}
                );
            }
        });
        for (let i = 0; i < this.GlobalFieldsMyListing.filtersSearch.customFieldsDropdownKeys.length; i++) {
            GlobalFieldsMyListing.filtersSearch.customFieldsDropdown.push([]);
        }

        console.log(this.GlobalFieldsMyListing.filtersSearch.customTaxonomiesDropdownKeysOptions);

    }
*/


  getFilteredListingsFirstTime() {
    GlobalFieldsListingPro.getFilteredListingFirstTime(this.lpservice, this.locationService, true);
  }

  closeModal() {
    this.modalCrtl.dismiss();
  }



  getMyAddress() {
    this.GlobalFields.getLocation(this.geolocation, this.nativeGeocoder, this.alertController, this.service, this.locationService);
    GlobalFieldsListingPro.filtersSearch.location = GlobalFields.address;
  }



  clearFilters() {
    GlobalFieldsListingPro.clearFilters();
    this.iniFilter();
  }


}
