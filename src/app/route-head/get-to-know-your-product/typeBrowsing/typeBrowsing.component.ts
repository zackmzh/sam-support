/**
 * Created by ricomai on 8/2/17.
 */

import {Component} from '@angular/core';

@Component({
  selector:'type-browsing',
  templateUrl:'./typeBrowsing.component.html',
  styleUrls:['./typeBrowsing.component.css']
})

export class TypeBrowsingComponent {

   phonePicUrl='./../assets/pics/cellphone/phone_Galaxy_S8_294x294-2.jpg';
   tvPicUrl='./../assets/pics/tv/tv_full-hd-tv.jpg';
   refrigeratorPicUrl='./../assets/pics/refrigerator/refrigerator_4-door-flex.jpg';
   washerPicUrl='./../assets/pics/washer/washer_2-in-1-washers.jpg';
   tabletPicUrl='./../assets/pics/tablets/tablets_all-other-tablets.jpg';
   chromeDevicePicUrl='./../assets/pics/chrome_device/chromeDevice_chromebook.jpg';

   typeName:any;
   valid:boolean=true;

  select(type:string):void{
    this.typeName=type;
    console.log(this.typeName);
    this.valid=!this.valid;
  }

  OnValid(valid):void{
    this.valid=valid;
    this.typeName = !valid;
  }
}
