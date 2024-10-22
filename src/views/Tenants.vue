<template>
  <PageLayout>
    <template #pageTitle> Tenants </template>
    <template #description>
      Onboard new Team (needs Super Admin role)
    </template>

    <!-- Tabs -->
    <template #tabs>
      <div class="lg:hidden">
        <label for="selected-tab" class="sr-only">Select a tab</label>
        <select
          id="selected-tab"
          name="selected-tab"
          class="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-pop-secondary ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-pop-primary sm:text-sm sm:leading-6"
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

    <!-- Search  -->
    <template #search>
      <div class="mt-10 divide-y divide-secondary">
        <!-- Search  -->
        <form class="relative flex flex-1 m-1 h-12" action="#" method="GET">
          <label for="search-field" class="sr-only">Search</label>
          <i
            class="fa-solid fa-magnifying-glass text-pop-secondary pointer-events-none absolute inset-y-4 left-2 text-lg"
            aria-hidden="true"
          ></i>
          <input
            id="search-field"
            class="block h-full w-full pl-10 text-pop-secondary placeholder:text-pop-secondary focus:ring-0 sm:text-sm bg-primary border-2 border-secondary rounded-md"
            placeholder="search team ..."
            type="search"
            name="search"
          />
        </form>
        <!-- End Search -->
      </div>
    </template>
    <!-- End Search  -->

    <template #pageContent>
      <Overview v-if="current_tab === 'Overview'" />
      <Onboard v-else-if="current_tab === 'Onboard'" />
    </template>
  </PageLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { navigation } from "@helpers/navigation";

import PageLayout from "@components/layout/PageLayout.vue";
import Overview from "@components/tenants/Overview.vue";
import Onboard from "@components/tenants/Onboard.vue";

const tabs = navigation.find((n) => n.name === "Tenants").items;
const current_tab = ref(tabs.find((t) => t.current === true).name);
</script>
