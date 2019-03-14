import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVcvProfessionComponent } from './create-vcv-profession.component';

describe('CreateVcvProfessionComponent', () => {
  let component: CreateVcvProfessionComponent;
  let fixture: ComponentFixture<CreateVcvProfessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVcvProfessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVcvProfessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
