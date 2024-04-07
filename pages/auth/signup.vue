<template>
  <form
    class="m-auto"
    method="POST"
    @submit.prevent="submit()"
  >
    <section class="border-l rounded">
      <FormInputText
        v-model="formData.email"
        type="email"
        label="email"
      />
      <div class="h-0.5 border-b border-white" />
      <FormInputText
        v-model="formData.emailConfirm"
        type="email"
        label="confirm email"
      />
      <div class="h-0.5 border-b border-white" />
      <FormInputPw
        v-model="formData.password"
        label="password"
      />
      <div class="h-0.5 border-b border-white" />
      <FormInputPw
        v-model="formData.passConfirm"
        label="confirm password"
      />
    </section>
    <h1
      v-if="errorMessage"
      class="text-red-700 border rounded m-4 text-center"
    >
      {{ errorMessage }}
    </h1>
    <div>
      <FormSubmitButton />
    </div>
  </form>
</template>

<script setup>
function validateEmail() {
  // letpattern = '/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/'
  // if (!pattern.test(formData.email)) alert('Invalid Email!')
  if (!formData.email || formData.email == '') alert('Invalid Email!')
  
}
function validatePassword() {
  // letpattern = '/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/'
  // if (!pattern.test(formData.password)) alert('Invalid Password!')
  if (!formData.password || formData.password == '') alert('Invalid Password!')
  
}

async function submit() {
  try {
    const { error } = await supaClient().auth.signUp({
      email: formData.email,
      password: formData.password,
    })
    if (error) throw error
    alert("Account created succesfully")
    const router = useRouter()
    router.push("/auth/login")
  } catch (error) {
    alert("Error creating account", error.message)
  }
}

const formData = reactive({
  email: '',
  password: '',
  passConfirm: '',
  emailConfirm: '',
})

const errorMessage = computed(() => {
  if (formData.password && formData.passConfirm != formData.password) return 'Passwords do not match.'
  if (formData.email && formData.emailConfirm != formData.email) return 'Emails do not match.'
  return null
})

</script>