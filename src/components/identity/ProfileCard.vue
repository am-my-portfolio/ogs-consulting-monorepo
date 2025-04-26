<template>
  <div class="flex flex-col h-full items-center bg-dull-primary/90 rounded-md">
    <div
      class="-mt-20 border-8 rounded-full overflow-hidden border-pop-secondary"
    >
      <img
        v-if="user.picture"
        :src="user.picture"
        alt="Profile Image"
        class="w-full h-full object-cover"
      />
    </div>

    <div class="mt-4 text-xl font-semibold text-pop-primary">
      {{ user.name }}
    </div>

    <div
      class="mt-1 py-1 px-4 text-sm text-dull-secondary dark:text-pop-secondary bg-pop-secondary/30 dark:bg-dull-secondary/40 rounded-full"
    >
      {{ user.email }}
    </div>

    <div
      class="w-5/6 h-full mt-4 mb-12 text-center space-y-1 border-pop-primary border-t-2"
    >
      <div v-if="user.summary" class="mt-6 text-dull-secondary">
        {{ user.summary }}
      </div>

      <div v-else class="mt-6 text-dull-secondary">
        <p>@{{ user.nickname }} | 29 | Fr</p>
        <p>WCIF friendly</p>
        <p v-if="role_key && user[role_key]">
          <span class="text-pop-primary">Roles: </span>
          {{ user[role_key] }}
        </p>
      </div>
    </div>

    <!-- <ReelWideFa :items="user.socials" /> -->
  </div>
</template>

<script setup lang="ts">
import { ReelWideFa } from "@am-ogs/vue-ui";

interface IUser {
  name: string;
  nickname?: string;
  email: string;
  picture: string;
  summary: string;
  socials: {
    // TODO: import from the ReelWide (better make them global)
    name: string;
    icon: string;
    href?: string;
    hidden?: boolean;
  }[];
  [key: string]: string | undefined | {} | [];
}
defineProps<{
  user: IUser;
  role_key?: string;
  is_authenticated?: boolean;
}>();
</script>
