import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, toArray } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  BASE_URL = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  //Recupera la lista de pokemons con sus datos
  getPokemons() {
    return this.http
      .get<any>(this.BASE_URL + '/pokemon?offset=0&limit=150')
      .pipe(
        mergeMap((res) => res.results),
        mergeMap((pokemon: any) => this.http.get<any>(pokemon.url)),
        toArray()
      );
  }
}
