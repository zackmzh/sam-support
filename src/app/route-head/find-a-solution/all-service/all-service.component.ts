import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-service',
  templateUrl: './all-service.component.html',
  styleUrls: ['./all-service.component.css']
})
export class AllServiceComponent implements OnInit {

  whole_container = true;
  default = 'test';
  sub_product_list = false;

  services = [
    'Audio & Sound', 'Data & Backup', 'Display or Screen', 'Features & Specs', 'How to', 'Maintenance', 'Network & Connectivity',
    'Parts & Accessories', 'Ports & Connection', 'Power & Battary', 'Software & Apps', 'Syncing & Transferring'
  ];

  edit(text) {
    this.whole_container = !this.whole_container;
    this.default = text;
    this.sub_product_list = true;
    console.log(this.default);
  }

  show(event) {
    this.whole_container = event;
    this.sub_product_list = !event;
  }

  constructor() { }

  ngOnInit() {
  }

}
