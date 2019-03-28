import { Component, OnInit } from '@angular/core';
import {GlobalsService} from '../globals.service';
@Component({
  selector: 'app-teleprompter1',
  templateUrl: './teleprompter1.component.html',
  styleUrls: ['./teleprompter1.component.scss']
})
export class Teleprompter1Component implements OnInit {

  state_list:any[];
  themes:any[];
  sliceThemes:any[];

  constructor(private _global:GlobalsService) { }

  ngOnInit() {
   this.state_list=this._global.state_list;
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

  this.sliceThemes=this.themes.slice(10, 15);
  }

}
