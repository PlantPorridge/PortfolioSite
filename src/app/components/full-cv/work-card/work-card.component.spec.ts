import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCardComponent } from './work-card.component';
import { BadgeGroupGridComponent } from '../../badge-group-grid/badge-group-grid.component';

describe('WorkCardComponent', () => {
  let component: WorkCardComponent;
  let fixture: ComponentFixture<WorkCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkCardComponent, BadgeGroupGridComponent  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
