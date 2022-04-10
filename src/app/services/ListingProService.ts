import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CacheService} from 'ionic-cache';
import {Constants} from '../Constants';
import {GlobalFieldsMyListing} from '../GlobalFieldsMyListing';
import {GlobalFieldsListingPro} from '../GlobalFieldsListingPro';
import {GlobalFields} from '../GlobalFields';

@Injectable({
  providedIn: 'root'
})

export class ListingProService {

  public suffix1 = '/wp-json/'; //PLEASE DON'T TOUCH IT
  public suffix2 = 'wp/v2/'; //PLEASE DON'T TOUCH IT
  public suffix3 = '/api/'; //PLEASE DON'T TOUCH IT
  public suffix4 = 'authenticationcla/'; //PLEASE DON'T TOUCH IT
  public suffix5 = 'bookmarkcla/'; //PLEASE DON'T TOUCH IT
  public suffix6 = 'listingcla/'; //PLEASE DON'T TOUCH IT
  public suffix7 = 'messagecla/'; //PLEASE DON'T TOUCH IT
  public suffix8 = 'packagecla/'; //PLEASE DON'T TOUCH IT
  public suffix9 = 'reviewcla/'; //PLEASE DON'T TOUCH IT
  public suffix2CustomApp = 'cla-listingpro-app/'; //PLEASE DON'T TOUCH IT

  constructor(private http: HttpClient, private cache: CacheService){

  }

  //******************************************************** FIRST CALLS ********************************************************
  getAllTypeDetails() {
    let url = Constants.url + this.suffix1 + this.suffix2CustomApp + 'types';
    let cacheKey = url;
    let request = this.http.get(url);

    return this.cache.loadFromObservable(cacheKey, request);
    //return this.http.get(Constants.url + this.suffix1 + this.suffix2CustomApp + 'types');
  }


  getAllCategoriesListings() {
    let url = Constants.url + this.suffix1 + this.suffix2CustomApp + 'categories';
    let cacheKey = url;
    let request = this.http.get(url);

    return this.cache.loadFromObservable(cacheKey, request);
    //return this.http.get(Constants.url + this.suffix1 + this.suffix2CustomApp + 'categories');
  }

  getAllRegionsListings() {
    let url = Constants.url + this.suffix1 + this.suffix2CustomApp + 'locations';
    let cacheKey = url;
    let request = this.http.get(url);

    return this.cache.loadFromObservable(cacheKey, request);
    //return this.http.get(Constants.url + this.suffix1 + this.suffix2CustomApp + 'categories');
  }

  getAllTagsListings() {
    let url = Constants.url + this.suffix1 + this.suffix2CustomApp + 'tags';
    let cacheKey = url;
    let request = this.http.get(url);

    return this.cache.loadFromObservable(cacheKey, request);
    //return this.http.get(Constants.url + this.suffix1 + this.suffix2CustomApp + 'categories');
  }

  getAllFeaturesListings() {
    let url = Constants.url + this.suffix1 + this.suffix2CustomApp + 'features';
    let cacheKey = url;
    let request = this.http.get(url);

    return this.cache.loadFromObservable(cacheKey, request);
    //return this.http.get(Constants.url + this.suffix1 + this.suffix2CustomApp + 'categories');
  }

  //******************************************************** END - FIRST CALLS ********************************************************


  getListingDetailsById(id: number){
    const cookie = GlobalFields.profile && GlobalFields.profile.cookie ? '&cookie=' + GlobalFields.profile.cookie : '';
    let url = Constants.url + this.suffix1 + this.suffix2CustomApp + this.suffix6 + 'get?id=' + id + cookie;
    let cacheKey = url;
    let request = this.http.get(url);

    let TTL = 60 * 60 * 24; // 1 day

    return this.cache.loadFromObservable(cacheKey, request, 'listing-details', TTL);
    //return this.http.get(Constants.url + this.suffix1 + this.suffix2 + 'job_listing/' + id);
  }

