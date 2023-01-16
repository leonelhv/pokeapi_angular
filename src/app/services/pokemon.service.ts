import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeMap, toArray } from 'rxjs';
import { Pokemon } from '../interface/pokemon.interface';

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

  //Recupera la data de un pokemon en especifico
  getPokemonData(name: string) {
    return this.http.get<Pokemon>(this.BASE_URL + '/pokemon/' + name);
  }
}
