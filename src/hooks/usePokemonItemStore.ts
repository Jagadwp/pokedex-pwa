import { defineStore } from 'pinia'

export interface PokemonItemStore {
    paginationLoading: boolean
    isPokemonItemOpen: boolean
    name: string
    id: number
    evolutionChainUrl: string
    pokemonSpeciesUrl: string

    favouritePokemonList: Object[]
}

export const usePokemonItemStore = defineStore('pokemon', {
    state: (): PokemonItemStore => {

        return {
            isPokemonItemOpen: false,
            name: "bulbasaur",
            id: 1,
            paginationLoading: false,
            evolutionChainUrl: '',
            pokemonSpeciesUrl: '',
            favouritePokemonList: []
        }
    }
})
