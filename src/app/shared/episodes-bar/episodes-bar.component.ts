import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Episode } from 'src/app/class/episode';

@Component({
  selector: 'app-episodes-bar',
  templateUrl: './episodes-bar.component.html',
  styleUrls: ['./episodes-bar.component.css']
})
export class EpisodesBarComponent implements OnInit {

  @Input() cantEpisodes: Number;
  @Output() codigoEpisodioSeleccionado = new EventEmitter();
  @Output() allEpisodios = new EventEmitter();

  public idsEpisodios: number[];

  constructor() {
    this.idsEpisodios = [];
    this.cantEpisodes = 0;
  }

  public generarSelect() {
    for (let index = 0; index < this.cantEpisodes; index++) {
      this.idsEpisodios.push(index + 1);
    }
  }

  lanzarEpisodio(event: any) {
    this.codigoEpisodioSeleccionado.emit(event.target.value);
  }

  limpiarEpisodios() {
    this.allEpisodios.emit();
  }


  ngOnInit(): void {
    this.generarSelect();
  }
}
