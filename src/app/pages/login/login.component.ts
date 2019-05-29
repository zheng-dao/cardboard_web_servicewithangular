import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppGlobals } from 'src/app/Global'
import { AuthenticationService } from 'src/app/service/authenticationService';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {AuthService, LinkedInLoginProvider} from 'angularx-social-login'

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
    private authSocialService: AuthService
  ) { }

  ngOnInit() {
  }

  signIn() {
    let email = this.emailInput.nativeElement.value
    let password = this.pwdInput.nativeElement.value
    let body = {"email":email, "password":password}

    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    })

    let options = { headers : httpHeaders}

    this.authService.getTokenFromServer(this.appGlobals.baseAPIUrl+"/auth/signin", body, httpHeaders)
      .subscribe( res =>{
         localStorage.setItem("_id", res._id)
         localStorage.setItem("email", res.email)
         localStorage.setItem("token", res.token)

      },
      (err : HttpErrorResponse)=>{
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
  
  signInWithLinkedin():void {
    this.authSocialService.signIn(LinkedInLoginProvider.PROVIDER_ID).then(
      (userData)=>{
       console.log(userData)
    }).catch((err)=>{
       console.log(err)
    })
  }
}
