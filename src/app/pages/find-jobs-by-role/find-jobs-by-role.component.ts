import { Component, OnInit } from '@angular/core';
import { FindjobService } from '../../httpService/findjob.service'
@Component({
  selector: 'app-jobsbyrole',
  templateUrl: './find-jobs-by-role.component.html',
  styleUrls: ['./find-jobs-by-role.component.scss']
})
export class JobsbyroleComponent implements OnInit {



  constructor(private httpService: FindjobService) { }

  ngOnInit() {
    this.getAllJobsByRole();
    this.getAllJobsByCompanies();
    this.getAllJobsByCountries();
  }


  // find jobs by role
  allJobsByRole: any[];
  sliceJobsByRole: any[];

  getAllJobsByRole() {
    this.httpService.getJobsByRole().subscribe(data => {
      this.allJobsByRole = data;
      this.sliceJobsByRole = this.allJobsByRole.slice(0, 12);
    });
  }

  setAllJobsByRole(){
    this.sliceJobsByRole = this.allJobsByRole.slice(0, this.allJobsByRole.length);
  }

  //find jobs by company

  allJobsByCompanies: any[];
  sliceJobsByCompanies: any[];

  getAllJobsByCompanies() {
    this.httpService.getJobsByCompanies().subscribe(data => {
      this.allJobsByCompanies = data;
      this.sliceJobsByCompanies = this.allJobsByCompanies.slice(0, 5);
    });
  }

  setAllJobsByCompanies(){
    this.sliceJobsByCompanies = this.allJobsByCompanies.slice(0, this.allJobsByCompanies.length);
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
}
