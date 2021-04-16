import { Component, OnInit } from '@angular/core';
import { MensajeroService } from '../mensajero.service';
import { TareasService } from '../tareas.service';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-anadir-tareas',
  templateUrl: './anadir-tareas.component.html',
  styleUrls: ['./anadir-tareas.component.scss'],
})
export class AnadirTareasComponent implements OnInit {
  tareaPendienteDeAnadir: string;
  tareas: any;

  constructor(
    public tareasService: TareasService,
    public usuariosService: UsuariosService,
    private mensajero: MensajeroService
  ) {
    if (this.usuariosService.usuarioSeleccionado) {
      this.tareas = usuariosService.usuarioSeleccionado.tareas;
    } else {
      this.tareas = tareasService.tareas;
    }
  }

  ngOnInit(): void {}

  anadirTareaALaLista() {
    this.tareas.push(this.tareaPendienteDeAnadir);
    this.mensajero.mensaje(`Tarea creada: ${this.tareaPendienteDeAnadir}`);
    this.tareaPendienteDeAnadir = '';
  }

  anadirTareaUrgenteALaLista() {
    this.tareas.unshift(this.tareaPendienteDeAnadir);
    this.mensajero.mensaje(
      `Tarea urgente creada: ${this.tareaPendienteDeAnadir}`
    );
    this.tareaPendienteDeAnadir = '';
  }

  moverTareaAlFinalDeLaLista(index) {
    this.tareas.push(this.tareas[index]);
    this.mensajero.mensaje(
      `Tarea ${this.tareas.splice(index, 1)} movida al final de la lista`
    );
  }

  asignarTareaAUsuario(tarea, usuario) {
    this.usuariosService.usuarios
      .find((usr) => usr.nombre === usuario)
      .tareas.push(tarea);
  }
}
