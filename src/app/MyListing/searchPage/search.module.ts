import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {NgModule} from '@angular/core';
import {SearchPage} from './searchPage';
import {SharedModule} from '../../shared.module';
import {MapModal} from './mapModal/mapModal';
import {UtilitiesModule} from '../../Shared/utilities/utilities.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: SearchPage
      }
    ]),
    UtilitiesModule,

  ],
  declarations: [SearchPage, MapModal],
  exports: [MapModal, UtilitiesModule]
})
export class SearchPageModule {
}
