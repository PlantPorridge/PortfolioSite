import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { FullCvComponent } from 'src/app/components/full-cv/full-cv.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ProjectsComponent } from 'src/app/components/projects/projects.component';
import { ProjectCardComponent } from 'src/app/components/projects/project-card/project-card.component';
import { BadgeGroupGridComponent } from 'src/app/components/badge-group-grid/badge-group-grid.component';
import { WorkCardComponent } from 'src/app/components/full-cv/work-card/work-card.component';
import { EducationCardComponent } from 'src/app/components/full-cv/education-card/education-card.component';
import { FormatPipeDemoComponent } from 'src/app/components/projects/demos/format-pipe-demo/format-pipe-demo.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormatPipeModule } from 'ng-format-pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    FullCvComponent,
    HomeComponent,
    // FormatPipe,
    ProjectsComponent,
    ProjectCardComponent,
    BadgeGroupGridComponent,
    WorkCardComponent,
    EducationCardComponent,
    FormatPipeDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule,
    MatButtonModule,
    FormatPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
