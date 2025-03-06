<template>
  <div
    class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-pop-secondary bg-primary px-2"
  >
    <div class="flex ml-2 mt-4 shrink-0 justify-left">
      <img src="/logo.png" alt="logo" class="h-20 rounded-md" />

      <span
        class="ml-4 mt-8 mb-5 italic font-mono text-pop-secondary border-b border-pop-primary"
      >
        My Briefcase
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
import SideNavigation from "./SideNavigation.vue";
</script>
