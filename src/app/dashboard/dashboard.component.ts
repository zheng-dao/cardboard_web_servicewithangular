import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
   jobs:any[];
   recommendJobs:any[];
   members:any[];
  constructor() { }

  ngOnInit() {
    this.jobs=[
      {url:"../../assets/images/com_mark/ibm.png", career:"product ux Specialist", inc_name:"IBM Inc",nat_name:"Saudi Arabia"},
      {url:"../../assets/images/com_mark/ibm.png", career:"product ux Specialist", inc_name:"IBM Inc",nat_name:"Saudi Arabia"},
      {url:"../../assets/images/com_mark/ibm.png", career:"product ux Specialist", inc_name:"IBM Inc",nat_name:"Saudi Arabia"},
      {url:"../../assets/images/com_mark/ibm.png", career:"product ux Specialist", inc_name:"IBM Inc",nat_name:"Saudi Arabia"},
      {url:"../../assets/images/com_mark/ibm.png", career:"product ux Specialist", inc_name:"IBM Inc",nat_name:"Saudi Arabia"},
      {url:"../../assets/images/com_mark/ibm.png", career:"product ux Specialist", inc_name:"IBM Inc",nat_name:"Saudi Arabia"},
      {url:"../../assets/images/com_mark/ibm.png", career:"product ux Specialist", inc_name:"IBM Inc",nat_name:"Saudi Arabia"},
      {url:"../../assets/images/com_mark/ibm.png", career:"product ux Specialist", inc_name:"IBM Inc",nat_name:"Saudi Arabia"},
      {url:"../../assets/images/com_mark/ibm.png", career:"product ux Specialist", inc_name:"IBM Inc",nat_name:"Saudi Arabia"},
      {url:"../../assets/images/com_mark/ibm.png", career:"product ux Specialist", inc_name:"IBM Inc",nat_name:"Saudi Arabia"},
      {url:"../../assets/images/com_mark/ibm.png", career:"product ux Specialist", inc_name:"IBM Inc",nat_name:"Saudi Arabia"},
      {url:"../../assets/images/com_mark/ibm.png", career:"product ux Specialist", inc_name:"IBM Inc",nat_name:"Saudi Arabia"},
     ];

     this.recommendJobs=[
      {url:"../../assets/images/com_mark/samsong.png", career:"product ux Specialist", inc_name:"IBM Inc",nat_name:"Saudi Arabia"},
      {url:"../../assets/images/com_mark/samsong.png", career:"product ux Specialist", inc_name:"IBM Inc",nat_name:"Saudi Arabia"},
      {url:"../../assets/images/com_mark/samsong.png", career:"product ux Specialist", inc_name:"IBM Inc",nat_name:"Saudi Arabia"},
      {url:"../../assets/images/com_mark/samsong.png", career:"product ux Specialist", inc_name:"IBM Inc",nat_name:"Saudi Arabia"},
      {url:"../../assets/images/com_mark/samsong.png", career:"product ux Specialist", inc_name:"IBM Inc",nat_name:"Saudi Arabia"},
      {url:"../../assets/images/com_mark/samsong.png", career:"product ux Specialist", inc_name:"IBM Inc",nat_name:"Saudi Arabia"},
      ];

      this.members=[
        {
          photoUrl:"../../assets/images/photo/person1.png",
          name:"Toufic Harb",
          career:"Creative Direator",
          experience:" 5 years",
          studies:"Bachelor's Degree",
          age:"35 years",
          country: "U.A.E",
          languages:"Arabic, English"
        },
        {
          photoUrl:"../../assets/images/photo/person2.png",
          name:"Nicolas Fayez",
          career:"Front end Html5 UI developer",
          experience:" 5 years",
          studies:"Bachelor's Degree",
          age:"35 years",
          country: "U.A.E",
          languages:"Arabic, English"
        }
      ];
  }

}
