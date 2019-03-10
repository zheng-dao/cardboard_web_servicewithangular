import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import {MyApplicationService} from '../../httpService/my-application.service';
import { FindjobService } from '../../httpService/findjob.service';
@Component({
  selector: 'app-my-application',
  templateUrl: './my-application.component.html',
  styleUrls: ['./my-application.component.scss']
})
export class MyApplicationComponent implements OnInit {

  public OpenedJobs: object[];
  public ClosedJobs:object[];
  public SavedJobs:object[];

  selected_tab_index:number=0;
  @ViewChildren('chart') charts:QueryList<ElementRef>;


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

  constructor(private http:MyApplicationService,private httpService: FindjobService) { }

  ngOnInit() {
   this.getJobsForApplication();
   this.getAllJobsByRole();
  }

  getJobsForApplication(){
      this.http.getJobs().subscribe(data=>{      
      this.OpenedJobs=data.opened;
      this.ClosedJobs=data.closed;
      this.SavedJobs=data.saved;
      });
  }

  // tab selection-control
  setSelected(index:number){
    this.selected_tab_index=index; 
  }


  // find jobs by role
  allJobsByRole: any[];
  sliceJobsByRole: any[];

  getAllJobsByRole() {
    this.httpService.getJobsByRole().subscribe(data => {
      this.allJobsByRole = data;
      this.sliceJobsByRole = this.allJobsByRole.slice(0, 6);
    });
  }

  setAllJobsByRole(){
    this.sliceJobsByRole = this.allJobsByRole.slice(0, this.allJobsByRole.length);
  }
}
