<template>
  <div class="mt-10">
    <ul
      role="list"
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-2 rounded-md"
    >
      <li
        v-for="property in properties"
        :key="property.baths"
        class="col-span-1 flex flex-col divide-y divide-dull-secondary rounded-md bg-dull-primary/90 border-8 border-pop-secondary text-center shadow"
      >
        <ItemsGridLayout>
          <template #image>
            <img
              class="h-44 w-44 object-cover rounded-full"
              :src="property.imageUrl"
              alt=""
            />
          </template>

          <template #h1>
            {{ property.address }}
          </template>

          <template #one> Property Type </template>
          <template #two>
            {{ property.property_type }}
          </template>

          <template #three> Year Built </template>
          <template #four>
            {{ property.year_built }}
          </template>

          <template #five>
            <span
              class="inline-flex flex-1 items-center justify-center gap-x-3"
            >
              <i
                class="fa-solid fa-bed text-pop-primary text-xl"
                aria-hidden="true"
              ></i>

              {{ property.bedrooms }}
            </span>
          </template>

          <template #six>
            <span
              class="inline-flex flex-1 items-center justify-center gap-x-3"
            >
              <i
                class="fa-solid fa-bath text-pop-primary text-lg"
                aria-hidden="true"
              ></i>
              {{ property.baths }}
            </span>
          </template>
        </ItemsGridLayout>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import ItemsGridLayout from "../experimental/ItemsGridLayout.vue";

const properties = [
  {
    address: "Mesa Verde Ranch",
    property_type: "Ranch",
    year_built: 1957,
    baths: 1.5,
    bedrooms: 2,
    imageUrl: "/properties/1.jpg",
  },
  {
    address: "1144 Holly Dr",
    property_type: "Condo",
    year_built: 2001,
    baths: 2,
    bedrooms: 3,
    imageUrl: "/properties/2.jpg",
  },
  {
    address: "14th Broadway",
    property_type: "Mansion",
    year_built: "1999",
    baths: 3,
    bedrooms: 4,
    imageUrl: "/properties/3.jpg",
  },
  {
    address: "1233 Random Valley Circle",
    property_type: "Villa",
    year_built: 1859,
    baths: 2,
    bedrooms: 3,
    imageUrl: "/properties/4.jpg",
  },
  {
    address: "13456 Sky Drive Condos",
    property_type: "Condo",
    year_built: 2024,
    baths: 1.5,
    bedrooms: 2,
    imageUrl: "/properties/5.jpg",
  },
  {
    address: "Villa Toscana",
    property_type: "Villa",
    year_built: 1916,
    baths: 6,
    bedrooms: 7,
    imageUrl: "/properties/6.jpg",
  },
];
</script>
