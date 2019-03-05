import { Component, OnInit, ViewChild } from '@angular/core';
import {FindjobService} from '../../httpService/findjob.service';
import {IconService} from '../../httpService/icon.service';
import {MapsAPILoader, AgmMap} from '@agm/core';
import {GoogleMapsAPIWrapper} from '@agm/core/services';
@Component({
  selector: 'app-job-offer',
  templateUrl: './job-offer.component.html',
  styleUrls: ['./job-offer.component.scss']
})
export class JobOfferComponent implements OnInit {

  // skill group
  skills: string[] = [];
  // developer career list(from database)
  careers: any[] = [];

  //company name
  com_name: string;

  //get similar job
  similarJobs:any[];
  sliceSimilarJobs:any[];

  //google map
  @ViewChild(AgmMap) map:AgmMap;

  constructor(private icon:IconService,
    private httpService:FindjobService,) { }

  ngOnInit() {

    this.skills = ["USER EXPERIENCE", "USER INTERFACE", "PHOTOSHOP", "WIREFRAMES", "PROJECT MANGEMENT", "BASIC ANIMATION"];
    this.careers = [
      {   
        career_name: "senior UI/UX Designer",
        work_time: "Full Time",
        com_info: "Google Inc - Shekh Al Zayed Road, Dubai"
      },
      {   
        career_name: "Web Developer",
        work_time: "Full Time",
        com_info: "Google Inc - Shekh Al Zayed Road, Dubai"
      },{   
        career_name: "Junior Desiger",
        work_time: "Full Time",
        com_info: "Google Inc - Shekh Al Zayed Road, Dubai"
      }
    ];
   this.getSimilarJobs();
    
  }
  getSimilarJobs(){
     this.httpService.getJobSimilarForCompany().subscribe(data=>{
      this.similarJobs=data;
      this.sliceSimilarJobs=this.similarJobs.slice(0, 5);
     });
  }


}
