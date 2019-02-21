import { Component, OnInit,ViewChild,ElementRef  } from '@angular/core';
import {CommonService} from '../../httpService/common.service';
@Component({
  selector: 'app-job-industry-browse',
  templateUrl: './job-industry-browse.component.html',
  styleUrls: ['./job-industry-browse.component.scss']
})
export class JobIndustryBrowseComponent implements OnInit {
  is_show_wrapper: boolean = true;
  @ViewChild('showControl') showControl: ElementRef;


  allJobIndustries:any[]=[];
  sliceJobIndustriesForView: any[]=[];
  sliceJobIndustriesForSelectbox:any[]=[];

  constructor( private httpService: CommonService) { }

  ngOnInit() {
    this.getAllJobIndustries();
  }

  toggleShow() {
    this.is_show_wrapper = !this.is_show_wrapper;
    let nativeElement = this.showControl.nativeElement;
    if (this.is_show_wrapper == true)
      nativeElement.innerHTML = "-";
    else
      nativeElement.innerHTML = "+";
  }

  getAllJobIndustries(){
    this.httpService.getJonIndustries().subscribe(data=>{
      this.allJobIndustries=data;
      this.sliceJobIndustriesForView=this.allJobIndustries.slice(0, 8);
      this.sliceJobIndustriesForSelectbox=this.allJobIndustries.slice(8, this.allJobIndustries.length);
    });
   }

   onBrowseByJobIndustry(name:string){
     // insert code you need in the future
   }

}
