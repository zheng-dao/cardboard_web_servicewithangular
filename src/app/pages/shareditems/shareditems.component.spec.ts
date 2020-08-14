import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareditemsComponent } from './shareditems.component';

describe('ShareditemsComponent', () => {
  let component: ShareditemsComponent;
  let fixture: ComponentFixture<ShareditemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareditemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareditemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
