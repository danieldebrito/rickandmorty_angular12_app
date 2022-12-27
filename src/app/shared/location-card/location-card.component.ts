import { Component, Input, OnInit } from '@angular/core';
import { Location } from 'src/app/class/location';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.css']
})
export class LocationCardComponent implements OnInit {

  @Input() location: Location;
  public residentesCant: number;

  constructor() {
    this.location = {};
    this.residentesCant = 0;
  }

  ngOnInit(): void {
  }

}
