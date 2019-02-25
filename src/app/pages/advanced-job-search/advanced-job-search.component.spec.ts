import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedJobSearchComponent } from './advanced-job-search.component';

describe('AdvancedJobSearchComponent', () => {
  let component: AdvancedJobSearchComponent;
  let fixture: ComponentFixture<AdvancedJobSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedJobSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedJobSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
