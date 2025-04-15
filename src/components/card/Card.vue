<script setup lang="ts">
import { useGetAllType, useGetOnePokemonByProps } from "@/api/pokemonApi";
import { computed, ref } from "vue";
import { useDevelopmentstore } from "@/hooks/useDevelopmentStore";
import { CardProps } from "./type";
import { upperCaseFirstLetter, imageExist } from "@/utils/function";

const cardProps = defineProps<CardProps>();

const imageUrl = computed(
  () =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${cardProps.id}.png`
);
const name = ref<string>(cardProps.title);
const id = ref<number>(cardProps.id);
const { data, isLoading } = useGetOnePokemonByProps(id);
const { stage } = useDevelopmentstore();

const { data: typeData } = useGetAllType(false);

</script>

<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card width="30vw" min-width="285" v-bind="props" :elevation="isHovering ? 24 : 6" hover
      :loading="cardProps.isLoading" class="rounded-b-shaped">
      <div class="position-absolute" style="right: 10px; top: 10px">
        <v-chip class="elevation-1" size="small">ID: {{ cardProps.id }}</v-chip>
      </div>
      <v-card-item class="d-flex justify-center align-center">

        <v-img :lazy-src="imageUrl" :src="imageUrl" height="20vh" width="20vh"> </v-img>
      </v-card-item>

      <v-card-title>
        {{ upperCaseFirstLetter(cardProps.title) }}
      </v-card-title>

      <v-card-text class="d-flex">
        <v-chip style="width: 60px" class="mr-2" v-if="isLoading"></v-chip>
        <v-chip v-if="data" v-for="(item, index) in data.types" :key="index" class="mr-2 elevation-1">
          <v-img :src="imageExist(item.type.name)" height="20px" width="20px" class="mr-2" />
          {{ upperCaseFirstLetter(item.type.name) }}
        </v-chip>
      </v-card-text>
    </v-card>
  </v-hover>
</template>
