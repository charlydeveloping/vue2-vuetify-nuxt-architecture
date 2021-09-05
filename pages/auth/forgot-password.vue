<template lang="pug">
v-card
  v-card-title olvido la contrasena
  v-card-text
    validation-observer(
      ref="observer",
      v-slot="{ handleSubmit }",
      v-show="!success.forgot_password",
      slim
    )
      v-form(@submit.prevent="handleSubmit(forgotPassword)")
        ui-input-text-field(
          :name="$t('auth.forgot_password.field.email')",
          autocomplete="username",
          autofocus
          rules="required|email",
          type="email",
          v-model="payload.email",
        )

        ui-button(type="submit", :loading="loading.form", block) {{ $t('send') }}

        ui-button-return.mt-3(block, text) {{ $t('return') }}
</template>

<script lang="ts">
export default {
  name: "auth",
  data() {
    return {
      errors: {},
      payload: {
        email: "",
      },
      loading: {
        form: false,
      },
      success: {
        forgot_password: false,
      },
    };
  },
  methods: {
    /**
     * forgotPassword
     * Make a request to request reset password
     * @return void
     */
    forgotPassword() {
      this.errors = {};
      this.loading.form = true;
    },
  },
};
</script>
