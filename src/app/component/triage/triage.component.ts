import { Component } from '@angular/core';

@Component({
  selector: 'app-triage',
  standalone: true,
  imports: [],
  templateUrl: './triage.component.html',
  styleUrl: './triage.component.css'
})
export class TriageComponent {
  redInfoVisible: boolean = false;
  yellowInfoVisible: boolean = false;
  greenInfoVisible: boolean = false;
  blackInfoVisible: boolean = false;
  selectedColor: string = '';
  isCAPSelected: boolean = false;
  selectedPriority: string = ''; // Variable para almacenar la prioridad seleccionada
  isPrioritySelected: boolean = false; // Variable para almacenar si se ha seleccionado una prioridad Q



  constructor() {}

  toggleInfo(color: string): void {
    switch (color) {
      case 'red':
        this.redInfoVisible = !this.redInfoVisible;
        break;
      case 'yellow':
        this.yellowInfoVisible = !this.yellowInfoVisible;
        break;
      case 'green':
        this.greenInfoVisible = !this.greenInfoVisible;
        break;
      case 'black':
        this.blackInfoVisible = !this.blackInfoVisible;
        break;
      default:
        break;
    }
  }
   // Función para manejar la selección del color
  selectColor(color: string) {
    this.selectedColor = color; // Almacenar el color seleccionado en la variable
    console.log('Color seleccionado:', this.selectedColor); // Puedes hacer cualquier otra lógica aquí
  }
  selectPriority(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.isPrioritySelected = !!target.value; // Verificar si se ha seleccionado una opción
    console.log('Prioridad seleccionada:', target.value);
  }
// Función para manejar la selección de CAP
  toggleCAP(event: Event) {
    const target = event.target as HTMLInputElement;
    this.isCAPSelected = target.checked; // Almacenar si CAP está seleccionado
    console.log('CAP seleccionado:', this.isCAPSelected);
  }
}
