<template>
  <PageDivisionLayout>
    <template #divisionTitle>{{ title }}</template>
    <template #divisionDescription> {{ description }}</template>
    <template #divisionContent>
      <ul role="list" class="mt-10 space-y-10 w-1/2">
        <li
          v-for="integration in my_integrations"
          :key="integration.name"
          class="h-36 col-span-1 flex rounded-md shadow-sm"
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
                <i class="fa fa-plug-circle-minus text-3xl"></i>
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

const my_integrations = [
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
    name: "Google",
    initials: "G",
    // icon: "fa-brands fa-google text-red-600",
    icon: "simple-icons:googlecalendar",
    // icon: "logos:google-calendar",
    href: "#",
    type: "Calendar",
    bgColor: "bg-pop-secondary/40",
  },
];
</script>
