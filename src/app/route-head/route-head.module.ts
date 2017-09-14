import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabComponentComponent } from './tab-component/tab-component.component';
import { TabContentComponentComponent } from './tab-content-component/tab-content-component.component';
import { RouteHeadComponent } from './route-head.component';

import { ClickedDirective } from './clicked.directive';
import { FindASolutionComponent } from './find-a-solution/find-a-solution.component';
import { AllServiceComponent } from './find-a-solution/all-service/all-service.component';
import { ProductSelectComponent } from './find-a-solution/product-select/product-select.component';
import { GetToKnowYourProductComponent } from './get-to-know-your-product/get-to-know-your-product.component';
import { CatalogBrowsingComponent } from './get-to-know-your-product/catalogBrowsing/catalogBrowsing.component';
import { PremiumCareComponent } from './get-to-know-your-product/premium_care/premium_care.component';
import { TypeBrowsingComponent } from './get-to-know-your-product/typeBrowsing/typeBrowsing.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TabComponentComponent,
    TabContentComponentComponent,
    RouteHeadComponent,
    ClickedDirective,
    FindASolutionComponent,
    AllServiceComponent,
    ProductSelectComponent,
    GetToKnowYourProductComponent,
    CatalogBrowsingComponent,
    PremiumCareComponent,
    TypeBrowsingComponent
  ],
  exports: [
    RouteHeadComponent,
    ClickedDirective
  ]
})
export class RouteHeadModule { }
