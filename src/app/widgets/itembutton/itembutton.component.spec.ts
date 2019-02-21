import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItembuttonComponent } from './itembutton.component';

describe('ItembuttonComponent', () => {
  let component: ItembuttonComponent;
  let fixture: ComponentFixture<ItembuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItembuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItembuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
