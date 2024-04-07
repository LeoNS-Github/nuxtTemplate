// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    layoutTransition: { name: 'slide', mode: 'out-in' },
    pageTransition: { name: 'blur', mode: 'out-in' },
  },  
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: ["@nuxtjs/tailwindcss", '@nuxtjs/supabase', "@nuxt/image"],
  supabase: {
    redirect: false,
    redirectOptions: {
      login: '/auth/login',
      callback: '/auth/confirm',
      include: [],
      exclude: ['/auth/signup'],
      cookieRedirect: false,
    }
  }
})