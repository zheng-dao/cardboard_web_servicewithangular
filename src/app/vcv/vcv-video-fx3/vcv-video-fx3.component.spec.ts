import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VcvVideoFx3Component } from './vcv-video-fx3.component';

describe('VcvVideoFx3Component', () => {
  let component: VcvVideoFx3Component;
  let fixture: ComponentFixture<VcvVideoFx3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VcvVideoFx3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcvVideoFx3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
