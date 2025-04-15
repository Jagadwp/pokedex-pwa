<script setup lang="ts">
import { useDisplay } from "vuetify/lib/framework.mjs";

interface Props {
  isUp: boolean;
}

const props = defineProps<Props>();

const { xs, sm } = useDisplay();
const handleScroll = () => {
  if (props.isUp) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    window.scrollTo({
      top: 99999,
      behavior: "smooth",
    });
  }
};
</script>
<template>
  <div>
    <v-icon @click="handleScroll" :icon="props.isUp ? 'mdi-menu-up' : 'mdi-menu-down'" size="x-large" />
  </div>
</template>
