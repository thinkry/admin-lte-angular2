import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('body').attr('class', 'hold-transition login-page');
    $('input').iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%' // optional
    });
  }

}
