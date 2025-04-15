<script setup lang="ts">
import IconButton from './IconButton.vue'
import { useLayoutStore } from '@/hooks/useLayoutStore'

const layout = useLayoutStore()
</script>

<template>
  <IconButton
    icon="material-icons settings"
    text="Setting"
    @click="layout.isOpenDrawer = !layout.isOpenDrawer"
  />
</template>
