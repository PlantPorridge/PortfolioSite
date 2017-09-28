import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/projects/project.model';
import { BadgeGroup } from '../../models/badge-group/badge-group.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];

  constructor() { }

  ngOnInit() {
    this.projects = [
      this.formatPipeProject,//this.formatPipeProject,this.formatPipeProject,this.formatPipeProject,this.formatPipeProject,
      this.upcomingProject
    ]
  }

  formatPipeProject: Project = {
    title: "Angular Format Pipe",
    link: "https://github.com/PlantPorridge/FormatPipe",
    startDate: new Date(2017, 8),
    endDate: new Date(2017, 8),
    description: "An Angular Pipe for formatting strings in accordance with the .NET Standard Numeric Format Strings",
    badgeGroups: [
      <BadgeGroup>{
        title: "Techs",
        context: "primary",
        badges: ["Angular", "Pipes", "i18n", "TravisCI", "Coveralls", "git", 'npm']
      }
    ],
    ciBadges: ["https://travis-ci.org/PlantPorridge/FormatPipe.svg?branch=master", "https://coveralls.io/repos/github/PlantPorridge/FormatPipe/badge.svg?branch=master"],
    demo: "formatpipedemo"
  }

  upcomingProject: Project = {
    title: "More Projects Coming Soon...",
    link: "",
    startDate: new Date(),
    endDate: null,
    description: "When I begin a new project they will show up here.",
    badgeGroups: [],
    ciBadges: [],
    demo: ""
  }

}
