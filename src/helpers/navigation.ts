import { Item, AllRoles } from "@helpers/index";

export const navigation: Item[] = [
  {
    name: "User Management",
    target: "/users",
    icon: "fa-solid fa-users",
    current: false,
    roles: [AllRoles.NAVIGATOR],
    items: [
      { name: "Overview", target: "/", current: true, icon: "", items: [] },
      { name: "Roles", target: "/", current: false, icon: "", items: [] },
      { name: "Groups", target: "/", current: false, icon: "", items: [] },
      { name: "Api Keys", target: "/", current: false, icon: "", items: [] },
      { name: "Policies", target: "/", current: false, icon: "", items: [] },
      {
        name: "Activity Logs",
        target: "/",
        current: false,

        icon: "",
        items: [],
      },
      { name: "Invite", target: "/", current: false, icon: "", items: [] },
    ],
  },
  {
    name: "Booking & Scheduling",
    target: "/dashboard",
    icon: "fa-solid fa-chart-line", // chart-line, chart-pie, chart-area
    current: false,
    roles: [AllRoles.NAVIGATOR],
    items: [
      {
        name: "Overview",
        target: "/",
        current: true,

        icon: "",
        items: [],
      },
      {
        name: "Model",
        target: "/",
        current: false,

        icon: "",
        items: [],
      },
      {
        name: "Training",
        target: "/",
        current: false,

        icon: "",
        items: [],
      },
      {
        name: "Inference",
        target: "/",
        current: false,

        icon: "",
        items: [],
      },
      {
        name: "Evaluation",
        target: "/",
        current: false,

        icon: "",
        items: [],
      },
    ],
  },
  {
    name: "Navigator Management",
    target: "/integrations",
    icon: "fa-solid fa-plug",
    current: false,
    roles: [AllRoles.NAVIGATOR],
    items: [
      { name: "Overview", target: "/", current: true, icon: "", items: [] },
      { name: "Featured", target: "/", current: false, icon: "", items: [] },
      { name: "Popular", target: "/", current: false, icon: "", items: [] },
      { name: "New", target: "/", current: false, icon: "", items: [] },
    ],
  },
  {
    name: "Community Management",
    target: "/compliance",
    icon: "fa-solid fa-gavel", // clipboard-check, gavel
    current: false,
    roles: [AllRoles.NAVIGATOR],
    items: [
      { name: "Overview", target: "/", current: true, icon: "", items: [] },
      { name: "Data Policy", target: "/", current: false, icon: "", items: [] },
      {
        name: "Model Policy",
        target: "/",
        current: false,

        icon: "",
        items: [],
      },
      { name: "Compliance", target: "/", current: false, icon: "", items: [] },
      { name: "Requests", target: "/", current: false, icon: "", items: [] },
    ],
  },
  {
    name: "Events Management",
    target: "/notifications",
    icon: "fa-solid fa-bell",
    current: false,
    roles: [AllRoles.NAVIGATOR],
    items: [
      { name: "Overview", target: "/", current: true, icon: "", items: [] },
      { name: "Incidents", target: "/", current: false, icon: "", items: [] },
      { name: "Alerts", target: "/", current: false, icon: "", items: [] },
      {
        name: "Notifications",
        target: "/",
        current: false,

        icon: "",
        items: [],
      },
    ],
  },
  {
    name: "Subscription History",
    target: "/settings",
    icon: "fa-solid fa-gear",
    current: false,
    roles: [AllRoles.NAVIGATOR, AllRoles.CLIENT],
    items: [],
  },
  {
    name: "Payment Processing",
    target: "/settings",
    icon: "fa-solid fa-gear",
    current: false,
    roles: [AllRoles.NAVIGATOR, AllRoles.CLIENT],
    items: [],
  },
  {
    name: "Support Hub",
    target: "/support",
    icon: "fa-solid fa-headphones-simple", // headphones too
    current: false,
    roles: [AllRoles.NAVIGATOR, AllRoles.PROFESSIONAL],
    items: [],
  },
  {
    name: "Category Management",
    target: "/data-management",
    icon: "fa-solid fa-database",
    current: false,
    roles: [AllRoles.NAVIGATOR],
    items: [],
  },


  // {
  //   name: "Tenants",
  //   target: "/tenants",
  //   icon: "fa-solid fa-house-user", // house-user, building-user, users-gear, users-rectangle, users-viewfinder, users-between-line
  //   current: false,
  //   roles: [AllRoles.SUPER_ADMIN],
  //   items: [
  //     { name: "Overview", target: "/", current: true, icon: "", items: [] },
  //     { name: "Onboard", target: "/", current: true, icon: "", items: [] },
  //   ],
  // },
  // {
  //   name: "Calendar",
  //   target: "/calendar",
  //   icon: "fa-regular fa-calendar", // https://fontawesome.com/search?q=calendar&o=a&m=free
  //   current: false,
  //   items: [
  //     {
  //       name: "Team 1",
  //       target: "/team",
  //       icon: "fa-solid fa-chart-line",
  //       current: true,
  //       items: [],
  //     },
  //   ],
  // },
];

export const user_navigation = [
  {
    name: "Profile",
    target: "/profile",
    icon: "fa-regular fa-user",
  },
  {
    name: "Preferences",
    target: "/preferences",
    icon: "fa-solid fa-sliders",
  },
];
