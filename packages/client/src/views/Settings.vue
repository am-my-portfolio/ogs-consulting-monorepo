<template>
  <PageLayout>
    <template #pageTitle> {{ page.name }} </template>
    <template #description> {{ page.description }} </template>
    <template #pageContent>
      <PageDivisionLayout>
        <template #divisionTitle>N8N Automation</template>
        <template #divisionDescription></template>
        <template #divisionContent>
          <dl
            class="border-b border-dull-secondary"
            v-for="(row, index) in profileSettings"
            :key="index"
          >
            <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
              <dt class="text-sm font-medium text-dull-secondary/80">
                {{ row.label }}
              </dt>
              <dd
                class="mt-1 flex text-sm text-pop-secondary sm:col-span-2 sm:mt-0"
              >
                <span v-if="row.imageUrl" class="flex-grow">
                  <img
                    class="h-auto w-12 rounded-full"
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
                    :onClick="row.method"
                    :class="[
                      'rounded-md font-medium text-pop-primary hover:text-pop-secondary',
                      'focus:outline-none focus:ring-2 focus:ring-pop-primary focus:ring-offset-2',
                      row.action_status === true
                        ? 'cursor-not-allowed text-pop-secondary'
                        : '',
                    ]"
                  >
                    <i
                      v-if="row.action_status"
                      class="fa fa-square-check mr-2"
                    />
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
                    class="rounded-md font-medium text-pop-primary hover:text-pop-secondary focus:outline-none focus:ring-2 focus:ring-pop-primary focus:ring-offset-2"
                  >
                    {{ row.secondaryAction }}
                  </button>
                </span>
              </dd>
            </div>
          </dl>
        </template>
      </PageDivisionLayout>
    </template>
  </PageLayout>
</template>

<script setup lang="ts">
import { PageLayout, PageDivisionLayout } from '@am-ogs/vue-ui';
import { useFacebookStore } from '@/stores/facebook';
import { useN8NStore } from '@/stores/n8n';
import { CUSTOMER_NAME, secondary_navigation } from '@/helpers';
import { computed, ref } from 'vue';

const page = secondary_navigation.find((n) => n.name === 'Settings');

const fb_store = useFacebookStore();
const n8n_store = useN8NStore();

const profileSettings = computed(() => [
  {
    label: 'Facebook Credentials',
    value: '',
    imageUrl: '',
    action: 'Create',
    action_status: n8n_store.fb_credential_created,
    method: () => {
      console.log(n8n_store.fb_credential_created);
      if (n8n_store.fb_credential_created === false) {
        n8n_store.createFacebookCredentials(
          CUSTOMER_NAME,
          fb_store.fb_page_access_token,
        );
      }
    },
    secondaryAction: '',
  },
  {
    label: 'Gmail Credentials',
    value: '',
    imageUrl: '',
    action: 'Create',
    action_status: n8n_store.fb_credential_created,
    method: () => {
      console.log(n8n_store.fb_credential_created);
      if (n8n_store.fb_credential_created === false) {
        n8n_store.createFacebookCredentials(
          CUSTOMER_NAME,
          fb_store.fb_page_access_token,
        );
      }
    },
    secondaryAction: '',
  },
  {
    label: 'Google Calendar Credentials',
    value: '',
    imageUrl: '',
    action: 'Create',
    action_status: n8n_store.fb_credential_created,
    method: () => {
      console.log(n8n_store.fb_credential_created);
      if (n8n_store.fb_credential_created === false) {
        n8n_store.createFacebookCredentials(
          CUSTOMER_NAME,
          fb_store.fb_page_access_token,
        );
      }
    },
    secondaryAction: '',
  },
  {
    label: 'Photo',
    value: '',
    imageUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    action: 'Update',
    secondaryAction: 'Remove',
  },
  {
    label: 'Email',
    value: 'chelsea.hagon@example.com',
    action: 'Update',
    secondaryAction: '',
  },
  {
    label: 'Job Title',
    value: 'HR Manager',
    action: 'Update',
    secondaryAction: '',
  },
]);
</script>
