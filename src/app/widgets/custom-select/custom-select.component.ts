import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';


import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent implements OnInit {

  // placeholder data
   @Input() placeholder: string;

  //option data
   @Input() datas: string[];

  //mark icon data
   @Input() icon_index: number;
    icon:string="";
    

  //is placeholder show
  // @Input() showPlaceholder: boolean

  //output
   @Output() select = new EventEmitter();

  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'icon1',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/icon/ico_9.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'icon2',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/icon/ico_10.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'icon3',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/icon/ico_11.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'icon4',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/icon/ico_12.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'icon5',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/icon/ico_13.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'icon6',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/images/icon/ico_14.svg')
    );    
  }

  setIconName(i:number):void{   
      this.icon="icon"+i;
  }

  onChange(v:string){
     this.select.emit(v);
  }

  ngOnInit() {
     this.setIconName(this.icon_index);
  }

}
