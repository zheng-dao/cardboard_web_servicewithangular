import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VcvVideoFx5Component } from './vcv-video-fx5.component';

describe('VcvVideoFx5Component', () => {
  let component: VcvVideoFx5Component;
  let fixture: ComponentFixture<VcvVideoFx5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VcvVideoFx5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcvVideoFx5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
