export default defineNuxtRouteMiddleware((to, _from) => {
  if (!supaUser().value) {
    navigateTo('/auth/login')
    return
  }
  navigateTo('/u')
})
