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
  <v-bottom-navigation grow>
    <v-btn
      variant="text"
      v-for="item in drawerItems"
      @click="handlerNav(item.value)"
      :value="item.value"
      :key="item.value"
      :icon="matchPathPattern(item.value) ? item.activeIcon : item.icon"
      class="d-flex align-center"
    >
    </v-btn>
  </v-bottom-navigation>
</template>
