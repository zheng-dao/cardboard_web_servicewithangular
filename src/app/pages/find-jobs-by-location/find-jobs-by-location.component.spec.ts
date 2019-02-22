import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindJobsByLocationComponent } from './find-jobs-by-location.component';

describe('FindJobsByLocationComponent', () => {
  let component: FindJobsByLocationComponent;
  let fixture: ComponentFixture<FindJobsByLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindJobsByLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindJobsByLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
