<script setup lang="ts">
import Container from "@/components/viewContainer/Container.vue";
import { useTheme } from "vuetify/lib/framework.mjs";

const theme = useTheme();
</script>
<template>
  <Container>
    <div class="d-flex flex-column m-3" style="align-items: center">
      <h1>About Me</h1>
      <v-btn class="mt-4" prepend-icon="mdi-linkedin" href="https://www.linkedin.com/in/jagadwp/" variant="text">
        Visit my profile page
      </v-btn>
      <v-btn prepend-icon="mdi-github" href="https://github.com/Jagadwp/pokedex-pwa" variant="text">
        Pokedex PWA Repository
      </v-btn>
      <v-btn prepend-icon="mdi-link-box-variant" href="https://pokeapi.co/" variant="text">
        Pokemon Api Documentation
      </v-btn>
    </div>
  </Container>
</template>
