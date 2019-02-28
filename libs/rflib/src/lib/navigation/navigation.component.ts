import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'RF-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit  {


  possition = null;

  selectedprimarybg:String;
  
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
  }


  setPossition(possition)
  {
    this.possition = possition;
  };

  SelectedItem(details)
  {

    localStorage.setItem('primaryBg', details.primary);
    localStorage.setItem('accentBg', details.accent);

    this.selectedprimarybg = localStorage.getItem('primaryBg');
  };




}
