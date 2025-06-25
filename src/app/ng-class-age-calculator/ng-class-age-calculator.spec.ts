import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassAgeCalculator } from './ng-class-age-calculator';

describe('NgClassAgeCalculator', () => {
  let component: NgClassAgeCalculator;
  let fixture: ComponentFixture<NgClassAgeCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgClassAgeCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgClassAgeCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
