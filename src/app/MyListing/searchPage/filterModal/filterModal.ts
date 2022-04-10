import {Component} from "@angular/core";
import {GlobalFields} from "../../../GlobalFields";
import {CheckboxType} from "../../../entities/checkboxType";
import {Service} from '../../../services/Service';
import {AlertController, ModalController} from '@ionic/angular';
import {TranslateService} from "@ngx-translate/core";
import {LocationService} from "../../../services/LocationService";
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {CacheService} from 'ionic-cache';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {NativeGeocoder} from '@ionic-native/native-geocoder/ngx';
import {GlobalFieldsMyListing} from '../../../GlobalFieldsMyListing';
import {MyListingService} from '../../../services/MyListingService';


@Component({
    selector: 'page-filter',
    templateUrl: 'filterModal.html',
    styleUrls: ['filterModal.scss']
})
export class FilterModal {


    GlobalFields = GlobalFields;
    GlobalFieldsMyListing = GlobalFieldsMyListing;

    categories: CheckboxType[] = [];
    types: CheckboxType[] = [];
    customFields: string[];

    constructor(public service: Service, public mlservice: MyListingService, public locationService: LocationService, public modalCrtl: ModalController,  public translate: TranslateService, private statusBar: StatusBar,
                public modalCtrl: ModalController, private geolocation: Geolocation,
                private nativeGeocoder: NativeGeocoder, private alertController: AlertController) {

        this.iniFilter();

        this.service.setWhiteBlackBackgroundStatusBar();


        console.log(GlobalFieldsMyListing.filtersSearch.customFieldsText)

    }

    iniFilter(){
        if (!GlobalFieldsMyListing.filtersSearch) {
            this.prepareOptionsTags();
            // this.prepareCustomFieldsDropdown();
        } else {
          GlobalFieldsMyListing.selectListingTypeDetail();
            if (GlobalFieldsMyListing.filtersSearch.tags.length == 0)
                this.prepareOptionsTags();
            /*  if (this.GlobalFieldsMyListing.filtersSearch.customFieldsDropdownKeys.length == 0 ||
                  this.GlobalFieldsMyListing.filtersSearch.customFieldsDropdownKeys.length == 0 ||
                  this.GlobalFieldsMyListing.filtersSearch.customFieldsDropdown.length == 0)
                  this.prepareCustomFieldsDropdown();
                  */

        }
    }


    prepareOptionsTags() {
        GlobalFieldsMyListing.selectedTypeDetail.tags.forEach(cat => {
            let c = new CheckboxType();
            c.isChecked = false;
            c.val = cat;
            GlobalFieldsMyListing.filtersSearch.tags.push(c);
            console.log(cat);
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
      GlobalFieldsMyListing.getFilteredListingFirstTime(this.mlservice, this.locationService, true);
    }

    closeModal() {
        this.modalCrtl.dismiss();
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

    toStringRegions(): string {

        if (!GlobalFieldsMyListing.filtersSearch.region)
            return "";
        return GlobalFieldsMyListing.filtersSearch.region;

    }

    toStringTaxonomies(key: string): string {
        let tax = GlobalFieldsMyListing.getCustomTaxonomiesByKey(key);
        if (tax) {
           /* if (!tax.selected || tax.selected.length == 0)
                return "";
            else if (tax.selected.length > 3)
                return tax.selected.length + " selected";
            else {*/
                return tax.selected;
           // }
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


    getMyAddress(){
      this.GlobalFields.getLocation(this.geolocation, this.nativeGeocoder, this.alertController, this.service, this.locationService);
        GlobalFieldsMyListing.filtersSearch.location = GlobalFields.address;
    }


    selectListingType(reloadOrder){
      GlobalFieldsMyListing.filteredListings = undefined;
      GlobalFieldsMyListing.clearFilters();


      GlobalFieldsMyListing.selectListingTypeDetail();
        console.log(GlobalFieldsMyListing.selectedTypeDetail);
        if (reloadOrder)
            GlobalFieldsMyListing.filtersSearch.order = GlobalFieldsMyListing.selectedTypeDetail.case27_listing_type_search_page.order.options[0].key;
        if (GlobalFieldsMyListing.filtersSearch.tags.length == 0)
            this.prepareOptionsTags();
      GlobalFieldsMyListing.getFilteredListingFirstTime(this.mlservice,this.locationService);

    }




    isSelected(id: any) {
        if (GlobalFieldsMyListing.filtersSearch.selectedType == id)
            return ' selectedtypesListHorizontal';
        else
            return '';
    }

    isSelectedGetPrimaryColor(id: any) {
        if (GlobalFieldsMyListing.filtersSearch.selectedType == id)
            return this.GlobalFields.getPrimaryColorJson();
        else
            return undefined;
    }


    clearFilters(){
      GlobalFieldsMyListing.clearFilters();
        this.iniFilter();
    }



}
