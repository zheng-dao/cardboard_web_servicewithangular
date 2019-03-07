import { Component, OnInit } from '@angular/core';


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
    }, 4000);
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
    this.slider_Images = [{ url: '../assets/images/portal_images/slider1.png' },
    { url: '../assets/images/portal_images/slider2.png' },
    { url: '../assets/images/portal_images/slider3.png' },
    { url: '../assets/images/portal_images/slider4.png' },];
    this.slider_Indexes = [0, 1, 2, 3];

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
      { url: "../assets/images/country/uae.png", name: "UAE", jobs: 142 },
      { url: "../assets/images/country/ksa.png", name: "KSA", jobs: 130 },
      { url: "../assets/images/country/india.png", name: "INDIA", jobs: 86 },
      { url: "../assets/images/country/oman.png", name: "OMAN", jobs: 56 },
      { url: "../assets/images/country/kuwait.png", name: "KUWAIT", jobs: 150 },
      { url: "../assets/images/country/barain.png", name: "BARAIN", jobs: 110 },
      { url: "../assets/images/country/lebanon.png", name: "LEBANON", jobs: 144 },
      { url: "../assets/images/country/qatar.png", name: "QATAR", jobs: 94 },
    ];
    this.members = [
      { url: "../assets/images/photo/louliya.png", name: "Louliya Harb", career: "ux developer" },
      { url: "../assets/images/photo/louliya.png", name: "Louliya Harb", career: "ux developer" },
      { url: "../assets/images/photo/louliya.png", name: "Louliya Harb", career: "ux developer" },
      { url: "../assets/images/photo/louliya.png", name: "Louliya Harb", career: "ux developer" }
    ];

    // auto slider 
    // this.startAutoSlider();
  }

}
