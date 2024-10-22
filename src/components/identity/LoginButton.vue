<template>
  <button
    class="bg-pop-secondary text-primary hover:text-pop-primary text-2xl hover:border-transparent rounded-2xl w-40 h-16"
    @click="handleLogin"
  >
    Log In
  </button>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";

const { loginWithRedirect } = useAuth0();

const handleLogin = () => {
  loginWithRedirect({
    appState: {
      target: "/dashboard",
    },
    authorizationParams: {
      prompt: "login",
    },
  });
};
</script>
