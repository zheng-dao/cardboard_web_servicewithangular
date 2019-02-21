import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobRoleBrowseComponent } from './job-role-browse.component';

describe('JobRoleBrowseComponent', () => {
  let component: JobRoleBrowseComponent;
  let fixture: ComponentFixture<JobRoleBrowseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobRoleBrowseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobRoleBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
