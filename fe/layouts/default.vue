<template>
  <div class="h-svh">
    <PageHeader />
    <div class="flex">
      <SideNav />
      <main class="container mx-auto h-svh overflow-auto px-8 py-20">
        <slot />
      </main>
    </div>
    <PageFooter />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  @apply transition-all duration-300;
}

.page-enter-from,
.page-leave-to {
  @apply -translate-x-6 opacity-0 blur-md;
}
</style>
