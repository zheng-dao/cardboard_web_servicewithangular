import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { TranslateService } from '@ngx-translate/core';
import { NavigationStart, NavigationEnd, Router, ActivatedRoute, Event } from '@angular/router'
import { NgxSpinnerService } from 'ngx-spinner';
import { AppGlobals } from 'src/app/Global';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
  static shardApp: AppComponent;
  which_header: boolean = true;// true-header1, false-header2
  title = '(C)board';
  isFooterShow: boolean = true;

  constructor(private translate: TranslateService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private activateRouter: ActivatedRoute,
    private appGlobals: AppGlobals,
    private http: HttpClient) {

    const firebaseConfig = {
      apiKey: "AIzaSyBDJIv7_QEChZyr6aG19Kl3fEQEAID_d2U",
      authDomain: "swaptd.firebaseapp.com",
      databaseURL: "https://swaptd.firebaseio.com",
      projectId: "swaptd",
      storageBucket: "swaptd.appspot.com",
      messagingSenderId: "915539975984",
      appId: "1:915539975984:web:303eebf051be24d6bab2f5"
    };

    firebase.initializeApp(firebaseConfig)
    AppComponent.shardApp = this

    translate.setDefaultLang('en');

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {

        if (event.url.toString() == "/") {
          this.which_header = true;
          this.isFooterShow = true;
        }

        // else if (event.url.toString() == itemsURL) {
        //   this.which_header = false;
        //   this.isFooterShow = false;
        // }

        else if (event.url.toString() == "/items") {
          this.which_header = false;
          this.isFooterShow = false;
        }

        else if (event.url.toString() == "/profile") {
          this.which_header = false;
          this.isFooterShow = false;
        }
        else if (event.url.toString() == "/aboutUs") {
          this.which_header = true;
          this.isFooterShow = true;
        }
        else if (event.url.toString() == "/contactUs") {
          this.which_header = true;
          this.isFooterShow = true;
        }
        else if (event.url.toString() == "/term") {
          this.which_header = true;
          this.isFooterShow = true;
        }
        else if (event.url.toString() == "/privacy") {
          this.which_header = true;
          this.isFooterShow = false;
        }
        else if (event.url.toString() == "/vcvtutorial") {
          this.which_header = true;
          this.isFooterShow = false;
        }
        else if (event.url.toString() == "/emailconfirm") {
          this.which_header = true;
          this.isFooterShow = false;
        }
        else if (event.url.substr(1, 12) == "teleprompter") {
          this.which_header = false;
          this.isFooterShow = false;
        }
        else if (event.url.substr(1, 7) == "VCVMake") {
          this.which_header = false;
          this.isFooterShow = false;
        }
        else {
          this.which_header = false;
          this.isFooterShow = true;
        }

        // in each page navigation scrolling to top 
        let scrollToTop = window.setInterval(() => {
          let pos = window.pageYOffset;
          if (pos > 0)
            window.scrollTo(0, pos - 20);
          else
            window.clearInterval(scrollToTop);
        }, 16);
      }
    });

  }

  ngOnInit() {

    console.log(this.activateRouter.snapshot);
    this.activateRouter.queryParams.subscribe((params) => {
      console.log(params)
      let code = params['code']
      let state = params['state']
      if (state == this.appGlobals.STATE) {

        let body = {}

        let httpHeaders = new HttpHeaders({
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          'Access-Control-Allow-Origin': '*'
        })

        let options = { headers: httpHeaders }

        this.http.post<any>(this.appGlobals.getAccessTokenUrl(code), body, options)
          .subscribe(res => {

            console.log(res)
            let access_token = res['access_token'];
            let access_body = { 'access_token': access_token, 'role': 'jobseeker' };
            let httpHeaders = new HttpHeaders({
              'Content-Type': 'application/json',
              'Cache-Control': 'no-cache'
            })
            let options = { headers: httpHeaders }
            this.http.post<any>(this.appGlobals.baseAPIUrl + "/auth/jobseeker/likedin", access_body, options).subscribe(
              (res) => {
                localStorage.setItem("_id", res._id)
                localStorage.setItem("email", res.email)
                localStorage.setItem("token", res.token)
                localStorage.setItem("loginType", "linkedin")
                this.router.navigateByUrl('/dashboard')
              },
              (err) => {
                console.log(err)
              });


          },
            (err: HttpErrorResponse) => {
              //Backend returns unsuccessful response codes such as 404, 500 etc.	
            })
      }
    });
  }

  static showSpinner() {
    AppComponent.shardApp.spinner.show("loading")

  }
  static hideSpinner() {
    AppComponent.shardApp.spinner.hide("loading")
  }
}
