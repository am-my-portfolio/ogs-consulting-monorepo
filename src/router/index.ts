import { createRouter, createWebHistory } from "vue-router";
import { navigation, user_navigation } from "@helpers/index";
import { applyRoleRouteGuard } from "@auth/guards";
import { authGuard } from "@auth0/auth0-vue";

const NotAllowed = () => import("@views/common/NotAllowed.vue");
const NotFoundPage = () => import("@views/common/NotFound.vue");
const Landing = () => import("@views/common/LandingPage.vue");

const static_routes = [
  {
    path: "/",
    name: "LandingPage",
    component: Landing,
  },
  {
    path: "/not-allowed",
    name: "NotAllowed",
    component: NotAllowed,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFoundPage,
  },
];

const dynamic_routes = [];
for (const route of navigation) {
  const routeJson = {
    path: route.target,
    name: route.name,
    component: () => import(`@views/${route.name.replace(" ", "")}.vue`),
    meta: {
      redirect: "/not-allowed",
      roles: route.roles,
    },
    beforeEnter: [authGuard, applyRoleRouteGuard],
  };
  dynamic_routes.push(routeJson);
}

for (const route of user_navigation) {
  const routeJson = {
    path: route.target,
    name: route.name,
    component: () => import(`@views/${route.name.replace(" ", "")}.vue`),
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
