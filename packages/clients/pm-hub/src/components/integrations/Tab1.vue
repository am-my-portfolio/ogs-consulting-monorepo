<template>
  <PageDivisionLayout>
    <template #divisionTitle>{{ title }}</template>
    <template #divisionDescription> {{ description }}</template>
    <template #divisionContent>
      <ul role="list" class="grid grid-cols-2 lg:grid-cols-2 mt-10 gap-5">
        <!-- <GoogleLogin :callback="callback" prompt /> -->
        <li
          v-for="integration in my_integrations"
          :key="integration.name"
          class="h-36 col-span-1 flex rounded-md shadow-sm"
        >
          <button
            class="flex w-full"
            @click="handleIntegration(integration.name)"
          >
            <div
              :class="[
                integration.bgColor,
                'flex w-28 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white',
              ]"
            >
              <Icon :icon="integration.icon" class="text-6xl" />
            </div>
            <div
              class="flex flex-1 items-center justify-between truncate rounded-r-md bg-white/80"
            >
              <div class="flex-1 truncate px-4 py-2 text-md text-semibold">
                <span
                  class="flex font-medium text-pop-primary/80 hover:text-pop-primary"
                >
                  {{ integration.name }}
                </span>
                <p
                  class="mt-1 text-left text-sm text-dull-secondary/80 dark:text-dull-primary"
                >
                  Type: {{ integration.type }}
                </p>
              </div>
              <div class="flex-shrink-0 pr-2">
                <button
                  type="button"
                  class="inline-flex p-1 m-1 items-center justify-center rounded-full bg-transparent text-dull-secondary hover:text-pop-primary focus:outline-none focus:ring-2 focus:ring-pop-primary focus:ring-offset-2"
                >
                  <span class="sr-only">Open options</span>
                  <i
                    :class="[
                      'fa text-4xl',
                      integration.is_connected
                        ? 'fa-plug-circle-check text-pop-secondary dark:text-pop-primary'
                        : 'fa-plug fa-rotate-by dark:text-dull-primary',
                    ]"
                    style="--fa-rotate-angle: 45deg"
                  ></i>
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
import { computed, onMounted, ref, toRaw } from 'vue';
import { Icon } from '@iconify/vue';
import { PageDivisionLayout } from '@am-ogs/vue-ui';
import { useFacebookStore } from '@/stores/facebook';
import { useGoogleStore } from '@/stores/google';

const fb_store = useFacebookStore();
const google_store = useGoogleStore();

defineProps<{
  title: string;
  description: string;
}>();

// TODO: add enum for integration types
const my_integrations = computed(() => [
  {
    name: 'Google',
    initials: 'G',
    is_connected: google_store.google_connection_status,
    // icon:"simple-icons:googlecalendar",
    // icon: "logos:google-gmail",
    icon: 'mdi:google',
    type: 'Inbox, Calendar',
    bgColor: 'bg-pop-secondary/80',
  },
  {
    name: 'Facebook',
    initials: 'FB',
    is_connected: fb_store.fb_connection_status,
    icon: 'simple-icons:facebook',
    // icon: "logos:facebook",
    type: 'social',
    bgColor: 'bg-pop-secondary/80',
  },
]);

onMounted(async () => {
  if (!fb_store.fb_connection_status) {
    await fb_store.getFBLoginStatus();
    await fb_store.getAndSetPageAccessToken();
  }

  if (!google_store.google_connection_status) {
  }
});

const handleIntegration = (value: string) => {
  console.log(`Integrating ${value}`);
  if (value === 'Facebook' && !fb_store.fb_connection_status) {
    fb_store.connectFacebook();
  } else if (value === 'Google' && !google_store.google_connection_status) {
    google_store.connectGoogle();
  }
};
</script>
