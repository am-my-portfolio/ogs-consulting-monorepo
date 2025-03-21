<template>
  <PageDivisionLayout>
    <template #divisionTitle>{{ title }}</template>
    <template #divisionDescription> {{ description }}</template>
    <template #divisionContent> </template>
  </PageDivisionLayout>
</template>

<script setup lang="ts">
import PageDivisionLayout from "@/components/layout/division/PageDivisionLayout.vue";
defineProps<{
  title: string;
  description: string;
}>();
</script>
