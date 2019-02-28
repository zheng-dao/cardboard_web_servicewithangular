import { Component, OnInit } from '@angular/core';
import { JobSearchResultService } from '../../httpService/job-search-result.service';
import {IconService} from '../../httpService/icon.service';
@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss']
})
export class SearchresultComponent implements OnInit {

  is_show: boolean = true;// true:search tab, false:browse tab
 
  // is_show_load_more_button:boolean=false;

  allJobs: any[] = [];
  sliceJobsForView: any[] = [];
  sliceJobsForBrowse: any[] = [];
  allCounts:number=0;

  constructor(private http: JobSearchResultService,
               private icon:IconService) {}

  ngOnInit() {
    this.is_show = true;
    this.getAllJobs();
  }

  setShow(index: boolean) {
    this.is_show = index;
  }

  //get all Jobs by searching 

  getAllJobs() {
    this.http.getJobs().subscribe(data => {
       this.allJobs=data;
       this.sliceJobsForView=this.allJobs.slice(0, 18);
       this.sliceJobsForBrowse=this.allJobs.slice(0,12);
       this.allCounts=2134;      
    });
  }


}
