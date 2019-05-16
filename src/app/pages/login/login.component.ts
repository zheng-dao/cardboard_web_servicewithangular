import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppGlobals } from 'src/app/Global'
import { UserService } from 'src/app/httpService/userservice';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';


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
    private userService: UserService
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

    this.userService.getAPIUsers(this.appGlobals.baseAPIUrl, body, httpHeaders)
      .subscribe( res =>{
         console.log(res._id)
         console.log(res.email)
         console.log(res.token)
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
