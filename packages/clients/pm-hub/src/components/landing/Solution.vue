<template>
  <div class="my-12 scroll-mt-12">
    <RowLayout>
      <template #titleRight> The Solution </template>

      <template #subTitleRight>
        The Briefcase: Empowering Small Property Management Teams to generate
        value 24/7
      </template>

      <template #description>
        The Briefcase brings a suite of AI agents to automate the business
        processes of a small Property Management team, allowing them to focus on
        what they do best - running their business. Instead of using a single AI
        agent, The Briefcase uses a team of AI agents to handle different
        aspects of the business, from marketing to leasing to scheduling.
      </template>

      <template #content>
        <ul
          role="list"
          class="grid grid-cols-1 md:grid-cols-4 gap-2 rounded-md"
        >
          <li
            v-for="item in items"
            class="flex flex-col p-2 divide-y divide-dull-secondary rounded-md shadow bg-pop-secondary"
          >
            <SolutionCard :item="item" />
          </li>
        </ul>
      </template>
    </RowLayout>
  </div>
</template>

<script setup lang="ts">
import SolutionCard from './SolutionCard.vue';
import { RowLayout } from '@am-ogs/vue-ui';

const items = [
  {
    title: 'Leasing Agent',
    description:
      'An AI Leasing Agent is a virtual assistant that automates leasing tasks like answering tenant inquiries, scheduling tours, and processing rental applications, offering 24/7 support.',
    icon: 'fa-solid fa-piggy-bank',
  },
  {
    title: 'Scheduling Agent',
    description: `An AI Scheduling Agent automates tasks like tenant communication, scheduling showings, 
    and managing maintenance requests. This allows property managers to focus on more strategic tasks and improves overall efficiency.`,
    icon: 'fa-solid fa-building-columns',
  },
  {
    title: 'Marketing Agent',
    description: `An AI Marketing Agent that increases engagement rates and conversions through dynamic content 
      based on customer behavior and preferences, utilizing customer data to personalize interactions,.
     `,
    icon: 'fa-solid fa-cubes',
  },
  {
    title: 'Maintenance Agent',
    description: `An AI Maintenance Agent that streamlines and automates tenant inquiry handling, 
    work order management, and vendor communication. It also assist with tasks like damage assessment 
    and automated responses to tenant inquiries.`,
    icon: 'fa-solid fa-clipboard-list',
  },
];
</script>
