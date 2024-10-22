<template>
  <main class="flex-1 not-italic">
    <div class="relative mx-auto">
      <div class="pb-16 pt-10">
        <div class="px-4 sm:px-6 lg:px-0">
          <h1 class="text-3xl font-bold tracking-tight text-pop-secondary">
            Calendar
          </h1>
        </div>
        <div class="px-4 sm:px-6 lg:px-0">
          <div class="py-6">
            <!-- Tabs -->
            <div class="lg:hidden">
              <label for="selected-tab" class="sr-only">Select a tab</label>
              <select
                id="selected-tab"
                name="selected-tab"
                class="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-pop-secondary ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-pop-primary sm:text-sm sm:leading-6"
              >
                <option
                  v-for="tab in tabs"
                  :key="tab.name"
                  :selected="tab.current"
                >
                  {{ tab.name }}
                </option>
              </select>
            </div>
            <div class="hidden lg:block">
              <div class="border-b border-gray-200">
                <nav class="-mb-px flex space-x-8">
                  <a
                    v-for="tab in tabs"
                    :key="tab.name"
                    :href="tab.href"
                    :class="[
                      tab.current
                        ? 'border-pop-primary text-pop-primary'
                        : 'border-transparent text-secondary hover:border-gray-300 hover:text-secondary',
                      'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium',
                    ]"
                    >{{ tab.name }}</a
                  >
                </nav>
              </div>
            </div>

            <Upcoming />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Upcoming from "@components/calendar/Upcoming.vue";

const tabs = [
  { name: "Upcoming", href: "#", current: true },
  { name: "Schedule", href: "#", current: false },
  { name: "Tutorials", href: "#", current: false },
  { name: "Contact Us", href: "#", current: false },
];
</script>
