<template>
  <PageDivisionLayout>
    <template #divisionTitle> {{ title }} </template>
    <template #divisionContent>
      <div class="flex flex-col">
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <KeepAlive>
            <form class="space-y-6" @submit.prevent="handleSubmit">
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
                <div class="mt-2">
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

              <div>
                <BaseSelectForEnums
                  v-model="user_role"
                  name="user_role"
                  label="Role"
                  :options="roles"
                  class="block w-full rounded-md border-0 pl-2 py-1.5 text-pop-primary shadow-sm ring-1 ring-inset ring-secondary placeholder:text-primary focus:ring-2 focus:ring-inset focus:ring-pop-secondary sm:text-sm sm:leading-6"
                  @change="handleSelectedRole"
                />
              </div>

              <div>
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-md px-2.5 py-2.5 text-sm font-semibold shadow-sm ring-1 ring-inset ring-secondary bg-pop-primary/70 hover:bg-pop-primary text-primary hover:text-pop-secondary disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-pop-primary/40"
                >
                  Send Invite
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
import { useAuth0 } from "@auth0/auth0-vue";

import PageDivisionLayout from "@/components/layout/PageDivisionLayout.vue";
import BaseSelectForEnums from "@/components/BaseSelectForEnums.vue";
import { UserRequests } from "@/helpers/auth/auth0.gateway";
import { ICreateUser, GeneralRoles } from "@/helpers/types";

const { user } = useAuth0();
defineProps<{
  title: string;
}>();

const user_role = ref(undefined);
const roles = Object.values(GeneralRoles);
const handleSelectedRole = () => {
  user_role.value = undefined;
};

const handleSubmit = async (event: SubmitEvent) => {
  const form_data = new FormData(event.target as HTMLFormElement);
  const user_details = Object.fromEntries(form_data);
  await UserRequests.orchestrateUserCreation(
    user_details as unknown as ICreateUser,
  );
};
</script>
