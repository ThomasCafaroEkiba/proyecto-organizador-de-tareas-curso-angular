import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MensajeroService } from '../mensajero.service';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-crear-usuarios',
  templateUrl: './crear-usuarios.component.html',
  styleUrls: ['./crear-usuarios.component.scss'],
})
export class CrearUsuariosComponent implements OnInit {
  usuarioPendienteDeAnadir: any;

  constructor(
    public usuariosService: UsuariosService,
    private mensajero: MensajeroService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  crearUsuario() {
    this.usuariosService.usuarios.push({
      nombre: this.usuarioPendienteDeAnadir,
      tareas: [],
    });
    this.mensajero.mensaje(`Usuario creado: ${this.usuarioPendienteDeAnadir}`);
    this.usuarioPendienteDeAnadir = '';
  }

  verFichaDeUsuario(usuario) {
    this.usuariosService.usuarioSeleccionado = usuario;
    this.router.navigate(['/usuario']);
  }
}