  getRecentListings() {
    let url = Constants.url + this.suffix1 + this.suffix2CustomApp + this.suffix6 + 'search?limit=10&sort=latest&order=DESC';
    let cacheKey = url;
    let request = this.http.get(url);
    //return request;
    return this.cache.loadFromObservable(cacheKey, request);

  }

  getRelatedListings() {
    let url = Constants.url + this.suffix1 + this.suffix2CustomApp + this.suffix6 + 'related';
    let cacheKey = url;
    let request = this.http.get(url);
    return request;
    //return this.cache.loadFromObservable(cacheKey, request);

  }

  getAllListings(){
    let url = Constants.url + this.suffix1 + this.suffix2CustomApp + this.suffix6 + 'search?limit=100&sort=latest&order=DESC';
    let cacheKey = url;
    let request = this.http.get(url);
    return request;
  }

  //Search API with first page
  getFilteredListings() {
    let url = Constants.url + this.suffix1 + this.suffix2CustomApp + this.suffix6 + 'search';

    /* Paging */
    let page = GlobalFieldsListingPro.filtersSearch.currentPage;
    if (page != null)
      url+= '?limit=10&page=' + page;

    //Open now
    if (GlobalFieldsListingPro.filtersSearch.openNow)
      url += '&openTime=open';

    //Near me
    if (GlobalFieldsListingPro.filtersSearch.nearMe){
      url += '&clat=' + GlobalFieldsListingPro.filtersSearch.lat + '&clong=' + GlobalFieldsListingPro.filtersSearch.lng + '&distance_range=' + GlobalFieldsListingPro.filtersSearch.range
    }

    //Order (that are booleans for ListingPro)
    if (!GlobalFieldsListingPro.filtersSearch.order)
      GlobalFieldsListingPro.filtersSearch.order = GlobalFieldsListingPro.listingTypeDetail.order_type[0];
    if (GlobalFieldsListingPro.filtersSearch.order == 'MOST_REVIEWED')
      url += '&mostReviewed=true';
    else if (GlobalFieldsListingPro.filtersSearch.order == 'MOST_VIEWED')
      url += '&mostViewed=true';
    else if (GlobalFieldsListingPro.filtersSearch.order == 'HIGHEST_RATED')
      url += '&highRated=true';


    /* Category */
    console.log(GlobalFieldsListingPro.filtersSearch.categories)
    if (GlobalFieldsListingPro.filtersSearch.categories){
      const cat = GlobalFieldsListingPro.listingCategories.find(cat => cat.name == GlobalFieldsListingPro.filtersSearch.categories)
      if(cat)
        url += '&catId=' + cat.term_id;
    }

    /* Location/Region */
    if (GlobalFieldsListingPro.filtersSearch.location){
      url += "&locId=" + GlobalFieldsListingPro.filtersSearch.location;
    }
    else if (GlobalFieldsListingPro.filtersSearch.locations){
        const reg = GlobalFieldsListingPro.regions.find(reg => reg.name == GlobalFieldsListingPro.filtersSearch.locations)
        if(reg)
          url += '&locId=' + reg.term_id;
    }

    /* Price range */
    if (GlobalFieldsListingPro.filtersSearch.price_status){
      url += "&priceRange[]=" + GlobalFieldsListingPro.filtersSearch.price_status;
    }

    /* Skeyword */
    if (GlobalFieldsListingPro.filtersSearch.skeyword){
      url += "&skeyword=" + GlobalFieldsListingPro.filtersSearch.skeyword;
    }

    /* Features */
    if (GlobalFieldsListingPro.filtersSearch.features && GlobalFieldsListingPro.filtersSearch.features.length>0){
      GlobalFieldsListingPro.filtersSearch.features.forEach(feat => {
        if (feat.isChecked)
          url += '&tag_name[]=' + feat.val.term_id; //IS called tag_name but needs the feature ids
      })
    }

    let cacheKey = url;
    let request = this.http.get(url);

    return request;
    //return this.cache.loadFromObservable(cacheKey, request);
  }




