import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CacheService} from 'ionic-cache';
import {Constants} from '../Constants';
import {GlobalFieldsMyListing} from '../GlobalFieldsMyListing';
import {Listing} from '../entities/myListing/listing';
import {NativeStorage} from '@ionic-native/native-storage/ngx';
import {GlobalFields} from '../GlobalFields';
import {FieldsAddForm} from '../entities/myListing/listingTypeDetail';

@Injectable({
  providedIn: 'root'
})

export class MyListingService {

  public suffix1 = '/wp-json/'; //PLEASE DON'T TOUCH IT
  public suffix2 = 'wp/v2/'; //PLEASE DON'T TOUCH IT
  public suffix3 = '/api/'; //PLEASE DON'T TOUCH IT
  public suffix4 = 'authenticationcla/'; //PLEASE DON'T TOUCH IT
  public suffix5 = 'bookmarkcla/'; //PLEASE DON'T TOUCH IT
  public suffix6 = 'listingcla/'; //PLEASE DON'T TOUCH IT
  public suffix7 = 'messagecla/'; //PLEASE DON'T TOUCH IT
  public suffix8 = 'packagecla/'; //PLEASE DON'T TOUCH IT
  public suffix9 = 'termcla/'; //PLEASE DON'T TOUCH IT
  public suffix2CustomApp = 'custom-listing-app/'; //PLEASE DON'T TOUCH IT

  constructor(private http: HttpClient, private cache: CacheService, private nativeStorage: NativeStorage,){
  }


  //******************************************************** FIRST CALLS ********************************************************

  getAllTypeDetails() {
    let url = Constants.url + this.suffix1 + this.suffix2CustomApp + 'types';
    let cacheKey = url;
    let request = this.http.get(url);

    return this.cache.loadFromObservable(cacheKey, request);
    //return this.http.get(Constants.url + this.suffix1 + this.suffix2CustomApp + 'types');
  }

  getAllTags() {
    let url = Constants.url + this.suffix1 + this.suffix2CustomApp + 'tags';
    let cacheKey = url;
    let request = this.http.get(url);

    return this.cache.loadFromObservable(cacheKey, request);
    //return this.http.get(Constants.url + this.suffix1 + this.suffix2CustomApp + 'tags');
  }

  getAllCategoriesListings() {
    let url = Constants.url + this.suffix1 + this.suffix2CustomApp + 'categories';
    let cacheKey = url;
    let request = this.http.get(url);

    return this.cache.loadFromObservable(cacheKey, request);
    //return this.http.get(Constants.url + this.suffix1 + this.suffix2CustomApp + 'categories');
  }

  getCustomTaxonomies() {
    let url = Constants.url + this.suffix1 + this.suffix2CustomApp + 'taxonomies';
    let cacheKey = url;
    let request = this.http.get(url);

    return this.cache.loadFromObservable(cacheKey, request);
  }

  getRegions() {
    let url = Constants.url + this.suffix1 + this.suffix2CustomApp + 'regions';
    let cacheKey = url;
    let request = this.http.get(url);

    return this.cache.loadFromObservable(cacheKey, request);
    //return this.http.get(Constants.url + this.suffix1 + this.suffix2 + 'region?&order=desc&orderby=count');
  }

  //******************************************************** END - FIRST CALLS ********************************************************



  getRecentListings() {
    let url = Constants.url + this.suffix1 + this.suffix2CustomApp + 'search?limit=10&sort=latest&order=DESC';
    let cacheKey = url;
    let request = this.http.get(url);
    return this.cache.loadFromObservable(cacheKey, request);

  }


  getListingsBySearchString(search: any) {
    return this.http.get(Constants.url + this.suffix1 + this.suffix2 + 'job_listing?&orderby=relevance&order=asc&per_page=10&search=' + search);
  }

  getListingDetailsById(id: number) {
    let url = Constants.url + this.suffix1 + this.suffix2CustomApp + 'listing/' + id;
    let cacheKey = url;
    let request = this.http.get(url);

    let TTL = 60 * 60 * 24; // 1 day

    return this.cache.loadFromObservable(cacheKey, request, 'listing-details', TTL);
    //return this.http.get(Constants.url + this.suffix1 + this.suffix2 + 'job_listing/' + id);
  }

