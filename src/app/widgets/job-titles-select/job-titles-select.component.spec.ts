import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobTitlesSelectComponent } from './job-titles-select.component';

describe('JobTitlesSelectComponent', () => {
  let component: JobTitlesSelectComponent;
  let fixture: ComponentFixture<JobTitlesSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobTitlesSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobTitlesSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
