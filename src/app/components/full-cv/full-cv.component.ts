import { Component, OnInit } from '@angular/core';

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
    this.workHistory = [this.exceedraWork, this.hpWork, this.surreyWork];
  }

  exceedraWork: Work = {
    company: "Exceedra",
    startDate: new Date(2014, 9),
    endDate: new Date(2017, 8),
    jobTitle: "Software Developer",
    jobDescription: "Working both independently and in a small development team to rapidly improve this start-ups Trade Promotion products and services. Currently the technical lead on a fresh Greenfield project to deliver modern, high performance, scalable forecasting solutions to a range of industries. ",
    techsCore: ["TS", "JS", "Angular", "HTML5", "CSS3", "C#", ".NET 4.5", "WPF"],
    techsSub: ["F#", "SQL", "Karma", "Jasmine", "Protractor", "Cucumber", "Telerik"],
    tools: ["VS '13-'17", "VS Core", "TFS", "SVN", "GIT", "SSMS", "TeamCity"],
    rolesCore: ["Develop", "Design", "Test", "Support", "Research"],
    rolesSub: ["Manage", "Lead", "Review", "Interview", "Present", "Client Communication"]
  };

  hpWork: Work = {
    company: "Hewlett Packard",
    startDate: new Date(2013, 9),
    endDate: new Date(2014, 9),
    jobTitle: "Graduate Information Analyst",
    jobDescription: "Worked in my first technical rotation as a Software Developer primarily using C within a Linux environment. Part of a large development team on the Hawk Aircraft variant of AMPA (Advanced Mission Planning Aid)",
    techsCore: ["C"],
    techsSub: ["Bullseye", "Coverity", "Valgrind"],
    tools: ["Linux"],
    rolesCore: ["Develop", "Design", "Test", "Review", "Debug", "Document"],
    rolesSub: ["Client Communication"]
  };

  surreyWork: Work = {
    company: "University of Surrey",
    startDate: new Date(2012, 6),
    endDate: new Date(2012, 8),
    jobTitle: "Windows 7 Rollout Technician",
    jobDescription: "Responsible for working in a rollout team dedicated to upgrading Laptops and PCs to Windows 7. I was tasked with installing and configuring computer systems, diagnosing hardware and software faults and solving technical and application problems. I organised computer audits and upgrades on my own and as part of a team, and communicated with new people on a daily basis. I also worked alongside non-rollout IT staff during busy periods to help maintain a stable work load.",
    techsCore: ["Windows 7"],
    techsSub: null,
    tools: null,
    rolesCore: ["Installation", "Backup", "Lead", "Client Communication", "Time Management"],
    rolesSub: null
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
    note: "My final year result was 1:1 (74.3%)"
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

export class Work {
  public company: string;
  public startDate: Date;
  public endDate: Date;
  public jobTitle: string;
  public jobDescription: string;
  public techsCore: string[];
  public techsSub: string[];
  public tools: string[];
  public rolesCore: string[];
  public rolesSub: string[];
}

export class Education {
  public school: string;
  public startDate: Date;
  public endDate: Date;
  public levelAndResults: EducationLevelAndResults[];
  public note: string;
}

export class EducationLevelAndResults {
  public level: string;
  public results: SubjectResult[];
}

export class SubjectResult {
  public subject: string;
  public result: string;
}
