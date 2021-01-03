import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SreshthaComponent} from './sreshtha/sreshtha.component';
import {BishnuComponent} from './bishnu/bishnu.component';
import {DeepComponent} from './deep/deep.component';

@NgModule({
  declarations: [
    AppComponent,
    SreshthaComponent,
    BishnuComponent,
    DeepComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
