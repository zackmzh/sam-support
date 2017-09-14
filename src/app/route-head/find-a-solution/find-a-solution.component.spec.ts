import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindASolutionComponent } from './find-a-solution.component';

describe('FindASolutionComponent', () => {
  let component: FindASolutionComponent;
  let fixture: ComponentFixture<FindASolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindASolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindASolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
