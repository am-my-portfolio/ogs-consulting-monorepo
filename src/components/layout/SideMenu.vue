<template>
  <div
    class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-pop-secondary bg-primary px-2"
  >
    <div class="flex mt-2 shrink-0 items-center">
      <img src="/favicon.png" alt="logo" class="w-20" />

      <span class="border-b border-pop-secondary text-pop-secondary ml-4">
        We Are SAM
      </span>
    </div>

    <SideNavigation :level="1" :items="navigation" />
  </div>
</template>

<script setup lang="ts">
import { navigation } from "@helpers/navigation";
import SideNavigation from "./SideNavigation.vue";
</script>
