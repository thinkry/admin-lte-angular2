import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-print',
  templateUrl: './invoice-print.component.html',
  styles: []
})
export class InvoicePrintComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.print();
  }

}
