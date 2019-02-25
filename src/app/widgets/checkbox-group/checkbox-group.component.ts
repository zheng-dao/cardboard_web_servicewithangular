import { Component, OnInit, Input, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss']
})
export class CheckboxGroupComponent implements OnInit {

  @ViewChildren('input') inputs:QueryList<ElementRef>;

  //check mode : true->multi check, false ->single check
  @Input() checkMode:boolean = true;

  // you have to recieve label key array for translation.
  @Input() labels:string[];

  // you have to recieve id string for 'id' property and 'for' property.
  // If using this more than one  in a parent component , 
  //in that component you have different id value.
  //
  @Input() id:string;

  constructor() { }

  ngOnInit() {
   
  }
  
  
  onClick(label:string, targer:any, index:number){
    if(this.checkMode==true){  //multi check mode
      // 
    }
    else{   //single check mode
      var i=0;
      this.inputs.forEach(item=>{  
        if(i!=index)
          item.nativeElement.checked=false;
          i++;
      })
     
    }
    
  }

}
