import { Component, OnInit} from '@angular/core';
import { Router, Event, ActivationEnd, NavigationEnd } from "@angular/router";
import { filter, map, buffer, pluck } from "rxjs/operators";
import * as $ from 'jquery';


@Component({
  selector: 'RF-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit  {

 
  selectedprimarybg :string;
  selectedaccentBg :string;
  possition = null;
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
            if(localStorage.getItem('primaryBg'))
            {
              this.selectedprimarybg = localStorage.getItem('primaryBg');
            }
            else
            {
              this.selectedprimarybg = "rgb(48, 63, 159)";
            }

            if(localStorage.getItem('accentBg'))
            {
              this.selectedaccentBg = localStorage.getItem('accentBg');
            }
            else
            {
              this.selectedaccentBg = "rgb(255, 64, 129)";
            }
            
            $("body").css("--accent",this.selectedaccentBg);
            $("body").css("--primary", this.selectedprimarybg);
  }


            setPossition(possition)
            {
              this.possition = possition;
            };

            SelectedItem(details)
            {
              localStorage.setItem('primaryBg', details.primary);
              localStorage.setItem('accentBg', details.accent);
              $("body").css("--accent",details.accent);
              $("body").css("--primary", details.primary);   
            };




}
