<template>
  <div class="mt-24 scroll-mt-36">
    <RowLayout>
      <template #titleCentered> Projects </template>

      <template #description>
        I specialize in building secure, multi-tenant SaaS platforms, with
        fine-grained RBAC 🔐 and user management baked in from day one. My go-to
        stack includes TypeScript, Vue.js, React/Next.js, NestJS, Postgres,
        Auth0, with Render and/or Cloudflare for deployment ⚙️🛠️ - everything
        needed to ship a robust, investor-ready MVP without over-engineering and
        complex infra and DevOps needs.
      </template>

      <template #content>
        <ul
          role="list"
          class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-24 px-4 pt-24 pb-12 rounded-md"
        >
          <li
            v-for="item in projects"
            :key="item.name.replace(/ /g, '')"
            class="flex flex-col p-2 divide-y divide-dull-secondary rounded-md bg-pop-secondary shadow"
          >
            <ProfileCard
              :item="item"
              role_key=""
              v-bind:is_authenticated="false"
            />
          </li>
        </ul>
      </template>
    </RowLayout>
  </div>
</template>

<script setup lang="ts">
import ProfileCard from "@/components/ProfileCard.vue";
import { RowLayout } from "@am-ogs/vue-ui";

const projects = [
  {
    name: "Security Hub",
    overview:
      "Enterprise-Grade, Secure AI, With Built-in Privacy and Compliance",
    technologies:
      "CIAM (Auth0, RBAC), Microservice + Multi-tenant Architecture",
    summary:
      "A platform providing secure, compliant, and scalable AI solutions that empower businesses in regulated industries to innovate with confidence.",
    picture: "projects/lazer.png",
    socials: [
      {
        name: "github",
        href: "https://github.com/am-my-portfolio/lazer-monorepo",
        icon: "fab fa-github",
      },
      {
        name: "web",
        href: "https://lazer-security-hub.pages.dev/",
        icon: "fas fa-globe",
      },
    ],
  },
  {
    name: "My Briefcase",
    overview:
      "Vertical AI Solution for Solo or Small Property Management Teams",
    technologies: "AI (RAG, Agents, Workflows), MCP",
    summary:
      "A SaaS Interruptor, that handles listing, social media advertising, emails, calls, scheduling (move-in, move-out, showing, maintenance work orders), leasing, rent collection, etc. ",
    picture: "projects/my-briefcase.png",
    socials: [
      {
        name: "github",
        href: "https://github.com/am-my-portfolio/my-briefcase",
        icon: "fab fa-github",
      },
      {
        name: "web",
        href: "https://my-briefcase.pages.dev/",
        icon: "fas fa-globe",
      },
    ],
  },
  {
    name: "SiloLabs",
    overview:
      "Empowering Patients. Monetizing Data. Transforming Life Sciences.",
    technologies: "CIAM (Auth0, RBAC), AI, Blockchain, Data Privacy",
    summary:
      "SiloLabs bridges traditional and decentralized finance, creating a fair, patient-first data economy leveraging blockchain technology so those in need finally benefit from the data they create and own.",
    picture: "projects/silolabs.png",
    socials: [
      {
        name: "github",
        href: "https://github.com/SiloLabs-co/silolabs-monorepo",
        icon: "fab fa-github",
      },
      {
        name: "web",
        href: "https://silolabs.co/",
        icon: "fas fa-globe",
      },
    ],
  },
];
</script>
