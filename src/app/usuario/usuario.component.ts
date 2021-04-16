import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {
  constructor(
    public usuariosService: UsuariosService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  volver() {
    this.usuariosService.usuarioSeleccionado = null;
    this.router.navigate(['/tareas']);
  }
}
