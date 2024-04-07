<script setup>
const p = defineProps({
  list: Object
})
const route = useRoute().path
const isOpen = ref(false)
function menuToggle(){
  isOpen.value = !isOpen.value
}
</script>
<template>
  <section class="relative capitalize font-bold font-mono">
    <div @click="menuToggle()">
      <slot />
    </div>
    
    <ul
      class="absolute top-16 right-0 border border-white w-fit transition-all"
      :class="{'opacity-0 -translate-y-4': !isOpen}"
    >
      <template
        v-for="(item, index) in p.list"
        :key="index"
      >
        <NuxtLink
          v-if="route != item.path"
          :to="item.path"
          class="block whitespace-nowrap border-y p-2 bg-neutral-600 hover:bg-neutral-400 transition-all"
          :class="{'hidden':!isOpen}"
        >
          {{ index }}
        </NuxtLink>
      </template>
    </ul>
  </section>
</template>