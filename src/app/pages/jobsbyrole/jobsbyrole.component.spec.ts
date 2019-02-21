import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsbyroleComponent } from './jobsbyrole.component';

describe('JobsbyroleComponent', () => {
  let component: JobsbyroleComponent;
  let fixture: ComponentFixture<JobsbyroleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsbyroleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsbyroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
