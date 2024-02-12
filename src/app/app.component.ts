import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TriageComponent } from './component/triage/triage.component';
import { FarmacoComponent } from './component/farmaco/farmaco.component';
import { TecnicaComponent } from './component/tecnica/tecnica.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TriageComponent, FarmacoComponent,TecnicaComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'caos';
}
