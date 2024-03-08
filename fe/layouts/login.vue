<template>
  <div>
    <PageHeader />
    <main class="container mx-auto px-8 py-4">
      <div class="mx-auto my-10 max-w-[280px] rounded-lg bg-gray-100 p-10 lg:max-w-[420px]">
        <slot />
      </div>
    </main>
  </div>
</template>
