import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/class/character';
import { InfoApi } from 'src/app/class/infoApi';
import { CharactersService } from 'src/app/services/characters.service';
import { EpisodesService } from 'src/app/services/episodes.service';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-comparador',
  templateUrl: './comparador.component.html',
  styleUrls: ['./comparador.component.css']
})
export class ComparadorComponent implements OnInit {

  public infoApiCharacters: InfoApi = {};
  public characters: Character[];
  public filterCharacters: Character[];
  public characterComparados: Character[];

  public disableButton: boolean = false;
  public verComparativa = false;
  public mostrarButonComparativa = false;

  constructor(
    public episodesSv: EpisodesService,
    public charactersSv: CharactersService,
    public locationsSv: LocationsService
  ) {
    this.characters = [];
    this.filterCharacters = [];
    this.characterComparados = [];
  }

  /******************************************** */
  //////////////// CHARACTERS  ///////////////////
  /******************************************** */

  public getCharacters() {
    this.charactersSv.gets().subscribe(res => {

      this.infoApiCharacters = res.info;
      this.characters = res.results;

      this.filterCharacters = this.characters;
    });
  }

  public parinatorPage(event: number) {
    this.charactersSv.getsByPage(event).subscribe(res => {
      this.filterCharacters = res.results;
    });
  }

  public buscarPorTexto(event: string) {
    this.charactersSv.getsByName(event).subscribe(res => {
      this.filterCharacters = res.results;
    });
  }

  public addComparativa(event: Character){
    this.characterComparados.push(event);
    this.characterComparados.length == 3 ? this.disableButton = true : this.disableButton = false;
    this.characterComparados.length >= 2 ? this.mostrarButonComparativa = true : this.mostrarButonComparativa = false;
  }

  public mostrarComparativa(){
    this.verComparativa = true;
  }

  public volverListado(){
    this.getCharacters();
    this.characterComparados = [];
    this.verComparativa = false;
    this.mostrarButonComparativa = false
    this.disableButton = false
  }

  public episodiosCopartidos(character1: Character, character2: Character){

    let allEpisodios: string[] = [];
    let unicEpisodios: string[] = [];

    if( (character1.episode != undefined && character2.episode != undefined )  ){
      allEpisodios = character1.episode.concat(character2.episode);
    }

    const dataArr = new Set(allEpisodios);
    unicEpisodios = [...dataArr];

    return character1.name + ' & ' + character2.name + ' : ' + (allEpisodios.length - unicEpisodios.length);
  }


  ngOnInit(): void {
    this.getCharacters();
  }
}
