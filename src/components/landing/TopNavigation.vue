<template>
  <!-- Navigation Bar -->
  <nav
    class="w-full p-2 flex items-center justify-between border-b border-pop-secondary"
  >
    <!-- Logo -->
    <div class="flex items-center">
      <img src="/3.png" alt="logo" class="shadow-md w-20 object-cover" />
    </div>

    <!-- Navigation Links (Hidden on Small Screens) -->
    <div class="hidden md:flex space-x-8 text-pop-secondary font-medium">
      <a href="#" class="hover:text-pop-primary transition">Home</a>
      <a href="#" class="hover:text-pop-primary transition">Shop</a>
      <a href="#" class="hover:text-pop-primary transition">About</a>
      <a href="#" class="hover:text-pop-primary transition">Contact</a>
      <ThemeToggle class="ml-24" />
    </div>

    <LoginButton class="rounded-md" />
  </nav>
</template>

<script setup lang="ts">
import LoginButton from "@/components/identity/LoginButton.vue";
import ThemeToggle from "@/components/ThemeToggle.vue";
</script>
