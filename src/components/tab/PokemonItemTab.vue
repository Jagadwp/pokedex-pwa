<script lang="ts" setup>
import { ref } from 'vue';

const tab = ref(null)
</script>
<template>
    <v-card width="75vw" elevation="0">
        <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center" grow>
            <v-tab :value="1">Envolutions</v-tab>
            <v-tab :value="2">Moves</v-tab>
        </v-tabs>
        <v-window v-model="tab" style="min-height: 50vh;">
            <v-window-item v-for="n in 3" :key="n" :value="n">
                <v-container fluid>
                    <v-row>
                        <v-col cols="12" md="12">

                            <slot v-if="n === 1" name="Envolutions"> </slot>
                            <slot v-if="n === 2" name="Moves"> </slot>
                            <slot v-if="n === 3" name="Types"> </slot>

                        </v-col>
                    </v-row>
                </v-container>
            </v-window-item>
        </v-window>
    </v-card>
</template>