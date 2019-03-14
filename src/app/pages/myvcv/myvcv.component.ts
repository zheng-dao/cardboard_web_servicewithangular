import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myvcv',
  templateUrl: './myvcv.component.html',
  styleUrls: ['./myvcv.component.scss']
})
export class MyvcvComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }

  Resume:object={
    personal_info:{
      name:"Toufic Harb",     
      age:35,
      language:"Arabic , English",
      mail:"Touff@gmail.com",
      phone:"0966-1233-321",
      location:"U.A.E",
      summary:"I am responsible for the service development and design of Wantedly."+
              "I graduated from University of Kyoto and after working in the financial industry,"+
              "I worked at Facebook and then founded Magajin, my first statup. "+      
              "I founded Wantedly in September, 2011.",              

    },
    vcv:{
      update_date:"2017-01-08"
    },
    skill:{
      role:"Creative Director",
      positions:["user_interface","user expericence", "gui"],
      skills:["photoshop", "illustrator","sketchapp"],
      job_location:"U.A.E",
      schedule_time:"Full Time",
      employment_status:"Employed"
    },
     work_experience:[
       {
         start_date:"May 2012",
         end_date:"january 2016",
         title:"VP Product Design ",
         description:"I manage the design team responsible for how you share on Facebook and how you stay informed about the friends, public figures, and topics you care the most about.",
         url:"www.facebook.com",
         com_name:"facebook",
         portfolio:[
           "/assets/images/myvcv/port1.png","/assets/images/myvcv/port2.png",
           "/assets/images/myvcv/port3.png","/assets/images/myvcv/port4.png"
         ]
       },
       {
        start_date:"May 2012",
        end_date:"january 2016",
        title:"VP Product Design ",
        description:"I manage the design team responsible for how you share on Facebook and how you stay informed about the friends, public figures, and topics you care the most about.",
        url:"www.facebook.com",
        com_name:"Airbnb",
        portfolio:[
          "/assets/images/myvcv/port1.png","/assets/images/myvcv/port2.png",
          "/assets/images/myvcv/port3.png","/assets/images/myvcv/port4.png"
        ]
      }

     ],
     educations:[
       {
         start_date:"2005",
         end_date:"2008",
         university:"The Ohio State University",
         degree:"BA, Psychology"
       }
     ],
     resume:{
       doc_name:"Resume.pdf",
       links:[
         {
           name:"linkedin",
           url:"https://linkedin.com/in/toufic"
         },
         {
          name:"website",
          url:"https://www.behance.net/toufic"
         }
       ]
     }

  }
  
  // display set
  onDisplaySet(event){  
    if(event.srcElement.className=="fa  fa-angle-up ctrl"){
      event.srcElement.className="fa  fa-angle-down ctrl";
      event.srcElement.parentElement.style.height="45px";
    }       
    else{
      event.srcElement.className="fa  fa-angle-up ctrl";
      event.srcElement.parentElement.style.height="";
    }
  }
}
