import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {HomePage} from './home';
import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared.module';
import {UtilitiesModule} from '../../Shared/utilities/utilities.module';
import {PostsPage} from '../../Shared/postsPage/postsPage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
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
export class HomePageModule {
}
