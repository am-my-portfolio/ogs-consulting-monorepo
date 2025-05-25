<template>
  <div class="mt-12 scroll-mt-12">
    <RowLayout>
      <template #titleLeft> The Problem </template>

      <!-- Issue: this one gets invisible -->
      <template #subTitleLeft>
        Solopreneurs and small businesses are the backbone of a $50 Billion
        Market - But they lack the resources to compete
      </template>

      <template #content>
        <ColumnLayout>
          <template #title></template>
          <template #subTitle> </template>
          <template #description></template>

          <template #leftContent>
            <p class="text-dull-secondary text-xl">
              Solopreneurs and small businesses cannot afford to hire a team of
              experts in every area of their business, nor can they use existing
              SaaS tools that are often expensive and not tailored to their
              specific needs. With The Briefcase, solopreneurs and small
              businesses can have access to the same level of expertise and
              efficiency as a large corporation, without the high cost.
            </p>
          </template>

          <template #rightContent>
            <div class="col-span-3">
              <div
                v-for="item in reasons"
                class="flex flex-col p-4 divide-y divide-dull-secondary rounded-md text-dull-secondary/50 shadow"
              >
                <div class="flex group gap-2">
                  <i
                    :class="item.icon"
                    class="text-3xl text-pop-primary min-w-12"
                    aria-hidden="true"
                  ></i>
                  <div>{{ item.summary }}</div>
                </div>
              </div>
            </div>
          </template>
        </ColumnLayout>
      </template>
    </RowLayout>
  </div>
</template>

<script setup lang="ts">
import { RowLayout, ColumnLayout } from "@am-ogs/vue-ui";

const reasons = [
  {
    summary:
      "19 million U.S. tenants are served by local, small business Property Management shops",
    icon: "fa-solid fa-house",
  },
  {
    summary:
      "42% of tenants want to work with the same Property Manager year after year",
    icon: "fa-solid fa-bookmark",
  },
  {
    summary: "Property Managers can save upto 47% using AI assitants",
    icon: "fa-solid fa-coins",
  },
];
</script>
