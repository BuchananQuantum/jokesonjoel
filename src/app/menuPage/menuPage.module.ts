import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {NgModule} from '@angular/core';
import {MenuPage} from './menuPage';
import {SettingsPage} from './settingsPage/settingsPage';
import {SharedModule} from '../shared.module';
import {LoginComponentModule} from './loginComponent/loginComponent.module';
import {MyListingsPage} from './myListingsPage/myListingsPage';
import {BookmarksPage} from './bookmarksPage/bookmarksPage';
import {NotificationsPage} from './notificationsPage/notificationsPage';
import {BookmarksPage_LP} from '../ListingPro/menuPage_LP/bookmarksPage/bookmarksPage_LP';
import {SharedModule_LP} from '../ListingPro/shared_LP.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SharedModule_LP,
    RouterModule.forChild([
      {
        path: '',
        component: MenuPage
      }, {
        path: 'settings',
        component: SettingsPage
      }, {
        path: 'myListingsPage',
        component: MyListingsPage
      }, {
        path: 'bookmarksPage',
        component: BookmarksPage
      }, {
        path: 'bookmarksPage_LP',
        component: BookmarksPage_LP
      }, {
        path: 'notificationsPage',
        component: NotificationsPage
      }
    ]),
    LoginComponentModule
  ],
  declarations: [MenuPage, SettingsPage, MyListingsPage, BookmarksPage, BookmarksPage_LP, NotificationsPage]
})
export class MenuPageModule {
}
