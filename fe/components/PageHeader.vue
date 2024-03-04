<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';

import supabase from '@/config/supabaseClient';

const user = ref(null);
const userAvatar = ref('');

onBeforeMount(async () => {
  const { data } = await supabase.auth.getUser();

  if (data.user) {
    user.value = data.user;
    userAvatar.value = data.user?.identities?.[0]?.identity_data?.avatar_url;
  }
});
</script>

<template>
  <header class="bg-gray-700">
    <div class="container mx-auto px-8 py-4 flex items-center justify-between">
      <NuxtLink to="/" class="text-white text-xl">
        <span class="font-bold tracking-wider mr-1">Git</span>
        <span class="tracking-widest">Gotchi</span>
      </NuxtLink>
      <div>
        <NuxtLink v-if="user" to="/about" class="text-white text-base">About</NuxtLink>
        <img v-if="user" class="size-6 rounded-full inline-block ml-4" :src="userAvatar" />
      </div>
    </div>
  </header>
</template>
