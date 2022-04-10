import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {NgModule} from "@angular/core";
import {SharedModule} from '../../shared.module';
import {MessagesPage} from './messagesPage';
import {ChatPage} from './chatPage/chatPage';
import {LoginComponentModule} from '../../menuPage/loginComponent/loginComponent.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: MessagesPage
            },
            {
                path: 'chatPage',
                component: ChatPage
            }
        ]),
        LoginComponentModule
    ],
    declarations: [MessagesPage, ChatPage]
})
export class MessagesPageModule {}
