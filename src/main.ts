import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'
import './assets/main.css'
import './style.css'
import font from './fonts/Yekan.ttf'
import { messages } from './locales/lang'
  const app = createApp(App)
 const i18n = createI18n({
    locale:'fa',
    fallbackLocale: 'en',
    messages:messages,
    })

app.use(i18n)
app.use(createPinia())
app.use(router)
app.mount('#app')
