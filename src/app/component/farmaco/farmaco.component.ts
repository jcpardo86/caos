import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-farmaco',
  standalone: true,
  templateUrl: './farmaco.component.html',
  styleUrls: ['./farmaco.component.css'],
  imports:[FormsModule, CommonModule]
})
export class FarmacoComponent {
  farmacos: any[] = [];
  administracion: string = '';
  viaAdministracion: string = '';

  farmaco = [
    {
      principioActivo: 'Paracetamol',
      viaAdministracion: [
        'Oral',
        'Intravenosa'
      ],
      dosisInicial: '500',
      unidad: [
        'mg',
        'g'
      ]
    },
    {
      principioActivo: 'Ibuprofeno',
      viaAdministracion: [
        'Oral',
        'Intravenosa'
      ],
      dosisInicial: '400',
      unidad: [
        'mg',
        'g'
      ]
    },
    {
      principioActivo: 'Omeprazol',
      viaAdministracion: [
        'Oral',
        'Intravenosa'
      ],
      dosisInicial: '20',
      unidad: [
        'mg',
        'g'
      ]
    },
    {
      principioActivo: 'Metoclopramida',
      viaAdministracion: [
        'Oral',
        'Intravenosa'
      ],
      dosisInicial: '10',
      unidad: [
        'mg',
        'g'
      ]
    }
  ];

  // Función para agregar una nueva administración de fármaco
  agregarAdministracion() {
    this.farmacos.push({
      principioActivo: '',
      viaAdministracion: '',
      dosisInicial: '',
      unidad: ''
    });
  }

  // Función para confirmar la administración de un fármaco
  confirmarAdministracion(index: number) {
    // Lógica para mostrar la hora exacta de la administración (pendiente de implementar)
    console.log('Administración confirmada: ', new Date());
  }

  // Función para seleccionar un fármaco y asignar sus valores a la administración actual
  seleccionarFarmaco(farmaco: any) {
    console.log("Principio activo seleccionado:", farmaco.principioActivo);
    // Asignar el principio activo seleccionado a la administración actual
    this.administracion = farmaco.principioActivo;
    // Buscar el principio activo seleccionado en el array farmaco y asignar los valores correspondientes
    const farmacoSeleccionado = this.farmaco.find(f => f.principioActivo === farmaco.principioActivo);
    if (farmacoSeleccionado) {
      const viaAdmin = farmacoSeleccionado.viaAdministracion[0]; // Aquí seleccionamos la primera opción por defecto
      const dosisInicial = farmacoSeleccionado.dosisInicial;
      const unidad = farmacoSeleccionado.unidad[0];
      this.farmacos.forEach(admin => {
        if (admin.principioActivo === farmaco.principioActivo) {
          admin.viaAdministracion = viaAdmin;
          admin.dosisInicial = dosisInicial;
          admin.unidad = unidad;
        }
      });
    }
  }
  eliminarAdministracion(index:number){
    this.farmacos.splice(index, 1); // Elimina el elemento en el índice especificado
  }
}
