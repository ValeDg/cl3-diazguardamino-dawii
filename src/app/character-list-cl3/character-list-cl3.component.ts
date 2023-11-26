import { Component } from '@angular/core';

@Component({
  selector: 'app-character-list-cl3',
  templateUrl: './character-list-cl3.component.html',
  styleUrl: './character-list-cl3.component.css'
})
export class CharacterListCl3Component implements OnInit{
  characters: any[];

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getCharactersWithOddId().subscribe(
      characters => this.characters = characters,
      error => console.error(error)
    );
  }

}
