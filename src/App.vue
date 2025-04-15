<script setup lang="ts">
import { useLayoutStore } from "./hooks/useLayoutStore";
import { storeToRefs } from "pinia";
const layout = useLayoutStore();
const { isPwa } = storeToRefs(layout)


window.addEventListener("DOMContentLoaded", () => {
  let displayMode = "browser tab";


  if (window.matchMedia("(display-mode: standalone)").matches) {
    displayMode = "standalone";
    isPwa.value = true
  } else {
    isPwa.value = false;
  }
  // Log launch display mode to analytics
  console.log("DISPLAY_MODE_LAUNCH:", displayMode);
});
</script>


<template>
  <router-view></router-view>
</template>
