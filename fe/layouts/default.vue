<template>
  <div>
    <PageHeader />
    <main class="container mx-auto px-8 py-4">
      <slot />
    </main>
    <PageFooter />
  </div>
</template>

<style>
body {
  @apply bg-white;
}

.page-enter-active,
.page-leave-active {
  @apply transition-all duration-300;
}

.page-enter-from,
.page-leave-to {
  @apply opacity-0 blur-md -translate-x-6;
}
</style>
