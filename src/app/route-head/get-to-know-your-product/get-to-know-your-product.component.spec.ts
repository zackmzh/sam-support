import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetToKnowYourProductComponent } from './get-to-know-your-product.component';

describe('GetToKnowYourProductComponent', () => {
  let component: GetToKnowYourProductComponent;
  let fixture: ComponentFixture<GetToKnowYourProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetToKnowYourProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetToKnowYourProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
