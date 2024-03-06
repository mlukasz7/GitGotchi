<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
});
</script>

<template>
  <h1>About GG</h1>
  <p class="my-4" v-for="i in new Array(100)" :key="i">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, tenetur.
  </p>
</template>
