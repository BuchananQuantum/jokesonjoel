import { Component } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {Service} from '../../../services/Service';
import {GlobalFields} from '../../../GlobalFields';
import {GlobalFieldsMyListing} from '../../../GlobalFieldsMyListing';
import {Listing} from '../../../entities/myListing/listing';
import {ListingPage} from '../../listingPage/listingPage';



@Component({
  selector: 'popover-search',
  templateUrl: 'popoverSearch.html'
})

export class PopoverSearch {

  GlobalFields = GlobalFields;
  GlobalFieldsMyListing = GlobalFieldsMyListing;

  constructor(public popoverController:  ModalController, public service: Service) {
  }


    async openModalListing(listing: Listing) {
        GlobalFieldsMyListing.selectedListing = listing;

        const modal = await this.popoverController.create({
            component: ListingPage,
            componentProps: { value: 123 }
        });
        return await modal.present();
    }

  closePopover(){
    this.popoverController.dismiss();
  }
}
