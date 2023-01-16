import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import 'aos/dist/aos.css'

// importing router
import router from './router'

// importing global components
import Navbar from './components/global/Navbar.vue'
import Footer from './components/global/Footer.vue'

// importing main css
import './assets/main.css'

// creating App
const app = createApp(App)

app.component('Navbar', Navbar)
app.component('Footer', Footer)
app.use(router)
app.use(createPinia())
app.mount('#app')
