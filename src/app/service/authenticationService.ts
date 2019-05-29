import {Injectable} from '@angular/core'
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class AuthenticationService implements CanActivate{

/****FILL THIS WITH YOUR INFORMATION*********/
//This is the public api key of our application
private static  API_KEY : string = "818r3reabdri08";
//This is the private api key of our application
private static  SECRET_KEY : string = "UhPrpfh3DIK047ow";
//This is any string we want to use. This will be used for avoiding CSRF attacks. You can generate one here: http://strongpasswordgenerator.com/
private static   STATE : string  = "E3ZYKC1T6H2yP4z";
private static  SCOPE : string = "r_basicprofile%20r_emailaddress%20w_share";
//This is the url that LinkedIn Auth process will redirect to. We can put whatever we want that starts with http:// or https:// .
//We use a made up url that we will intercept when redirecting. Avoid Uppercases.
private static  REDIRECT_URI : string = "https://api.nysm.me/auth/linkedin/callback";

private static  CANCEL_URI : string = "https://www.linkedin.com/oauth/v2/login-cancel";
private static  AUTHORIZATION_CANCEL_URI : string = "https://www.linkedin.com/oauth/v2/authorization-cancel";
/*********************************************/

//These are constants used for build the urls
private static  AUTHORIZATION_URL : string = "https://www.linkedin.com/oauth/v2/authorization";
private static  ACCESS_TOKEN_URL : string = "https://www.linkedin.com/oauth/v2/accessToken";
private static  SECRET_KEY_PARAM : string = "client_secret";
private static  RESPONSE_TYPE_PARAM : string = "response_type";
private static  GRANT_TYPE_PARAM : string = "grant_type";
private static  GRANT_TYPE : string = "authorization_code";
private static  RESPONSE_TYPE_VALUE : string ="code";
private static  CLIENT_ID_PARAM : string  = "client_id";
private static  STATE_PARAM : string = "state";
private static  SCOPE_PARAM : string = "scope";
private static  REDIRECT_URI_PARAM : string = "redirect_uri";
/*---------------------------------------*/
private static  QUESTION_MARK : string = "?";
private static  AMPERSAND : string = "&";
private static  EQUALS : string = "=";


    constructor(private router: Router,
        private _http: HttpClient){}

    canActivate(){
        if(!this.isAuthenticated()){
            this.router.navigateByUrl('/login');
            return false;
        }
        return false;
    }

    getTokenFromServer(apiUrl, body, options):Observable<any> {
        return this._http.post<any>(apiUrl, body, options)
    }  

    signUp(apiUrl, body, options):Observable<any> {
        return this._http.post<any>(apiUrl, body, options)
    }  
    isAuthenticated():boolean{
        const token = localStorage.getItem('token')
        // check whether this token has been expired or not
        // 
        return false;
    }
}