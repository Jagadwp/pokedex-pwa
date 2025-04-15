export interface PokemonVarieties {
    varieties: Variety[];
}

export interface Variety {
    is_default: boolean;
    pokemon: Pokemon;
}

export interface Pokemon {
    name: string;
    url: string;
}
