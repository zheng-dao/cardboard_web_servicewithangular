import { Component, OnInit, Input, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js'
@Component({
    selector: 'app-linechart',
    templateUrl: './linechart.component.html',
    styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {

    @ViewChild('lineChart') lineChart: ElementRef;

    LineChart:any[];

    @Input() xdata: any[];
    @Input() ydata: any[];
    @Input() height: number;
    @Input() color: string;
    @Input() id: string;

    backcolor0: string = "rgba(0,255,0, 0.7)";
    backcolor1: string = "rgba(0,255,0, 0.0)";
    constructor() { }

    ngOnInit() {

        if (this.color === "blue") {
            this.backcolor0 = 'rgba(0,0,255, 0.7)';
            this.backcolor1 = 'rgba(0,0,255, 0.0)';
        }
        var context = this.lineChart.nativeElement;
        var chart = (<HTMLCanvasElement>context).getContext("2d");
        var gradient = chart.createLinearGradient(0, 0, 0, this.height);
        gradient.addColorStop(0, this.backcolor0);
        gradient.addColorStop(1, this.backcolor1);

        this.LineChart = new Chart(chart, {
            type: 'line',
            data: {
                labels: this.xdata,
                datasets: [{
                    label: '',
                    data: this.ydata,
                    fill: true,
                    lineTension: 0.5,
                    borderColor: this.color,
                    borderWidth: 2,
                    backgroundColor: gradient
                }]
            },
            options: {
                title: {
                    text: "Line Chart",
                    display: false
                },
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            display: false //this will remove only the label
                        }
                    }],
                },
                pointDot: {
                    display: false
                }
            }
        });
        console.log(this.LineChart);
    }

    ngOnDestroy(){
       
        console.log(this.LineChart);
        console.log("des");
        if(this.LineChart&& this.LineChart.length>0)
          this.LineChart.forEach((chart, index)=>{
              chart=null;
          })
              
    
    }
}
