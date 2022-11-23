import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'

import './assets/styles/general.scss'
createApp(App).use(MotionPlugin)
createApp(App).mount('#app')
