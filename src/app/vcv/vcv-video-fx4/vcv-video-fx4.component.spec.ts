import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VcvVideoFx4Component } from './vcv-video-fx4.component';

describe('VcvVideoFx4Component', () => {
  let component: VcvVideoFx4Component;
  let fixture: ComponentFixture<VcvVideoFx4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VcvVideoFx4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcvVideoFx4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
