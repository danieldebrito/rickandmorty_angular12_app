import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComparadorComponent } from './comparador.component';

const routes: Routes = [
  { path: '', component: ComparadorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComparadorRoutingModule { }
