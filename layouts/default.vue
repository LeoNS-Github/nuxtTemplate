<template>
  <section class="relative w-screen h-screen bg-background text-text flex flex-col">
    <NavAuth v-if="supaUser().value" />
    <NavGuest v-else />
    <slot />
  </section>
</template>