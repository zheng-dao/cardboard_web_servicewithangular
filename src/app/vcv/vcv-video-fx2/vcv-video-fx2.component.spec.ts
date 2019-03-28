import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VcvVideoFx2Component } from './vcv-video-fx2.component';

describe('VcvVideoFx2Component', () => {
  let component: VcvVideoFx2Component;
  let fixture: ComponentFixture<VcvVideoFx2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VcvVideoFx2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcvVideoFx2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
