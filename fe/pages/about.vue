<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
});
</script>

<template>
  <MoodTv />
  <p class="my-4" v-for="i in new Array(20)" :key="i">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, tenetur.
  </p>
</template>
