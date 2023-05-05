import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgForOf,
    AppRoutingModule,
    ScrollingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
