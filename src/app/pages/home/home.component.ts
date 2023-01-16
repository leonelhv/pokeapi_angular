import { Component } from '@angular/core';
import { Pokemon } from 'src/app/interface/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public pokemons: Pokemon[] = [];
  errorSearch = false;
  constructor(public pokemonService: PokemonService) {
    this.mostrarPokemons();
  }

  mostrarPokemons() {
    this.errorSearch = false;
    this.pokemonService.getPokemons().subscribe((res) => (this.pokemons = res));
  }

  buscarPokemon(termino: string) {
    this.pokemonService.getPokemonData(termino).subscribe(
      (res) => {
        this.pokemons = [res];
      },
      (error) => {
        this.pokemons = [];
        this.errorSearch = true;
      }
    );
  }
}
