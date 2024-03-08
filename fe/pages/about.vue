<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
});
</script>

<template>
  <MoodTv />
  <p v-for="i in new Array(20)" :key="i" class="my-4">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, tenetur.
  </p>
</template>
