import '@/main.css';
import FontAwesomeIcon from '@/helpers/fontawesome.library';
import { createApp, watch } from 'vue';
import { createPinia } from 'pinia';

import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Aura from '@primeuix/themes/aura';

import App from './App.vue';
import router from './router';
import auth0 from '@/plugins/auth0.plugin';
import { stat } from 'fs';

const app = createApp(App);
const pinia = createPinia();

declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: any;
  }
}

watch(
  pinia.state,
  (state) => {
    if (state.n8n) sessionStorage.setItem('n8n', JSON.stringify(state.n8n));
    if (state.facebook)
      sessionStorage.setItem('facebook', JSON.stringify(state.facebook));
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
  .use(ToastService);
app.mount('#app');
