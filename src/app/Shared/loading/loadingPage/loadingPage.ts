import {Component} from '@angular/core';
import {GlobalFields} from '../../../GlobalFields';


@Component({
  selector: 'loading-page',
  templateUrl: 'loadingPage.html',
  styleUrls: []
})
export class LoadingPage {

  //This page is used only just default route while a theme is nto set yet (config call not ended yet)

  GlobalFields = GlobalFields;

  constructor() {

  }

}
