<template>
  <!-- Navigation Bar -->
  <nav
    :class="[
      'flex w-full',
      'bg-dull-primary',
      'items-center justify-between',
      'border-b border-pop-secondary shadow-lg',
    ]"
  >
    <!-- Logo -->
    <div class="flex ml-2 h-16 items-center">
      <img src="/landing.png" alt="logo" class="w-12 md:w-16 object-cover" />
    </div>

    <!-- Navigation Links (Hidden on Small Screens) -->
    <div
      class="hidden md:flex space-x-4 md:space-x-8 pt-8 pb-3 text-pop-secondary font-medium"
    >
      <div v-for="item in landing_page_navigation" :key="item.name">
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

    <LoginButton />
  </nav>
</template>

<script setup lang="ts">
import { ThemeToggle } from '@am-ogs/vue-ui';
import { Events, landing_page_navigation } from '@/helpers';
import LoginButton from '@/components/identity/LoginButton.vue';

const emit = defineEmits([Events.SCROLL_TO]);
const emitAction = (value: string) => {
  console.log('emiting', value);
  emit(Events.SCROLL_TO, value);
};
</script>
