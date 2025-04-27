<template>
  <div class="mt-12 scroll-mt-12">
    <ColumnLayout>
      <template #title>
        Explore the new Personal Assistant, Automations, and AI Agents built for the Property Management
      </template>

      <template #subTitle>
        <ReelHeroFa :items="random_icons" class="flex space-x-6" />
      </template>

      <template #description>
        Our AI tools help property management teams run their business with greater efficiency
        and more peace of mind
      </template>

      <template #leftContent>
        <a href="#" target="_blank">
          <BaseButton text="Request a Demo" />
        </a>
        <div class="mt-5">
          <p class="text-pop-primary mb-2">
            Trusted by 10+ individuals and SMEs worldwide
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
import { BaseButton, ReelHeroFa, ColumnLayout } from "@am-ogs/vue-ui";

const random_icons = [
  {
    name: "1",
    icon: "fa-brands fa-galactic-senate",
    hidden: false,
  },
  {
    name: "1",
    icon: "fa-brands fa-fulcrum",
    hidden: false,
  },
  {
    name: "1",
    icon: "fa-brands fa-swift",
    hidden: false,
  },
  {
    name: "1",
    icon: "fa-brands fa-studiovinari",
    hidden: false,
  },
  {
    name: "1",
    icon: "fa-brands fa-yammer",
    hidden: false,
  },
  {
    name: "1",
    icon: "fa-brands fa-napster",
    hidden: false,
  },
  {
    name: "1",
    icon: "fa-brands fa-suse",
    hidden: false,
  },
];
</script>
