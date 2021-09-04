<template lang="pug">
v-container(fill-height)
  v-row(justify='center' align='center' no-gutters)
    v-col(xl='9' lg='9' md='10' sm='11' cols='11')
      v-row
        v-col(xl='5', lg='6', md='7', sm='9', cols='12')
          nuxt-child  
</template>

<script>
export default {
  layout: 'default'
}
</script>
