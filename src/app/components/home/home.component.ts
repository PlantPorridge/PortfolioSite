import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  skills: string[] = ["Angular 2", "C#", "WPF", "TypeScript", "HTML5", "CSS3", "Karma", "Jasmine", "Git", "TFS", "Jira"]

}
