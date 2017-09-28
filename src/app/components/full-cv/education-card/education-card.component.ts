import { Component, OnInit, Input } from '@angular/core';
import { Education } from '../../../models/full-cv/education/eductation.model';

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.css']
})
export class EducationCardComponent implements OnInit {

  @Input() education: Education;

  constructor() { }

  ngOnInit() {
  }

}
