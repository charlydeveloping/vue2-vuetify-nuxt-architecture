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
</template>

<script>
export default {
  data() {
    return {
      payload: {
        email: "",
        password: "",
      },
    };
  },
};
</script>

<style>
</style>