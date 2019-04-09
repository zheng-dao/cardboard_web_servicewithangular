import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { JobSearchResultService } from '../../httpService/job-search-result.service';
import {IconService} from '../../httpService/icon.service';
@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss']
})
export class SearchresultComponent implements OnInit {
  
  @ViewChild('searchBar') searchBar : ElementRef;
  @ViewChild('searchBarControl') searchBarControl : ElementRef;

  // tab show or hidden
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
  
  // toggle search bar
  toggleShowSearchBar(){
    if(this.searchBar.nativeElement.className === "search-bar"){  // hidden
          this.searchBarControl.nativeElement.className = "fa fa-chevron-left";
          this.searchBar.nativeElement.className = "search-bar responsive";
    }
    else{
      this.searchBarControl.nativeElement.className = "fa fa-chevron-right";
          this.searchBar.nativeElement.className = "search-bar";
    }
  }

}
