<template lang="pug">
v-navigation-drawer(:value="drawer", app, dark)
  v-container(mt-5)
    | drawer {{ drawer }}
    v-row(justify="center") 
      v-avatar(size="80")
        img(src="https://cdn.vuetifyjs.com/images/john.jpg", alt="alt")
    v-row(justify="center") 
      span.text-h6(style="color: white") Carlos Ramirez
      small(style="color: white") charlydeveloping@gmail.com

  v-list(nav="", dense="")
    v-subheader Menu
    v-list-item-group(
      v-model="group",
      active-class="deep-purple--text text--accent-4"
    )
      v-list-item
        v-list-item-icon
          v-icon mdi-home
        v-list-item-title Home
      v-list-item
        v-list-item-icon
          v-icon mdi-account
        v-list-item-title Account
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      clipped: false,
      group: null,
    };
  },
  computed: {
    ...mapGetters({
      drawer: "settings/drawerState",
    }),
  },
};
</script>