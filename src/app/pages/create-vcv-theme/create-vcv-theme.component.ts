import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-vcv-theme',
  templateUrl: './create-vcv-theme.component.html',
  styleUrls: ['./create-vcv-theme.component.scss']
})
export class CreateVcvThemeComponent implements OnInit {
 
  themes:any[];
  sliceThemes:any[];
  constructor() { 
   this.themes=[
     {style:"/assets/images/create_vcv_theme/bear.png", name:"Bear"},
     {style:"/assets/images/create_vcv_theme/effects.png",name:"Effects"},
     {style:"/assets/images/create_vcv_theme/pattern.png",name:"Pattern"},
     {style:"/assets/images/create_vcv_theme/colorful.png",name:"Colorful"},
     {style:"/assets/images/create_vcv_theme/social_mascots.png",name:"Social Mascots"},
     {style:"/assets/images/create_vcv_theme/pattern.png",name:"Pattern"},
     {style:"/assets/images/create_vcv_theme/social_mascots.png",name:"Social Mascots"},
     {style:"/assets/images/create_vcv_theme/pattern.png",name:"Pattern"},
     {style:"/assets/images/create_vcv_theme/social_mascots.png",name:"Social Mascots"},
     {style:"/assets/images/create_vcv_theme/effects.png",name:"Effects"},
     {style:"/assets/images/create_vcv_theme/colorful.png",name:"Colorful"},
     {style:"/assets/images/create_vcv_theme/pattern.png",name:"Pattern"},
     {style:"/assets/images/create_vcv_theme/bear.png",name:"Bear"},
     {style:"/assets/images/create_vcv_theme/colorful.png",name:"Colorful"},
     {style:"/assets/images/create_vcv_theme/effects.png",name:"Effects"},
     {style:"/assets/images/create_vcv_theme/bear.png",name:"Bear"},
     {style:"/assets/images/create_vcv_theme/social_mascots.png",name:"Social Mascots"},
     {style:"/assets/images/create_vcv_theme/effects.png",name:"Effects"},
     {style:"/assets/images/create_vcv_theme/social_mascots.png",name:"Social Mascots"},
     {style:"/assets/images/create_vcv_theme/colorful.png",name:"Colorful"}
   ];

   this.sliceThemes=this.themes.slice(0, 20);
  }

  ngOnInit() {
  }


  setPagination(index:number){

  }
}
