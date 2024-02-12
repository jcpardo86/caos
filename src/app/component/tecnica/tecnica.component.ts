import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tecnica',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tecnica.component.html',
  styleUrls: ['./tecnica.component.css'] // Corrección: 'styleUrls' en lugar de 'styleUrl'
})
export class TecnicaComponent {
  tecnicas: any[] = [];

  // Definir el array de técnicas
  tecnica = [
    {
      nombreTecnica: 'Técnica 1',
      detalle: 'Detalle de la Técnica 1'
    },
    {
      nombreTecnica: 'Técnica 2',
      detalle: 'Detalle de la Técnica 2'
    },
    {
      nombreTecnica: 'Técnica 3',
      detalle: 'Detalle de la Técnica 3'
    }
    // Agrega más técnicas según sea necesario
  ];

  constructor() {
    this.agregarTecnica(); // Agrega una técnica inicialmente
  }

  // Función para agregar una nueva técnica
  agregarTecnica() {
    this.tecnicas.push({
      nombreTecnica: '',
      detalle: ''
    });
  }

  // Función para confirmar la técnica seleccionada
  confirmarTecnica(index: number) {
    console.log('Técnica confirmada: ', this.tecnicas[index]);
  }

  // Función para seleccionar una técnica y actualizar el detalle correspondiente
  seleccionarTecnica(index: number) {
    const selectedTecnica = this.tecnicas[index].nombreTecnica;
    const matchingTecnica = this.tecnica.find(t => t.nombreTecnica === selectedTecnica);
    if (matchingTecnica) {
      this.tecnicas[index].detalle = matchingTecnica.detalle;
    }
  }
  eliminarTecnica(index: number) {
    this.tecnicas.splice(index, 1);
  }
}