  getListingsFilteredByType(id: number) {
    let url = Constants.url + this.suffix1 + this.suffix2CustomApp + 'search?limit=10&type=' + GlobalFieldsMyListing.getListingTypeKeyById(id);
    let cacheKey = url;
    let request = this.http.get(url);

    return this.cache.loadFromObservable(cacheKey, request);
  }

  public storeRecentViewedListing(listing: Listing) {
    this.getRecentViewedListing();
    if (!GlobalFieldsMyListing.recentViewedListings)
      GlobalFieldsMyListing.recentViewedListings = [];
    if (GlobalFieldsMyListing.recentViewedListings && GlobalFieldsMyListing.recentViewedListings.find(temp => temp.id == listing.id))
      return;

    if (GlobalFieldsMyListing.recentViewedListings.length == 10)
      GlobalFieldsMyListing.recentViewedListings[9] = listing;
    else
      GlobalFieldsMyListing.recentViewedListings.push(listing);

    const theme = GlobalFields.site_details.themeEnabled
    this.nativeStorage.setItem('recentViewedListingCLA_' + theme, {property: 'value', anotherProperty: GlobalFieldsMyListing.recentViewedListings})
      .then(
        () => console.log('Stored item!'),
        error => console.error('Error storing item', error)
      );
  }

  public getRecentViewedListing() {
    const theme = GlobalFields.site_details.themeEnabled
    this.nativeStorage.getItem('recentViewedListingCLA_' + theme)
      .then(
        data => {
          console.log(data);
          GlobalFieldsMyListing.recentViewedListings = data.anotherProperty;
        },
        error => console.error(error)
      );
  }


