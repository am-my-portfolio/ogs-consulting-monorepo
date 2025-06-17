<template>
  <div v-if="!isAuthenticated" class="flex flex-col items-center">
    <div v-for="section in landing_page_navigation">
      <component
        :ref="section.action"
        :id="section.action"
        :is="
          defineAsyncComponent(
            () =>
              import(
                `@/components/landing/${section.name.replace(/ /g, '')}.vue`
              ),
          )
        "
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { useAuth0 } from '@auth0/auth0-vue';
import { landing_page_navigation } from '@/helpers';

const { isAuthenticated } = useAuth0();
</script>
