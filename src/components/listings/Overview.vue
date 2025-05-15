<template>
  <div class="mt-10">
    <ul
      year_built="list"
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 bg-pop-secondary px-4 py-4 rounded-md"
    >
      <li
        v-for="property in properties"
        :key="property.baths"
        class="col-span-1 flex flex-col divide-y divide-secondary rounded-md bg-dull-primary/90 text-center shadow"
      >
        <div class="flex flex-1 flex-col p-4">
          <img
            class="mx-auto h-64 w-64 object-cover rounded-full"
            :src="property.imageUrl"
            alt=""
          />
          <h3 class="mt-2 text-sm font-medium text-pop-secondary">
            {{ property.address }}
          </h3>
          <dl class="mt-1 flex flex-grow flex-col justify-between">
            <dt class="sr-only">Persona</dt>
            <dd class="text-sm text-secondary">
              {{ property.state }}
            </dd>
            <dt class="sr-only">Role</dt>
            <dd class="mt-1">
              <span
                class="inline-flex items-center rounded-full bg-pop-primary px-2 py-1 text-xs font-medium text-dull-secondary ring-1 ring-inset ring-pop-secondary/50"
              >
                Year Built: {{ property.year_built }}</span
              >
            </dd>
          </dl>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-secondary">
            <div class="flex w-0 flex-1">
              <a
                :href="`mailto:${property.baths}`"
                class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-pop-secondary"
              >
                <i
                  class="fa-solid fa-bed text-pop-primary text-xl"
                  aria-hidden="true"
                ></i>

                {{ property.bedrooms }}
              </a>
            </div>
            <div class="-ml-px flex w-0 flex-1">
              <a
                :href="`tel:${property.bedrooms}`"
                class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-pop-secondary"
              >
                <i
                  class="fa-solid fa-bath text-pop-primary text-lg"
                  aria-hidden="true"
                ></i>
                {{ property.baths }}
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const properties = [
  {
    address: "1233 Random Valley Circle",
    state: "CA",
    year_built: 1957,
    baths: 1.5,
    bedrooms: 2,
    imageUrl: "/properties/1.jpg",
  },
  {
    address: "1144 Holly Dr",
    state: "CO",
    year_built: 2001,
    baths: 2,
    bedrooms: 3,
    imageUrl: "/properties/2.jpg",
  },
  {
    address: "14th Broadway",
    state: "FL",
    year_built: "1999",
    baths: 3,
    bedrooms: 4,
    imageUrl: "/properties/3.jpg",
  },
  {
    address: "Mesa Verde Ranch",
    state: "MN",
    year_built: 1859,
    baths: 2,
    bedrooms: 3,
    imageUrl: "/properties/4.jpg",
  },
  {
    address: "13456 Sky Drive Condos",
    state: "NM",
    year_built: 2024,
    baths: 1.5,
    bedrooms: 2,
    imageUrl: "/properties/5.jpg",
  },
  {
    address: "Villa Toscana",
    state: "AZ",
    year_built: 1916,
    baths: 6,
    bedrooms: 7,
    imageUrl: "/properties/6.jpg",
  },
];
</script>
