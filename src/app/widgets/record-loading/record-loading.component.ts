import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import {interval} from 'rxjs'
import { inputs } from '@syncfusion/ej2-angular-dropdowns/src/auto-complete/autocomplete.component';

@Component({
  selector: 'app-record-loading',
  templateUrl: './record-loading.component.html',
  styleUrls: ['./record-loading.component.scss']
})
export class RecordLoadingComponent implements OnInit {

 @Input() second: number;
 @Input() is_start: Boolean;
 @Output() nextNavigation = new EventEmitter();
  path_id:string = ""
  loading_percent_string:string = "0,100";

  @ViewChild('loading_time_element') loading_time_element:ElementRef
 
  constructor() { }

  ngOnInit() {      
      this.loading_time_element.nativeElement.textContent = this.second.toString();    
     
  }

  ngAfterViewInit() {
    
  }

  ngOnChanges(){
    if(this.is_start == false){
      this.loading_percent_string = "0, 100"
    }
    else{   // loading start
      this.loading_percent_string = "100, 100"
      
       this.path_id = "my-circle"

      var time_value=0;
      // start timer 
      const secondsCounter=interval(1000);
      const subscribe=secondsCounter.subscribe(n=>{  
        let i=0 
        if(n<this.second)  { 
          n=n+1 ; 
          i=this.second-n ;    
        } 
        this.loading_time_element.nativeElement.textContent = i.toString();
      })
    // end timer
      setTimeout(()=>{
        subscribe.unsubscribe();
        this.nextNavigation.emit();
      },(this.second+1)*1000);

    }
  }


 
}
