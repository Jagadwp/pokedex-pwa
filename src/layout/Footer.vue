<script setup lang="ts">
import router from "@/router";
import { useDisplay, useTheme } from "vuetify";
import { useRoute } from "vue-router";
import { computed } from "vue";
//@ts-ignore
import _ from "lodash";
const { sm, xs, md } = useDisplay();
const theme = useTheme();
const drawerItems = [
  {
    icon: "mdi-home-outline",
    activeIcon: "mdi-home",
    value: "home",
  },
  {
    icon: "mdi-information-slab-circle-outline",
    activeIcon: "mdi-information",
    value: "D1",
  },
];

const handlerNav = (path: string) => {
  router.push(path);
};
// console.log(theme.computedThemes.value.dark.colors.background)

const route = useRoute();
const currentRouteName = computed(() => route.name);

const matchPathPattern = (itemValue: string) => {
  if (_.includes(router.currentRoute.value.path, itemValue)) {
    return true;
  } else {
    return false;
  }
};
</script>

<template>
  <div style="position: fixed; bottom: 0; width: 100vw" v-if="sm || xs" class="elevation-8" :style="{
    'background-color': theme.global.current.value.dark
      ? '#212121'
      : '#FFFFFF',
  }">
    <div class="d-flex justify-space-around align-center mt-2 mb-6">
      <v-icon variant="text" @click="handlerNav(item.value)" :value="item.value" v-for="item in drawerItems"
        :key="item.value" :icon="matchPathPattern(item.value) ? item.activeIcon : item.icon" class="d-flex align-center">
      </v-icon>
    </div>
  </div>
</template>
