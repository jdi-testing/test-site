import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatListModule,
  ],
  declarations: [AppComponent],
  bootstrap:  [AppComponent],
  providers: [
     { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class AppModule {}
