import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTemperature } from './body-temperature';

describe('BodyTemperature', () => {
  let component: BodyTemperature;
  let fixture: ComponentFixture<BodyTemperature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyTemperature]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyTemperature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
