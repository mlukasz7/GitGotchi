<script setup lang="ts">
import supabase from '@/config/supabaseClient';

definePageMeta({
  layout: 'login',
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
    <button class="bg-black text-white rounded-md mt-4 py-2 px-4" @click="signInWithGithub">
      Login with GitHub
    </button>
  </div>
</template>
