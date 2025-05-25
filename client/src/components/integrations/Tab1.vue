<template>
  <PageDivisionLayout>
    <template #divisionTitle>{{ title }}</template>
    <template #divisionDescription> {{ description }}</template>
    <template #divisionContent>
      <ul role="list" class="mt-10 gap-5 sm:gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
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
                  <i :class="[
                    'fa text-4xl',
                    integration.is_connected
                      ? 'fa-plug-circle-check text-pop-secondary dark:text-pop-primary'
                      : 'fa-plug fa-rotate-by dark:text-dull-primary',
                  ]" style="--fa-rotate-angle: 45deg"></i>
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
import {
  createFacebookCredentials,
  getAndSetPageAccessToken,
  getFBLoginStatus,
  loginWithFacebook,
  publishPost,
} from "@/http/gateways";

defineProps<{
  title: string;
  description: string;
}>();

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
]);

declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: any;
  }
}

const fb_access_token = ref();
const fb_user_id = ref();
const fb_page_id = ref();
const fb_page_access_token = ref();

onMounted(async () => {
  await getFBLoginStatus(my_integrations, fb_access_token, fb_user_id);
  await getAndSetPageAccessToken(
    fb_access_token,
    fb_page_access_token,
    fb_page_id,
    fb_user_id,
  );
  // await publishPost(fb_page_access_token, fb_page_id)

  // TODO: instead of publishing post from here,
  // next step is to create credential in n8n and let that workflow there handles the posting
  // await createFacebookCredentials('afshan my briefcase', fb_page_access_token)
});

const handleIntegration = (value: string) => {
  console.log(value);
  if (value === "Facebook" && !my_integrations.value[2].is_connected) {
    loginWithFacebook();
  }
};
</script>
