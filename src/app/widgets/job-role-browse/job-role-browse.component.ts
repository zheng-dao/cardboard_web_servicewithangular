import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {CommonService} from '../../httpService/common.service';
import {IconService} from '../../httpService/icon.service';
@Component({
  selector: 'app-job-role-browse',
  templateUrl: './job-role-browse.component.html',
  styleUrls: ['./job-role-browse.component.scss']
})
export class JobRoleBrowseComponent implements OnInit {
  is_show_wrapper: boolean = true;
  @ViewChild('showControl') showControl: ElementRef;

  allJobRoles:any[]=[];
  sliceJobRolesForView: any[]=[];
  sliceJobRolesForSelectbox:any[]=[];

  constructor( private httpService: CommonService,
               private icon:IconService) { }

  ngOnInit() {
    this.getAllJobRoles();
  }

  toggleShow() {
    this.is_show_wrapper = !this.is_show_wrapper;
    let nativeElement = this.showControl.nativeElement;
    if (this.is_show_wrapper == true)
      nativeElement.innerHTML = "-";
    else
      nativeElement.innerHTML = "+";
  }

  getAllJobRoles(){
   this.httpService.getJobRoles().subscribe(data=>{
     this.allJobRoles=data;
     this.sliceJobRolesForView=this.allJobRoles.slice(0, 8);
     this.sliceJobRolesForSelectbox=this.allJobRoles.slice(8, this.allJobRoles.length);
   });
  }

  onBrowseByJobRole(role_name:string){
    // insert code yuo need in the future;
  }
}
