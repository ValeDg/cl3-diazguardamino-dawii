import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrl: './segundo.component.css'
})
export class SegundoComponent {
  precioUnitario: number = 0;
  cantidadAdquirida: number = 0;
  precioFinal: number = 0;

  calcularPrecioFinal() {
    if (this.cantidadAdquirida > 20) {
      this.precioFinal = this.precioUnitario * this.cantidadAdquirida * 0.9; 
    } else if (this.cantidadAdquirida > 10) {
      this.precioFinal = this.precioUnitario * this.cantidadAdquirida * 0.95;
    } else {
      this.precioFinal = this.precioUnitario * this.cantidadAdquirida; 
    }
  }

}
