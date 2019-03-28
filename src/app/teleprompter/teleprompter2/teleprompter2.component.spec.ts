import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Teleprompter2Component } from './teleprompter2.component';

describe('Teleprompter2Component', () => {
  let component: Teleprompter2Component;
  let fixture: ComponentFixture<Teleprompter2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teleprompter2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teleprompter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
