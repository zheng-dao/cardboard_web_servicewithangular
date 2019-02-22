import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {JobModel} from '../models/search_result';
@Injectable({
  providedIn: 'root'
})
export class JobSearchResultService {

  constructor(private http: HttpClient) { }

  getJobs(): Observable<JobModel[]> {
    return this.http.get<JobModel[]>('/assets/JsonData/search_result/job_search_results.json');
  }

}
