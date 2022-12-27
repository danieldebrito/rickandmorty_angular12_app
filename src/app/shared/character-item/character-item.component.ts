import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/class/character';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.css']
})
export class CharacterItemComponent implements OnInit {

  @Input() characterURL: string;

  public character: Character;

  constructor(
    private charactersSv: CharactersService
  ) { 
    this.characterURL = '';
    this.character = {};
  }

  ngOnChanges(): void{
    this.charactersSv.getByURL(this.characterURL).subscribe( res => {
      this.character = res;
    });
  }

  ngOnInit(): void {
  }

}
