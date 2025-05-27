import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
import { useExternalApi } from '@/composables/useExternalApi';

// https://www.vuemastery.com/blog/refresh-proof-your-pinia-stores/
// TODO: Need to use secure storage
export const useFacebookStore = defineStore('facebook', {
  state: () => {
    if (sessionStorage.getItem('facebook')) {
      return JSON.parse(sessionStorage.getItem('facebook'));
    } else {
      return {
        fb_connection_status: false,
        fb_access_token: '',
        fb_user_id: '',
        fb_page_id: '',
        fb_page_access_token: '',
      };
    }
  },
  // getters: {
  //   connectionStatus: (state) => state.fb_connection_status,
  //   accessToken: (state) => state.fb_access_token,
  //   userId: (state) => state.fb_user_id,
  //   pageId: (state) => state.fb_page_id,
  //   pageAccessToken: (state) => state.fb_page_access_token,
  // },
  actions: {
    getFBLoginStatus() {
      console.log('getFBLoginStatus');
      window.FB.getLoginStatus(async (response) => {
        const is_connected = response.status === 'connected' ? true : false;
        this.setFacebookConnectionStatus(is_connected);
        this.setFacebookAccessToken(response?.authResponse?.accessToken);
        this.setFacebookUserId(response?.authResponse?.userID);
        // console.log(fb_access_token.value);
      });
    },
    async getAndSetPageAccessToken() {
      console.log('getAndSetPageAccessToken');
      // Option 1:
      // https://developers.facebook.com/docs/facebook-login/guides/access-tokens#pagetokens
      const config = {
        url: `https://graph.facebook.com/${this.fb_user_id}/accounts?access_token=${this.fb_access_token}`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      };

      const { data, error } = await useExternalApi({ config });
      // console.log(data, error);
      this.setFacebookPageId(data?.data[0]?.id);
      this.setFacebookPageAccessToken(data?.data[0]?.access_token);
      // console.log(fb_page_access_token.value);

      // Option 2;
      // window.FB.api(`/${fb_page_id.value}`, { fields: 'access_token' }, (response) => {
      //   if (response && response.access_token) {
      //     fb_page_access_token.value = response.access_token;
      //   } else {
      //     console.log('Failed to get page access token');
      //   }
      // });
    },

    // THIS WORKS!!! both options !!!
    async publishPost(fb_page_access_token, fb_page_id) {
      // https://developers.facebook.com/docs/pages-api/getting-started

      // Option 1: using axios
      // const config = {
      //   url: `https://graph.facebook.com/v22.0/${fb_page_id.value}/feed`,
      //   method: "POST",
      //   headers: {
      //     "content-type": "application/json",
      //   },
      //   data: {
      //     "message": "your_message_text",
      //     "access_token": fb_page_access_token.value
      //   }
      // };

      // const { data, error } = await useExternalApi({ config });
      // console.log(data, error)

      // Option 2: using FB.api
      if (fb_page_access_token.value) {
        window.FB.api(
          `/${fb_page_id.value}/feed`,
          'POST',
          {
            message: 'This is a test post from Vue 3!',
            link: 'https://example.com',
            access_token: fb_page_access_token.value,
          },
          (response) => {
            if (response && !response.error) {
              console.log('Post published successfully!');
            } else {
              console.error('Error publishing post:', response.error);
            }
          },
        );
      }
    },

    loginWithFacebook() {
      window.FB.login(
        (response: any) => {
          if (response.authResponse) {
            console.log('Welcome! Fetching your information.... ');
            window.FB.api('/me', { fields: 'name,email' }, (response: any) => {
              console.log(`Good to see you, ${response.name}.`);
              console.log(response);
            });
          } else {
            console.log('User cancelled login or did not fully authorize.');
          }
        },
        {
          scope:
            'email, public_profile, pages_manage_posts, pages_read_engagement',
          // only email, public_profile scopes can be used for testing before app is reviewed
          // but I am keeping the app in `development` mode, so I can request additional scopes here
          // but only the users added in the App Roles in the FB App console can test the app
          extras: {
            config_id: '1237220047819037',
          },
        },
      );
    },

    setFacebookConnectionStatus(value) {
      this.fb_connection_status = value;
    },
    setFacebookAccessToken(value) {
      this.fb_access_token = value;
    },
    setFacebookUserId(value) {
      this.fb_user_id = value;
    },
    setFacebookPageId(value) {
      this.fb_page_id = value;
    },
    setFacebookPageAccessToken(value) {
      this.fb_page_access_token = value;
    },
  },
});
