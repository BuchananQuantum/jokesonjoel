/* Same for listing pro and mylisitng */
export class ListingCategory {
  count?: number; //quanti listing ha
  description?: string;
  id?: number; //MyListing
  link?: string;
  meta?: any[];
  name?: string;
  parent?: number; //id della categoria padre
  slug?: string;
  term_image?: any[];
  taxonomy?: string;
  term_id?: number;//ListingPro
  term_taxonomy_id?: number;
  image_url?: string; //MyListing
  icon?: string; //MyListing
  icon1?: string; //ListingPro
  image?: string;
}
