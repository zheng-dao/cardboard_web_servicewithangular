import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, NgModel } from '@angular/forms';
import { CommonService } from 'src/app/service/commonService';
import { PhoneNumberComponent } from 'ngx-international-phone-number';
import { AuthenticationService } from 'src/app/service/authenticationService';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { AppGlobals } from 'src/app/Global'
import { Router, Event, NavigationEnd } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { AppComponent } from 'src/app/app.component'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  readonly STAGE1: string = "email";
  readonly STAGE2: string = "emailVerification";
  readonly STAGE3: string = "sign up";

  signupStep: string;

  @ViewChild("phoneContainer") phoneContainer: ElementRef
  @ViewChild("phoneVerifyContainer") phoneVerifyContainer: ElementRef
  @ViewChild("signUpContainer") signUpContainer: ElementRef



  first_name: string = "";
  last_name: string = "";
  email: string = "";
  password: string = "";
  pwdConfirm: string = "";
  job_title: string = "";
  company: string = "";
  selected_function: string = "";
  selected_industry: string = "";
  verificationCode: string = "";

  phone_code_number: string = "";
  phone_number: string = "";
  phone_code: any;

  industries: any[] = [];
  functions: any[] = [];

  constructor(private commonService: CommonService,
    private authService: AuthenticationService,
    private appGlobals: AppGlobals,
    private http: HttpClient,
    private router: Router,
    public toast: ToastrService) {
  }

  ngOnInit() {
    this.getIndustries()
    this.getfunctions()
    this.signupStep = this.STAGE1
  }

  sendEmail(temReference) {
    
    if (this.first_name.length == 0) {
      this.toast.warning("Insert your firstname!", "", { timeOut: 2000 })
      return;
    }
    if (this.last_name.length == 0) {
      this.toast.warning("Insert your lastname!", "", { timeOut: 2000 })
      return;
    }
    if (this.password.length == 0) {
      this.toast.warning("Insert your password!", "", { timeOut: 2000 })
      return;
    }
    if (this.pwdConfirm.length == 0) {
      this.toast.warning("Confirm your password !", "", { timeOut: 2000 })
      return;
    }
    if (this.password != this.pwdConfirm) {
      this.toast.warning("No equal password and confirm!", "", { timeOut: 2000 })
      return;
    }
    if (this.email.length == 0) {
      this.toast.warning("Insert your email!", "", { timeOut: 2000 })
      return;
    }
    if (this.phone_code_number.length == 0) {
      this.toast.warning("Insert your phone number!", "", { timeOut: 2000 })
      return;
    }
    else {
      let selectedCountry = (<PhoneNumberComponent>((<NgModel>temReference).valueAccessor)).selectedCountry
      if (selectedCountry == undefined) {
        this.toast.warning("Insert your phone code!", "", { timeOut: 2000 })
        return;
      } else {
        this.phone_code = selectedCountry.dialCode
        this.phone_number = this.phone_code_number.substr(String(this.phone_code).length + 1)
        if (this.phone_number.length == 0) {
          this.toast.warning("Insert your correct phone number!", "", { timeOut: 2000 })
          return;
        }
        else {

          AppComponent.showSpinner();

          let body = { "email": this.email }
          let httpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          })
          let options = { headers: httpHeaders }
          this.http.post(this.appGlobals.baseAPIUrl + "/auth/sendverificationcode", body, options)
            .subscribe(
              res => {
                AppComponent.hideSpinner()
                this.verificationCode = ""
                this.signupStep = this.STAGE2;
              },
              (err: HttpErrorResponse) => {
                AppComponent.hideSpinner()
                if (err.error instanceof Error) {
                  //A client-side or network error occurred.				 
                  console.log('An error occurred:', err.error.message);
                } else {
                  //Backend returns unsuccessful response codes such as 404, 500 etc.				 
                  console.log('Backend returned status code: ', err.status);
                  console.log('Response body:', err.error);
                }
              }
            );

        }
      }
    }
  }

  sendVerificationCode() {

    if (this.verificationCode.length == 0) {
      this.toast.warning("Insert email verification code!", "", { timeOut: 2000 })
      return;
    }

    AppComponent.showSpinner()
    let body = { "email": this.email, "code": this.verificationCode }
    console.log(body);
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    })
    let options = { headers: httpHeaders }
    this.http.post(this.appGlobals.baseAPIUrl + "/auth/verifyemail", body, options)
      .subscribe(
        res => {
          AppComponent.hideSpinner()

          this.verificationCode = ""
          this.toast.success("Verification success", "", { timeOut: 2000 })
          this.signupStep = this.STAGE3
        },
        (err: HttpErrorResponse) => {
          AppComponent.hideSpinner()
          if (err.error instanceof Error) {
            //A client-side or network error occurred.	
            this.toast.error(err.error.message, "", { timeOut: 2000 })
          } else {
            //Backend returns unsuccessful response codes such as 404, 500 etc.				 

            this.toast.error("Email verification error!", "", { timeOut: 2000 })
          }
        }
      );
  }

  resendEmail() {
    this.verificationCode = "";
    AppComponent.showSpinner();
    let body = { "email": this.email }    
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    })
    let options = { headers: httpHeaders }
    this.http.post(this.appGlobals.baseAPIUrl + "/auth/sendverificationcode", body, options)
      .subscribe(
        res => {
          AppComponent.hideSpinner()        
        },
        (err: HttpErrorResponse) => {
          AppComponent.hideSpinner()
          if (err.error instanceof Error) {
            //A client-side or network error occurred.				 
            console.log('An error occurred:', err.error.message);
          } else {
            //Backend returns unsuccessful response codes such as 404, 500 etc.				 
            console.log('Backend returned status code: ', err.status);
            console.log('Response body:', err.error);
          }
        }
      );
  }

  getIndustries() {
    this.commonService.getIndustries().subscribe(data => {
      this.industries = data.items
      console.log("industries" + data)
    });
  }

  getfunctions() {
    this.commonService.getRoles().subscribe(data => {
      this.functions = data.items
      console.log("functions" + data)
    })
  }

  signup() {
    AppComponent.showSpinner()
    let sign_info = {

      "email": this.email,
      "password": this.password,
      "phone": {
        "code": this.phone_code,
        "number": this.phone_number
      },
      "name": {
        "firstName": this.first_name,
        "lastName": this.last_name
      },
      "jobTitle": this.job_title,
      "industryId": this.selected_industry,
      "options": {
        "makePorfilePublic": "checked"
      }
    }

    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    })

    let options = { headers: httpHeaders }

    this.http.post<any>(this.appGlobals.baseAPIUrl + "/auth/jobseeker/signup", sign_info, options)
      .subscribe(res => {
        AppComponent.hideSpinner()
        this.toast.success("Sign up success!", "", { timeOut: 2000 })
        localStorage.setItem("_id", res._id)
        localStorage.setItem("email", res.email)
        localStorage.setItem("token", res.token)

        this.email = "";
        this.phone_code_number = "";
        this.verificationCode = "";
        this.first_name = "";
        this.last_name = "";
        this.password = "";
        this.pwdConfirm = "";
        this.job_title = "";
        this.company = "";
        this.selected_function = ""
        this.selected_industry = ""

        this.router.navigateByUrl("/dashboard")

      },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            //A client-side or network error occurred.				 
            console.log('An error occurred:', err.error.message);
            this.toast.error(err.error.message, "", { timeOut: 2000 })
          } else {
            //Backend returns unsuccessful response codes such as 404, 500 etc.				 
            console.log('Backend returned status code: ', err.status);
            console.log('Response body:', err.error);
            this.toast.error("Sign up failure!", "", { timeOut: 2000 })
          }

        })
  }

}
