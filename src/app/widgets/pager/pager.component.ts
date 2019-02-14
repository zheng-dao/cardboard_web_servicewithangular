import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {
 @Output() setpager=new EventEmitter();
 @Input() currentIndexOfArray:number;

 items:number[];
  constructor() { 
    this.items=[1,2,3,4,5,6,7];
  }

  ngOnInit() {
  }

  setpage(direction:number){    
    this.setpager.emit(direction);
  }
}
