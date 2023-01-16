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

  constructor(public pokemonService: PokemonService) {
    this.pokemonService.getPokemons().subscribe((res) => (this.pokemons = res));
  }
}
