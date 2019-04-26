import { Component, OnInit } from '@angular/core';
import { GlobalsService} from '../globals.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-teleprompter3',
  templateUrl: './teleprompter3.component.html',
  styleUrls: ['./teleprompter3.component.scss']
})
export class Teleprompter3Component implements OnInit {

  state_list:any[];
  loading_time=5;
  constructor( private _global:GlobalsService, 
               private router:Router) { }

  ngOnInit() {
    this.state_list=this._global.state_list;
  }
  
  ngAfterViewInit(){
    setTimeout(()=>{
      this.router.navigateByUrl('/teleprompter/teleprompter4');
    },(this.loading_time+1)*1000);
  }

}
