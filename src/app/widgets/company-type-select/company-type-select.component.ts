import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-company-type-select',
  templateUrl: './company-type-select.component.html',
  styleUrls: ['./company-type-select.component.scss']
})
export class CompanyTypeSelectComponent implements OnInit {
  is_show_wrapper: boolean = true;
  @ViewChild('showControl') showControl: ElementRef;
  constructor() { }
 
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

}
