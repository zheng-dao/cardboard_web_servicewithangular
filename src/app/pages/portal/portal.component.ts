import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  // slider operation
  slider_Images: any[];
  slider_Indexes: number[];
  currentIndex: number = 0;
  setCurrentIndex(i: number) {
    this.currentIndex = i;
  }

  startAutoSlider() {
    setInterval(() => {
      if (this.currentIndex < 3)
        this.currentIndex++;
      else
        this.currentIndex = 0;
    }, 3000);
  }

  // personal slider operation 
  members: any[];
  currentSelectedIndex: number = 0;
  currentMarginLeft: number = 0;
  eactMarginValue: number = 293;          // this is value from scss( 273px(width)+20px(margin))
  eachScrollBarMarginValue: number = 0;  // this will be setted as ((portal_content_3_2_3.width -  scrollbar.width)/ members.length)

  setCurrentMember(direction: number) {  // parameter(direction is 0 if left direction, otherwise 1)
    if (direction === 0) {
      if (this.currentSelectedIndex != this.members.length - 1) {
        this.currentSelectedIndex++;
        this.currentMarginLeft = this.currentMarginLeft - this.eactMarginValue;
      }
    }
    else {
      if (this.currentSelectedIndex != 0) {
        this.currentSelectedIndex--;
        this.currentMarginLeft = this.currentMarginLeft + this.eactMarginValue;
      }
    }
  }

  setselected(index: number) {
    if (index === this.currentSelectedIndex)
      return "selected";
    return "";
  }

  getScrollBarMarginLeft() {
    this.eachScrollBarMarginValue = 280 / (this.members.length - 1);
    var scrollMarginValue = this.currentSelectedIndex * this.eachScrollBarMarginValue;
    return scrollMarginValue.toString() + "px";
  }

  //other
  countries: any[];

  // who's using NYSM
  marks: any[];

  ngOnInit() {
    this.slider_Images = [
      { url: '../assets/images/portal_images/slider2.png' },
      { url: '../assets/images/portal_images/slider3.png' },
      { url: '../assets/images/portal_images/slider4.png' },];
    this.slider_Indexes = [0, 1, 2];

    this.marks = [
      { url: '../assets/images/mark/bird.png' },
      { url: '../assets/images/mark/uber-logo.png' },
      { url: '../assets/images/mark/2000px-LinkedIn_Logo.png' },
      { url: '../assets/images/mark/logo-salesforce-png--454.png' },
      { url: '../assets/images/mark/evernote.png' },
      { url: '../assets/images/mark/shopify.png' },
      { url: '../assets/images/mark/ibm.png' },
      { url: '../assets/images/mark/sony.png' },
      { url: '../assets/images/mark/nike.png' },
      { url: '../assets/images/mark/zendesk.png' },
      { url: '../assets/images/mark/soundcloud.png' },
      { url: '../assets/images/mark/huge.png' }
    ];
    this.countries = [
      { url: "../assets/images/team/Mark Holt.jpg", name: "Mark Holt", occupation: "CEO/Founder" },
      { url: "../assets/images/team/Myles Epstein.jpg", name: "Myles Epstein", occupation: "Marketing Director" },
      { url: "../assets/images/team/JR Desgrottes.jpg", name: "JR Desgrottes", occupation: "Creative Director" },
      { url: "../assets/images/team/Kevin Huang.jpg", name: "Kevin Huang", occupation: "Lead Engineer" }
    ];
    this.members = [
      { url: "../assets/images/team/Mark Holt.jpg", name: "Mark Holt", career: "CEO/Founder" },
      { url: "../assets/images/team/Myles Epstein.jpg", name: "Myles Epstein", career: "Marketing Director" },
      { url: "../assets/images/team/JR Desgrottes.jpg", name: "JR Desgrottes", career: "Creative Director" },
      { url: "../assets/images/team/Kevin Huang.jpg", name: "Kevin Huang", career: "Lead Engineer" }
    ];

    // auto slider 
    this.startAutoSlider();
  }

}
