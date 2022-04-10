import {ListingCategory} from '../listingCategory';

export class SuggestedSearch_LP {
  tagID?: string;
  suggestions?: {
    tag?: ListingCategory[];
    cats?: ListingCategory[];
    listing?: {
      ID?: number;
      title?: string;
      thumb?: string;
      locations?: ListingCategory[];
      gAddress?: string;
    }[]
  };
}
