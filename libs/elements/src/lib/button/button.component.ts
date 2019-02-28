import { Component, OnInit, ViewEncapsulation,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'RF-button',
  template: `
    <button click="handelClick()">{{label}}</button>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent implements OnInit {


  @Input() label:String;
  @Output() action = new EventEmitter();

  private totalClicks = 0;

  constructor() { }

  ngOnInit() {
  }

  handelClick()
  {
    this.totalClicks++;
    this.action.emit(this.totalClicks);
  };


}
