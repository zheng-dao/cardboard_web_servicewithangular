import { Component, OnInit } from '@angular/core';
import { FindjobService } from '../../httpService/findjob.service';
@Component({
  selector: 'app-find-jobs-by-location',
  templateUrl: './find-jobs-by-location.component.html',
  styleUrls: ['./find-jobs-by-location.component.scss']
})
export class FindJobsByLocationComponent implements OnInit {

  constructor(private httpService: FindjobService) { }

  ngOnInit() {
    this.getAllJobsByCountries();
    this.getAllJobsByLocations();
    this.getAllJobsForInternational();
  }


   //find jobs by country

   allJobsByCountries: any[];
   sliceJobsByCountries: any[];
 
   getAllJobsByCountries() {
     this.httpService.getJobsByCountries().subscribe(data => {
       this.allJobsByCountries = data;
       this.sliceJobsByCountries = this.allJobsByCountries.slice(0, 8);
     });
   }

   setAllJobsByCountries(){
     this.sliceJobsByCountries=this.allJobsByCountries.slice(0, this.allJobsByCountries.length);
   }

   //find jobs by city
   allJobsByLocations:any[];
   getAllJobsByLocations(){
     this.httpService.getJobByLocation().subscribe(data=>{
         this.allJobsByLocations=data;
     });
   }

    //find jobs by city
    all_counts:number;

    allJobsForInternational:any[];
    getAllJobsForInternational(){
      this.httpService.getJobForInternational().subscribe(data=>{
          this.allJobsForInternational=data;
          this.all_counts=1234;
      });
    }

}
