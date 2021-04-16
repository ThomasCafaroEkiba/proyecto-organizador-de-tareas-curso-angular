import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AnadirTareasComponent } from './anadir-tareas/anadir-tareas.component';
import { SiguienteTareaComponent } from './siguiente-tarea/siguiente-tarea.component';
import { CrearUsuariosComponent } from './crear-usuarios/crear-usuarios.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { TareasComponent } from './tareas/tareas.component';

@NgModule({
  declarations: [AppComponent, AnadirTareasComponent, SiguienteTareaComponent, CrearUsuariosComponent, UsuarioComponent, TareasComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
