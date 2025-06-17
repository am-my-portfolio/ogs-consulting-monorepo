export const landing_page_navigation = [
  { name: 'Home', action: 'home' },
  { name: 'About Us', action: 'about' },
  // { name: "Projects", action: "projects",  },
  // { name: "Expertise", action: "expertise",  },
  // { name: "Skills", action: "skills",  },
  { name: 'Contact Us', action: 'contact' },
];

export const primary_navigation = [
  {
    is_home: true,
    name: 'Dashboard',
    description: 'Everything in one place',
    icon: 'fa-solid fa-user',
    current: false,
    items: [
      {
        tab: 'Tab1',
        name: 'Overview',
        current: true,
        icon: '',
        items: [],
      },
      {
        tab: 'Tab2',
        name: 'Removed Users',
        current: false,
        icon: '',
        items: [],
      },
      {
        tab: 'Tab3',
        name: 'Archived Users',
        current: false,
        icon: '',
        items: [],
      },
      {
        tab: 'Tab4',
        name: 'Add New',
        current: false,
        icon: '',
        items: [],
      },
    ],
  },
  {
    name: 'Wallet Management',
    description: 'Connect or update Web3 Wallets',
    icon: 'fa-solid fa-wallet',
    current: false,
    items: [
      {
        tab: 'Tab1',
        name: 'Overview',
        current: true,
        icon: '',
        items: [],
      },
      {
        tab: 'Tab2',
        name: 'Connected',
        current: false,
        icon: '',
        items: [],
      },
      {
        tab: 'Tab3',
        name: 'Groups',
        current: false,
        icon: '',
        items: [],
      },
      {
        tab: 'Tab4',
        name: 'Api Keys',
        current: false,
        icon: '',
        items: [],
      },
    ],
  },
  {
    name: 'Billing & Payments',
    description: 'Manage users, check their roles and connections',
    icon: 'fa-solid fa-circle-dollar-to-slot', // regular fa-money-bill-1, solid: money-check-dollar, dollar-sign, hand-holdinig-dollar
    current: false,
    items: [
      {
        tab: 'Tab1',
        name: 'Overview',
        current: true,
        icon: '',
        items: [],
      },
    ],
  },
];

export const secondary_navigation = [
  {
    name: 'Support Hub',
    description: 'Manage users, check their roles and connections',
    icon: 'fa-solid fa-headphones-simple',
    current: false,
    items: [
      {
        tab: 'Tab1',
        name: 'Overview',
        current: true,
        icon: '',
        items: [],
      },
      {
        tab: 'Tab2',
        name: 'Model',
        current: false,
        icon: '',
        items: [],
      },
      {
        tab: 'Tab3',
        name: 'Training',
        current: false,
        icon: '',
        items: [],
      },
    ],
  },
  {
    name: 'Subscription History',
    description: 'Manage users, check their roles and connections',
    icon: 'fa-solid fa-money-bill-trend-up',
    current: false,
    items: [
      {
        tab: 'Tab1',
        name: 'Overview',
        current: true,
        icon: '',
        items: [],
      },
      {
        tab: 'Tab2',
        name: 'Model',
        current: false,
        icon: '',
        items: [],
      },
      {
        tab: 'Tab3',
        name: 'Training',
        current: false,
        icon: '',
        items: [],
      },
      {
        tab: 'Tab4',
        name: 'Inference',
        current: false,
        icon: '',
        items: [],
      },
    ],
  },
  {
    name: 'Reported Bugs',
    description: 'Manage navigators, check their expertise and client list',
    icon: 'fa-solid fa-bug',
    current: false,
    items: [
      {
        tab: 'Tab1',
        name: 'Overview',
        current: true,
        icon: '',
        items: [],
      },
    ],
  },
];

export const user_navigation = [
  {
    name: 'Profile',
    icon: 'fa-regular fa-user',
  },
  {
    name: 'Preferences',
    icon: 'fa-solid fa-sliders',
  },
];
