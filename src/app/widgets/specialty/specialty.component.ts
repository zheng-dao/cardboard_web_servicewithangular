import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';

@Component({
  selector: 'app-specialty',
  templateUrl: './specialty.component.html',
  styleUrls: ['./specialty.component.scss']
})
export class SpecialtyComponent implements OnInit {

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
