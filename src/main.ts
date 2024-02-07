import { PixelTooltipDirective } from '@mekari/pixel3'
import type { Directive } from 'vue'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import App from './App.vue'

import './pixel.css'

const router = createRouter({
  history: createWebHistory(),
  extendRoutes: (routes) => {
    console.log(routes)
    return routes
  },
})

const app = createApp(App)

app.directive('tooltip', PixelTooltipDirective as unknown as Directive)

app.use(router)
app.mount('#app')
