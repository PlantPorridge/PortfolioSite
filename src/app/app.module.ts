import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { FullCvComponent } from './components/full-cv/full-cv.component';
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { HomeComponent } from './components/home/home.component';
import { FormatPipe } from 'ng-format-pipe';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectCardComponent } from './components/projects/project-card/project-card.component';
import { BadgeGroupGridComponent } from './components/badge-group-grid/badge-group-grid.component';
import { WorkCardComponent } from './components/full-cv/work-card/work-card.component';
import { EducationCardComponent } from './components/full-cv/education-card/education-card.component';
import { FormatPipeDemoComponent } from './components/projects/demos/format-pipe-demo/format-pipe-demo.component';

import {MatSidenavModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';

@NgModule({
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
    FormatPipeDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule 
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "en-GB" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