  //Search API with first page
  getFilteredListings(stats?: boolean) {

    let page = '&page=' + GlobalFieldsMyListing.filtersSearch.currentPage;

    //type
    let type = 'type=' + GlobalFieldsMyListing.getListingTypeKeyById(GlobalFieldsMyListing.filtersSearch.selectedType);

    let stats_q = '';
    if (stats)
      stats_q = '&stats=1';

    //tags
    let tags = '';
    console.log(GlobalFieldsMyListing.filtersSearch.tags);
    const selectedTags = GlobalFieldsMyListing.filtersSearch.tags.filter(el => el.isChecked);
    console.log(selectedTags);
    if (selectedTags) {
      for (let i = 0; i < selectedTags.length; i++) {
        let t = selectedTags[i];
        if (t.isChecked) {
          tags += '&job_tags[]=' + t.val.slug;
        }
      }
    }


    //region, it's just 1 or none selected
    let regions = '';
    if (GlobalFieldsMyListing.filtersSearch.region) {
      let r = GlobalFieldsMyListing.regions.find(temp => temp.name == GlobalFieldsMyListing.filtersSearch.region);
      if (r) {
        if (regions == '') //is the first to add
          regions = '&region=' + r.slug;
      }
    }

    //order
    let order = '';
    if (!GlobalFieldsMyListing.filtersSearch.order)
      GlobalFieldsMyListing.filtersSearch.order = GlobalFieldsMyListing.selectedTypeDetail.case27_listing_type_search_page.order.options[0].key;

    let orderObj = GlobalFieldsMyListing.selectedTypeDetail.case27_listing_type_search_page.order.options.find(res => res.key == GlobalFieldsMyListing.filtersSearch.order);
    if (orderObj) {
      let clauses = orderObj.clauses;
      if (clauses && clauses.length > 0)
        order = '&sort=' + orderObj.key + '&order=' + clauses[0].order;
    }


    //categories
    let categories = '';
    if(Array.isArray(GlobalFieldsMyListing.filtersSearch.categories))
      for (let i = 0; i < GlobalFieldsMyListing.filtersSearch.categories.length; i++) {
        let c = GlobalFieldsMyListing.listingCategories.find(temp => temp.name == GlobalFieldsMyListing.filtersSearch.categories[i]);
        if (c)
          categories += '&job_category[]=' + c.slug;
      }
    else if (GlobalFieldsMyListing.filtersSearch.categories) {
      let c = GlobalFieldsMyListing.listingCategories.find(temp => temp.name == GlobalFieldsMyListing.filtersSearch.categories);
      if (c)
        categories += '&job_category=' + c.slug;
    }


    //custom taxonomies, is just 1 or none selected per each custom tax
    let customTaxonomies = '';
    if (GlobalFieldsMyListing.filtersSearch.customTaxonomiesDropdownKeysOptions) {
      for (let i = 0; i < GlobalFieldsMyListing.filtersSearch.customTaxonomiesDropdownKeysOptions.length; i++) {
        let tax = GlobalFieldsMyListing.filtersSearch.customTaxonomiesDropdownKeysOptions[i];
        if (tax && tax.selected && tax.options) {
          console.log()
          if (Array.isArray(tax.selected)) {
            tax.selected.forEach(value => {
              const multiLabel = tax.selected.length > 1 ? '[]' : '';
              let opt = tax.options.find(temp => temp.name == value);
              if (opt)
                customTaxonomies = customTaxonomies + '&' + tax.key + '[]=' + opt.slug;
            });
          }else{
            let opt = tax.options.find(temp => temp.name == tax.selected);
            if (opt)
              customTaxonomies = customTaxonomies + '&' + tax.key  + '=' + opt.slug;
          }
        }
      }
    }

    //custom fields, is just 1 or none selected per each custom field
    let customFields = '';
    if (GlobalFieldsMyListing.filtersSearch.customFieldsDropdownKeysOptions) {
      for (let i = 0; i < GlobalFieldsMyListing.filtersSearch.customFieldsDropdownKeysOptions.length; i++) {
        let cust = GlobalFieldsMyListing.filtersSearch.customFieldsDropdownKeysOptions[i];
        if (cust && cust.selected && cust.options) {
          console.log(cust)
          if(Array.isArray(cust.selected)) {
            cust.selected.forEach(value => {
              let opt = cust.options.find(temp => temp.label == value || temp.name == value);
              if (opt)
                customFields = customFields + '&' + cust.key  + '[]=' + opt.slug;
            })
          }else{
            let opt = cust.options.find(temp => temp.label == cust.selected  || temp.name == cust.selected);
            if (opt)
              customFields =  customFields + '&' + cust.key  + '=' + opt.slug;
          }
        }
      }
    }

    //custom text fields, is just a string or "" per each custom field
    let customTextFields = '';
    if (GlobalFieldsMyListing.filtersSearch.customFieldsText) {
      for (let i = 0; i < GlobalFieldsMyListing.filtersSearch.customFieldsText.length; i++) {
        let field = GlobalFieldsMyListing.filtersSearch.customFieldsText[i];
        if (field && field.selected != '') {
          customTextFields = '&' + field.key + '=' + field.selected;
        }
      }
    }


    //proximity
    let proximity = '';
    if (GlobalFieldsMyListing.filtersSearch.range != undefined)
      proximity = '&proximity=' + GlobalFieldsMyListing.filtersSearch.range;


    //address
    let address = '';
    if (GlobalFieldsMyListing.filtersSearch.location && GlobalFieldsMyListing.filtersSearch.lat && GlobalFieldsMyListing.filtersSearch.lng) //address specified and translated into lat lng
      address = '&lat=' + GlobalFieldsMyListing.filtersSearch.lat + '&lng=' + GlobalFieldsMyListing.filtersSearch.lng;

    //name
    let name = '';
    if (GlobalFieldsMyListing.filtersSearch.name)
      name = '&title=' + GlobalFieldsMyListing.filtersSearch.name;

    //Generic search
    let search_keywords = '';
    if (GlobalFieldsMyListing.filtersSearch.search_keywords)
      search_keywords = '&search_keywords=' + GlobalFieldsMyListing.filtersSearch.search_keywords;


    return this.http.get(Constants.url + this.suffix1 + this.suffix2CustomApp + 'search?limit=10&' + type + stats_q + page + search_keywords + name + address + proximity + tags + regions + categories + order + customTaxonomies + customFields + customTextFields);

  }

  getAllListings() {
    let url = Constants.url + this.suffix1 + this.suffix2CustomApp + 'search-geo';
    let cacheKey = url;
    let request = this.http.get(url);

    return this.cache.loadFromObservable(cacheKey, request);
  }

  getRegionsByType(listingTypeId: number) {
    let url = Constants.url + this.suffix1 + this.suffix2CustomApp + 'terms?taxonomy=region&format_levels=true&';
    url = url + 'listing_type=' + listingTypeId;
    let cacheKey = url;
    let request = this.http.get(url);

    return this.cache.loadFromObservable(cacheKey, request);
  }

