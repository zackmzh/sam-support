/**
 * Created by ricomai on 8/7/17.
 */

import {Component,Input,Output,EventEmitter} from '@angular/core';
import {TypeDetail} from '../mock/type-detail-model';
import {Phones,TVs,Tablets,Refrigerators,Washers,ChromeDevices} from '../mock/mock-type-detail';

@Component({
  selector:'product-type',
  templateUrl:'./type-detail.component.html',
  styleUrls:['./type-detail.component.css']
})

export class ProductTypeComponent {
  @Input()
  typeNameP:string;

  @Output()
    OnValid:EventEmitter<boolean>=new EventEmitter<boolean>()

  Phones:TypeDetail[]=Phones;
  TVs:TypeDetail[]=TVs;
  Tablets:TypeDetail[]=Tablets;
  Refrigerators:TypeDetail[]=Refrigerators;
  Washers:TypeDetail[]=Washers;
  ChromeDevices:TypeDetail[]=ChromeDevices;


  // ngOnInit(){
  //   this.getType();
  // }

  Back():void{
    this.typeNameP=null;
    console.log(this.typeNameP);
    this.OnValid.emit(true);
  }

}

