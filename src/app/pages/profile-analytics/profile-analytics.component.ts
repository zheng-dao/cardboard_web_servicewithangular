import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../httpService/dashboard.service';
@Component({
  selector: 'app-profile-analytics',
  templateUrl: './profile-analytics.component.html',
  styleUrls: ['./profile-analytics.component.scss']
})
export class ProfileAnalyticsComponent implements OnInit {



  // job chart control
  allJobChartData: any[];
  jobChartHeight: number;
  jobChartColor: String;
  xJobChartData: String[]=[];
  yJobChartData: number[]=[];
   totalViews:number;

  // search chart control
  allSearchChartData: any[];
  searchChartHeight: number;
  searchChartColor: String;
  xSearchChartData: String[]=[];
  ySearchChartData: number[]=[];
  totalSearches:number;

  constructor(private httpService: DashboardService) { }

  ngOnInit() {
        //chart init  
        this.initJobChart('green', 300, 'job');
        this.initSearchChart('blue',300, 'search');
  }

   ///////jobChart initialization////////
   initJobChart(color: string, height: number, idName:string) {
    this.httpService.getJobChartData().subscribe(data => {
      this.allJobChartData = data;
      for (let item of this.allJobChartData) {
        //console.log(item.x);
          this.xJobChartData.push(item.x);         
         this.yJobChartData.push(item.y);
      }     
      this.jobChartColor = color;
      this.jobChartHeight = height;
      this.totalViews=23225;
    });
  }
  //////////////////////////////////


  ///////searchChart initialization////////
  initSearchChart(color: string, height: number, idName:string) {
    this.httpService.getSearchChartData().subscribe(data => {
      this.allSearchChartData = data;
      for (let item of this.allSearchChartData) {
        //console.log(item.x);
          this.xSearchChartData.push(item.x);         
         this.ySearchChartData.push(item.y);
      }     
      this.searchChartColor = color;
      this.searchChartHeight = height;
      this.totalSearches=25336
    });
  }
  //////////////////////////////////

}
