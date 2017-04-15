import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  templateUrl: './inline.component.html'
})
export class InlineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.AdminLTE.installInline();
  }

}
