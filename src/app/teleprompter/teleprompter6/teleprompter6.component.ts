import { Component, OnInit } from '@angular/core';
import { GlobalsService} from '../globals.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-teleprompter6',
  templateUrl: './teleprompter6.component.html',
  styleUrls: ['./teleprompter6.component.scss']
})
export class Teleprompter6Component implements OnInit {

  state_list:any[];
  loading_time=5;
  constructor( private _global:GlobalsService, 
               private router:Router) { }

  ngOnInit() {
    this.state_list=this._global.state_list;
  }

  ngAfterViewInit(){
    setTimeout(()=>{
      this.router.navigateByUrl('/teleprompter/teleprompter7');
    },(this.loading_time+1)*1000);
  }

}
