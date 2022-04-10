import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {NgModule} from "@angular/core";
import {SharedModule} from '../../shared.module';
import {CategoriesList} from './categoriesList';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: CategoriesList
            }
        ])
    ],
    declarations: [CategoriesList]
})
export class CategoriesListModule {}
