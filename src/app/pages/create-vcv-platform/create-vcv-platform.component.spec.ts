import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVcvPlatformComponent } from './create-vcv-platform.component';

describe('CreateVcvPlatformComponent', () => {
  let component: CreateVcvPlatformComponent;
  let fixture: ComponentFixture<CreateVcvPlatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVcvPlatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVcvPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
