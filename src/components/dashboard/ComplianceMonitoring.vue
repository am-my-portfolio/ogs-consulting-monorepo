<template>
  <div class="-mx-4 mt-10 ring-1 ring-secondary sm:mx-0 sm:rounded-lg">
    <table class="min-w-full divide-y divide-secondary">
      <thead>
        <tr>
          <th
            scope="col"
            class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-pop-primary sm:pl-6"
          >
            Date
          </th>
          <th
            scope="col"
            class="hidden px-3 py-3.5 text-left text-sm font-semibold text-pop-primary lg:table-cell"
          >
            Input
          </th>
          <th
            scope="col"
            class="hidden px-3 py-3.5 text-left text-sm font-semibold text-pop-primary lg:table-cell"
          >
            Query Params
          </th>
          <th
            scope="col"
            class="hidden px-3 py-3.5 text-left text-sm font-semibold text-pop-primary lg:table-cell"
          >
            Output
          </th>
          <th
            scope="col"
            class="px-3 py-3.5 text-left text-sm font-semibold text-pop-primary"
          >
            Inference Time
          </th>
          <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
            <span class="sr-only">Select</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(run, index) in inferences" :key="run.id">
          <td
            :class="[
              index === 0 ? '' : 'border-t border-transparent',
              'relative py-4 pl-4 pr-3 text-sm sm:pl-6',
            ]"
          >
            <div class="font-medium text-pop-primary">
              {{ run.date }}
            </div>
            <div
              class="mt-1 flex flex-col text-pop-secondary sm:block lg:hidden"
            >
              <span>{{ run.input }} / {{ run.output }}</span>
              <span class="hidden sm:inline">·</span>
              <span>{{ run.inferenceTime }}</span>
            </div>
            <div
              v-if="index !== 0"
              class="absolute -top-px left-6 right-0 h-px bg-secondary"
            />
          </td>
          <td
            :class="[
              index === 0 ? '' : 'border-t border-secondary',
              'hidden px-3 py-3.5 text-sm text-pop-secondary lg:table-cell',
            ]"
          >
            {{ run.input }}
          </td>
          <td
            :class="[
              index === 0 ? '' : 'border-t border-secondary',
              'hidden px-3 py-3.5 text-sm text-pop-secondary lg:table-cell',
            ]"
          >
            {{ run.params }}
          </td>
          <td
            :class="[
              index === 0 ? '' : 'border-t border-secondary',
              'hidden px-3 py-3.5 text-sm text-pop-secondary lg:table-cell',
            ]"
          >
            <span v-if="run.outputType === 'text'">{{ run.output }}</span>
            <span v-if="run.outputType === 'img'">
              <img
                src="https://chillydogsweaters.com/wp-content/uploads/2024/04/Cavalier_King_Charles_Spaniel_small_dog_breed.jpg"
                alt="logo"
                class="w-auto h-16 rounded-full"
              />
            </span>
          </td>
          <td
            :class="[
              index === 0 ? '' : 'border-t border-secondary',
              'px-3 py-3.5 text-sm text-pop-secondary',
            ]"
          >
            <div class="sm:hidden">{{ run.inferenceTime }}/mo</div>
            <div class="hidden sm:block">{{ run.inferenceTime }}</div>
          </td>
          <td
            :class="[
              index === 0 ? '' : 'border-t border-transparent',
              'relative py-3.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-6',
            ]"
          >
            <button
              type="button"
              class="inline-flex items-center rounded-md bg-pop-primary/40 px-2.5 py-1.5 text-sm font-semibold text-pop-secondary shadow-sm ring-1 ring-inset ring-secondary hover:bg-pop-primary/80 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-pop-primary/40"
            >
              Details<span class="sr-only">, {{ run.name }}</span>
            </button>
            <div
              v-if="index !== 0"
              class="absolute -top-px left-0 right-6 h-px bg-secondary"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const inferences = [
  {
    id: 1,
    date: "2023-03-22",
    input: "Generate photo of a dog",
    params: "small dog",
    output: "4 CPUs",
    outputType: "img",
    inferenceTime: "128 ms",
  },
  {
    id: 2,
    date: "2023-04-22",
    input: "Translate text to French",
    params: "Hello World",
    output: "Bonjour le monde",
    outputType: "text",
    inferenceTime: "1.8 ms",
  },
  // More plans...
];
</script>
