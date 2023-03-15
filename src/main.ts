import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Create vue instance
const app = createApp(App);

app.use(router);
// Install the plugin first
app.use(store);

// Mount your app
app.mount('#app');