import { kebabCase } from 'lodash';
import { createRouter, createWebHistory } from 'vue-router';
import { authGuard } from '@auth0/auth0-vue';
import {
  primary_navigation,
  secondary_navigation,
  user_navigation,
  applyRoleRouteGuard,
} from '@/helpers';

const NotAllowed = () => import('@/views/common/NotAllowed.vue');
const NotFoundPage = () => import('@/views/common/NotFound.vue');
const Landing = () => import('@/views/common/LandingPage.vue');
const PrivacyPolicy = () => import('@/views/common/PrivacyPolicy.vue');

const static_routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: Landing,
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
  },
  {
    path: '/not-allowed',
    name: 'NotAllowed',
    component: NotAllowed,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundPage,
  },
];

const dynamic_routes = [];
for (const [index, route] of [
  ...primary_navigation,
  ...secondary_navigation,
].entries()) {
  const routeJson = {
    path: `/${kebabCase(route.name)}`,
    name: route.name,
    component: () => import(`@/views/${route.name.replace(/ /g, '')}.vue`),
    meta: {
      requiresAuth: true,
      roles: route.roles,
      redirect: '/not-allowed',
    },
    beforeEnter: [authGuard, applyRoleRouteGuard],
  };
  dynamic_routes.push(routeJson);
}

for (const route of user_navigation) {
  const routeJson = {
    path: `/${route.name.toLowerCase()}`,
    name: route.name,
    component: () => import(`@/views/${route.name.replace(/ /g, '')}.vue`),
    beforeEnter: [authGuard],
  };
  dynamic_routes.push(routeJson);
}

const routes = [...static_routes, ...dynamic_routes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
