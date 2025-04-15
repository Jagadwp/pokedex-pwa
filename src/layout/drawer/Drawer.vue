<script setup lang="ts">
import router from '@/router'
import { useDisplay } from 'vuetify'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const drawerItems = [
    {
        icon: "mdi-home-outline",
        activeIcon: "mdi-home",
        value: "home",
        title: 'Home'
    },
    {
        icon: "mdi-information-slab-circle-outline",
        activeIcon: "mdi-information",
        value: "D1",
        title: 'Info'

    },
];

const handlerNav = (path: string) => {
    router.push(path)
}

const { xs, sm } = useDisplay()
const route = useRoute()

const currentRouteName = computed(() => route.name)
</script>
<template>
    <v-navigation-drawer expand-on-hover rail v-if="!xs && !sm">
        <v-list>
            <v-img :class="'ma-2'"
                :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'"></v-img>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item :active="currentRouteName === item.value" @click="handlerNav(item.value)" :value="item.value"
                v-for="item in drawerItems" :key="item.value" :prepend-icon="item.icon" :title="item.title">

            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
