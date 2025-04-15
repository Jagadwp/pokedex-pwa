<script setup lang="ts">
import { useLayoutStore } from '@/hooks/useLayoutStore'

const layout = useLayoutStore()
</script>
<template>
  <v-navigation-drawer location="bottom" temporary v-model="layout.isOpenDrawer" style="height: 80vh" touchless
    class="rounded-xl">
    <div class="ma-4">
      <i class="material-icons arrow_back_ios_new" @click="layout.isOpenDrawer = !layout.isOpenDrawer"></i>
    </div>
    <v-container>
      <v-switch :label="layout.isInfiniteScroll ? 'Infinite scroll' : 'Pagination'" v-model="layout.isInfiniteScroll"
        class="d-flex" style="align-self: flex-end"></v-switch>
      <v-switch :label="layout.isTinyGridView ? 'Small view' : 'Large view'" v-model="layout.isTinyGridView"
        class="d-flex" style="align-self: flex-end">
      </v-switch>
    </v-container>
  </v-navigation-drawer>
</template>

