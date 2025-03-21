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
    </template>
  </PageDivisionLayout>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"; // https://iconify.design/docs/icon-components/vue/
import PageDivisionLayout from "@/components/layout/division/PageDivisionLayout.vue";

defineProps<{
  title: string;
  description: string;
}>();

const integrations = [
  {
    name: "Gmail",
    initials: "G",
    // icon: "fa-brands fa-google text-red-600",
    // icon:"simple-icons:googlecalendar",
    // icon: "logos:google-gmail",
    icon: "mdi:gmail",
    href: "#",
    type: "Inbox",
    bgColor: "bg-pop-secondary/40",
  },
  {
    name: "Outlook",
    initials: "O",
    // icon: "fa-brands fa-microsoft text-blue-600",
    // icon: "vscode-icons:file-type-outlook",
    icon: "file-icons:microsoft-outlook",
    href: "#",
    type: "Calendar",
    bgColor: "bg-pop-secondary/60",
  },
];
</script>
