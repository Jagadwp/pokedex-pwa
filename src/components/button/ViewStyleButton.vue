<script setup lang="ts">
import { useLayoutStore } from "@/hooks/useLayoutStore";
import IconButton from "./IconButton.vue";

const layout = useLayoutStore();
</script>
<template>
  <div>
    <IconButton
      icon="material-icons grid_view"
      :text="layout.isTinyGridView ? 'Large view' : 'Small view'"
      @click="layout.isTinyGridView = !layout.isTinyGridView"
    />
  </div>
</template>
