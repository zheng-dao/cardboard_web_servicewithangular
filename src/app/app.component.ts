import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavigationStart, NavigationEnd, Router, Event } from '@angular/router'
import {NgxSpinnerService} from 'ngx-spinner';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  static shardApp : AppComponent;  
  which_header: boolean = true;// true-header1, false-header2
  title = 'JobSeeker';
  isFooterShow: boolean = true;

  constructor(private translate: TranslateService,
    private router: Router,
    private spinner : NgxSpinnerService) {
    AppComponent.shardApp = this

    translate.setDefaultLang('en');

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {       
         
        if (event.url.toString() == "/") {
          this.which_header = true;
        }
        else if (event.url.toString() == "/signup") {
          this.which_header = true;
          this.isFooterShow = false;
        }
        else if (event.url.toString() == "/login"){
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
        else if(event.url.substr(1,12) == "teleprompter"){
          this.which_header = false;
          this.isFooterShow = false;
        }
        else if(event.url.substr(1,7)=="VCVMake"){
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

  static showSpinner(){
    AppComponent.shardApp.spinner.show("loading")
    
  }
  static hideSpinner(){
    AppComponent.shardApp.spinner.hide("loading")
  }
}
