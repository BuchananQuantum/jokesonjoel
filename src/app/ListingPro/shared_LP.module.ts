import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {IonicImageLoader} from 'ionic-image-loader';
import {RouterModule} from '@angular/router';
import {ListingList_LP} from './listingList/listingList_LP';
import {ListingPage_LP} from './listingPage/listing-page_LP.component';
import {ModalGenericSearch_LP} from './home/modalGenericSearch/modal-generic-search_LP';
import {ModalWriteReview_LP} from './listingPage/modalWriteReview/modalWriteReview_LP';
import {SharedModule} from '../shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    ListingList_LP,
    ListingPage_LP,
    ModalGenericSearch_LP,
    ModalWriteReview_LP
  ],
  exports: [
    ListingList_LP,
    ListingPage_LP,
    IonicImageLoader,
    RouterModule,
    SharedModule
  ],
  entryComponents:[
    ListingPage_LP,
    ModalGenericSearch_LP,
    ModalWriteReview_LP
  ]
})

export class SharedModule_LP {
}
