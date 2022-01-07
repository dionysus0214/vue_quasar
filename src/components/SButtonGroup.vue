<template>
  <q-btn-group
    class="s-btn-group"
    :class="{'no-hover' : noHover}"
    flat
    unelevated
  >
    <slot></slot>
  </q-btn-group>
</template>

<script>
export default ({
  props: {
    noHover: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="sass">
.s-btn-group
  .disabled
    border: none
    &::before
      border: 1px solid $grey-8

.no-hover
  .q-btn
    &.q-focusable:focus > .q-focus-helper,
    &.q-manual-focusable--focused > .q-focus-helper,
    &.q-hoverable:hover > .q-focus-helper
      background: none !important
      opacity: 0 !important
      &::before, &::after
        opacity: 0 !important
        background: none !important
</style>
