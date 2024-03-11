<script setup lang="ts">
import { onMounted, ref } from 'vue';

import supabase from '@/config/supabaseClient';

definePageMeta({
  middleware: ['auth'],
});

const repos = ref([]);

onMounted(() => {
  getRepos();
});

const getRepos = async () => {
  const { data } = await supabase.auth.getSession();
  const accessToken = data?.session?.access_token;

  const url = 'https://api.github.com/users/mlukasz7/repos';
  const response = await fetch(url, {
    headers: {
      Authorization: `Authorization: Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('Problem with downloading repositories');
  }

  const repositories = await response.json();
  repos.value = repositories;
};
</script>

<template>
  <h1 class="mb-4 text-2xl">Your repositories</h1>
  <a
    v-for="repo in repos"
    :key="repo.id"
    class="mb-4 block rounded-md border border-blue-900 bg-blue-50 p-2 duration-150 ease-in hover:bg-blue-200"
    :href="repo.html_url"
    target="_blank"
  >
    <h2>{{ repo?.name }}</h2>
    <p class="text-sm italic">{{ repo?.description }}</p>
  </a>
</template>
