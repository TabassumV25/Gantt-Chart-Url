import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegLoginPasswordComponent } from './reg-login-password.component';

describe('RegLoginPasswordComponent', () => {
  let component: RegLoginPasswordComponent;
  let fixture: ComponentFixture<RegLoginPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegLoginPasswordComponent]
    });
    fixture = TestBed.createComponent(RegLoginPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
