import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared.module';
import {UtilitiesModule} from '../../Shared/utilities/utilities.module';
import {PostsPage} from '../../Shared/postsPage/postsPage';
import {SharedModule_LP} from '../shared_LP.module';
import {HomePage} from './home';

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
        component: HomePage
      },
      {
        path: 'posts',
        component: PostsPage
      }
    ]),
    UtilitiesModule
  ],
  declarations: [HomePage]
})
export class HomePageModule_LP {
}