  getGeneralSearch(q: string){
    let url = Constants.url + this.suffix1 + this.suffix2CustomApp + 'quick-search?s=' + q;
    return this.http.get(url);
  }

  getCountByTaxonomy(taxonomy: string){
    let url = Constants.url + this.suffix1 + this.suffix2CustomApp + this.suffix9 + 'count?format_levels=true&taxonomy=' + taxonomy;

    let cacheKey = url;
    let request = this.http.get(url);

    return this.cache.loadFromObservable(cacheKey, request);
  }


  //**************************************************** AUTHENTICATED CALLS ***************************************************

  public getMyListings(currentPage: number) {
    let page = '&page=' + currentPage;
    let url = Constants.url + this.suffix3 + this.suffix6 + 'get_listings/?limit=20' + page + '&cookie=' + GlobalFields.profile.cookie;

    return this.http.get(url);
  }


  public getBookmarkedListings() {
    let url = Constants.url + this.suffix3 + this.suffix5 + 'get_bookmarks/?cookie=' + GlobalFields.profile.cookie;

    return this.http.get(url);
  }

  public doBookmark(listing_id: any) {
    let url = Constants.url + this.suffix3 + this.suffix5 + 'bookmark_listing/?cookie=' + GlobalFields.profile.cookie + '&listing_id=' + listing_id;

    return this.http.get(url);
  }

  public undoBookmark(listing_id: any) {
    let url = Constants.url + this.suffix3 + this.suffix5 + 'remove_bookmark/?cookie=' + GlobalFields.profile.cookie + '&listing_id=' + listing_id;

    return this.http.get(url);
  }


  public postAReview(listingId: any, text: string, customFieldsStars: { key: string, value: number, label: string }[], gallery: number[], new_galleryFile: Blob[], new_galleryName: string[]) {
    let url = Constants.url + this.suffix3 + this.suffix6 + 'post_review';

    let body = new FormData();
    // Add your values in here
    //body.append('review_gallery[]', "");
    body.append('cookie', GlobalFields.profile.cookie);
    body.append('content', text);
    body.append('post_id', listingId);
    if (new_galleryFile && new_galleryName) {
      for (let i = 0; i < new_galleryFile.length; i++) {
        const el = new_galleryFile[i]; //BLOB -> image to upload (one entry per image to upload)
        console.log(el);
        const ns = new_galleryName[i].split('/');
        let fileName = 'reviewImg.jpeg';
        if(ns && ns.length>0)
          fileName =ns[ns.length-1]
        let ext = (el.type && el.type.split('/') && el.type.split('/').length > 0) ? el.type.split('/')[1] : 'jpg';
        body.append('review_gallery[]', el, fileName);
      }
    }
    if (gallery) {
      gallery.forEach( el =>{
        body.append('review_gallery_ids[]', el + '')
      });
    }

    for (let i = 0; i < customFieldsStars.length; i++) {
      let field = customFieldsStars[i];
      body.append(field.key, (field.value * 2) + '');
    }

    return this.http.post(url, body);
  }

  public getChats() {
    let url = Constants.url + this.suffix3 + this.suffix7 + 'read_messages/?cookie=' + GlobalFields.profile.cookie;

    return this.http.get(url);
  }

  public getMsgsOfAChat(userID: number) {
    let url = Constants.url + this.suffix3 + this.suffix7 + 'read_conversation/?cookie=' + GlobalFields.profile.cookie;
    url = url + '&opponent_id=' + userID;

    return this.http.get(url);
  }

  public markAsSeenChat(userID: number) {
    let url = Constants.url + this.suffix3 + this.suffix7 + 'mark_as_seen/?cookie=' + GlobalFields.profile.cookie;
    url = url + '&opponent_id=' + userID;

    return this.http.get(url);
  }

  public sendMsg(message: string, receiver_id: number) {
    let url = Constants.url + this.suffix3 + this.suffix7 + 'send_message';

    let body = new FormData();

    body.append('cookie', GlobalFields.profile.cookie);
    body.append('message', message);
    body.append('receiver_id', receiver_id.toString());

    return this.http.post(url, body);
  }

