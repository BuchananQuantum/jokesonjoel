import {Component} from '@angular/core';
import {GlobalFields} from '../../../GlobalFields';
import {Service} from '../../../services/Service';
import {AlertController, ModalController, Platform} from '@ionic/angular';
import {Listing} from '../../../entities/myListing/listing';
import {FilterModal_LP} from '../filterModal/filterModal_LP';
import {LocationService} from '../../../services/LocationService';
import {Map, tileLayer, marker, Marker, icon, divIcon} from 'leaflet';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import {MyListingService} from '../../../services/MyListingService';
import {ListingPage_LP} from '../../listingPage/listing-page_LP.component';
import {Listing_LP, SearchResult_LP} from '../../../entities/listingPro/Listing_LP';
import {ListingProService} from '../../../services/ListingProService';
import {GlobalFieldsListingPro} from '../../../GlobalFieldsListingPro';

//import * as L from 'leaflet';


/*import {
    GoogleMaps,
    GoogleMap,
    GoogleMapsEvent,
    GoogleMapOptions,
    Marker,
    Environment
} from '@ionic-native/google-maps/ngx';
*/

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  listing?: any;
  iconUrl?: { url: string, labelOrigin: { x: number, y: number }, scaledSize: { height: number, width: number } };
  iconNameHtml?: string,
  iconImgUrlHtml: string,
  labelOptions?: {
    color: string,
    fontFamily: string,
    fontSize: string,
    fontWeight: string,
    text: string
  };
}

@Component({
  selector: 'map-filter',
  templateUrl: 'mapModal_LP.html',
  styleUrls: ['mapModal_LP.scss']
})
export class MapModal_LP {


  // slides: https://docs.google.com/presentation/d/e/2PACX-1vScoho1ensbR4qCI9AIuQN55BZVvK73pAjI7sumDvW3CrxxHnrmpXWUjx2-8CpFibqU1EjLKCRhuthJ/pub?start=false&loop=false&delayms=3000&slide=id.g291e604610_0_6

  GlobalFields = GlobalFields;
  GlobalFieldsListingPro = GlobalFieldsListingPro;
  // map: GoogleMap;

  osMap: Map; //Open Street Map
  selectedListing: Listing_LP = undefined;

  myLat: number = 51.673858;
  myLng: number = 7.815982;

  public origin: any;
  public destination: any;

  loadingMoreData = false;

  currentZoom = 11;

  showSelected = false;

  loading = true;

  allListings: Listing_LP[] = [];

  positions: marker[] = [];


  constructor(public service: Service, public lpservice: ListingProService, public mlservice: MyListingService, public modalCtrl: ModalController, public locationService: LocationService, public alertController: AlertController) {

    //this.service.setTransparentBackgroundStatusBar();
  }

  ionViewDidEnter() {
    //show only listings in the result
    if (!this.GlobalFields.site_details.showMapAllListings) {
      this.getPositions();
    } else //show all the listings
      this.getAllListings();
  }


  iniMaps() {
    if (GlobalFields.site_details.mapType == 2) // Open Street Maps
      this.getPositionsOSMaps();
    else if (GlobalFields.site_details.mapType == 1) // Google Maps
      this.loading = false;
  }


  closeModal() {
    this.modalCtrl.dismiss();
  }


