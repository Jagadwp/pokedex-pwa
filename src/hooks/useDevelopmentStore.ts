import { defineStore } from "pinia"

interface State {
    stage: boolean,

}

export const useDevelopmentstore = defineStore('development', {
    state: (): State => {
        return {
            stage: process.env.NODE_ENV === 'production'
        }
    },

})




