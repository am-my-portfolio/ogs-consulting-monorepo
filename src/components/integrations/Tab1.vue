<template>
  <PageDivisionLayout>
    <template #divisionTitle>{{ title }}</template>
    <template #divisionDescription> {{ description }}</template>
    <template #divisionContent>
      <ul role="list" class="mt-10 space-y-10 md:w-1/2">
        <li v-for="integration in my_integrations" :key="integration.name"
          class="h-36 col-span-1 flex rounded-md shadow-sm">
          <button class="flex w-full" @click="handleIntegration(integration.name)">
            <div :class="[
              integration.bgColor,
              'flex w-28 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white',
            ]">
              <Icon :icon="integration.icon" class="text-6xl" />
            </div>
            <div class="flex flex-1 items-center justify-between truncate rounded-r-md bg-white/80">
              <div class="flex-1 truncate px-4 py-2 text-md text-semibold">
                <span class="flex font-medium text-pop-primary/80 hover:text-pop-primary">
                  {{ integration.name }}
                </span>
                <p class="mt-1 text-left text-sm text-dull-secondary/80 dark:text-dull-primary">
                  Type: {{ integration.type }}
                </p>
              </div>
              <div class="flex-shrink-0 pr-2">
                <button type="button"
                  class="inline-flex p-1 m-1 items-center justify-center rounded-full bg-transparent text-dull-secondary hover:text-pop-primary focus:outline-none focus:ring-2 focus:ring-pop-primary focus:ring-offset-2">
                  <span class="sr-only">Open options</span>
                  <i :class="['fa text-4xl',
                    integration.is_connected ? 'fa-plug-circle-check text-pop-secondary dark:text-pop-primary'
                      : 'fa-plug fa-rotate-by dark:text-dull-primary']" style="--fa-rotate-angle: 45deg"></i>
                </button>
              </div>
            </div>
          </button>
        </li>
      </ul>
    </template>
  </PageDivisionLayout>
</template>

<script setup lang="ts">
import { onMounted, ref, toRaw } from "vue";
import { Icon } from "@iconify/vue"; // https://iconify.design/docs/icon-components/vue/
import { PageDivisionLayout } from "@am-ogs/vue-ui";

defineProps<{
  title: string;
  description: string;
}>();

onMounted(() => {
  window.FB.getLoginStatus((response) => {
    my_integrations.value[2].is_connected = response.status === 'connected' ? true: false;
  })
});

// TODO: add enum for integration types
const my_integrations = ref([
  {
    name: "Gmail",
    initials: "G",
    is_connected: undefined,
    // icon:"simple-icons:googlecalendar",
    // icon: "logos:google-gmail",
    icon: "mdi:gmail",
    type: "Inbox",
    bgColor: "bg-pop-secondary/60",
  },
  {
    name: "Google Calendar",
    initials: "G",
    is_connected: undefined,
    icon: "simple-icons:googlecalendar",
    // icon: "logos:google-calendar",
    type: "Calendar",
    bgColor: "bg-pop-secondary/60",
  },
  {
    name: "Facebook",
    initials: "FB",
    is_connected: undefined,
    icon: "simple-icons:facebook",
    // icon: "logos:facebook",
    type: "social",
    bgColor: "bg-pop-secondary/60",
  },
])

const handleIntegration = (value: string) => {
  console.log(value);
  if (value === "Facebook" && !my_integrations.value[2].is_connected) {
    loginWithFacebook();
  }
};

declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: any;
  }
}

const initFacebook = () => {
  //   window.fbAsyncInit = () => {
  //     window.FB.init({
  //       appId      : '1878466066236723', // 1878466066236723  9303472846425845 Replace YOUR_APP_ID with your actual Facebook App ID
  //       cookie     : true,
  //       xfbml      : true,
  //       version    : 'v21.0' // Use the latest version available
  //     });

  //     window.FB.AppEvents.logPageView();
  //   };

  //   (function(d, s, id) {
  //      var js, fjs = d.getElementsByTagName(s)[0];
  //      if (d.getElementById(id)) { return; }
  //      js = d.createElement(s); js.id = id;
  //      js.src = "https://connect.facebook.net/en_US/sdk.js";
  //      fjs.parentNode.insertBefore(js, fjs);
  //    }(document, 'script', 'facebook-jssdk'));
}

const loginWithFacebook = (): void => {
  window.FB.login(
    (response: any) => {
      if (response.authResponse) {
        console.log("Welcome! Fetching your information.... ");
        window.FB.api("/me", { fields: "name,email" }, (response: any) => {
          console.log(`Good to see you, ${response.name}.`);
          console.log(response);
        });
      } else {
        console.log("User cancelled login or did not fully authorize.");
      }
    },
    {
      scope: "email, public_profile, pages_manage_posts",
      // only email, public_profile scopes can be used for testing before app is reviewed
      // but I am keeping the app in `development` mode, so I can request additional scopes here
      // but only the users added in the App Roles in the FB App console can test the app
      extras: {
        config_id: "1237220047819037",
      },
    },
  );
}
</script>
