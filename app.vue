<script setup>
useHead({
    title: 'Template',
})
const route = useRoute()

const isEn = ref(0)

function updateLang() { isEn.value = isEn.value ? 0 : 1 }

provide("isEn", {
    isEn,
    updateLang
})

</script>
<template>
  <NuxtLoadingIndicator />
  <NuxtLayout :name="route.meta.layout">
    <NuxtPage />
  </NuxtLayout>
</template>