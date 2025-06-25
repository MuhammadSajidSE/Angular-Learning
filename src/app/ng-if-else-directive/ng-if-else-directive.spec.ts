import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfElseDirective } from './ng-if-else-directive';

describe('NgIfElseDirective', () => {
  let component: NgIfElseDirective;
  let fixture: ComponentFixture<NgIfElseDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgIfElseDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgIfElseDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
