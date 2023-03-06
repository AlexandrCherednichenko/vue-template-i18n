import App from './App.vue';
import router from './router';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import i18n from '@/i18n';
import '@/assets/css/styles.scss';

const app = createApp(App);

app.use(createPinia())
    .use(router)
    .use(i18n);

app.mount('#app');
