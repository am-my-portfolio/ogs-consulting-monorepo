<template>
  <div v-if="!isAuthenticated" class="flex flex-col items-center">
    <TopNavigation />
    <Hero />
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import Hero from "@/components/landing/Hero.vue";
import TopNavigation from "@/components/landing/TopNavigation.vue";

const { isAuthenticated } = useAuth0();
</script>
