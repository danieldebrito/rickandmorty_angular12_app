import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from 'src/app/class/character';
import { Episode } from 'src/app/class/episode';
import { InfoApi } from 'src/app/class/infoApi';

@Component({
  selector: 'app-characters-grid',
  templateUrl: './characters-grid.component.html',
  styleUrls: ['./characters-grid.component.css']
})
export class CharactersGridComponent implements OnInit {

  @Input() filterCharacters: Character[];
  @Input() episodes: Episode[];
  @Input() infoApiCharacters: InfoApi = {};
  @Input() verBotonComparar = false;
  @Input() disableButton = false;
  
  @Output() lanzaPaginatorPage = new EventEmitter();
  @Output() lanzaAddComparativa = new EventEmitter();

  /// paginator ///////////////////////
  public page: number;
  public maxSize: number = 5;


  constructor() {
    this.filterCharacters = [];
    this.episodes = [];
    this.page = 1;
  }

  public getPaginatorPage() {
    this.lanzaPaginatorPage.emit(this.page);
  }


  public addComparativa(event: Character){
    this.lanzaAddComparativa.emit(event);
  }

  ngOnInit(): void { }
}




