import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import{Router}from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  navmenu(){
    this.router.navigate(['/menu']);
  }
  navordenes(){
    this.router.navigate(['/ordenes']);
  }

  constructor(private cookie:CookieService, private router:Router) { }

  ngOnInit(): void {
  }

}
