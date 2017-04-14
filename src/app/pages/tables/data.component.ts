import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  templateUrl: './data.component.html'
})
export class DataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $("#example1").DataTable();
      $('#example2').DataTable({
        "paging": true,
        "lengthChange": false,
        "searching": false,
        "ordering": true,
        "info": true,
        "autoWidth": false
      });
  }
}
