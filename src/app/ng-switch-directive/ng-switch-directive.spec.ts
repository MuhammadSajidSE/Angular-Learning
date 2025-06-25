import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchDirective } from './ng-switch-directive';

describe('NgSwitchDirective', () => {
  let component: NgSwitchDirective;
  let fixture: ComponentFixture<NgSwitchDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgSwitchDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSwitchDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
