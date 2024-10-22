<template>
  <!-- https://iriscompanyio.medium.com/how-to-build-recursive-side-navbar-menu-component-with-vue-3-e87878fb94b6 -->

  <nav class="flex flex-1 flex-col">
    <ul role="list" class="flex flex-1 flex-col gap-y-4">
      <li
        v-for="item in items"
        :key="item.name"
        :class="item.roles.includes(AllRoles.SUPER_ADMIN) ? 'mt-auto mb-8' : ''"
      >
        <div
          :class="[
            userHasAnyRoles(item.roles)
              ? 'cursor-pointer'
              : 'cursor-not-allowed',
            'w-full rounded-md',
          ]"
        >
          <a
            :href="userHasAnyRoles(item.roles) ? item.target : ''"
            :class="[
              item.current
                ? 'bg-primary text-pop-secondary'
                : 'text-pop-secondary hover:bg-pop-secondary hover:text-primary',
              userHasAnyRoles(item.roles)
                ? ''
                : 'pointer-events-none text-secondary',
              'group flex gap-x-3 rounded-md py-2 text-base leading-6',
            ]"
          >
            <div class="flex group">
              <i
                :class="item.icon"
                class="text-lg mx-2 w-10 shring-0"
                aria-hidden="true"
              ></i>
              {{ item.name }}
            </div>
          </a>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { Item, AllRoles } from "@helpers/index";
import { userHasAnyRoles } from "@auth/index";

const { items } = defineProps<{
  level: number;
  items: Item[];
}>();
</script>
