<script setup lang="ts">
import Container from "../viewContainer/Container.vue";
</script>
<template>
  <v-row class="mt-2" v-for="item in 10">
    <v-col :cols="6" sm="6" md="6" v-for="item in 2">
      <v-skeleton-loader
        height="70px"
        type="list-item-two-line"
      ></v-skeleton-loader>
      <!-- <div style="background-color: gray; height: 70px"></div> -->
    </v-col>
  </v-row>
</template>
