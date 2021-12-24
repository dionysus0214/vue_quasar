<template>
  <q-tooltip
    class="bg-indigo-4 s-tooltip"
  >
    <slot></slot>
  </q-tooltip>
</template>

<script>
export default {
  props: {
    content: String,
  },
};
</script>

<style lang="sass">
.s-tooltip
  padding: 6px 20px
  border-radius: 6px
  >div
    line-height: 22px
    font-size: 14px
    font-weight: 500
</style>
