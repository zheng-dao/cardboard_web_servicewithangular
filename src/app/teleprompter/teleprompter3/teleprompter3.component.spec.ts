import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Teleprompter3Component } from './teleprompter3.component';

describe('Teleprompter3Component', () => {
  let component: Teleprompter3Component;
  let fixture: ComponentFixture<Teleprompter3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teleprompter3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teleprompter3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
