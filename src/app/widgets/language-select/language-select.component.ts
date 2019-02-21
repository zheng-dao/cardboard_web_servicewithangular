import { Component, OnInit , ViewChild , ElementRef} from '@angular/core';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss']
})
export class LanguageSelectComponent implements OnInit {

  language_select:number=1; //1:all, 2:en, 3:ar, 4:fr
  is_show_wrapper:boolean=true;

  @ViewChild('showControl') showControl: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  self_select(index: number) {
    this.language_select = index;
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
