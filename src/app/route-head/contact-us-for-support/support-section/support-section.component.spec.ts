import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportSectionComponent } from './support-section.component';

describe('SupportSectionComponent', () => {
  let component: SupportSectionComponent;
  let fixture: ComponentFixture<SupportSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
