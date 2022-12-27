import { Component, Input, OnInit } from '@angular/core';
///class//////////////////////////////////////////////
import { Character } from 'src/app/class/character';
import { Episode } from 'src/app/class/episode';
import { InfoApi } from 'src/app/class/infoApi';
import { Location } from 'src/app/class/location';
/// services ////////////////////////////////////////
import { CharactersService } from 'src/app/services/characters.service';
import { EpisodesService } from 'src/app/services/episodes.service';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  active = 1;
  
  public episodes: Episode[];
  public episodioDetalle: Episode;
  public infoApiEpisodes: InfoApi = {};
  public filterEpisodes: Episode[];
  public mostrarDetalleEpisodio = false;

  public characters: Character[];
  public filterCharacters: Character[];
  public infoApiCharacters: InfoApi = {};

  public locations: Location[];
  public filterLocations: Location[];
  public infoApiLocations: InfoApi = {};

  constructor(
    public episodesSv: EpisodesService,
    public charactersSv: CharactersService,
    public locationsSv: LocationsService
  ) {
    this.episodes = [];
    this.filterEpisodes = [];
    this.episodioDetalle = {};

    this.characters = [];
    this.filterCharacters = [];

    this.locations = [];
    this.filterLocations = [];
  }


  /************************************************************************************************************** */
  //////////////// EPISODES  /////////////////////
  /************************************************************************************************************** */

  public getsEpisodes() {
    this.episodesSv.gets().subscribe(res => {

      this.episodes = res.results;
      this.infoApiEpisodes = res.info;
      this.filterEpisodes = this.episodes;
      this.mostrarDetalleEpisodio = false;
    });
  }

  public getEpisodioPorID(event: any) {

    this.filterEpisodes = [];

    this.episodesSv.getById(event).subscribe( res => {
      this.filterEpisodes[0] = res;
      console.log(event, res);
    });
  }

  public detalleEpisodio(event: Episode){
    this.mostrarDetalleEpisodio = true;
    this.episodioDetalle = event;
  }

  /************************************************************************************************************** */
  //////////////// CHARACTERS  ///////////////////
  /************************************************************************************************************** */

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

  /************************************************************************************************************** */
  //////////////// LOCATIONS  ///////////////////
  /************************************************************************************************************** */
  public getCLocations() {
    this.locationsSv.gets().subscribe(res => {

      this.infoApiLocations = res.info;
      this.locations = res.results;

      this.filterLocations = this.locations;
    });
  }

  public buscarLocation(event: any){
    this.filterLocations = [];
    this.locationsSv.getByNameTypeDimemsion(event.name, event.type, event.dimension).subscribe( res => {
      console.log(event, res.results);
      this.filterLocations = res.results;
    });
  }

  public parinatorPageLocations(event: number) {
    this.locationsSv.getsByPage(event).subscribe(res => {
      this.filterLocations = res.results;
    });
  }

  /************************************************************************************************************** */

  ngOnInit(): void {
    this.getsEpisodes();
    this.getCharacters();
    this.getCLocations();
  }
}
