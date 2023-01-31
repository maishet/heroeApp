import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { VerHeroeComponent } from './pages/ver-heroe/ver-heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListarComponent } from './pages/listar/listar.component';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    VerHeroeComponent,
    HomeComponent,
    ListarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
