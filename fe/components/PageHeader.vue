<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';

import supabase from '@/config/supabaseClient';

const user = ref();

onBeforeMount(async () => {
  const { data } = await supabase.auth.getUser();

  if (data.user) {
    user.value = data.user;
  }
});

async function signOut() {
  await supabase.auth.signOut();
  window.location.href = '/';
}
</script>

<template>
  <header class="absolute left-0 right-0 top-0 bg-gray-700">
    <div class="container mx-auto flex h-14 items-center justify-between px-8 py-4">
      <NuxtLink to="/" class="text-xl text-white">
        <span class="mr-1 font-bold tracking-wider">Git</span>
        <span class="tracking-widest">Gotchi</span>
      </NuxtLink>
      <div>
        <button
          v-if="user"
          class="ml-4 text-white duration-150 ease-in hover:text-red-400"
          @click="signOut"
        >
          Sign Out
        </button>
        <NuxtLink
          v-else
          class="ml-4 text-green-200 duration-150 ease-in hover:text-green-400"
          to="/login"
        >
          Sign In
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
