import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-semi-circle-chart',
  templateUrl: './semi-circle-chart.component.html',
  styleUrls: ['./semi-circle-chart.component.scss']
})
export class SemiCircleChartComponent implements OnInit {
  @Input() percentage:number;
  @Input() grad:string;
  gradurl:string;
  constructor() { }
  ngOnInit() {
   this.gradurl="url(#"+this.grad+")";
  }
}
