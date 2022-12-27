import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from 'src/app/class/location';

@Component({
  selector: 'app-locations-bar',
  templateUrl: './locations-bar.component.html',
  styleUrls: ['./locations-bar.component.css']
})
export class LocationsBarComponent implements OnInit {

  @Input() locations: Location[];

  @Output() txtBuscarLocation = new EventEmitter();
  @Output() limpiarBusqueda = new EventEmitter();


  public criterio: string = "";
  public location: Location;
  public showErrors = false;

  searchForm = new FormGroup({
    palabraClave: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(40),
      Validators.pattern('[a-zA-Z ]{2,41}'),
    ]),
  });

  constructor() {
    this.locations = [];
    this.location = {};
  }

  public criterioBusqueda(event: any) {
    this.criterio = event.target.value;
  }

  public buscar() {
    this.location = { name: '', type:'', dimension: ''};
    switch (this.criterio) {
      case 'name':
        this.location.name = this.searchForm.getRawValue().palabraClave;
        break;
      case 'type':
        this.location.type = this.searchForm.getRawValue().palabraClave;
        break;
      default:
        this.location.dimension = this.searchForm.getRawValue().palabraClave;
        break;
    }
    console.log(this.location);
    this.txtBuscarLocation.emit(this.location);
  }

  limpiar() {
    this.searchForm.setValue({ palabraClave: "", });
    this.location = { };
    this.limpiarBusqueda.emit();
  }

  ngOnInit(): void {
  }
}

