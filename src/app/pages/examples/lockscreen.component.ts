import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  templateUrl: './lockscreen.component.html'
})
export class LockscreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('body').attr('class', 'hold-transition lockscreen');
  }

}