  public getMsgUsersByString(term: string) {
    let url = Constants.url + this.suffix3 + this.suffix7 + 'get_recipients_list';

    let body = new FormData();
    body.append('cookie', GlobalFields.profile.cookie);
    body.append('term', term);

    return this.http.post(url, body);
  }



  public saveListing(listing: Listing, fieldsTypeSelected: FieldsAddForm[], status?: string,) {

    let url = Constants.url + this.suffix3 + this.suffix6 + 'save';
    let listingTypeSlug = listing._case27_listing_type;
    let listingType = GlobalFieldsMyListing.listingTypesDetails.find(res => res.post_name == listingTypeSlug);
    let body = new FormData();
    body.append('cookie', GlobalFields.profile.cookie);
    body.append('_case27_listing_type', listingTypeSlug);
    body.append('post_status', status ? status : 'pending');
    if (listing.id)
      body.append('id', listing.id + '');

    //Consuming of a package if selected one
    if (listing.listing_package)
      body.append('listing_package', listing.listing_package + '');

    fieldsTypeSelected.forEach(field => {

      if (field.show_in_submit_form) {

        //text
        if (field.type == 'text' || field.type == 'wp-editor' || field.type == 'texteditor' || field.type == 'email'
          || field.type == 'location' || field.type == 'date' || field.type == 'number')
          if (listing[field.slug])
            body.append(field.slug, listing[field.slug]);

        if (field.type == 'file'){
          console.log(field)
        }
        //logo, cover img
        if (field.type == 'file' && !field.multiple)
          if (listing[field.slug])
            body.append('current_' + field.slug, listing[field.slug]);

        //gallery
        if (field.type == 'file' && field.multiple && listing[field.slug]) {
          const gallery: any[] = listing[field.slug];
          console.log(gallery);
          if (gallery)
            gallery.forEach(url => {
              body.append('current_' + field.slug + '[]', url);
            });
        }

        //Categories
        if (field.type == 'term-select' && field.slug == 'job_category') {
          for (let i = 0; i < GlobalFieldsMyListing.addForm.categories.length; i++) {
            let c = GlobalFieldsMyListing.listingCategories.find(temp => temp.name == GlobalFieldsMyListing.addForm.categories[i]);
            if (c)
              body.append('job_category[]', c.id + '');
          }
        }

        //Tags
        if (field.type == 'term-select' && field.slug == 'job_tags') {
          console.log( GlobalFieldsMyListing.addForm.tags)
          const selectedTags = GlobalFieldsMyListing.addForm.tags.filter(el => el.isChecked);
          if (selectedTags) {
            for (let i = 0; i < selectedTags.length; i++) {
              let t = selectedTags[i];
              if (t.isChecked && t.val) {
                body.append('job_tags[]', t.val.term_taxonomy_id + '');
              }
            }
          }
        }

        //Regions
        if (field.type == 'term-select' && field.slug == 'region') {
          const selectedUIElements = GlobalFieldsMyListing.addForm.regions.filter(el => el.isChecked);
          if (selectedUIElements) {
            let regions = GlobalFieldsMyListing.regions;
            for (let i = 0; i < GlobalFieldsMyListing.addForm.regions.length; i++) {
              let uiElement = GlobalFieldsMyListing.addForm.regions[i];
              if (uiElement.isChecked){
                let region = regions[i];
                if(field['terms-template'] == "single-select") {
                  body.append('region', region.id + '');
                  break;
                }else{
                  body.append('region[]', region.id + '');
                }
              }
            }
          }
        }

        //prices
        if ((field.type == 'select' && field.slug == 'price_range') && GlobalFieldsMyListing.addForm.price_range) {
          if (Array.isArray(GlobalFieldsMyListing.addForm.price_range))
            GlobalFieldsMyListing.addForm.price_range.forEach(value => {
              body.append(field.slug, value);
            });
          else
            body.append(field.slug, GlobalFieldsMyListing.addForm.price_range);

        }


        //Working hours
        if (field.type == 'work-hours' && listing.work_hours) {
          let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
          days.forEach(day => {
            if (listing.work_hours[day]) {
              body.append(field.slug + '[' + day + ']' + '[status]', listing.work_hours[day].status);
              if (listing.work_hours[day].entry_hours && listing.work_hours[day].entry_hours.length > 0) {
                listing.work_hours[day].entry_hours.forEach((e, i) => {
                  body.append(field.slug + '[' + day + ']' + '[' + i + ']' + '[from]', GlobalFields.getOnlyTimeFromDate(e.from));
                  body.append(field.slug + '[' + day + ']' + '[' + i + ']' + '[to]', GlobalFields.getOnlyTimeFromDate(e.to));
                });
              }
            }
          });
          body.append(field.slug + '[timezone]', listing.work_hours.timezone);
        }

        //Social Networks Links
        if (field.type == 'links' && listing.links) {
          listing.links.forEach((link, i) => {
            body.append(field.slug + '[' + i + ']' + '[network]', link.network);
            body.append(field.slug + '[' + i + ']' + '[url]', link.url);
          });
        }

        //custom taxonomies, is just 1 or none selected for each custom tax
        if (GlobalFieldsMyListing.addForm.customTaxonomiesDropdownKeysOptions) {
          const customTax = GlobalFieldsMyListing.addForm.customTaxonomiesDropdownKeysOptions.find(el => el.key == field.slug);
          if(customTax && customTax.selected) {
            console.log(GlobalFieldsMyListing.addForm.customTaxonomiesDropdownKeysOptions)
            console.log(customTax);
            //If has options as array
            if (customTax.options && Array.isArray(customTax.options) && ! Array.isArray(customTax.selected)) {
              console.log("opt1")
              let opt = customTax.options.find(temp => temp.label == customTax.selected);
              if (opt)
                body.append(field.slug + '[]', opt.id + '');
            }
            //If has options is not an array and selected is an array
            else if (customTax && customTax.selected && customTax.options && Array.isArray(customTax.selected)) {
              console.log("opt2")
              customTax.selected.forEach(sel => {
                body.append(field.slug + '[]', sel + '');
              });
            }
            //If has options is not an array and selected is not an array
            else if (customTax && customTax.selected && customTax.options && !Array.isArray(customTax.selected)) {
              console.log("opt3")
              body.append(field.slug, customTax.selected + '');
            }
          }
        }


        //custom fields, is just 1 or none selected for each custom field
        if (GlobalFieldsMyListing.addForm.customFieldsDropdownKeysOptions) {
          const customField = GlobalFieldsMyListing.addForm.customFieldsDropdownKeysOptions.find(el => el.key == field.slug);
          //If has options as array
          if (customField && customField.selected && customField.options && Array.isArray(customField.options)) {
            let opt = customField.options.find(temp => temp.label == customField.selected);
            if (opt)
              body.append(field.slug + '[]', opt.id + '');
            //If has options is not an array and selected is an array
          } else if (customField && customField.selected && customField.options && Array.isArray(customField.selected)) {
            customField.selected.forEach(sel => {
              body.append(field.slug + '[]', sel + '');
            });
            //If has options is not an array and selected is not an array
          } else if (customField && customField.selected && customField.options && !Array.isArray(customField.selected)) {
            body.append(field.slug, customField.selected + '');
          }
        }
      }


    });

    return this.http.post(url, body);
  }


