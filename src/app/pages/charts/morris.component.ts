import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  templateUrl: './morris.component.html'
})
export class MorrisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.AdminLTE.installMorris();
  }

}
