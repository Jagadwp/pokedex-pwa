<script lang="ts" setup>
import { isMobile } from "mobile-device-detect";
import { computed, reactive } from "vue";
import { useRoute } from "vue-router";
import SettingButton from "./SettingButton.vue";
import ViewStyleButton from "./ViewStyleButton.vue";
const array = reactive({
  items: [{ title: "Click Me" }, { title: "Click Me" }, { title: "Click Me" }],
});

const route = useRoute();
const currentRouteName = computed(() => route.name);
</script>
<template>
  <v-menu location="bottom" :closeOnBack="true">
    <template v-slot:activator="{ props }">
      <v-btn icon v-bind="props">
        <i class="material-icons more_vert"></i>
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        value="viewStyle"
        v-if="isMobile && currentRouteName === 'home'"
      >
        <ViewStyleButton />
      </v-list-item>
      <v-list-item value="setting">
        <SettingButton />
      </v-list-item>
    </v-list>
  </v-menu>
</template>
