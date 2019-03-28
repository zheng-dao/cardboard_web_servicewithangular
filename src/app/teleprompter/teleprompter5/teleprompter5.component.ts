import { Component, OnInit } from '@angular/core';
import { GlobalsService} from '../globals.service';
@Component({
  selector: 'app-teleprompter5',
  templateUrl: './teleprompter5.component.html',
  styleUrls: ['./teleprompter5.component.scss']
})
export class Teleprompter5Component implements OnInit {

  state_list:any[];
  constructor( private _global:GlobalsService) { }

  ngOnInit() {
    this.state_list=this._global.state_list;
  }
}
