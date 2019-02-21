import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JobsByRoleModel, JobsByCompaniesModel, JobsByCountryModel } from '../models/jobsbyrole'

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

}
