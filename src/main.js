import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

//Pinia持久化插件
import persist from 'pinia-plugin-persistedstate'


import App from './App.vue'
import router from './router'

const pinia = createPinia()
pinia.use(persist)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
