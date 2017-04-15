import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('body').attr('class', 'hold-transition register-page');
    $('input').iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%' // optional
    });
  }

}
