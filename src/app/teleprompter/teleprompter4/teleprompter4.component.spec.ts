import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Teleprompter4Component } from './teleprompter4.component';

describe('Teleprompter4Component', () => {
  let component: Teleprompter4Component;
  let fixture: ComponentFixture<Teleprompter4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teleprompter4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teleprompter4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
