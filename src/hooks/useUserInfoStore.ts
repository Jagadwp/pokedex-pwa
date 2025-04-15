import { defineStore } from "pinia"

interface State {
  theme: string | Theme
  isDarkTheme: boolean
}

enum Theme {
  darkMode = 'dark',
  lightMode = 'light'
}
export const useUserInfoStore = defineStore('userInfo', {
  state: (): State => {
    return {
      theme: Theme.darkMode,
      isDarkTheme: true
    }
  },
  persist: true,
})




