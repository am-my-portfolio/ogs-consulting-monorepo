<template>
  <div class="mt-12 scroll-mt-12">
    <RowLayout>
      <template #titleCentered> Meet Our Team of AI Agents </template>

      <template #description>
        With expertise ranging from Lead generation, Leasing, Property
        Management and Maintenance, our team will provide the 5-star service to
        any Property Owner.
      </template>

      <template #content>
        <ul
          role="list"
          class="w-full grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-24 px-4 pt-24 pb-12 rounded-md"
        >
          <li
            v-for="person in team"
            :key="person.email"
            class="p-2 divide-y divide-dull-secondary rounded-md bg-pop-secondary shadow"
          >
            <ProfileCard
              :user="person"
              role_key="sam.co/roles"
              v-bind:is_authenticated="isAuthenticated"
            />
          </li>
        </ul>
      </template>
    </RowLayout>
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';
import { RowLayout, ProfileCard } from '@am-ogs/vue-ui';

const { isAuthenticated } = useAuth0();
const team = [
  {
    name: 'Jane Cooper',
    persona: 'Property Manager',
    email: 'janecooper@example.com',
    summary: `Experienced Property Manager, with 6+ years in single-family rentals, 
      Jane will be responsible for the day-to-day operations of rental properties, 
      acting as a liaison between property owners and tenants. She will manage a property from start to end 
      ensuring property compliance with local regulations, including Tenant/Owner Liaison, conflict management,
      eviction process handling according to the local laws, and financial management and reporting to the Owners.`,
    picture:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    socials: [
      {
        name: 'email',
        href: 'mailto:janecooper@example.com',
        icon: 'fas fa-envelope',
        hidden: false,
      },
      {
        name: 'phone',
        href: 'tel:',
        icon: 'fas fa-phone',
      },
      {
        name: 'github',
        href: '#',
        icon: 'fab fa-github',
        hidden: true,
      },
      {
        name: 'web',
        href: 'https://jane-cooper.me/',
        icon: 'fas fa-globe',
      },
    ],
  },
  {
    name: 'Cody Fisher',
    persona: 'Leasing Specialist',
    email: 'cody.fisher@example.com',
    summary: `A master of attracting and securing tenants for rental properties, Cody handles the entire leasing process, 
      from marketing and showing properties to screening applicants and managing lease agreements, to move-in/move-outs. 
      His primary goal is to maintain high occupancy rates and ensure a smooth tenant experience. 
      His expertise in Lease negotiation in compliance with local laws ensures maximum margins for the property owners.`,
    picture:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    socials: [
      {
        name: 'email',
        href: 'mailto:cody.fisher@example.com',
        icon: 'fas fa-envelope',
        hidden: false,
      },
      {
        name: 'phone',
        href: 'tel:',
        icon: 'fas fa-phone',
      },
      {
        name: 'github',
        href: '#',
        icon: 'fab fa-github',
        hidden: true,
      },
      {
        name: 'web',
        href: 'https://cody-fisher.me',
        icon: 'fas fa-globe',
        hidden: true,
      },
    ],
  },
  {
    name: 'Esther Howard',
    persona: 'Maintenance Coordinator',
    email: 'esther.howard@example.com',
    summary: `Esther is the resident Maintenace Coordinator, responsible for managing all aspects of property maintenance, 
    ensuring efficient operations and tenant satisfaction. This includes coordinating with maintenance staff, vendors, 
    and contractors to schedule repairs, manage budgets, and communicate effectively with tenants and property managers. 
    She handles all work orders, inventory, and ensure compliance with safety standards.`,
    picture:
      'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    socials: [
      {
        name: 'email',
        href: 'mailto: Esther Howard <esther.howard@example.com>',
        icon: 'fas fa-envelope',
        hidden: false,
      },
      {
        name: 'phone',
        href: 'tel:',
        icon: 'fas fa-phone',
      },
      {
        name: 'github',
        href: '#',
        icon: 'fab fa-github',
        hidden: true,
      },
      {
        name: 'web',
        href: 'https://estjer-howard.me/',
        icon: 'fas fa-globe',
      },
    ],
  },
];
</script>
