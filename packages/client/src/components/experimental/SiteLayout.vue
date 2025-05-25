<template>
  <div id="ogs-site-layout">
    <!-- the X value needs to match b/w the lg:w-X of the side column and the lg:pl-X of the main column -->

    <!-- Left Column -->
    <div
      id="ogs-sl-side-menu"
      v-if="is_authenticated"
      class="hidden lg:fixed lg:flex lg:flex-col lg:inset-y-0 lg:z-50 lg:w-80"
    >
      <slot name="sideMenu" />
    </div>

    <!-- Main Column  -->
    <div
      id="ogs-sl-main-column"
      :class="[
        is_authenticated ? 'lg:pl-80' : '',
        'flex flex-col h-screen justify-between',
      ]"
    >
      <div
        v-if="is_authenticated"
        id="ogs-sl-header-authenticated"
        class="sticky top-0 z-40 lg:px-8"
      >
        <slot name="header" />
      </div>
      <div
        v-else
        id="ogs-sl-top-nav-public"
        class="sticky top-0 z-40 sm:px-6 lg:px-36"
      >
        <slot name="topNavigation" />
      </div>

      <main
        id="ogs-sl-main"
        class="mb-auto mx-auto w-full py-4 px-4 sm:px-6 lg:px-24 overflow-auto scrollbar"
      >
        <slot name="toast" />
        <slot name="routerView" />
      </main>

      <div id="ogs-sl-footer" class="sticky z-40 mx-4">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  is_authenticated: Boolean;
}>();
</script>
