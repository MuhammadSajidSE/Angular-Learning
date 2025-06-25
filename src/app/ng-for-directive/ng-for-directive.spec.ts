import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForDirective } from './ng-for-directive';

describe('NgForDirective', () => {
  let component: NgForDirective;
  let fixture: ComponentFixture<NgForDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgForDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgForDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
