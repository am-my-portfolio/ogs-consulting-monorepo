<template>
  <PageDivisionLayout>
    <template #divisionTitle> Profile </template>
    <template #divisionContent>
      <div v-if="!isLoading">
        <!-- <pre
          class="mt-10 p-5 text-dull-secondary bg-pop-secondary rounded-md overflow-x-auto"
          >{{ user }}</pre
        > -->

        <div
          class="flex flex-col mt-20 mx-4 px-4 md:m-24 md:px-12 items-center justify-center text-dull-secondary bg-pop-secondary/60 rounded-md"
        >
          <div
            class="w-24 md:w-36 h-24 md:h-36 -mt-12 md:-mt-20 border-8 rounded-full overflow-hidden border-pop-secondary/60"
          >
            <img
              v-if="user.picture"
              :src="user.picture"
              alt="Profile Image"
              class="w-full h-full object-cover"
            />
          </div>

          <h2 class="mt-4 text-xl font-semibold text-pop-primary">
            {{ user.name }}
          </h2>
          <p
            class="mt-1 py-1 px-2 text-sm text-pop-secondary bg-dull-secondary/70 rounded-full"
          >
            {{ user.email }}
          </p>
          <div
            class="w-full md:w-3/4 mt-4 mb-12 text-center space-y-1 border-pop-primary border-t-2"
          >
            <p class="mt-12 text-dull-secondary">
              @{{ user.nickname }} | 29 | Fr
            </p>
            <p class="text-dull-secondary">WCIF friendly</p>
            <p class="text-dull-secondary">
              <span class="text-pop-primary">Roles: </span
              >{{ user['lazer.io/roles'] }}
            </p>
          </div>

          <div
            class="flex w-full mt-4 p-4 justify-around text-pop-primary border-pop-primary border-t-2 text-xl md:text-4xl"
          >
            <button class="hover:text-dull-secondary/70">
              <i class="fas fa-home"></i>
            </button>
            <button class="hover:text-pop-primary/70">
              <i class="fas fa-envelope"></i>
            </button>
            <button class="hover:text-pop-primary/70">
              <i class="fab fa-linkedin"></i>
            </button>
            <button class="hover:text-pop-primary/70">
              <i class="fas fa-phone"></i>
            </button>
          </div>
        </div>
      </div>
    </template>
  </PageDivisionLayout>
</template>

<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';
import { PageDivisionLayout } from '@am-ogs/vue-ui';

const { user, isLoading } = useAuth0();
</script>
