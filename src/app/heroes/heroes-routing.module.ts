import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListarComponent } from './pages/listar/listar.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { VerHeroeComponent } from './pages/ver-heroe/ver-heroe.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '',
    component: HomeComponent,
    children: [
      { path: 'listar', component: ListarComponent },
      { path:'agregar', component: AgregarComponent },
      { path:'editar/:id', component: AgregarComponent },
      { path:'buscar', component: BuscarComponent },
      { path: ':id', component: VerHeroeComponent},
      { path: '**', redirectTo: 'listar' }
    ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
