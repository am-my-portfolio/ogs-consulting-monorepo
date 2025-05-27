<template>
  <PageDivisionLayout>
    <template #divisionTitle>Preferences</template>
    <template #divisionDescription>
      This information will be displayed publicly so be careful what you share.
    </template>
    <template #divisionContent>
      <dl
        class="border-b border-secondary"
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
                :class="[
                  'rounded-md font-medium text-pop-primary hover:text-pop-secondary',
                  'focus:outline-none focus:ring-2 focus:ring-pop-primary focus:ring-offset-2',
                ]"
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

<script setup lang="ts">
import { PageDivisionLayout } from '@am-ogs/vue-ui';

const profileSettings = [
  {
    label: 'Facebook Credentials',
    value: '',
    imageUrl: '',
    action: 'Create',
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
];
</script>
