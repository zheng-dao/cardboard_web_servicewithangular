import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import {interval} from 'rxjs'
import  * as d3 from 'd3'

@Component({
  selector: 'app-record-loading',
  templateUrl: './record-loading.component.html',
  styleUrls: ['./record-loading.component.scss']
})
export class RecordLoadingComponent implements OnInit {

 @Input() second: number;
 @Input() is_start: Boolean;
 
  @ViewChild('loading_time_element') loading_time_element:ElementRef
 
  constructor() { }

  ngOnInit() {      
      this.loading_time_element.nativeElement.textContent = this.second.toString();         
  }

  ngAfterViewInit() {
    
  }

  ngOnChanges(){
    if(this.is_start == false){
    
    }
    else{   // loading start
      d3.select('svg')
      .select('path')
      .transition()
      .attr('stroke-dasharray','100,100')
      .duration(this.second*1000+1000)
      .ease(d3.easeLinear)
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
      },(this.second+1)*1000);

    }
  }


 
}
