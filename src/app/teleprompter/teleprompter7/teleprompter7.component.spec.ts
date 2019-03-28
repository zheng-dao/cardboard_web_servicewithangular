import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Teleprompter7Component } from './teleprompter7.component';

describe('Teleprompter7Component', () => {
  let component: Teleprompter7Component;
  let fixture: ComponentFixture<Teleprompter7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teleprompter7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teleprompter7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
