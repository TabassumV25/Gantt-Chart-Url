import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStatusChangeComponent } from './user-status-change.component';

describe('UserStatusChangeComponent', () => {
  let component: UserStatusChangeComponent;
  let fixture: ComponentFixture<UserStatusChangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserStatusChangeComponent]
    });
    fixture = TestBed.createComponent(UserStatusChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
