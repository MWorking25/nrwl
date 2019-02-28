import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'RF-analyts-dash',
  templateUrl: './analyts-dash.component.html',
  styleUrls: ['./analyts-dash.component.scss']
})
export class AnalytsDashComponent implements OnInit {

  accentbg : String = "rgb(255, 64, 129)";
  numbers = [1,2,3,4,5,6,7,8]

  constructor() { }

  ngOnInit() {
    this.accentbg = localStorage.getItem('accentBg');
  }

  
 
  

}
