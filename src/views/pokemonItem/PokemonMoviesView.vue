<script setup lang="ts">
import _ from 'lodash'
import { Move } from '@/types/PokemonOne';
interface Props {
    move: Move[];
}

const props = defineProps<Props>()
</script>
<template>
    <v-card elevation="2" v-for="item in props.move" class="mb-2">
        <v-card-text>{{ _.capitalize(item.move.name) }}</v-card-text>
    </v-card>
</template>