<template lang="pug">
v-card
  v-card-title login
  v-card-subtitle Inicio de sesion
  v-card-text
    v-form
      ui-input-text-field(
        autocomplete="username",
        autofocus
        name="email",
        rules="required|email",
        type="email",
        v-model="payload.email",
      )

      ui-input-text-field(
        autocomplete="password"
        autofocus
        name="email"
        rules="required|email"
        type="password"
        v-model="payload.email"
      )

      ui-button(
        type='submit'
        :loading='loading.form'
        block
      ) Login

      ui-button(
          color='info',
          :to='localePath({ name: "auth.forgot-password" })',
          nuxt,
          text,
          block
      ) Olvidó su contraseña
</template>

<script>
export default {
  middleware(context) {
    console.log({context})
  },
  data() {
    return {
      payload: {
        email: "",
        password: "",
      },
      loading: {
        form: false
      }
    };
  },
  methods: {
    async signIn() {
        try {
          this.errors = {}
          this.loading.form = true  
          this.$auth.loginWith('local', { data: this.payload })
            
        } catch (error) {
          this.loading.form = false
          this.errors = error.data.errors
        }


        
    },
  }
};
</script>

<style>
</style>