export class Constants {


  public static url = ''; //change it with your directory website url startin with https://
  public static GoogleMapsKEY = 'AIzaSy-your_Key'; //Eg 'AIzaSy-your_Key' change it, then run the next command: ionic cordova plugin add uk.co.workingedge.phonegap.plugin.launchnavigator --variable GOOGLE_API_KEY_FOR_ANDROID="AIzaSy-your_Key"


  //OneSignal Constants
  public static OneSignal_appID = ''; //Onesignal app id
  public static OneSignal_googleProjectNumber = ''; //Firebase project number (Only for Android)


  //WooCommerce Constants
  public static ConsumerKeyWoo = ''; //demo
  public static ConsumerSecretWoo = ''; //demo


  //WP CONSTANTS

  public static LISTING_STATUS_PUBLISHED = 'publish';
  public static LISTING_STATUS_PENDING = 'pending';
  public static LISTING_STATUS_DRAFT = 'draft';
  public static LISTING_STATUS_AUTO_DRAFT = 'auto-draft';
  public static  LISTING_STATUS_FUTURE = 'future';
  public static LISTING_STATUS_INHERIT = 'inherit';
  public static LISTING_STATUS_TRASH = 'trash';
  public static LISTING_STATUS_ANY = 'any';


  //THEMES CONSTANTS

  public static LISTING_PRO = 'listing-pro'
  public static MY_LISTING = 'my-listing'



  // DEMO DATA DON'T DELETE IT
  public static demo_ml = {
    url: 'https://mylistingdemo.danceup.dance',
    ConsumerKeyWoo: 'ck_b1c0ee15dfef0de2001de22c8c2d3caaf6a207cd',
    ConsumerSecretWoo: 'cs_c82428342698d09ee310cef198c8e3e135fb2289'
  }
  public static demo_lp = {
    url: 'https://listingpro.italiancoders.com',
    ConsumerKeyWoo: 'ck_14f61c513e6b949f29f33687607a16768ba5b6f8\n',
    ConsumerSecretWoo: 'cs_cb27b633536e072bb126a7684166c6341d430bf3'
  }
}
