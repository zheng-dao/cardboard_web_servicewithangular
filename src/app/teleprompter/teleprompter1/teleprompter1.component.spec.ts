import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Teleprompter1Component } from './teleprompter1.component';

describe('Teleprompter1Component', () => {
  let component: Teleprompter1Component;
  let fixture: ComponentFixture<Teleprompter1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teleprompter1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teleprompter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
