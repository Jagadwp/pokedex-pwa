<script setup lang="ts">
import { useGetEvolutionChain } from "@/api/pokemonApi";
import type { EvolutionChain } from "@/types/EvolutionChain";
import { computed, reactive, ref } from "vue";
import _ from "lodash";
import { getUrlId } from "@/utils/function";
import { usePokemonItemStore } from "@/hooks/usePokemonItemStore";
import { useDevelopmentstore } from "@/hooks/useDevelopmentStore";
import PokemonGifImageView from "./PokemonGifImageView.vue";
interface Props {
  evolutionChainUrl: string;
  name: string;
  id: number;
}

interface EvolveChain {
  name: string;
  id: number;
}
const pokemonItem = usePokemonItemStore();
const props = defineProps<Props>();
const evolutionChainUrlRef = ref<string>(props.evolutionChainUrl);
const name = ref<string>(props.name);

const { isError, error, isFetching, data } =
  useGetEvolutionChain(evolutionChainUrlRef);

const nameItems = reactive<EvolveChain[]>([]);

const traverseObject = (obj: Object) => {
  _.forOwn(obj, (value, key) => {
    if (key === "species") {
      let obj = {
        //@ts-ignore
        id: getUrlId(value["url"]),
        name: value["name"],
      };
      nameItems.push(obj);
    }
    if (_.isObject(value)) {
      traverseObject(value);
    }
  });
  return nameItems;
};

const image = (id: number) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};

const handleClickEvolveChainItem = (id: number) => {
  pokemonItem.id = id;
};
const { stage } = useDevelopmentstore();
</script>
<template>
  <v-skeleton-loader v-if="!data" type="card" width="80vw"></v-skeleton-loader>

  <div v-else-if="data">
    <div class="text-center" style="font-weight: bold;">Evolution Chain</div>
    <v-row cols="12" sm="6" md="4">
      <v-col v-for="item in traverseObject(data).slice().reverse()" :key="item.id">
        <v-card class="d-flex flex-column justify-center align-center" @click="handleClickEvolveChainItem(item.id)" hover>
          <v-img :src="image(item.id)" height="20vw" width="20vw" :lazy-src="image(item.id)">
            <div class="position-absolute" style="right: 2px">
              {{ item.id }}
            </div>
          </v-img>
          <div>
            {{ _.capitalize(item.name) }}
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
