import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';
import {DxRangeSliderComponent} from 'devextreme-angular';
import {IconService} from '../../httpService/icon.service';
@Component({
  selector: 'app-salary-slider',
  templateUrl: './salary-slider.component.html',
  styleUrls: ['./salary-slider.component.scss']
})
export class SalarySliderComponent implements OnInit {
  is_show_wrapper: boolean = true;
  @ViewChild('showControl') showControl: ElementRef;
  
  @ViewChild(DxRangeSliderComponent) rangeSlider:DxRangeSliderComponent;
  sliderStart:number=0.00;
  sliderEnd:number=10000.00;
  

  constructor(private icon:IconService) { }

  ngOnInit() {
  }
  toggleShow() {
    this.is_show_wrapper = !this.is_show_wrapper;
    let nativeElement = this.showControl.nativeElement;
    if (this.is_show_wrapper == true)
      nativeElement.innerHTML = "-";
    else
      nativeElement.innerHTML = "+";
  }

  setInputValue(){
  //  console.log(this.rangeSlider.start);
  //  console.log(this.rangeSlider.end);
   this.sliderStart=this.rangeSlider.start;
   this.sliderEnd=this.rangeSlider.end;
  }
}
