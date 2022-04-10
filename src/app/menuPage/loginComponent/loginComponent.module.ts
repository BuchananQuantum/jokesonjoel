import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import {NgModule} from "@angular/core";
import {LoginComponent} from "./loginComponent";
import {SharedModule} from '../../shared.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule
    ],
    declarations: [LoginComponent],
    entryComponents: [LoginComponent],
    exports: [LoginComponent]
})
export class LoginComponentModule {}
