<template>
  <PageDivisionLayout>
    <template #divisionTitle> Profile </template>
    <template #divisionContent>
      <div v-if="!isLoading">
        <!-- <pre
          class="mt-10 p-5 text-primary bg-pop-secondary/80 rounded-md overflow-x-auto"
          >{{ user }}</pre
        > -->
        <div class="flex flex-col m-24 px-12 items-center text-secondary bg-pop-secondary/80 rounded-md">
          <div class="w-36 h-36 -mt-20 border-8 rounded-full overflow-hidden border-pop-secondary">
            <img v-if="user.picture" :src="user.picture" alt="Profile Image" class="w-full h-full object-cover" />
          </div>

          <h2 class="mt-4 text-xl font-semibold text-pop-primary">{{ user.name }}</h2>
          <p class="mt-1 py-1 px-2 text-sm text-pop-secondary bg-primary/70 rounded-full">{{ user.email }}</p>
          <div class="w-3/4 mt-4 mb-12 text-center space-y-1 border-pop-primary border-t-2">
            <p class="mt-12 text-primary">@{{ user.nickname }} | 29 | Fr</p>
            <p class="text-primary">WCIF friendly</p>
            <p class="text-primary"><span class="text-pop-primary">Roles: </span>{{ user['lazer.io/roles'] }}</p>
          </div>

          <div class="flex w-full mt-4 p-4 justify-around text-pop-primary border-pop-primary border-t-2">
            <button class="hover:text-primary/70">
              <i class="fas fa-home text-4xl"></i>
            </button>
            <button class="hover:text-pop-primary/70">
              <i class="fas fa-envelope text-4xl"></i>
            </button>
            <button class="hover:text-pop-primary/70">
              <i class="fab fa-linkedin text-4xl"></i>
            </button>
            <button class="hover:text-pop-primary/70">
              <i class="fas fa-phone text-4xl"></i>
            </button>
          </div>
        </div>
      </div>
    </template>
  </PageDivisionLayout>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import PageDivisionLayout from "@/components/layout/PageDivisionLayout.vue";

const { user, isLoading } = useAuth0();
</script>
