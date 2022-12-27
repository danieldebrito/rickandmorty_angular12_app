import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComparadorRoutingModule } from './comparador-routing.module';
import { ComparadorComponent } from './comparador.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ComparadorComponent
  ],
  imports: [
    CommonModule,
    ComparadorRoutingModule,
    SharedModule
  ]
})
export class ComparadorModule { }
