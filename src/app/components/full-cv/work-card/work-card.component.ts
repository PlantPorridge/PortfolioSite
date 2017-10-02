import { Component, OnInit, Input } from '@angular/core';
import { Work } from '../../../models/full-cv/work/work.model';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.css'],
  host: {'class': 'card'}  
})
export class WorkCardComponent implements OnInit {

  @Input() work: Work;

  constructor() { }

  ngOnInit() {
  }

}
