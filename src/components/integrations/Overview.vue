<template>
  <!-- Standard Integrations List -->
  <PageDivisionLayout>
    <template #divisionTitle> Standard Integrations</template>

    <template #divisionContent>
      <ul
        role="list"
        class="mt-10 gap-5 sm:gap-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        <li
          v-for="integration in standardIntegrations"
          :key="integration.name"
          class="h-36 col-span-1 flex rounded-md shadow-sm"
        >
          <div
            :class="[
              integration.bgColor,
              'flex w-28 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white',
            ]"
          >
            {{ integration.initials }}
          </div>
          <div
            class="flex flex-1 items-center justify-between truncate rounded-r-md bg-white/80"
          >
            <div class="flex-1 truncate px-4 py-2 text-sm">
              <a
                :href="integration.href"
                class="font-medium text-pop-primary/80 hover:text-pop-primary"
                >{{ integration.name }}</a
              >
              <p class="mt-1 text-secondary text-xs">
                Type: {{ integration.type }}
              </p>
            </div>
            <div class="flex-shrink-0 pr-2">
              <button
                type="button"
                class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent text-secondary hover:text-pop-primary focus:outline-none focus:ring-2 focus:ring-pop-primary focus:ring-offset-2"
              >
                <span class="sr-only">Open options</span>
                <i class="fa-solid fa-ellipsis-vertical" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </template>
  </PageDivisionLayout>
  <!-- End Standard Integrations List -->

  <!-- Custom Integrations List -->
  <PageDivisionLayout>
    <template #divisionTitle> Custom Integrations</template>
    <template #divisionContent>
      <ul role="list" class="mt-5 gap-5 sm:gap-6 w-4/5">
        <li
          v-for="integration in customIntegrations"
          :key="integration.name"
          class="mt-10 h-28 flex rounded-md shadow-sm"
        >
          <div
            class="flex w-36 flex-shrink-0 items-center justify-center rounded-xl text-sm font-medium text-pop-primary hover:text-pop-secondary border-2 border-pop-primary/40"
          >
            <i
              class="fa-solid fa-plug-circle-plus fa-rotate-by text-6xl"
              style="--fa-rotate-angle: 45deg"
              aria-hidden="true"
            ></i>
          </div>

          <div
            class="flex flex-1 ml-6 items-center justify-between truncate border-b-2"
          >
            <div class="flex-1 truncate px-4 py-2 text-sm">
              <a
                :href="integration.href"
                class="font-medium text-pop-secondary hover:text-pop-primary"
                >{{ integration.name }}</a
              >
              <p class="text-secondary">
                Create Custom Integration with our Api
              </p>
            </div>
          </div>
        </li>
      </ul>
    </template>
  </PageDivisionLayout>
</template>

<script setup lang="ts">
import PageDivisionLayout from "@components/layout/PageDivisionLayout.vue";

const standardIntegrations = [
  {
    name: "Okta/Auth0",
    initials: "Auth",
    href: "#",
    type: "IAM",
    bgColor: "bg-pop-secondary/10",
  },
  {
    name: "Google Analytics",
    initials: "GA",
    href: "#",
    type: "Analytics",
    bgColor: "bg-pop-secondary/20",
  },
  {
    name: "Slack",
    initials: "S",
    href: "#",
    type: "Comms",
    bgColor: "bg-pop-secondary/30",
  },
  {
    name: "HubSpot",
    initials: "HS",
    href: "#",
    type: "CRM",
    bgColor: "bg-pop-secondary/40",
  },
  {
    name: "Sendgrid",
    initials: "SG",
    href: "#",
    type: "Comms",
    bgColor: "bg-pop-secondary/50",
  },
  {
    name: "LogRythm",
    initials: "LR",
    href: "#",
    type: "Logging",
    bgColor: "bg-pop-secondary/60",
  },
  {
    name: "Splunk",
    initials: "SP",
    href: "#",
    type: "Monitoring",
    bgColor: "bg-pop-secondary/70",
  },
];

const customIntegrations = [
  {
    name: "DLP",
    href: "",
  },
  {
    name: "Azure",
    href: "",
  },
];
</script>
