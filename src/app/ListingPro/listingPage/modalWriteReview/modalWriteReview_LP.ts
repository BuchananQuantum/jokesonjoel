import {Component} from '@angular/core';
import {GlobalFields} from '../../../GlobalFields';
import {ImagePicker, ImagePickerOptions, OutputType} from '@ionic-native/image-picker/ngx';


import 'hammerjs';
import {TranslateService} from '@ngx-translate/core';
import {Service} from '../../../services/Service';
import {AlertController, ModalController, NavParams, Platform} from '@ionic/angular';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {WebView} from '@ionic-native/ionic-webview/ngx';
import {Base64} from '@ionic-native/base64/ngx';
import {GlobalFieldsMyListing} from '../../../GlobalFieldsMyListing';
import {MyListingService} from '../../../services/MyListingService';
import {GlobalFieldsListingPro} from '../../../GlobalFieldsListingPro';
import {ListingProService} from '../../../services/ListingProService';
import {SearchResult_LP} from '../../../entities/listingPro/Listing_LP';

@Component({
  selector: 'modalWriteReview_LP',
  templateUrl: 'modalWriteReview_LP.html',
  styleUrls: ['modalWriteReview_LP.scss']

})
export class ModalWriteReview_LP {

  GlobalFields = GlobalFields;
  GlobalFieldsListingPro = GlobalFieldsListingPro;


  customFieldsStars: { key: string, value: number, label: string }[] = [];

  review = undefined;

  title: string;
  comment: string;
  gallery: {
    full?: string;
    thumbnail?: string;
  }[] = [];
  new_gallery: any[] = []; //string[] ios | SafeHtml[] android
  new_gallery_File: Blob[] = [];
  new_gallery_Name: string[] = [];

  public cameraOptions: ImagePickerOptions = {
    maximumImagesCount: 1,
    quality: OutputType.DATA_URL
  };


  errorMgs: string = '';

  constructor(public translate: TranslateService, private service: Service, private lpservice: ListingProService, private mlservice: MyListingService, private statusBar: StatusBar,
              private modalCtrl: ModalController, public navParams: NavParams, public alertController: AlertController,
              private imagePicker: ImagePicker, private sanitizer: DomSanitizer, private webview: WebView, private platform: Platform,
              private base64: Base64) {


    GlobalFieldsListingPro.listingTypeDetail.ratings.multi_rating.forEach(rat=>{
      this.customFieldsStars.push({key: rat, value: 0, label: rat});
    })


    if (GlobalFieldsListingPro.oldReview) { //already inserted a comment
      this.title = GlobalFieldsListingPro.oldReview.post_title;
      this.comment = GlobalFieldsListingPro.oldReview.post_content;
      if (GlobalFieldsListingPro.oldReview.gallery)
        this.gallery = GlobalFieldsListingPro.oldReview.gallery;
      console.log(this.customFieldsStars);
      console.log(GlobalFieldsMyListing.oldReview);
      for (let i = 0; i < this.customFieldsStars.length; i++) {
        let index = undefined;
        this.customFieldsStars.forEach(cust_rat =>{
          cust_rat.value = GlobalFieldsListingPro.oldReview.rating[cust_rat.key];
          if(!cust_rat.value)
            cust_rat.value = 0;
        })
      }
    }


  }

  ionViewDidEnter() {
    this.service.setWhiteBlackBackgroundStatusBar();
  }


