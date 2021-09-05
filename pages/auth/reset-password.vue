<template lang="pug">
v-card
  v-card-title Resetear la contrasena
  v-card-text
    validation-observer(
      ref="observer",
      v-slot="{ handleSubmit }",
      v-show="!success.reset_password",
      slim
    )
      v-form(@submit.prevent="handleSubmit(resetPassword)")
        ui-input-text-field(
          type="email",
          rules="required|email",
          v-model="payload.email",
          autocomplete="username",
          :name="$t('auth.reset_password.field.email')",
          autofocus
        )

        ui-input-text-field(
          v-model="payload.password",
          autocomplete="new-password",
          @click:append="toggleShowPassword()",
          :type="show_password ? 'text' : 'password'",
          :name="$t('auth.reset_password.field.new_password')",
          :append-icon="show_password ? 'fas fa-eye-slash' : 'fas fa-eye'",
          rules="required|password_strong|confirmed:password_confirmation"
        )

        ui-input-text-field(
          autocomplete="new-password",
          vid="password_confirmation",
          v-model="payload.password_confirmation",
          :type="show_password ? 'text' : 'password'",
          :name="$t('auth.reset_password.field.new_password_confirmation')"
        )

        ui-button(type="submit", :loading="loading.form", block)
          | {{ $t('auth.reset_password.restore_password') }}

    template(v-if="success.reset_password", #actions)
      ui-button(:to="localePath({ name: 'auth.sign-in' })", nuxt, block) {{ $t('auth.sign_in.login') }}
</template>

<script lang="ts">
export default {
  name: "auth",
  data() {
    return {
      errors: {},
      payload: {
        email: "",
        password: "",
        password_confirmation: "",
        token: this.$route.query.token,
      },
      loading: {
        form: false,
      },
      success: {
        reset_password: false,
      },
      show_password: false,
    };
  },
  methods: {
    /**
     * resetPassword
     * Make a request to reset password
     * @return void
     */
    resetPassword() {
      this.errors = {};
      this.loading.form = true;

    },
    /**
     * toggleShowPassword
     * Show or hide the password field content
     * @return void
     */
    toggleShowPassword() {
      this.show_password = !this.show_password;
    },
  },
};
</script>
