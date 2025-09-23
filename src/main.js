import { createApp } from 'vue';
import './assets/style.css'
import 'virtual:svg-icons-register';
import router from './app/plugins/router.js'
import App from './app/App.vue'

const app = createApp(App);

app.use(router);
app.mount('#app')
