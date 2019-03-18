import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import {IconService} from '../../httpService/icon.service';


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
   @Input() icon_name: string;
  
    

  //is placeholder show
  // @Input() showPlaceholder: boolean

  //output
   @Output() select = new EventEmitter();

  constructor(private iconService:IconService) {    
  }


  onChange(v:string){
     this.select.emit(v);
  }

  ngOnInit() {
  }

}