  getPositions() {
    this.loading = true;
    this.positions = [];
    this.myLat = 0;
    this.myLng = 0;
    console.log('get positions');

    let listings: Listing_LP[] = [];
    if (!this.GlobalFields.site_details.showMapAllListings)
      listings = GlobalFieldsListingPro.filteredListings;
    else
      listings = this.allListings;


    let currentAddressCompute = 0;
    console.log(listings)
    listings.forEach(listing => {
      if (listing.post_meta) {
        this.loading = true;
        if (listing.post_meta.latitude && listing.post_meta.latitude!='' && listing.post_meta.longitude && listing.post_meta.longitude!='') {
          this.createPosition(listing, parseFloat(listing.post_meta.latitude), parseFloat(listing.post_meta.longitude));
          currentAddressCompute += 1;
          console.log(listing)
          this.endOfComputeAddresses(listings.length, currentAddressCompute);
        }
        //Compute lat and long from gAddress
        else if (listing.post_meta && listing.post_meta.gAddress) {
          if (GlobalFields.site_details.mapType == 1) {
            this.locationService.getMyLatLongFromGoogle(listing.post_meta.gAddress).subscribe((data: any) => {
              if (data.results && data.results.length > 0 && data.results[0].geometry && data.results[0].geometry.location) {
                this.createPosition(listing, data.results[0].geometry.location.lat, data.results[0].geometry.location.lng);
                currentAddressCompute += 1;
                console.log(listing)
                this.endOfComputeAddresses(listings.length, currentAddressCompute);
              }
            });
          } else { //Open Street Maps
            this.locationService.getLatLongFromOpenMaps(listing.post_meta.gAddress).subscribe((data: any) => {
              console.log(data);
              if (data && data.length > 0) {
                this.createPosition(listing, data[0].lat, data[0].lon);
                currentAddressCompute += 1;
                console.log(listing)
                this.endOfComputeAddresses(listings.length, currentAddressCompute);
              }
            });
          }
        } else {
          currentAddressCompute += 1;
          console.log(listing)
          this.endOfComputeAddresses(listings.length, currentAddressCompute);
        }
      }
      else {
          currentAddressCompute += 1;
          console.log(listing)
          this.endOfComputeAddresses(listings.length, currentAddressCompute);
        }
    });


    //center of the map as mean lat and mean long of the results
    this.myLat = this.getMeanLat();
    this.myLng = this.getMeanLng();
    if (this.myLat == 0 && this.myLat == 0 && GlobalFields.lat && GlobalFields.lat) {
      this.myLat = GlobalFields.lat;
      this.myLng = GlobalFields.lat;
    }


    if (!GlobalFieldsListingPro.filtersSearch.location)
      this.currentZoom = 6;

    console.log(this.myLat + ' ' + this.myLng);

  }


  endOfComputeAddresses(totals: number, current: number) {
    console.log(totals)
    console.log(current)
    if (totals == current) {
      console.log(this.positions)
      this.iniMaps();
    }

  }

  createPosition(listing: Listing_LP, lat, long) {

    let imgUrl = '';
    if (listing.category && listing.category.icon1)
      imgUrl = listing.category.icon1;
    else
      imgUrl = '../../assets/imgs/placeholder_location.png';

    this.positions.push({
      lat: parseFloat(listing.post_meta.latitude),
      lng: parseFloat(listing.post_meta.longitude),
      label: listing.post_title,
      draggable: false,
      listing: listing,
      iconUrl: this.getMarkerIcon(listing),
      iconNameHtml: imgUrl,
      iconImgUrlHtml: this.getListingImg(listing),
      labelOptions: {
        color: 'white',
        fontFamily: 'roboto',
        fontSize: '14px',
        fontWeight: 'bold',
        text: ' '
      }
    });
  }

