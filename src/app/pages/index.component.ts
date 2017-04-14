import {Component, OnInit} from '@angular/core';

declare let $: any;

@Component({
  templateUrl: 'index.component.html'
})
export class IndexComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    $.AdminLTE.installDemo();
  }
}
