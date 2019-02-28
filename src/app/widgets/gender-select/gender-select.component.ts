import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {IconService} from '../../httpService/icon.service';
@Component({
  selector: 'app-gender-select',
  templateUrl: './gender-select.component.html',
  styleUrls: ['./gender-select.component.scss']
})
export class GenderSelectComponent implements OnInit {

  gender_select: number = 1; // value=1:all_gender selected, 2:male, 3:female
  is_show_wrapper: boolean = true;

  @ViewChild('showControl') showControl: ElementRef;

  constructor( private icon :IconService) {  }

  ngOnInit() {
  }

  self_select(index: number) {
    this.gender_select = index;
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
