<template>
  <PageLayout>
    <template #pageTitle> Support </template>
    <template #description>
      Provide support to your team members and clients
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
      <!-- Divison 1 (will go tot the default slot of the PageLayout) -->
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
      </PageDivisionLayout>
      <!-- End Divison 1 -->

      <!-- Divison 2 -->
      <PageDivisionLayout>
        <template #divisionTitle>Account</template>
        <template #divisionDescription>
          Manage how information is displayed on your account.
        </template>
        <template #divisionContent>
          <dl class="divide-y divide-secondary">
            <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
              <dt class="text-sm font-medium text-secondary">Language</dt>
              <dd
                class="mt-1 flex text-sm text-pop-secondary sm:col-span-2 sm:mt-0"
              >
                <span class="flex-grow">English</span>
                <span class="ml-4 flex-shrink-0">
                  <button
                    type="button"
                    class="rounded-mdfont-medium text-pop-primary hover:text-pop-secondary focus:outline-none focus:ring-2 focus:ring-pop-primary focus:ring-offset-2"
                  >
                    Update
                  </button>
                </span>
              </dd>
            </div>
            <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
              <dt class="text-sm font-medium text-secondary">Date format</dt>
              <dd
                class="mt-1 flex text-sm text-pop-secondary sm:col-span-2 sm:mt-0"
              >
                <span class="flex-grow">DD-MM-YYYY</span>
                <span class="ml-4 flex flex-shrink-0 items-start space-x-4">
                  <button
                    type="button"
                    class="rounded-mdfont-medium text-pop-primary hover:text-pop-secondary focus:outline-none focus:ring-2 focus:ring-pop-primary focus:ring-offset-2"
                  >
                    Update
                  </button>
                  <span class="text-pop-secondary" aria-hidden="true">|</span>
                  <button
                    type="button"
                    class="rounded-mdfont-medium text-pop-primary hover:text-pop-secondary focus:outline-none focus:ring-2 focus:ring-pop-primary focus:ring-offset-2"
                  >
                    Remove
                  </button>
                </span>
              </dd>
            </div>
            <SwitchGroup
              as="div"
              class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5"
            >
              <SwitchLabel
                as="dt"
                class="text-sm font-medium text-secondary"
                passive
                >Automatic timezone</SwitchLabel
              >
              <dd
                class="mt-1 flex text-sm text-pop-secondary sm:col-span-2 sm:mt-0"
              >
                <Switch
                  v-model="automaticTimezoneEnabled"
                  :class="[
                    automaticTimezoneEnabled
                      ? 'bg-pop-primary'
                      : 'bg-secondary',
                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-pop-primary focus:ring-offset-2 sm:ml-auto',
                  ]"
                >
                  <span
                    aria-hidden="true"
                    :class="[
                      automaticTimezoneEnabled
                        ? 'translate-x-5'
                        : 'translate-x-0',
                      'inline-block h-5 w-5 transform rounded-fullshadow ring-0 transition duration-200 ease-in-out',
                    ]"
                  />
                </Switch>
              </dd>
            </SwitchGroup>
            <SwitchGroup
              as="div"
              class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-secondary sm:py-5"
            >
              <SwitchLabel
                as="dt"
                class="text-sm font-medium text-secondary"
                passive
                >Auto-update applicant data</SwitchLabel
              >
              <dd
                class="mt-1 flex text-sm text-pop-secondary sm:col-span-2 sm:mt-0"
              >
                <Switch
                  v-model="autoUpdateApplicantDataEnabled"
                  :class="[
                    autoUpdateApplicantDataEnabled
                      ? 'bg-pop-primary'
                      : 'bg-secondary',
                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-pop-primary focus:ring-offset-2 sm:ml-auto',
                  ]"
                >
                  <span
                    aria-hidden="true"
                    :class="[
                      autoUpdateApplicantDataEnabled
                        ? 'translate-x-5'
                        : 'translate-x-0',
                      'inline-block h-5 w-5 transform rounded-fullshadow ring-0 transition duration-200 ease-in-out',
                    ]"
                  />
                </Switch>
              </dd>
            </SwitchGroup>
          </dl>
        </template>
      </PageDivisionLayout>
      <!-- End Divison 2 -->
    </template>
  </PageLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import PageLayout from "@components/layout/PageLayout.vue";
import PageDivisionLayout from "@components/layout/PageDivisionLayout.vue";

const automaticTimezoneEnabled = ref(true);
const autoUpdateApplicantDataEnabled = ref(false);

const tabs = [
  { name: "FAQs", href: "#", current: false },
  { name: "Get Started", href: "#", current: true },
  { name: "Tutorials", href: "#", current: false },
  { name: "Contact Us", href: "#", current: false },
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
