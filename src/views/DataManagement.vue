<template>
  <PageLayout>
    <template #pageTitle> Data Management </template>
    <template #description> something to manage </template>

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
    </template>
    <!-- End Tabs -->

    <template #pageContent>
      <!-- Divison 1 -->
      <PageDivisionLayout>
        <template #divisionTitle>Profile</template>
        <template #divisionDescription>
          This information will be displayed publicly so be careful what you
          share.
        </template>
        <template #divisionContent>
          <dl
            class="border-b border-secondary"
            v-for="(row, index) in rows"
            :key="index"
          >
            <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
              <dt class="text-sm font-medium text-secondary">
                {{ row.label }}
              </dt>
              <dd
                class="mt-1 flex text-sm text-pop-secondary sm:col-span-2 sm:mt-0"
              >
                <span v-if="row.imageUrl" class="flex-grow">
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </span>
                <span v-else class="flex-grow">{{ row.value }}</span>

                <span
                  class="ml-4 flex flex-shrink-0 items-start"
                  :class="row.secondaryAction ? 'space-x-4' : ''"
                >
                  <button
                    type="button"
                    class="rounded-mdfont-medium text-pop-primary hover:text-pop-secondary focus:outline-none focus:ring-2 focus:ring-pop-primary focus:ring-offset-2"
                  >
                    {{ row.action }}
                  </button>
                  <span
                    v-if="row.secondaryAction"
                    class="text-pop-secondary"
                    aria-hidden="true"
                    >|</span
                  >
                  <button
                    type="button"
                    class="rounded-mdfont-medium text-pop-primary hover:text-pop-secondary focus:outline-none focus:ring-2 focus:ring-pop-primary focus:ring-offset-2"
                  >
                    {{ row.secondaryAction }}
                  </button>
                </span>
              </dd>
            </div>
          </dl>
        </template>
        <!-- End Divison 1 -->
      </PageDivisionLayout>
    </template>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from "@components/layout/PageLayout.vue";
import PageDivisionLayout from "@components/layout/PageDivisionLayout.vue";

const tabs = [
  { name: "Data Access", href: "#", current: false },
  { name: "Encryption", href: "#", current: false },
  { name: "Retention", href: "#", current: true },
  { name: "PII Management", href: "#", current: false },
];
const rows = [
  {
    label: "Name",
    value: "Chelsea Hagon",
    imageUrl: "",
    action: "Update",
    secondaryAction: "",
  },
  {
    label: "Photo",
    value: "",
    imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    action: "Update",
    secondaryAction: "Remove",
  },
  {
    label: "Email",
    value: "chelsea.hagon@example.com",
    action: "Update",
    secondaryAction: "",
  },
  {
    label: "Job Title",
    value: "HR Manager",
    action: "Update",
    secondaryAction: "",
  },
];
</script>
