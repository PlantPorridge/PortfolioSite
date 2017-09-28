import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-format-pipe-demo',
  templateUrl: './format-pipe-demo.component.html',
  styleUrls: ['./format-pipe-demo.component.css']
})
export class FormatPipeDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.selectedValue = "0";
    this.selectedPrecision = 0;
    this.selectedCode = this.formatCodes[0];
  }
  
  selectedValue: string;
  selectedPrecision: number;
  selectedCode: string;
  formatCodes = ['n','p','c','g','G','f','e','E','d','r','R','x','X'];
  precisionSpecifiers = [null, '0', '3', '5'];
  numericValues = [0, 1234, 12.34, 0.1234];
  


}
