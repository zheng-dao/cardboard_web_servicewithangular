import { TestBed } from '@angular/core/testing';


import { MyApplicationService } from './my-application.service';

describe('MyApplicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyApplicationService = TestBed.get(MyApplicationService);
    expect(service).toBeTruthy();
  });
});
