<template>
  <PageDivisionLayout>
    <template #divisionTitle>{{ title }}</template>
    <template #divisionDescription> {{ description }}</template>
    <template #divisionContent>
      <ul
        role="list"
        class="mt-10 gap-5 sm:gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      >
        <li
          v-for="integration in integrations"
          :key="integration.name"
          class="h-36 col-span-1 flex rounded-md shadow-sm"
        >
          <div
            :class="[
              integration.bgColor,
              'flex w-28 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white',
            ]"
          >
            <!-- <i :class="[integration.icon, 'text-6xl']"></i> -->
            <Icon :icon="integration.icon" class="text-6xl" />
          </div>
          <div
            class="flex flex-1 items-center justify-between truncate rounded-r-md bg-white/80"
          >
            <div class="flex-1 truncate px-4 py-2 text-md text-semibold">
              <a
                :href="integration.href"
                class="font-medium text-pop-primary/80 hover:text-pop-primary"
                >{{ integration.name }}
              </a>
              <p class="mt-1 text-primary/80 text-sm">
                Type: {{ integration.type }}
              </p>
            </div>
            <div class="flex-shrink-0 pr-2">
              <button
                type="button"
                class="inline-flex p-1 m-1 items-center justify-center rounded-full bg-transparent text-primary hover:text-pop-primary focus:outline-none focus:ring-2 focus:ring-pop-primary focus:ring-offset-2"
              >
                <span class="sr-only">Open options</span>
                <!-- <i class="fa-solid fa-ellipsis-vertical" aria-hidden="true"></i> -->
                <i
                  class="fa fa-plug-circle-xmark fa-rotate-by text-3xl"
                  style="--fa-rotate-angle: 45deg"
                ></i>
              </button>
            </div>
          </div>
        </li>
      </ul>

      <!-- Login/Logout Button -->
      <!-- <button
          v-if="!is_authenticated"
          @click="authenticate_user"
          class="px-6 py-3 w-fit rounded-lg text-lg font-semibold bg-pop-primary/80 hover:bg-pop-secondary text-secondary hover:text-pop-primary transition shadow-lg"
        >
          Sign in with Google
        </button>

        <button
          v-else
          @click="logout_user"
          class="bg-red-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
        >
          Logout
        </button> -->

      <!-- Events Section -->
      <div
        v-if="is_authenticated"
        class="mt-8 w-full max-w-lg bg-white p-6 rounded-lg shadow-md"
      >
        <h2 class="text-xl font-semibold mb-4">Upcoming Events</h2>

        <ul v-if="calendar_events.length > 0">
          <li
            v-for="event in calendar_events"
            :key="event.id"
            class="border-b py-2"
          >
            <p class="text-gray-800 font-medium">{{ event.summary }}</p>
            <p class="text-gray-600 text-sm">
              {{ format_date(event.start.dateTime || event.start.date) }}
            </p>
          </li>
        </ul>

        <p v-else class="text-gray-500">No upcoming events found.</p>
      </div>
    </template>
  </PageDivisionLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Icon } from "@iconify/vue"; // https://iconify.design/docs/icon-components/vue/
import PageDivisionLayout from "@/components/layout/PageDivisionLayout.vue";

defineProps<{
  title: string;
  description: string;
}>();

const is_authenticated = ref(false);
const calendar_events = ref([]);
const integrations = [
  {
    name: "Google",
    initials: "G",
    // icon: "fa-brands fa-google text-red-600",
    icon: "simple-icons:googlecalendar",
    // icon: "logos:google-calendar",
    href: "#",
    type: "Calendar",
    bgColor: "bg-pop-secondary/40",
  },
  {
    name: "Outlook",
    initials: "O",
    // icon: "fa-brands fa-microsoft text-blue-600",
    // icon: "file-icons:microsoft-outlook" ,
    // icon: "vscode-icons:file-type-outlook",
    icon: "mdi:microsoft-outlook",
    href: "#",
    type: "Calendar",
    bgColor: "bg-pop-secondary/60",
  },
];

let gapi = null;

const load_google_api = () => {
  const script = document.createElement("script");
  script.src = "https://apis.google.com/js/api.js";
  script.onload = () => {
    gapi = window.gapi;
    init_client();
  };
  document.body.appendChild(script);
};

const init_client = () => {
  gapi.load("client:auth2", () => {
    gapi.client
      .init({
        clientId: "YOUR_GOOGLE_CLIENT_ID",
        scope: "https://www.googleapis.com/auth/calendar.readonly",
        discoveryDocs: [
          "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
        ],
      })
      .then(() => {
        const auth_instance = gapi.auth2.getAuthInstance();
        is_authenticated.value = auth_instance.isSignedIn.get();
        if (is_authenticated.value) fetch_calendar_events();
      });
  });
};

const authenticate_user = () => {
  gapi.auth2
    .getAuthInstance()
    .signIn()
    .then(() => {
      is_authenticated.value = true;
      fetch_calendar_events();
    });
};

const logout_user = () => {
  gapi.auth2
    .getAuthInstance()
    .signOut()
    .then(() => {
      is_authenticated.value = false;
      calendar_events.value = [];
    });
};

const fetch_calendar_events = () => {
  gapi.client.calendar.events
    .list({
      calendarId: "primary",
      timeMin: new Date().toISOString(),
      maxResults: 5,
      singleEvents: true,
      orderBy: "startTime",
    })
    .then((response) => {
      calendar_events.value = response.result.items || [];
    });
};

const format_date = (date_string) => {
  return new Date(date_string).toLocaleString();
};

onMounted(() => {
  load_google_api();
});
</script>
