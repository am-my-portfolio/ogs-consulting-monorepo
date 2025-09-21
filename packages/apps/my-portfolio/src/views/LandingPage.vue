<template>
  <div
    class="flex flex-col items-center"
    v-for="section in landing_page_navigation"
  >
    <component
      :ref="section.action"
      :id="section.action"
      :is="
        defineAsyncComponent(
          () => import(`@/components/landing/${section.name}.vue`),
        )
      "
    />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { landing_page_navigation } from "@/helpers";
</script>
