/**
 * Created by ricomai on 8/3/17.
 */

import {Component,OnInit} from '@angular/core';
import {Mobiles, Computings,Cameraes,TvsHomeTheater,HomeApplications,Audios,SmartHomes}  from '../mock/mock-type';


@Component({
  selector:'catalog-browsing',
  templateUrl:'./catalog-browsing.component.html',
  styleUrls:['./catalog-browsing.component.css']
})

export class CatalogBrowsingComponent implements OnInit{
  check:boolean;
  mobiles:string[];
  computings:string[];
  cameras:string[];
  tv_home_theater:string[];
  home_applications:string[];
  audios:string[];
  smart_homes:string[];

  ngOnInit(){
    this.check=true;
    this.mobiles=Mobiles;
    this.computings=Computings;
    this.cameras=Cameraes;
    this.tv_home_theater=TvsHomeTheater;
    this.home_applications=HomeApplications;
    this.audios=Audios;
    this.smart_homes=SmartHomes;
  }


  show():void{
    this.check= !this.check;
  };

};

