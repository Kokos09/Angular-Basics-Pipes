import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string = 'fernando';
  nombreUpper: string = 'fernando';
  nombreComplete: string = 'fernando';


  fecha: Date = new Date();


}
