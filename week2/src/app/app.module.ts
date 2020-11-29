import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {AppRoutingModule} from './app-routing.module';
import {AboutUsModule} from './about-us/about-us.module';
import {AboutUsRoutingModule} from './about-us/about-us-routing.module';
import {HomeRoutingModule} from './home/home-routing.module';
import {HomeModule} from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactUsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AboutUsRoutingModule,
        HomeRoutingModule,
        AboutUsModule,
        HomeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
