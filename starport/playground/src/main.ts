import { createApp } from 'vue'
import App from './App.vue'
import StarportPlugin from '../../src/index'
import { createRouter, createWebHistory } from 'vue-router'

import routes from 'virtual:generated-pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

createApp(App).use(StarportPlugin()).use(router).mount('#app')
