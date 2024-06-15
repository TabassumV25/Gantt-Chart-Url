import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRegFlowComponent } from './project-reg-flow.component';

describe('ProjectRegFlowComponent', () => {
  let component: ProjectRegFlowComponent;
  let fixture: ComponentFixture<ProjectRegFlowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectRegFlowComponent]
    });
    fixture = TestBed.createComponent(ProjectRegFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
