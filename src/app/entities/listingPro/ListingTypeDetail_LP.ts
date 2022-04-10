/* This object contains the field for the submit form of a single element (listing creation) */
export class FieldsAddForm_LP {
  id?: string;
  type?: string;
  class?: string;
  placeholder?: string;
  name?: string;
  label?: string;
  required?: string;
  tiptitleimage?: string;
  tipimage?: string;
  tipdesc?: string;
  form_type?: string;
  multi?:string; //'no'
}

/* This object contains the info of a type. In listing pro there is only one type (listing) */
export class ListingTypeDetail_LP {
  /* This the layout of the search page
  *   - grid_view -> card with logo
  *   - grid_view2 -> card with NO logo
  *   - grid_view3 -> card with logo
  *   - grid_view_v2 -> card with NO logo
  *   - grid_view_v3 -> card with logo
  *   - list_view -> list with logo
  *   - list_view_v2 -> list with NO logo
  *   - lp-list-view-compact -> list with NO logo
  *  */
  search_template?: string;

  order_type?: string[]; // ["MOST_REVIEWED", "MOST_VIEWED", "HIGHEST_RATED"]

  /* This is the layout of the detail listing page */
  detail_template?: {
    lp_detail_page_layout_content?: {
      general?: { //Under this there are the object that must be displayed
        lp_content_section?: string;
        lp_video_section?: string;
        lp_faqs_section?: string;
        lp_reviews_section?: string;
        lp_contacts_section?: string;
        lp_announcements_section?: string;
        lp_offers_section?: string;
        lp_menu_section?: string;
        lp_additional_section?: string;
        lp_event_section?: string;
      },
      disabled?: { /* the disabled field are here. Same object as before */
        placebo?: string;
        lp_content_section?: string;
        lp_video_section?: string;
        lp_faqs_section?: string;
        lp_reviews_section?: string;
        lp_contacts_section?: string;
        lp_announcements_section?: string;
        lp_offers_section?: string;
        lp_menu_section?: string;
        lp_additional_section?: string;
        lp_event_section?: string;
      }
    },
    lp_detail_page_layout_rsidebar?: {
      sidebar?: {
        lp_timing_section?: string;
        lp_mapsocial_section?: string;
        lp_quicks_section?: string;
        lp_additional_section?: string;
        lp_sidebarelemnts_section?: string;
        lp_event_section?: string;
        lp_offers_section?: string;
        lp_booking_section?: string;
      },
      disabled?: {
        lp_timing_section?: string;
        lp_mapsocial_section?: string;
        lp_quicks_section?: string;
        lp_additional_section?: string;
        lp_sidebarelemnts_section?: string;
        lp_event_section?: string;
        lp_offers_section?: string;
        lp_booking_section?: string;
      }
    }
  };

  /* This contains all the custom field of the user */
  custom_fields?: { /* a lot of fields here an usless */
    ID?: number;
    post_author: string;
    post_date: string;
    post_date_gmt: string;
    post_content: string;
    post_title: string;
    post_excerpt: string;
    post_status: string;
    comment_status: string;
    ping_status: string;
    post_password: string;
    post_name: string;
    to_ping: string;
    pinged: string;
    post_modified: string;
    post_modified_gmt: string;
    post_content_filtered: string;
    post_parent: string;
    guid: string;
    menu_order: string;
    post_type: string;
    post_mime_type: string;
    filter: string;
  }[];

  /* This contains the filter for the search */
  filter_status?: {
    enable_search_filter?: boolean;
    enable_price_search_filter?: boolean;
    enable_opentime_search_filter?: boolean;
    enable_high_rated_search_filter?: boolean;
    enable_most_reviewed_search_filter?: boolean;
    enable_most_viewed_search_filter?: boolean;
    enable_best_changed_search_filter?: boolean;
    enable_cats_search_filter?: boolean;
    enable_nearme_search_filter?: boolean;
    disable_location_in_nearme_search_filter?: boolean;
    lp_nearme_filter_param?: string; //'km'
    enable_readious_search_filter_default?: string; // "105"
    enable_readious_search_filter_min?: string; // "0"
    enable_readious_search_filter_max?: string; //"1000"
    enable_extrafields_filter?: string;
  };

  /* This is an array of the element for the listing creation form */
  submit_template?: FieldsAddForm_LP[];

  ratings?: {
    multi_rating_enabled?: boolean;
    multi_rating?: string[];
  };

  listing_pricerange_symbol?: string; //Eg "$"
}
