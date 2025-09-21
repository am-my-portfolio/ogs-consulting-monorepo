<template>
  <div v-if="!isAuthenticated" class="flex flex-col h-fit items-center">
    <img
      src="/landing.png"
      alt="logo"
      class="mt-36 mb-10 w-2/5 rounded-md bg-pop-primary/80 dark:bg-pop-secondary/50"
    />
    <LoginButton />

    <div class="my-10">
      <ThemeToggle />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import LoginButton from "@/components/identity/LoginButton.vue";
import ThemeToggle from "@/components/ThemeToggle.vue";

const { isAuthenticated } = useAuth0();
</script>
