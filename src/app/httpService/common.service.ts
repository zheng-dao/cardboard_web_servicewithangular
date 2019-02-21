import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CountryModel} from '../models/country';
import {JobIndustryModel, JobRoleModel} from '../models/common_widget'
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }
  
  // get job titles
  getJobTitles(): Observable<string[]> {
    return this.http.get<string[]>("/assets/JsonData/job_titles.json");
  }

  //get countries
  getCountries(): Observable<CountryModel[]> {
    return this.http.get<CountryModel[]>("/assets/JsonData/country.json");
  }

  //get job roles
  getJobRoles(): Observable<JobRoleModel[]> {
    return this.http.get<JobRoleModel[]>("/assets/JsonData/search_result/job_roles.json");
  }

  // get job industries
  getJonIndustries(): Observable<JobIndustryModel[]> {
    return this.http.get<JobIndustryModel[]>("/assets/JsonData/search_result/job_industries.json");
  }
}
