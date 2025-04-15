<script setup lang="ts">
import ThemeButton from '@/components/button/ThemeButton.vue'
import { usePokemonItemStore } from '@/hooks/usePokemonItemStore'
import OptionButton from '@/components/button/OptionButton.vue'
const pokemonItem = usePokemonItemStore()
</script>

<template>
  <v-app-bar class="bg-secondary">
    <v-progress-linear :active="pokemonItem.paginationLoading" :indeterminate="pokemonItem.paginationLoading" absolute
      bottom color="deep-purple-accent-4"></v-progress-linear>
    <template v-slot:append>
      <h3 class="mr-5 ml-1">
        Poxedex by Jagad 
      </h3>
      <ThemeButton class="d-flex align-center mr-4" />
      <OptionButton />
    </template>
  </v-app-bar>
</template>
