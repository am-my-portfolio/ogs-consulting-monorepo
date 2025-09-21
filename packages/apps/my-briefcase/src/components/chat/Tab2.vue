<template>
  <PageDivisionLayout>
    <template #divisionTitle>{{ title }}</template>
    <template #divisionDescription> {{ description }}</template>
    <template #divisionContent> </template>
  </PageDivisionLayout>
</template>

<script setup lang="ts">
import { PageDivisionLayout } from '@am-ogs/vue-ui';

defineProps<{
  title: string;
  description: string;
}>();
</script>
