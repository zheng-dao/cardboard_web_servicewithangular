import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiCircleChartComponent } from './semi-circle-chart.component';

describe('SemiCircleChartComponent', () => {
  let component: SemiCircleChartComponent;
  let fixture: ComponentFixture<SemiCircleChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemiCircleChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemiCircleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
