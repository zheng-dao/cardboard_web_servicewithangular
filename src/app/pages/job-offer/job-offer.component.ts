import { Component, OnInit } from '@angular/core';

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

  

  constructor() { }

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

    
  }

}
