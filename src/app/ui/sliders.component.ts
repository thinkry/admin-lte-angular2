import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  templateUrl: './sliders.component.html'
})
export class SlidersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // 这里用到的slider库和jQueryUI有冲突，导致页面下面部分显示不出来
    // 去掉jQueryUI就ok了，这里暂不解决
    $.AdminLTE.installSliders();
  }

}
