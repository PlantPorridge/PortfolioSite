import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatPipeDemoComponent } from './format-pipe-demo.component';
import { FormsModule } from '@angular/forms';
import { FormatPipe } from 'ng-format-pipe';

describe('FormatPipeDemoComponent', () => {
  let component: FormatPipeDemoComponent;
  let fixture: ComponentFixture<FormatPipeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatPipeDemoComponent, FormatPipe ],
      imports: [
        FormsModule
         
      ]
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
