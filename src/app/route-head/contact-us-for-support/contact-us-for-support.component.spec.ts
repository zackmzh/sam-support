import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsForSupportComponent } from './contact-us-for-support.component';

describe('ContactUsForSupportComponent', () => {
  let component: ContactUsForSupportComponent;
  let fixture: ComponentFixture<ContactUsForSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUsForSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsForSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
