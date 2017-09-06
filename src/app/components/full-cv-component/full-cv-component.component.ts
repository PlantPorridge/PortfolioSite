import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-cv-component',
  templateUrl: './full-cv-component.component.html',
  styleUrls: ['./full-cv-component.component.css']
})
export class FullCvComponentComponent implements OnInit {

  constructor() { }

  workHistory: Work[];

  ngOnInit() {
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
    rolesSub : ["Manage", "Lead", "Review", "Interview", "Present", "Client Communication"]
  };

  hpWork: Work = {
    company: "Hewlett Packard Enterprise Services",
    startDate: new Date(2013, 9),
    endDate: new Date(2014, 9),
    jobTitle: "Graduate Information Analyst",
    jobDescription: "Worked in my first technical rotation as a Software Developer primarily using C within a Linux environment. Part of a large development team on the Hawk Aircraft variant of AMPA (Advanced Mission Planning Aid)",
    techsCore: ["C"],
    techsSub: ["Bullseye", "Coverity", "Valgrind"],
    tools: ["Linux"],
    rolesCore: ["Develop", "Design", "Test", "Review", "Debug", "Document"],
    rolesSub : ["Client Communication"]
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
    rolesSub : null
  };
  

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
