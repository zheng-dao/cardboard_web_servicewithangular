import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Teleprompter6Component } from './teleprompter6.component';

describe('Teleprompter6Component', () => {
  let component: Teleprompter6Component;
  let fixture: ComponentFixture<Teleprompter6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teleprompter6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teleprompter6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
