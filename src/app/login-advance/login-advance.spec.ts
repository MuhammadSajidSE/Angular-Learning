import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAdvance } from './login-advance';

describe('LoginAdvance', () => {
  let component: LoginAdvance;
  let fixture: ComponentFixture<LoginAdvance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginAdvance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAdvance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
