<script setup lang="ts">
import { CardProps } from "./type";
import { computed, ref } from "vue";
import { useDevelopmentstore } from "@/hooks/useDevelopmentStore";
import { useGetOnePokemonByProps } from "@/api/pokemonApi";
import _ from 'lodash'
const cardProps = defineProps<CardProps>();
const imageUrl = computed(
  () =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${cardProps.id}.png`
);
const name = ref<string>(cardProps.title);
const id = ref<number>(cardProps.id);
const { data, isLoading } = useGetOnePokemonByProps(id);
const { stage } = useDevelopmentstore();
</script>
<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card width="48vw" v-bind="props" :loading="cardProps.isLoading" :elevation="isHovering ? 24 : 6" hover>
      <v-img height="70px" cover :src="imageUrl">
        <div class="text-body-2 position-absolute" style="bottom: 10px; left: 10px">
          <div style="width: 40vw">
            {{ _.capitalize(cardProps.title) }}
          </div>
        </div>
        <div class="position-absolute" style="left: 4px">
          <v-chip v-if="isLoading" style="width: 60px" class="mr-2" size="x-small"></v-chip>
          <v-chip v-if="data" v-for="(item, index) in data.types" :key="index" class="mr-1 elevation-1 text-body-5"
            size="x-small">
            {{ item.type.name }}
          </v-chip>
        </div>
        <div class="position-absolute" style="right: 4px; bottom: 2px; font-size: x-small">
          {{ cardProps.id }}
        </div>
      </v-img>
    </v-card>
  </v-hover>
</template>
