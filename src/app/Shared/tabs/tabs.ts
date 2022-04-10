import {Component} from '@angular/core';
import {HomePage} from '../../MyListing/home/home';
import {CustomPage} from '../customPage/customPage';
import {ModalController} from '@ionic/angular';
import {ModalAddNode} from '../../MyListing/modalAdd/modalAdd';
import {SearchPage} from '../../MyListing/searchPage/searchPage';

import {GlobalFields} from "../../GlobalFields";
import {Router, RouterEvent} from '@angular/router';
import {ModalAdd_LP} from '../../ListingPro/modalAdd_LP/modalAdd_LP';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1Root = HomePage;
    tab2Root = SearchPage;
    tab3Root = CustomPage;

    GlobalFields = GlobalFields;

    selectedPath = '';


    constructor(public modalCtrl: ModalController, private router: Router) {
        this.selectedPath = this.router.url;
        this.router.events.subscribe((event: RouterEvent) => {
            if(event && event.url){
                this.selectedPath = event.url;
            }
        });
    }

/*
    openAddModal() {
        let profileModal = this.modalCtrl.create(ModalAddNode, {userId: 8675309});
        profileModal.present();
    }
*/

    async openAddModal() {
        const profileModal = await this.modalCtrl.create({
            component: GlobalFields.site_details.themeEnabled == "listing-pro" ? ModalAdd_LP : ModalAddNode,
            componentProps: {userId: 8675309}
        });
        return await profileModal.present();
    }


    getStyleSelectedTab(path:string){
        if (this.selectedPath.includes(path))
            return {'color': this.GlobalFields.site_details.primaryColor, 'border-bottom': 'solid 2px'};
    }

    showCircleAsPlusIcon(): boolean{
      let count=0;
      const tabs = document.getElementsByClassName("tab");
      if(tabs && tabs.length>0)
        count = tabs.length
      count;

      return (count %2 == 1 ?  true : false);
    }

}



