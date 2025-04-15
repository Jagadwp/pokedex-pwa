<script setup lang="ts">
import SettingButton from '../button/SettingButton.vue';
</script>
<template>
    <v-menu location="top">
        <template v-slot:activator="{ props }">
            <v-btn icon="mdi-plus" v-bind="props" style="position: fixed; bottom: 50px; right: 20px;"
                color="purple-darken-2">
            </v-btn>
        </template>

        <v-list>
            <v-list-item value="setting">
                <SettingButton />
            </v-list-item>
        </v-list>
    </v-menu>
</template>