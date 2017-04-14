import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from "./app-routing.module";
import {PublicModule} from "./public/public.module";

import {AppComponent} from './app.component';
import {IndexComponent} from './pages/index.component';
import {SimpleComponent} from './pages/tables/simple.component';
import {Dashboard2Component} from './pages/dashboard2.component';
import { Dashboard1Component } from './pages/dashboard1.component';
import { DataComponent } from './pages/tables/data.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SimpleComponent,
    Dashboard2Component,
    Dashboard1Component,
    DataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PublicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
