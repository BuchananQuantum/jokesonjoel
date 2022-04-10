import {Component, OnInit, ViewChild} from '@angular/core';
import {AlertController, IonInfiniteScroll, ModalController, Platform} from '@ionic/angular';
import {Listing} from '../../entities/myListing/listing';
import {Filter} from '../../entities/filter';
import {GlobalFields} from '../../GlobalFields';
import {FilterModal_LP} from './filterModal/filterModal_LP';
import {Service} from '../../services/Service';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {MapModal_LP} from './mapModal/mapModal_LP';
import {TranslateService} from '@ngx-translate/core';
import {LocationService} from '../../services/LocationService';
import {MyListingService} from '../../services/MyListingService';
import {ListingPage_LP} from '../listingPage/listing-page_LP.component';
import {GlobalFieldsListingPro} from '../../GlobalFieldsListingPro';
import {ListingProService} from '../../services/ListingProService';
import {Listing_LP, SearchResult_LP} from '../../entities/listingPro/Listing_LP';

@Component({
  selector: 'page-search',
  templateUrl: 'searchPage_LP.html',
  styleUrls: ['searchPage_LP.scss']

})
export class SearchPage_LP implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  GlobalFields = GlobalFields;
  GlobalFieldsListingPro = GlobalFieldsListingPro;

  filters: Filter;
  loadingMoreData = false;

  oldScollPostion = 0;
  headerClass = '';

  isAndroid: boolean;

  customPopoverOptions: any = {
    header: 'Seleziona l\'ordine',
  };

  constructor(public service: Service, public lpservice: ListingProService, public mlservice: MyListingService, public locationService: LocationService, public modalCtrl: ModalController, public statusBar: StatusBar, public platform: Platform,
              public translate: TranslateService, public alertController: AlertController) {
    //If not coming from some "search this" feature like near me or categories tab it initializes the search
    if (!GlobalFieldsListingPro.basicSearch && !GlobalFieldsListingPro.filtersSearch.location && !GlobalFieldsListingPro.filtersSearch.categories) {
      this.initialCall(true);
    }
    GlobalFieldsListingPro.basicSearch = false;
  }

  ngOnInit() {
    if (this.platform.is('ios'))
      this.isAndroid = false;
    else
      this.isAndroid = true;
  }

  ionViewDidEnter() {
    this.service.setWhiteBlackBackgroundStatusBar();
  }


  async openModalListing() {

    const modal = await this.modalCtrl.create({
      component: ListingPage_LP,
    });
    return await modal.present();
  }


  async openFilter(listing?: Listing_LP) {

    GlobalFieldsListingPro.selectedListing = listing;

    const filterModal = await this.modalCtrl.create({
      component: FilterModal_LP,
    });
    return await filterModal.present();

  }

  async openMap(listing?: Listing_LP) {

    GlobalFieldsListingPro.selectedListing = listing;

    const mapModal = await this.modalCtrl.create({
      component: MapModal_LP,
    });
    return await mapModal.present();

  }

  loadData() {
    this.loadingMoreData = true;
    GlobalFieldsListingPro.filtersSearch.currentPage++;
    if (GlobalFieldsListingPro.filtersSearch.location) { //address

      //Convert address to Lat and Lng
      if (GlobalFields.site_details.mapType == 1) {
        this.locationService.getMyLatLongFromGoogle(GlobalFieldsListingPro.filtersSearch.location).subscribe((data: any) => {
          if (data.results && data.results.length > 0 && data.results[0].geometry && data.results[0].geometry.location) {
            GlobalFieldsListingPro.filtersSearch.lat = data.results[0].geometry.location.lat;
            GlobalFieldsListingPro.filtersSearch.lng = data.results[0].geometry.location.lng;
          }
        });
      } else { //Open Street Maps
        this.locationService.getLatLongFromOpenMaps(GlobalFieldsListingPro.filtersSearch.location).subscribe((data: any) => {
          console.log(data);
          if (data && data.length > 0) {
            GlobalFieldsListingPro.filtersSearch.lat = data[0].lat;
            GlobalFieldsListingPro.filtersSearch.lng = data[0].lon;
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


  initialCall(reloadOrder) {
    this.GlobalFieldsListingPro.filteredListings = undefined;
    const setLocation = GlobalFieldsListingPro.filtersSearch.location;

    GlobalFieldsListingPro.clearFilters();
    if (setLocation)
      GlobalFieldsListingPro.filtersSearch.location = setLocation;


   //TODO: Set the order to a default one:
    // GlobalFieldsListingPro.filtersSearch.order = GlobalFieldsMyListing.selectedTypeDetail.case27_listing_type_search_page.order.options[0].key;

    GlobalFieldsListingPro.getFilteredListingFirstTime(this.lpservice, this.locationService, true);

  }


  callServiceToGetFilteredListings() {
    this.lpservice.getFilteredListings()
      .subscribe((res: SearchResult_LP) => {
        GlobalFieldsListingPro.filtersSearch.listingsCount = res.listingsCount;

        if (GlobalFieldsListingPro.filtersSearch.currentPage == 0) {
          GlobalFieldsListingPro.filteredListings = [];
          //GlobalFieldsListingPro.filtersSearch.noMorePage = false;
        }
        GlobalFieldsListingPro.filteredListings = GlobalFieldsListingPro.filteredListings.concat(res.data);
        console.log(res.data);
        this.loadingMoreData = false;

        /*if (GlobalFieldsMyListing.filteredListings.length < 10 || res.data.length < 10)
          GlobalFieldsMyListing.filtersSearch.noMorePage = true;
        */
      });
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


  clearFilters() {
    GlobalFieldsListingPro.clearFilters();
    this.initialCall(true);
  }

}
