import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from 'src/app/service/authenticationService';
@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.scss']
})
export class Header1Component implements OnInit {



  

  is_en: boolean = true;
  is_ar: boolean = false;

  @ViewChild('header1') header1: ElementRef;

  constructor(private translate: TranslateService,
    private authService: AuthenticationService) {
    translate.setDefaultLang('en');
  }
  uselanguage(s: string) {
    this.translate.use(s);
    if (s === 'en') {
      this.is_en = true;
      this.is_ar = false;
    }
    else {
      this.is_en = false;
      this.is_ar = true;
    }
  }

  ngOnInit() { }

  toggleHeaderMenu() {
    let nativeheader = this.header1.nativeElement;
    if (nativeheader.className === "headerbody") {
      nativeheader.className += " responsive";
    }
    else {
      nativeheader.className = "headerbody";
    }
  }

  logout() {
    this.authService.signout()
  }
// return value-> true: logined, false : logout
  getLogStatus(){
     if(localStorage.getItem('token') != undefined){
        return true;
     }else{
        return  false;
     }
  }

}
