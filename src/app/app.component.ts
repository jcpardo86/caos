import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TriageComponent } from './component/triage/triage.component';
import { FarmacoComponent } from './component/farmaco/farmaco.component';
import { TecnicaComponent } from './component/tecnica/tecnica.component';
import { CommonModule } from '@angular/common';
import { FiliacionComponent } from './component/filiacion/filiacion.component';
import { RegistroComponent } from './component/registro/registro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TriageComponent, FarmacoComponent,TecnicaComponent, CommonModule, FiliacionComponent, RegistroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'caos';
  registros: any[] = [];

  manejarConfirmacionAdministracion(administracion: any) {
    this.registros.push(administracion);
  }

}
