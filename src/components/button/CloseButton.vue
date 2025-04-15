<script setup lang="ts">
interface Props {
  isClose: () => void;
}
const props = defineProps<Props>();
</script>
<template>
  <v-btn
    elevation="0"
    icon="mdi-close"
    style="position: absolute; top: 10px; left: 10px"
    @click="props.isClose"
  >
  </v-btn>
</template>
