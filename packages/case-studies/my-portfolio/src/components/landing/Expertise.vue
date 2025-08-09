<template>
  <div class="mt-24 scroll-mt-36">
    <RowLayout>
      <template #titleLeft> The Expertise </template>

      <template #subTitleLeft>
        Cancer Patients Are the Backbone of a $50 Billion Data Market - But They
        Get Nothing.
      </template>

      <template #content>
        <ColumnLayout>
          <template #title></template>
          <template #subTitle> </template>
          <template #description></template>

          <template #leftContent>
            <p class="text-dull-secondary text-xl">
              Every cancer patient's journey produces an enormous amount of
              valuable data - scans, lab results, genetic profiles, and
              treatment outcomes. This data fuels a $50+ billion global health
              data market, driving pharmaceutical breakthroughs and clinical
              advancements.
            </p>
          </template>

          <template #rightContent>
            <div class="col-span-3">
              <div
                v-for="item in reasons"
                class="flex flex-col p-4 divide-y divide-dull-secondary rounded-md text-dull-secondary/50 shadow"
              >
                <div class="flex group">
                  <i
                    :class="item.icon"
                    class="text-3xl mx-4 text-pop-primary shrink-0"
                    aria-hidden="true"
                  ></i>
                  {{ item.summary }}
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
import { ColumnLayout, RowLayout } from "@am-ogs/vue-ui";

const reasons = [
  {
    summary:
      "19 million U.S. cancer patients receive $0 for their data, while corporations profit.",
    icon: "fa-solid fa-bed-pulse",
  },
  {
    summary:
      "42% of cancer patients deplete their life savings within two years of diagnosis.",
    icon: "fa-solid fa-piggy-bank",
  },
  {
    summary:
      "Life Sciences companies spend billions acquiring patient data – but most of it is obtained without direct patient consent.",
    icon: "fa-solid fa-handshake-slash",
  },
];
</script>
