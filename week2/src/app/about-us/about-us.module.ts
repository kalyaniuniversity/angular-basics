import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsBannerComponent } from './about-us-banner/about-us-banner.component';


@NgModule({
  declarations: [AboutUsBannerComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }
