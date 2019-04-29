import { Component, OnInit, Input } from '@angular/core';
declare let d3: any;
declare let $: any;
@Component({
  selector: 'app-custom-donut-chart',
  templateUrl: './custom-donut-chart.component.html',
  styleUrls: ['./custom-donut-chart.component.scss']
})
export class CustomDonutChartComponent implements OnInit {

  constructor() {

  }

  @Input() public width: number;
  @Input() public height: number;
  @Input() public iconWidth: number;
  @Input() public iconHeight: number;
  @Input() public outerRadius: number;
  @Input() public innerRadius: number;
  @Input() public data: any;
  @Input() public centerImage: any;
  @Input() public spreadSlice: boolean;
  @Input() public chartID: string;
  @Input() public middleText: string;
  @Input() public middleTextColor: string;
  @Input() public middleTextFontSize: string;

  public ngOnInit() {


  }

  public ngOnChanges() {

  }

  public ngAfterViewInit() {
    this.renderChart();
  }


  public renderChart() {
    let chartComponent = this;
    let imageWidth = this.iconWidth ? this.iconWidth : 40;
    let imageHeight = this.iconHeight ? this.iconHeight : 40;
    let width = this.width ? this.width : 700;
    let height = this.height ? this.height : 400;
    let radius = 250;
    let piedata = this.data;
    this.outerRadius = this.outerRadius ? this.outerRadius : 150;
    this.innerRadius = this.innerRadius ? this.innerRadius : 70;
    this.spreadSlice = this.spreadSlice ? this.spreadSlice : false;
    let chartID = this.chartID ? this.chartID : 'donutChart';
    let middleText = this.middleText ? this.middleText : '';
    let middleTextColor = this.middleTextColor ? this.middleTextColor : 'black';
    let middleTextFontSize = this.middleTextFontSize ? this.middleTextFontSize : '1em';
    this.outerRadius > 150 ? this.outerRadius = 150 : this.outerRadius;
    let pie = d3.layout.pie()
      .startAngle(Math.PI / 2)
      .endAngle(Math.PI * 2 + Math.PI / 2)
      .value((d) => {
        return d.value;
      }).sort(null);

    let arc = d3.svg.arc()
      .outerRadius(this.outerRadius)
      .innerRadius(this.innerRadius);

    let arcNew = d3.svg.arc()
      .outerRadius(this.outerRadius + 10)
      .innerRadius(this.innerRadius);

    let svg = d3.select('#' + chartID + ' > svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(' + (350 - radius ) + ',' + (350 - radius ) + ')');

    svg.append("text")
      .attr("text-anchor", "middle")
      .attr('font-size', middleTextFontSize)
      .style('fill', middleTextColor)
      .text(middleText);

    let g = svg.selectAll('.arc')
      .data(pie(piedata))
      .enter().append('g')
      .attr('class', 'arc');


    g.append('path')
      .attr('d', arc)
      .style('stroke', 'white').style('fill', function (d, i) {
        return d.data.color;
      })
      .attr('id', function (d) {
        return 'iconId' + d.data.id;
      })
      .attr('cursor', this.spreadSlice ? 'pointer' : 'default');

    g.append('g')
      .attr('transform', function (d) {
        return 'translate(' + arc.centroid(d) + ')';
      })
      .append('svg:image')
      .attr('xlink:href', function (d) {
        return d.data.iconImage;
      })
      .attr('id', function (d) {
        return d.data.id;
      })
      .attr('width', imageWidth)
      .attr('height', imageHeight)
      .attr('x', -1 * imageWidth / 2)
      .attr('y', -1 * imageHeight / 2)
      .attr('cursor', this.spreadSlice ? 'pointer' : 'default')  ;
    if (this.centerImage) {
      svg.append('svg:image')
        .attr('id', 'center_image')
        .attr('x', -60)
        .attr('y', -60)
        .attr('width', 120)
        .attr('height', 120)
        .attr('cursor', 'pointer')
        .attr('xlink:href', this.centerImage)
        .on('click', function click(d) {
          // chartComponent.centerImageEvent.emit()
        });
    }


  }
}
