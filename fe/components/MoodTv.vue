<script setup lang="ts">
interface Props {
  mood?: 'happy' | 'burnout';
}

const props = withDefaults(defineProps<Props>(), {
  mood: 'happy',
});
</script>

<template>
  <div class="relative mx-auto my-4 size-[460px] rounded-3xl border-[30px] border-black bg-white">
    <img :src="`/moods/${props.mood}.webp`" />
    <p class="absolute inset-x-0 -bottom-6 text-center text-sm text-white">
      <b>Git</b>
      Gotchi
    </p>
  </div>
</template>
