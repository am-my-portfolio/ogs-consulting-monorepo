import { Item, AllRoles, NavType } from "@/helpers";

export const primary_navigation: Item[] = [
  {
    name: "Chat",
    description: "Manage users, check their roles and connections",
    icon: "fa-solid fa-comment-dots",
    current: false,
    roles: [AllRoles.SUPER_ADMIN],
    items: [
      {
        tab: "Tab1",
        name: "Overview",
        current: true,
        icon: "",
        items: [],
      },
      {
        tab: "Tab2",
        name: "Q & A",
        current: false,
        icon: "",
        items: [],
      },
      {
        tab: "Tab3",
        name: "Summarize",
        current: false,
        icon: "",
        items: [],
      },
      {
        tab: "Tab4",
        name: "Draft",
        current: false,
        icon: "",
        items: [],
      },
    ],
  },
  {
    name: "Assistant",
    description:
      "Manage vendors, check their expertise and product/service list",
    icon: "fa-solid fa-robot",
    current: false,
    roles: [AllRoles.SUPER_ADMIN, AllRoles.VENDOR],
    items: [
      {
        tab: "Tab1",
        name: "Overview",
        current: true,
        icon: "",
        items: [],
      },
      {
        tab: "Tab2",
        name: "Booking & Scheduling", // https://schedule-x.dev/docs/frameworks/vue
        description:
          "<Book appointments according to yours and your clients availability check https://schedule-x.dev/docs/frameworks/vue>",
        current: false,
        icon: "",
        items: [],
      },
      {
        tab: "Tab3",
        name: "Communication",
        description:
          "<Draft and send emails (e.g welcome emails, acknoledgements, confirmations, reminders, reports, FAQs>",
        current: false,
        icon: "",
        items: [],
      },
      {
        tab: "Tab4",
        name: "Marketing",
        description:
          "Draft and post social media content, advertisement emails",
        current: false,
        icon: "",
        items: [],
      },
    ],
  },
  {
    name: "Integrations",
    description:
      "Integrate Calendar, Email, Storage (Dropbox, Google Drive), Bank",
    icon: "fa fa-plug",
    current: false,
    roles: [AllRoles.SUPER_ADMIN],
    items: [
      {
        tab: "Tab1",
        name: "Overview",
        description: "<Your Integrations>",
        current: true,
        icon: "",
        items: [],
      },
      {
        tab: "Tab2",
        name: "Inbox",
        description: "<Available Email providers>",
        current: false,
        icon: "",
        items: [],
      },
      {
        tab: "Tab3",
        name: "Calendar",
        description: "<Available Calendar providers>",
        current: false,
        icon: "",
        items: [],
      },
      {
        tab: "Tab4",
        name: "Listing Site",
        description: "<Property Listing providers>",
        current: false,
        icon: "",
        items: [],
      },
      {
        tab: "Tab5",
        name: "Payment",
        current: false,
        icon: "",
        items: [],
      },
    ],
  },
  {
    name: "Listing Agent",
    description: "Manage users, check their roles and connections",
    icon: "fa-solid fa-house-laptop",
    current: false,
    roles: [AllRoles.SUPER_ADMIN, AllRoles.VENDOR, AllRoles.CONSUMER],
    items: [
      {
        tab: "Tab1",
        name: "Overview",
        current: true,
        icon: "",
        items: [],
      },
      {
        tab: "Tab2",
        name: "Model",
        current: false,
        icon: "",
        items: [],
      },
    ],
  },
  {
    name: "Leasing Agent",
    description: "Manage your community, find people to chat with or mentor",
    icon: "fa-solid fa-building-user",
    current: false,
    roles: [AllRoles.SUPER_ADMIN, AllRoles.CONSUMER],
    items: [
      {
        tab: "Tab1",
        name: "Overview",
        current: true,
        icon: "",
        items: [],
      },
      {
        tab: "Tab2",
        name: "Roles",
        current: false,
        icon: "",
        items: [],
      },
    ],
  },
  {
    name: "Move-in/Move-out Agent",
    description: "Manage events, schedule and invite people",
    icon: "fa-solid fa-dolly", // truck-ramp-box, dolly, people-carry-box
    current: false,
    roles: [AllRoles.SUPER_ADMIN, AllRoles.VENDOR],
    items: [
      {
        tab: "Tab1",
        name: "Overview",
        current: true,
        icon: "",
        items: [],
      },
      {
        tab: "Tab2",
        name: "Roles",
        current: false,
        icon: "",
        items: [],
      },
      {
        tab: "Tab3",
        name: "Groups",
        current: false,
        icon: "",
        items: [],
      },
      {
        tab: "Tab4",
        name: "Api Keys",
        current: false,
        icon: "",
        items: [],
      },
    ],
  },
  {
    name: "Maintenance Agent",
    description: "Manage users, check their roles and connections",
    icon: "fa-solid fa-screwdriver-wrench",
    current: false,
    roles: [AllRoles.SUPER_ADMIN, AllRoles.ADMIN, AllRoles.VENDOR],
    items: [
      {
        tab: "Tab1",
        name: "Overview",
        current: true,
        icon: "",
        items: [],
      },
      {
        tab: "Tab2",
        name: "Roles",
        current: false,
        icon: "",
        items: [],
      },
      {
        tab: "Tab3",
        name: "Groups",
        current: false,
        icon: "",
        items: [],
      },
    ],
  },

  {
    name: "Billing & Payments",
    description: "Manage users, check their roles and connections",
    icon: "fa-solid fa-circle-dollar-to-slot", // regular fa-money-bill-1, solid: money-check-dollar, dollar-sign, hand-holdinig-dollar
    current: false,
    roles: [AllRoles.SUPER_ADMIN, AllRoles.VENDOR, AllRoles.CONSUMER],
    items: [
      {
        tab: "Tab1",
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
        current: true,
        icon: "",
        items: [],
      },
      {
        tab: "Tab2",
        name: "Model",
        current: false,
        icon: "",
        items: [],
      },
      {
        tab: "Tab3",
        name: "Training",
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
        current: true,
        icon: "",
        items: [],
      },
      {
        tab: "Tab2",
        name: "Model",
        current: false,
        icon: "",
        items: [],
      },
      {
        tab: "Tab3",
        name: "Training",
        current: false,
        icon: "",
        items: [],
      },
      {
        tab: "Tab4",
        name: "Inference",
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
