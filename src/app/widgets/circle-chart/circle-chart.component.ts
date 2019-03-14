import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-circle-chart',
  templateUrl: './circle-chart.component.html',
  styleUrls: ['./circle-chart.component.scss']
})
export class CircleChartComponent implements OnInit {

 @Input() percent:number;
 @Input() color:string;

  constructor() { }

  ngOnInit() {
  }

}
