import { Item, AllRoles, NavType } from "@/helpers";

export const primary_navigation: Item[] = [
  {
    page: "Page1",
    name: "User Management",
    description: "Manage users, check their roles and connections",
    icon: "fa-solid fa-user-group",
    current: false,
    roles: [AllRoles.SUPER_ADMIN],
    items: [
      {
        page: "Tab1",
        name: "Overview",
        current: true,
        icon: "",
        items: [],
      },
      {
        page: "Tab2",
        name: "Removed Users",
        current: false,
        icon: "",
        items: [],
      },
      {
        page: "Tab3",
        name: "Archived Users",
        current: false,
        icon: "",
        items: [],
      },
      {
        page: "Tab4",
        name: "Add New",
        current: false,
        icon: "",
        items: [],
      },
    ],
  },
  {
    page: "Page2",
    name: "Vendor Management",
    description:
      "Manage vendors, check their expertise and product/service list",
    icon: "fa-solid fa-user-shield", // user-gear, user-secret
    current: false,
    roles: [AllRoles.SUPER_ADMIN, AllRoles.VENDOR],
    items: [
      {
        page: "Tab1",
        name: "Overview",
        current: true,
        icon: "",
        items: [],
      },
      {
        page: "Tab2",
        name: "Roles",
        current: false,
        icon: "",
        items: [],
      },
      {
        page: "Tab3",
        name: "Groups",
        current: false,
        icon: "",
        items: [],
      },
    ],
  },
  {
    page: "Page3",
    name: "Community Management",
    description: "Manage your community, find people to chat with or mentor",
    icon: "fa-solid fa-users", // users-rectangle
    current: false,
    roles: [AllRoles.SUPER_ADMIN, AllRoles.CONSUMER],
    items: [
      {
        page: "Tab1",
        name: "Overview",
        current: true,
        icon: "",
        items: [],
      },
      {
        page: "Tab2",
        name: "Roles",
        current: false,
        icon: "",
        items: [],
      },
    ],
  },
  {
    page: "Page4",
    name: "Events Management",
    description: "Manage events, schedule and invite people",
    icon: "fa-solid fa-calendar-plus",
    current: false,
    roles: [AllRoles.SUPER_ADMIN, AllRoles.VENDOR],
    items: [
      {
        page: "Tab1",
        name: "Overview",
        current: true,
        icon: "",
        items: [],
      },
      {
        page: "Tab2",
        name: "Roles",
        current: false,
        icon: "",
        items: [],
      },
      {
        page: "Tab3",
        name: "Groups",
        current: false,
        icon: "",
        items: [],
      },
      {
        page: "Tab4",
        name: "Api Keys",
        current: false,
        icon: "",
        items: [],
      },
    ],
  },
  {
    page: "Page5",
    name: "Category Management",
    description: "Manage users, check their roles and connections",
    icon: "fa-solid fa-server",
    current: false,
    roles: [AllRoles.SUPER_ADMIN, AllRoles.ADMIN, AllRoles.VENDOR],
    items: [
      {
        page: "Tab1",
        name: "Overview",
        current: true,
        icon: "",
        items: [],
      },
      {
        page: "Tab2",
        name: "Roles",
        current: false,
        icon: "",
        items: [],
      },
      {
        page: "Tab3",
        name: "Groups",
        current: false,
        icon: "",
        items: [],
      },
    ],
  },
  {
    page: "Page6",
    name: "Booking & Scheduling",
    description: "Manage users, check their roles and connections",
    icon: "fa-solid fa-calendar-check",
    current: false,
    roles: [AllRoles.SUPER_ADMIN, AllRoles.VENDOR, AllRoles.CONSUMER],
    items: [
      {
        page: "Tab1",
        name: "Overview",
        current: true,
        icon: "",
        items: [],
      },
      {
        page: "Tab2",
        name: "Model",
        current: false,
        icon: "",
        items: [],
      },
    ],
  },
  {
    page: "Page7",
    name: "Billing & Payments",
    description: "Manage users, check their roles and connections",
    icon: "fa-solid fa-circle-dollar-to-slot", // regular fa-money-bill-1, solid: money-check-dollar, dollar-sign, hand-holdinig-dollar
    current: false,
    roles: [AllRoles.SUPER_ADMIN, AllRoles.VENDOR, AllRoles.CONSUMER],
    items: [
      {
        page: "Tab1",
        name: "Overview",
        current: true,
        icon: "",
        items: [],
      },
    ],
  },
];

export const secondary_navigation = [
  {
    page: "Page8",
    type: NavType.SECONDARY,
    name: "Support Hub",
    description: "Manage users, check their roles and connections",
    icon: "fa-solid fa-headphones-simple",
    current: false,
    roles: [AllRoles.SUPER_ADMIN, AllRoles.VENDOR, AllRoles.CONSUMER],
    items: [
      {
        page: "Tab1",
        name: "Overview",
        current: true,
        icon: "",
        items: [],
      },
      {
        page: "Tab2",
        name: "Model",
        current: false,
        icon: "",
        items: [],
      },
      {
        page: "Tab3",
        name: "Training",
        current: false,
        icon: "",
        items: [],
      },
    ],
  },
  {
    page: "Page9",
    type: NavType.SECONDARY,
    name: "Subscription History",
    description: "Manage users, check their roles and connections",
    icon: "fa-solid fa-money-bill-trend-up",
    current: false,
    roles: [AllRoles.SUPER_ADMIN, AllRoles.VENDOR, AllRoles.CONSUMER],
    items: [
      {
        page: "Tab1",
        name: "Overview",
        current: true,
        icon: "",
        items: [],
      },
      {
        page: "Tab2",
        name: "Model",
        current: false,
        icon: "",
        items: [],
      },
      {
        page: "Tab3",
        name: "Training",
        current: false,
        icon: "",
        items: [],
      },
      {
        page: "Tab4",
        name: "Inference",
        current: false,
        icon: "",
        items: [],
      },
    ],
  },
  {
    page: "Page10",
    name: "Reported Users",
    description: "Manage navigators, check their expertise and client list",
    icon: "fa-solid fa-user-slash", // user-xmark, user-minus, user-lock, user-slash
    current: false,
    roles: [AllRoles.SUPER_ADMIN, AllRoles.VENDOR],
    items: [
      {
        page: "Tab1",
        name: "Overview",
        current: true,
        icon: "",
        items: [],
      },
    ],
  },
];

export const user_navigation = [
  {
    name: "Profile",
    icon: "fa-regular fa-user",
  },
  {
    name: "Preferences",
    icon: "fa-solid fa-sliders",
  },
];
