<script setup lang="ts">

const navOptions = reactive({
  'home': {
    path: '/'
  },
  'my account': {
    path: '/u/dashboard',
  },
  'log out': {
    path: '/auth/logout',
  },
})
</script>
<template>
  <nav
    id="nav-auth"
    class="text-text p-4 flex justify-end"
  >
    <MenuDropdown
      :list="navOptions"
      class="relative"
    >
      <ImgUser
        class="size-12"
        :color="'#fff'"
      />
    </MenuDropdown>
  </nav>
</template>