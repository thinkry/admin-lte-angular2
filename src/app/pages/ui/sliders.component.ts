import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  templateUrl: './sliders.component.html'
})
export class SlidersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.AdminLTE.installSliders();
  }

}
