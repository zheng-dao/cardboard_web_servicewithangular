import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-job-search',
  templateUrl: './advanced-job-search.component.html',
  styleUrls: ['./advanced-job-search.component.scss']
})
export class AdvancedJobSearchComponent implements OnInit {

  //select 
  location_list:string[]=[];
  role_list:string[]=[];
  industry_list:string[]=[];
  salary_list:number[]=[];

  //checkbox group
  gender_list:string[]=[];
  job_post_language_list: string[]=[];
  company_type_list:string[]=[];
  career_level_list:string[]=[];
  employment_type_list:string[]=[];

  constructor() { }

  ngOnInit() {
 
    this.location_list=["country_1", "country_2","country_3","country_4"];
    this.role_list=["role_1", "role_2","role_3","role_4"];
    this.industry_list=["industry_1", "industry_2","industry_3","industry_4"];
    this.salary_list=[10000,8000,6000,4000,2000];
    // this must be key value array of en.json 
    this.gender_list=["ch_gender_male",
                      "ch_gender_female",
                      "ch_gender_any"];

    this.job_post_language_list=["ch_lang_no_preference", 
                            "ch_lang_english", 
                            "ch_lang_arabic", 
                            "ch_lang_french"];

    this.company_type_list=["ch_com_type_em_pr_se",
                       "ch_com_type_em_pu_se",
                       "ch_com_type_non_profit_organization", 
                       "ch_recuritment_agency"];
    
    this.career_level_list=["ch_career_level_student",
                        "ch_career_level_fresh_graduate",
                        "ch_career_level_entry_level",
                        "ch_career_level_mid_career",
                        "ch_career_level_management",
                        "ch_career_level_executive",
                        "ch_career_level_senior_executive"];

    this.employment_type_list=["ch_employ_type_comission", 
                          "ch_employ_type_freelancer",
                          "ch_employ_type_internship",
                          "ch_employ_type_contractor",
                          "ch_employ_type_full_time_employee",
                          "ch_employ_type_temporary_employee",
                          "ch_employ_type_volunteer"];
  }

}
