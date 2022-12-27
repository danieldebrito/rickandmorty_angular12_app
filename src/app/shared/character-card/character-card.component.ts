import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from 'src/app/class/character';
import { Episode } from 'src/app/class/episode';
import { EpisodesService } from 'src/app/services/episodes.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  @Input() character: Character;
  @Input() episodes: Episode[];
  
  @Input() verBotonComparar = false;
  @Input() disableButton = false;

  @Output() lanzaAddComparativa = new EventEmitter();

  public episode: Episode;
  public episodeURL: string;
  public episodesParticipados: Episode[];

  constructor(
    private episodesSv: EpisodesService
  ) {
    this.character = {};
    this.episodes = [];
    this.episodeURL = '';

    this.episodesParticipados = [];
    this.episode = {};
  }

  public buscarEpisodioAleatorio(episodes: any) {
    this.episodesSv.getByURL(episodes[Math.floor(Math.random() * (episodes.length - 1))]).subscribe( res => {
      this.episode = res;
    });
  }

  public addComparativa(character: Character){
    this.lanzaAddComparativa.emit(character);
  }

  ngOnInit(): void {
    this.buscarEpisodioAleatorio(this.character.episode);
  }
}






