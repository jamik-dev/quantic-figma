import { createApp } from 'vue'
import App from './App.vue'

// importing router
import router from './router'

// importing main css
import './assets/main.css'

// creating App
const app = createApp(App)

app.use(router)

app.mount('#app')
