<script setup lang="ts">
import PokemonPaginationView from "./PokemonPaginationView.vue";
import { useLayoutStore } from "@/hooks/useLayoutStore";
import PokemonInfiniteScrollView from "./PokemonInfiniteScrollView.vue";
const layout = useLayoutStore();
</script>

<template>
  <PokemonPaginationView v-if="!layout.isInfiniteScroll" />
  <PokemonInfiniteScrollView v-else />
</template>
