<template>
  <PageLayout>
    <template #pageTitle> {{ page.name }} </template>
    <template #description> {{ page.description }} </template>

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
        <div class="border-b border-dull-secondary">
          <nav class="-mb-px flex space-x-8">
            <a
              v-for="tab in tabs"
              :key="tab.name"
              @click.prevent="current_tab = tab.name"
              href="#"
              :class="[
                current_tab === tab.name
                  ? 'border-pop-primary text-pop-primary'
                  : 'border-transparent text-dull-secondary hover:border-dull-secondary hover:text-dull-secondary',
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
      <div v-for="tab in tabs">
        <KeepAlive v-if="current_tab === tab.name">
          <component
            v-if="current_tab === tab.name"
            :title="tab.name"
            :description="tab.description"
            :is="
              defineAsyncComponent(
                () => import(`@/components/chat/${tab.tab}.vue`),
              )
            "
          />
        </KeepAlive>
      </div>
    </template>
  </PageLayout>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";
import { PageLayout } from "@am-ogs/vue-ui";
import { primary_navigation } from "@/helpers/navigation";

const page = primary_navigation.find((n) => n.name === "Chat");
const tabs = page.items;
const tab = tabs.find((t) => t.current === true);
const current_tab = ref(tab.name);
</script>
