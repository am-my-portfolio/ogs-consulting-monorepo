<template>
  <div class="flex flex-1 flex-col p-8">
    <div class="mx-auto flex-shrink-0">
      <slot name="image" />
    </div>

    <h1 class="mt-5 text-sm font-medium text-pop-secondary">
      <slot name="h1" />
    </h1>

    <dl class="mt-1 flex flex-grow flex-col justify-between">
      <dt class="sr-only">
        <slot name="one" />
      </dt>
      <dd class="text-sm text-dull-secondary">
        <slot name="one" />: <slot name="two" />
      </dd>

      <dt class="sr-only">
        <slot name="three" />
      </dt>
      <dd class="mt-1">
        <span
          class="inline-flex items-center rounded-full bg-dull-primary px-2 py-1 text-xs font-medium text-pop-primary ring-1 ring-inset ring-pop-secondary/50"
        >
          <slot name="three" />: <slot name="four" />
        </span>
      </dd>
    </dl>
  </div>
  <div>
    <div class="-mt-px flex divide-x divide-dull-secondary">
      <div class="flex w-0 flex-1">
        <div
          class="relative -mr-px inline-flex w-0 flex-1 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-pop-secondary"
        >
          <slot name="five" />
        </div>
      </div>

      <div class="-ml-px flex w-0 flex-1">
        <div
          class="relative -mr-px inline-flex w-0 flex-1 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-pop-secondary"
        >
          <slot name="six" />
        </div>
      </div>
    </div>
  </div>
</template>
