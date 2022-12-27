import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Episode } from 'src/app/class/episode';

@Component({
  selector: 'app-episodes-grid',
  templateUrl: './episodes-grid.component.html',
  styleUrls: ['./episodes-grid.component.css']
})
export class EpisodesGridComponent implements OnInit {

  @Input() filterEpisodes: Episode[];
  @Output() verEpisodioDetalle = new EventEmitter();
  public p: number = 1;  // paginacion primer page

  constructor() {
    this.filterEpisodes = [];
  }

  public verDetalleEpisodio(event: Episode) {
    this.verEpisodioDetalle.emit(event);
  }

  ngOnInit(): void { }
}
