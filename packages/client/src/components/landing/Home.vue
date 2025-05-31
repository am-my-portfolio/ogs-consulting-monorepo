<template>
  <div class="mt-12 scroll-mt-12">
    <ColumnLayout>
      <template #title>
        AI-powered Automation for Property Management, Unlocking Efficiency,
        Scalability, and Margin Expansion across the Rental Lifecycle.
      </template>

      <template #subTitle>
        <ReelHeroIc :items="random_icons" />
      </template>

      <template #description>
        <div> Reimagining Property Management with AI :- </div>
        <p>
          <i class="fa fa-square-check text-pop-primary mr-2" />Automated
          <i class="fa fa-square-check text-pop-primary mr-2" />Impactful
          <i class="fa fa-square-check text-pop-primary mr-2" />Relationship-first
        </p>
      </template>

      <template #leftContent>
        <a href="#" target="_blank">
          <BaseButton text="Request a Demo" />
        </a>
        <div class="mt-5">
          <p class="text-pop-primary mb-2">
            Trusted by 10+ Property Managers in Colorado
          </p>
        </div>
      </template>

      <template #rightContent>
        <img src="/logo.png" alt="logo" class="w-full rounded-full" />
      </template>
    </ColumnLayout>
  </div>
</template>

<script setup lang="ts">
import { BaseButton, ReelHeroIc, ColumnLayout } from '@am-ogs/vue-ui';

const random_icons = [
  {
    name: '1',
    icon: 'mdi:sign-real-estate',
    hidden: false,
  },
  {
    name: '1',
    icon: 'carbon:ai',
    hidden: false,
  },
  {
    name: '1',
    icon: 'carbon:workflow-automation',
    hidden: false,
  },
  {
    name: '1',
    icon: 'simple-icons:n8n',
    hidden: false,
  },
  {
    name: '1',
    icon: 'mynaui:api',
    hidden: false,
  },
  {
    name: '1',
    icon: 'eos-icons:performance',
    hidden: false,
  },
  {
    name: '1',
    icon: 'mdi:bed-clock',
    hidden: false,
  },
  {
    name: '1',
    icon: 'svg-spinners:clock',
    hidden: false,
  },
];
</script>
