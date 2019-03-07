import { Component, OnInit } from '@angular/core';
import { JobSearchResultService } from '../../httpService/job-search-result.service';
import { FindjobService } from '../../httpService/findjob.service'
@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {

  allJobs: any[] = [];
  allCounts:number ;
  sliceJobsForView: any[] = [];

  constructor(private http: JobSearchResultService,
                private httpService: FindjobService) { }

  ngOnInit() {
    this.getAllJobs();
    this.getAllJobsByCompanies();
  }

  /*
    donut chart 
  */
  public language_data = [{
    id: 0,
    label: 'english',
    value: 70,
    color: 'red',
  }, {
    id: 1,
    label: 'spanish',
    value: 11,
    color: 'blue',
  }, {
    id: 2,
    label: 'chinese',
    value: 5,
    color: 'green',
  }, {
    id: 3,
    label: 'franch',
    value: 5,
    color: 'yellow',
  }, {
    id: 4,
    label: 'german',
    value: 9,
    color: 'pink',
  }];

  public cause_data = [{
    id: 0,
    label: 'education',
    value: 47,
    color: 'red',
  }, {
    id: 1,
    label: 'science $ it',
    value: 25,
    color: 'blue',
  }, {
    id: 2,
    label: 'human rights',
    value: 5,
    color: 'green',
  }, {
    id: 3,
    label: 'children',
    value: 3,
    color: 'yellow',
  }, {
    id: 4,
    label: 'environment',
    value: 20,
    color: 'pink',
  }];

  //get all Jobs by searching 

  getAllJobs() {
    this.http.getJobs().subscribe(data => {
       this.allJobs=data; 
       this.sliceJobsForView=this.allJobs.slice(0, 6);    
       this.allCounts=6;      
    });
  }

  //find jobs by company

  allJobsByCompanies: any[];
  sliceJobsByCompanies: any[];

  getAllJobsByCompanies() {
    this.httpService.getJobsByCompanies().subscribe(data => {
      this.allJobsByCompanies = data;
      this.sliceJobsByCompanies = this.allJobsByCompanies.slice(0, 10);
    });
  }

  setAllJobsByCompanies(){
    this.sliceJobsByCompanies = this.allJobsByCompanies.slice(0, this.allJobsByCompanies.length);
  }
}


