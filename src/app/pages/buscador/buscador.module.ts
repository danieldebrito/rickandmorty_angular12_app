import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { BuscadorRoutingModule } from './buscador-routing.module';
import { BuscadorComponent } from './buscador.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    BuscadorComponent
  ],
  imports: [
    CommonModule,
    BuscadorRoutingModule,
    SharedModule,
    NgbNavModule
  ]
})
export class BuscadorModule { }
