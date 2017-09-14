import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-head',
  templateUrl: './route-head.component.html',
  styleUrls: ['./route-head.component.css']
})
export class RouteHeadComponent implements OnInit {

  tab = 1;

  setTab(num: number) {
    this.tab = num;
  }

  isSelected(num: number) {
    return this.tab === num;
  }

  constructor() { }

  ngOnInit() {
  }

}
