# Introduction

A set of Vuejs (v3) components build with Tailwindcss (v4), Fontawesome, and Iconify.

#### TailwindCss

- https://tailwindcss.com/
- https://tailwindcss.com/docs/installation/using-vite

#### Fontawesome

- https://fontawesome.com/icons
- https://docs.fontawesome.com/web/use-with/vue

#### Iconify

- https://iconify.design/
- https://iconify.design/docs/icon-components/vue/

# Usage

- `npm i @am-ogs/vue-ui`
- `pnpm add @am-ogs/vue-ui`
- `yarn add @am-ogs/vue-ui`

## Config

- in the `tailwind.config.js` file of your VueJs app:

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    'node_modules/@am-ogs/vue-ui/**/*.js', // <<-- this is important
  ],
  ...
```

## In a component

```
<template>
    <div class="mt-10 text-center">
        <BaseButton
            text="Log In"
            @click="handleLogin"
            :disabled="disabled"
        />
    </div>
</template>

<script setup lang="ts">
import { BaseButton } from '@am-ogs/vue-ui'
</script>
```
