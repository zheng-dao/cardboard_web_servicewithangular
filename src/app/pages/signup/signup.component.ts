import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, NgModel } from '@angular/forms';
import { CommonService} from  'src/app/service/commonService';
import { PhoneNumberComponent } from 'ngx-international-phone-number';
import { AuthenticationService } from 'src/app/service/authenticationService';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AppGlobals } from 'src/app/Global'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  @ViewChild("phoneContainer")  phoneContainer:ElementRef
  @ViewChild("phoneVerifyContainer") phoneVerifyContainer:ElementRef
  @ViewChild("signUpContainer") signUpContainer:ElementRef
 
  phoneAlertMessage:string = "";
  verificationAlertMessage: string = ""
  full_name : string ;
  email:string;
  password:string;
  job_title :string;
  company : string;
  selected_function:string;
  selected_industry:string;

  phone_code_number : string = "";
  phone_number: string = "";
  phone_code : any;

  industries : any[] = [];
  functions : any[] = [];
 
  constructor( private commonService : CommonService,
    private authService: AuthenticationService, 
    private appGlobals: AppGlobals) { }

  ngOnInit() {
    this.getIndustries()
    this.getfunctions()
    this.phoneContainer.nativeElement.style.display = "block"
    this.phoneVerifyContainer.nativeElement.style.display = "none"
    this.signUpContainer.nativeElement.style.display = "none"
  }

  sendPhoneNumber(temReference){
    this.phoneAlertMessage = ""
   
    if(this.phone_code_number.length == 0){
      this.phoneAlertMessage = "Insert your phone number!"
      return ;
    }
    else{
      let selectedCountry = (<PhoneNumberComponent>((<NgModel>temReference).valueAccessor)).selectedCountry  
      if(selectedCountry == undefined){
        this.phoneAlertMessage = "Insert your phone code!"
        return ;
      }else{
        this.phone_code = selectedCountry.dialCode     
        this.phone_number = this.phone_code_number.substr(String(this.phone_code).length +1)
        if(this.phone_number.length == 0){
          this.phoneAlertMessage = "Insert your correct phone number!"
          return ;
        }
        else{
          this.phoneContainer.nativeElement.style.display = "none"
          this.phoneVerifyContainer.nativeElement.style.display = "block"
          this.signUpContainer.nativeElement.style.display = "none" 

        }
      }
    } 
  }

  sendVerificationCode(){
    this.phoneContainer.nativeElement.style.display = "none"
    this.phoneVerifyContainer.nativeElement.style.display = "none"
    this.signUpContainer.nativeElement.style.display = "block"
  }

  back(){
    this.phoneContainer.nativeElement.style.display = "block"
    this.phoneVerifyContainer.nativeElement.style.display = "none"
    this.signUpContainer.nativeElement.style.display = "none"
  }

  getIndustries(){
   this.commonService.getIndustries().subscribe(data => {
        this.industries = data.items
        console.log("industries"+data)
   });
  }

  getfunctions(){
     this.commonService.getRoles().subscribe(data =>{
       this.functions = data.items
       console.log("functions"+data)
     })
  }

 signup(){
      let sign_info = {
          "email" : this.email,
          "password": this.password,
          "phone" :{
            "code": this.phone_code,
            "number": this.phone_number
          },
          "name":{
            "firstName":this.full_name,
            "lastName": ""
          },
          "jobTitle": this.job_title,
          "industryId" : this.selected_industry,
          "options": {
              "makePorfilePublic": "checked"
          }
      }

      

      let httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      })
  
      let options = { headers : httpHeaders}
  
      this.authService.getTokenFromServer(this.appGlobals.baseAPIUrl+"/auth/jobseeker/signup", sign_info, httpHeaders)
        .subscribe( res =>{
           localStorage.setItem("_id", res._id)
           localStorage.setItem("email", res.email)
           localStorage.setItem("token", res.token)

           console.log(res)
  
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

}
