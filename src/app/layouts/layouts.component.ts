import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent implements OnInit {

  headImg_url: string ;
  constructor() {
    this.headImg_url = './../../assets/pics/layout_head.png';
  }

  ngOnInit() {
  }

}
