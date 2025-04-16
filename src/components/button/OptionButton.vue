<script lang="ts" setup>
import { isMobile } from "mobile-device-detect";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import SettingButton from "./SettingButton.vue";
import ViewStyleButton from "./ViewStyleButton.vue";
import IconButton from "@/components/button/IconButton.vue";
import { useDisplay } from "vuetify";

const route = useRoute();
const router = useRouter();
const currentRouteName = computed(() => route.name);

const { xs, sm, md } = useDisplay();
const isSmallScreen = computed(() => xs.value || sm.value || md.value);

const goTo = (name: string) => {
  router.push({ name });
};
</script>

<template>
  <v-menu location="bottom" :closeOnBack="true">
    <template v-slot:activator="{ props }">
      <v-btn icon v-bind="props">
        <i class="material-icons menu"></i>
      </v-btn>
    </template>

    <v-list>
      <v-list-item value="viewStyle" v-if="isMobile && currentRouteName === 'home'">
        <ViewStyleButton />
      </v-list-item>

      <v-list-item value="setting">
        <SettingButton />
      </v-list-item>

      <v-list-item v-if="isSmallScreen">
        <IconButton icon="material-icons home" text="Home" @click="goTo('home')" />
      </v-list-item>

      <v-list-item v-if="isSmallScreen">
        <IconButton icon="material-icons info" text="Info" @click="goTo('D1')" />
      </v-list-item>
    </v-list>
  </v-menu>
</template>
