<template>
  <div class="mt-12 snap-start scroll-mt-44">
    <ColumnLayout>
      <template #title> AFSHAN MARTIN </template>

      <template #subTitle>
        🌟 Full-Stack Software Engineer 🔹 Hands-on Technical Leader 🔹
        Architecture (SaaS | Mircroservices | N-Tier) 🔹 CIAM (Auth0 | RBAC |
        OAuth) 🔹 Typescript (VueJs | ReactJs | React Native | NextJs | NestJs)
      </template>

      <template #description>
        <ReelHeroIc :items="skills" />
      </template>

      <template #leftContent>
        <div class="mt-10 text-pop-secondary space-y-6">
          <p>
            Hi, I’m Afshan — a software engineer, solopreneur, and builder with
            a passion for turning ideas into real, usable products. By day, I
            work on complex, scalable systems as part of a collaborative team.
            By night (and weekend), I wear all the hats — founder, engineer,
            product manager, marketer — building a software product from the
            ground up, in public.
          </p>

          <p>
            I believe in learning by doing, and my side projects are my
            playground for exploring emerging tech, sharpening my engineering
            and product skills, and experimenting with business ideas — all
            while staying grounded in real user needs.
          </p>

          <p>
            I’m especially interested in software engineering best practices,
            cybersecurity, AI-enabled workflows, and the evolving intersection
            of vertical SaaS and agentic systems. My goal is to build not just
            great software, but a body of work that reflects depth, curiosity,
            and care.
          </p>

          <p>
            If you're curious about my journey or working on something similar,
            I’d love to connect.
          </p>
        </div>

        <div class="mt-10">
          <a href="https://linkedin.com/in/afshan-aman" target="_blank">
            <!-- class="bg-pop-primary text-dull-primary hover:bg-pop-primary/50 hover:text-dull-secondary" -->
            <BaseButton text="Connect with me" />
          </a>
        </div>
      </template>

      <template #rightContent>
        <div class="flex justify-center items-center">
          <img
            src="/logo.png"
            alt="logo"
            class="w-72 h-72 lg:w-96 lg:h-96 object-cover rounded-full"
          />
        </div>
      </template>
    </ColumnLayout>
  </div>
</template>

<script setup lang="ts">
import { BaseButton, ReelHeroIc, ColumnLayout } from "@am-ogs/vue-ui";

const skills = [
  {
    name: "NodeJs",
    category: "Backend",
    icon: "devicon-plain:nodejs-wordmark",
    // icon: "skill-icons:nodejs-dark",
  },
  {
    name: "Typescript",
    category: "Language",
    icon: "devicon-plain:typescript",
    // icon: "skill-icons:nodejs-dark",
  },
  {
    name: "VueJs",
    category: "Frontend",
    icon: "devicon-plain:vuejs",
    // icon: "skill-icons:vuejs-dark",
  },
  {
    name: "ReactJs",
    category: "Frontend",
    icon: "fa-brands:react",
    // icon: "skill-icons:react-dark",
  },
  // {
  //   name: "NestJs",
  //   category: "Backend",
  //   icon: "devicon:nestjs",
  //   // icon: "skill-icons:nestjs-dark",
  // },
  {
    name: "Postgres",
    category: "Backend",
    icon: "devicon-plain:postgresql",
  },
  {
    name: "Docker",
    category: "Backend",
    icon: "devicon-plain:docker",
    // icon: "skill-icons:docker",
  },
  // {
  //   name: "Netlify",
  //   category: "Cloud",
  //   icon: "devicon-plain:netlify",
  // },
  {
    name: "Render",
    category: "Cloud",
    icon: "simple-icons:render",
  },
  {
    name: "Cloudflare",
    category: "Cloud",
    icon: "devicon-plain:cloudflare",
    // icon: "skill-icons:cloudflare-dark",
  },
  {
    name: "AWS",
    category: "Cloud",
    icon: "devicon-plain:amazonwebservices-wordmark",
    // icon: "skill-icons:aws-dark",
  },
  {
    name: "GCP",
    category: "Cloud",
    icon: "devicon-plain:googlecloud",
    // icon: "skill-icons:gcp-dark"
  },
];
</script>
