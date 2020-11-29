import { Component, OnInit } from '@angular/core';
import{CookieService}from 'ngx-cookie-service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
 
  nombre:'';
  edad:'';
  correo:'';

  agregar(){

      console.log("Agregando Datos...")

    this.cookieSvc.set("nombre",this.nombre);
    this.cookieSvc.set("edad",this.edad);
    this.cookieSvc.set("correo",this.correo);

    alert("Registro Agregado("+ this.cookieSvc.get("nombre")+")");
   }
   leer(){
    alert("Registro Guardado:   Nombre:"+this.cookieSvc.get("nombre")+"   Edad:"+this.cookieSvc.get("edad")+"   Correo:"+this.cookieSvc.get("correo")+"  ");
   }
   eliminar(){
     alert("Registro Eliminado")
    this.cookieSvc.delete("nombre");
    this.cookieSvc.delete("edad");
    this.cookieSvc.delete("correo")
   }

   constructor(private cookieSvc:CookieService) {
  }
   ngOnInit(): void {
  }
}
