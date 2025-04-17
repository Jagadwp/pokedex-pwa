<script setup lang="ts">
import { useGetOnePokemonByProps, useGetPokmonSpecies } from "@/api/pokemonApi";
import { usePokemonItemStore } from "@/hooks/usePokemonItemStore";
import { storeToRefs } from "pinia";
import PokemonEvolutionChain from "./PokemonEvolutionChain.vue";
import { computed, ref, watch } from "vue";
import _ from "lodash";
import { useDisplay } from "vuetify/lib/framework.mjs";
import { useDevelopmentstore } from "@/hooks/useDevelopmentStore";
import PokemonVarietiesView from "./PokemonVarietiesView.vue";
import PokemonItemTab from "@/components/tab/PokemonItemTab.vue";
import { StopOverlayScroll, upperCaseFirstLetter, imageExist } from "@/utils/function";
import PokemonMoviesView from "./PokemonMoviesView.vue";
import { typeColors } from "@/utils/allPokemonType";

const pokemonItem = usePokemonItemStore();
const { name, id, isPokemonItemOpen } = storeToRefs(pokemonItem);
const { xs, sm } = useDisplay();
const { stage } = useDevelopmentstore();

const { isError, error, isFetching, data } = useGetOnePokemonByProps(id, true);
const pokemonSpeciesUrl = computed(() => data.value?.species?.url);
const enabled = computed(() => !!data.value?.species?.url);

const {
  data: speciesData,
  isFetching: speciesFetching,
  isLoading: speciesLoading,
} = useGetPokmonSpecies(id, pokemonSpeciesUrl, enabled);

const total = ref<number>(0);
watch(data, (data) => {
  let sum = 0;
  _.map(data?.stats, (item) => (sum += item.base_stat));
  total.value = sum;
});

const imageUrl = computed(() => {
  const imageGif =
    data.value?.sprites.versions?.["generation-v"]["black-white"].animated
      ?.front_default;
  if (imageGif !== null) {
    return imageGif;
  } else {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id.value}.png`;
  }
});

watch(isPokemonItemOpen, (value) => {
  StopOverlayScroll(value)
})

const cardBackgroundColor = computed(() => {
  const typeName = data.value?.types?.[0]?.type?.name;
  return typeName && typeColors[typeName] ? typeColors[typeName] : '#FFFFFF';
}); 
</script>

<template>
  <v-navigation-drawer 
    location="bottom" 
    temporary 
    v-model="pokemonItem.isPokemonItemOpen"
    style="height: 80vh; z-index: 9999" 
    touchless 
    class="rounded-t-xl "
  >
    <div v-if="isFetching"></div>

    <v-icon v-if="pokemonItem.id !== 1" color="grey-darken-3" icon="mdi-chevron-left" size="50px" :style="{
      position: 'absolute',
      top: xs ? '120px' : 0,
      bottom: 0,
      margin: xs ? '' : 'auto',
      left: '0',
    }" @click="pokemonItem.id--"></v-icon>
    <v-icon color="grey-darken-3" icon="mdi-chevron-right" size="50px" :style="{
      position: 'absolute',
      top: xs ? '120px' : 0,
      bottom: 0,
      margin: xs ? '' : 'auto',
      right: '0',
    }" @click="pokemonItem.id++"></v-icon>
    <v-btn elevation="0" icon="mdi-close" style="position: absolute; top: 10px; left: 10px"
      @click="pokemonItem.isPokemonItemOpen = !pokemonItem.isPokemonItemOpen">
    </v-btn>
    <div class="ma-4 pl-3">
      <v-container fluid v-if="data">
        <div 
          class="d-flex justify-center" 
          :style="{ 
            backgroundColor: cardBackgroundColor,
            borderRadius: '0.75rem'
          }"
        >
          <div>
            <div class="position-relative">

              <v-img :src="imageUrl" :lazy-src="imageUrl" height="30vw" width="30vw" max-height="300px" max-width="300px"
                style="margin: auto;">
              </v-img>
            </div>
            <div class="d-flex justify-center mt-8" style="font-weight: bold;">
              {{ upperCaseFirstLetter(data.name) }}
            </div>
            <div class="text-center">
              <v-chip v-if="data" v-for="(item, index) in data.types" :key="index" class="mr-2 mt-2 elevation-1 bg-surface"
                size="small">
                <v-img :src="imageExist(item.type.name)" height="15px" width="15px" class="mr-1 " />
                {{ item.type.name }}
              </v-chip>
            </div>
            <v-divider class="mt-6 border-opacity-25"></v-divider>
          </div>
        </div>
      </v-container>
      <div class="d-flex align-center flex-column" v-if="data">
        <div v-for="(stat, i) in data.stats" :key="i" class="d-flex flex-column"
          style="width: 40vw; min-width: 300px; max-width: 500px">
          <div class="d-flex align-center justify-space-between">
            <div>{{ stat.stat.name }}:</div>
            <div style="width: 30vw; max-width: 200px">
              <v-progress-linear :model-value="(stat.base_stat / 200) * 100" bg-color="pink-lighten-3"
                color="pink-lighten-1" height="8">
                <div style="font-size: xx-small">{{ stat.base_stat }}</div>
              </v-progress-linear>
            </div>
          </div>
        </div>
        <div class="mt-4">Total: {{ total }}</div>
        <div class="mt-10"></div>
        <div v-if="speciesFetching"></div>

        <PokemonItemTab v-else-if="speciesData">
          <template #Envolutions>
            <PokemonEvolutionChain :evolutionChainUrl="speciesData.evolution_chain.url" :name="name" :id="id" />
            <PokemonVarietiesView :varieties="speciesData.varieties" />
          </template>
          <template #Moves>
            <PokemonMoviesView :move="data.moves" />
          </template>
          <template #Types>
            <div class="text-center">Types</div>
          </template>
        </PokemonItemTab>
      </div>
    </div>
  </v-navigation-drawer>
</template>
