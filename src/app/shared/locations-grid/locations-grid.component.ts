import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Episode } from 'src/app/class/episode';
import { InfoApi } from 'src/app/class/infoApi';
import { Location } from 'src/app/class/location';

@Component({
  selector: 'app-locations-grid',
  templateUrl: './locations-grid.component.html',
  styleUrls: ['./locations-grid.component.css']
})
export class LocationsGridComponent implements OnInit {

  @Input() filterLocations: Location[];
  @Input() episodes: Episode[];
  @Input() infoApiLocations: InfoApi = {};
  @Output() lanzaPaginatorPage = new EventEmitter();

  /// paginator ///////////////////////
  public page: number;
  public maxSize: number = 5;


  constructor() {
    this.filterLocations = [];
    this.episodes = [];
    this.page = 1;

  }

    public getPaginatorPage() {
    this.lanzaPaginatorPage.emit(this.page);
  }

  ngOnInit(): void { }
}

