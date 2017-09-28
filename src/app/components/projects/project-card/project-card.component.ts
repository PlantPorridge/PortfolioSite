import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../../models/projects/project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input() project: Project;


  constructor() { }

  ngOnInit() {
  }

}
