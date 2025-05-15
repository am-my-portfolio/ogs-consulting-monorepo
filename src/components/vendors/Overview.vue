<template>
  <div class="mt-10">
    <ul
      role="list"
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-pop-secondary px-4 py-4 rounded-md"
    >
      <li
        v-for="person in vendors"
        :key="person.email"
        class="col-span-1 flex flex-col divide-y divide-secondary rounded-md bg-dull-primary/90 text-center shadow"
      >
        <div class="flex flex-1 flex-col p-8">
          <img
            class="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
            :src="person.imageUrl"
            alt=""
          />
          <h3 class="mt-5 text-sm font-medium text-pop-secondary">
            {{ person.name }}
          </h3>
          <dl class="mt-1 flex flex-grow flex-col justify-between">
            <dt class="sr-only">Persona</dt>
            <dd class="text-sm text-secondary">
              {{ person.persona }}
            </dd>
            <dt class="sr-only">Role</dt>
            <dd class="mt-1">
              <span
                class="inline-flex items-center rounded-full bg-pop-primary px-2 py-1 text-xs font-medium text-dull-secondary ring-1 ring-inset ring-pop-secondary/50"
                >{{ person.role }}</span
              >
            </dd>
          </dl>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-secondary">
            <div class="flex w-0 flex-1">
              <a
                :href="`mailto:${person.email}`"
                class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-pop-secondary"
              >
                <i
                  class="fa-solid fa-envelope text-pop-primary text-xl"
                  aria-hidden="true"
                ></i>

                Email
              </a>
            </div>
            <div class="-ml-px flex w-0 flex-1">
              <a
                :href="`tel:${person.telephone}`"
                class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-pop-secondary"
              >
                <i
                  class="fa-solid fa-phone text-pop-primary text-lg"
                  aria-hidden="true"
                ></i>
                Call
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const vendors = [
  {
    name: "Jane Cooper",
    persona: "Vendor",
    role: "Landscape Specialist",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Cody Fisher",
    persona: "Vendor",
    role: "Exterior Painting & Roofing",
    email: "cody.fisher@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Esther Howard",
    persona: "Vendor",
    role: "Plumbing & Heating",
    email: "esther.howard@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Cameron Williamson",
    persona: "Vendor",
    role: "Make-ready",
    email: "cameron.wil@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];
</script>
