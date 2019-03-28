import { Component, OnInit } from '@angular/core';
import { GlobalsService} from '../globals.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-teleprompter4',
  templateUrl: './teleprompter4.component.html',
  styleUrls: ['./teleprompter4.component.scss']
})
export class Teleprompter4Component implements OnInit {

  state_list:any[];
  loading_time=12;
  constructor(private _global:GlobalsService,
              private router:Router) { }

  ngOnInit() {
    this.state_list=this._global.state_list;
  }
  onNextNavigation(){
    this.router.navigateByUrl('/teleprompter/teleprompter5');
  }

}