  getPositionsOSMaps() {
    this.loading = true;

    console.log(this.currentZoom);
    console.log(GlobalFieldsListingPro.filtersSearch.location);

    this.osMap = new Map('map').setView([this.myLng, this.myLat], this.currentZoom);

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright"  target="_blank">OpenStreetMap</a> contributors'
    }).addTo(this.osMap);


    const customMarkerIcon = icon({
      iconUrl: '../../assets/imgs/placeholder_location.png',
      iconSize: [64, 64],
      popupAnchor: [0, -20]
    });


    let makerToOpen;


    let markers: any = new L.MarkerClusterGroup();


    for (let i = 0; i < this.positions.length; i++) {
      const pos: marker = this.positions[i];

      const html = '<div class="imgMapPin" style="background-image: url(' + pos.iconImgUrlHtml + ')"><img class="iconMapPinWithImg" src="' + pos.iconNameHtml + '" style="background-color:#f1f1f1"></div>';


      //Custom icon
      let defaultIcon = divIcon({
        iconUrl: '../../../assets/imgs/maps/marker-icon.png',
        shadowUrl: '../../../assets/imgs/maps/marker-shadow.png',
        html: html

      });

      //Marker.prototype.options.icon = defaultIcon; //Set all the pins as equal

      const m = marker([pos.lat, pos.lng], {icon: defaultIcon});

      let address = '';
      if (pos.listing.location && pos.listing.location.length > 0)
        address = pos.listing.location[0].name;
      else if (pos.listing.post_meta && pos.listing.post_meta.gAddress)
        address = pos.listing.post_meta.gAddress;


      m.bindPopup(`<b>${pos.label}</b><br><span class="listingLocation">${address}</span>`, {autoClose: false})
        .on('click', () => this.clickedMarker(pos))
        .on('popupclose', () => this.showSelected = false);

      console.log(pos.listing);
      console.log(m);

      // if(!this.GlobalFields.site_details.showMapAllListings)
      //     m.addTo(this.osMap);
      // else
      markers.addLayer(m);

      if (i == 0)
        makerToOpen = m;


    }

    // if(this.GlobalFields.site_details.showMapAllListings)
    this.osMap.addLayer(markers);


    //this.osMap.setView([this.myLng, this.myLat], this.currentZoom);

    this.osMap.panTo([this.myLat, this.myLng]);

    //this.osMap.openPopup(makerToOpen.getPopup());

    setTimeout(() => {
      this.loading = false;
      //  this.osMap.panTo((new L.LatLng(this.myLat, this.myLng)));
    }, 1000);


  }


  getMeanLat(): number {
    let lat = 0;
    this.positions.forEach(mark => {
      lat = lat + mark.lat;
    });
    if (this.positions.length > 0)
      return lat / this.positions.length;
    return lat;
  }

  getMeanLng(): number {
    let lng = 0;
    this.positions.forEach(mark => {
      lng = lng + mark.lng;
    });
    if (this.positions.length > 0)
      return lng / this.positions.length;
    return lng;
  }

  clickedMarker(marker: marker) {

    this.selectedListing = marker.listing;
    this.showSelected = true;

    console.log(marker.listing);
  }


  getMarkerIcon(listing: Listing_LP) {
    let imgUrl = '';

    if (listing.category && listing.category.icon1)
      imgUrl = listing.category.icon1;
    else
      imgUrl = '../../assets/imgs/placeholder_location.png';

    let res = {
      url: imgUrl,
      labelOrigin: {x: 22.5, y: 20},
      scaledSize: this.getImgSize(imgUrl)
    };

    return res;

  }

  getImgSize(url: string): any {
    let res: { height: number; width: number } = {height: 40, width: 40};
    let img = new Image();
    img.src = url;
    if (Number(img.height) >= 40 && Number(img.width) >= 40) {
      if (Number(img.height) > Number(img.width))
        res = {height: 40, width: 40 * (Number(img.width) / Number(img.height))};
      else if (Number(img.width) > Number(img.height))
        res = {width: 40, height: 40 * (Number(img.height) / Number(img.width))};
    } else {
      res = {width: Number(img.width), height: Number(img.height)};
    }
    if (res.height == 0 || res.width == 0)
      res = {height: 40, width: 40};
    return res;
  }

  getImgWidth(url: string): any {
    var img = new Image();
    img.src = url;
    if (Number(img.height) < 260) {
      return 'auto';
    } else {
      return '100%';
    }

  }

  async openModalListing() {

    const modal = await this.modalCtrl.create({
      component: ListingPage_LP,
    });
    return await modal.present();
  }

  async openFilter(listing: Listing) {

    GlobalFieldsListingPro.selectedListing = listing;

    const filterModal = await this.modalCtrl.create({
      component: FilterModal_LP,
    });
    return await filterModal.present();

  }


  goToMyLocation() {
    if (this.GlobalFields.lat && this.GlobalFields.long) {
      this.loading = true;
      this.myLat = this.GlobalFields.lat;
      this.myLng = this.GlobalFields.long;
      this.currentZoom = 12;
      this.loading = false;
      console.log('goToMyLocation');
    }
  }

  centerChanged(event: any) {
    //console.log(event);
    /*  this.myLat = event.myLat;
      this.myLng = event.myLng;
      */
  }

  /*
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


  callServiceToGetFilteredListings() {
    this.mlservice.getFilteredListings()
      .subscribe((data: any) => {
        if (GlobalFieldsMyListing.filtersSearch.currentPage == 1) {
          GlobalFieldsMyListing.filteredListings = [];
          GlobalFieldsMyListing.filtersSearch.noMorePage = false;
        }
        GlobalFieldsMyListing.filteredListings = GlobalFieldsMyListing.filteredListings.concat(GlobalFieldsMyListing.fixWrongImgCoverField(data));
        console.log(data);
        this.getPositions();
        this.loadingMoreData = false;

        if (GlobalFieldsMyListing.filteredListings.length < 10 || data.length == 0)
          GlobalFieldsMyListing.filtersSearch.noMorePage = true;

      });
  }
*/
  getAllListings() {
    this.lpservice.getAllListings()
      .subscribe((res: SearchResult_LP) => {
        if (res.success) {
          this.allListings = res.data;
          this.getPositions();
          this.iniMaps();
        }
      });
  }

  getListingImg(listing: Listing_LP) {
    let image = '';
    if (listing.gallery && listing.gallery.cover_image)
      image = listing.gallery.cover_image;
    else image = GlobalFields.site_details.placeholderImgUrl;
    return image;
  }


}
