import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/styles/main.scss';
import '@/styles/responsive-mobile.scss';
import '@/styles/responsive-tablet.scss';

const app = createApp(App);

app.use(router);
app.mount('#app');
