<template>
  <LoginButton text="Log in" :handler="handleLogin" />
</template>

<script setup lang="ts">
import { kebabCase } from 'lodash';
import { useAuth0 } from '@auth0/auth0-vue';
import { LoginButton } from '@am-ogs/vue-ui';
import { primary_navigation } from '@/helpers';

const home_page = primary_navigation.find((n) => n.name === 'Integrations');

const { loginWithRedirect } = useAuth0();
const handleLogin = () => {
  loginWithRedirect({
    appState: {
      target: `/${kebabCase(home_page.name)}`,
    },
    authorizationParams: {
      prompt: 'login',
    },
  });
};
</script>
