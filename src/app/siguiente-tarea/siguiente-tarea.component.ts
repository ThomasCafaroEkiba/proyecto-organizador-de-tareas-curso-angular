import { Component, OnInit } from '@angular/core';
import { TareasService } from '../tareas.service';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-siguiente-tarea',
  templateUrl: './siguiente-tarea.component.html',
  styleUrls: ['./siguiente-tarea.component.scss'],
})
export class SiguienteTareaComponent implements OnInit {
  tareas: any;
  constructor(
    public tareasService: TareasService,
    private usuariosService: UsuariosService
  ) {
    if (this.usuariosService.usuarioSeleccionado) {
      this.tareas = usuariosService.usuarioSeleccionado.tareas;
    } else {
      this.tareas = tareasService.tareas;
    }
  }

  ngOnInit(): void {}
}
