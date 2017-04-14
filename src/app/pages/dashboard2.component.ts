import {Component, OnInit} from '@angular/core';

declare let $: any;

@Component({
  templateUrl: './dashboard2.component.html'
})
export class Dashboard2Component implements OnInit {

  constructor() {
  }

  ngOnInit() {
    $.AdminLTE.installDashBoard2();
  }
}
