import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'RF-counts-dash',
  templateUrl: './counts-dash.component.html',
  styleUrls: ['./counts-dash.component.scss']
})
export class CountsDashComponent implements OnInit {

  selectedaccentbg = "";

  

  constructor() { }

  ngOnInit() {
    $('.float').css('display','block');
    if(localStorage.getItem('accentBg'))
    {
      this.selectedaccentbg = localStorage.getItem('accentBg');
    }
    else
    {
      this.selectedaccentbg = "rgb(48, 63, 159)";
    }
  
  }

}
