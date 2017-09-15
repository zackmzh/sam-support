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
import { SubCatalogBrowsingComponent } from './get-to-know-your-product/sub-catalog-browsing/sub-catalog-browsing.component';
import {SupportDetailComponent} from "./get-to-know-your-product/support-detail/support-detail.component";
import {ProductTypeComponent} from "./get-to-know-your-product/type-detail/product-type.component";
import { ContactUsForSupportComponent } from './contact-us-for-support/contact-us-for-support.component';
import { ContactInfoComponent } from './contact-us-for-support/contact-info/contact-info.component';
import { SupportSectionComponent } from './contact-us-for-support/support-section/support-section.component';

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
    TypeBrowsingComponent,
    SubCatalogBrowsingComponent,
    SupportDetailComponent,
    ProductTypeComponent,
    ContactUsForSupportComponent,
    ContactInfoComponent,
    SupportSectionComponent
  ],
  exports: [
    RouteHeadComponent,
    ClickedDirective
  ]
})
export class RouteHeadModule { }
