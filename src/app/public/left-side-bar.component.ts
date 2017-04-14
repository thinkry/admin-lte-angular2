import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html'
})
export class LeftSideBarComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onSimple() {
    this.router.navigate(['table/simple']);
  }
}
