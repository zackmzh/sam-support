import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCatalogBrowsingComponent } from './sub-catalog-browsing.component';

describe('SubCatalogBrowsingComponent', () => {
  let component: SubCatalogBrowsingComponent;
  let fixture: ComponentFixture<SubCatalogBrowsingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCatalogBrowsingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCatalogBrowsingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
