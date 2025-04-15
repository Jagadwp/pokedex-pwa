<script setup lang="ts">
import { useGetAllType } from "@/api/pokemonApi";
import { imageExist } from "@/utils/function";
import TypeButton from "./TypeButton.vue";
const { data, isLoading, isError } = useGetAllType();

</script>
<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="data" class="d-flex flex-wrap">
    <div v-for="(item, index) in data.results" :key="index">
      <TypeButton :name="item.name" :path="imageExist(item.name)" v-if="imageExist(item.name) !== ''" class="ma-1" />
    </div>
  </div>
</template>
