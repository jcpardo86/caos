// registro.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  standalone: true,
  imports: [CommonModule]
})

export class RegistroComponent implements OnInit {
@Input() registros:any[] = []

  constructor() { }

  ngOnInit(): void {
  }

  organizarEvento(info: any): string {
    // Organizar la información en un string separado por espacios
    const principioActivo = info.principioActivo;
    const viaAdministracion = info.viaAdministracion;
    const dosisInicial = info.dosisInicial;
    const unidad = info.unidad;

    return `${principioActivo} - ${viaAdministracion} - ${dosisInicial} ${unidad}`;
  }
  imprimirRegistros() {
    console.log("Registros:", this.registros);
  }
  agregarRegistro(info: any) {
    const horaActual = new Date().toLocaleTimeString();
    const evento = this.organizarEvento(info);
    const accion = 'Fármaco';
    const realizada = horaActual;

    const registro = { evento, accion, realizada };
    this.registros.push(registro);
    console.log('REGISTRO confirmado: ', this.registros[this.registros.length - 1]);
  }
}