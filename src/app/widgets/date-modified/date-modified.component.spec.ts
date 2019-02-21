import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateModifiedComponent } from './date-modified.component';

describe('DateModifiedComponent', () => {
  let component: DateModifiedComponent;
  let fixture: ComponentFixture<DateModifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateModifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateModifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
