import {Component, Input, OnInit} from '@angular/core';
import {Constants} from '../../Constants';
import {GlobalFields} from '../../GlobalFields';
import {GlobalFieldsMyListing} from '../../GlobalFieldsMyListing';
import {AlertController, ModalController, NavController, Platform} from '@ionic/angular';
import {Service} from '../../services/Service';
import {TranslateService} from '@ngx-translate/core';
import {DomSanitizer} from '@angular/platform-browser';

import {ImageAttribute} from 'ionic-image-loader';
import {ListingTypeDetail} from '../../entities/myListing/listingTypeDetail';
import {MyListingService} from '../../services/MyListingService';
import {Listing_LP} from '../../entities/listingPro/Listing_LP';
import {ListingProService} from '../../services/ListingProService';
import {GlobalFieldsListingPro} from '../../GlobalFieldsListingPro';
import {ListingPage_LP} from '../listingPage/listing-page_LP.component';


@Component({
  selector: 'listingList_LP',
  templateUrl: 'listingList_LP.html',
  styleUrls: ['listingList_LP.scss']
})
export class ListingList_LP implements OnInit {

  Constants = Constants;
  GlobalFields = GlobalFields;
  GlobalFieldsListingPro = GlobalFieldsListingPro;
  public static popover = undefined;


  @Input() listing: Listing_LP;
  @Input() search: boolean; //true: search, false: not search
  @Input() type: string; //"1": box, "2": list, "3": box with logo
  @Input() little: boolean; //For home 2 columns

  listingType: ListingTypeDetail;

  constructor(public service: Service, private lpservice: ListingProService, private mlservice: MyListingService, public modalCtrl: ModalController, public navController: NavController,
              public platform: Platform, public translate: TranslateService, private _sanitizer: DomSanitizer,
              public alertController: AlertController) {
  }

  ngOnInit() {

    if (!this.type) {
      switch (GlobalFieldsListingPro.listingTypeDetail.search_template) {
        case 'grid_view':
          this.type = '3';
          break;
        case 'grid_view2':
          this.type = '1';
          break;
        case 'grid_view3':
          this.type = '3';
          break;
        case 'grid_view_v2':
          this.type = '1';
          break;
        case 'grid_view_v3':
          this.type = '3';
          break;
        case 'list_view':
          this.type = '2';
          break;
        case 'list_view_v2':
          this.type = '2';
          break;
        case 'lp-list-view-compact':
          this.type = '2';
          break;
        default:
          this.type = '2';
          break;
      }
    }


  }


  getListingDetails(listing: Listing_LP) {
    console.log('getListingDetails');
    this.GlobalFields.loadingSoft = true;
    this.lpservice.getListingDetailsById(listing.ID).subscribe((data: Listing_LP) => {
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

    const listingModal = await this.modalCtrl.create({
      component: ListingPage_LP,
    });
    return await listingModal.present();

    //  this.navCtrl.push(ListingPage_LP);

  }


  isWhiteBackgroundBoxShadow(): string {
    if (GlobalFields.isWhiteBackground())
      return '';
    else
      return ' boxShadowList';
  }


  getCardClass(): string {
    if (this.search)
      return 'listCardNoFixedHeight card card-ios ';
    else
      return 'listCard card card-ios ';
  }


  getImgCachedClass(type): ImageAttribute[] {
    let class_name = 'imgCachedAsBackground ';

    if (type == '1') {
      if (this.search)
        class_name = class_name + 'backImgBiggerCached backgroundListingImgCached shadedImgCachedAirbnb';
      else
        class_name = class_name + 'backImgCached backgroundListingImgCached shadedImgCachedAirbnb';
    }
    if (type == '2' || type == '2b')
      class_name = class_name + 'backImgListCache';
    if (type == '3')
      class_name = class_name + 'backImgSquaredAndLogoCached shadedImgCached';

    const imageAttributes: ImageAttribute[] = [];
    imageAttributes.push({
      element: 'class',
      value: class_name
    });


    return imageAttributes;
  }

  getImgCachedClassByClass(classes: string): ImageAttribute[] {

    let class_name = 'imgCachedAsBackground ' + classes;

    const imageAttributes: ImageAttribute[] = [];
    imageAttributes.push({
      element: 'class',
      value: class_name
    });

    return imageAttributes;
  }


  isClaimed(): boolean {
    if (this.listing.post_meta && this.listing.post_meta.claimed_section =="claimed")
      return true;
    else return false;
  }


  getListingImg(listing: any) {
    let image = '';

    if (listing.gallery && listing.gallery.cover_image)
      image = listing.gallery.cover_image;
    else
      image = GlobalFields.site_details.placeholderImgUrl;
    return image;
  }

  getBackgroundDarker(listing: any) {
    let image = '';

    if (listing.img_cover)
      image = listing.img_cover;
    if (!listing.img_cover && listing.listing_data && listing.listing_data._job_cover)
      image = listing.listing_data._job_cover;
    else if (!listing.img_cover && listing.listing_data && !listing.listing_data._job_cover)
      image = GlobalFields.site_details.placeholderImgUrl;
    return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient(to top, rgba(23, 23, 23, 0.52), rgba(23, 23, 23, 0.52)), url(${image})`);
  }

  getStartsHtml(rating: string): string[] {
    let num = (parseFloat(rating)) / 2;
    let res = [];
    while (num >= 1) {
      res.push('');
      num = num - 1;
    }
    if (num < 1 && num > 0)
      res.push('-half');

    for (let i = 0; i < 5 - res.length; i++) {
      res.push('-outline');
    }

    return res;
  }

  getTruncatedDecimal(n: number) {
    return n.toFixed(1);
  }


}


