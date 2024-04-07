<script setup>
const props = defineProps({
    src: String
})
</script>
<template>
  <div class="aspect-square overflow-hidden">
    <NuxtImg 
      :src="`/img/${src}.png`"
      format="webp"
      fit="inside"
      :placeholder="[100, 100, 10, 5]"
      class="object"
    />
    <slot />
  </div>
</template>