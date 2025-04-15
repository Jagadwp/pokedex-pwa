<script setup lang="ts">
import { usePokemonItemStore } from '@/hooks/usePokemonItemStore';
import { Variety } from '@/types/PokemonSpecies';
import { getUrlId } from '@/utils/function';
import { computed } from 'vue';


interface Props {
    varieties: Variety[]
}

const props = defineProps<Props>()

const pokemonItem = usePokemonItemStore()

const image = (id: number) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};

const handleClickVarieties = (id: number) => {
    pokemonItem.id = id
}



</script>
<template>
    <div v-if="props.varieties.length" class="text-center mt-16" style="font-weight: bold;">Varieties</div>
    <v-row cols="12" sm="6" md="4" v-if="props.varieties" v-for="item in props.varieties">
        <v-col v-if="!item.is_default">
            <v-card class="d-flex flex-column justify-center align-center"
                @click="handleClickVarieties(getUrlId(item.pokemon.url))" hover>
                <v-img :src="image(getUrlId(item.pokemon.url))" height="20vw" width="20vw">
                    <div class="position-absolute" style="right: 2px">
                        {{ getUrlId(item.pokemon.url) }}
                    </div>
                </v-img>
                <div>
                    {{ item.pokemon.name }}
                </div>
            </v-card>
        </v-col>
        <v-col v-if="props.varieties.length === 1">
            <div class="text-center">
                Not exist

            </div>
        </v-col>
    </v-row>
</template>