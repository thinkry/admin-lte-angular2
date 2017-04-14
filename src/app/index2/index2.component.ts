import {Component, OnInit} from '@angular/core';

declare let $: any;

@Component({
  templateUrl: './index2.component.html',
  styleUrls: ['./index2.component.css']
})
export class Index2Component implements OnInit {

  constructor() {
  }

  ngOnInit() {
    $.AdminLTE.installDemo();
  }
}
