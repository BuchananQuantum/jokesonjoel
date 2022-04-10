import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {NgModule} from '@angular/core';
import {SearchPage_LP} from './searchPage_LP';
import {SharedModule} from '../../shared.module';
import {MapModal_LP} from './mapModal/mapModal_LP';
import {UtilitiesModule} from '../../Shared/utilities/utilities.module';
import {SharedModule_LP} from '../shared_LP.module';
import {FilterModal_LP} from './filterModal/filterModal_LP';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: SearchPage_LP
      }
    ]),
    UtilitiesModule,
    SharedModule_LP,

  ],
  declarations: [SearchPage_LP, MapModal_LP, FilterModal_LP],
  exports: [MapModal_LP, UtilitiesModule]
})
export class SearchPage_LPModule {
}
