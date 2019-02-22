import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindJobsBySectorComponent } from './find-jobs-by-sector.component';

describe('FindJobsBySectorComponent', () => {
  let component: FindJobsBySectorComponent;
  let fixture: ComponentFixture<FindJobsBySectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindJobsBySectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindJobsBySectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
