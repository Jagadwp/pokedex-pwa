import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labsComponents from 'vuetify/labs/components'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { VueQueryPlugin } from "vue-query";
import '@mdi/font/css/materialdesignicons.css'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const vuetify = createVuetify({
    components: {
        ...components,
        ...labsComponents,
    },
    directives,
    ssr: true,
    theme: { defaultTheme: 'light' },
    icons: {
        defaultSet: 'mdi',
    },
})

const app = createApp(App).use(vuetify)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(VueQueryPlugin);
app.use(pinia)
app.use(router)


app.mount('#app')

