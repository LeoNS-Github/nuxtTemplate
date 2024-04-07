<script setup lang="ts">
async function logout() {
  try {
    
    const { error } = await supaClient().auth.signOut()
    if (error) throw error
    navigateTo('/auth/login')
  } catch (e) {
    console.log(e.message)
  }
}
logout()
</script>

<template>
  <div>Waiting for logout...</div>
</template>
