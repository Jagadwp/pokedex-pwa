<script setup lang="ts">
import { useTheme } from 'vuetify'
import { useUserInfoStore } from '@/hooks/useUserInfoStore'

const theme = useTheme()
const userInfo = useUserInfoStore()
const handlerTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  userInfo.$patch({ theme: theme.global.name.value })

  theme.global.name.value === 'dark'
    ? (userInfo.isDarkTheme = true)
    : (userInfo.isDarkTheme = false)
}
</script>

<template>
  <v-switch @click="handlerTheme" v-model="userInfo.isDarkTheme" />
</template>
