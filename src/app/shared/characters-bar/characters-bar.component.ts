import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from 'src/app/class/character';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-characters-bar',
  templateUrl: './characters-bar.component.html',
  styleUrls: ['./characters-bar.component.css']
})
export class CharactersBarComponent implements OnInit {

  @Input() characters: Character[];
  @Output() txtBuscar = new EventEmitter();

  public showErrors = false;

  searchForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(40),
      Validators.pattern('[a-zA-Z ]{2,41}'),
    ]),
  });

  constructor() {
    this.characters = [];
  }

  lanzarTextoBuscar() {
    this.txtBuscar.emit(this.searchForm.getRawValue().name);
  }

  limpiar() {
    this.searchForm.setValue({ name: "" });
    this.txtBuscar.emit(this.searchForm.getRawValue().name);
  }

  ngOnInit(): void {
  }
}
