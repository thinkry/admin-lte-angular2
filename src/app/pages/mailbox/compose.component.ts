import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  templateUrl: './compose.component.html'
})
export class ComposeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#compose-textarea").wysihtml5();
  }

}