  /* Get Listing by category */
  getListingsFilteredByCategory(id: number){
    let url = Constants.url + this.suffix1 + this.suffix2CustomApp + this.suffix6 + 'search?limit=10&catId=' + id;
    let cacheKey = url;
    let request = this.http.get(url);

    // return this.cache.loadFromObservable(cacheKey, request);
    return request;
  }

  /* Get the suggested result */
  suggestedSearch(tag: string){

    let url = Constants.url + this.suffix1 + this.suffix2CustomApp + this.suffix6 + 'suggested_search?tag='+tag;
    let cacheKey = url;
    let request = this.http.get(url);

    // return this.cache.loadFromObservable(cacheKey, request);
    return request;

  }

  leadGen(lead:any, listing_id: any, author_email:any, author_id: any){
    let url = Constants.url + this.suffix1 + this.suffix2CustomApp + this.suffix6 + 'contact-owner';
    let body = new FormData();

    body.append('post_id', listing_id);
    body.append('author_email', author_email);
    body.append('author_id', author_id);
    Object.keys(lead).forEach( key =>{
      body.append(key, lead[key]);
    })

    return this.http.post(url, body);
  }


  //**************************************************** AUTHENTICATED CALLS ***************************************************
  public getBookmarkedListings() {
    let url = Constants.url + this.suffix1 + this.suffix2CustomApp + this.suffix5 + 'get_bookmarks/?cookie=' + GlobalFields.profile.cookie;
    return this.http.get(url);
  }

  public undoBookmark(listing_id: any){
    let url = Constants.url + this.suffix1 + this.suffix2CustomApp + this.suffix5 + 'remove_bookmark/?listing_id='+listing_id+'&cookie=' + GlobalFields.profile.cookie;
    return this.http.get(url);
  }

  public doBookmark(listing_id: any){
    let url = Constants.url + this.suffix1 + this.suffix2CustomApp + this.suffix5 + 'bookmark_listing/?listing_id='+listing_id+'&cookie=' + GlobalFields.profile.cookie;
    return this.http.get(url);
  }


  public postAReview(review_id: any, listingId: any, title:string, text: string, customFieldsStars: { key: string, value: number, label: string }[], oldGallery: any[], galleryFile: Blob[], galleryName: string[]) {
    let url = Constants.url + this.suffix1 + this.suffix2CustomApp + this.suffix9;
    if(!review_id)
      url += 'post_review' + '?cookie=' + GlobalFields.profile.cookie;
    else
      url += 'edit_review' + '?cookie=' + GlobalFields.profile.cookie;


    let body = new FormData();

    body.append('post_title', title);
    body.append('post_description', text);

    if(!review_id)
      body.append('comment_post_ID', listingId); //Listing id
    else
      body.append('reviewID', review_id);


    let multirating='';

    for (let i = 0; i < customFieldsStars.length; i++) {
      let field = customFieldsStars[i];
      body.append('rating-'+i, field.value + '');
      multirating+= i+':'+field.value;
      multirating+= i<customFieldsStars.length-1 ? ',' : '';
    }
    body.append('multiState', '1');
    body.append('multirating', multirating);


    if(oldGallery && oldGallery.length>0){
      let old_gallery='';
      for (let i = 0; i < oldGallery.length; i++) {
        old_gallery+=oldGallery[i].id
        old_gallery+=i<oldGallery.length-1 ? ',' : '';
      }
      body.append('old_review_images', old_gallery);
    }

    if (galleryFile && galleryName) {
      for (let i = 0; i < galleryFile.length; i++) {
        const el = galleryFile[i]; //BLOB -> image to upload (one entry per image to upload)
        console.log(el);
        const ns = galleryName[i].split('/');
        let fileName = 'reviewImg.jpeg';
        if(ns && ns.length>0)
          fileName =ns[ns.length-1]
        let ext = (el.type && el.type.split('/') && el.type.split('/').length > 0) ? el.type.split('/')[1] : 'jpg';
        body.append('post_gallery[]', el, fileName);
      }
    }


    return this.http.post(url, body);
  }

}
