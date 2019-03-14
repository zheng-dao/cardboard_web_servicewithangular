import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVcvThemeComponent } from './create-vcv-theme.component';

describe('CreateVcvThemeComponent', () => {
  let component: CreateVcvThemeComponent;
  let fixture: ComponentFixture<CreateVcvThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVcvThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVcvThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
