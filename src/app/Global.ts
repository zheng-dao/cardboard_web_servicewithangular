import { Injectable } from '@angular/core';

@Injectable(
    {providedIn: 'root'}
)
export class AppGlobals {
    
    readonly baseAppUrl: string = 'http://localhost:4200/';
    readonly baseAPIUrl: string = 'https://api.nysm.me/api/v1';   

    // readonly GOOGLE_CLIENT_ID:string = "285836376834-ef97ooolnod6dj1ku9upafm74mpura0s.apps.googleusercontent.com"
    readonly GOOGLE_CLIENT_ID:string = "781760248301-7e4kim4hpvn11rle62h25jrukhpkmg9s.apps.googleusercontent.com"
    

    //linkedin
   //This is the public api key of our application
   readonly LINKEDIN_API_KEY = "818r3reabdri08";
   //This is the private api key of our application
   readonly  SECRET_KEY  = "UhPrpfh3DIK047ow";
   //This is any string we want to use. This will be used for avoiding CSRF attacks. You can generate one here: http://strongpasswordgenerator.com/
   readonly  STATE = "E3ZYKC1T6H2yP4z";
   readonly  SCOPE = "r_basicprofile%20r_emailaddress%20w_share";
   //This is the url that LinkedIn Auth process will redirect to. We can put whatever we want that starts with http:// or https:// .
   //We use a made up url that we will intercept when redirecting. Avoid Uppercases.
   readonly REDIRECT_URI = "https://mycareer.nysm.me";

   readonly CANCEL_URI = "https://www.linkedin.com/oauth/v2/login-cancel";
   readonly AUTHORIZATION_CANCEL_URI = "https://www.linkedin.com/oauth/v2/authorization-cancel";
   /*********************************************/

  //These are constants used for build the urls
    readonly AUTHORIZATION_URL = "https://www.linkedin.com/oauth/v2/authorization";
    readonly ACCESS_TOKEN_URL = "https://www.linkedin.com/oauth/v2/accessToken";
    readonly SECRET_KEY_PARAM = "client_secret";
    readonly RESPONSE_TYPE_PARAM = "response_type";
    readonly GRANT_TYPE_PARAM = "grant_type";
    readonly GRANT_TYPE = "authorization_code";
    readonly RESPONSE_TYPE_VALUE ="code";
    readonly CLIENT_ID_PARAM = "client_id";
    readonly STATE_PARAM = "state";
    readonly SCOPE_PARAM = "scope";
    readonly REDIRECT_URI_PARAM = "redirect_uri";
   /*---------------------------------------*/

  getAuthorizationUrl(){
    return this.AUTHORIZATION_URL
            +"?"+this.RESPONSE_TYPE_PARAM+"="+this.RESPONSE_TYPE_VALUE
            +"&"+this.CLIENT_ID_PARAM+"="+this.LINKEDIN_API_KEY
            +"&"+this.STATE_PARAM+"="+this.STATE
            +"&"+this.REDIRECT_URI_PARAM+"="+this.REDIRECT_URI
            +"&"+this.SCOPE_PARAM+"="+this.SCOPE;
    } 
    
    getAccessTokenUrl(authorizationToken: string){
        return this.ACCESS_TOKEN_URL
                +"?"+this.GRANT_TYPE_PARAM+"="+this.GRANT_TYPE
                +"&"+this.RESPONSE_TYPE_VALUE+"="+authorizationToken
                +"&"+this.CLIENT_ID_PARAM+"="+this.LINKEDIN_API_KEY
                +"&"+this.REDIRECT_URI_PARAM+"="+this.REDIRECT_URI
                +"&"+this.SECRET_KEY_PARAM+"="+this.SECRET_KEY;
    }

}
