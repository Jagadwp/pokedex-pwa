<script setup lang="ts">

</script>
<template>
    <v-container fluid>
        <v-row>
            <v-col v-for="i in 12" cols="12" sm="6" md="4">
                <v-skeleton-loader class="mx-auto border" type="image, article" width="30vw"
                    min-width="285"></v-skeleton-loader>
            </v-col>
        </v-row>
    </v-container>
</template>