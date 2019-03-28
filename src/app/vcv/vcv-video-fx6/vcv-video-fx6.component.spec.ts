import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VcvVideoFx6Component } from './vcv-video-fx6.component';

describe('VcvVideoFx6Component', () => {
  let component: VcvVideoFx6Component;
  let fixture: ComponentFixture<VcvVideoFx6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VcvVideoFx6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcvVideoFx6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
