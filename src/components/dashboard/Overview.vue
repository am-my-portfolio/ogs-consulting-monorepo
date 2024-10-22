<template>
  <!-- Overview-->
  <PageDivisionLayout>
    <template #divisionTitle> Overview </template>
    <template #divisionContent>
      <dl class="mt-10 grid grid-cols-1 gap-5 grid-cols-3 xl:grid-cols-5">
        <div
          v-for="item in stats"
          :key="item.name"
          class="overflow-hidden rounded-lg bg-pop-secondary/80 px-4 py-5 shadow sm:p-6"
        >
          <dt class="truncate text-sm font-medium text-pop-primary">
            {{ item.name }}
          </dt>
          <dd class="mt-1 text-3xl font-semibold tracking-tight text-primary">
            {{ item.stat }}
          </dd>
        </div>
      </dl>

      <div class="mt-20 flex flex-grow">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
      </div>
    </template>
  </PageDivisionLayout>
  <!-- End Overview -->

  <!-- Detailed View -->
  <PageDivisionLayout>
    <template #divisionTitle> Detailed View </template>
    <template #divisionContent>
      <dl
        class="border-b border-secondary"
        v-for="(row, index) in rows"
        :key="index"
      >
        <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
          <dt class="text-sm font-medium text-secondary">
            {{ row.label }}
          </dt>
          <dd
            class="mt-1 flex text-sm text-pop-secondary sm:col-span-2 sm:mt-0"
          >
            <span class="flex-grow">{{ row.value }}</span>
            <span
              class="ml-4 flex flex-shrink-0 items-start"
              :class="row.secondaryAction ? 'space-x-4' : ''"
            >
              <button
                type="button"
                class="rounded-mdfont-medium text-pop-primary hover:text-pop-secondary focus:outline-none focus:ring-2 focus:ring-pop-primary focus:ring-offset-2"
              >
                {{ row.action }}
              </button>
              <span
                v-if="row.secondaryAction"
                class="text-pop-secondary"
                aria-hidden="true"
                >|</span
              >
              <button
                type="button"
                class="rounded-mdfont-medium text-pop-primary hover:text-pop-secondary focus:outline-none focus:ring-2 focus:ring-pop-primary focus:ring-offset-2"
              >
                {{ row.secondaryAction }}
              </button>
            </span>
          </dd>
        </div>
      </dl>
    </template>
  </PageDivisionLayout>
  <!-- End Detailed View -->

  <!-- Recent Inferences -->
  <!-- <PageDivisionLayout>
        <template #divisionTitle>Recent Inferences</template>
        <template #divisionContent> </template>
      </PageDivisionLayout> -->
  <!-- End Recent Inferences -->

  <!-- Compliance Monitoring -->
  <PageDivisionLayout>
    <template #divisionTitle> Compliance Monitoring </template>
    <template #divisionContent>
      <ComplianceMonitoring />
    </template>
  </PageDivisionLayout>
  <!-- End Compliance Monitoring -->
</template>

<script setup lang="ts">
import ChartOne from "@components/dashboard/ChartOne.vue";
import ChartTwo from "@components/dashboard/ChartTwo.vue";
import ChartThree from "@components/dashboard/ChartThree.vue";

import PageDivisionLayout from "@components/layout/PageDivisionLayout.vue";
import ComplianceMonitoring from "@components/dashboard/ComplianceMonitoring.vue";

const stats = [
  { name: "Model Health", stat: "99,89%" },
  { name: "Inference Time", stat: "100ms" },
  { name: "Requests Handled", stat: "1.9M" },
  { name: "Compliance Rate", stat: "99.94%" },
  { name: "Error Rate", stat: "0.06%" },
];

const rows = [
  {
    label: "Model Name",
    value: "Apollo 11",
    action: "Details",
    secondaryAction: "",
  },
  {
    label: "Status",
    value: "Active",
    action: "Deactivate",
    secondaryAction: "",
  },
  {
    label: "Last Updated",
    value: "1 Day ago",
    action: "Details",
    secondaryAction: "Edit",
  },
  {
    label: "Inference Time",
    value: "100 ms",
    action: "Re-run",
    secondaryAction: "",
  },
  { label: "Health", value: "99.89%", action: "Debug", secondaryAction: "" },
  {
    label: "Total Inferences",
    value: "587",
    action: "Stats",
    secondaryAction: "",
  },
];
</script>
