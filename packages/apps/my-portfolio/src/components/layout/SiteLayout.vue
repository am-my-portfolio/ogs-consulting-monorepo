<template>
  <div class="h-screen">
    <SiteLayout :is_authenticated="false">
      <template #topNavigation>
        <TopNavigation @scroll:to="handleScroll" />
      </template>

      <template #routerView>
        <router-view />
      </template>

      <template #footer>
        <FooterOne
          class="h-20"
          copyright_year="2025"
          :socials="socials"
          :colors="{
            text: 'text-dull-secondary/70',
            border: 'border-dull-secondary',
            txt_hover: 'hover:text-pop-primary',
          }"
        />
      </template>
    </SiteLayout>
  </div>
</template>

<script setup lang="ts">
import { SiteLayout, FooterOne } from "@am-ogs/vue-ui";
import { landing_page_navigation } from "@/helpers";
import TopNavigation from "@/components/landing/TopNavigation.vue";

// https://fontawesome.com/search
const socials = [
  {
    name: "website",
    href: "https://afshan-martin.pages.dev",
    icon: "fa-solid fa-globe",
  },
  {
    name: "GitHub",
    href: "https://github.com/afshanaman81",
    icon: "fa-brands fa-github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/afshan-aman",
    icon: "fa-brands fa-linkedin",
  },
];

const handleScroll = async (value) => {
  console.log("scrolling to", value);

  for (const item of landing_page_navigation) {
    if (item.action === value) {
      item.ref.value = document.getElementById(item.action);
      item.ref.value?.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>
