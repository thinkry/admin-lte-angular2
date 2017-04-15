import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  templateUrl: './calendar.component.html'
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.AdminLTE.installCalendar();
  }

}
