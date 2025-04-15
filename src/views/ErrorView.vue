<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  isStyle: {
    type: Boolean,
    default: true
  }
})
const containerClasses = computed(() => {
  const classes = []

  if (props.isStyle) {
    classes.push('d-flex', 'justify-center', 'align-center', 'h-screen')
  }

  return classes.join(' ')
})
</script>

<template>
  <v-container :class="containerClasses">
    <div>Error 404</div>
  </v-container>
</template>
