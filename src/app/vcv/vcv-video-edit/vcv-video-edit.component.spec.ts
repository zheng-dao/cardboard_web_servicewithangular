import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VcvVideoEditComponent } from './vcv-video-edit.component';

describe('VcvVideoEditComponent', () => {
  let component: VcvVideoEditComponent;
  let fixture: ComponentFixture<VcvVideoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VcvVideoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcvVideoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
