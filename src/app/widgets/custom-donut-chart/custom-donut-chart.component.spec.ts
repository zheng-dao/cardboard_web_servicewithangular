import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDonutChartComponent } from './custom-donut-chart.component';

describe('CustomDonutChartComponent', () => {
  let component: CustomDonutChartComponent;
  let fixture: ComponentFixture<CustomDonutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDonutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
