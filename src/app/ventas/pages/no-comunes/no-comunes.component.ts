import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

    //i18nPlural
    clientes:string[]=['Maria','Juana','Fany','Eduardo'];
    clientesMapa={
      '=0':'no tenemos ningun cliente',
      '=1':'tenemos un cliente esperando',
      'other':'tenemos # de un clinete esperando'
    }
    //i18nSlect
    nombre:string="Susana";
    genero:string='femenino';
    invitacionMap={
      'masculino':'invitarlo',
      'femenino':'invitarla'
    }
    cambiarCliente(){
      this.nombre='Melissa';
      this.genero='femenino'
    }
    borrarCliente(){
      this.clientes.pop();
    } 
    persona={
      nombre:'Maria',
      edad:89,
      direccion:'Ottawa, Canada'
    }
}
