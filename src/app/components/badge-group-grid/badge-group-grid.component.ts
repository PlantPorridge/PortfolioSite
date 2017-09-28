import { Component, OnInit, Input } from '@angular/core';
import { BadgeGroup } from '../../models/badge-group/badge-group.model';

@Component({
  selector: 'app-badge-group-grid',
  templateUrl: './badge-group-grid.component.html',
  styleUrls: ['./badge-group-grid.component.css']
})
export class BadgeGroupGridComponent implements OnInit {

  @Input() badgeGroups: BadgeGroup[]

  constructor() { }

  ngOnInit() {
    console.log(this.badgeGroups);
  }

}
