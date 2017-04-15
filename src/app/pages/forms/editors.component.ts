import { Component, OnInit } from '@angular/core';

declare let CKEDITOR: any;
declare let $: any;

@Component({
  templateUrl: './editors.component.html'
})
export class EditorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Replace the <textarea id="editor1"> with a CKEditor
    // instance, using default configuration.
    CKEDITOR.replace('editor1');

    //bootstrap WYSIHTML5 - text editor
    $(".textarea").wysihtml5();
  }

}
