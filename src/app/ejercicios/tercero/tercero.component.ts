import { Component } from '@angular/core';

@Component({
  selector: 'app-tercero',
  templateUrl: './tercero.component.html',
  styleUrl: './tercero.component.css'
})
export class TerceroComponent {

  horasTrabajadas: number = 0;
  salarioTotal: number = 0;

  calcularSalario() {
    const salarioBase = 16; 
    const salarioExtra = 20;

    if (this.horasTrabajadas <= 40) {
      this.salarioTotal = this.horasTrabajadas * salarioBase;
    } else {
      const horasNormales = 40;
      const horasExtras = this.horasTrabajadas - horasNormales;

      this.salarioTotal = horasNormales * salarioBase + horasExtras * salarioExtra;
    }
  }
}
