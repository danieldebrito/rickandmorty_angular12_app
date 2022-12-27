import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'buscador',
    loadChildren: ()=> import('./pages/buscador/buscador.module').then(m => m.BuscadorModule),
  },
  {
    path: 'comparador',
    loadChildren: ()=> import('./pages/comparador/comparador.module').then(m => m.ComparadorModule)
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
