import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{CookieService}from 'ngx-cookie-service';
import{FormsModule}from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
