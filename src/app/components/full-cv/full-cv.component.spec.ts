import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCvComponent } from './full-cv.component';

describe('FullCvComponentComponent', () => {
  let component: FullCvComponent;
  let fixture: ComponentFixture<FullCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullCvComponent ]
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
