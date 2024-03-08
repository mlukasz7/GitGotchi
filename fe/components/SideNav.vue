<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';

import supabase from '@/config/supabaseClient';

const userAvatar = ref('');
const userName = ref('');

onBeforeMount(async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    userAvatar.value = user?.identities?.[0]?.identity_data?.avatar_url;
    userName.value = user?.identities?.[0]?.identity_data?.user_name;
  }
});
</script>

<template>
  <div v-if="userName" class="w-64 bg-slate-50 px-3 py-20">
    <div class="flex h-full flex-col">
      <div class="grow">
        <nav>
          <ul>
            <li>
              <NuxtLink class="text-black duration-150 ease-in hover:text-blue-500" to="/about">
                About
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <div>
          <a
            v-if="userName"
            class="group inline-flex items-center"
            :href="`https://github.com/${userName}`"
            target="_blank"
          >
            <div
              class="group-hover:ring-blue-5700 mr-2 size-7 overflow-hidden rounded-full ring-1 ring-black duration-300 ease-in-out group-hover:ring-blue-700"
            >
              <img
                v-if="userAvatar"
                class="rounded-full duration-300 ease-in-out group-hover:rotate-3 group-hover:scale-110"
                :src="userAvatar"
              />
            </div>
            <span class="truncate text-sm duration-300 ease-in-out group-hover:text-blue-700">
              {{ userName }}
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
