import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VcvVideoFx1Component } from './vcv-video-fx1.component';

describe('VcvVideoFx1Component', () => {
  let component: VcvVideoFx1Component;
  let fixture: ComponentFixture<VcvVideoFx1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VcvVideoFx1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcvVideoFx1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
