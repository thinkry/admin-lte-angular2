import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  templateUrl: './dashboard1.component.html'
})
export class Dashboard1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    $.AdminLTE.installDashBoard1();
  }

}
