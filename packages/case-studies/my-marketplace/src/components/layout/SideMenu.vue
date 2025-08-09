<template>
  <div
    class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-pop-secondary bg-primary px-2"
  >
    <div class="flex m-4 shrink-0 justify-left">
      <img
        src="/logo.png"
        alt="logo"
        class="h-16 rounded-md bg-pop-secondary/80 dark:bg-pop-secondary/60"
      />

      <span
        class="border-b border-pop-secondary text-pop-secondary mt-8 ml-4 italic font-mono"
      >
        The Marketplace
      </span>
    </div>

    <SideNavigation
      :level="1"
      :primary_items="primary_navigation"
      :secondary_items="secondary_navigation"
    />
  </div>
</template>

<script setup lang="ts">
import { primary_navigation, secondary_navigation } from "@/helpers/navigation";
import SideNavigation from "@/components/layout/SideNavigation.vue";
</script>
