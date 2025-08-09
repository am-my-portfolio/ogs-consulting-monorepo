<template>
  <PageDivisionLayout>
    <template #divisionTitle>{{ title }}</template>
    <template #divisionContent>
      <dl class="mt-10 grid grid-cols-1 gap-5 grid-cols-3 xl:grid-cols-5">
        <div
          v-for="item in stats"
          :key="item.name"
          class="overflow-hidden rounded-lg bg-pop-secondary/60 px-4 py-5 shadow sm:p-6"
        >
          <dt class="truncate text-sm font-medium text-pop-secondary">
            {{ item.name }}
          </dt>
          <dd class="mt-1 text-3xl font-semibold tracking-tight text-primary">
            {{ item.stat }}
          </dd>
        </div>
      </dl>
    </template>
  </PageDivisionLayout>
</template>

<script setup lang="ts">
import PageDivisionLayout from "@/components/layout/PageDivisionLayout.vue";

defineProps<{
  title: string;
}>();

const stats = [
  { name: "Total Users", stat: "54" },
  { name: "Removed Users", stat: "3" },
  { name: "Vendors", stat: "17" },
  { name: "Buyers", stat: "6" },
];
</script>
