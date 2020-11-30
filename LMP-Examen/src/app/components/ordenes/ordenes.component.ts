import { Component, OnInit } from '@angular/core';
import {CookieService}from 'ngx-cookie-service';
import{Router}from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {
  platillo:'';
  bebida:'';
  mesa:'';
  
  agregar(){
    this.cookie.set("Platillo",this.platillo);
    this.cookie.set("Bebida",this.bebida);
    this.cookie.set("Mesa",this.mesa);
    
    if(this.cookie.get("Mesa")=='0'||this.cookie.get("Mesa")=="1"||this.cookie.get("Mesa")=='2'||this.cookie.get("Mesa")=='3'||this.cookie.get("Mesa")=='4'||this.cookie.get("Mesa")=='5'||this.cookie.get("Mesa")=='6'||this.cookie.get("Mesa")=='7'||this.cookie.get("Mesa")=='8'||this.cookie.get("Mesa")=='9'){
      alert("Orden Agregada para la mesa: "+this.cookie.get("Mesa")+"");
    }else{
      console.error(this.mesa);
      console.error(this.platillo);
      console.error(this.bebida);
      alert("FAVOR DE REVISAR LOS DATOS MESA SOLO INTRODUCIR EL NUMERO DE ESTA");
      this.cookie.delete("Platillo");
      this.cookie.delete("Bebida");
      this.cookie.delete("Mesa");
    }


      /*if(this.cookie.get("Mesa")==null&&(this.cookie.get("Platillo")==''||this.cookie.get("Bebida")=='')){
      console.error(( this.mesa));
      this.cookie.delete("Platillo");
      alert("error vuelta introducir los datos favor de solo poner numeros en mesa, nombre de platillo u bebida");
      }else{
      alert("Orden Agregada para la mesa:"+this.cookie.get("Mesa")+"");   
       }*/
    
    

  }
  ordenes(){
    alert("ORDEN PENDIENTE:"+this.cookie.get("Platillo")+" "+this.cookie.get("Bebida")+" EN LA MESA "+this.cookie.get("Mesa")+"  ")
  }
  eliminar(){
    alert("ORDEN ELMINADA:");
    this.cookie.delete("Platillo");
    this.cookie.delete("Bebida");
    this.cookie.delete("Mesa");
  }


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
