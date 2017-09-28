import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatPipeDemoComponent } from './format-pipe-demo.component';

describe('FormatPipeDemoComponent', () => {
  let component: FormatPipeDemoComponent;
  let fixture: ComponentFixture<FormatPipeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatPipeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatPipeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
