import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyvcvComponent } from './myvcv.component';

describe('MyvcvComponent', () => {
  let component: MyvcvComponent;
  let fixture: ComponentFixture<MyvcvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyvcvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyvcvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
