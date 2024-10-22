<template>
  <PageLayout>
    <template #pageTitle> Notifications </template>
    <template #description>
      Setup and manage alerts and notifications for your team
    </template>

    <!-- Tabs -->
    <template #tabs>
      <div class="lg:hidden">
        <label for="selected-tab" class="sr-only">Select a tab</label>
        <select
          id="selected-tab"
          name="selected-tab"
          class="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-pop-secondary ring-1 ring-inset ring-secondary focus:ring-2 focus:ring-inset focus:ring-pop-primary sm:text-sm sm:leading-6"
        >
          <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">
            {{ tab.name }}
          </option>
        </select>
      </div>
      <div class="hidden lg:block">
        <div class="border-b border-secondary">
          <nav class="-mb-px flex space-x-8">
            <a
              v-for="tab in tabs"
              :key="tab.name"
              @click.prevent="current_tab = tab.name"
              href="#"
              :class="[
                current_tab === tab.name
                  ? 'border-pop-primary text-pop-primary'
                  : 'border-transparent text-secondary hover:border-secondary hover:text-secondary',
                'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium',
              ]"
              >{{ tab.name }}
            </a>
          </nav>
        </div>
      </div>
    </template>
    <!-- End Tabs -->

    <template #pageContent>
      <Overview v-if="current_tab === 'Overview'" />
      <Incidents v-else-if="current_tab === 'Incidents'" />
      <Alerts v-else-if="current_tab === 'Alerts'" />
      <Notifications v-else-if="current_tab === 'Notifications'" />
    </template>
  </PageLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { navigation } from "@helpers/navigation";

import PageLayout from "@components/layout/PageLayout.vue";
import Overview from "@components/notificataions/Overview.vue";
import Incidents from "@components/notificataions/Incidents.vue";
import Alerts from "@components/notificataions/Alerts.vue";
import Notifications from "@components/notificataions/Notifications.vue";

const tabs = navigation.find((n) => n.name === "Notifications").items;
const current_tab = ref(tabs.find((t) => t.current === true).name);
</script>
