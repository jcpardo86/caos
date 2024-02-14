import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRegistro } from '../../interface/iregistro';



@Component({
  selector: 'app-filiacion',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './filiacion.component.html',
  styleUrl: './filiacion.component.css'
})
export class FiliacionComponent {
  datos: any = {};
  registros: any[] = [];

  grabarDatos() {
    // Agregar los datos al array de registros
    console.log('Datos a grabar:', this.datos);
    this.registros.push({...this.datos});
  
    // Limpiar los datos del formulario
    console.log('Datos grabados:', this.registros);
    this.datos = {};
  }
  
}