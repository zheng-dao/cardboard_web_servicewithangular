import { Component, OnInit } from '@angular/core';
import { GlobalsService} from '../../teleprompter/globals.service';
@Component({
  selector: 'app-vcv-video-edit',
  templateUrl: './vcv-video-edit.component.html',
  styleUrls: ['./vcv-video-edit.component.scss']
})
export class VcvVideoEditComponent implements OnInit {

  state_list:any[];
  constructor(private _global:GlobalsService) { }

  ngOnInit() {
    this.state_list=this._global.state_list;
  }

}
