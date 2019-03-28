import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {

  @Input() states: any[];
   user:string = "/assets/images/photo/toufic.png";
  constructor() { }

  ngOnInit() {
    
  }

}
