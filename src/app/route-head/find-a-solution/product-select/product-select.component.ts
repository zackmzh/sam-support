import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-product-select',
  templateUrl: './product-select.component.html',
  styleUrls: ['./product-select.component.css']
})
export class ProductSelectComponent implements OnChanges {
  @Input() selectedProduct;
  @Input() status;
  @Output() whole_status = new EventEmitter<boolean>();
  allProducts = false;


  products = [
    {title: 'Phones', 'url': "http://s7d2.scene7.com/is/image/SamsungUS/Galaxy_S8_294x294-1"},
    {title: 'TVs', 'url': "http://s7d2.scene7.com/is/image/SamsungUS/qled_294x294"},
    {title: 'Refrigerators', 'url': "http://s7d2.scene7.com/is/image/SamsungUS/refrigerator21"},
    {title: 'Washers', 'url': "http://s7d2.scene7.com/is/image/SamsungUS/washers"},
    {title: 'Tablets', 'url': "http://s7d2.scene7.com/is/image/SamsungUS/tablets"},
    {title: 'Chrome Device', 'url': "http://s7d2.scene7.com/is/image/SamsungUS/chrome-devices"}
  ];

  AllProducts = [
    {title: 'MOBILE', contentList:[
      {name: 'Phones', url: 'www.samsung.com//us/support/mobile/phones'},
      {name: 'Tablets', url:'www.samsung.com//us/support/mobile/tablets'},
      {name: 'Wearables', url: 'www.samsung.com//us/support/mobile/phones'},
      {name: 'Virtual Reality', url: 'www.samsung.com//us/support/mobile/phones'},
      {name: 'Mobile Accessories', url: 'www.samsung.com//us/support/mobile/phones'}]
    },
    {
    }
  ];

  showAllProducts() {
    this.allProducts = true;
  }


  ngOnChanges() {
    console.log(this.status);
  }

  back() {
    this.whole_status.emit(true);
    this.status = null;
    console.log(this.status);
  }
  constructor() { }


  ngOnInit() {
  }

}
