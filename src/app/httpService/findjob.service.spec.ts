import { TestBed } from '@angular/core/testing';

import { FindjobService } from './findjob.service';

describe('FindjobService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FindjobService = TestBed.get(FindjobService);
    expect(service).toBeTruthy();
  });
});
