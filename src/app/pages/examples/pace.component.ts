import { Component, OnInit } from '@angular/core';

declare let $: any;
declare let Pace: any;

@Component({
  templateUrl: './pace.component.html'
})
export class PaceComponent implements OnInit {

  code: string = '$(document).ajaxStart(function() { Pace.restart(); });';

  constructor() { }

  ngOnInit() {
    $(document).ajaxStart(function() { Pace.restart(); });
    $('.ajax').click(function(){
      $.ajax({url: '#', success: function(result){
        $('.ajax-content').html('<hr>Ajax Request Completed !');
      }});
    });
  }

}
