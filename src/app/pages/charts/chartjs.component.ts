import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  templateUrl: 'chartjs.component.html'
})
export class ChartjsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.AdminLTE.installChartjs();
  }

}
