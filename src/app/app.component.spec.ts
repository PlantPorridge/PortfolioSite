import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { EducationCardComponent } from './components/full-cv/education-card/education-card.component';
import { FormatPipeDemoComponent } from './components/projects/demos/format-pipe-demo/format-pipe-demo.component';
import { WorkCardComponent } from './components/full-cv/work-card/work-card.component';
import { BadgeGroupGridComponent } from './components/badge-group-grid/badge-group-grid.component';
import { ProjectCardComponent } from './components/projects/project-card/project-card.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FormatPipe } from 'ng-format-pipe';
import { FullCvComponent } from './components/full-cv/full-cv.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FullCvComponent,
        HomeComponent,
        FormatPipe,
        ProjectsComponent,
        ProjectCardComponent,
        BadgeGroupGridComponent,
        WorkCardComponent,
        EducationCardComponent,
        FormatPipeDemoComponent,
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule 
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: "/" }
      ],
    }).compileComponents();
  }));

  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));
});
