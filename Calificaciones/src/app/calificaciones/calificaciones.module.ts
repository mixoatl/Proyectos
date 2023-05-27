import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalificacionesPageRoutingModule } from './calificaciones-routing.module';

import { CalificacionesPage } from './calificaciones.page';
import { DatosAlumnoComponent } from '../componente/datos-alumno/datos-alumno.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalificacionesPageRoutingModule
  ],
  declarations: [CalificacionesPage, DatosAlumnoComponent]
})
export class CalificacionesPageModule {}
