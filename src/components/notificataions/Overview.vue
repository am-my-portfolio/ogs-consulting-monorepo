<template>
  <PageDivisionLayout>
    <template #divisionTitle> Notification Policies </template>
    <template #divisionContent>
      <ul role="list" class="mt-5 gap-5 sm:gap-6">
        <li
          v-for="rule in notificationPolicies"
          :key="rule.name"
          class="mt-10 h-16 flex rounded-md shadow-sm"
        >
          <div
            class="flex w-16 flex-shrink-0 items-center justify-center rounded-xl text-sm font-medium text-pop-primary border-2 border-pop-primary/40"
          >
            <i
              class="fa-solid fa-bell fa-rotate-by text-3xl"
              aria-hidden="true"
            ></i>
          </div>

          <div class="flex flex-1 ml-6 items-center justify-between truncate">
            <div class="flex-1 truncate px-4 py-2 text-sm">
              <a
                :href="rule.href"
                class="font-medium text-pop-secondary hover:text-pop-primary"
                >{{ rule.name }}</a
              >
              <p class="text-secondary">
                {{ rule.description }}
              </p>
            </div>
          </div>
          <div>
            <button
              type="button"
              class="inline-flex items-center rounded-md bg-pop-primary/40 px-5 py-1.5 text-sm font-semibold text-pop-secondary shadow-sm ring-1 ring-inset ring-secondary hover:bg-pop-primary/80 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-pop-primary/40"
            >
              Edit
            </button>
          </div>
        </li>
      </ul>
    </template>
  </PageDivisionLayout>

  <PageDivisionLayout>
    <template #divisionTitle> Delivery Rules </template>
    <template #divisionContent>
      <ul role="list" class="mt-5 gap-5 sm:gap-6">
        <li
          v-for="rule in deliveryRules"
          :key="rule.name"
          class="mt-10 h-16 flex rounded-md shadow-sm"
        >
          <div
            class="flex w-16 flex-shrink-0 items-center justify-center rounded-xl text-sm font-medium text-pop-primary border-2 border-pop-primary/40"
          >
            <i
              class="fa-solid fa-bell fa-rotate-by text-3xl"
              aria-hidden="true"
            ></i>
          </div>

          <div class="flex flex-1 ml-6 items-center justify-between truncate">
            <div class="flex-1 truncate px-4 py-2 text-sm">
              <a
                :href="rule.href"
                class="font-medium text-pop-secondary hover:text-pop-primary"
                >{{ rule.name }}</a
              >
              <p class="text-secondary">
                {{ rule.description }}
              </p>
            </div>
          </div>
          <div>
            <button
              type="button"
              class="inline-flex items-center rounded-md bg-pop-primary/40 px-5 py-1.5 text-sm font-semibold text-pop-secondary shadow-sm ring-1 ring-inset ring-secondary hover:bg-pop-primary/80 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-pop-primary/40"
            >
              Edit
            </button>
          </div>
        </li>
      </ul>
    </template>
  </PageDivisionLayout>

  <PageDivisionLayout>
    <template #divisionTitle> Escalation Rules </template>
    <template #divisionContent>
      <ul role="list" class="mt-5 gap-5 sm:gap-6">
        <li
          v-for="rule in escalationRules"
          :key="rule.name"
          class="mt-10 h-16 flex rounded-md shadow-sm"
        >
          <div
            class="flex w-16 flex-shrink-0 items-center justify-center rounded-xl text-sm font-medium text-pop-primary border-2 border-pop-primary/40"
          >
            <i
              class="fa-solid fa-bell fa-rotate-by text-3xl"
              aria-hidden="true"
            ></i>
          </div>

          <div class="flex flex-1 ml-6 items-center justify-between truncate">
            <div class="flex-1 truncate px-4 py-2 text-sm">
              <a
                :href="rule.href"
                class="font-medium text-pop-secondary hover:text-pop-primary"
                >{{ rule.name }}</a
              >
              <p class="text-secondary">
                {{ rule.description }}
              </p>
            </div>
          </div>
          <div>
            <button
              type="button"
              class="inline-flex items-center rounded-md bg-pop-primary/40 px-5 py-1.5 text-sm font-semibold text-pop-secondary shadow-sm ring-1 ring-inset ring-secondary hover:bg-pop-primary/80 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-pop-primary/40"
            >
              Edit
            </button>
          </div>
        </li>
      </ul>
    </template>
  </PageDivisionLayout>

  <PageDivisionLayout>
    <template #divisionTitle> Custom Notifications </template>
    <template #divisionContent>
      <ul role="list" class="mt-5 gap-5 sm:gap-6">
        <li
          v-for="rule in customNotifications"
          :key="rule.name"
          class="mt-10 h-16 flex rounded-md shadow-sm"
        >
          <div
            class="flex w-16 flex-shrink-0 items-center justify-center rounded-xl text-sm font-medium text-pop-primary border-2 border-pop-primary/40"
          >
            <i
              class="fa-solid fa-bell fa-rotate-by text-3xl"
              aria-hidden="true"
            ></i>
          </div>

          <div class="flex flex-1 ml-6 items-center justify-between truncate">
            <div class="flex-1 truncate px-4 py-2 text-sm">
              <a
                :href="rule.href"
                class="font-medium text-pop-secondary hover:text-pop-primary"
                >{{ rule.name }}</a
              >
              <p class="text-secondary">
                {{ rule.description }}
              </p>
            </div>
          </div>
          <div>
            <button
              type="button"
              class="inline-flex items-center rounded-md bg-pop-primary/40 px-5 py-1.5 text-sm font-semibold text-pop-secondary shadow-sm ring-1 ring-inset ring-secondary hover:bg-pop-primary/80 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-pop-primary/40"
            >
              Edit
            </button>
          </div>
        </li>
      </ul>
    </template>
  </PageDivisionLayout>
</template>

<script setup lang="ts">
import PageDivisionLayout from "@components/layout/PageDivisionLayout.vue";

const notificationPolicies = [
  {
    name: "Default Policy",
    description: "Notify the entire team for any incident",
    href: "",
  },
];

const deliveryRules = [
  {
    name: "Critical Incident",
    description: "Notify me when a critical incident is triggered",
    href: "",
  },
  {
    name: "Any Incident",
    description: "Notify me when any incident is triggered",
    href: "",
  },
];

const escalationRules = [
  {
    name: "Default Escalation ",
    description: "Escalate to the entire team after 5 minutes",
    href: "",
  },
];

const customNotifications = [
  {
    name: "Holiday Critical Incident",
    description: "Notify Pager Duty Guy when a critical incident is triggered",
    href: "",
  },
  {
    name: "Holiday Normal Incident",
    description: "Notify Pager Duty Guy when any incident is triggered",
    href: "",
  },
];
</script>
