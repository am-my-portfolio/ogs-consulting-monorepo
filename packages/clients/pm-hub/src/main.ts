import '@/main.css';
import FontAwesomeIcon from '@/helpers/fontawesome.library';
import { createApp, watch } from 'vue';
import { createPinia } from 'pinia';

import vue3GoogleLogin from 'vue3-google-login';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Aura from '@primeuix/themes/aura';

import App from './App.vue';
import router from './router';
import auth0 from '@/plugins/auth0.plugin';

const app = createApp(App);
const pinia = createPinia();

watch(
  pinia.state,
  (state) => {
    if (state.n8n) localStorage.setItem('n8n', JSON.stringify(state.n8n));
    if (state.google)
      localStorage.setItem('google', JSON.stringify(state.google));
    if (state.facebook) {
      localStorage.setItem('facebook', JSON.stringify(state.facebook));
    }
  },
  { deep: true },
);

app.component('font-awesome-icon', FontAwesomeIcon);
app
  .use(router)
  .use(pinia)
  .use(auth0)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
  .use(vue3GoogleLogin, {
    clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
  })
  .use(ToastService);
app.mount('#app');
