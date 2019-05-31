import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppGlobals } from 'src/app/Global'
import { AuthenticationService } from 'src/app/service/authenticationService';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from 'src/app/app.component';
import {
  AuthService,
  SocialUserModel,
  GoogleLoginProvider,
  LinkedinLoginProvider
} from 'ng-dynami-social-login';

import { Router, Event, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  readonly STATE1: string = "loginWnd";
  readonly STATE2: string = "emailforgotWnd";
  readonly STATE3: string = "passwordWnd";

  email: string = "";
  password: string = "";
  emailForgot: string = "";
  newPassword: string = "";
  passwordConfirm: string = "";
  wndState: string = "";
  verificationCode: string = ""

  constructor(
    private appGlobals: AppGlobals,
    private authService: AuthenticationService,
    private socialAuthService: AuthService,
    private _http: HttpClient,
    private router: Router,
    private toast: ToastrService
    // private ngxLinkedinService : NgxLinkedinService
  ) {
    this.wndState = this.STATE1;
  }

  ngOnInit() {
  }

  signIn() {

    if (this.email.length == 0) {
      this.toast.warning("Insert your email!", "", { timeOut: 2000 })
      return;
    }
    if (this.password.length == 0) {
      this.toast.warning("Insert your password!", "", { timeOut: 2000 })
      return;
    }

    AppComponent.showSpinner();
    let body = { "email": this.email, "password": this.password }

    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    })

    let options = { headers: httpHeaders }

    this._http.post<any>(this.appGlobals.baseAPIUrl + "/auth/signin", body, options)
      .subscribe(res => {
        AppComponent.hideSpinner();
        this.toast.success("Log in success", "", { timeOut: 2000 })

        localStorage.setItem("_id", res._id)
        localStorage.setItem("email", res.email)
        localStorage.setItem("token", res.token)
        localStorage.setItem("loginType", "email")
        this.router.navigateByUrl('/dashboard')
      },
        (err: HttpErrorResponse) => {
          //Backend returns unsuccessful response codes such as 404, 500 etc.				 
          console.log('Backend returned status code: ', err.status);
          console.log('Response body:', err.error);
          if (err.status == 400) {
            this.toast.error("Email or password is invalid!", "", { timeOut: 2000 });
          }
          else if (err.status == 422) {
            this.toast.error("Email is required!", "", { timeOut: 2000 });
          }

        });
  }

  showForgotEmailDialog() {
    this.emailForgot = this.email;
    this.wndState = this.STATE2;
  }
  sendEmail() {

    if (this.emailForgot.length == 0) {
      this.toast.warning("Insert your email!", "", { timeOut: 2000 })
      return;
    }

    AppComponent.showSpinner();
    let body = { "email": this.emailForgot }
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    })
    let options = { headers: httpHeaders }
    this._http.post(this.appGlobals.baseAPIUrl + "/auth/sendforgotpasswordcode", body, options)
      .subscribe(
        res => {
          AppComponent.hideSpinner()
          this.toast.success("Email was sent successfully.","",{timeOut:2000});

          this.verificationCode = ""
          this.newPassword = ""
          this.passwordConfirm = ""

          this.wndState = this.STATE3;
        },
        (err: HttpErrorResponse) => {
          AppComponent.hideSpinner()
          this.toast.error("Email sending error happens!","",{timeOut:2000});
        }
      );
  }

  cancel() {
     this.wndState = this.STATE1;
  }


  sendCodePwdEmail() {
    if (this.verificationCode.length == 0) {
      this.toast.warning("Insert email verification code!", "", { timeOut: 2000 })
      return;
    }
    
    if (this.newPassword.length == 0) {
      this.toast.warning("Insert your password!", "", { timeOut: 2000 })
      return;
    }
    if (this.passwordConfirm.length == 0) {
      this.toast.warning("Confirm your password !", "", { timeOut: 2000 })
      return;
    }
    if (this.newPassword != this.passwordConfirm) {
      this.toast.warning("No equal password and confirm!", "", { timeOut: 2000 })
      return;
    }
    
    AppComponent.showSpinner();
    let body = { "email": this.emailForgot, 
                 "code":this.verificationCode, 
                  "password": this.newPassword }

    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    })
    let options = { headers: httpHeaders }
    this._http.post(this.appGlobals.baseAPIUrl + "/auth/resetpassword", body, options)
      .subscribe(
        res => {
          AppComponent.hideSpinner()
          this.toast.success("Password was reset successfully!","",{timeOut:2000});

          this.verificationCode = "";
          this.password = this.newPassword ;
          this.passwordConfirm = ""
          this.newPassword = ""        

          this.wndState = this.STATE1;
        },

        (err: HttpErrorResponse) => {
          AppComponent.hideSpinner()
          this.toast.error("Password reset error happens!","",{timeOut:2000});
        }
        
      );



  }
  resendEmail() {
    AppComponent.showSpinner();
    let body = { "email": this.emailForgot }
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    })
    let options = { headers: httpHeaders }
    this._http.post(this.appGlobals.baseAPIUrl + "/auth/sendforgotpasswordcode", body, options)
      .subscribe(
        res => {
          AppComponent.hideSpinner()
          this.toast.success("Email was sent successfully.","",{timeOut:2000});

          this.verificationCode = ""
          this.newPassword = ""
          this.passwordConfirm = ""

          this.wndState = this.STATE3;
        },

        (err: HttpErrorResponse) => {
          AppComponent.hideSpinner()
          this.toast.error("Email sending error happens!","",{timeOut:2000});
        }

      );
  }

  signInWithLinkedin() {
   window.location.href = this.appGlobals.getAuthorizationUrl();
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
