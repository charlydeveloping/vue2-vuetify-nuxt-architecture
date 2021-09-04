<template lang="pug">
 v-app-bar( fixed app flat)
    v-app-bar-nav-icon(@click='setDrawer')
    v-toolbar-title Title
</template>

<script lang="ts">
export default {
  methods: {
    setDrawer() {
      this.$store.dispatch('settings/drawerAction')
    }
  }
}
</script>

<style>

</style>