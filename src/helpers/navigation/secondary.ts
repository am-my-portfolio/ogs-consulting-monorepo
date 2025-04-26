import { Item, AllRoles, NavType } from "@/helpers";

export const secondary_navigation = [
  {
    type: NavType.SECONDARY,
    name: "Support Hub",
    description: "Manage users, check their roles and connections",
    icon: "fa-solid fa-headphones-simple",
    current: false,
    roles: [AllRoles.SUPER_ADMIN, AllRoles.VENDOR, AllRoles.CONSUMER],
    items: [
      {
        tab: "Tab1",
        name: "Overview",
        description: "",
        current: true,
        icon: "",
        items: [],
      },
      {
        tab: "Tab2",
        name: "Model",
        description: "",
        current: false,
        icon: "",
        items: [],
      },
      {
        tab: "Tab3",
        name: "Training",
        description: "",
        current: false,
        icon: "",
        items: [],
      },
    ],
  },
  {
    type: NavType.SECONDARY,
    name: "Subscription History",
    description: "Manage users, check their roles and connections",
    icon: "fa-solid fa-money-bill-trend-up",
    current: false,
    roles: [AllRoles.SUPER_ADMIN, AllRoles.VENDOR, AllRoles.CONSUMER],
    items: [
      {
        tab: "Tab1",
        name: "Overview",
        description: "",
        current: true,
        icon: "",
        items: [],
      },
      {
        tab: "Tab2",
        name: "Model",
        description: "",
        current: false,
        icon: "",
        items: [],
      },
      {
        tab: "Tab3",
        name: "Training",
        description: "",
        current: false,
        icon: "",
        items: [],
      },
      {
        tab: "Tab4",
        name: "Inference",
        description: "",
        current: false,
        icon: "",
        items: [],
      },
    ],
  },
  {
    name: "Reported Users",
    description: "Manage navigators, check their expertise and client list",
    icon: "fa-solid fa-user-slash", // user-xmark, user-minus, user-lock, user-slash
    current: false,
    roles: [AllRoles.SUPER_ADMIN, AllRoles.VENDOR],
    items: [
      {
        tab: "Tab1",
        name: "Overview",
        description: "",
        current: true,
        icon: "",
        items: [],
      },
    ],
  },
];
