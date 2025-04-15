import { defineStore } from "pinia"

interface State {
    page: number,

}

export const usePageStore = defineStore('pageStore', {
    state: (): State => {
        return {
            page: 1,
        }
    },

})

