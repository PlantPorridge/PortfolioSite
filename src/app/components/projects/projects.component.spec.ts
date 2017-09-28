import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { AppRoutingModule } from '../../app-routing/app-routing.module';
import { HomeComponent } from '../home/home.component';
import { FullCvComponent } from '../full-cv/full-cv.component';
import { FormatPipeDemoComponent } from './demos/format-pipe-demo/format-pipe-demo.component';
import { BadgeGroupGridComponent } from '../badge-group-grid/badge-group-grid.component';
import { AppModule } from '../../app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  ],
      imports: [
        AppRoutingModule,
        AppModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: "/" }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
