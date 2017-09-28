import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeGroupGridComponent } from './badge-group-grid.component';

describe('BadgeGroupGridComponent', () => {
  let component: BadgeGroupGridComponent;
  let fixture: ComponentFixture<BadgeGroupGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeGroupGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeGroupGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
