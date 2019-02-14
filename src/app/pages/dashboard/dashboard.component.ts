import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../httpService/dashboard.service'
import {JobChartModel} from '../../models/dashboard'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  jobs: any[];
  recommendJobs: any[];

  // company pagination variables
  allCompanies: any[];
  CompanyPager: any = {};
  pagedCompanyItem: any[];

  // member pagination variables
  allMembers: any[];
  memberPager: any = {};
  pagedMemberItem: any[];

  // job branches pagination variables
  allJobBranches: any[];
  jobBranchPager: any = {};
  pagedJobBranchItem: any[];

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
    this.getJobs();
    this.getRecommendJobs();
    this.getAllMembers();
    this.getAllCompanies();
    this.getAllJobBranches();

    //chart init  
    this.initJobChart('green', 200, 'job');
    this.initSearchChart('blue',200, 'search');
  }

  getJobs() {
    this.httpService.getJobs().subscribe((data) => {
      console.log(data.toString());
      this.jobs = data;
    });
  }

  getRecommendJobs() {
    this.httpService.getRecommendJobs().subscribe((data) => {
      this.recommendJobs = data;
    });
  }


  /////////member ////////////
  getAllMembers() {
    this.httpService.getMembers().subscribe(data => {
      this.allMembers = data;
      this.setMemberPage(1);

    });
  }
  setMemberPage(currentPage: number) {
    this.memberPager = this.httpService.getPager(this.allMembers.length, currentPage, 2);
    this.pagedMemberItem = this.allMembers.slice(this.memberPager.startIndex, this.memberPager.endIndex + 1);
  }

  //Member event listener 
  setMemberPager(direction: number) {

    if (direction === 0)
      this.setMemberPage(this.memberPager.currentPage - 1);
    else
      this.setMemberPage(this.memberPager.currentPage + 1);
  }

  ////  company operation/////
  getAllCompanies() {
    this.httpService.getCompanies().subscribe(data => {
      this.allCompanies = data;
      this.setCompanyPage(1);

    });
  }

  setCompanyPage(currentPage: number) {
    this.CompanyPager = this.httpService.getPager(this.allCompanies.length, currentPage, 4);
    this.pagedCompanyItem = this.allCompanies.slice(this.CompanyPager.startIndex, this.CompanyPager.endIndex + 1);

  }

  //company event listener 
  setCompanyPager(direction: number) {

    if (direction === 0)
      this.setCompanyPage(this.CompanyPager.currentPage - 1);
    else
      this.setCompanyPage(this.CompanyPager.currentPage + 1);
  }

  /////////////////////////////

  ////  company operation/////
  getAllJobBranches() {
    this.httpService.getJobBranches().subscribe(data => {
      this.allJobBranches = data;
      this.setJobBranchPage(1);
    });
  }

  setJobBranchPage(currentPage: number) {
    this.jobBranchPager = this.httpService.getPager(this.allJobBranches.length, currentPage, 4);
    this.pagedJobBranchItem = this.allJobBranches.slice(this.jobBranchPager.startIndex, this.jobBranchPager.endIndex + 1);

  }

  //job branch event listener 
  setJobBranchPager(direction: number) {

    if (direction === 0)
      this.setJobBranchPage(this.jobBranchPager.currentPage - 1);
    else
      this.setJobBranchPage(this.jobBranchPager.currentPage + 1);
  }

  /////////////////////////////

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
