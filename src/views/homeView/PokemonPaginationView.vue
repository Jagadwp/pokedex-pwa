<script setup lang="ts">
import { getAll } from "@/api/pokemonApi";
import Card from "@/components/card/Card.vue";
import TinyCard from "@/components/card/TinyCard.vue";
import PageCardSkeleton from "@/components/loading/PageCardSkeleton.vue";
import Container from "@/components/viewContainer/Container.vue";
import { useLayoutStore } from "@/hooks/useLayoutStore";
import {
  usePokemonItemStore,
  type PokemonItemStore,
} from "@/hooks/usePokemonItemStore";
import { getUrlId } from "@/utils/function";
import _ from "lodash";
import { debounce } from "lodash";
import { computed, ref, watch } from "vue";
import { useQuery } from "vue-query";
import { useDisplay } from "vuetify";


const { xs, sm, lg, md, xl } = useDisplay();
const layout = useLayoutStore();

const page = ref<number>(1);
const pokemonItem = usePokemonItemStore();



const { isLoading, isError, data, error, isFetching } = useQuery({
  queryKey: ["getAllPokemon", page],
  queryFn: () => getAll({ page: page.value }),
  enabled: true,
  refetchOnWindowFocus: false,
  keepPreviousData: true,
});

const handlePagination = debounce((pageNum: number) => {
  page.value = pageNum;
  window.scrollTo({
    top: 0,

  });
}, 400);

const handleToggle = ({ name, url }: { name: string; url: string }) => {
  pokemonItem.name = name;
  pokemonItem.id = getUrlId(url);
  pokemonItem.isPokemonItemOpen = !pokemonItem.isPokemonItemOpen;
};

watch(isFetching, () => {
  pokemonItem.paginationLoading = isFetching.value;
});

const length = ref(100)
const pageArray = computed(() => { return _.range(1, length.value + 1); })

function checkAndReturnInteger(x: number) {
  if (Number.isInteger(x)) {
    return x;
  } else {
    return Math.floor(x);
  }
}

watch(data, (value) => {
  if (value?.next !== null && value?.next !== undefined) {
    const totalPage = checkAndReturnInteger(value.count / 12)
    length.value = totalPage + 1
  }
})
</script>

<template>
  <Container>
    <PageCardSkeleton v-if="isLoading" />
    <div>
      <div v-if="isError">An error has occurred: {{ error }}</div>

      <v-row v-if="data" class="mt-1 mx-1">
        <v-col 
          class="d-flex justify-center" 
          :cols="layout.isTinyGridView ? 6 : 12" sm="6"
          :md="layout.isTinyGridView ? 6 : 4" v-for="(item, index) in data.results" :key="item.name"
          @click="handleToggle({ ...item })"
        >
          <TinyCard 
            v-if="layout.isTinyGridView" 
            :title="item.name"
            :id="getUrlId(item.url)" 
            :isLoading="isLoading" 
          />
          <Card 
            v-else 
            :title="item.name"
            :id="getUrlId(item.url)"
            :isLoading="isLoading" 
          />
        </v-col>
      </v-row>
      <div class="d-flex flex-column align-center" v-if="data">
        <v-pagination 
          :length="length" 
          v-on:next="handlePagination" 
          v-on:prev="handlePagination"
          v-on:update:model-value="handlePagination" :density="sm || xs ? 'comfortable' : 'default'" class="mt-2"
          total-visible="4"
        >
        </v-pagination>
        <v-select 
          v-model="page" 
          @update:model-value="handlePagination" 
          :items="pageArray" 
          density="compact"
        ></v-select>
      </div>
    </div>
  </Container>
</template>
