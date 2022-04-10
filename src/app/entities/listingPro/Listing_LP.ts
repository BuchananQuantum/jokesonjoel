/* This object contains the info of a listing (detail page) */

import {ListingCategory} from '../listingCategory';

export class SearchResult_LP {
  data?: Listing_LP[];
  listingsCount?: number;
  pageCount?: number;
  pageNumber?: number;
  success?: boolean;
}

export class Review_LP {
  ID?: number;
  post_author?: string;
  author_image?: string;
  author_name?: string;
  post_date?: string;
  post_date_gmt?: string;
  post_content?: string;
  post_title?: string;
  post_excerpt?: string;
  post_status?: string;
  comment_status?: string;
  gallery?: {
    full?: string;
    thumbnail?: string;
    id?: number;
  }[];
  ping_status?: string;
  post_password?: string;
  post_name?: string;
  to_ping?: string;
  pinged?: string;
  post_modified?: string;
  post_modified_gmt?: string;
  post_parent?: string;
  guid?: string;
  menu_order?: string;
  post_type?: string;
  post_mime_type?: string;
  comment_count?: string;
  filter?: string;
  rating?: any// general_rating? : number;sempre presente, mentre i multi rating posso mancare o avere custom name
}

export class Listing_LP {

  ID?: number;
  campaing_ads_enabled?: boolean;
  post_author?: string;
  post_date?: string;
  post_date_gmt?: string;
  post_content?: string;
  post_title?: string;
  post_excerpt?: string;
  post_status?: string;
  comment_status?: string;
  ping_status?: string;
  post_password?: string;
  post_name?: string;
  to_ping?: string;
  pinged?: string;
  post_modified?: string;
  post_modified_gmt?: string;
  post_parent?: string;
  guid?: string;
  url?: string;
  menu_order?: string;
  post_type?: string;
  post_mime_type?: string;
  comment_count?: string;
  filter?: string;
  isBookmarked? : boolean; /* true if the cookie is in the request and the listing is bookmarked */
  post_views_count? : number;
  category?: ListingCategory;
  location?: ListingCategory[];
  tag?: ListingCategory[];
  feature?: ListingCategory[];
  reviews?: {
    review_count?: number;
    listing_rate?: number;
    reviews?: Review_LP[]
  };
  post_meta?: {
    tagline_text?: string;
    gAddress?: string;
    latitude?: string;
    longitude?: string;
    mappin?: string;
    phone?: string;
    whatsapp?: string;
    email?: string;
    website?: string;
    twitter?: string;
    facebook?: string;
    linkedin?: string;
    youtube?: string;
    instagram?: string;
    video?: string;
    gallery?: string; //DO NOT USE
    price_status?: string;
    list_price?: string;
    list_price_to?: string;
    Plan_id?: string;
    lp_purchase_days?: string;
    reviews_ids?: string;
    claimed_section?: string;
    listings_ads_purchase_date?: string;
    faqs?: {faq?: any, faqans?: any};
    business_hours?: {
      Monday?: {
        open?: string;
        close?: string;
      },
      Tuesday?: {
        open?: string;
        close?: string;
      },
      Wednesday?: {
        open?: string;
        close?: string;
      },
      Thursday?: {
        open?: string;
        close?: string;
      },
      Friday?: {
        open?: string;
        close?: string;
      },
      Saturday?: {
        open?: string;
        close?: string;
      },
      Sunday?: {
        open?: string;
        close?: string;
      }
    }
    changed_planid?: number;
    listing_reported_by?: string;
    listing_reported?: string;
    business_logo?: string;
  };
  post_custom_fields?: any; //Contains all the custom fields
  gallery?: {
    main?: {
      full?: string;
      thumbnail?: string;
    }[],
    cover_image?: string;
    listing_tumbnail?: string;
    listing_business_logo?: string;
  };
  lead_gen?: {
    0?: string,
    1?: string,
    label?: string,
    multiselect?: string, //"undefined if not"
    name?: string,
    options?: string, //"undefined if not"
    placeholder?: string,
    required?: string, //"" if not
    type?: string, //""text
  }[]

  constructor() {
    this.post_meta = {};
  }
}

