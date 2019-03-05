import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JobsByRoleModel, JobsByCompaniesModel, JobsByCountryModel } from '../models/jobsbyrole'
import {JobsBySectorModel, JobTitlesModel} from '../models/findJobBySector';
import {JobByCityModel,JobByLocationModel, JobForInterModel,} from '../models/findJobByLocation';
import {JobForCompanyModel} from '../models/jobOffer';
@Injectable({
  providedIn: 'root'
})
export class FindjobService {

  constructor(private http: HttpClient) { }

  getJobsByRole(): Observable<JobsByRoleModel[]> {
    return this.http.get<JobsByRoleModel[]>("/assets/JsonData/jobsbyrole/jobsbyrole.json");
  }

  getJobsByCompanies(): Observable<JobsByCompaniesModel[]> {
    return this.http.get<JobsByCompaniesModel[]>("/assets/JsonData/jobsbyrole/jobsbycompany.json");
  }

  getJobsByCountries(): Observable<JobsByCountryModel[]> {
    return this.http.get<JobsByCountryModel[]>("/assets/JsonData/jobsbyrole/jobsbycountry.json");
  }

  getJobsBySector(): Observable<JobsBySectorModel[]> {
    return this.http.get<JobsBySectorModel[]>("/assets/JsonData/findJobsBySector/jobsbysector.json");
  }

  getJobTitles():Observable<JobTitlesModel[]>{
    return this.http.get<JobTitlesModel[]>("/assets/JsonData/findJobsBySector/jobtitles.json");
  }

  getJobByLocation(): Observable<JobByLocationModel[]>{
    return this.http.get<JobByLocationModel[]>("/assets/JsonData/findJobsByLocation/jobsbycity.json");
  }

  getJobForInternational():Observable<JobForInterModel[]>{
    return this.http.get<JobForInterModel[]>("/assets/JsonData/findJobsByLocation/jobsForInternational.json");
  }
  getJobSimilarForCompany():Observable<JobForCompanyModel[]>{
    return this.http.get<JobForCompanyModel[]>("/assets/JsonData/jobForCompany.json");
  }
}
