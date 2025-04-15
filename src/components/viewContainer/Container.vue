<script setup lang="ts">
import { useLayoutStore } from "@/hooks/useLayoutStore";
import { StopOverlayScroll } from "@/utils/function";
import { storeToRefs } from "pinia";
import { watch } from "vue";

const layout = useLayoutStore();
const { isInfiniteScroll } = storeToRefs(layout)

watch(isInfiniteScroll, (value) => {
  console.log(value);
  StopOverlayScroll(value)

})
</script>

<template>
  <!-- Purpose: Only PWA || infiniteScroll-->
  <v-container fluid style="overflow-y: auto" :style="layout.isInfiniteScroll ? `height:92vh` : `height: calc(100vh - 120px);`
    " v-if="layout.isPwa || layout.isInfiniteScroll">
    <slot></slot>
  </v-container>
  <!-- Purpose: Mobile browser and pc browser -->
  <v-container v-else fluid>
    <slot> </slot>
  </v-container>
</template>
