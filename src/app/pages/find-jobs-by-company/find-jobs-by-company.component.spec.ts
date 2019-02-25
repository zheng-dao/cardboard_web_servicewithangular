import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindJobsByCompanyComponent } from './find-jobs-by-company.component';

describe('FindJobsByCompanyComponent', () => {
  let component: FindJobsByCompanyComponent;
  let fixture: ComponentFixture<FindJobsByCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindJobsByCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindJobsByCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
