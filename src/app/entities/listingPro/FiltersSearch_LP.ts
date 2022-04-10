import {CheckboxType} from '../checkboxType';

export class FiltersSearch_LP {

  categories?: string; //Contains the names
  features?: CheckboxType[] = [];
  locations?: string; //Contains the names

  location?: any; //address
  lat?: number;
  lng?: number;
  range?: any; //radius

  price_status?: string // 'inexpensive', 'moderate', 'pricey', 'ultra_high_end'

  //Booleans
  openNow?: boolean;
  nearMe?: boolean;
  order?: string;


  skeyword? : string; //Used by seach by name and search by tag

  // Paging
  currentPage: number = 0; //Starts from 0
  pageCount: number = 0; //Starts from 1
  listingsCount: number = 0;





  //Creation
  gallery?: string[] = [];
  featuredimage?: string;
  businessLogo?: string;
  socials: {key: string, value: string}[] = [];
  tags?: CheckboxType[] = [];

}
