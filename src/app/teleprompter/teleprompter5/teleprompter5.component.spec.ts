import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Teleprompter5Component } from './teleprompter5.component';

describe('Teleprompter5Component', () => {
  let component: Teleprompter5Component;
  let fixture: ComponentFixture<Teleprompter5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teleprompter5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teleprompter5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
