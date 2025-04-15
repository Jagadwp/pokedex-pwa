<script setup lang="ts">
interface IconButtonProps {
  icon: string
  text?: string
}

const props = defineProps<IconButtonProps>()
</script>
<template>
  <div class="d-flex align-center">
    <i :class="props.icon" class="mr-2"></i>

    {{ props.text }}
  </div>
</template>
