import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {CookieService}from 'ngx-cookie-service';
import{FormsModule}from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { OrdenesComponent } from './components/ordenes/ordenes.component';
import { MenuComponent } from './components/menu/menu.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrdenesComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
