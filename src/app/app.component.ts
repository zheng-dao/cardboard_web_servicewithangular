import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {NavigationStart, Router, Event} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 
})
export class AppComponent {
  
  title = 'JobSeeker';
   isHeaderBackground:boolean=true;
   isFooterShow:boolean=true;
   backgroundImage:String="";
   backgroundSize:String="";

  constructor(private translate:TranslateService,
              private router: Router){
    translate.setDefaultLang('en');
    
    this.router.events.subscribe((event:Event)=>{
    if(event instanceof NavigationStart){
      if(event.url.toString()=="/signup"){
        this.isHeaderBackground=false;
        this.isFooterShow=false;
        this.backgroundImage="url('assets/images/bg.png')";
        this.backgroundSize="100% 100%";
      }
      else if(event.url.toString()=="/vcvtutorial"){
        this.isHeaderBackground=true;
        this.isFooterShow=false;
        this.backgroundImage="";
        this.backgroundSize="";
      }
      else{
        this.isHeaderBackground=true;
        this.isFooterShow=true;
        this.backgroundImage="";
        this.backgroundSize="";
      }

    }
    });

  }
}
