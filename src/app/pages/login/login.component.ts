import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppGlobals } from 'src/app/Global'
import { AuthenticationService } from 'src/app/service/authenticationService';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import {
  AuthService,
  GoogleLoginProvider
} from 'ng-dynami-social-login';
import { NgxLinkedinService } from 'ngx-linkedin';
import { Router, Event, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('email') emailInput: ElementRef
  @ViewChild('password') pwdInput: ElementRef


  constructor(
    private appGlobals: AppGlobals,
    private authService: AuthenticationService,
    private socialAuthService: AuthService,
    private ngxLinkedinService: NgxLinkedinService,
    private _http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {

  }

  signIn() {
    let email = this.emailInput.nativeElement.value
    let password = this.pwdInput.nativeElement.value
    let body = { "email": email, "password": password }

    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    })

    let options = { headers: httpHeaders }

    this.authService.getTokenFromServer(this.appGlobals.baseAPIUrl + "/auth/signin", body, httpHeaders)
      .subscribe(res => {
        localStorage.setItem("_id", res._id)
        localStorage.setItem("email", res.email)
        localStorage.setItem("token", res.token)
        localStorage.setItem("loginType", "email")
        this.router.navigateByUrl('/dashboard')
      },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            //A client-side or network error occurred.				 
            console.log('An error occurred:', err.error.message);
          } else {
            //Backend returns unsuccessful response codes such as 404, 500 etc.				 
            console.log('Backend returned status code: ', err.status);
            console.log('Response body:', err.error);
          }
        })
  }

  signInWithLinkedin(): void {
    this.ngxLinkedinService.signIn<any>().subscribe((user) => {
      console.log(user)
    })
    const token = this.ngxLinkedinService.getToken();
    console.info(token);
  }

  signInWithGoogle(): void {

    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (userData) => {
        console.log(userData);
        let body = { "id_token": userData.idToken, "client_id": this.appGlobals.GOOGLE_CLIENT_ID }

        let httpHeaders = new HttpHeaders({
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache'
        })
        let options = { headers: httpHeaders }
        this._http.post<any>(this.appGlobals.baseAPIUrl + "/auth/jobseeker/googlesignin", body, options)
          .subscribe(res => {
            localStorage.setItem("_id", res._id)
            localStorage.setItem("email", res.email)
            localStorage.setItem("token", res.token)
            localStorage.setItem("loginType", "google")
            this.router.navigateByUrl('/dashboard')
            
          },
            (err: HttpErrorResponse) => {
              if (err.error instanceof Error) {
                //A client-side or network error occurred.				 
                console.log('An error occurred:', err.error.message);
              } else {
                //Backend returns unsuccessful response codes such as 404, 500 etc.				 
                console.log('Backend returned status code: ', err.status);
                console.log('Response body:', err.error);
              }
            })
      }
    );
  }
}
