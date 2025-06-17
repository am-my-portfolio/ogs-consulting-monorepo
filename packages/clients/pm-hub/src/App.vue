<template>
  <div class="h-screen">
    <SiteLayout :is_authenticated="isAuthenticated">
      <template #sideMenu>
        <SideMenu
          :level="1"
          :primary_navigation="primary_navigation"
          :secondary_navigation="secondary_navigation"
        >
          <template #logo>
            <img src="/3.png" alt="logo" class="h-20 rounded-md" />
          </template>
        </SideMenu>
      </template>

      <template #header>
        <Header>
          <template #profileButton>
            <ProfileButton />
          </template>
        </Header>
      </template>

      <template #topNavigation>
        <TopNavigation @scroll:to="handleScroll" />
      </template>

      <template #toast>
        <Toast />
      </template>

      <template #routerView>
        <router-view v-if="!isLoading" />
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
import { useAuth0 } from '@auth0/auth0-vue';
import { Header, SiteLayout, SideMenu, FooterOne } from '@am-ogs/vue-ui';
import {
  primary_navigation,
  secondary_navigation,
  landing_page_navigation,
} from '@/helpers';
import Toast from 'primevue/toast';
import ProfileButton from '@/components/identity/ProfileButton.vue';
import TopNavigation from '@/components/landing/TopNavigation.vue';

const { isLoading, isAuthenticated } = useAuth0();

const socials = [
  {
    name: 'website',
    href: 'https://my-briefcase.pages.dev',
    icon: 'fa-solid fa-globe',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/am-my-portfolio/my-briefcase',
    icon: 'fa-brands fa-github',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/one-gal-shop',
    icon: 'fa-brands fa-linkedin',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@am-ogs',
    icon: 'fa-brands fa-youtube',
  },
  {
    name: 'Instagram',
    href: '#',
    icon: 'fa-brands fa-instagram',
  },
];

const handleScroll = async (value) => {
  console.log('scrolling to', value);

  for (const item of landing_page_navigation) {
    if (item.action === value) {
      item.ref.value = document.getElementById(item.action);
      item.ref.value?.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>
