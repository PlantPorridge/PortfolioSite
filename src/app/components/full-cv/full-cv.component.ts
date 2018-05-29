import { Component, OnInit } from '@angular/core';
import { SubjectResult } from '../../models/full-cv/education/subject-result.model';
import { EducationLevelAndResults } from '../../models/full-cv/education/education-level-and-results.model';
import { Education } from '../../models/full-cv/education/eductation.model';
import { Work } from '../../models/full-cv/work/work.model';
import { BadgeGroup } from '../../models/badge-group/badge-group.model';

@Component({
  selector: 'app-full-cv',
  templateUrl: './full-cv.component.html',
  styleUrls: ['./full-cv.component.css']
})
export class FullCvComponent implements OnInit {

  constructor() { }

  educationHistory: Education[];
  workHistory: Work[];

  ngOnInit() {
    this.educationHistory = [this.warwickEducation, this.godalmingEducation, this.rodboroughEducation];
    this.workHistory = [this.insyncWork, this.exceedraWork, this.hpWork, this.surreyWork];
  }

  //Eventually move this data to a service/db
  insyncWork: Work = {
    company: "In-Sync Group",
    startDate: new Date(2018, 0),
    endDate: null,
    jobTitle: "Full Stack Web Developer",
    jobDescription: "Development of a public facing web applications built using Angular (5+). I operate in a Full Stack role with a specialization in Angular. Work with other developers, testers and designers in an agile environment.",
    badgeGroups: [
      <BadgeGroup>{
        title: "Core Techs",
        context: "primary",
        badges: ["TS", "JS", "Angular", "RxJs", "HTML5", "CSS3", "C#", ".NET 4.5", "Entity Framework", "ASP.NET Web API 2"]
      },
      <BadgeGroup>{
        title: "Sub Techs",
        context: "secondary",
        badges: ["SQL", "Ionic", "Cordova", "iOS", "Andriod"]
      },
      <BadgeGroup>{
        title: "Tools",
        context: "info",
        badges: ["VS '15", "VS Code", "SVN", "SSMS", "TeamCity", "Octopus Deploy", "Agile", "Scrum", "Trello"]
      },
      <BadgeGroup>{
        title: "Core Roles",
        context: "primary",
        badges: ["Development"]
      }
    ]
  };

  exceedraWork: Work = {
    company: "Exceedra",
    startDate: new Date(2014, 9),
    endDate: new Date(2017, 8),
    jobTitle: "Software Developer",
    jobDescription: "I worked both independently and in a small development team to rapidly improve this start-up's Trade Promotion products and services. Held ownership of a range of projects and led the development of a C# server-side forecasting engine and a conversion project to migrate an existing WPF application into Angular. The new Angular App boasts full delivery customisation by allowing almost all design, layout, functionality and component communication to be configured by incoming data.",
    badgeGroups: [
      <BadgeGroup>{
        title: "Core Techs",
        context: "primary",
        badges: ["TS", "JS", "Angular", "HTML5", "CSS3", "C#", ".NET 4.5", "WPF", "Telerik"]
      },
      <BadgeGroup>{
        title: "Sub Techs",
        context: "secondary",
        badges: ["F#", "SQL", "Karma", "Jasmine", "Protractor", "Cucumber"]
      },
      <BadgeGroup>{
        title: "Tools",
        context: "info",
        badges: ["VS '13-'17", "VS Code", "TFS", "SVN", "GIT", "SSMS", "TeamCity", "Agile", "Scrum", "Jira"]
      },
      <BadgeGroup>{
        title: "Core Roles",
        context: "primary",
        badges: ["Develop", "Design", "Test", "Support", "Research"]
      },
      <BadgeGroup>{
        title: "Sub Roles",
        context: "secondary",
        badges: ["Manage", "Lead", "Review", "Interview", "Present", "Client Communication"]
      }
    ]
  };

  hpWork: Work = {
    company: "Hewlett Packard",
    startDate: new Date(2013, 9),
    endDate: new Date(2014, 9),
    jobTitle: "Graduate Information Analyst",
    jobDescription: "Worked in my first technical rotation as a Software Developer primarily using C within a Linux environment. Part of a large development team on the Hawk Aircraft variant of AMPA (Advanced Mission Planning Aid)",
    badgeGroups: [
      <BadgeGroup>{
        title: "Core Techs",
        context: "primary",
        badges: ["C"]
      },
      <BadgeGroup>{
        title: "Sub Techs",
        context: "secondary",
        badges: ["Bullseye", "Coverity", "Valgrind"]
      },
      <BadgeGroup>{
        title: "Tools",
        context: "info",
        badges: ["Linux"]
      },
      <BadgeGroup>{
        title: "Core Roles",
        context: "primary",
        badges: ["Develop", "Design", "Test", "Review", "Debug", "Document"]
      },
      <BadgeGroup>{
        title: "Sub Roles",
        context: "secondary",
        badges: ["Client Communication"]
      }
    ]
  };

  surreyWork: Work = {
    company: "University of Surrey",
    startDate: new Date(2012, 6),
    endDate: new Date(2012, 8),
    jobTitle: "Windows 7 Rollout Technician",
    jobDescription: "Responsible for working in a rollout team dedicated to upgrading Laptops and PCs to Windows 7. I was tasked with installing and configuring computer systems, diagnosing hardware and software faults and solving technical and application problems. I organised computer audits and upgrades on my own and as part of a team, and communicated with new people on a daily basis. I also worked alongside non-rollout IT staff during busy periods to help maintain a stable work load.",
    badgeGroups: [
      <BadgeGroup>{
        title: "Core Techs",
        context: "primary",
        badges: ["Windows 7"]
      },
      <BadgeGroup>{
        title: "Core Roles",
        context: "primary",
        badges: ["Installation", "Backup", "Lead", "Client Communication", "Time Management"]
      }
    ]
  };

  warwickEducation: Education = {
    school: "University of Warwick",
    startDate: new Date(2010, 8),
    endDate: new Date(2013, 6),
    levelAndResults: [
      <EducationLevelAndResults>{
        level: "BSc (hons)",
        results: [
          <SubjectResult>{ subject: "Discrete Mathematics", result: "2:1 (68%)" }
        ]
      }
    ],
    note: "My final year result was a 1st (74.3%)"
  }

  godalmingEducation: Education = {
    school: "Godalming College",
    startDate: new Date(2008, 8),
    endDate: new Date(2010, 6),
    levelAndResults: [
      <EducationLevelAndResults>{
        level: "A-Levels",
        results: [
          <SubjectResult>{ subject: "Mathematics", result: "A*" },
          <SubjectResult>{ subject: "Further Mathematics", result: "A" },
          <SubjectResult>{ subject: "Computing", result: "B" }
        ]
      },
      <EducationLevelAndResults>{
        level: "AS-Levels",
        results: [
          <SubjectResult>{ subject: "Economics", result: "B" },
          <SubjectResult>{ subject: "Physics", result: "B" }
        ]
      }
    ],
    note: null
  }

  rodboroughEducation: Education = {
    school: "Rodborough School",
    startDate: new Date(2003, 8),
    endDate: new Date(2008, 6),
    levelAndResults: [
      <EducationLevelAndResults>{
        level: "GCSEs",
        results: [
          <SubjectResult>{ subject: "Mathematics", result: "A" },
          <SubjectResult>{ subject: "English Literature", result: "B" },
          <SubjectResult>{ subject: "English Language", result: "B" }
        ]
      }
    ],
    note: "I hold 10 grade B and above GCSEs"
  }

}