<script setup>
definePageMeta({
  middleware: 'auth'
})
const router = useRouter()
router.push('/u/dashboard')
</script>
<template>
  <div>
    {{ supaUser().value.id }}
  </div>
</template>