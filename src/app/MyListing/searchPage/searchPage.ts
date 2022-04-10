import {Component, OnInit, ViewChild} from '@angular/core';
import {AlertController, IonInfiniteScroll, ModalController, NavController, Platform} from '@ionic/angular';
import {Listing} from '../../entities/myListing/listing';
import {Filter} from '../../entities/filter';
import {GlobalFields} from '../../GlobalFields';
import {ListingPage} from '../listingPage/listingPage';
import {FilterModal} from './filterModal/filterModal';
import {Service} from '../../services/Service';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {MapModal} from './mapModal/mapModal';
import {TranslateService} from '@ngx-translate/core';
import {LocationService} from '../../services/LocationService';
import {GlobalFieldsMyListing} from '../../GlobalFieldsMyListing';
import {MyListingService} from '../../services/MyListingService';

@Component({
  selector: 'page-search',
  templateUrl: 'searchPage.html',
  styleUrls: ['searchPage.scss']

})
export class SearchPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  GlobalFields = GlobalFields;
  GlobalFieldsMyListing = GlobalFieldsMyListing;

  filters: Filter;
  loadingMoreData = false;

  oldScollPostion = 0;
  headerClass = '';

  isAndroid: boolean;

  customPopoverOptions: any = {
    header: 'Seleziona l\'ordine',
  };

  constructor(public service: Service, public mlservice: MyListingService, public locationService: LocationService, public modalCtrl: ModalController, public statusBar: StatusBar, public platform: Platform,
              public translate: TranslateService, public alertController: AlertController) {
    //If not coming from some "search this" feature like near me or categories tab it initializes the search
    if (!GlobalFieldsMyListing.basicSearch && (!GlobalFieldsMyListing.filtersSearch.location &&
      (!GlobalFieldsMyListing.filtersSearch.categories) || GlobalFieldsMyListing.filtersSearch.categories.length == 0) && (!GlobalFieldsMyListing.filtersSearch.region)
    ) {
      this.selectListingType(true);
    }
  }

  ngOnInit() {
    if (this.platform.is('ios'))
      this.isAndroid = false;
    else
      this.isAndroid = true;
  }

  ionViewDidEnter() {
    this.service.setWhiteBlackBackgroundStatusBar();
    GlobalFieldsMyListing.basicSearch = false;
  }


  async openModalListing() {

    const modal = await this.modalCtrl.create({
      component: ListingPage,
    });
    return await modal.present();
  }


  async openFilter(listing?: Listing) {

    GlobalFieldsMyListing.selectedListing = listing;

    const filterModal = await this.modalCtrl.create({
      component: FilterModal,
    });
    return await filterModal.present();

  }

  async openMap(listing?: Listing) {

    GlobalFieldsMyListing.selectedListing = listing;

    const mapModal = await this.modalCtrl.create({
      component: MapModal,
    });
    return await mapModal.present();

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

  loadData() {
    this.loadingMoreData = true;
    GlobalFieldsMyListing.filtersSearch.currentPage++;
    if (GlobalFieldsMyListing.filtersSearch.location) { //address

      //Convert address to Lat and Lng
      if (GlobalFields.site_details.mapType == 1) {
        this.locationService.getMyLatLongFromGoogle(GlobalFieldsMyListing.filtersSearch.location).subscribe((data: any) => {
          if (data.results && data.results.length > 0 && data.results[0].geometry && data.results[0].geometry.location) {
            GlobalFieldsMyListing.filtersSearch.lat = data.results[0].geometry.location.lat;
            GlobalFieldsMyListing.filtersSearch.lng = data.results[0].geometry.location.lng;
          }
        });
      } else { //Open Street Maps
        this.locationService.getLatLongFromOpenMaps(GlobalFieldsMyListing.filtersSearch.location).subscribe((data: any) => {
          console.log(data);
          if (data && data.length > 0) {
            GlobalFieldsMyListing.filtersSearch.lat = data[0].lat;
            GlobalFieldsMyListing.filtersSearch.lng = data[0].lon;
          }
        });
      }

      this.callServiceToGetFilteredListings();
    } else { //no address
      this.callServiceToGetFilteredListings();
    }
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }


  selectListingType(reloadOrder) {
    this.GlobalFieldsMyListing.filteredListings = undefined;
    const setLocation = GlobalFieldsMyListing.filtersSearch.location;

    GlobalFieldsMyListing.clearFilters();
    if (setLocation)
      GlobalFieldsMyListing.filtersSearch.location = setLocation;

    GlobalFieldsMyListing.selectListingTypeDetail();
    console.log(GlobalFieldsMyListing.selectedTypeDetail);
    if (reloadOrder && GlobalFieldsMyListing.selectedTypeDetail.case27_listing_type_search_page.order &&
      GlobalFieldsMyListing.selectedTypeDetail.case27_listing_type_search_page.order.options && GlobalFieldsMyListing.selectedTypeDetail.case27_listing_type_search_page.order.options.length > 0)
      GlobalFieldsMyListing.filtersSearch.order = GlobalFieldsMyListing.selectedTypeDetail.case27_listing_type_search_page.order.options[0].key;
    GlobalFieldsMyListing.getFilteredListingFirstTime(this.mlservice, this.locationService, true);

  }


  callServiceToGetFilteredListings() {
    this.mlservice.getFilteredListings(true)
      .subscribe((d: any) => {
        let data = d.data ? d.data : d;
        GlobalFieldsMyListing.filtersSearch.countListings = d.count;

        if (GlobalFieldsMyListing.filtersSearch.currentPage == 1) {
          GlobalFieldsMyListing.filteredListings = [];
          GlobalFieldsMyListing.filtersSearch.noMorePage = false;
        }
        GlobalFieldsMyListing.filteredListings = GlobalFieldsMyListing.filteredListings.concat(GlobalFieldsMyListing.fixWrongImgCoverField(data));
        console.log(data);
        this.loadingMoreData = false;

        if (GlobalFieldsMyListing.filteredListings.length < 10 || data.length < 10)
                GlobalFieldsMyListing.filtersSearch.noMorePage = true;

      });
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

  getListType(type: string) {
    if (type == 'alternate')
      return 3; //box with logo
    if (type == 'default')
      return 1; //box
    else
      return 2; //list
  }


  clearFilters() {
    GlobalFieldsMyListing.clearFilters();
    this.selectListingType(true);
  }

}
