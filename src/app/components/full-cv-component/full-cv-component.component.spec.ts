import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCvComponentComponent } from './full-cv-component.component';

describe('FullCvComponentComponent', () => {
  let component: FullCvComponentComponent;
  let fixture: ComponentFixture<FullCvComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullCvComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullCvComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
