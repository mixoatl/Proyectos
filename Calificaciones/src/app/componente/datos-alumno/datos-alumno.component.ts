import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Calificacion } from 'src/app/interface/calificacion';

@Component({
  selector: 'app-datos-alumno',
  
  templateUrl: './datos-alumno.component.html',
  styleUrls: ['./datos-alumno.component.scss'],
})
export class DatosAlumnoComponent implements OnInit {
  
  @Input() calificacionList:Calificacion[] =[];
  @Output() eliminar: any = new EventEmitter<Calificacion[]>();
  @Output() editar:  any = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

}