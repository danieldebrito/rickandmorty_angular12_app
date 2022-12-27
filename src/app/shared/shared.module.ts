import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { EpisodesGridComponent } from './episodes-grid/episodes-grid.component';
import { EpisodesBarComponent } from './episodes-bar/episodes-bar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EpisodeCardComponent } from './episode-card/episode-card.component';
import { CharactersGridComponent } from './characters-grid/characters-grid.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharactersBarComponent } from './characters-bar/characters-bar.component';
import { LocationCardComponent } from './location-card/location-card.component';
import { LocationsGridComponent } from './locations-grid/locations-grid.component';
import { LocationsBarComponent } from './locations-bar/locations-bar.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { EpisodeDetalleComponent } from './episode-detalle/episode-detalle.component';
import { CharacterItemComponent } from './character-item/character-item.component';
import {MatCardModule} from '@angular/material/card'; 


@NgModule({
  declarations: [
    EpisodesGridComponent,
    EpisodesBarComponent,
    EpisodeCardComponent,
    EpisodeDetalleComponent,
    CharactersGridComponent,
    CharacterCardComponent,
    CharactersBarComponent,
    LocationCardComponent,
    LocationsGridComponent,
    LocationsBarComponent,
    CharacterItemComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    NgbPaginationModule,
    MatCardModule
  ],
  exports: [
    EpisodesGridComponent,
    EpisodesBarComponent,
    EpisodeCardComponent,
    EpisodeDetalleComponent,
    CharactersGridComponent,
    CharacterCardComponent,
    CharactersBarComponent,
    LocationCardComponent,
    LocationsGridComponent,
    LocationsBarComponent,
    CharacterItemComponent
  ]
})
export class SharedModule { }
