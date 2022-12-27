import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Episode } from 'src/app/class/episode';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.css'],
})
export class EpisodeCardComponent implements OnInit {
  
  @Input() episode: Episode;
  @Input() verMasInfo: Boolean;
  @Output() verDetalle = new EventEmitter();

  constructor() {
    this.episode = {};
    this.verMasInfo = true;
  }

  public verDetalleEpisodio(episode: Episode){
    this.verDetalle.emit(episode);
  }

  ngOnInit(): void {}
}
