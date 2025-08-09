<template>
  <div
    class="flex flex-col h-full items-center text-dull-secondary bg-dull-primary rounded-md"
  >
    <div
      class="h-screen -mt-20 max-h-36 md:max-h-40 border-8 rounded-full overflow-hidden border-pop-secondary"
    >
      <img
        v-if="item.picture"
        :src="item.picture"
        alt="Profile Image"
        class="object-scale-down w-full h-full bg-dull-primary"
      />
    </div>

    <h2 class="mt-4 text-xl font-semibold text-pop-primary">{{ item.name }}</h2>
    <p
      class="w-5/6 mt-1 py-1 px-2 text-center text-sm text-pop-secondary bg-dull-primary/70 rounded-full"
    >
      {{ item.email ?? item.overview }}
    </p>
    <div
      class="w-5/6 h-full mt-4 mb-6 text-center space-y-4 border-pop-primary border-t-2"
    >
      <div v-if="item.summary" class="mt-6 text-dull-secondary">
        {{ item.summary }}
      </div>

      <div v-else class="mt-6 text-dull-secondary">
        <p>@{{ item.nickname }} | 29 | Fr</p>
        <p>WCIF friendly</p>
        <p v-if="item['sam.co/roles']">
          <span class="text-pop-primary">Roles: </span>
          {{ item["sam.co/roles"] }}
        </p>
      </div>
    </div>
    <div v-if="item.technologies" class="m-6 text-left">
      <span class="text-pop-primary"><strong>Technologies: </strong></span
      >{{ item.technologies }}
    </div>

    <ReelWideFa :items="item.socials" />
  </div>
</template>

<script setup lang="ts">
import { ReelWideFa } from "@am-ogs/vue-ui";

const props = defineProps<{
  item: any;
}>();

// const socials = [
//   {
//     name: "email",
//     href: "mailto:" + props?.item.email,
//     icon: "fas fa-envelope",
//     hidden: true,
//   },
//   {
//     name: "phone",
//     href: "tel:" + props?.item.phone,
//     icon: "fas fa-phone",
//     hidden: true,
//   },
//   {
//     name: "github",
//     href: "https://github.com/am-my-portfolio/lazer-monorepo",
//     icon: "fab fa-github",
//   },
//   {
//     name: "web",
//     href: "https://lazer-security-hub.pages.dev/",
//     icon: "fas fa-globe",
//   },
// ];
</script>
