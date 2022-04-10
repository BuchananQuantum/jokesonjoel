import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {NgModule} from "@angular/core";
import {SharedModule} from '../../shared.module';
import {CategoriesList_LP} from './categoriesList_LP';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: CategoriesList_LP
            }
        ])
    ],
    declarations: [CategoriesList_LP]
})
export class CategoriesList_LPModule {}
