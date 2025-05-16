<template>
  <div class="mt-10">
    <ul
      role="list"
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 p-2 rounded-md"
    >
      <li
        v-for="person in people"
        :key="person.email"
        class="col-span-1 flex flex-col divide-y divide-dull-secondary rounded-md bg-dull-primary/90 border-8 border-pop-secondary text-center shadow"
      >
        <ItemsGridLayout>
          <template #image>
            <img class="h-32 w-32 rounded-full" :src="person.imageUrl" alt="" />
          </template>

          <template #h1>
            {{ person.name }}
          </template>

          <template #one> Persona </template>
          <template #two>
            {{ person.persona }}
          </template>

          <template #three> Role </template>
          <template #four>
            {{ person.role }}
          </template>

          <template #five>
            <a
              :href="`mailto:${person.email}`"
              class="inline-flex flex-1 items-center justify-center gap-x-3"
            >
              <i
                class="fa-solid fa-envelope text-pop-primary text-xl"
                aria-hidden="true"
              ></i>
              <span>Email</span>
            </a>
          </template>

          <template #six>
            <a
              :href="`tel:${person.telephone}`"
              class="inline-flex flex-1 items-center justify-center gap-x-3"
            >
              <i
                class="fa-solid fa-phone text-pop-primary text-lg"
                aria-hidden="true"
              ></i>
              Call
            </a>
          </template>
        </ItemsGridLayout>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import ItemsGridLayout from "../experimental/ItemsGridLayout.vue";

const people = [
  {
    name: "Jane Cooper",
    persona: "Property Manager",
    role: "Core User",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Cody Fisher",
    persona: "Leasing Coordinator",
    role: "Leasing User",
    email: "cody.fisher@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Esther Howard",
    persona: "Branch Accountant",
    role: "Accounting User",
    email: "esther.howard@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Cameron Williamson",
    persona: "Maintenance Coordinator",
    role: "Maintenance User",
    email: "cameron.wil@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];
</script>
