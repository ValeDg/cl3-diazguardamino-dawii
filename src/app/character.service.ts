import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  //'https://rickandmortyapi.com/api/character'
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  getCharactersWithOddId(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(response => response.results),
      map(characters => characters.filter(character => character.id % 2 !== 0))
    );
  }
}
