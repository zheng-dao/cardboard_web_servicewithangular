import { Component, OnInit } from '@angular/core';
import { FindjobService } from '../../httpService/findjob.service';
@Component({
  selector: 'app-find-jobs-by-company',
  templateUrl: './find-jobs-by-company.component.html',
  styleUrls: ['./find-jobs-by-company.component.scss']
})
export class FindJobsByCompanyComponent implements OnInit {

  country_list:string[]=[];
  industry_list:string[]=[];
  constructor(private httpService: FindjobService) { }

  ngOnInit() {
    this.getAllJobsByCompanies();
    this.country_list=["U.A.E","country_a","country_b","country_c"];
    this.industry_list=["Industry_1","Industry_2","Industry_3","Industry_4","Industry_5"];
  }

  //find jobs by company
  allJobsByCompanies: any[];
  sliceJobsByCompanies: any[];
  getAllJobsByCompanies() {
    this.httpService.getJobsByCompanies().subscribe(data => {
      this.allJobsByCompanies = data;
      this.sliceJobsByCompanies = this.allJobsByCompanies.slice(0, 30);
    });
  }
  setAllJobsByCompanies(){
    // this.sliceJobsByCompanies = this.allJobsByCompanies.slice(0, this.allJobsByCompanies.length);
  }

}
