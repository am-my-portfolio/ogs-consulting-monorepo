<template>
  <!-- Navigation Bar -->
  <nav
    class="flex w-full p-2 items-center justify-between border-b border-pop-secondary shadow-lg"
  >
    <!-- Logo -->
    <div class="flex items-center">
      <img
        src="/7.png"
        alt="logo"
        class="w-16 h-16 object-cover rounded-full"
      />
    </div>

    <div class="flex space-x-8 pt-6 text-pop-secondary font-medium">
      <div
        v-for="item in landing_page_navigation"
        :key="item.action"
        class="flex"
      >
        <a
          href="#"
          @click="emitAction(item.action)"
          class="hover:text-pop-primary transition"
        >
          {{ item.name }}
        </a>
      </div>

      <ThemeToggle />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ThemeToggle } from "@am-ogs/vue-ui";
import { Events, landing_page_navigation } from "@/helpers";

const emit = defineEmits([Events.SCROLL_TO]);
const emitAction = (value: string) => {
  console.log("emiting", value);
  emit(Events.SCROLL_TO, value);
};
</script>
