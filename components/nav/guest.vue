<script setup lang="ts">
const route = useRoute()

const navOptions = reactive({
  'home': {
    path: '/',
  },
  'log in': {
    path: '/auth/login',
  },
  'create account': {
    path: '/auth/signup',
  }
})
</script>
<template>
  <nav
    id="nav-guest"
    class="m-4 text-text"
  >
    <template
      v-for="(option, index) in navOptions"
      :key="index"
    >
      <NuxtLink
        v-if="option.path != route.path"
        :to="option.path"
        class="px-2 py-1 mx-1 rounded border capitalize
      bg-primary border-third
      "
      >
        <span class="capitalize">
          {{ index }}
        </span>
      </NuxtLink>
    </template>
  </nav>
</template>