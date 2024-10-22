<template>
  <PageDivisionLayout>
    <template #divisionTitle>AI Model Interactions</template>
    <template #divisionDescription>
      Monitor and manage AI model interactions
    </template>
    <template #divisionContent>
      <div class="mt-6 overflow-hidden">
        <div class="mx-auto max-w-7xl px-2">
          <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <table class="w-full">
              <!-- <thead class="sr-only"> -->
              <thead class="h-10 text-pop-primary text-center">
                <tr>
                  <th>User</th>
                  <th class="hidden sm:table-cell">Query</th>
                  <th>Compliance Policy</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="day in statuses" :key="day.dateTime">
                  <tr class="text-left text-sm leading-6 text-pop-primary">
                    <th
                      scope="colgroup"
                      colspan="3"
                      class="relative isolate py-2 font-semibold"
                    >
                      <time :datetime="day.dateTime">{{ day.status }}</time>
                      <div
                        class="absolute inset-y-0 right-full -z-10 w-screen border-b border-secondary"
                        :class="
                          isDark ? 'bg-pop-secondary' : 'bg-pop-secondary/40'
                        "
                      />
                      <div
                        class="absolute inset-y-0 left-0 -z-10 w-screen border-b border-secondary"
                        :class="
                          isDark ? 'bg-pop-secondary' : 'bg-pop-secondary/40'
                        "
                      />
                    </th>
                  </tr>
                  <tr
                    v-for="transaction in day.transactions"
                    :key="transaction.id"
                  >
                    <td
                      class="hidden relative py-5 pr-6 sm:table-cell max-w-52"
                    >
                      <div class="flex gap-x-6">
                        <img
                          :src="transaction.imageUrl"
                          class="h-12 rounded-full"
                        />
                        <div class="flex-auto">
                          <div class="text-sm leading-6 text-pop-secondary">
                            {{ transaction.name }}
                          </div>
                          <div class="mt-1 text-xs leading-5 text-pop-primary">
                            {{ transaction.role }}
                          </div>
                        </div>
                      </div>

                      <div
                        class="absolute bottom-0 right-full h-px w-screen bg-secondary"
                      />
                      <div
                        class="absolute bottom-0 left-0 h-px w-screen bg-secondary"
                      />
                    </td>
                    <td class="hidden py-5 pr-6 sm:table-cell max-w-96">
                      <div class="flex-auto">
                        <div class="flex items-start gap-x-3">
                          <div
                            class="text-sm font-medium leading-6 text-secondary"
                          >
                            {{ transaction.query }}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="">
                      <div
                        class="text-sm text-center font-medium leading-6 py-2 rounded-xl text-pop-secondary bg-pop-primary/40"
                      >
                        {{ transaction.policy }}
                      </div>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </template>
    <!-- End Divison 1 -->
  </PageDivisionLayout>
</template>

<script setup lang="ts">
import { useDark } from "@vueuse/core";
import PageDivisionLayout from "@components/layout/PageDivisionLayout.vue";

const isDark = useDark();

const querySpeed = {
  Fast: "text-green-700 bg-green-50 ring-green-600/20",
  Slow: "text-blue-700 bg-blue-50 ring-blue-500/10",
  Failed: "text-red-700 bg-red-50 ring-red-600/10",
};
const statuses = [
  {
    status: "Pending",
    dateTime: "2023-03-22",
    transactions: [
      {
        id: 1,
        policy: "No policy set",
        query: "What are the benefits of using this product?",
        imageUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name: "Jane Cooper",
        role: "Core User",
      },
      {
        id: 2,
        policy: "Age verification required",
        query: "How does this product work?",
        name: "Cody Fisher",
        role: "Accounting User",
        imageUrl:
          "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      },
      {
        id: 3,
        policy: "Medical disclaimer required",
        query: "What are the potential side effects of this product?",
        name: "Esther Howard",
        role: "Medical User",
        imageUrl:
          "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      },
    ],
  },
  {
    status: "Approved",
    dateTime: "2023-03-21",
    transactions: [
      {
        id: 4,
        policy: "Medical disclaimer required",
        query: "What is the recommened dosage for this product?",
        name: "Cameron Williamson",
        role: "Medical Admin",
        imageUrl:
          "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      },
    ],
  },
  {
    status: "Declined",
    dateTime: "2023-03-21",
    transactions: [
      {
        id: 5,
        policy: "Results disclaimer required",
        query: "What are the potential side effects of this product?",
        name: "Jenny Wilson",
        role: "Legal User",
        imageUrl:
          "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      },
      {
        id: 6,
        policy: "No policy set",
        query: "What is the shelf life of this product?",
        name: "Theresa Webb",
        role: "Admin User",
        imageUrl:
          "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      },
    ],
  },
];
</script>
