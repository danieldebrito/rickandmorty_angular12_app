import { Component, Input, OnInit } from '@angular/core';
import { Episode } from 'src/app/class/episode';

@Component({
  selector: 'app-episode-detalle',
  templateUrl: './episode-detalle.component.html',
  styleUrls: ['./episode-detalle.component.css']
})
export class EpisodeDetalleComponent implements OnInit {

  @Input() episodio: Episode;

  public p: number = 1;  // paginacion primer page


  constructor() { 
    this.episodio = {};
  }

  ngOnInit(): void { }
}
