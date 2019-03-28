import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {interval} from 'rxjs'

@Component({
  selector: 'app-record-loading',
  templateUrl: './record-loading.component.html',
  styleUrls: ['./record-loading.component.scss']
})
export class RecordLoadingComponent implements OnInit {

 @Input() second: number;
 @Output() nextNavigation = new EventEmitter();
 
  constructor() { }

  ngOnInit() { 
    
      var current_time_txt = document.getElementById("loading_time"); 
      current_time_txt.textContent = this.second.toString();   
      var time_value=0;
      // start timer 
      const secondsCounter=interval(1000);
      const subscribe=secondsCounter.subscribe(n=>{  
        let i=0 
        if(n<this.second)  { 
          n=n+1 ; 
          i=this.second-n ;    
        } 
        current_time_txt.textContent = i.toString();
      })
    // end timer
      setTimeout(()=>{
        subscribe.unsubscribe();
        this.nextNavigation.emit();
      },(this.second+1)*1000);
     
  }

  ngAfterViewInit() {
  //   var current_time_txt = document.getElementById("loading_time");    
  //   var time_value=0;
  //   // start timer 
  //   const secondsCounter=interval(1000);
  //   const subscribe=secondsCounter.subscribe(n=>{  
  //     let i=0 
  //     if(n<this.second)  {        
  //       i=this.second-n     
  //     } 
  //     current_time_txt.textContent = i.toString();
  //   })
  // // end timer
  //   setTimeout(()=>{
  //     subscribe.unsubscribe();
  //     this.nextNavigation.emit();
  //   },(this.second+1)*1000);


  }
 
}
