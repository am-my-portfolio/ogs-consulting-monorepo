<template>
  <div class="mt-24">
    <RowLayout>
      <template #titleRight> The Solution </template>

      <template #subTitleRight>
        The Briefcase: Empowering Solopreneurs and SMEs to Monetize their Data
      </template>

      <template #description>
        The Briefcase brings a suite of AI agents to automate the business
        processes of a solopreneur or small business, allowing them to focus on
        what they do best - running their business. Instead of using a single AI
        agent, The Briefcase uses a team of AI agents to handle different
        aspects of the business, from sales to marketing to scheduling. This
        allows for a more efficient and effective way to run a business, as each
        agent can specialize in a specific task and work together to achieve the
        business's goals.
      </template>

      <template #content>
        <ul
          role="list"
          class="grid grid-cols-1 md:grid-cols-4 gap-x-2 rounded-md"
        >
          <li
            v-for="item in items"
            class="flex flex-col p-2 divide-y divide-secondary rounded-md shadow bg-pop-secondary"
          >
            <SolutionCard :item="item" />
          </li>
        </ul>
      </template>
    </RowLayout>
  </div>
</template>

<script setup lang="ts">
import SolutionCard from "./SolutionCard.vue";
import RowLayout from "@/components/layout/widget/RowLayout.vue";

const items = [
  {
    title: "Sales Agent",
    description:
      "Cancer patients receive direct payments for their anonymized health data.",
    icon: "fa-solid fa-piggy-bank",
  },
  {
    title: "Scheduling Agent",
    description:
      "Life Sciences companies pay traditionally; SiloLabs converts funds into stablecoins (USDC) for secure, automated micropayments.",
    icon: "fa-solid fa-building-columns",
  },
  {
    title: "Marketing Agent",
    description:
      "Blockchain ensures patient consent, security, and full traceability.",
    icon: "fa-solid fa-cubes",
  },
  {
    title: "Maintenance Agent",
    description:
      "Life Sciences companies access verified, high-quality patient data to accelerate new treatments.",
    icon: "fa-solid fa-clipboard-list",
  },
];
</script>