  getMyListingDetailsById(id: number) {
    let url = Constants.url + this.suffix3 + this.suffix6 + 'get/?cookie=' + GlobalFields.profile.cookie + '&listing_id=' + id;
    let cacheKey = url;
    let request = this.http.get(url);

    let TTL = 60 * 60 * 24; // 1 day

    return this.http.get(url);
    //  return this.http.get(Constants.url + this.suffix1 + this.suffix2CustomApp + this.suffix6 + 'get/?listing_id=' + id);
  }

  public deleteListing(id: number) {
    let url = Constants.url + this.suffix3 + this.suffix6 + 'delete';

    let body = new FormData();

    body.append('cookie', GlobalFields.profile.cookie);
    body.append('listing_id', id + '');

    return this.http.post(url, body);
  }

    /*Example response:
   {
    "success": true,
    "can_create_listing": false,
    "packages": []
   }
  if the value of can_create_listing" is false, the user must buy one of the "packages" returned by this endpoint.
  */
  public getPackagesPermission(listingTypeSelectedID?: number) {
    let url = Constants.url + this.suffix3 + this.suffix8 + 'list_by_type/?';
    url = url + 'cookie=' + GlobalFields.profile.cookie;
    url = url + '&type=' + listingTypeSelectedID;
    return this.http.get(url);
  }


}
