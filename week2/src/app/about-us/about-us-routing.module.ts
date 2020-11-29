import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutUsBannerComponent} from './about-us-banner/about-us-banner.component';

const routes: Routes = [{
  path: 'about-us',
  component: AboutUsBannerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
