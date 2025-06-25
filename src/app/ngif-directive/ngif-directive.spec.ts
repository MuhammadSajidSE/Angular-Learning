import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifDirective } from './ngif-directive';

describe('NgifDirective', () => {
  let component: NgifDirective;
  let fixture: ComponentFixture<NgifDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgifDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgifDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
