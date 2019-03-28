import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordLoadingComponent } from './record-loading.component';

describe('RecordLoadingComponent', () => {
  let component: RecordLoadingComponent;
  let fixture: ComponentFixture<RecordLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
