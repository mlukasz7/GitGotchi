<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';

import supabase from '@/config/supabaseClient';

const user = ref();
const userAvatar = ref('');

onBeforeMount(async () => {
  const { data } = await supabase.auth.getUser();

  if (data.user) {
    user.value = data.user;
    userAvatar.value = data.user?.identities?.[0]?.identity_data?.avatar_url;
  }
});

async function signOut() {
  await supabase.auth.signOut();
  window.location.href = '/';
}
</script>

<template>
  <header class="bg-gray-700">
    <div class="container mx-auto flex items-center justify-between px-8 py-4">
      <NuxtLink to="/" class="text-xl text-white">
        <span class="mr-1 font-bold tracking-wider">Git</span>
        <span class="tracking-widest">Gotchi</span>
      </NuxtLink>
      <div>
        <NuxtLink v-if="user" to="/about" class="text-base text-white">About</NuxtLink>
        <img v-if="user" class="ml-4 inline-block size-6 rounded-full" :src="userAvatar" />
        <button v-if="user" class="ml-4 text-white" @click="signOut">SignOut</button>
      </div>
    </div>
  </header>
</template>
