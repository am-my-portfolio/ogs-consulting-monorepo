import { defineStore } from 'pinia';
import { googleOneTap } from 'vue3-google-login';

export const useGoogleStore = defineStore('google', {
  state: () => {
    if (localStorage.getItem('google')) {
      return JSON.parse(localStorage.getItem('google'));
    } else {
      return {
        google_credential: '',
        google_connection_status: false,
      };
    }
  },
  actions: {
    async connectGoogle() {
      googleOneTap()
        .then((response) => {
          // This promise is resolved when user selects an account from the the One Tap prompt
          console.log('Google Account Successfully Connected');
          this.setGmailConnectionStatus(true);
          this.setGoogleCredential(response.credential);
        })
        .catch((error) => {
          console.log('Handle the error', error);
        });
    },

    setGmailConnectionStatus(value) {
      this.google_connection_status = value;
    },
    setGoogleCredential(value) {
      this.google_credential = value;
    },
  },
});
