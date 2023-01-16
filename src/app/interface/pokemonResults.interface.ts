export interface PokemonsResult {
  count: number;
  next: string;
  previous: null;
  results: pokemonUrl[];
}

export interface pokemonUrl {
  name: string;
  url: string;
}
