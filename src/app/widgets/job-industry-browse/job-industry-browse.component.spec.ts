import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobIndustryBrowseComponent } from './job-industry-browse.component';

describe('JobIndustryBrowseComponent', () => {
  let component: JobIndustryBrowseComponent;
  let fixture: ComponentFixture<JobIndustryBrowseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobIndustryBrowseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobIndustryBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
