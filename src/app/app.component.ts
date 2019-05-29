import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavigationStart, Router, Event } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  which_header: boolean = true;// true-header1, false-header2
  title = 'JobSeeker';
  isFooterShow: boolean = true;

  constructor(private translate: TranslateService,
    private router: Router) {
    translate.setDefaultLang('en');

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
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
}
