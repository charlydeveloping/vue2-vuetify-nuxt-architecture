<template lang="pug">
v-icon(
  :color="valid ? 'success' : 'error'",
  v-text="valid ? 'fas fa-check' : 'fas fa-times'"
)
</template>

<script lang="ts">
export default {
  props: {
    valid: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
