import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {MultiSelectComponent} from '@syncfusion/ej2-angular-dropdowns'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() footerShow:boolean;
  // is_show_flag_in_selectbox:boolean=false;
  countries: any[];
  country_list:string[];

  constructor() { }


  @ViewChild('checkbox')
  public mulObj: MultiSelectComponent;

  public mode: string;
  public filterPlaceholder: string;

   // map the groupBy field with category column
   public checkFields: Object = { text: 'name', value: 'code' };
   // set the placeholder to the MultiSelect input
   public checkWaterMark: string = 'U.A.E';
   // set the MultiSelect popup height
   public popHeight: string = '350px';

  ngOnInit() {
    this.countries=[
      {url:"../assets/images/flag/algeria.png", name:"Algeria",code:"a"},
      {url:"../assets/images/flag/bahrain.png", name:"Bahrain", code:"b"},
      {url:"../assets/images/flag/dubai.png", name:"Dubai",code:"c"},
      {url:"../assets/images/flag/egypt.png", name:"Egypt",code:"d"},
      {url:"../assets/images/flag/india.png", name:"India",code:"e"},
      {url:"../assets/images/flag/iraq.png", name:"Iraq",code:"f"},
      {url:"../assets/images/flag/jordan.png", name:"Jordan",code:"g"},
      {url:"../assets/images/flag/ksa.png", name:"Ksa" ,code:"h"},
      {url:"../assets/images/flag/ksa.png", name:"KSA",code:"i"},
      {url:"../assets/images/flag/kuweit.png", name:"Kuweit",code:"j"},
      {url:"../assets/images/flag/lebanon.png", name:"Lebanon",code:"k"},
      {url:"../assets/images/flag/lebanon.png", name:"Lebanon",code:"l"},
      {url:"../assets/images/flag/india.png", name:"India",code:"m"},
      {url:"../assets/images/flag/iraq.png", name:"Iraq",code:"n"},
      {url:"../assets/images/flag/jordan.png", name:"Jordan",code:"o"},
      {url:"../assets/images/flag/ksa.png", name:"Ksa" ,code:"p"},
      {url:"../assets/images/flag/ksa.png", name:"KSA",code:"q"},
      {url:"../assets/images/flag/kuweit.png", name:"Kuweit",code:"r"}
    ];

    this.country_list=["Algeria", "Iran","India","Jordan","Iraq","Kuweit"];

    this.mode = 'CheckBox';
    this.filterPlaceholder = 'Search countries';
  }

  // change(){
  //   this.configService.toggle();
  // }

}
