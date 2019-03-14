import { Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'RF-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit  {

  profilebg = {
    firstcolor: 'rgb(255, 64, 129)',
    secondcolor:'rgb(48, 63, 159)',
    colordegree:-90,
  };

  dataItems:Array<any> = [
    {primary:"rgb(48, 63, 159)",accent:"rgb(255, 64, 129)"},
    {primary:"rgb(25, 118, 210)",accent:"rgb(255, 82, 82)"},
    {primary:"rgb(56, 142, 60)",accent:"rgb(255, 82, 82)"},
    {primary:"rgb(175, 180, 43)",accent:"rgb(124, 77, 255)"},
    {primary:"rgb(245, 124, 0)",accent:"rgb(68, 138, 255)"},
    {primary:"rgb(0, 121, 107)",accent:"rgb(255, 171, 64)"},
  ];

  constructor() { }

  ngOnInit() {
    this.setupTheme();
  }

  setupTheme()
  {
    localStorage.getItem('primaryBg')?$("body").css("--primary", localStorage.getItem('primaryBg')):$("body").css("--primary", "rgb(48, 63, 159)");
    localStorage.getItem('accentBg')?$("body").css("--accent",localStorage.getItem('accentBg')): $("body").css("--accent","rgb(255, 64, 129)");
    localStorage.getItem('bgcolor1')? $("body").css("--bgcolor1",localStorage.getItem('bgcolor1')):  $("body").css("--bgcolor1",this.profilebg.firstcolor);
    localStorage.getItem('bgcolor2')? $("body").css("--bgcolor2",localStorage.getItem('bgcolor2')):  $("body").css("--bgcolor2",this.profilebg.secondcolor);
    localStorage.getItem('bgcolordeg')? $("body").css("--bgcolordeg",localStorage.getItem('bgcolordeg')):  $("body").css("--bgcolordeg",this.profilebg.colordegree+'deg');    
  }

  SelectedItem(details)
  {
    details.primary?localStorage.setItem('primaryBg', details.primary):'';
    details.accent?localStorage.setItem('accentBg', details.accent):'';
    details.firstcolor?localStorage.setItem('bgcolor1', details.firstcolor):'';
    details.secondcolor?localStorage.setItem('bgcolor2', details.secondcolor):'';
    details.colordegree?localStorage.setItem('bgcolordeg', details.colordegree+'deg'):'';
    this.setupTheme();
  };

}
