import { type ComputedRef, type Ref } from "vue";
import { useQuery } from "vue-query";
import axios from "axios";
import { basePokemonApi } from "@/constants";
import { usePokemonItemStore } from '../hooks/usePokemonItemStore';
import { storeToRefs } from "pinia";
import type { PokemonItem } from "@/types/PokemonItem";
import { EvolutionChain } from "@/types/EvolutionChain";
import { PokemonType } from '../types/pokemonType';
import { PokemonSpecies } from "@/types/PokemonSpecies";
import { PokemonOne } from "@/types/PokemonOne";


export const useTestApi = (page: number) => {
    const fetcher = () =>
        fetch(
            `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`,
        ).then((response) => response.json())


    return useQuery({
        queryKey: ['projects', page],
        queryFn: () => fetcher(),
        keepPreviousData: true,
    })

}

export const getAll = async ({ page, lastLimit }: { page: number, lastLimit?: number }): Promise<PokemonType> => {
    let num = 12

    const response = await axios.get(basePokemonApi + 'pokemon', {
        params: {
            offset: (page - 1) * num,
            limit: num
        }
    });
    return response.data;
};


export const useGetAllPokemon = (page: Ref<number>) => {
    console.log('api page: ', page.value);

    const getAll = async () => {
        const response = await axios.get(basePokemonApi + 'pokemon', {
            params: {
                offset: (page.value - 1) * 12,
                limit: 12
            }
        });
        return response.data;
    };

    return useQuery({
        queryKey: ["getAllPokemon", page.value],
        queryFn: () => getAll(),
        enabled: true,
        refetchOnWindowFocus: false,
        keepPreviousData: true
    });
};



export const useGetTotalPokemon = () => {
    const getAll = async () => {
        const getcount = await axios.get(basePokemonApi + 'pokemon', {

        });

        const response = await axios.get(basePokemonApi + 'pokemon', {
            params: {
                offset: 0,
                limit: getcount.data.count
            }
        });

        console.log(response.data);

        return response.data;
    };

    return useQuery({
        queryKey: ["getTotalPokemon"],
        queryFn: () => getAll(),
        enabled: true,
        refetchOnWindowFocus: false,
        keepPreviousData: true
    });
}




export const useGetOnePokemon = () => {

    const pokemonItem = usePokemonItemStore()
    const { name } = storeToRefs(pokemonItem)
    async function getOnePokemon(): Promise<PokemonItem> {

        console.log("pokemonItem: ", name.value);
        const { data } = await axios({
            method: 'get',
            url: basePokemonApi + `pokemon/${name.value}`
        })
        return data
    }
    return useQuery({
        queryKey: ["getOnePokemon", name],
        queryFn: () => getOnePokemon(),
        enabled: true,
        refetchOnWindowFocus: false,


    });
}
export const useGetOnePokemonByProps = (id: Ref<number>, enabled: boolean = true) => {
    async function getOnePokemon(): Promise<PokemonOne> {
        const { data } = await axios({
            method: 'get',
            url: basePokemonApi + `pokemon/${id.value}`
        })
        return data
    }
    return useQuery({
        queryKey: ["getOnePokemon", id],
        queryFn: () => getOnePokemon(),
        enabled: !!id,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
        staleTime: Infinity

    });
}


export const useGetPokmonSpecies = (id: Ref<number>, pokemonSpeciesUrl?: ComputedRef, enabled?: ComputedRef) => {

    const getPokmonSpecies = async (pokemonSpeciesUrl: string): Promise<PokemonSpecies> => {
        const { data } = await axios({
            method: 'get',
            url: pokemonSpeciesUrl
        })
        return data
    }
    return useQuery({
        queryKey: ["getPokmonSpecies", pokemonSpeciesUrl],
        queryFn: () => getPokmonSpecies(pokemonSpeciesUrl?.value),
        enabled: enabled,
        refetchOnWindowFocus: false,
        keepPreviousData: true

    });
}



export const useGetEvolutionChain = (evolutionChainUrl: Ref<string>) => {


    async function getEvolutionChain(): Promise<EvolutionChain> {
        const { data } = await axios({
            method: 'get',
            url: evolutionChainUrl.value
        })
        return data
    }
    return useQuery({
        queryKey: ["getEvolutionChain", evolutionChainUrl],
        queryFn: () => getEvolutionChain(),
        enabled: true,
        refetchOnWindowFocus: false,
        keepPreviousData: true
    });
}


export const useGetAllType = (enabled: boolean = true) => {
    const getAllType = async (): Promise<PokemonType> => {
        const { data } = await axios({
            method: 'get',
            url: basePokemonApi + 'type'
        })

        return data
    }

    return useQuery({
        queryKey: ["getAllType"],
        queryFn: () => getAllType(),
        enabled: enabled,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
        staleTime: Infinity


    })
}

export const useGetMovesFromType = (typeUrl: Ref<string>) => {
    const getMovesFromType = async () => {
        const { data } = await axios({
            method: 'get',
            url: typeUrl.value
        })

        return data
    }
    return useQuery({
        queryKey: ["getAllType", typeUrl],
        queryFn: () => getMovesFromType(),
        enabled: !!typeUrl.value,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
        staleTime: Infinity


    })

}

