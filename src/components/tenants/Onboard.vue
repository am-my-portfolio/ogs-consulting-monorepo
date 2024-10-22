<template>
  <PageDivisionLayout>
    <template #divisionTitle> Onboard </template>
    <template #divisionContent>
      <div class="flex flex-col">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm md:max-w-2xl">
          <h2
            class="mt-10 text-center text-xl font-bold leading-9 tracking-tight text-pop-primary"
          >
            Onboard new team, and add Team Admin user to it
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm md:max-w-full">
          <KeepAlive>
            <form class="space-y-6" @submit.prevent="handleSubmit">
              <div class="grid grid-cols-10 gap-6">
                <div id="config" class="col-span-10 md:col-span-5">
                  <fieldset
                    class="border border-solid rounded-md text-pop-secondary border-pop-primary p-8 mt-10"
                  >
                    <legend class="p-2">Team's Details</legend>
                    <div class="grid gap-x-2 gap-y-6">
                      <div>
                        <label
                          for="team_name"
                          class="block text-sm font-medium leading-6 text-pop-secondary"
                          >Team Name</label
                        >
                        <div class="mt-2">
                          <input
                            id="team_name"
                            name="team_name"
                            type="text"
                            autocomplete="team-name"
                            required
                            class="block w-full rounded-md border-0 pl-2 py-1.5 text-pop-primary shadow-sm ring-1 ring-inset ring-secondary placeholder:text-primary focus:ring-2 focus:ring-inset focus:ring-pop-secondary sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <div class="flex items-center justify-between">
                          <label
                            for="logo_url"
                            class="block text-sm font-medium leading-6 text-pop-secondary"
                            >Logo Url</label
                          >
                        </div>
                        <div class="mt-2">
                          <input
                            id="logo_url"
                            name="logo_url"
                            type="text"
                            autocomplete="logo-url"
                            required
                            class="block w-full rounded-md border-0 pl-2 py-1.5 text-pop-primary shadow-sm ring-1 ring-inset ring-secondary placeholder:text-primary focus:ring-2 focus:ring-inset focus:ring-pop-secondary sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <div class="flex items-center justify-between">
                          <label
                            for="team_size"
                            class="block text-sm font-medium leading-6 text-pop-secondary"
                            >Team Size</label
                          >
                        </div>
                        <div class="mt-12">
                          <!-- 
                          https://jsfiddle.net/0Lp1bqyv/
                          https://www.npmjs.com/package/@vueform/slider 
                          -->
                          <Slider
                            id="team_size"
                            name="team_size"
                            v-model="team_size"
                            :min="1"
                            :max="100"
                            class="bg-red-100"
                          />
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div id="config" class="col-span-10 md:col-span-5">
                  <fieldset
                    class="border border-solid rounded-md text-pop-secondary border-pop-primary p-8 mt-10"
                  >
                    <legend class="p-2">Team Admin's Details</legend>
                    <div class="grid gap-x-2 gap-y-6">
                      <div>
                        <label
                          for="email"
                          class="block text-sm font-medium leading-6 text-pop-secondary"
                          >Email address</label
                        >
                        <div class="mt-2">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autocomplete="email"
                            required
                            class="block w-full rounded-md border-0 pl-2 py-1.5 text-pop-primary shadow-sm ring-1 ring-inset ring-secondary placeholder:text-primary focus:ring-2 focus:ring-inset focus:ring-pop-secondary sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <div class="flex items-center justify-between">
                          <label
                            for="given_name"
                            class="block text-sm font-medium leading-6 text-pop-secondary"
                            >Given Name</label
                          >
                        </div>
                        <div class="mt-2">
                          <input
                            id="given_name"
                            name="given_name"
                            type="name"
                            autocomplete="given-name"
                            required
                            class="block w-full rounded-md border-0 pl-2 py-1.5 text-pop-primary shadow-sm ring-1 ring-inset ring-secondary placeholder:text-primary focus:ring-2 focus:ring-inset focus:ring-pop-secondary sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div>
                        <div class="flex items-center justify-between">
                          <label
                            for="family_name"
                            class="block text-sm font-medium leading-6 text-pop-secondary"
                            >Family Name</label
                          >
                        </div>
                        <div class="mt-5">
                          <input
                            id="family_name"
                            name="family_name"
                            type="name"
                            autocomplete="family-name"
                            required
                            class="block w-full rounded-md border-0 pl-2 py-1.5 text-pop-primary shadow-sm ring-1 ring-inset ring-secondary placeholder:text-primary focus:ring-2 focus:ring-inset focus:ring-pop-secondary sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>

              <div class="flex justify-center">
                <button
                  type="submit"
                  class="w-fit rounded-md bg-pop-primary/40 px-5 py-2.5 text-sm font-semibold text-pop-secondary shadow-sm ring-1 ring-inset ring-secondary hover:bg-pop-primary/80 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-pop-primary/40"
                >
                  Onboard New Team
                </button>
              </div>
            </form>
          </KeepAlive>
        </div>
      </div>
    </template>
  </PageDivisionLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Slider from "@vueform/slider";

import PageDivisionLayout from "@components/layout/PageDivisionLayout.vue";

const team_size = ref([10, 50]);

const handleSubmit = async (event: SubmitEvent) => {
  const form_data = new FormData(event.target as HTMLFormElement);
  const form_json = Object.fromEntries(form_data);
  const team_details = {
    ...form_json,
    team_size: team_size.value,
  };
  console.log(team_details);
  // await UserRequests.orchestrateUserCreation(
  //   userDetails as unknown as ICreateUser,
  // );
};
</script>

<style src="@vueform/slider/themes/default.css"></style>
