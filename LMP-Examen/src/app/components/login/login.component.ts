import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import{Router}from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:'';
  contrasena:'';

  constructor(private cookie:CookieService, private router:Router) { }


  login(){
    this.cookie.set("usuario",this.usuario);
    this.cookie.set("contrasena",this.contrasena);
    if(this.cookie.get("usuario")==this.cookie.get("usu1")&& this.cookie.get("contrasena")==this.cookie.get("contra1")){
      this.router.navigate(['/menu']);
    }else{
      alert("Contraseña Erronea, El Usuario u Contraseña no coinciden");
    }
  }
  navmenu(){
    this.router.navigate(['/menu']);
  }

  ngOnInit(): void {
    this.cookie.set("usu1","mesero1");
    this.cookie.set("contra1","mesero1");
  }

}
