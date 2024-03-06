<script setup lang="ts">
import supabase from '@/config/supabaseClient';

definePageMeta({
  layout: 'login',
});

supabase.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_IN') {
    document.cookie = `supabaseToken=${session?.access_token}; path=/`;
  }
});

const signInWithGithub = async () => {
  await supabase.auth.signInWithOAuth({
    provider: 'github',
  });
};
</script>

<template>
  <div>
    <h1 class="text-lg">Login</h1>
    <button class="mt-4 rounded-md bg-black px-4 py-2 text-white" @click="signInWithGithub">
      Login with GitHub
    </button>
  </div>
</template>
