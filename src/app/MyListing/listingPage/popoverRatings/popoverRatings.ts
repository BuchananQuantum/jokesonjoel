import {Component} from '@angular/core';
import {GlobalFields} from '../../../GlobalFields';
import {GlobalFieldsMyListing} from '../../../GlobalFieldsMyListing';
import {GlobalFieldsListingPro} from '../../../GlobalFieldsListingPro';


import 'hammerjs';
import {TranslateService} from '@ngx-translate/core';
import {Service} from '../../../services/Service';

@Component({
  selector: 'popoverRatings',
  templateUrl: 'popoverRatings.html',
  styleUrls: ['popoverRatings.scss']

})
export class PopoverRatings{

  GlobalFields = GlobalFields;
  GlobalFieldsMyListing = GlobalFieldsMyListing;
  GlobalFieldsListingPro = GlobalFieldsListingPro;


  constructor(public translate: TranslateService, private service: Service) {

    console.log(GlobalFieldsMyListing.customRatingsSelected)
  }


  getNiceStringFromKey(s: string): string {
    let res = '';
    let arr = s.split('\_');
    if (arr.length > 0) {
      arr.forEach(r => {
        res += r + ' ';
      });
    }
    arr = res.split('-');
    res = '';
    if (arr.length > 0) {
      arr.forEach(r => {
        res += r + ' ';
      });
    }
    res = res.replace('job', '');
    return this.camelize(res);
  }


  camelize(str): string {
    return str.match(/^(?:[^A-Z]+)|[A-Z](?:[^A-Z]*)+/g)
      .join(' ')
      .toLowerCase()
      .replace(/^[a-z]/, function (v) {
        return v.toUpperCase();
      });
  }


  getTruncatedDecimal(n: any) {
    let num = parseFloat(n);
    return num.toFixed(1);
  }


}

