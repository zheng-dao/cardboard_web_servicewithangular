import { Component, OnInit } from '@angular/core';
import { GlobalsService} from '../globals.service';
@Component({
  selector: 'app-teleprompter2',
  templateUrl: './teleprompter2.component.html',
  styleUrls: ['./teleprompter2.component.scss']
})
export class Teleprompter2Component implements OnInit {
  
  state_list:any[];
  constructor( private _global:GlobalsService) { }

  ngOnInit() {
    this.state_list=this._global.state_list;
  }

}