  postAReview() {

    this.errorMgs = '';
    if (!this.comment || this.comment == '') {
      this.errorMgs = 'Enter a message';
      return;
    }
    this.customFieldsStars.forEach(elem => {
      if (elem.value == 0) {
        this.errorMgs = 'Enter at list 1 star';
        return;
      }
    });

    if (!this.errorMgs) {
      this.GlobalFields.loadingSoft = true;

      if (this.gallery && this.gallery.length > 0)
        this.gallery.forEach(img => {
          //galleryIds.push(img.id);
        });

      const rew_id = GlobalFieldsListingPro.oldReview && GlobalFieldsListingPro.oldReview.ID ? GlobalFieldsListingPro.oldReview.ID : undefined;

      this.lpservice.postAReview(rew_id, GlobalFieldsListingPro.selectedListing.ID, this.title, this.comment, this.customFieldsStars, this.gallery, this.new_gallery_File, this.new_gallery_Name).subscribe(() => {
        this.service.clearAllCache();
        setTimeout(() => {
          this.lpservice.getListingDetailsById(GlobalFieldsListingPro.selectedListing.ID).subscribe(data => {
            GlobalFieldsListingPro.selectedListing = data;
            this.GlobalFields.loadingSoft = false;
            GlobalFieldsListingPro.filtersSearch.currentPage = 0;
            GlobalFieldsListingPro.doSearch(this.lpservice);
            this.closeModal();
          }, error => {
            console.log(error);
            let msg = '';
            if (error && error.error)
              msg = error.error.message;
            else if (error)
              msg = error.message;
            this.GlobalFields.openAlert(this.alertController, 'Error', 'Error on server', msg);
            this.GlobalFields.loadingSoft = false;
          });
        }, 100);
      }, err => {
        this.errorMgs = 'Error on server';
        console.log(err);
        this.GlobalFields.loadingSoft = false;
      });
    }
  }


  getStartsHtml(rating: number): string[] {
    let num = rating;
    let max = 5;
    let res = [];
    while (num >= 1) {
      res.push('fas fa-star colored');
      num = num - 1;
      max = max - 1;
    }

    for (let i = 0; i < max; i++) {
      res.push('far fa-star empty');
    }

    return res;
  }


  getSecurePageURL(url) {

    if (!url.includes('https')) {
      url.replace('http', 'https');
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' + url);
  }


  openImagePicker() {

    let outputType: number = 0; //0 Return image file URI, 1 base64img on android crash BUT WORKS FOR Information google-ios

    if (this.platform.is('ios'))
      outputType = 1;
    if (this.platform.is('android'))
      outputType = 0;

    try {
      let options = {
        maximumImagesCount: 15,
        outputType: outputType
      };
      this.imagePicker.getPictures(options).then((results) => {
        for (let i = 0; i < results.length; i++) {
          console.log(results[i]);
          if (results[i] != 0 && results[i] != '0' && results[i] != 'K') { //This is returned when no permission when button is clicked
            if (outputType === 0) { //file URI - Android
              this.base64.encodeFile(results[i]).then((base64File: string) => {
                // this.new_gallery.push(base64File);
                if (base64File) {
                  //base64File.replace("image/*", "image/jpeg")
                  console.log(base64File);
                  this.new_gallery.push((<any>window).Ionic.WebView.convertFileSrc(results[i]));
                  this.new_gallery_Name.push(results[i]);
                  this.new_gallery_File.push(this.service.dataURItoBlob(base64File));
                }
              }, (err) => {
                console.log(err);
              });
            }
            if (outputType === 1) { //base64 - Information google-ios
              this.new_gallery.push('data:image/jpeg;base64,' + results[i]);
              this.new_gallery_Name.push(results[i]);
              this.new_gallery_File.push(this.service.dataURItoBlob(this.new_gallery[this.new_gallery.length - 1]));
            }
          }
        }
      }, (err) => {
        //For testing in browser
        console.log(err);
      });
    } catch (error) {
      console.error(error);
    }
  }


  deleteOldImg(index: number) {

    this.gallery.splice(index, 1);

  }

  deleteNewImg(index: number) {

    this.new_gallery.splice(index, 1);
    this.new_gallery_File.splice(index, 1);
    this.new_gallery_Name.splice(index, 1);

  }

  closeModal() {
    //this.service.setTransparentBackgroundStatusBar();
    this.modalCtrl.dismiss({});
  }


}

