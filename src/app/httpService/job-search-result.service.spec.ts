import { TestBed } from '@angular/core/testing';

import { JobSearchResultService } from './job-search-result.service';

describe('JobSearchResultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobSearchResultService = TestBed.get(JobSearchResultService);
    expect(service).toBeTruthy();
  });
});
