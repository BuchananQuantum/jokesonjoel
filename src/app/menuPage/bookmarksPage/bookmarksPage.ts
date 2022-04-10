import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {GlobalFields} from "../../GlobalFields";
import {Service} from '../../services/Service';
import {AlertController, ModalController, NavController, Platform} from '@ionic/angular';
import {Dialogs} from '@ionic-native/dialogs/ngx';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {NativeGeocoder} from '@ionic-native/native-geocoder/ngx';
import {ThemeService} from '../../services/theme.service';
import {LocationService} from '../../services/LocationService';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {Profile} from '../../entities/profile';
import {Listing} from '../../entities/myListing/listing';
import {Router} from '@angular/router';
import {ModalAddNode} from '../../MyListing/modalAdd/modalAdd';
import {MyListingService} from '../../services/MyListingService';

@Component({
    selector: 'bookmarksPage',
    templateUrl: 'bookmarksPage.html',
    styleUrls: ['bookmarksPage.scss']
})
export class BookmarksPage {

    GlobalFields = GlobalFields;

    currentUserInfo: Profile;
    bookmarkedListings: Listing[];
    loadingSection = false;


    constructor(private service: Service, private mlservice: MyListingService,  public translate: TranslateService,  public navController: NavController,
                private dialogs: Dialogs, private platform: Platform, private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder,
                private alertController: AlertController, private router: Router, private modalCtrl: ModalController) {

    }

    ionViewDidEnter() {
        this.service.setWhiteBlackBackgroundStatusBar();

        if (GlobalFields.isLoggedIn) {
            this.getBookmarkedListings();
            this.getCurrentUserInfo();
        }else{
            this.router.navigateByUrl('tabs/menuPage');
        }

    }

    getCurrentUserInfo() {
        if (GlobalFields.isLoggedIn) {
            this.loadingSection = true;
            this.service.getCurrentUserInfo().subscribe((data: any) => {
                this.currentUserInfo = data;
                this.loadingSection = false;
            }, err => {
                this.service.refreshCookie();
            });
        }
    }


    getBookmarkedListings() {
        if (GlobalFields.isLoggedIn) {
            this.loadingSection = true;
            this.mlservice.getBookmarkedListings().subscribe((data: any) => {
                this.GlobalFields.bookmarkedListings = data;
                this.loadingSection = false;
            }, err => {
                this.service.refreshCookie();
            });
        }
    }



    undoBookmark(id) {
        this.loadingSection = true;
        this.mlservice.undoBookmark(id).subscribe((data: any) => {
            this.getBookmarkedListings();
        }, err => {
            this.service.refreshCookie();
        });
    }


}
