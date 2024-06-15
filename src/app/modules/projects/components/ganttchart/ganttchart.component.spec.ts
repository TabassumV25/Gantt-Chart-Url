import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanttchartComponent } from './ganttchart.component';

describe('GanttchartComponent', () => {
  let component: GanttchartComponent;
  let fixture: ComponentFixture<GanttchartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GanttchartComponent]
    });
    fixture = TestBed.createComponent(GanttchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
