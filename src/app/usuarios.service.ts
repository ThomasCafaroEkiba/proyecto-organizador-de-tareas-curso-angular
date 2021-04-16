import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  usuarios: any[] = [];
  usuarioSeleccionado: any;

  constructor() {}
}
