import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
selector: 'app-farmaco',
standalone: true,
templateUrl: './farmaco.component.html',
styleUrls: ['./farmaco.component.css'],
imports:[FormsModule, CommonModule]
})
export class FarmacoComponent {
    @Output() confirmarAdministracionEvent = new EventEmitter<any>();
    farmacos: any[] = [{}];
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
        const administracion = this.farmacos[index];
        // Verificar si todos los campos están llenos antes de emitir el evento
        if (administracion.principioActivo && administracion.viaAdministracion && administracion.dosisInicial && administracion.unidad) {
            // Emitir el evento con la información de la administración
            this.confirmarAdministracionEvent.emit(administracion);
            console.log(administracion);
            // Eliminar la fila correspondiente en la tabla de fármacos
            this.eliminarAdministracion(index);
        } else {
            console.log("Por favor, complete todos los campos antes de confirmar la administración.");
        }
    }

  // Función para seleccionar un fármaco y asignar sus valores a la administración actual
    seleccionarFarmaco(farmaco: any) {
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
