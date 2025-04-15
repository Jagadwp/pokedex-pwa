<script setup lang="ts">
import TopNavBar from "@/layout/topNavBar/TopNavBar.vue";
import Footer from "./Footer.vue";
import { useLayoutStore } from "@/hooks/useLayoutStore";
import ActionSheet from "@/views/ActionSheet.vue";
import Drawer from "./drawer/Drawer.vue";

const layout = useLayoutStore();
</script>

<template>
  <v-layout class="rounded rounded-md">
    <Drawer v-if="!layout.isPwa" />

    <!-- ActionSheet -->
    <ActionSheet />

    <TopNavBar />

    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer v-if="layout.isPwa" />
  </v-layout>
</template>
