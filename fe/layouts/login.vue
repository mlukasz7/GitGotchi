<template>
  <div>
    <PageHeader />
    <main class="container mx-auto px-8 py-4">
      <div class="max-w-[280px] mx-auto my-10 bg-gray-100 p-10 rounded-lg lg:max-w-[420px]">
        <slot />
      </div>
    </main>
  </div>
</template>
