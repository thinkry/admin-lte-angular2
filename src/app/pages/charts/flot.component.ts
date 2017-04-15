import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  templateUrl: './flot.component.html'
})
export class FlotComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.AdminLTE.installFlot();
  }

}
