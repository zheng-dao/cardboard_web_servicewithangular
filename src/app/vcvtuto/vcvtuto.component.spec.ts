import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VcvtutoComponent } from './vcvtuto.component';

describe('VcvtutoComponent', () => {
  let component: VcvtutoComponent;
  let fixture: ComponentFixture<VcvtutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VcvtutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcvtutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
