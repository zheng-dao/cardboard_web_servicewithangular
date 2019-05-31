import {Injectable} from '@angular/core'
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from 'ng-dynami-social-login';
@Injectable({
    providedIn: 'root'
})
export class AuthenticationService implements CanActivate{

    constructor(private router: Router,
        private _http: HttpClient,
        private socialAuthService: AuthService){}

    canActivate(){
        if(!this.isAuthenticated()){
            this.router.navigateByUrl('/login');
            return false;
        }
        return true;
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
        if(token!=undefined){
            return true;
        }        
        return false;
    }

    signout():void{
        let logType = localStorage.getItem('loginType')
        if( logType!= undefined){
           if(logType == "google"){
               this.socialAuthService.signOut()
           }
           localStorage.removeItem('loginType')
        }

        if(localStorage.getItem('token')!= undefined){
            localStorage.removeItem('token')
            localStorage.removeItem('email')
            localStorage.removeItem('_id')
        }
        this.router.navigateByUrl("/")
    }

 
}