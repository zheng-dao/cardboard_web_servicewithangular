import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
// Interface for connection between child and parent
export interface myinterface {
  remove(index: number);
}

@Component({
  selector: 'app-itembutton',
  templateUrl: './itembutton.component.html',
  styleUrls: ['./itembutton.component.scss']
})
export class ItembuttonComponent implements OnInit {

@Input() name:string;

 public index:number;
 public selfRef: ItembuttonComponent;
 
  //interface for Parent-Child interaction
  public compInteraction: myinterface;
  
  constructor() { }

  ngOnInit() {
  }

  removeMe(index:number){
    this.compInteraction.remove(index);
  }
}
