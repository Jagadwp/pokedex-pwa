<script lang="ts">
export default {
    data: () => ({
        tab: null,
    }),
}
</script>
<template>
    <v-card>
        <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
            <v-tab :value="1">Envolutions</v-tab>
            <v-tab :value="2">Moves</v-tab>
            <v-tab :value="3">Type</v-tab>
        </v-tabs>
        <v-window v-model="tab">
            <v-window-item v-for="n in 3" :key="n" :value="n">
                <v-container fluid>
                    <v-row>
                        <v-col v-for="i in 6" :key="i" cols="12" md="12">

                            <div class="text-center" v-if="n === 1">1</div>
                            <div class="text-center" v-if="n === 2">2</div>
                            <div class="text-center" v-if="n === 3">3</div>

                        </v-col>
                    </v-row>
                </v-container>
            </v-window-item>
        </v-window>
    </v-card>
</template>