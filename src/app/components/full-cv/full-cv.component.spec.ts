import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCvComponent } from './full-cv.component';
import { EducationCardComponent } from './education-card/education-card.component';
import { WorkCardComponent } from './work-card/work-card.component';
import { BadgeGroupGridComponent } from '../badge-group-grid/badge-group-grid.component';

describe('FullCvComponentComponent', () => {
  let component: FullCvComponent;
  let fixture: ComponentFixture<FullCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullCvComponent, EducationCardComponent, WorkCardComponent, BadgeGroupGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
