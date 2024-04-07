<script setup>
if (supaUser().value) navigateTo('/u/dashboard')
async function submit() {
  try {
    const { data, error } = await supaClient().auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    })
    if (error) throw error
    console.log(data);
  } catch (e) {
    console.log(e.message)
  }
  const router = useRouter()
  router.push('/u/dashboard')
}

const formData = reactive({
  email: '',
  password: '',
})
</script>
<template>
  <form
    class="m-auto"
    method="POST"
    @submit.prevent="submit()"
  >
    <section class="border-l rounded">
      <FormInputText
        v-model="formData.email"
        label="email"
      />
      <div class="h-0.5 border-b border-white" />
      <FormInputPw
        v-model="formData.password"
        label="password"
      />
    </section>
    <FormSubmitButton />
  </form>
</template>