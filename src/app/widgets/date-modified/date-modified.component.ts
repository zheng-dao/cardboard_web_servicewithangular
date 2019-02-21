import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-date-modified',
  templateUrl: './date-modified.component.html',
  styleUrls: ['./date-modified.component.scss']
})
export class DateModifiedComponent implements OnInit {
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
