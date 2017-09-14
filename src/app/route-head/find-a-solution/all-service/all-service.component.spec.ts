import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllServiceComponent } from './all-service.component';

describe('AllServiceComponent', () => {
  let component: AllServiceComponent;
  let fixture: ComponentFixture<AllServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
