import { Component, OnInit } from '@angular/core';
import { FindjobService } from '../../httpService/findjob.service';

import {JobTitlesModel} from '../../models/findJobBySector';

interface JobTitleField{
  eachData:any;
  slicetitles:string[];
}

@Component({
  selector: 'app-find-jobs-by-sector',
  templateUrl: './find-jobs-by-sector.component.html',
  styleUrls: ['./find-jobs-by-sector.component.scss']
})
export class FindJobsBySectorComponent implements OnInit {

  country_list:string[]=[];
  city_list:string[]=[];
  constructor(private httpService: FindjobService) {
  }

  ngOnInit() {
    this.getAllJobsBySector();
    this.getAllJobField();
    this.country_list=["U.A.E","country_a","country_b","country_c"];
    this.city_list=["Dubai","city_a","city_b","city_c"];
  }

  // get job by sector
  allJobs: any[] = [];
  sliceJobs: any[] = [];
  getAllJobsBySector() {
    this.httpService.getJobsBySector().subscribe(data => {
      this.allJobs = data;
      this.sliceJobs = this.allJobs.slice(0, 8);
    });
  }
  onViewAllJob(){
    // this.sliceJobs = this.allJobs.slice(0, this.allJobs.length);
    // console.log(this.sliceJobs);
  }


  // get job title
  allJobField:JobTitleField[]=[];
  
  getAllJobField(){
    this.httpService.getJobTitles().subscribe(data=>{  
        data.forEach(item =>{
          let EachJobField:JobTitleField={ eachData:{},slicetitles:[] };
          EachJobField.eachData=<JobTitlesModel>item;
          EachJobField.slicetitles=EachJobField.eachData.titles.slice(0, 20);
          console.log(EachJobField);

          this.allJobField.push(EachJobField);
        });
         
    });
  }

}
