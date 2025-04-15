<script setup lang="ts">
import { ref } from "vue";

interface Props {
  path: string;
  name: string;
}

const props = defineProps<Props>();
const isClicked = ref(false);

const handleChooseType = () => {
  isClicked.value = !isClicked.value;
  isClicked.value && console.log(props.name);
};
</script>
<template>
  <v-img
    @click="handleChooseType"
    :style="{ opacity: isClicked ? '' : '0.4' }"
    :src="props.path"
    height="20px"
    width="20px"
  />
</template>
