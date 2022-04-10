import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {NgModule} from "@angular/core";
import {LoadingPage} from './loadingPage';
import {SharedModule} from '../../../shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
          {
            path: '',
            component: LoadingPage
          }
        ]),
      SharedModule
    ],
    declarations: [LoadingPage]
})
export class LoadingPageModule {}
