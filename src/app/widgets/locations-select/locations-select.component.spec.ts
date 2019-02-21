import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsSelectComponent } from './locations-select.component';

describe('LocationsSelectComponent', () => {
  let component: LocationsSelectComponent;
  let fixture: ComponentFixture<LocationsSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationsSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
