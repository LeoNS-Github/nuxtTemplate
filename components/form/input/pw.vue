<template>
  <div class="capitalize flex flex-col p-4">
    <label
      :for="props.label"
      class="font-mono text-lg"
    >{{ props.label }}:</label>
    <input
      v-model="model"
      :name="props.label"
      type="password" 
      required
      class="px-2 py-1 border-b 
      bg-transparent text-text
      focus-visible:outline-none"
    >
  </div>
</template>
<script setup>
const model = defineModel()
const props = defineProps({
  label: String
})
</script>