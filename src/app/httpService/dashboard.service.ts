import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Job,
  Member,
  RecommendJob,
  Company,
  JobBranch,
  JobChartModel,
  SearchChartModel
} from '../models/dashboard';




@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>('/assets/JsonData/dashboard/con1.json');
  }

  getRecommendJobs(): Observable<RecommendJob[]> {
    return this.http.get<RecommendJob[]>('/assets/JsonData/dashboard/con2.json');
  }

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>('/assets/JsonData/dashboard/con3.json');
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>('/assets/JsonData/dashboard/con4.json');
  }

  getJobBranches(): Observable<JobBranch[]> {
    return this.http.get<JobBranch[]>('/assets/JsonData/dashboard/con5.json');
  }
  /*
     pagination 
  */
  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 2) {
    // calculate total pages
    let totalPages = Math.ceil(totalItems / pageSize);

    // ensure current page isn't out of range
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    // decision currentIndexOfArray
    let currentIndexOfArray = 1;
    if (totalPages <= 7) {
      currentIndexOfArray = currentPage;
    }
    else {
      if (currentPage <= 4) {
        currentIndexOfArray = currentPage;
      } else {
        let difference = totalPages - 7;
        if ((currentPage - 4) <= difference)
          currentIndexOfArray = 4;
        else
          currentIndexOfArray = currentPage - difference;
      }
    }

    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);


    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startIndex: startIndex,
      endIndex: endIndex,
      currentIndexOfArray: currentIndexOfArray
    };
  }

  // get for job chart data
  getJobChartData(): Observable<JobChartModel[]> {
    return this.http.get<JobChartModel[]>('/assets/JsonData/dashboard/con6.json');
  }
  // get for search chart data
    getSearchChartData(): Observable<SearchChartModel[]> {
      return this.http.get<SearchChartModel[]>('/assets/JsonData/dashboard/con7.json');
    }
}
