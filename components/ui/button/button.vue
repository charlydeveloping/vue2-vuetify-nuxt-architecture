<template lang="pug">
v-btn.text-none.font-weight-regular.ma-2(
    v-bind='$attrs',
    v-on='$listeners',
    :loading='$attrs.loading',
    :color='$attrs.color || "accent"',
    :disabled='$attrs.loading || $attrs.disabled'
)
    slot
</template>

<script lang="ts">

</script>
