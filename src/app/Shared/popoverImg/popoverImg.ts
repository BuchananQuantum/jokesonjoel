

import {Component} from '@angular/core';
import {GlobalFields} from '../../GlobalFields';


import 'hammerjs';
import {GlobalFieldsMyListing} from '../../GlobalFieldsMyListing';

@Component({
    selector: 'popoverImg',
    templateUrl: 'popoverImg.html',
    styleUrls: ['popoverImg.scss']

})
export class PopoverImg {

  GlobalFields = GlobalFields;
  GlobalFieldsMyListing = GlobalFieldsMyListing;

    constructor() {}



}

