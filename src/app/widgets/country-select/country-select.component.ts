import { Component, OnInit, Input, ViewChild, ViewChildren, QueryList } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CountryModel} from '../../models/country';

@Component({
  selector: 'app-country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.scss']
})
export class CountrySelectComponent implements OnInit {

   countries:CountryModel[]=[];
   url="assets/JsonData/country.json";

    // output data 
   selected_country_flag:string="";
   selected_country_name:string="";

   //control 
    @Input() is_flag_show:boolean;    
    is_country_list_show:boolean;
    is_mat_icon_less_show:boolean=false;

    @ViewChildren('checkbox') checkboxRef : QueryList<Input>;

  constructor( private http: HttpClient) { }

  ngOnInit() {
    
    this.http.get<CountryModel[]>(this.url).subscribe(data=>{
      this.countries=data;

      if(this.countries.length>0){
        this.selected_country_flag=this.countries[0].flag;
        this.selected_country_name=this.countries[0].name;
      }

      this.is_country_list_show=false;
    });
  }

  setCountry(index:number){
  
    // for(var i=0;i<this.checkboxRef['_results'].length;i++){
    //   var itemRef= this.checkboxRef['_results'][i];
    //   if(i===index)
    //     itemRef.nativeElement.checked=true;
    //   else
    //      itemRef.nativeElement.checked=false;
    // }
    this.selected_index=index;
    this.selected_country_flag=this.countries[index].flag;
    this.selected_country_name=this.countries[index].name;
  }

  toggleShowCountryList(){
    this.is_country_list_show=!this.is_country_list_show;
    this.is_mat_icon_less_show=!this.is_mat_icon_less_show;
  }
  
  //
  selected_index:number=0;

}
